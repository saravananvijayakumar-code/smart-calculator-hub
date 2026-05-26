# Migrating from Encore.ts to Next.js
## Complete Migration Strategy for Smart Calculator Hub

---

## 📋 Executive Summary

**Recommendation**: ✅ **YES, migration to Next.js is HIGHLY RECOMMENDED**

### Why Migrate?

| Factor | Encore.ts | Next.js | Winner |
|--------|-----------|---------|--------|
| **Vendor Lock-in** | ❌ Proprietary platform | ✅ Open source | Next.js |
| **Deployment Flexibility** | ⚠️ Limited (Encore Cloud or self-host with effort) | ✅ Any cloud (GCP, AWS, Vercel, etc.) | Next.js |
| **Community & Ecosystem** | ⚠️ Small (~3K GitHub stars) | ✅ Massive (125K+ stars) | Next.js |
| **Learning Curve** | ⚠️ Encore-specific patterns | ✅ Industry standard | Next.js |
| **Cost** | ⚠️ Platform fees + infrastructure | ✅ More control over costs | Next.js |
| **Scalability** | ✅ Good | ✅ Excellent | Tie |
| **Development Speed** | ✅ Fast (auto-generated client) | ✅ Fast (API routes) | Tie |
| **Type Safety** | ✅ Excellent | ✅ Excellent (with tRPC/Next.js API) | Tie |
| **Job Market** | ❌ Very niche | ✅ High demand skill | Next.js |
| **Long-term Viability** | ⚠️ Uncertain (small company) | ✅ Backed by Vercel + huge community | Next.js |

**Verdict**: Migrate to Next.js for **flexibility**, **portability**, **community support**, and **future-proofing**.

---

## 🎯 Migration Goals

### Primary Objectives
1. **Remove Encore.ts dependency** - Eliminate vendor lock-in
2. **Full-stack Next.js** - Use Next.js App Router with Server Actions/API Routes
3. **Google Cloud deployment** - Deploy to Cloud Run for scalability
4. **Zero downtime** - Gradual migration with fallback
5. **Feature parity** - All 64+ calculators work identically
6. **Improved performance** - Server-side rendering for SEO

### Success Criteria
- ✅ All API endpoints migrated to Next.js API routes
- ✅ All frontend pages use Next.js App Router
- ✅ Database queries migrated from Encore SQL to Prisma/Drizzle
- ✅ Deployable to Google Cloud Run without Encore CLI
- ✅ No Encore.dev imports remaining
- ✅ Build time < 5 minutes
- ✅ Bundle size ≤ 1.5 MB gzipped

---

## 📊 Current Architecture Analysis

### Backend Services (10 services → Next.js API Routes)

| Encore Service | Endpoints | Complexity | Migration Effort |
|----------------|-----------|------------|------------------|
| `auth` | 1 (login) | Low | 1 day |
| `blog-v2` | 14 (CRUD + auto-gen) | High | 4 days |
| `ai-analysis` | 1 (OpenAI integration) | Medium | 2 days |
| `exchange` | 4 (currency rates) | Medium | 2 days |
| `health` | 3 (system checks) | Low | 1 day |
| `pageviews` | 2 (analytics) | Low | 1 day |
| `pwa-stats` | 2 (PWA metrics) | Low | 1 day |
| `user` | 2 (user management) | Low | 1 day |
| `web` | 8 (static files, sitemap) | Medium | 2 days |
| `vision` | 5 (image analysis) | Medium | 2 days |
| **TOTAL** | **42 endpoints** | **Mixed** | **~17 days** |

### Database (PostgreSQL)
- **Current**: Encore SQLDatabase with raw SQL queries
- **Target**: Prisma ORM (type-safe, migrations built-in)
- **Effort**: 3 days (schema generation + query migration)

### Frontend (React SPA)
- **Current**: Vite + React Router
- **Target**: Next.js 15 App Router
- **Effort**: 5 days (route migration + SSR optimization)

### Total Estimated Effort: **25 development days** (~5 weeks)

---

## 🗺️ Migration Roadmap

