# Google Cloud Platform Deployment Checklist
## Smart Calculator Hub - Quick Reference

---

## 🎯 Pre-Deployment Checklist

### Google Cloud Account Setup
- [ ] Google Cloud account created
- [ ] Billing enabled
- [ ] Project created: `smartcalculatorhub-472911`
- [ ] gcloud CLI installed and authenticated
- [ ] Service account created with appropriate roles:
  - Cloud Run Admin
  - Cloud SQL Admin
  - Storage Admin
  - Cloud Build Editor
  - Secret Manager Admin

### Required APIs Enabled
```bash
gcloud services enable run.googleapis.com \
  sql-component.googleapis.com \
  sqladmin.googleapis.com \
  storage.googleapis.com \
  cloudbuild.googleapis.com \
  secretmanager.googleapis.com \
  compute.googleapis.com
```

- [ ] Cloud Run API
- [ ] Cloud SQL Admin API
- [ ] Cloud Storage API
- [ ] Cloud Build API
- [ ] Secret Manager API
- [ ] Compute Engine API

### Environment Preparation
- [ ] Bun installed: `npm install -g bun`
- [ ] Encore CLI installed: `iwr https://encore.dev/install.ps1 | iex`
- [ ] Docker installed and running
- [ ] Repository cloned locally
- [ ] `.env` files configured

---

## 📦 Infrastructure Setup Checklist

### 1. Cloud SQL Database
```bash
# Create instance
gcloud sql instances create calculator-db \
  --database-version=POSTGRES_15 \
  --tier=db-f1-micro \
  --region=us-central1
```

- [ ] PostgreSQL instance created
- [ ] Database `calculatorhub` created
- [ ] User `appuser` created with strong password
- [ ] Connection name noted: `PROJECT:REGION:INSTANCE`
- [ ] Cloud SQL Proxy tested
- [ ] Database migrations applied
- [ ] Sample data verified

**Connection String Format**:
```
postgresql://appuser:PASSWORD@/calculatorhub?host=/cloudsql/smartcalculatorhub-472911:us-central1:calculator-db
```

### 2. Secret Manager
- [ ] DATABASE_URL secret created
- [ ] OPENAI_API_KEY secret created
- [ ] GOOGLE_SERVICE_ACCOUNT_JSON secret created
- [ ] Secrets tested and accessible

### 3. Cloud Storage (Frontend)
- [ ] Bucket created: `gs://smartcalculatorhubs-frontend`
- [ ] Public access enabled
- [ ] Website configuration set
- [ ] Cache headers configured
- [ ] Frontend files uploaded
- [ ] Static site accessible

### 4. Container Registry
- [ ] Docker authentication configured: `gcloud auth configure-docker`
- [ ] Backend image built
- [ ] Image pushed to `gcr.io/PROJECT_ID/calculator-backend`
- [ ] Image verified in GCR console

### 5. Cloud Run (Backend)
- [ ] Service deployed: `calculator-backend`
- [ ] Cloud SQL connection configured
- [ ] Secrets mounted
- [ ] Environment variables set
- [ ] Min/max instances configured
- [ ] Health checks passing
- [ ] Service URL noted and tested

**Service Configuration**:
```
Memory: 1 Gi
CPU: 1
Min Instances: 1
Max Instances: 10
Timeout: 60s
```

### 6. Load Balancer & CDN
- [ ] Static IP reserved: `calculator-lb-ip`
- [ ] Backend bucket created for frontend
- [ ] Backend service created for API
- [ ] Network Endpoint Group created
- [ ] URL map configured
- [ ] SSL certificate requested
- [ ] HTTPS proxy created
- [ ] HTTP→HTTPS redirect configured
- [ ] Forwarding rules created

---

## 🔧 Configuration Checklist

### DNS Configuration
- [ ] A record: `@ → [LB_IP_ADDRESS]`
- [ ] A record: `www → [LB_IP_ADDRESS]`
- [ ] DNS propagation verified
- [ ] SSL certificate provisioned (15-60 min)
- [ ] HTTPS accessible

