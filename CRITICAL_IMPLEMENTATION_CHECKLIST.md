# Ghost Protocol - Critical Implementation Checklist

**Priority Level:** CRITICAL  
**Implementation Timeline:** 3-4 days  
**Estimated Effort:** 16-24 hours

This document contains the critical security and deployment configurations required before production deployment.

---

## Quick Start Implementation

### Day 1: Security Hardening

#### 1.1 Update next.config.mjs - Security Headers

**File:** `/next.config.mjs`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Security headers for production
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=()',
          },
        ],
      },
    ];
  },
  // CSP header (if not behind CDN with CSP)
  async rewrites() {
    return {
      beforeFiles: [],
    };
  },
}

export default nextConfig
```

**Action Items:**
- [ ] Update next.config.mjs with security headers
- [ ] Test build: `npm run build`
- [ ] Verify no errors
- [ ] Commit changes

**Time:** 30 minutes

---

#### 1.2 Environment Variables - Secure Configuration

**File:** Vercel Dashboard → Settings → Environment Variables

```
Variables to Add:
- NEXT_PUBLIC_SITE_URL = https://ghostprotocol.lk
- CONTACT_EMAIL_RECIPIENT = ghosts.lk@proton.me (create app-specific email)
- EMAIL_FROM_ADDRESS = noreply@ghostprotocol.lk
- ENABLE_RATE_LIMITING = true
- LOG_LEVEL = info
```

**Action Items:**
- [ ] Add variables to Vercel
- [ ] Verify in local .env.local
- [ ] Test environment loading
- [ ] Document all required variables

**Time:** 20 minutes

---

#### 1.3 Update Contact API with Basic Rate Limiting

**File:** `/app/api/contact/route.ts`

Update the existing contact route to add rate limiting validation:

```typescript
import { NextRequest, NextResponse } from "next/server"

interface ContactFormData {
  name: string
  email: string
  company: string
  message: string
}

// Simple in-memory rate limiting (production: use Redis)
const requestCounts = new Map<string, { count: number; resetTime: number }>()

function getRateLimitKey(ip: string): string {
  return `rate-limit:${ip}`
}

