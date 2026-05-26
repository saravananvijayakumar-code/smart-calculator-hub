# Smart Calculator Hub - Google Cloud Deploy Script
# Simple deployment script for Google Cloud Platform

$PROJECT_ID         = "smartcalculatorhub"
$REGION            = "us-central1"
$SERVICE_NAME      = "calculator-backend"
$REPO_NAME         = "calculator-repo"
$FRONTEND_BUCKET   = "smartcalculatorhub-frontend"
$USER_EMAIL        = "saravananvijayakumar@quantumleapventures.com.au"

$IMAGE_PATH = "${REGION}-docker.pkg.dev/${PROJECT_ID}/${REPO_NAME}/${SERVICE_NAME}:latest"

Write-Host "Starting Smart Calculator Hub Deployment..."
Write-Host "Project: $PROJECT_ID"
Write-Host "Region: $REGION"
Write-Host "Service: $SERVICE_NAME"

# Check if gcloud is in PATH
$possiblePaths = @(
  "$env:LOCALAPPDATA\Google\Cloud SDK\google-cloud-sdk\bin",
  "C:\Program Files (x86)\Google\Cloud SDK\google-cloud-sdk\bin",
  "$env:USERPROFILE\AppData\Local\Google\Cloud SDK\google-cloud-sdk\bin"
)

$gcloudFound = $false
foreach ($path in $possiblePaths) {
  if (Test-Path "$path\gcloud.cmd") {
    $env:PATH = "$path;" + $env:PATH
    Write-Host "Google Cloud SDK found at: $path"
    $gcloudFound = $true
    break
  }
}

if (-not $gcloudFound) {
  Write-Host "Google Cloud SDK not found. Please install gcloud CLI first."
  exit 1
}

# Check if Docker is running
try {
  docker version | Out-Null
  Write-Host "Docker is running"
} catch {
  Write-Host "Docker is not running. Please start Docker Desktop."
  exit 1
}

# Set active project
Write-Host "Setting active project..."
gcloud config set project $PROJECT_ID

# Build Docker image and push
Write-Host "Building Docker image..."
docker build -t $IMAGE_PATH .

if ($LASTEXITCODE -eq 0) {
  Write-Host "Local build successful, pushing to registry..."
  docker push $IMAGE_PATH
  
  if ($LASTEXITCODE -ne 0) {
    Write-Host "Docker push failed. Using Cloud Build..."
    gcloud builds submit --tag "$IMAGE_PATH" --timeout="1800s"
  }
} else {
  Write-Host "Local build failed, using Cloud Build..."
  gcloud builds submit --tag "$IMAGE_PATH" --timeout="1800s"
}

# Deploy to Cloud Run
Write-Host "Deploying to Cloud Run..."
$envVars = "NODE_ENV=production,CORS_ORIGINS=https://smartcalculatorhubs.com"

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
  --set-env-vars="$envVars" `
  --set-secrets="DATABASE_URL=DATABASE_URL:latest" `
  --add-cloudsql-instances="smartcalculatorhub:us-central1:calculator-db" `
  --quiet

# Get deployment URL
$BACKEND_URL = gcloud run services describe $SERVICE_NAME --region=$REGION --format="value(status.url)"

Write-Host ""
Write-Host "Deployment Complete!"
Write-Host "Backend API: $BACKEND_URL"
Write-Host "Health Check: $BACKEND_URL/health"
Write-Host ""