### Phase 1: Foundation (Week 1)
**Goal**: Set up Next.js project with database access

#### Tasks
1. **Initialize Next.js 15 project** with App Router
2. **Set up Prisma** with PostgreSQL
3. **Generate Prisma schema** from existing database
4. **Create API route structure** mirroring Encore services
5. **Set up authentication** (NextAuth.js or custom)
6. **Configure environment variables**
7. **Test database connectivity**

**Deliverables**:
- Next.js project running
- Database schema in Prisma
- Basic API route working
- Authentication flow operational

---

### Phase 2: Core Services Migration (Week 2)
**Goal**: Migrate critical backend services

#### Priority Order
1. **Health service** (simplest, good for testing)
2. **Auth service** (critical for admin access)
3. **User service** (needed for personalization)
4. **Exchange service** (used by calculators)
5. **Pageviews service** (analytics)

**Deliverables**:
- 5 core services as Next.js API routes
- Type-safe API client (tRPC or custom)
- Unit tests for all migrated endpoints

---

### Phase 3: Complex Services (Week 3)
**Goal**: Migrate feature-rich services

#### Tasks
1. **Blog-v2 service** (14 endpoints, auto-generation)
2. **AI analysis service** (OpenAI integration)
3. **Vision service** (image processing)
4. **Web service** (sitemap, robots.txt)

**Deliverables**:
- Blog CMS fully functional
- AI features working
- SEO files serving correctly

---

### Phase 4: Frontend Migration (Week 4)
**Goal**: Convert React SPA to Next.js App Router

#### Tasks
1. **Migrate page routes** (100+ routes → app/ directory)
2. **Convert client components** (calculators remain client-side)
3. **Implement Server Components** (for blog posts, static pages)
4. **Set up Server Actions** (for form submissions)
5. **Optimize images** (next/image)
6. **Implement ISR** (Incremental Static Regeneration for blog)

**Deliverables**:
- All pages accessible via Next.js routes
- SSR working for blog posts
- SEO improved with meta tags

---

### Phase 5: Testing & Optimization (Week 5)
**Goal**: Ensure quality and performance

#### Tasks
1. **E2E testing** (Playwright tests for calculators)
2. **Performance optimization** (code splitting, lazy loading)
3. **SEO audit** (Lighthouse scores ≥ 95)
4. **Load testing** (handle 1000+ concurrent users)
5. **Security audit** (OWASP top 10)
6. **Documentation** (API docs, deployment guide)

**Deliverables**:
- All tests passing
- Performance benchmarks met
- Security vulnerabilities fixed
- Deployment documentation complete

---

## 🛠️ Technical Implementation

### 1. Next.js Project Setup

```bash
# Create Next.js 15 project with TypeScript
npx create-next-app@latest smart-calculator-hub-nextjs \
  --typescript \
  --tailwind \
  --app \
  --src-dir \
  --import-alias "@/*"

cd smart-calculator-hub-nextjs

# Install dependencies
npm install prisma @prisma/client
npm install next-auth
npm install zod
npm install date-fns
npm install sharp # for image optimization

# Dev dependencies
npm install -D @types/node
npm install -D prisma
npm install -D tsx
```

### 2. Prisma Setup

```bash
# Initialize Prisma
npx prisma init

# Connect to existing database
# Edit .env
DATABASE_URL="postgresql://appuser:password@localhost:5432/calculatorhub?schema=public"

# Pull existing schema from database
npx prisma db pull

# Generate Prisma Client
npx prisma generate
```

**Expected Output**: `prisma/schema.prisma` with all 8 tables

### 3. Project Structure

