# Deploy to Google Cloud
# Project: smartcalculatorhub

Write-Host "🚀 Deploying Smart Calculator Hub to Google Cloud..." -ForegroundColor Cyan

# Set project
Write-Host "`n📦 Setting GCP project..." -ForegroundColor Yellow
gcloud config set project smartcalculatorhub

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to set project. Please run 'gcloud auth login' first." -ForegroundColor Red
    exit 1
}

# Enable required APIs (safe to run multiple times)
Write-Host "`n🔧 Enabling required Google Cloud APIs..." -ForegroundColor Yellow
gcloud services enable cloudbuild.googleapis.com run.googleapis.com containerregistry.googleapis.com

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to enable APIs" -ForegroundColor Red
    exit 1
}

# Build and Deploy
Write-Host "`n🏗️  Building and deploying to Cloud Run..." -ForegroundColor Yellow
Write-Host "   This will take 5-10 minutes..." -ForegroundColor Gray

gcloud builds submit --config cloudbuild.yaml .

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ Deployment successful!" -ForegroundColor Green
    Write-Host "`nYour app is now live at:" -ForegroundColor Cyan
    
    # Get the service URL
    $serviceUrl = gcloud run services describe smart-calculator-hub --region us-central1 --format="value(status.url)" 2>$null
    if ($serviceUrl) {
        Write-Host "   $serviceUrl" -ForegroundColor White
    }
    
    Write-Host "`nTo map your custom domain, run:" -ForegroundColor Yellow
    Write-Host "   gcloud run domain-mappings create --service smart-calculator-hub --domain www.smartcalculatorhubs.com --region us-central1" -ForegroundColor White
} else {
    Write-Host "`n❌ Deployment failed. Check the errors above." -ForegroundColor Red
    exit 1
}
