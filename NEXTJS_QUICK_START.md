# Next.js Migration - Quick Start
## Set up Next.js project in 30 minutes

This guide will help you set up a parallel Next.js installation to test the migration.

---

## 🚀 Quick Start Commands

### 1. Create Next.js Project (in parent directory)

```powershell
# Navigate to parent directory
cd ..

# Create Next.js 15 project
npx create-next-app@latest smart-calculator-nextjs `
  --typescript `
  --tailwind `
  --app `
  --src-dir `
  --import-alias "@/*" `
  --no-git

# Enter the new project
cd smart-calculator-nextjs
```

### 2. Install Dependencies

```powershell
# Core dependencies
npm install prisma @prisma/client zod date-fns sharp

# Authentication
npm install next-auth @auth/prisma-adapter bcryptjs
npm install -D @types/bcryptjs

# OpenAI
npm install openai

# Dev tools
npm install -D @types/node tsx
```

### 3. Set Up Prisma

```powershell
# Initialize Prisma
npx prisma init

# Create .env file
@"
DATABASE_URL="postgresql://appuser:password@localhost:5432/calculatorhub?schema=public"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="$(openssl rand -base64 32)"
ADMIN_USERNAME="admin"
ADMIN_PASSWORD="your-password-here"
OPENAI_API_KEY="sk-your-key"
"@ | Out-File -FilePath .env -Encoding UTF8
```

### 4. Pull Database Schema

```powershell
# Pull existing schema from Encore database
npx prisma db pull

# Generate Prisma Client
npx prisma generate
```

### 5. Create Basic API Structure

```powershell
# Create API directories
New-Item -ItemType Directory -Path "src/app/api/health" -Force
New-Item -ItemType Directory -Path "src/app/api/blog" -Force
New-Item -ItemType Directory -Path "src/app/api/exchange/rate" -Force
New-Item -ItemType Directory -Path "src/lib" -Force
```

### 6. Create Prisma Client Singleton

```powershell
# Create src/lib/prisma.ts
@"
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
"@ | Out-File -FilePath "src/lib/prisma.ts" -Encoding UTF8
```

### 7. Create Health Check Endpoint

```powershell
# Create src/app/api/health/route.ts
@"
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Test database connection
    await prisma.\$queryRaw\`SELECT 1\`;
    
    return NextResponse.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      database: 'connected'
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: 'error',
        timestamp: new Date().toISOString(),
        database: 'disconnected'
      },
      { status: 500 }
    );
  }
}
"@ | Out-File -FilePath "src/app/api/health/route.ts" -Encoding UTF8
```

### 8. Test the Setup

```powershell
# Start development server
npm run dev
```

Open browser to:
- http://localhost:3000 (Next.js homepage)
- http://localhost:3000/api/health (Health check API)

---

## 📋 Verification Checklist

After running the commands above, verify:

- [ ] Next.js dev server starts without errors
- [ ] `/api/health` returns `{"status": "ok", ...}`
- [ ] Prisma Client generated successfully
- [ ] Database connection works
- [ ] TypeScript compilation has no errors

---

## 🔄 Next Steps

Once basic setup is working:

1. **Copy components** from `../smart-calculator-hub-main/frontend/components`
2. **Migrate one calculator** as proof-of-concept
3. **Set up authentication** with NextAuth.js
4. **Create one API route** (e.g., exchange rates)
5. **Test thoroughly** before migrating more

---

## 📝 Project Structure After Setup

```
smart-calculator-nextjs/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── health/
│   │   │       └── route.ts       ✅ Created
│   │   ├── page.tsx               ✅ Auto-generated
│   │   └── layout.tsx             ✅ Auto-generated
│   └── lib/
│       └── prisma.ts              ✅ Created
├── prisma/
│   ├── schema.prisma              ✅ Generated from DB
│   └── .env                       ✅ Created
├── .env                           ✅ Created
├── next.config.js                 ✅ Auto-generated
├── tsconfig.json                  ✅ Auto-generated
├── package.json                   ✅ Auto-generated
└── README.md                      ✅ Auto-generated
```

---

## 🐛 Troubleshooting

### Issue: `npx create-next-app` fails
**Solution**: Make sure you have Node.js 18+ installed
```powershell
node --version  # Should be v18.0.0 or higher
```

### Issue: Prisma can't connect to database
**Solution**: 
1. Check database is running
2. Verify DATABASE_URL in .env
3. Check firewall isn't blocking PostgreSQL port 5432

### Issue: TypeScript errors in Prisma Client
**Solution**: Regenerate Prisma Client
```powershell
npx prisma generate
```

### Issue: `sharp` installation fails on Windows
**Solution**: Install Windows Build Tools
```powershell
npm install --global windows-build-tools
```

---

## 🔗 Useful Commands

```powershell
# Development
npm run dev           # Start dev server (localhost:3000)
npm run build         # Build for production
npm run start         # Start production server

# Database
npx prisma studio     # Open Prisma Studio (database GUI)
npx prisma db pull    # Pull schema from database
npx prisma generate   # Generate Prisma Client
npx prisma migrate dev # Run migrations (if you create new ones)

# Type checking
npm run type-check    # Check TypeScript types (add to package.json)
```

---

## 📊 Expected Timeline

| Step | Time | Total |
|------|------|-------|
| 1. Create Next.js project | 2 min | 2 min |
| 2. Install dependencies | 3 min | 5 min |
| 3. Set up Prisma | 2 min | 7 min |
| 4. Pull database schema | 3 min | 10 min |
| 5. Create API structure | 2 min | 12 min |
| 6-7. Create Prisma client & health endpoint | 5 min | 17 min |
| 8. Test setup | 5 min | 22 min |
| **Total** | | **~25 minutes** |

---

## ✅ Success Criteria

You've successfully set up the Next.js project when:

1. ✅ Dev server runs at http://localhost:3000
2. ✅ Health endpoint returns successful response
3. ✅ No TypeScript errors
4. ✅ Prisma Client generated
5. ✅ Database connection verified

---

## 🎯 What's Next?

After completing this quick start, you can:

1. **Read** `NEXTJS_MIGRATION_GUIDE.md` for full migration strategy
2. **Copy** one calculator component from old project
3. **Migrate** exchange rate API as first service
4. **Test** with a simple frontend page
5. **Iterate** on more complex features

---

## 📞 Need Help?

- **Next.js Discord**: https://nextjs.org/discord
- **Prisma Discord**: https://pris.ly/discord
- **Stack Overflow**: Tag your questions with `next.js` and `prisma`

---

**Time to complete**: ~30 minutes  
**Difficulty**: Beginner  
**Prerequisites**: Node.js 18+, PostgreSQL running

Good luck! 🚀