```
smart-calculator-hub-nextjs/
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── api/                    # API Routes
│   │   │   ├── auth/
│   │   │   │   └── [...nextauth]/route.ts
│   │   │   ├── blog/
│   │   │   │   ├── route.ts        # GET /api/blog (list)
│   │   │   │   └── [slug]/route.ts # GET /api/blog/[slug]
│   │   │   ├── exchange/
│   │   │   │   └── rate/[from]/[to]/route.ts
│   │   │   ├── health/
│   │   │   │   └── route.ts
│   │   │   └── ...
│   │   ├── (marketing)/            # Public pages
│   │   │   ├── page.tsx            # Homepage
│   │   │   ├── about/page.tsx
│   │   │   └── blog/
│   │   │       ├── page.tsx        # Blog list (SSR)
│   │   │       └── [slug]/page.tsx # Blog post (ISR)
│   │   ├── calculators/            # Calculator pages
│   │   │   ├── financial/
│   │   │   ├── health/
│   │   │   └── ...
│   │   ├── admin/                  # Admin dashboard
│   │   │   └── layout.tsx          # Protected layout
│   │   └── layout.tsx              # Root layout
│   ├── components/                 # React components
│   │   ├── ui/                     # shadcn/ui components
│   │   ├── calculators/            # Calculator components
│   │   └── layout/                 # Layout components
│   ├── lib/                        # Utilities
│   │   ├── prisma.ts               # Prisma client singleton
│   │   ├── auth.ts                 # Auth config
│   │   ├── openai.ts               # OpenAI client
│   │   └── api-client.ts           # Type-safe API client
│   ├── types/                      # TypeScript types
│   └── utils/                      # Helper functions
├── prisma/
│   ├── schema.prisma               # Database schema
│   └── migrations/                 # Migration history
├── public/                         # Static assets
├── .env                            # Environment variables
├── next.config.js                  # Next.js configuration
├── tsconfig.json                   # TypeScript config
└── package.json                    # Dependencies
```

---

## 🔄 Service Migration Examples

### Example 1: Health Service

**Before (Encore.ts)**:
```typescript
// backend/health/check.ts
import { api } from "encore.dev/api";

export const status = api(
  { method: "GET", path: "/status", expose: true },
  async (): Promise<{ status: string; timestamp: Date }> => {
    return {
      status: "ok",
      timestamp: new Date()
    };
  }
);
```

**After (Next.js)**:
```typescript
// src/app/api/health/status/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString()
  });
}

export const runtime = 'edge'; // Optional: Use edge runtime for faster response
```

---

### Example 2: Exchange Rate Service

**Before (Encore.ts)**:
```typescript
// backend/exchange/get_rate.ts
import { api } from "encore.dev/api";
import { GetRateParams, GetRateResponse } from "./types";

export const getRate = api<GetRateParams, GetRateResponse>(
  { expose: true, method: "GET", path: "/exchange/rate/:from/:to" },
  async ({ from, to }) => {
    const rate = await getExchangeRate(from, to);
    return {
      rate: {
        from: from.toUpperCase(),
        to: to.toUpperCase(),
        rate: rate,
        lastUpdated: new Date()
      }
    };
  }
);
```

**After (Next.js)**:
```typescript
// src/app/api/exchange/rate/[from]/[to]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getExchangeRate } from '@/lib/exchange';

type Params = {
  params: {
    from: string;
    to: string;
  };
};

export async function GET(
  request: NextRequest,
  { params }: Params
) {
  try {
    const { from, to } = params;
    const rate = await getExchangeRate(from.toUpperCase(), to.toUpperCase());
    
    return NextResponse.json({
      rate: {
        from: from.toUpperCase(),
        to: to.toUpperCase(),
        rate,
        lastUpdated: new Date().toISOString()
      }
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch exchange rate' },
      { status: 500 }
    );
  }
}

// Cache for 10 minutes
export const revalidate = 600;
```

---

### Example 3: Blog Service (with Prisma)