### Frontend Environment
`frontend/.env.production`:
- [ ] `VITE_API_URL` set to production API
- [ ] `VITE_ENABLE_ANALYTICS=true`
- [ ] `VITE_DISABLE_LAZY=false`
- [ ] `VITE_STRICT_MODE=false`
- [ ] Frontend rebuilt with production config
- [ ] New build uploaded to Cloud Storage

### Backend Environment (Cloud Run)
- [ ] `NODE_ENV=production`
- [ ] `PORT=8080`
- [ ] `DATABASE_URL` secret mounted
- [ ] `OPENAI_API_KEY` secret mounted
- [ ] `GOOGLE_SERVICE_ACCOUNT_JSON` secret mounted
- [ ] `CORS_ORIGINS` set to production domain
- [ ] `ADSENSE_PUBLISHER_ID` set

### CORS Configuration
Allowed Origins:
- [ ] `https://smartcalculatorhubs.com`
- [ ] `https://www.smartcalculatorhubs.com`

---

## 🚀 Deployment Workflow Checklist

### Initial Deployment

#### Step 1: Database
```bash
# Create Cloud SQL instance
gcloud sql instances create calculator-db ...

# Create database
gcloud sql databases create calculatorhub --instance=calculator-db

# Apply migrations
encore db migrations apply
```

- [ ] Cloud SQL instance running
- [ ] Database created
- [ ] All 25 migrations applied
- [ ] Sample queries working

#### Step 2: Backend
```bash
# Build Docker image
docker build -t gcr.io/PROJECT_ID/calculator-backend .

# Push to registry
docker push gcr.io/PROJECT_ID/calculator-backend

# Deploy to Cloud Run
gcloud run deploy calculator-backend ...
```

- [ ] Docker build succeeds
- [ ] Image pushed to GCR
- [ ] Cloud Run deployment succeeds
- [ ] Health endpoint responding: `/health`
- [ ] API endpoints tested

#### Step 3: Frontend
```bash
# Build frontend
cd frontend
npm run build -- --config vite.config.lowmem.ts

# Upload to Cloud Storage
gsutil -m rsync -r -d dist/ gs://BUCKET/
```

- [ ] Frontend build succeeds (no errors)
- [ ] Files uploaded to bucket
- [ ] Static site accessible
- [ ] Assets loading correctly

#### Step 4: Networking
- [ ] Load balancer configured
- [ ] CDN enabled
- [ ] SSL certificate active
- [ ] Domain accessible via HTTPS
- [ ] HTTP redirects to HTTPS

---

## 🔄 CI/CD Setup Checklist

### Cloud Build Configuration
File: `cloudbuild.yaml`
- [ ] Build steps for frontend defined
- [ ] Build steps for backend defined
- [ ] Deploy steps configured
- [ ] Timeout set to 1200s
- [ ] Machine type optimized
- [ ] File committed to repository

### GitHub Actions Workflow
File: `.github/workflows/gcp-deploy.yml`
- [ ] Workflow file created
- [ ] Triggered on `push` to `main`
- [ ] GCP authentication step configured
- [ ] Cloud Build submit step configured
- [ ] File committed to repository

### Secrets & Permissions
- [ ] Service account created with required roles
- [ ] Service account JSON downloaded
- [ ] `GCP_SERVICE_ACCOUNT_KEY` added to GitHub Secrets
- [ ] Service account has Cloud Build Editor role
- [ ] Service account has Cloud Run Admin role
- [ ] Service account has Storage Admin role

### Testing CI/CD
- [ ] Push to `main` branch
- [ ] Cloud Build triggered
- [ ] Build logs reviewed
- [ ] Deployment succeeds
- [ ] Application accessible
- [ ] No errors in Cloud Logging

---

## 🧪 Testing Checklist

### Smoke Tests (Post-Deployment)
- [ ] Homepage loads: `https://smartcalculatorhubs.com`
- [ ] API health check: `https://smartcalculatorhubs.com/api/health`
- [ ] Calculator pages load (test 5 random calculators)
- [ ] Blog posts load
- [ ] Images/assets load correctly
- [ ] No console errors in browser

