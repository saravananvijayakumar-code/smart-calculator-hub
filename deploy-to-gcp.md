# Deploy to Google Cloud Platform

## Prerequisites

1. Install Google Cloud SDK: https://cloud.google.com/sdk/docs/install
2. Authenticate: `gcloud auth login`
3. Set your project: `gcloud config set project YOUR_PROJECT_ID`

## One-Time Setup

### 1. Enable Required APIs
```bash
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable containerregistry.googleapis.com
```

### 2. Create Cloud SQL PostgreSQL Database (for Encore)
```bash
gcloud sql instances create smart-calc-db \
  --database-version=POSTGRES_15 \
  --tier=db-f1-micro \
  --region=us-central1

gcloud sql databases create smartcalc --instance=smart-calc-db

gcloud sql users set-password postgres \
  --instance=smart-calc-db \
  --password=YOUR_SECURE_PASSWORD
```

### 3. Get Database Connection Details
```bash
gcloud sql instances describe smart-calc-db --format="value(connectionName)"
```

## Manual Deployment (First Time)

### Option A: Build and Deploy with Docker
```bash
# Build Docker image
docker build -t gcr.io/YOUR_PROJECT_ID/smart-calculator-hub:latest .

# Push to Google Container Registry
docker push gcr.io/YOUR_PROJECT_ID/smart-calculator-hub:latest

# Deploy to Cloud Run
gcloud run deploy smart-calculator-hub \
  --image gcr.io/YOUR_PROJECT_ID/smart-calculator-hub:latest \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 8080 \
  --memory 2Gi \
  --cpu 2 \
  --max-instances 100 \
  --set-env-vars NODE_ENV=production
```

### Option B: Use Cloud Build (Automated)
```bash
# Submit build to Cloud Build (uses cloudbuild.yaml)
gcloud builds submit --config cloudbuild.yaml .
```

## Continuous Deployment (CI/CD)

### Setup Cloud Build Trigger (Auto-deploy on GitHub push)
```bash
# Connect GitHub repository
gcloud builds triggers create github \
  --repo-name=smart-calculator-hub \
  --repo-owner=saravananvijayakumar-code \
  --branch-pattern="^main$" \
  --build-config=cloudbuild.yaml
```

Now every push to `main` branch will automatically deploy!

## Map Custom Domain

### 1. Deploy and Get Cloud Run URL
After deployment, you'll get a URL like: `https://smart-calculator-hub-xxxxx-uc.a.run.app`

### 2. Map Custom Domain in Cloud Run
```bash
gcloud run domain-mappings create \
  --service smart-calculator-hub \
  --domain www.smartcalculatorhubs.com \
  --region us-central1
```

### 3. Update DNS Records
Cloud Run will show you DNS records to add. In your domain registrar:

**For www.smartcalculatorhubs.com:**
```
Type: CNAME
Name: www
Value: ghs.googlehosted.com
```

**For root domain (smartcalculatorhubs.com):**
```
Type: A
Name: @
Value: [IP addresses provided by Cloud Run]
```

### 4. Verify Domain
```bash
gcloud run domain-mappings list --region us-central1
```

SSL certificate will be auto-provisioned (takes 15-60 minutes).

## Environment Variables

If you need to add secrets (API keys, etc.):

```bash
gcloud run services update smart-calculator-hub \
  --update-env-vars OPENAI_API_KEY=your-key-here \
  --region us-central1
```

Or use Secret Manager:
```bash
echo -n "your-api-key" | gcloud secrets create openai-key --data-file=-

gcloud run services update smart-calculator-hub \
  --update-secrets OPENAI_API_KEY=openai-key:latest \
  --region us-central1
```

## Monitoring & Logs

View logs:
```bash
gcloud run services logs read smart-calculator-hub --region us-central1 --limit 50
```

View in console:
https://console.cloud.google.com/run

## Cost Optimization

- Cloud Run: Pay only for requests (free tier: 2M requests/month)
- Cloud SQL: Can use db-f1-micro (free tier eligible)
- Cloud Build: 120 build-minutes/day free

## Troubleshooting

If build fails, check:
1. Encore app compiles locally: `encore run`
2. Frontend builds: `cd frontend && npm run build`
3. Docker builds locally: `docker build -t test .`
4. Check Cloud Build logs: `gcloud builds log [BUILD_ID]`