**Before (Encore.ts)**:
```typescript
// backend/blog-v2/list.ts
import { api } from "encore.dev/api";
import db from "../db";

export const list = api(
  { method: "POST", path: "/blog-v2/list", expose: true, auth: false },
  async (req: ListBlogsRequest): Promise<ListBlogsResponse> => {
    const { status, kind, page = 1, limit = 20 } = req;
    const offset = (page - 1) * limit;
    
    const countResult = await db.queryRow<{ total: string }>`
      SELECT COUNT(*) as total FROM blogs_v2
      WHERE status = ${status}
    `;
    
    const blogsIterator = db.query<Blog>`
      SELECT * FROM blogs_v2
      WHERE status = ${status}
      ORDER BY published_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `;
    
    const blogs: Blog[] = [];
    for await (const blog of blogsIterator) {
      blogs.push(blog);
    }
    
    return {
      blogs,
      total: parseInt(countResult?.total || "0"),
      page,
      limit,
      total_pages: Math.ceil(parseInt(countResult?.total || "0") / limit)
    };
  }
);
```

**After (Next.js with Prisma)**:
```typescript
// src/app/api/blog/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const listBlogsSchema = z.object({
  status: z.string().optional(),
  kind: z.string().optional(),
  page: z.number().default(1),
  limit: z.number().default(20),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { status, kind, page, limit } = listBlogsSchema.parse(body);
    
    const skip = (page - 1) * limit;
    
    const where = {
      ...(status && { status }),
      ...(kind && { kind }),
    };
    
    const [blogs, total] = await Promise.all([
      prisma.blogs_v2.findMany({
        where,
        orderBy: [
          { published_at: 'desc' },
          { created_at: 'desc' },
        ],
        skip,
        take: limit,
      }),
      prisma.blogs_v2.count({ where }),
    ]);
    
    return NextResponse.json({
      blogs,
      total,
      page,
      limit,
      total_pages: Math.ceil(total / limit),
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request parameters', details: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}
```

---

### Example 4: Authentication

**Before (Encore.ts)**:
```typescript
// backend/auth/auth.ts
import { authHandler } from "encore.dev/auth";

export const auth = authHandler<AuthParams, AuthData>(
  async (data) => {
    const authHeader = data.authorization || "";
    
    if (authHeader.startsWith("Basic ")) {
      const credentials = Buffer.from(
        authHeader.replace("Basic ", ""),
        "base64"
      ).toString("utf-8");
      const [username, password] = credentials.split(":");
      
      if (username === adminUsername() && password === adminPassword()) {
        return {
          userID: "admin",
          email: null,
          isAdmin: true
        };
      }
    }
    
    throw APIError.unauthenticated("authentication required");
  }
);
```

**After (Next.js with NextAuth.js)**:
```typescript
// src/app/api/auth/[...nextauth]/route.ts
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const { username, password } = credentials || {};
        
        if (
          username === process.env.ADMIN_USERNAME &&
          password === process.env.ADMIN_PASSWORD
        ) {
          return {
            id: 'admin',
            name: 'Admin',
            email: null,
            role: 'admin'
          };
        }
        
        return null;
      }
    })
  ],
  pages: {
    signIn: '/admin/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
      }
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
```

**Middleware for protected routes**:
```typescript
// src/middleware.ts
import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized: ({ token }) => token?.role === 'admin'
  },
});

export const config = {
  matcher: ['/admin/:path*']
};
```

---

## 🎨 Frontend Migration

### Page Migration Example

**Before (React Router)**:
```typescript
// frontend/pages/blog/BlogListPageV2.tsx
import { useEffect, useState } from 'react';
import backend from "~backend/client";

export default function BlogListPageV2() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchBlogs() {
      const result = await backend.blogV2.list({
        status: 'published',
        page: 1,
        limit: 20
      });
      setBlogs(result.blogs);
      setLoading(false);
    }
    fetchBlogs();
  }, []);
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <div>
      {blogs.map(blog => (
        <div key={blog.id}>{blog.title}</div>
      ))}
    </div>
  );
}
```

**After (Next.js Server Component with ISR)**:
```typescript
// src/app/blog/page.tsx
import { prisma } from '@/lib/prisma';
import { BlogCard } from '@/components/blog/BlogCard';

async function getBlogs() {
  return await prisma.blogs_v2.findMany({
    where: { status: 'published' },
    orderBy: [
      { published_at: 'desc' },
      { created_at: 'desc' },
    ],
    take: 20,
  });
}

export default async function BlogListPage() {
  const blogs = await getBlogs();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

// Revalidate every 5 minutes
export const revalidate = 300;

// Generate metadata for SEO
export async function generateMetadata() {
  return {
    title: 'Blog | Smart Calculator Hubs',
    description: 'Latest blog posts about calculators, finance, and more',
  };
}
```