### Functional Tests
- [ ] User can perform calculations
- [ ] Results are accurate
- [ ] AI analysis works (if OPENAI_API_KEY set)
- [ ] Share functionality works
- [ ] Download CSV/PNG works
- [ ] Social share buttons functional
- [ ] Blog search works
- [ ] Navigation works
- [ ] Mobile responsive

### Performance Tests
- [ ] Lighthouse score: Performance ≥ 90
- [ ] Lighthouse score: SEO ≥ 95
- [ ] Page load time: < 2s (4G connection)
- [ ] Time to Interactive: < 3s
- [ ] First Contentful Paint: < 1.5s

### Load Tests (Optional)
```bash
# Install Apache Bench
# Windows: Download from Apache website

# Test with 100 concurrent users
ab -n 1000 -c 100 https://smartcalculatorhubs.com/
```

- [ ] 100 concurrent users handled
- [ ] No 5xx errors
- [ ] Average response time < 500ms
- [ ] Cloud Run auto-scales correctly

---

## 📊 Monitoring Setup Checklist

### Cloud Monitoring
- [ ] Application dashboard created
- [ ] Key metrics added:
  - Request count
  - Error rate
  - Latency (p50, p95, p99)
  - Database connections
  - Memory usage
  - CPU utilization

### Alerting Policies
- [ ] High error rate alert (>5%)
- [ ] High latency alert (p95 > 2s)
- [ ] Database connection pool alert (>80%)
- [ ] Low memory alert (<100 MB)
- [ ] Budget alert (50%, 90%, 100%)

### Logging
- [ ] Cloud Logging enabled
- [ ] Log severity levels configured
- [ ] Log-based metrics created
- [ ] Log retention set to 30 days

### Uptime Checks
- [ ] Uptime check for homepage
- [ ] Uptime check for API health endpoint
- [ ] Alert on downtime
- [ ] Notification channel configured (email/Slack)

---

## 🔐 Security Checklist

### Access Control
- [ ] IAM roles properly configured (least privilege)
- [ ] Service accounts limited to specific resources
- [ ] Cloud SQL users have strong passwords
- [ ] No credentials in code or Git history

### Network Security
- [ ] Cloud SQL: Private IP configured (optional)
- [ ] Cloud Run: Ingress set to "all" with authentication
- [ ] HTTPS enforced everywhere
- [ ] CORS properly configured
- [ ] CSP headers set

### Data Security
- [ ] Database backups enabled (daily)
- [ ] Point-in-time recovery enabled
- [ ] Secrets stored in Secret Manager
- [ ] SSL/TLS for all connections
- [ ] No sensitive data in logs

### Application Security
- [ ] Input validation on all forms
- [ ] SQL injection prevention (parameterized queries)
- [ ] XSS prevention (sanitize user inputs)
- [ ] Rate limiting configured
- [ ] DDoS protection (Cloud Armor - optional)

---

## 💰 Cost Management Checklist

### Budget Setup
- [ ] Monthly budget set: $200
- [ ] Budget alerts at 50%, 90%, 100%
- [ ] Notification emails configured
- [ ] Cost report emails enabled (weekly)

### Cost Optimization
- [ ] Cloud Run: Min instances = 0 (scale to zero)
- [ ] Cloud SQL: Right-size instance (start with db-f1-micro)
- [ ] CDN caching enabled (80%+ hit rate)
- [ ] Committed use discounts considered (for stable workloads)
- [ ] Unnecessary services disabled
- [ ] Old container images deleted

### Cost Monitoring
- [ ] Cost breakdown by service reviewed monthly
- [ ] Unexpected cost spikes investigated
- [ ] Cost forecasts reviewed
- [ ] Optimization opportunities identified

---

## 📝 Documentation Checklist

### Internal Documentation
- [ ] Architecture diagram created
- [ ] Deployment runbook written
- [ ] Rollback procedure documented
- [ ] Incident response plan created
- [ ] Access credentials documented (securely)

### Team Knowledge Transfer
- [ ] Deployment guide shared with team
- [ ] GCP console access granted to team members
- [ ] On-call rotation scheduled
- [ ] Escalation procedures defined

---

## 🚦 Go-Live Checklist

