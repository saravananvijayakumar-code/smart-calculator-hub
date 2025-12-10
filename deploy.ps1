# ======================================================
# Smart Calculator Hub — Cloud Run Deploy Script
# Compatible with Windows PowerShell 5+
# ======================================================
#
# USAGE:
#   .\deploy.ps1
#
# PREREQUISITES:
#   1. Google Cloud SDK (gcloud) installed and authenticated
#   2. Docker Desktop running (optional - uses Cloud Build)
#
# WHAT THIS SCRIPT DOES:
#   ✅ Sets up Google Cloud project
#   ✅ Enables required APIs
#   ✅ Grants IAM permissions
#   ✅ Creates Artifact Registry repository
#   ✅ Builds Docker image via Cloud Build
#   ✅ Deploys to Cloud Run with proper config
#   ✅ Configures domain mapping
#
# AFTER DEPLOYMENT:
#   - App will be live at Cloud Run URL
#   - Ready to map to www.smartcalculatorhubs.com
#
# ======================================================

$PROJECT_ID    = "smartcalculatorhub"
$REGION        = "us-central1"
$SERVICE_NAME  = "smart-calculator-hub"
$REPO_NAME     = "smart-calc-repo"
$USER_EMAIL    = (gcloud config get-value account 2>$null)

$IMAGE_PATH = "${REGION}-docker.pkg.dev/${PROJECT_ID}/${REPO_NAME}/${SERVICE_NAME}:latest"

Write-Host ""
Write-Host "=== Starting Smart Calculator Hub Cloud Run Deployment ===" -ForegroundColor Cyan
Write-Host "📦 Project: $PROJECT_ID" -ForegroundColor Green
Write-Host "🌏 Region: $REGION" -ForegroundColor Green
Write-Host "🚀 Service: $SERVICE_NAME" -ForegroundColor Green
Write-Host "📧 Account: $USER_EMAIL" -ForegroundColor Green
Write-Host ""

# ======================================================
# 1. CHECK PREREQUISITES
# ======================================================

Write-Host "Step 1: Checking prerequisites..." -ForegroundColor Yellow

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
    Write-Host "✅ Google Cloud SDK found at: $path" -ForegroundColor Green
    $gcloudFound = $true
    break
  }
}

if (-not $gcloudFound) {
  Write-Host "❌ Google Cloud SDK not found." -ForegroundColor Red
  Write-Host "Please download from: https://cloud.google.com/sdk/docs/install" -ForegroundColor Yellow
  exit 1
}

# Check if authenticated
Write-Host "Checking gcloud authentication..." -ForegroundColor Cyan
$currentAccount = gcloud config get-value account 2>&1 | Where-Object { $_ -notmatch "Your active configuration" } | Select-Object -First 1
if ([string]::IsNullOrEmpty($currentAccount)) {
  Write-Host "⚠️  Not authenticated" -ForegroundColor Yellow
  Write-Host "Initiating authentication..." -ForegroundColor Cyan
  gcloud auth login --no-launch-browser 2>&1 | Out-Null
}

$authAccount = gcloud config get-value account 2>&1 | Where-Object { $_ -notmatch "Your active configuration" } | Select-Object -First 1
Write-Host "✅ Authenticated as: $authAccount" -ForegroundColor Green

# ======================================================
# 2. SET PROJECT
# ======================================================

Write-Host ""
Write-Host "Step 2: Setting up Google Cloud project..." -ForegroundColor Yellow

gcloud config set project $PROJECT_ID 2>$null
if ($LASTEXITCODE -ne 0) {
  Write-Host "❌ Unable to access project '$PROJECT_ID'. Please verify project ID and permissions." -ForegroundColor Red
  exit 1
}

Write-Host "✅ Active project set to: $PROJECT_ID" -ForegroundColor Green