**Calculator Pages (Client Component)**:
```typescript
// src/app/calculators/financial/compound-interest/page.tsx
import { CompoundInterestCalculator } from '@/components/calculators/financial/CompoundInterestCalculator';

export const metadata = {
  title: 'Compound Interest Calculator | Smart Calculator Hubs',
  description: 'Calculate compound interest with our easy-to-use calculator',
};

export default function CompoundInterestPage() {
  // Calculator remains client-side for interactivity
  return <CompoundInterestCalculator />;
}
```

```typescript
// src/components/calculators/financial/CompoundInterestCalculator.tsx
'use client';

import { useState } from 'react';
import { calculateCompoundInterest } from '@/lib/calculators';

export function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState(1000);
  const [rate, setRate] = useState(5);
  const [time, setTime] = useState(10);
  const [result, setResult] = useState(null);
  
  const handleCalculate = () => {
    const calculation = calculateCompoundInterest(principal, rate, time);
    setResult(calculation);
  };
  
  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Calculator UI */}
    </div>
  );
}
```

---

## 🗄️ Database Migration

### Prisma Schema Generation

```bash
# Pull existing database schema
npx prisma db pull

# Review generated schema
cat prisma/schema.prisma
```

**Generated Schema Example**:
```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model blogs_v2 {
  id           Int       @id @default(autoincrement())
  title        String
  slug         String    @unique
  content      String
  excerpt      String?
  status       String    @default("draft")
  kind         String?
  source_id    Int?
  author       String?
  published_at DateTime?
  created_at   DateTime  @default(now())
  updated_at   DateTime  @updatedAt
  
  source       sources?  @relation(fields: [source_id], references: [id])
}

model sources {
  id              Int         @id @default(autoincrement())
  name            String
  category        String
  type            String
  status          String      @default("active")
  last_blogged_at DateTime?
  created_at      DateTime    @default(now())
  
  blogs           blogs_v2[]
}

model exchange_rates {
  id           Int      @id @default(autoincrement())
  base         String
  target       String
  rate         Float
  last_updated DateTime @default(now())
  
  @@unique([base, target])
  @@index([base, target])
}

model pageviews {
  id         Int      @id @default(autoincrement())
  path       String
  user_id    String?
  created_at DateTime @default(now())
  
  @@index([path, created_at])
}

model pwa_installs {
  id         Int      @id @default(autoincrement())
  user_id    String
  device     String?
  created_at DateTime @default(now())
}

model shortened_urls {
  id         Int      @id @default(autoincrement())
  short_code String   @unique
  long_url   String
  clicks     Int      @default(0)
  created_at DateTime @default(now())
  
  @@index([short_code])
}

model users {
  id         Int      @id @default(autoincrement())
  user_id    String   @unique
  preferences Json?
  created_at DateTime @default(now())
  updated_at DateTime @updatedAt
}

model calc_history {
  id              Int      @id @default(autoincrement())
  user_id         String
  calculator_type String
  inputs          Json
  outputs         Json
  favorite        Boolean  @default(false)
  notes           String?
  tags            String[]
  created_at      DateTime @default(now())
  
  @@index([user_id, calculator_type])
}
```

### Using Prisma Client

```typescript
// src/lib/prisma.ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
```

---

## 🔐 Environment Variables

```env
# .env (Next.js)
# Database
DATABASE_URL="postgresql://appuser:password@localhost:5432/calculatorhub"

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here" # Generate with: openssl rand -base64 32
ADMIN_USERNAME="admin"
ADMIN_PASSWORD="secure-password-here"

# OpenAI
OPENAI_API_KEY="sk-..."

# Google Services
GOOGLE_SERVICE_ACCOUNT_JSON='{"type":"service_account",...}'

# AdSense
NEXT_PUBLIC_ADSENSE_PUBLISHER_ID="ca-pub-7271075626732183"

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-DCB2EVWMDL"

# URLs
NEXT_PUBLIC_API_URL="https://smartcalculatorhubs.com"
```

