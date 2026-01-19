# GitHub Pages Deployment Checklist

## Pre-Deployment (30 minutes)

### Repository Setup
- [ ] Create repository named: `ghosts-lk.github.io`
- [ ] Set to Public (required for free GitHub Pages)
- [ ] Initialize without README
- [ ] Clone repository locally
- [ ] Copy project files into repository

### Configuration Verification
- [ ] Confirm `next.config.mjs` has `output: 'export'`
- [ ] Confirm `next.config.mjs` has `images: { unoptimized: true }`
- [ ] Verify all API routes removed or stubbed
- [ ] Verify no Server Components (only client)

### Build Test
- [ ] Run `npm install`
- [ ] Run `npm run build` successfully
- [ ] Verify `out/` directory created with HTML files
- [ ] Verify no errors in build output

### Add Workflow Files
- [ ] Copy `.github/workflows/deploy.yml`
- [ ] Copy `.github/workflows/monitor.yml`
- [ ] Commit files: `git add .github/workflows/`

### Initial Push
- [ ] `git add .`
- [ ] `git commit -m "Deploy to GitHub Pages"`
- [ ] `git push -u origin main`

---

## Deployment (5 minutes)

### Enable GitHub Pages
- [ ] Go to repository Settings
- [ ] Navigate to Pages section
- [ ] Set Source to: "GitHub Actions"
- [ ] Enable "Enforce HTTPS"
- [ ] Save settings

### Monitor Initial Build
- [ ] Go to Actions tab
- [ ] Wait for "Deploy to GitHub Pages" workflow to complete
- [ ] Check for green checkmark (success)
- [ ] If failed, check logs for errors

### Verify Deployment
- [ ] Visit: `https://ghosts-lk.github.io`
- [ ] Verify site loads completely
- [ ] Check all pages accessible
- [ ] Test responsive design on mobile

---

## Custom Domain Setup (30 minutes - 24 hours)

### GitHub Pages Configuration
- [ ] Go to Settings → Pages
- [ ] Enter custom domain: `ghosts-lk.com`
- [ ] GitHub creates CNAME file automatically
- [ ] Enable "Enforce HTTPS"

### Update DNS Records (at your registrar)

**If using Cloudflare (Recommended):**
- [ ] Create Cloudflare account
- [ ] Add domain: `ghosts-lk.com`
- [ ] Copy Cloudflare nameservers
- [ ] Update nameservers at registrar
- [ ] Wait for propagation (can take 24-48 hours)

**If using standard DNS:**
- [ ] Add CNAME record:
  - Host: `www`
  - Points to: `ghosts-lk.github.io`
- [ ] Add A records (for apex domain):
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`

### Verify DNS Setup
- [ ] Run: `nslookup ghosts-lk.com`
- [ ] Check CNAME record resolves correctly
- [ ] Test both `ghosts-lk.com` and `www.ghosts-lk.com`
- [ ] Allow up to 48 hours for full propagation

---

## Security Implementation (1 hour)

### Cloudflare Setup (Free)
- [ ] Create account at cloudflare.com
- [ ] Add domain (free tier)
- [ ] Complete verification
- [ ] Review automatic security features enabled:
  - [ ] DDoS Protection
  - [ ] Web Application Firewall
  - [ ] Bot Management
  - [ ] Rate Limiting

### Verify HTTPS
- [ ] Test both HTTP and HTTPS
- [ ] Confirm automatic HTTPS redirect
- [ ] Check SSL certificate in browser
- [ ] Verify certificate issuer: Let's Encrypt or Cloudflare

### Security Headers
- [ ] Verify `_headers` file in deployment
- [ ] Test headers present via curl:
  ```bash
  curl -I https://ghosts-lk.com | grep -i "X-Frame-Options"
  ```
- [ ] Confirm all security headers present

---

## Performance Verification (30 minutes)

### Lighthouse Score
- [ ] Run Lighthouse audit in DevTools
- [ ] Check scores:
  - [ ] Performance: 85+
  - [ ] Accessibility: 90+
  - [ ] Best Practices: 85+
  - [ ] SEO: 90+

### Core Web Vitals
- [ ] Test with PageSpeed Insights
- [ ] Verify all Green metrics
- [ ] Check mobile performance
- [ ] Check desktop performance

### Image Optimization
- [ ] All images load quickly
- [ ] Check Cloudflare caching (if set up)
- [ ] Verify modern format delivery
- [ ] Test on slow connection (throttle in DevTools)

### Build Size
- [ ] Check out/ directory size: should be < 10MB
- [ ] Verify no unnecessary files included
- [ ] Confirm _next/static compressed

---

## Contact Form Setup (Optional - 30 minutes)

### Choose Backend
- [ ] Select Formspree or Basin
- [ ] Create account (free tier)
- [ ] Get Form ID / API credentials

### Update Contact Form
- [ ] Update `/app/contact/client-page.tsx`
- [ ] Add form submission endpoint
- [ ] Test form submission
- [ ] Verify email notification received

### Test Submission
- [ ] Fill out contact form
- [ ] Submit and verify success message
- [ ] Check email inbox for notification
- [ ] Verify no sensitive data in logs

---

## Monitoring Setup (Optional - 30 minutes)

### GitHub Actions Monitoring
- [ ] Workflows tab shows successful deployments
- [ ] Set up email notifications for failures
- [ ] Monitor deployment history

### Uptime Monitoring
- [ ] Create UptimeRobot account (free)
- [ ] Add monitor for `https://ghosts-lk.com`
- [ ] Set check interval: 5 minutes
- [ ] Enable email alerts