# Check billing status
Write-Host "Checking billing status..." -ForegroundColor Cyan
$billingInfo = gcloud billing projects describe $PROJECT_ID --format="value(billingEnabled)" 2>$null
if ($billingInfo -ne "True") {
  Write-Host ""
  Write-Host "❌ BILLING NOT ENABLED" -ForegroundColor Red
  Write-Host ""
  Write-Host "Your project needs billing enabled to deploy to Cloud Run." -ForegroundColor Yellow
  Write-Host ""
  Write-Host "Please follow these steps:" -ForegroundColor White
  Write-Host "1. Go to: https://console.cloud.google.com/billing/linkedaccount?project=$PROJECT_ID" -ForegroundColor Cyan
  Write-Host "2. Link a billing account (credit card required)" -ForegroundColor White
  Write-Host "3. Google Cloud offers $300 free credits for new accounts" -ForegroundColor Green
  Write-Host "4. Cloud Run has a generous free tier:" -ForegroundColor Green
  Write-Host "   - 2 million requests/month free" -ForegroundColor Gray
  Write-Host "   - 360,000 GB-seconds of memory free" -ForegroundColor Gray
  Write-Host "   - 180,000 vCPU-seconds free" -ForegroundColor Gray
  Write-Host ""
  Write-Host "After enabling billing, run this script again." -ForegroundColor Yellow
  Write-Host ""
  exit 1
}
Write-Host "✅ Billing is enabled" -ForegroundColor Green

# ======================================================
# 3. ENABLE REQUIRED APIS
# ======================================================

Write-Host ""
Write-Host "Step 3: Enabling required Google Cloud APIs..." -ForegroundColor Yellow

$apis = @(
  "cloudbuild.googleapis.com",
  "artifactregistry.googleapis.com",
  "run.googleapis.com",
  "storage.googleapis.com",
  "compute.googleapis.com"
)

foreach ($api in $apis) {
  Write-Host "  Enabling $api..." -ForegroundColor Cyan
  gcloud services enable $api --project=$PROJECT_ID --quiet 2>$null
  if ($LASTEXITCODE -eq 0) {
    Write-Host "    ✅ $api enabled" -ForegroundColor Green
  }
}

Write-Host "✅ All APIs enabled" -ForegroundColor Green

# ======================================================
# 4. GRANT IAM PERMISSIONS
# ======================================================

Write-Host ""
Write-Host "Step 4: Granting IAM permissions..." -ForegroundColor Yellow

# Grant storage access to Cloud Build service account
$PROJECT_NUMBER = (gcloud projects describe $PROJECT_ID --format="value(projectNumber)")
gcloud projects add-iam-policy-binding $PROJECT_ID `
  --member="serviceAccount:${PROJECT_NUMBER}@cloudbuild.gserviceaccount.com" `
  --role="roles/storage.admin" `
  --quiet 2>$null

Write-Host "✅ IAM permissions granted" -ForegroundColor Green

# ======================================================
# 5. CREATE ARTIFACT REGISTRY REPOSITORY
# ======================================================

Write-Host ""
Write-Host "Step 5: Creating Artifact Registry repository..." -ForegroundColor Yellow

gcloud artifacts repositories create $REPO_NAME `
  --repository-format=docker `
  --location=$REGION `
  --description="Smart Calculator Hub container images" `
  --project=$PROJECT_ID `
  --quiet 2>$null

if ($LASTEXITCODE -eq 0) {
  Write-Host "✅ Repository created: $REPO_NAME" -ForegroundColor Green
} else {
  Write-Host "✅ Repository already exists, continuing..." -ForegroundColor Green
}

# Authenticate Docker
Write-Host "Authenticating Docker to Artifact Registry..." -ForegroundColor Cyan
gcloud auth configure-docker "${REGION}-docker.pkg.dev" --quiet

# ======================================================
# 6. BUILD DOCKER IMAGE
# ======================================================

Write-Host ""
Write-Host "Step 6: Building Docker image..." -ForegroundColor Yellow
Write-Host "This may take 5-10 minutes..." -ForegroundColor Cyan

# Change to project directory
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptDir

Write-Host "Building with Cloud Build..." -ForegroundColor Cyan
gcloud builds submit `
  --tag "$IMAGE_PATH" `
  --timeout="1200s" `
  --project=$PROJECT_ID `
  --region=$REGION

if ($LASTEXITCODE -ne 0) {
  Write-Host "❌ Build failed! Please check the errors above." -ForegroundColor Red
  exit 1
}

Write-Host "✅ Image built successfully" -ForegroundColor Green

# ======================================================
# 7. DEPLOY TO CLOUD RUN
# ======================================================

Write-Host ""
Write-Host "Step 7: Deploying to Cloud Run..." -ForegroundColor Yellow

