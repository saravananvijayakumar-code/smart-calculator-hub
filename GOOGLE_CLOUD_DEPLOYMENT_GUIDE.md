# Google Cloud Deployment Guide
## Smart Calculator Hub - Complete Deployment Strategy

---

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Architecture Analysis](#architecture-analysis)
4. [Google Cloud Service Recommendations](#google-cloud-service-recommendations)
5. [Deployment Options](#deployment-options)
6. [Step-by-Step Deployment](#step-by-step-deployment)
7. [Configuration Requirements](#configuration-requirements)
8. [Cost Estimation](#cost-estimation)
9. [Migration Strategy](#migration-strategy)
10. [Monitoring & Maintenance](#monitoring--maintenance)

---

## 📊 Project Overview

### Application Type
**Full-Stack Calculator Hub Platform** with:
- **64+ Calculators** (Financial, Health, Insurance, Tax, etc.)
- **AI-Powered Analysis** using OpenAI
- **Blog System** with automated content generation
- **Progressive Web App** with offline capabilities
- **AdSense Integration** for monetization
- **Multi-region Support** (US, UK, AU, India)

### Current Infrastructure
- **Platform**: Encore.dev (Platform as a Service)
- **Domain**: smartcalculatorhubs.com
- **Database**: PostgreSQL (managed by Encore)
- **Frontend**: Static React SPA
- **Backend**: Encore.ts microservices

### Key Metrics
- **100+ Routes** across frontend
- **10 Backend Services** (microservices architecture)
- **8 Database Migrations** with auto-sync
- **~3.2 MB** bundle size (1.2 MB gzipped)
- **Build Memory**: 512 MB (low-memory mode) or 4 GB (full optimization)

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: React 18.2.0 with TypeScript
- **Build Tool**: Vite 4.1.0
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Routing**: React Router v6
- **State Management**: Zustand + React Context
- **PWA**: Workbox service workers
- **Package Manager**: Bun

### Backend
- **Runtime**: Encore.ts (Node.js-based)
- **Language**: TypeScript 5.8.3
- **API Style**: Type-safe RPC-style endpoints
- **Database ORM**: Encore SQLDatabase
- **Migration System**: Encore migrations with auto-sync
- **Authentication**: Custom auth service

### Backend Services
1. **auth** - User authentication
2. **blog-v2** - Blog CMS with auto-generation
3. **ai-analysis** - OpenAI integration
4. **exchange** - Currency/Forex rates with caching
5. **health** - System health checks
6. **pageviews** - Analytics tracking
7. **pwa-stats** - PWA installation metrics
8. **user** - User management
9. **web** - Static file serving, sitemap, robots.txt, AdSense
10. **vision** - Image analysis (nutrition, pet, decor)

### Database
- **Type**: PostgreSQL 15.14
- **Schema**: 
  - Blog tables (posts, categories, tags, sources)
  - Exchange rate cache
  - PWA installation tracking
  - Pageviews analytics
  - URL shortener
  - User preferences
- **Migrations**: 25+ migrations with gap-detection system

### Third-Party Integrations
- **OpenAI API** - AI analysis features
- **Google AdSense** - Monetization (pub ID: ca-pub-7271075626732183)
- **Ezoic** - Additional ad optimization
- **ExchangeRate.host** - Currency conversion
- **Google Search Console** - SEO indexing
- **Google Indexing API** - Automated sitemap submissions

---

## 🏗️ Architecture Analysis

### Current Architecture (Encore.dev)
```
┌─────────────────────────────────────────────────────────┐
│                    Client Browser                        │
│              (smartcalculatorhubs.com)                   │
└────────────────────┬────────────────────────────────────┘
                     │
         ┌───────────┴────────────┐
         │                        │
         ▼                        ▼
┌─────────────────┐      ┌─────────────────┐
│  Frontend SPA   │      │  Backend API    │
│  (React/Vite)   │      │  (Encore.ts)    │
│  Static Assets  │      │  10 Services    │
└─────────────────┘      └────────┬────────┘
                                  │
                         ┌────────┴────────┐
                         │   PostgreSQL    │
                         │   (Managed)     │
                         └─────────────────┘
```

### Recommended Google Cloud Architecture
```
                        ┌──────────────────────────────┐
                        │   Cloud CDN + Load Balancer  │
                        │  (Global, SSL, DDoS protect) │
                        └──────────────┬───────────────┘
                                       │
                    ┌──────────────────┴──────────────────┐
                    │                                     │
           ┌────────▼────────┐                  ┌────────▼────────┐
           │  Cloud Storage  │                  │   Cloud Run     │
           │  (Static SPA)   │                  │  (Backend API)  │
           │  - Frontend     │                  │  - 10 Services  │
           │  - Assets       │                  │  - Auto-scale   │
           └─────────────────┘                  └────────┬────────┘
                                                         │
                                                ┌────────▼────────┐
                                                │  Cloud SQL      │
                                                │  (PostgreSQL)   │
                                                │  - HA enabled   │
                                                └─────────────────┘
```

### Key Architectural Decisions

#### Why Cloud Run for Backend?
✅ **Containerized microservices** - Perfect for Encore.ts services
✅ **Auto-scaling** - Handle traffic spikes (0 to 1000+ instances)
✅ **Pay per use** - Cost-effective for variable traffic
✅ **Fully managed** - No server maintenance
✅ **Multi-region deployment** - Low latency globally

#### Why Cloud Storage + CDN for Frontend?
✅ **Static SPA hosting** - React builds perfectly suited
✅ **Global CDN** - Fast content delivery worldwide
✅ **Cost-effective** - ~$0.026/GB for storage
✅ **High availability** - 99.95% SLA
✅ **Version control** - Easy rollbacks

#### Why Cloud SQL?
✅ **Managed PostgreSQL** - Compatible with Encore migrations
✅ **Automatic backups** - Point-in-time recovery
✅ **High availability** - Regional failover
✅ **Connection pooling** - Efficient resource usage
✅ **Read replicas** - Scale read-heavy workloads

---

## 🚀 Google Cloud Service Recommendations

### Primary Services

| Service | Purpose | Tier | Monthly Cost Est. |
|---------|---------|------|-------------------|
| **Cloud Run** | Backend API hosting | Startup: 1 vCPU, 512 MB | $20-50 |
| **Cloud SQL** | PostgreSQL database | db-f1-micro (HA enabled) | $50-100 |
| **Cloud Storage** | Frontend static hosting | Standard | $1-5 |
| **Cloud CDN** | Global content delivery | Pay per use | $10-30 |
| **Cloud Load Balancing** | HTTPS/SSL termination | HTTP(S) LB | $18 + traffic |
| **Cloud Build** | CI/CD pipeline | 120 builds/day free | $0-10 |
| **Secret Manager** | API keys & credentials | $0.06 per secret/month | $1-2 |

**Total Estimated Cost**: **$100-220/month** (with room for growth)

### Supporting Services

| Service | Purpose | Cost |
|---------|---------|------|
| **Cloud Logging** | Centralized logs | $0.50/GB (first 50 GB free) |
| **Cloud Monitoring** | Performance metrics | Free tier covers basic needs |
| **Cloud Armor** | DDoS protection (optional) | $6/policy + $0.75/M requests |
| **Cloud DNS** | Domain management | $0.20/zone + $0.40/M queries |
| **Cloud Scheduler** | Cron jobs (blog auto-gen) | $0.10/job/month (first 3 free) |

---

## 📦 Deployment Options

### Option 1: Full Cloud Run (Recommended for MVP)
**Best for**: Quick deployment, cost optimization, full Encore compatibility

**Architecture**:
- Frontend: Cloud Run (serving static files via Node.js)
- Backend: Cloud Run (Encore.ts services)
- Database: Cloud SQL (PostgreSQL)

**Pros**:
✅ Simplest migration path from Encore.dev
✅ One deployment workflow
✅ Built-in auto-scaling
✅ Encore runtime fully compatible

**Cons**:
❌ Higher costs for frontend serving
❌ Less optimal for static content delivery

**Cost**: $150-250/month

---

### Option 2: Hybrid (Cloud Storage + Cloud Run) ⭐ RECOMMENDED
**Best for**: Production optimization, scalability, cost efficiency

**Architecture**:
- Frontend: Cloud Storage + Cloud CDN
- Backend: Cloud Run (Encore.ts services)
- Database: Cloud SQL (PostgreSQL)

**Pros**:
✅ Optimal cost for static content ($1-5/month)
✅ Global CDN for fast page loads
✅ Backend scales independently
✅ Easy frontend deployments (no container needed)

**Cons**:
❌ Two deployment pipelines (frontend + backend)
❌ CORS configuration required

**Cost**: $100-220/month

---

### Option 3: Google Kubernetes Engine (GKE)
**Best for**: Large-scale production, multi-tenant, enterprise needs

**Pros**:
✅ Full control over orchestration
✅ Advanced networking
✅ Multi-cluster deployments

**Cons**:
❌ Complex setup and maintenance
❌ Higher costs ($150+ minimum for cluster)
❌ Overkill for current scale

**Cost**: $300-600/month

**Recommendation**: Not recommended unless scaling beyond 1M+ requests/day

---

## 📝 Step-by-Step Deployment

### Prerequisites

#### 1. Google Cloud Account Setup
```bash
# Install gcloud CLI
# Windows (PowerShell)
(New-Object Net.WebClient).DownloadFile("https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe", "$env:Temp\GoogleCloudSDKInstaller.exe")
& $env:Temp\GoogleCloudSDKInstaller.exe

# Authenticate
gcloud auth login

# Set project (create if needed)
gcloud config set project smartcalculatorhub-472911
```

#### 2. Enable Required APIs
```bash
gcloud services enable \
  run.googleapis.com \
  sql-component.googleapis.com \
  sqladmin.googleapis.com \
  storage.googleapis.com \
  cloudbuild.googleapis.com \
  secretmanager.googleapis.com \
  compute.googleapis.com
```

#### 3. Install Build Tools
```bash
# Bun (package manager)
npm install -g bun

# Encore CLI (for migrations)
# Windows PowerShell
iwr https://encore.dev/install.ps1 | iex
```

---

### Deployment: Option 2 (Hybrid - RECOMMENDED)

#### Step 1: Set Up Cloud SQL Database

```bash
# Create PostgreSQL instance
gcloud sql instances create calculator-db \
  --database-version=POSTGRES_15 \
  --tier=db-f1-micro \
  --region=us-central1 \
  --availability-type=zonal \
  --backup \
  --backup-start-time=03:00 \
  --maintenance-window-day=SUN \
  --maintenance-window-hour=4

# Create database
gcloud sql databases create calculatorhub --instance=calculator-db

# Create user
gcloud sql users create appuser \
  --instance=calculator-db \
  --password=YOUR_SECURE_PASSWORD_HERE

# Get connection name
gcloud sql instances describe calculator-db --format="value(connectionName)"
# Save this - you'll need it: smartcalculatorhub-472911:us-central1:calculator-db
```

#### Step 2: Store Secrets

```bash
# Database connection string
echo -n "postgresql://appuser:YOUR_PASSWORD@/calculatorhub?host=/cloudsql/smartcalculatorhub-472911:us-central1:calculator-db" | \
  gcloud secrets create DATABASE_URL --data-file=-

# OpenAI API Key (if you have one)
echo -n "sk-YOUR-OPENAI-KEY" | \
  gcloud secrets create OPENAI_API_KEY --data-file=-

# Google Service Account JSON (for indexing API)
gcloud secrets create GOOGLE_SERVICE_ACCOUNT_JSON --data-file=service-account.json
```

#### Step 3: Create Dockerfile for Backend

Create `Dockerfile` in project root:

```dockerfile
# Multi-stage build for optimal image size
FROM node:18-alpine AS builder

# Install Bun
RUN npm install -g bun

WORKDIR /app

# Copy workspace files
COPY package.json ./
COPY backend/package.json ./backend/
COPY frontend/package.json ./frontend/

# Install all dependencies
RUN cd backend && bun install
RUN cd frontend && bun install

# Copy source code
COPY backend ./backend
COPY frontend ./frontend
COPY tsconfig.json ./
COPY encore.app ./

# Build frontend with low-memory mode
WORKDIR /app/frontend
RUN npm run build -- --config vite.config.lowmem.ts --outDir=../backend/frontend/dist

# Production stage
FROM node:18-alpine

# Install Encore runtime
RUN npm install -g encore.dev

WORKDIR /app

# Copy built application
COPY --from=builder /app/backend /app/backend
COPY --from=builder /app/encore.app /app/

# Set environment
ENV NODE_ENV=production
ENV PORT=8080

# Expose port
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:8080/health', (r) => process.exit(r.statusCode === 200 ? 0 : 1))"

# Start Encore application
CMD ["encore", "run"]
```

**Note**: This Dockerfile may need adjustment based on Encore's self-hosting requirements. Check [Encore Docker Build Docs](https://encore.dev/docs/self-host/docker-build).

#### Step 4: Build and Push Docker Image

```bash
# Configure Docker for GCR
gcloud auth configure-docker

# Build image
docker build -t gcr.io/smartcalculatorhub-472911/calculator-backend:latest .

# Push to Google Container Registry
docker push gcr.io/smartcalculatorhub-472911/calculator-backend:latest
```

#### Step 5: Deploy Backend to Cloud Run

```bash
# Deploy with Cloud SQL connection
gcloud run deploy calculator-backend \
  --image gcr.io/smartcalculatorhub-472911/calculator-backend:latest \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --memory 1Gi \
  --cpu 1 \
  --min-instances 1 \
  --max-instances 10 \
  --timeout 60s \
  --add-cloudsql-instances smartcalculatorhub-472911:us-central1:calculator-db \
  --set-secrets="DATABASE_URL=DATABASE_URL:latest,OPENAI_API_KEY=OPENAI_API_KEY:latest,GOOGLE_SERVICE_ACCOUNT_JSON=GOOGLE_SERVICE_ACCOUNT_JSON:latest" \
  --set-env-vars="NODE_ENV=production,CORS_ORIGINS=https://smartcalculatorhubs.com"

# Get service URL
gcloud run services describe calculator-backend --region us-central1 --format="value(status.url)"
# Example output: https://calculator-backend-abc123.run.app
```

#### Step 6: Run Database Migrations

```bash
# Connect to Cloud SQL via proxy (for migration)
cloud_sql_proxy -instances=smartcalculatorhub-472911:us-central1:calculator-db=tcp:5432 &

# Set connection string
export DATABASE_URL="postgresql://appuser:YOUR_PASSWORD@localhost:5432/calculatorhub"

# Run Encore migrations
cd backend
encore db migrations apply

# Or manually run SQL files
psql $DATABASE_URL < db/migrations/1_init.up.sql
# ... repeat for all migrations
```

#### Step 7: Deploy Frontend to Cloud Storage

```bash
# Build frontend for production
cd frontend
npm run build -- --config vite.config.lowmem.ts

# Create bucket (must be globally unique)
gsutil mb -l us-central1 gs://smartcalculatorhubs-frontend

# Enable public access
gsutil iam ch allUsers:objectViewer gs://smartcalculatorhubs-frontend

# Configure as website
gsutil web set -m index.html -e index.html gs://smartcalculatorhubs-frontend

# Upload build files
gsutil -m rsync -r -d dist/ gs://smartcalculatorhubs-frontend/

# Set cache headers
gsutil -m setmeta -h "Cache-Control:public, max-age=31536000, immutable" \
  gs://smartcalculatorhubs-frontend/assets/*

gsutil -m setmeta -h "Cache-Control:public, max-age=3600, must-revalidate" \
  gs://smartcalculatorhubs-frontend/index.html
```

#### Step 8: Configure Load Balancer & CDN

```bash
# Reserve static IP
gcloud compute addresses create calculator-lb-ip --global

# Get IP address
gcloud compute addresses describe calculator-lb-ip --global --format="value(address)"
# Update DNS A record to point smartcalculatorhubs.com to this IP

# Create backend bucket for frontend
gcloud compute backend-buckets create calculator-frontend \
  --gcs-bucket-name=smartcalculatorhubs-frontend \
  --enable-cdn

# Create backend service for API
gcloud compute backend-services create calculator-api \
  --global \
  --load-balancing-scheme=EXTERNAL_MANAGED

# Create NEG (Network Endpoint Group) for Cloud Run
gcloud compute network-endpoint-groups create calculator-api-neg \
  --region=us-central1 \
  --network-endpoint-type=serverless \
  --cloud-run-service=calculator-backend

# Add NEG to backend service
gcloud compute backend-services add-backend calculator-api \
  --global \
  --network-endpoint-group=calculator-api-neg \
  --network-endpoint-group-region=us-central1

# Create URL map
gcloud compute url-maps create calculator-lb \
  --default-backend-bucket=calculator-frontend

# Add path rule for API
gcloud compute url-maps add-path-matcher calculator-lb \
  --path-matcher-name=api-matcher \
  --default-backend-bucket=calculator-frontend \
  --backend-service-path-rules="/api/*=calculator-api,/health=calculator-api"

# Create SSL certificate (managed)
gcloud compute ssl-certificates create calculator-cert \
  --domains=smartcalculatorhubs.com,www.smartcalculatorhubs.com \
  --global

# Create HTTPS proxy
gcloud compute target-https-proxies create calculator-https-proxy \
  --url-map=calculator-lb \
  --ssl-certificates=calculator-cert

# Create forwarding rule
gcloud compute forwarding-rules create calculator-https \
  --global \
  --target-https-proxy=calculator-https-proxy \
  --address=calculator-lb-ip \
  --ports=443

# Create HTTP to HTTPS redirect
gcloud compute url-maps create calculator-http-redirect \
  --default-url-redirect-https-redirect
  
gcloud compute target-http-proxies create calculator-http-proxy \
  --url-map=calculator-http-redirect

gcloud compute forwarding-rules create calculator-http \
  --global \
  --target-http-proxy=calculator-http-proxy \
  --address=calculator-lb-ip \
  --ports=80
```

#### Step 9: Update Frontend Configuration

Update `frontend/.env.production`:
```env
VITE_API_URL=https://smartcalculatorhubs.com/api
VITE_ENABLE_ANALYTICS=true
```

Rebuild and redeploy frontend:
```bash
cd frontend
npm run build
gsutil -m rsync -r -d dist/ gs://smartcalculatorhubs-frontend/
```

#### Step 10: Set Up CI/CD with Cloud Build

Create `cloudbuild.yaml` in project root:

```yaml
# Build configuration for Google Cloud Build
steps:
  # Step 1: Build frontend
  - name: 'node:18'
    id: 'build-frontend'
    entrypoint: 'bash'
    args:
      - '-c'
      - |
        cd frontend
        npm install
        npm run build -- --config vite.config.lowmem.ts
    env:
      - 'NODE_ENV=production'
      - 'NODE_OPTIONS=--max-old-space-size=4096'

  # Step 2: Deploy frontend to Cloud Storage
  - name: 'gcr.io/cloud-builders/gsutil'
    id: 'deploy-frontend'
    args:
      - '-m'
      - 'rsync'
      - '-r'
      - '-d'
      - 'frontend/dist/'
      - 'gs://smartcalculatorhubs-frontend/'
    waitFor: ['build-frontend']

  # Step 3: Build backend Docker image
  - name: 'gcr.io/cloud-builders/docker'
    id: 'build-backend'
    args:
      - 'build'
      - '-t'
      - 'gcr.io/$PROJECT_ID/calculator-backend:$COMMIT_SHA'
      - '-t'
      - 'gcr.io/$PROJECT_ID/calculator-backend:latest'
      - '.'
    waitFor: ['-']

  # Step 4: Push Docker image
  - name: 'gcr.io/cloud-builders/docker'
    id: 'push-backend'
    args:
      - 'push'
      - 'gcr.io/$PROJECT_ID/calculator-backend:$COMMIT_SHA'
    waitFor: ['build-backend']

  # Step 5: Deploy to Cloud Run
  - name: 'gcr.io/google.com/cloudsdktool/cloud-sdk'
    id: 'deploy-backend'
    entrypoint: 'gcloud'
    args:
      - 'run'
      - 'deploy'
      - 'calculator-backend'
      - '--image'
      - 'gcr.io/$PROJECT_ID/calculator-backend:$COMMIT_SHA'
      - '--region'
      - 'us-central1'
      - '--platform'
      - 'managed'
      - '--allow-unauthenticated'
      - '--memory'
      - '1Gi'
      - '--cpu'
      - '1'
      - '--min-instances'
      - '1'
      - '--max-instances'
      - '10'
      - '--add-cloudsql-instances'
      - 'smartcalculatorhub-472911:us-central1:calculator-db'
    waitFor: ['push-backend']

# Store images
images:
  - 'gcr.io/$PROJECT_ID/calculator-backend:$COMMIT_SHA'
  - 'gcr.io/$PROJECT_ID/calculator-backend:latest'

# Build timeout
timeout: '1200s'

# Build options
options:
  machineType: 'N1_HIGHCPU_8'
  logging: CLOUD_LOGGING_ONLY
```

Create GitHub Actions workflow `.github/workflows/gcp-deploy.yml`:

```yaml
name: Deploy to Google Cloud

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Authenticate to Google Cloud
        uses: google-github-actions/auth@v1
        with:
          credentials_json: ${{ secrets.GCP_SERVICE_ACCOUNT_KEY }}

      - name: Set up Cloud SDK
        uses: google-github-actions/setup-gcloud@v1

      - name: Submit build to Cloud Build
        run: |
          gcloud builds submit \
            --config cloudbuild.yaml \
            --substitutions=COMMIT_SHA=${{ github.sha }}
```

Add GitHub Secret:
1. Go to your GitHub repo → Settings → Secrets and variables → Actions
2. Create secret `GCP_SERVICE_ACCOUNT_KEY`
3. Paste service account JSON with roles: Cloud Build Editor, Cloud Run Admin, Storage Admin

---

## ⚙️ Configuration Requirements

### Environment Variables

#### Backend (Cloud Run)
```env
NODE_ENV=production
PORT=8080
DATABASE_URL=postgresql://appuser:password@/calculatorhub?host=/cloudsql/PROJECT:REGION:INSTANCE
OPENAI_API_KEY=sk-...
GOOGLE_SERVICE_ACCOUNT_JSON={"type":"service_account",...}
CORS_ORIGINS=https://smartcalculatorhubs.com,https://www.smartcalculatorhubs.com
ADSENSE_PUBLISHER_ID=ca-pub-7271075626732183
```

#### Frontend (Build-time)
```env
VITE_API_URL=https://smartcalculatorhubs.com/api
VITE_ENABLE_ANALYTICS=true
VITE_DISABLE_LAZY=false
VITE_STRICT_MODE=false
```

### DNS Configuration

Point your domain to Google Cloud:

| Record Type | Name | Value | TTL |
|-------------|------|-------|-----|
| A | @ | [LB_IP_ADDRESS] | 300 |
| A | www | [LB_IP_ADDRESS] | 300 |
| CNAME | api | calculator-backend-xxx.run.app | 300 |

### SSL Certificate

Google-managed SSL will auto-provision once DNS is configured (takes 15-60 minutes).

---

## 💰 Cost Estimation

### Monthly Cost Breakdown (Low Traffic: ~10K visitors/month)

| Service | Usage | Cost |
|---------|-------|------|
| Cloud Run (Backend) | 1 instance, 1 vCPU, 512 MB, 720 hrs | $25 |
| Cloud SQL (PostgreSQL) | db-f1-micro, 10 GB, HA | $60 |
| Cloud Storage | 5 GB storage, 50 GB egress | $2 |
| Cloud CDN | 50 GB cache egress | $8 |
| Load Balancing | 1 forwarding rule, 10 GB | $20 |
| Cloud Build | 20 builds/month | $2 |
| Secret Manager | 5 secrets | $0.30 |
| Cloud Logging | 5 GB logs | Free |
| **Total** | | **~$117/month** |

### Monthly Cost (Medium Traffic: ~100K visitors/month)

| Service | Usage | Cost |
|---------|-------|------|
| Cloud Run | 3 instances avg, 1 vCPU, 1 GB | $75 |
| Cloud SQL | db-g1-small, 20 GB, HA | $120 |
| Cloud Storage | 10 GB storage, 500 GB egress | $15 |
| Cloud CDN | 500 GB cache egress | $40 |
| Load Balancing | 1 rule, 100 GB | $22 |
| Cloud Build | 50 builds/month | $5 |
| **Total** | | **~$277/month** |

### Cost Optimization Tips
1. **Enable CDN caching** - Reduces Cloud Run requests by 80%+
2. **Use Cloud Run min instances = 0** - Scale to zero when idle
3. **Set up budget alerts** - Get notified at 50%, 90%, 100% of budget
4. **Use committed use discounts** - 37% savings for Cloud SQL
5. **Implement request batching** - Reduce database connections

---

## 🔄 Migration Strategy

### Phase 1: Preparation (Week 1)
- [ ] Set up Google Cloud project
- [ ] Enable all required APIs
- [ ] Create Cloud SQL instance
- [ ] Store secrets in Secret Manager
- [ ] Test database connection
- [ ] Export data from Encore PostgreSQL
- [ ] Import data to Cloud SQL

### Phase 2: Backend Migration (Week 2)
- [ ] Create Dockerfile for Encore backend
- [ ] Build and test Docker image locally
- [ ] Push image to Google Container Registry
- [ ] Deploy to Cloud Run
- [ ] Run database migrations
- [ ] Test all API endpoints
- [ ] Configure environment variables
- [ ] Set up health checks

### Phase 3: Frontend Migration (Week 3)
- [ ] Update API URLs in frontend config
- [ ] Build production frontend bundle
- [ ] Create Cloud Storage bucket
- [ ] Upload frontend to bucket
- [ ] Configure bucket for website hosting
- [ ] Test static site access
- [ ] Set cache headers

### Phase 4: Networking (Week 4)
- [ ] Reserve static IP address
- [ ] Create backend bucket
- [ ] Create backend service for Cloud Run
- [ ] Configure URL map (routing)
- [ ] Set up SSL certificate
- [ ] Create HTTPS load balancer
- [ ] Create HTTP→HTTPS redirect
- [ ] Update DNS records
- [ ] Wait for SSL provisioning (15-60 min)
- [ ] Test HTTPS access

### Phase 5: CI/CD Setup (Week 5)
- [ ] Create `cloudbuild.yaml`
- [ ] Create GitHub Actions workflow
- [ ] Add GCP service account to GitHub secrets
- [ ] Test automated deployment
- [ ] Set up build notifications

### Phase 6: Testing & Launch (Week 6)
- [ ] Load testing with 1000+ concurrent users
- [ ] Security audit (OWASP top 10)
- [ ] Performance testing (Lighthouse scores)
- [ ] Monitor error rates
- [ ] Set up Cloud Monitoring dashboards
- [ ] Configure alerting policies
- [ ] Create runbook for incidents
- [ ] Launch! 🚀

### Rollback Plan
If issues occur:
1. **DNS rollback**: Point domain back to Encore.dev (5-minute TTL)
2. **Frontend rollback**: Previous version in Cloud Storage
3. **Backend rollback**: Deploy previous Docker image tag
4. **Database rollback**: Use automated backups (point-in-time recovery)

---

## 📊 Monitoring & Maintenance

### Key Metrics to Monitor

#### Application Metrics
- **Request latency** (p50, p95, p99)
- **Error rate** (4xx, 5xx responses)
- **Request count** (requests per second)
- **Active connections** (database pool usage)
- **Memory usage** (per Cloud Run instance)
- **CPU utilization**

#### Business Metrics
- **Calculator usage** (top 10 calculators)
- **Page views** (GA4)
- **Blog post engagement**
- **AdSense revenue**
- **PWA install rate**

### Cloud Monitoring Dashboards

#### 1. Application Health Dashboard
```bash
# Create custom dashboard with:
# - Cloud Run: Request count, latency, error rate
# - Cloud SQL: Connection count, CPU, memory
# - Load Balancer: Traffic volume, cache hit rate
# - CDN: Bandwidth, cache hit ratio
```

#### 2. Cost Dashboard
```bash
# Set up budget alerts
gcloud billing budgets create \
  --billing-account=YOUR_BILLING_ACCOUNT \
  --display-name="Calculator Hub Monthly Budget" \
  --budget-amount=200 \
  --threshold-rules=percent=50,percent=90,percent=100
```

### Alerting Policies

Create alerts for:
1. **High error rate** (>5% of requests fail)
2. **High latency** (p95 > 2 seconds)
3. **Database connection exhaustion** (>80% pool used)
4. **Low memory** (<100 MB available)
5. **Cost anomaly** (>20% increase week-over-week)

### Backup Strategy

#### Database Backups
```bash
# Cloud SQL automatic backups (enabled by default)
# - Daily backups at 03:00 UTC
# - 7-day retention
# - Point-in-time recovery enabled

# Manual backup before major changes
gcloud sql backups create \
  --instance=calculator-db \
  --description="Pre-deployment backup $(date +%Y-%m-%d)"
```

#### Configuration Backups
- Store all IaC configs in Git
- Tag each production deployment
- Export Cloud Build configurations monthly

### Maintenance Windows

#### Weekly (Automated)
- Database backups verification
- Log rotation
- Dependency security scans

#### Monthly (Manual)
- Review Cloud costs
- Update dependencies
- Review error logs
- Performance optimization

#### Quarterly (Manual)
- Security audit
- Load testing
- Disaster recovery drill
- Review SLOs and adjust

---

## 🔐 Security Checklist

### Pre-Launch
- [ ] Enable Cloud Armor (DDoS protection)
- [ ] Configure IAM roles (principle of least privilege)
- [ ] Enable VPC Service Controls
- [ ] Set up Cloud KMS for secret encryption
- [ ] Configure CSP headers
- [ ] Enable HTTPS everywhere
- [ ] Set secure cookie flags
- [ ] Implement rate limiting
- [ ] Configure CORS properly
- [ ] Enable Cloud Audit Logs

### Post-Launch
- [ ] Monitor security alerts
- [ ] Review IAM audit logs weekly
- [ ] Patch vulnerabilities within 7 days
- [ ] Rotate service account keys quarterly
- [ ] Review firewall rules monthly

---

## 📚 Additional Resources

### Documentation
- [Encore.ts Self-Hosting Guide](https://encore.dev/docs/self-host/docker-build)
- [Cloud Run Quickstart](https://cloud.google.com/run/docs/quickstarts)
- [Cloud SQL for PostgreSQL](https://cloud.google.com/sql/docs/postgres)
- [Cloud Storage Static Website](https://cloud.google.com/storage/docs/hosting-static-website)

### Tools
- [Google Cloud Console](https://console.cloud.google.com/)
- [Cloud Build Triggers](https://console.cloud.google.com/cloud-build/triggers)
- [Cloud Monitoring](https://console.cloud.google.com/monitoring)
- [Cloud Logging](https://console.cloud.google.com/logs)

### Support
- Google Cloud Support: [support.google.com/cloud](https://support.google.com/cloud)
- Encore.ts Discord: [encore.dev/discord](https://encore.dev/discord)
- Stack Overflow: Tag `google-cloud-platform` + `encore`

---

## ✅ Next Steps

1. **Review this guide** with your team
2. **Choose deployment option** (recommend Option 2: Hybrid)
3. **Set up Google Cloud project** and enable APIs
4. **Create service account** with necessary permissions
5. **Export database** from Encore.dev
6. **Follow Step-by-Step Deployment** section
7. **Test thoroughly** before DNS cutover
8. **Monitor closely** for first 48 hours after launch

---

**Last Updated**: November 5, 2025  
**Version**: 1.0.0  
**Maintainer**: Smart Calculator Hub Team  
**Status**: Ready for Production Deployment

---

## Questions?

If you encounter issues during deployment, check:
1. This guide's troubleshooting sections
2. Google Cloud Status Dashboard
3. Encore.ts documentation
4. GitHub Issues in this repository

Good luck with your deployment! 🚀