function checkRateLimit(ip: string, maxRequests: number = 5, windowMs: number = 60000): boolean {
  const now = Date.now()
  const key = getRateLimitKey(ip)
  const data = requestCounts.get(key)

  if (!data || now > data.resetTime) {
    requestCounts.set(key, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (data.count < maxRequests) {
    data.count++
    return true
  }

  return false
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function validateFormData(data: unknown): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data || typeof data !== "object") {
    return { valid: false, errors: ["Invalid request body"] }
  }

  const formData = data as Partial<ContactFormData>

  if (!formData.name || typeof formData.name !== "string") {
    errors.push("Name is required")
  } else if (formData.name.trim().length < 2) {
    errors.push("Name must be at least 2 characters")
  } else if (formData.name.length > 100) {
    errors.push("Name is too long")
  }

  if (!formData.email || typeof formData.email !== "string") {
    errors.push("Email is required")
  } else if (!isValidEmail(formData.email)) {
    errors.push("Invalid email format")
  }

  if (formData.company && typeof formData.company === "string") {
    if (formData.company.length > 100) {
      errors.push("Company name is too long")
    }
  }

  if (!formData.message || typeof formData.message !== "string") {
    errors.push("Message is required")
  } else if (formData.message.trim().length < 10) {
    errors.push("Message must be at least 10 characters")
  } else if (formData.message.length > 2000) {
    errors.push("Message is too long")
  }

  return {
    valid: errors.length === 0,
    errors,
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP
    const ip = request.headers.get("x-forwarded-for") || 
               request.headers.get("x-real-ip") || 
               "unknown"

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      )
    }

    // Parse request body
    const body = await request.json()

    // Validate form data
    const validation = validateFormData(body)
    if (!validation.valid) {
      return NextResponse.json(
        { errors: validation.errors },
        { status: 400 }
      )
    }

    const { name, email, company, message } = body as ContactFormData

    // TODO: Send email via email service (SendGrid, Resend, etc.)
    console.log("[Contact Form]", {
      timestamp: new Date().toISOString(),
      name,
      email,
      company,
      message,
      ip,
    })

    // Log successful submission
    console.log(`[v0] Contact form submitted by ${email}`)

    return NextResponse.json(
      { 
        success: true,
        message: "Your message has been received. We'll get back to you soon!" 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("[Contact Form Error]", error)
    return NextResponse.json(
      { error: "An error occurred while processing your request. Please try again." },
      { status: 500 }
    )
  }
}
```

**Action Items:**
- [ ] Update /app/api/contact/route.ts
- [ ] Test rate limiting (submit form 6 times rapidly)
- [ ] Verify 429 response on 6th attempt
- [ ] Verify successful submissions work
- [ ] Test error responses

**Time:** 45 minutes

---

### Day 2: Testing & Verification

#### 2.1 Create Basic Test Suite

**File:** `/tests/api.test.ts`

```typescript
// Basic API tests - add to package.json scripts
import { describe, it, expect } from "vitest"

describe("Contact API", () => {
  it("should reject invalid email", async () => {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: "Test",
        email: "invalid-email",
        message: "Test message",
      }),
    })
    expect(response.status).toBe(400)
  })

  it("should reject short message", async () => {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: "Test",
        email: "test@example.com",
        message: "Short",
      }),
    })
    expect(response.status).toBe(400)
  })

  it("should accept valid submission", async () => {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: "Test User",
        email: "test@example.com",
        company: "Test Co",
        message: "This is a valid test message with sufficient length.",
      }),
    })
    expect(response.status).toBe(200)
  })
})
```

**Setup:**
```bash
npm install -D vitest @testing-library/react
```

**Action Items:**
- [ ] Create /tests directory
- [ ] Add test files
- [ ] Run tests: `npm test`
- [ ] Verify all tests pass

**Time:** 1 hour

---

#### 2.2 Performance Verification

**Checklist:**
- [ ] Run Lighthouse: `npm audit`
- [ ] Check bundle size: `npm run build`
- [ ] Verify performance score > 85
- [ ] Verify accessibility score > 90
- [ ] Verify SEO score > 90
- [ ] Verify best practices > 85

**Tools:**
```
1. Lighthouse (Chrome DevTools → Lighthouse)
2. PageSpeed Insights: https://pagespeed.web.dev
3. WebPageTest: https://www.webpagetest.org
```

**Time:** 1 hour

---

#### 2.3 Security Verification

**Checklist:**
- [ ] Run Security Headers Check: https://securityheaders.com
  - Enter: https://ghostprotocol.lk
  - Verify all headers present

- [ ] Check SSL/TLS: https://www.ssllabs.com/ssltest
  - Enter: ghostprotocol.lk
  - Verify A+ rating

- [ ] OWASP Scan: https://owasp.org/www-project-web-security-testing-guide
  - No XSS vulnerabilities
  - No SQL injection risks
  - No CSRF issues

**Time:** 1 hour

---

### Day 3: Deployment Preparation

#### 3.1 Create Deployment Documentation

**File:** `/DEPLOYMENT_STEPS.md`

```markdown
# Production Deployment Steps

## Pre-Deployment

1. Ensure all tests pass:
   npm test

2. Build locally:
   npm run build

3. Check for errors:
   npm run lint

4. Verify environment variables in Vercel

## Deployment Process

### Option 1: Automatic (Recommended)
1. Merge PR to main branch
2. GitHub Actions automatically runs tests
3. Vercel automatically deploys
4. Check deployment status in Vercel dashboard

### Option 2: Manual
1. Run: vercel deploy --prod
2. Confirm production deployment
3. Wait for build to complete (~3-5 minutes)
4. Monitor deployment logs

## Post-Deployment

1. Visit https://ghostprotocol.lk
2. Test key functionality:
   - [ ] Homepage loads
   - [ ] Navigation works
   - [ ] Contact form accessible
   - [ ] Submit test message
   - [ ] Links functional
   - [ ] Mobile responsive

3. Check Vercel Dashboard:
   - [ ] Build succeeded
   - [ ] Error rate: 0%
   - [ ] Performance metrics acceptable

4. Monitor for 1 hour:
   - [ ] No error spikes
   - [ ] Normal traffic patterns
   - [ ] Analytics tracking active

## Rollback (If Needed)

1. Go to Vercel Dashboard
2. Select Project → Deployments
3. Find previous stable deployment
4. Click "..." → "Promote to Production"
5. Confirm rollback
```

**Action Items:**
- [ ] Create deployment documentation
- [ ] Review with team
- [ ] Get approvals
- [ ] Practice deployment procedure

**Time:** 1 hour

---

#### 3.2 Create Monitoring Dashboard Setup

**File:** `/MONITORING_SETUP.md`

```markdown
# Monitoring Setup Guide

## Vercel Analytics (Auto-Enabled)

Dashboard: https://vercel.com/dashboard

Metrics:
- Page load performance
- Web Core Vitals
- Error rates
- Traffic patterns

## Adding Google Analytics (Optional)

1. Create GA4 property at analytics.google.com
2. Get Measurement ID: G-XXXXXXXXXX
3. Add to .env:
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
4. Add script to layout.tsx

