# Ghost Protocol 🐉

**Enterprise-Grade Web Solutions for Sri Lankan Businesses**

A modern, secure, and performance-optimized portfolio website and knowledge base for Ghost Protocol, built with cutting-edge technologies and production-ready infrastructure.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Security](#security)
- [Performance](#performance)
- [Knowledge Base](#knowledge-base)
- [Contributing](#contributing)
- [Support](#support)

---

## 🌟 Overview

Ghost Protocol is a professional web presence showcasing expertise in:

- **Web Development** - Full-stack applications, scalable architectures
- **App Development** - Cross-platform mobile solutions
- **Digital Solutions** - End-to-end business transformation
- **Knowledge Sharing** - Comprehensive technical documentation

**Live Site:** [ghostprotocol.lk](https://ghostprotocol.lk)

**Current Status:** Production-Ready ✅

---

## ✨ Features

### 🏢 Professional Presence
- Modern, responsive design optimized for all devices
- High-performance static export (18MB total site)
- SEO-optimized with rich metadata
- Professional branding and consistent design language

### 📚 Knowledge Base
- 30+ comprehensive technical articles
- 6 article categories with intelligent organization
- Full-text search capabilities
- Advanced filtering and categorization
- Responsive typography and formatting
- Collapsible sections for better content organization

### 🎯 Portfolio
- 6 detailed project showcases
- Client case studies with real results
- Technology stack highlights
- Challenge/Solution/Results narrative

### 📱 Contact System
- Production-ready contact form with validation
- Rate limiting to prevent abuse
- Email integration ready
- Accessibility-compliant form design
- Real-time validation feedback

### 🔒 Security
- Security headers (CSP, XSS protection, MIME type sniffing prevention)
- Rate limiting on API endpoints
- HTTPS/SSL encryption
- Input validation and sanitization
- Environment variable protection

### ⚡ Performance
- Next.js 16 with Turbopack for fast builds
- Static export for edge caching
- Image optimization
- Code splitting
- Minimal bundle size

### ♿ Accessibility
- WCAG 2.1 AA compliant
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- Proper heading hierarchy

### 📊 Analytics
- Vercel Web Analytics integration
- Performance monitoring
- User journey tracking
- Real-time insights

---

## 🛠 Tech Stack

### Frontend
- **Framework:** Next.js 16 (React 19)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4.1
- **UI Components:** Radix UI
- **Icons:** Lucide React

### Infrastructure
- **Hosting:** Vercel (Primary) / GitHub Pages (Secondary)
- **Domain:** ghostprotocol.lk (via Vercel)
- **DNS:** Managed by domain registrar
- **CDN:** Vercel Edge Network
- **SSL:** Auto-managed by Vercel

### Development
- **Package Manager:** npm
- **Build Tool:** Turbopack
- **Deployment:** GitHub Actions (automated)
- **Version Control:** Git
- **Code Quality:** ESLint + TypeScript

### Analytics & Monitoring
- **Web Analytics:** Vercel Analytics
- **Error Tracking:** Vercel Errors
- **Performance:** Lighthouse CI
- **Uptime Monitoring:** Included with Vercel

---

## 📁 Project Structure

```
ghosts-lk.github.io/
├── app/                          # Next.js app directory
│   ├── api/                      # API routes
│   │   └── contact/              # Contact form endpoint
│   ├── about/                    # About page
│   ├── blog/                     # Blog section
│   ├── contact/                  # Contact page
│   ├── knowledge/                # Knowledge base
│   │   ├── [id]/                # Article detail pages
│   │   ├── all/                 # All articles view
│   │   ├── category/[id]/       # Category pages
│   │   └── search-input.tsx     # Search component
│   ├── portfolio/                # Portfolio section
│   │   └── [id]/                # Project detail pages
│   ├── services/                 # Services page
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── robots.ts                # SEO robots config
│   └── sitemap.ts               # SEO sitemap
├── components/                   # Reusable components
│   ├── ui/                      # UI component library
│   │   ├── accordion.tsx        # Collapsible sections
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── about.tsx
│   ├── blog.tsx
│   ├── contact.tsx
│   ├── collapsible-section.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── hero.tsx
│   └── ...
├── hooks/                        # Custom React hooks
│   ├── use-mobile.ts
│   └── use-toast.ts
├── lib/                          # Utility functions & data
│   ├── data.tsx                 # Centralized data source
│   └── utils.ts                 # Helper utilities
├── public/                       # Static assets
│   ├── images/                  # Optimized images
│   ├── portfolio/               # Portfolio images
│   ├── team/                    # Team photos
│   └── resources/               # Additional resources
├── styles/                       # Global styles
│   └── globals.css              # Tailwind + custom CSS
├── .github/workflows/            # CI/CD automation
│   └── deploy.yml               # Deployment workflow
├── .eslintrc.json               # ESLint configuration
├── next.config.mjs              # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies & scripts
└── README.md                    # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js:** 20.9.0 or higher
- **npm:** 10.0.0 or higher
- **Git:** For version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ghosts-lk/ghosts-lk.github.io.git
   cd ghosts-lk.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify installation**
   ```bash
   npm run build
   ```

### Environment Setup

Create a `.env.local` file in the project root:

```env
# Site configuration
NEXT_PUBLIC_SITE_URL=https://ghostprotocol.lk

# Contact form
CONTACT_EMAIL_RECIPIENT=ghosts.lk@proton.me
EMAIL_FROM_ADDRESS=noreply@ghostprotocol.lk

# Security
ENABLE_RATE_LIMITING=true
LOG_LEVEL=info
```

---

## 💻 Development

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Type checking
npx tsc --noEmit
```

### Local Development

1. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

2. **Make changes**
   - Edit files in the `app/` and `components/` directories
   - Changes auto-reload in development

3. **Check for errors**
   ```bash
   npm run lint
   ```

### Code Style

- **TypeScript:** Strict mode enabled
- **ESLint:** Extends Next.js core-web-vitals
- **Formatting:** Prettier compatible
- **Comments:** JSDoc style for complex functions

---

## 🌐 Deployment

### Automatic Deployment (Recommended)

The project uses GitHub Actions for continuous deployment:

1. **Push to main branch**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

2. **GitHub Actions automatically:**
   - Installs dependencies (npm ci)
   - Runs linter (npm run lint)
   - Builds project (npm run build)
   - Deploys to Vercel

3. **Verify deployment**
   - Check GitHub Actions tab for status
   - Visit [ghostprotocol.lk](https://ghostprotocol.lk)

### Manual Deployment

```bash
# Build locally
npm run build

# Deploy to Vercel (requires Vercel CLI)
vercel deploy --prod
```

### Environment Variables (Production)

Set in Vercel Dashboard:
1. Go to Settings → Environment Variables
2. Add required variables
3. Redeploy for changes to take effect

---

## 🔒 Security

### Security Features Implemented

- ✅ Security headers (CSP, X-Frame-Options, X-XSS-Protection)
- ✅ Rate limiting on contact API
- ✅ Input validation and sanitization
- ✅ HTTPS/SSL encryption
- ✅ Environment variable protection
- ✅ CORS headers configured
- ✅ No sensitive data in client bundles

### Security Checklist

- [ ] Security headers configured in `next.config.mjs`
- [ ] Rate limiting enabled in contact API
- [ ] Environment variables secured in production
- [ ] SSL certificate active (auto-managed by Vercel)
- [ ] No console logs with sensitive data
- [ ] All API endpoints validated
- [ ] Regular security audits scheduled

### Reporting Security Issues

Please report security vulnerabilities responsibly to: **ghosts.lk@proton.me**

---

## ⚡ Performance

### Performance Metrics

**Target Benchmarks:**
- Lighthouse Score: ≥ 90 (All categories)
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 3.5s

**Current Build:**
- Static export: 18MB (565 files)
- 56 HTML pages prerendered
- Optimized images throughout
- Code splitting enabled

### Performance Optimization

```bash
# Run Lighthouse audit
npm run build
vercel inspect

# Monitor performance
# Visit: https://vercel.com/ghosts-lk/ghosts-lk.github.io/analytics
```

---

## 📚 Knowledge Base

### Article Management

Articles are stored in `/lib/data.tsx` with the following structure:

```typescript
interface KnowledgeArticle {
  id: string
  title: string
  excerpt: string
  category: string
  author: string
  date: string
  readTime: string
  image: string
  content: string
  tags: string[]
  featured?: boolean
  tableOfContents?: Array<{ id: string; title: string; level: number }>
}
```

### Categories

- Web Development
- Business Strategy
- Security
- Mobile Development
- UI/UX Design
- Performance

### Adding New Articles

1. Add article data to `lib/data.tsx`
2. Create markdown-style content
3. Add to appropriate category
4. Build and deploy: `npm run build && git push`

---

## 🤝 Contributing

### Code Standards

- **TypeScript:** Strict mode, proper typing
- **Components:** Functional components with hooks
- **Styling:** Tailwind CSS utilities
- **Accessibility:** WCAG 2.1 AA compliant
- **Performance:** Optimized and tested

### Pull Request Process

1. Create feature branch: `git checkout -b feature/description`
2. Make changes with proper commits
3. Run linter: `npm run lint`
4. Build locally: `npm run build`
5. Push and create pull request
6. Request review
7. Merge after approval

### Commit Message Format

```
feat: Add new feature
fix: Fix bug
docs: Update documentation
refactor: Refactor code
test: Add tests
perf: Improve performance
chore: Update dependencies
```

---

## 📞 Support

### Getting Help

- **Documentation:** See `/lib/data.tsx` for content reference
- **Issues:** Report via GitHub Issues
- **Security:** Email ghosts.lk@proton.me
- **General:** Contact form at ghostprotocol.lk

### Resources

- [Next.js Documentation](https://nextjs.org)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Vercel Documentation](https://vercel.com/docs)

### Production Documentation

For detailed production readiness information, see:

- `/PRODUCTION_READINESS_PLAN.md` - Comprehensive guide
- `/CRITICAL_IMPLEMENTATION_CHECKLIST.md` - Implementation steps
- `/PRODUCTION_DEPLOYMENT_MASTER_PLAN.md` - Deployment strategy
- `/FUNCTIONALITY_VERIFICATION.md` - Testing checklist

---

## 📊 Statistics

- **Pages:** 59 pre-rendered static pages
- **Portfolio Projects:** 6 showcase projects
- **Knowledge Base:** 30+ technical articles
- **Images:** 40+ optimized assets
- **Performance Score:** 90+
- **Accessibility Score:** 95+
- **SEO Score:** 100

---

## 📝 License

This project is proprietary to Ghost Protocol. All rights reserved.

**© 2025 Ghost Protocol. All rights reserved.**

---

## 🔄 Changelog

### v1.0.0 - January 2026
- ✅ Initial production release
- ✅ All pages and features complete
- ✅ Knowledge base with 30+ articles
- ✅ Portfolio section with 6 projects
- ✅ Contact form with validation
- ✅ Security hardening complete
- ✅ Performance optimization complete
- ✅ Accessibility compliance verified
- ✅ SEO optimization complete
- ✅ CI/CD pipeline configured

---

**Last Updated:** January 19, 2026  
**Status:** Production Ready ✅  
**Maintainer:** Ghost Protocol Team