### Final Pre-Launch Review
- [ ] All tests passing
- [ ] Performance metrics acceptable
- [ ] Security audit complete
- [ ] Backup/restore tested
- [ ] Monitoring/alerting configured
- [ ] Team trained on GCP tools
- [ ] Rollback plan ready

### DNS Cutover
- [ ] Lower DNS TTL to 5 minutes (24 hours before)
- [ ] Update DNS A records
- [ ] Verify new IP resolves
- [ ] Wait for DNS propagation (15-60 min)
- [ ] Test from multiple locations/ISPs
- [ ] Restore DNS TTL to 3600

### Post-Launch Monitoring (First 48 Hours)
- [ ] Monitor error logs continuously
- [ ] Check performance metrics hourly
- [ ] Verify no cost anomalies
- [ ] Test key user flows every 4 hours
- [ ] Monitor social media for user reports
- [ ] Keep rollback plan ready

---

## ✅ Success Criteria

Deployment is successful when:
- ✅ Application accessible at `https://smartcalculatorhubs.com`
- ✅ All calculator pages functional
- ✅ API responding with < 500ms latency
- ✅ Zero 5xx errors in first hour
- ✅ SSL certificate valid
- ✅ CDN cache hit rate > 70%
- ✅ Mobile Lighthouse score ≥ 90
- ✅ SEO Lighthouse score ≥ 95
- ✅ No console errors
- ✅ Database queries < 100ms
- ✅ Monitoring dashboards showing healthy metrics

---

## 🔄 Post-Deployment Tasks

### Week 1
- [ ] Monitor error rates daily
- [ ] Review performance metrics
- [ ] Collect user feedback
- [ ] Fix critical bugs
- [ ] Optimize slow queries

### Month 1
- [ ] Review Cloud costs
- [ ] Optimize resource usage
- [ ] Implement feature flags
- [ ] Add more monitoring
- [ ] Document lessons learned

### Quarter 1
- [ ] Security audit
- [ ] Load testing with real traffic patterns
- [ ] Disaster recovery drill
- [ ] Review SLOs
- [ ] Plan capacity for growth

---

## 📞 Support Contacts

### Google Cloud Support
- Console: https://console.cloud.google.com/support
- Phone: [Regional support number]
- Email: Via support console

### Third-Party Services
- **Encore.ts**: Discord community
- **OpenAI**: https://help.openai.com
- **AdSense**: https://support.google.com/adsense

### Internal Escalation
- [ ] Primary contact: [Name/Email]
- [ ] Secondary contact: [Name/Email]
- [ ] Emergency: [Phone number]

---

## 📚 Quick Commands Reference

### Deploy Backend
```bash
docker build -t gcr.io/smartcalculatorhub-472911/calculator-backend:latest .
docker push gcr.io/smartcalculatorhub-472911/calculator-backend:latest
gcloud run deploy calculator-backend --image gcr.io/smartcalculatorhub-472911/calculator-backend:latest --region us-central1
```

### Deploy Frontend
```bash
cd frontend
npm run build
gsutil -m rsync -r -d dist/ gs://smartcalculatorhubs-frontend/
```

### Check Logs
```bash
# Cloud Run logs
gcloud run services logs read calculator-backend --region us-central1 --limit 50

# Cloud SQL logs
gcloud sql operations list --instance calculator-db

# Build logs
gcloud builds list --limit 10
```

### Database Access
```bash
# Via Cloud SQL Proxy
cloud_sql_proxy -instances=smartcalculatorhub-472911:us-central1:calculator-db=tcp:5432
psql "host=127.0.0.1 port=5432 dbname=calculatorhub user=appuser"
```

---

**Last Updated**: November 5, 2025  
**Version**: 1.0.0  
**Next Review**: December 5, 2025

---

## 🎉 Ready to Deploy?

If all items above are checked, you're ready for production deployment!

**Final Command**:
```bash
# Trigger deployment
git add -A
git commit -m "Deploy to Google Cloud Platform"
git push origin main
```

Monitor the deployment in:
- GitHub Actions: https://github.com/YOUR_USERNAME/smart-calculator-hub-main/actions
- Cloud Build: https://console.cloud.google.com/cloud-build/builds
- Cloud Run: https://console.cloud.google.com/run

Good luck! 🚀