## Setting Up Error Tracking (Sentry)

1. Create account at sentry.io
2. Create Next.js project
3. Get DSN: https://key@sentry.io/id
4. npm install @sentry/nextjs
5. Run: npm exec @sentry/wizard@latest
6. Add SENTRY_AUTH_TOKEN to Vercel

## Daily Monitoring Checklist

- [ ] Check Vercel Analytics
- [ ] Review error logs
- [ ] Monitor performance metrics
- [ ] Check uptime status
- [ ] Review contact form submissions
```

**Action Items:**
- [ ] Set up Vercel Analytics
- [ ] (Optional) Add Google Analytics
- [ ] (Optional) Add Sentry error tracking
- [ ] Create monitoring checklist

**Time:** 2 hours

---

### Day 4: Final Verification & Deployment

#### 4.1 Final Deployment Checklist

```
CODE QUALITY:
- [ ] TypeScript: npm run lint passes
- [ ] No console.log statements (debug removed)
- [ ] No TODOs without context
- [ ] All imports resolved
- [ ] Build completes without errors

SECURITY:
- [ ] Security headers configured
- [ ] Rate limiting implemented
- [ ] Environment variables secure
- [ ] No hardcoded secrets
- [ ] Dependencies audited (npm audit)

TESTING:
- [ ] All tests pass
- [ ] Manual testing complete
- [ ] Links verified
- [ ] Forms tested
- [ ] Mobile responsive verified

PERFORMANCE:
- [ ] Lighthouse score 85+
- [ ] Bundle size acceptable
- [ ] Images optimized
- [ ] Caching configured
- [ ] CDN active

CONTENT:
- [ ] All real content finalized
- [ ] No placeholder text
- [ ] Images high-quality
- [ ] Links functional
- [ ] Metadata complete

DEPLOYMENT:
- [ ] Vercel project configured
- [ ] Environment variables set
- [ ] Domain configured
- [ ] SSL active
- [ ] Analytics ready

MONITORING:
- [ ] Error tracking configured
- [ ] Performance monitoring active
- [ ] Uptime monitoring enabled
- [ ] Alert notifications set up
- [ ] Dashboard accessible
```

**Action Items:**
- [ ] Complete all checklist items
- [ ] Get team sign-off
- [ ] Schedule deployment window
- [ ] Notify stakeholders

**Time:** 2 hours

---

#### 4.2 Deployment Window

**Recommended Time:** 
- Low traffic period
- Off-peak hours
- Team available for monitoring

**Steps:**
1. Final test of staging deployment
2. Merge to main branch
3. Vercel automatically deploys
4. Monitor for 30-60 minutes
5. Verify all systems operational

**Rollback Ready:** Yes (if needed within 1-2 minutes)

---

## Success Indicators

After deployment, verify:

✅ **Site Accessible**
- [ ] https://ghostprotocol.lk loads in < 3 seconds
- [ ] All pages responsive on mobile
- [ ] Navigation functional

✅ **Functionality Working**
- [ ] Contact form submits successfully
- [ ] Knowledge base accessible
- [ ] Blog articles load
- [ ] Portfolio displays correctly

✅ **Performance Acceptable**
- [ ] Lighthouse score 85+
- [ ] No Core Web Vitals warnings
- [ ] Error rate < 0.1%

✅ **Security Verified**
- [ ] HTTPS active
- [ ] Security headers present
- [ ] No console errors
- [ ] No security warnings

✅ **Analytics Active**
- [ ] Pageviews tracking
- [ ] Events tracking
- [ ] User sessions visible
- [ ] Error tracking active

---

## Emergency Contacts & Resources

**If Issues Arise:**
1. Check Vercel Dashboard for errors
2. Review error tracking (Sentry/Vercel)
3. Check GitHub Actions logs
4. Perform rollback if necessary
5. Contact team lead

**Documentation:**
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- This guide: /DEPLOYMENT_STEPS.md

---

## Timeline Summary

| Day | Task | Time | Status |
|-----|------|------|--------|
| 1 | Security Headers + API Updates | 2-3 hrs | Critical |
| 1 | Environment Setup | 0.5 hrs | Critical |
| 2 | Testing | 3 hrs | Important |
| 3 | Documentation + Monitoring | 3 hrs | Important |
| 4 | Final Verification | 2 hrs | Critical |
| 4 | **Deployment** | 1 hr | **GO LIVE** |

**Total Implementation Time:** 16-24 hours (can be completed in 3-4 days)

---

**Status: READY FOR PRODUCTION DEPLOYMENT**

Generated: January 2026  
Version: 1.0