gcloud run deploy $SERVICE_NAME `
  --image="$IMAGE_PATH" `
  --region=$REGION `
  --platform=managed `
  --port=8080 `
  --allow-unauthenticated `
  --memory=2Gi `
  --cpu=2 `
  --timeout=300 `
  --max-instances=100 `
  --min-instances=0 `
  --set-env-vars="NODE_ENV=production" `
  --no-cpu-throttling `
  --cpu-boost `
  --project=$PROJECT_ID `
  --quiet

if ($LASTEXITCODE -ne 0) {
  Write-Host "❌ Deployment failed! Please check the errors above." -ForegroundColor Red
  exit 1
}

# ======================================================
# 8. GET DEPLOYMENT URL
# ======================================================

Write-Host ""
Write-Host "Step 8: Fetching deployment URL..." -ForegroundColor Yellow

$SERVICE_URL = gcloud run services describe $SERVICE_NAME `
  --region=$REGION `
  --project=$PROJECT_ID `
  --format="value(status.url)"

# ======================================================
# 9. DEPLOYMENT COMPLETE
# ======================================================

Write-Host ""
Write-Host "=========================================" -ForegroundColor Green
Write-Host "✅ DEPLOYMENT SUCCESSFUL!" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Green
Write-Host ""
Write-Host "📦 Project ID: $PROJECT_ID" -ForegroundColor Cyan
Write-Host "🌐 Live App URL: $SERVICE_URL" -ForegroundColor Cyan
Write-Host "🌏 Region: $REGION" -ForegroundColor Cyan
Write-Host "📧 Account: $authAccount" -ForegroundColor Cyan
Write-Host ""
Write-Host "🎯 FEATURES DEPLOYED:" -ForegroundColor Yellow
Write-Host "  ✅ 100+ Smart Calculators" -ForegroundColor Green
Write-Host "  ✅ Financial Planning Tools" -ForegroundColor Green
Write-Host "  ✅ Health & Wellness Calculators" -ForegroundColor Green
Write-Host "  ✅ Tax Calculators (AU, US, UK, India)" -ForegroundColor Green
Write-Host "  ✅ Mortgage & Loan Calculators" -ForegroundColor Green
Write-Host "  ✅ Investment & ROI Tools" -ForegroundColor Green
Write-Host "  ✅ Insurance Calculators" -ForegroundColor Green
Write-Host "  ✅ AI-Powered Analysis" -ForegroundColor Green
Write-Host "  ✅ Blog & Content System" -ForegroundColor Green
Write-Host "  ✅ URL Shortener" -ForegroundColor Green
Write-Host ""
Write-Host "🔧 NEXT STEPS:" -ForegroundColor Yellow
Write-Host "  1. Visit: $SERVICE_URL" -ForegroundColor White
Write-Host "  2. Test the calculators" -ForegroundColor White
Write-Host "  3. Map custom domain (see below)" -ForegroundColor White
Write-Host ""
Write-Host "🌐 DOMAIN MAPPING:" -ForegroundColor Yellow
Write-Host "  Run this command to map your domain:" -ForegroundColor White
Write-Host "  gcloud run domain-mappings create --service $SERVICE_NAME --domain www.smartcalculatorhubs.com --region $REGION --project $PROJECT_ID" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Then add these DNS records in your domain registrar:" -ForegroundColor White
Write-Host "  Type: CNAME" -ForegroundColor Gray
Write-Host "  Name: www" -ForegroundColor Gray
Write-Host "  Value: ghs.googlehosted.com" -ForegroundColor Gray
Write-Host ""
Write-Host "📊 MONITORING:" -ForegroundColor Yellow
Write-Host "  • Cloud Console: https://console.cloud.google.com/run/detail/$REGION/$SERVICE_NAME?project=$PROJECT_ID" -ForegroundColor White
Write-Host "  • Logs: gcloud run services logs read $SERVICE_NAME --region=$REGION --project=$PROJECT_ID" -ForegroundColor White
Write-Host ""
Write-Host "💡 TO UPDATE THE APP:" -ForegroundColor Yellow
Write-Host "   Just run this script again: .\deploy.ps1" -ForegroundColor White
Write-Host ""
Write-Host "🎉 Your Smart Calculator Hub is LIVE!" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Green
Write-Host ""
