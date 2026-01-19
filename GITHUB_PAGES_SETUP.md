# GitHub Pages Deployment Guide

## Prerequisites
- GitHub repository with your Ghost Protocol website code
- Node.js and npm installed locally

## Setup Steps

### 1. Repository Settings
1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under "Source", select **GitHub Actions**
4. Save the settings

### 2. Deploy Process
The website automatically deploys when you:
- Push to the `main` branch
- Create a pull request to `main`

### 3. Deployment Details
- The GitHub Actions workflow in `.github/workflows/deploy.yml` builds the project
- Builds static HTML pages into the `out/` directory
- Deploys to GitHub Pages automatically

### 4. Access Your Site
After the first deployment, your site will be available at:
- If repo is public: `https://yourusername.github.io/repository-name/`
- If repo is your user site: `https://yourusername.github.io/`

### 5. Custom Domain (Optional)
To use a custom domain:
1. Go to **Settings** → **Pages**
2. Under "Custom domain", enter your domain
3. Follow GitHub's DNS configuration instructions
4. Update your domain's DNS records pointing to GitHub Pages

## Build Configuration
- **Static Export**: Enabled in `next.config.mjs` with `output: 'export'`
- **Image Optimization**: Disabled for static export compatibility
- **Dynamic Routes**: Pre-generated via `generateStaticParams()`

## Features Included
- Multi-page routing (Home, Services, Portfolio, Blog, About, Contact)
- Dynamic blog and portfolio pages with static generation
- SEO optimization with sitemap and robots.txt
- Responsive design optimized for all devices
- No server-side processing required

## Troubleshooting

### Build Fails
- Check GitHub Actions logs for error details
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Pages Don't Appear
- Wait 5-10 minutes after deployment
- Clear browser cache
- Check repository Pages settings
- Verify workflow completed successfully

### Links Are Broken
- GitHub Pages apps are deployed to subdirectories
- All internal links should use Next.js `<Link>` component (already configured)
- Relative paths in images must use `/` (already configured)

## Local Testing
To test the static build locally:
\`\`\`bash
npm run build
npx next export
# Files generated in 'out' directory
npx serve out
\`\`\`

## Performance Optimization
- Images are unoptimized for static export compatibility
- CSS is minified automatically by Next.js
- Static assets are cached by GitHub Pages
- Consider using a CDN for large assets if needed