---

## 📦 Deployment to Google Cloud Run

### Dockerfile for Next.js

```dockerfile
# Multi-stage build for Next.js
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set environment variables for build
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

# Generate Prisma Client
RUN npx prisma generate

# Build Next.js
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/api/health', (r) => process.exit(r.statusCode === 200 ? 0 : 1))"

CMD ["node", "server.js"]
```

### next.config.js for Docker

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  
  // Image optimization
  images: {
    domains: ['smartcalculatorhubs.com'],
    formats: ['image/avif', 'image/webp'],
  },
  
  // Headers for security and caching
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
        ],
      },
    ];
  },
  
  // Redirects
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/blog/page/1',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
```

### Deploy to Cloud Run

```bash
# Build and push Docker image
docker build -t gcr.io/smartcalculatorhub-472911/nextjs-app:latest .
docker push gcr.io/smartcalculatorhub-472911/nextjs-app:latest

# Deploy to Cloud Run
gcloud run deploy calculator-nextjs \
  --image gcr.io/smartcalculatorhub-472911/nextjs-app:latest \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --memory 1Gi \
  --cpu 2 \
  --min-instances 1 \
  --max-instances 10 \
  --timeout 60s \
  --add-cloudsql-instances smartcalculatorhub-472911:us-central1:calculator-db \
  --set-secrets="DATABASE_URL=DATABASE_URL:latest,NEXTAUTH_SECRET=NEXTAUTH_SECRET:latest,OPENAI_API_KEY=OPENAI_API_KEY:latest" \
  --set-env-vars="NODE_ENV=production,NEXTAUTH_URL=https://smartcalculatorhubs.com"
