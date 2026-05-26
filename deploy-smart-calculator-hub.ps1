# ======================================================
# Smart Calculator Hub — Google Cloud Deploy Script
# Compatible with Windows PowerShell 5+
# ======================================================
#
# USAGE:
#   .\deploy-smart-calculator-hub.ps1
#   # If using PowerShell Core or from another shell, use:
#   pwsh deploy-smart-calculator-hub.ps1
#
# PREREQUISITES:
#   1. Google Cloud SDK (gcloud) installed and authenticated
#   2. Docker Desktop running
#   3. Update OPENAI_API_KEY below with your actual key
#
# WHAT THIS SCRIPT DOES:
#   ✅ Builds Docker image locally (faster)
#   ✅ Pushes to Google Artifact Registry
#   ✅ Deploys to Cloud Run with proper config
#   ✅ Sets up all permissions and APIs
#   ✅ Configures Cloud SQL database connection
#   ✅ Deploys frontend to Cloud Storage
#
# AFTER DEPLOYMENT:
#   - Backend API: https://calculator-backend-*.run.app
#   - Frontend: https://smartcalculatorhub-frontend.web.app
#   - 64+ calculators with AI analysis
#   - Blog system with automated content
#
# ======================================================

$PROJECT_ID         = "smartcalculatorhub"
$REGION            = "us-central1"
$SERVICE_NAME      = "calculator-backend"
$REPO_NAME         = "calculator-repo"
$FRONTEND_BUCKET   = "smartcalculatorhub-frontend"
$DB_INSTANCE       = "calculator-db"
$USER_EMAIL        = "saravananvijayakumar@quantumleapventures.com.au"

# Environment Variables (Update these with your actual values)
$OPENAI_API_KEY = "your-openai-api-key-here"  # Update with actual key
$ADSENSE_PUB_ID = "ca-pub-7271075626732183"
$CORS_ORIGINS   = "https://smartcalculatorhubs.com,https://www.smartcalculatorhubs.com"

$IMAGE_PATH = "${REGION}-docker.pkg.dev/${PROJECT_ID}/${REPO_NAME}/${SERVICE_NAME}:latest"

Write-Host ""
Write-Host "=== Starting Smart Calculator Hub Google Cloud Deployment ==="
Write-Host "📦 Project: $PROJECT_ID"
Write-Host "🌏 Region: $REGION"
Write-Host "🚀 Backend Service: $SERVICE_NAME"
Write-Host "🗄️  Database: $DB_INSTANCE"
Write-Host "🌐 Frontend Bucket: $FRONTEND_BUCKET"
Write-Host ""

# Check if gcloud is installed
$possiblePaths = @(
  "$env:LOCALAPPDATA\Google\Cloud SDK\google-cloud-sdk\bin",
  "C:\Program Files (x86)\Google\Cloud SDK\google-cloud-sdk\bin",
  "$env:USERPROFILE\AppData\Local\Google\Cloud SDK\google-cloud-sdk\bin"
)

$gcloudFound = $false
foreach ($path in $possiblePaths) {
  if (Test-Path "$path\gcloud.cmd") {
    $env:PATH = "$path;" + $env:PATH
    Write-Host "✅ Google Cloud SDK found at: $path"
    $gcloudFound = $true
    break
  }
}

if (-not $gcloudFound) {
  Write-Host "❌ Google Cloud SDK not found. Please install gcloud CLI first."
  exit 1
}

# Check if Docker is running
try {
  docker version | Out-Null
  Write-Host "✅ Docker is running"
} catch {
  Write-Host "❌ Docker is not running. Please start Docker Desktop."
  exit 1
}

# Check if Bun is available
$bunPath = "$env:USERPROFILE\.bun\bin"
if (Test-Path "$bunPath\bun.exe") {
  $env:PATH = "$bunPath;" + $env:PATH
  Write-Host "✅ Bun package manager found"
} else {
  Write-Host "⚠️  Bun not found, using npm for builds"
}

# --------------------------------------------
Write-Host "Setting active project..."
gcloud config set project $PROJECT_ID
if ($LASTEXITCODE -ne 0) {
  Write-Host "❌ Failed to set project. Please check your gcloud authentication."
  exit 1
}

# --------------------------------------------
Write-Host "Enabling required Google Cloud APIs..."
$apis = @(
  "cloudbuild.googleapis.com",
  "artifactregistry.googleapis.com",
  "run.googleapis.com",
  "storage.googleapis.com",
  "sql-component.googleapis.com",
  "sqladmin.googleapis.com",
  "secretmanager.googleapis.com",
  "compute.googleapis.com"
)

foreach ($api in $apis) {
  Write-Host "Enabling $api..."
  gcloud services enable $api --quiet
}

# --------------------------------------------
Write-Host "Granting IAM permissions..."
$roles = @(
  "roles/serviceusage.serviceUsageConsumer",
  "roles/storage.admin",
  "roles/cloudbuild.builds.editor",
  "roles/run.admin",
  "roles/artifactregistry.admin",
  "roles/cloudsql.admin",
  "roles/secretmanager.admin"
)