### Analytics (Optional)
- [ ] Set up Vercel Speed Insights
- [ ] Configure analytics dashboard
- [ ] Enable weekly summaries

---

## Post-Deployment Testing

### Functionality Tests
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] All pages accessible
- [ ] Images load without errors
- [ ] External links work
- [ ] Contact form submits successfully

### Mobile Testing
- [ ] Test on iOS devices
- [ ] Test on Android devices
- [ ] Check touch interactions
- [ ] Verify responsive layouts
- [ ] Test form on mobile

### Browser Testing
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile browsers

### SEO Verification
- [ ] Check meta tags present
- [ ] Verify sitemap.xml accessible
- [ ] Check robots.txt
- [ ] Submit to Google Search Console
- [ ] Verify JSON-LD structured data

---

## Maintenance Schedule

### Weekly
- [ ] Check uptime monitoring alerts
- [ ] Review error logs
- [ ] Test form submissions

### Monthly
- [ ] Review analytics
- [ ] Check broken links
- [ ] Update npm packages: `npm update`
- [ ] Run security audit: `npm audit`

### Quarterly
- [ ] Full security review
- [ ] Performance audit
- [ ] Backup repository locally
- [ ] Update documentation

---

## Troubleshooting

### Build Fails
```bash
# Test locally
npm run build

# Check errors
npm run lint

# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Site Shows 404
- [ ] Verify repository name is exactly `ghosts-lk.github.io`
- [ ] Check `out/` directory has files
- [ ] Verify GitHub Pages settings correct
- [ ] Check Actions tab for build errors

### Custom Domain Not Working
- [ ] Verify DNS records are correct: `nslookup ghosts-lk.com`
- [ ] Wait 24-48 hours for full propagation
- [ ] Clear browser cache (Ctrl+Shift+R)
- [ ] Check GitHub Pages settings has domain entered

### Slow Performance
- [ ] Enable Cloudflare caching
- [ ] Purge cache if making changes
- [ ] Compress large images
- [ ] Check Lighthouse scores

---

## Success Criteria

All items must be green before considering deployment complete:

- [ ] Site loads in < 2 seconds
- [ ] All pages accessible
- [ ] Mobile responsive
- [ ] HTTPS working
- [ ] Custom domain resolving
- [ ] Lighthouse 85+
- [ ] Contact form functional
- [ ] No console errors
- [ ] Security headers present
- [ ] Monitoring active

---

## Final Verification

Run this final checklist:

```bash
# Test build
npm run build
echo "✅ Build successful"

# Check size
du -sh out/
echo "✅ Output size reasonable"

# Local test
npx serve out
# Visit http://localhost:3000
echo "✅ Local test successful"

# Check git status
git status
echo "✅ All committed"

# Final push
git push origin main
echo "✅ Deployment in progress"
```

Then visit `https://ghosts-lk.github.io` to verify live deployment.

---

## Support Resources

- GitHub Pages Docs: https://docs.github.com/pages
- Cloudflare Docs: https://developers.cloudflare.com
- Next.js Static Export: https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
- Troubleshooting Guide: See `GITHUB_PAGES_COMPLETE_TECH_STACK.md`

**Estimated Total Time: 2-3 hours (including DNS propagation wait time)**