```

---

## ✅ Migration Checklist

### Pre-Migration
- [ ] Export data from Encore PostgreSQL
- [ ] Set up local PostgreSQL for testing
- [ ] Create Next.js project structure
- [ ] Set up Prisma with existing database
- [ ] Configure environment variables

### Backend Migration
- [ ] Migrate auth service → NextAuth.js
- [ ] Migrate health service → `/api/health`
- [ ] Migrate exchange service → `/api/exchange`
- [ ] Migrate user service → `/api/user`
- [ ] Migrate pageviews service → `/api/pageviews`
- [ ] Migrate blog-v2 service → `/api/blog`
- [ ] Migrate AI analysis service → `/api/ai-analysis`
- [ ] Migrate vision service → `/api/vision`
- [ ] Migrate web service (sitemap, robots.txt) → `app/` routes
- [ ] Migrate PWA stats service → `/api/pwa-stats`

### Frontend Migration
- [ ] Migrate homepage → `app/page.tsx`
- [ ] Migrate calculator routes → `app/calculators/`
- [ ] Migrate blog routes → `app/blog/`
- [ ] Migrate admin routes → `app/admin/`
- [ ] Migrate about/contact/privacy pages → `app/`
- [ ] Update all API calls to use Next.js endpoints
- [ ] Implement Server Components where applicable
- [ ] Optimize images with next/image

### Testing
- [ ] Unit tests for all API routes
- [ ] E2E tests for critical user flows
- [ ] Performance testing (Lighthouse)
- [ ] Load testing (1000+ concurrent users)
- [ ] Security audit

### Deployment
- [ ] Create Dockerfile
- [ ] Build and test Docker image locally
- [ ] Push to Google Container Registry
- [ ] Deploy to Cloud Run (staging)
- [ ] Run smoke tests on staging
- [ ] Deploy to Cloud Run (production)
- [ ] Update DNS to point to new Cloud Run service
- [ ] Monitor for 48 hours

### Post-Migration
- [ ] Decommission Encore.dev infrastructure
- [ ] Archive Encore.ts codebase
- [ ] Update documentation
- [ ] Train team on Next.js patterns
- [ ] Set up monitoring and alerts

---

## 💰 Cost Comparison

### Current (Encore.dev)
| Item | Cost |
|------|------|
| Encore Cloud Platform | $29-99/month |
| Database (managed) | Included |
| Build minutes | Included |
| **Total** | **$29-99/month** |

### After (Next.js on Google Cloud)
| Item | Cost |
|------|------|
| Cloud Run (backend) | $20-40/month |
| Cloud SQL (PostgreSQL) | $50-100/month |
| Cloud Storage (static assets) | $1-5/month |
| Cloud CDN | $10-30/month |
| Cloud Build | $0-10/month (120 free builds/day) |
| **Total** | **$81-185/month** |

**Cost Increase**: ~$50-100/month  
**Benefit**: Full control, no vendor lock-in, better performance, unlimited scalability

---

## 🚨 Risks & Mitigation

### Risk 1: Downtime during migration
**Mitigation**: 
- Deploy Next.js app in parallel
- Use feature flags to gradually switch traffic
- Keep Encore.dev running during migration
- DNS cutover only after thorough testing

### Risk 2: Data loss
**Mitigation**:
- Full database backup before migration
- Test restore procedure
- Run both systems in parallel initially
- Point-in-time recovery enabled

### Risk 3: Performance degradation
**Mitigation**:
- Load testing before launch
- Monitor performance metrics
- Implement caching (Redis if needed)
- Use CDN for static assets

### Risk 4: SEO impact
**Mitigation**:
- Maintain same URL structure
- Implement 301 redirects if URLs change
- Submit new sitemap to Google
- Monitor search rankings closely

### Risk 5: Team learning curve
**Mitigation**:
- Next.js training sessions
- Comprehensive documentation
- Pair programming during migration
- Code reviews

---

## 📚 Resources

### Official Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [NextAuth.js Documentation](https://next-auth.js.org)
- [Google Cloud Run Documentation](https://cloud.google.com/run/docs)

### Migration Guides
- [Migrating from Create React App to Next.js](https://nextjs.org/docs/migrating/from-create-react-app)
- [Next.js App Router Migration Guide](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration)

### Community
- [Next.js Discord](https://nextjs.org/discord)
- [Prisma Discord](https://pris.ly/discord)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

---

## 🎯 Conclusion

### Should You Migrate?

**YES**, if you want:
✅ No vendor lock-in  
✅ Deploy anywhere (GCP, AWS, Vercel, etc.)  
✅ Industry-standard skills  
✅ Larger community & ecosystem  
✅ Better long-term maintainability  

**MAYBE**, if you need:
⚠️ Rapid prototyping (Encore is faster initially)  
⚠️ Auto-generated API client (though Next.js has alternatives)  

**NO**, if you:
❌ Are happy with Encore Cloud  
❌ Don't need deployment flexibility  
❌ Want to avoid migration effort  

### Our Recommendation

**Migrate to Next.js** for this project because:

1. **You're already planning Google Cloud deployment** - Next.js is simpler to deploy
2. **64+ calculators are mostly frontend** - Next.js excels at static/SSR content
3. **SEO is critical** - Next.js Server Components improve SEO
4. **Long-term viability** - Next.js is battle-tested at scale
5. **Hiring advantage** - Next.js developers are abundant

**Estimated Timeline**: 5 weeks (25 development days)  
**Estimated Cost Increase**: ~$75/month  
**Return on Investment**: Priceless (no vendor lock-in, industry-standard stack)

---

## 🚀 Next Steps

1. **Review this guide** with your team
2. **Set up a staging environment** with Next.js
3. **Migrate one service** (e.g., health) as a proof-of-concept
4. **If successful**, proceed with full migration plan
5. **If blocked**, re-evaluate or get help from Next.js community

---

**Last Updated**: November 5, 2025  
**Version**: 1.0.0  
**Author**: Smart Calculator Hub Team  
**Status**: Ready for Review

---

## Questions?

Contact the team or open a discussion in GitHub Issues.

Good luck with the migration! 🎉