foreach ($role in $roles) {
  try {
    gcloud projects add-iam-policy-binding $PROJECT_ID `
      --member="user:$USER_EMAIL" `
      --role=$role `
      --quiet
  } catch {
    Write-Host "Skipped or already granted: $role"
  }
}

# --------------------------------------------
Write-Host "Creating Artifact Registry repository (if not exists)..."
try {
  gcloud artifacts repositories create $REPO_NAME `
    --repository-format=docker `
    --location=$REGION `
    --description="Smart Calculator Hub container images" `
    --quiet 2>$null
  Write-Host "Repository created or already exists."
} catch {
  Write-Host "Repository already exists, continuing..."
}

# --------------------------------------------
Write-Host "Authenticating Docker to Artifact Registry..."
gcloud auth configure-docker "$REGION-docker.pkg.dev" --quiet

# --------------------------------------------
Write-Host "Building frontend..."
Push-Location frontend
try {
  if (Get-Command bun -ErrorAction SilentlyContinue) {
    Write-Host "Using Bun to build frontend..."
    bun install
    bun run build
  } else {
    Write-Host "Using npm to build frontend..."
    npm install
    npm run build
  }
  
  if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Frontend build successful"
  } else {
    Write-Host "❌ Frontend build failed"
    Pop-Location
    exit 1
  }
} finally {
  Pop-Location
}

# --------------------------------------------
Write-Host "Deploying frontend to Cloud Storage..."
try {
  gsutil -m rsync -r -d frontend/dist/ gs://$FRONTEND_BUCKET/
  
  # Set cache headers for static assets
  gsutil -m setmeta -h "Cache-Control:public, max-age=31536000, immutable" gs://$FRONTEND_BUCKET/assets/**
  gsutil -m setmeta -h "Cache-Control:public, max-age=3600, must-revalidate" gs://$FRONTEND_BUCKET/index.html
  
  Write-Host "✅ Frontend deployed to Cloud Storage"
} catch {
  Write-Host "❌ Frontend deployment failed: $_"
}

# --------------------------------------------
Write-Host "Building and pushing Docker image for backend..."
Write-Host "Building locally first..."
docker build -t $IMAGE_PATH .

if ($LASTEXITCODE -eq 0) {
  Write-Host "✅ Local build successful, pushing to registry..."
  docker push $IMAGE_PATH
  
  if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Docker push failed. Trying Cloud Build as fallback..."
    gcloud builds submit `
      --tag "$IMAGE_PATH" `
      --timeout="1800s"
  } else {
    Write-Host "✅ Docker push successful"
  }
} else {
  Write-Host "❌ Local build failed, using Cloud Build..."
  gcloud builds submit `
    --tag "$IMAGE_PATH" `
    --timeout="1800s"
}

# --------------------------------------------
Write-Host "Getting database connection details..."
$DB_CONNECTION = gcloud sql instances describe $DB_INSTANCE --format="value(connectionName)"

# --------------------------------------------
Write-Host "Deploying backend to Cloud Run..."
$envVars = "NODE_ENV=production,CORS_ORIGINS=$CORS_ORIGINS,ADSENSE_PUBLISHER_ID=$ADSENSE_PUB_ID"

# Deploy with secrets and Cloud SQL connection
gcloud run deploy $SERVICE_NAME `
  --image="$IMAGE_PATH" `
  --region=$REGION `
  --platform=managed `
  --port=8080 `
  --allow-unauthenticated `
  --memory=2Gi `
  --cpu=2 `
  --timeout=300 `
  --min-instances=1 `
  --max-instances=10 `
  --add-cloudsql-instances="$DB_CONNECTION" `
  --set-env-vars="$envVars" `
  --set-secrets="DATABASE_URL=DATABASE_URL:latest" `
  --quiet

if ($LASTEXITCODE -ne 0) {
  Write-Host "❌ Backend deployment failed"
  exit 1
}

# --------------------------------------------
Write-Host "Fetching deployment URLs..."
$BACKEND_URL = gcloud run services describe $SERVICE_NAME --region=$REGION --format="value(status.url)"
$FRONTEND_URL = "https://storage.googleapis.com/$FRONTEND_BUCKET/index.html"

# --------------------------------------------
Write-Host "Testing backend health..."
try {
  $healthResponse = Invoke-WebRequest -Uri "$BACKEND_URL/health" -TimeoutSec 30
  if ($healthResponse.StatusCode -eq 200) {
    Write-Host "✅ Backend health check passed"
  } else {
    Write-Host "⚠️  Backend health check returned: $($healthResponse.StatusCode)"
  }
} catch {
  Write-Host "⚠️  Backend health check failed: $_"
}

Write-Host ""
Write-Host "========================================="
Write-Host "✅ Smart Calculator Hub Deployment Complete!"
Write-Host "🔧 Backend API: $BACKEND_URL"
Write-Host "🌐 Frontend: $FRONTEND_URL"
Write-Host "🔍 Health Check: $BACKEND_URL/health"
Write-Host "🗄️  Database: Cloud SQL PostgreSQL"
Write-Host "📊 Features Available:"
Write-Host "   • 64+ Calculators (Financial, Health, etc.)"
Write-Host "   • AI-Powered Analysis"
Write-Host "   • Blog System with Auto-generation"
Write-Host "   • Progressive Web App"
Write-Host "   • AdSense Integration"
Write-Host "========================================="
Write-Host ""

if ($OPENAI_API_KEY -eq "your-openai-api-key-here") {
  Write-Host "⚠️  IMPORTANT: Update OPENAI_API_KEY in this script for AI features"
  Write-Host "   Then update the secret: echo 'sk-your-key' | gcloud secrets create OPENAI_API_KEY --data-file=-"
  Write-Host ""
}

Write-Host "💡 To update in the future:"
Write-Host "   .\deploy-smart-calculator-hub.ps1"
Write-Host ""
Write-Host "🔧 To set up custom domain and HTTPS:"
Write-Host "   1. Reserve static IP: gcloud compute addresses create calculator-ip --global"
Write-Host "   2. Create load balancer with SSL certificate"
Write-Host "   3. Point DNS to the IP address"
Write-Host ""