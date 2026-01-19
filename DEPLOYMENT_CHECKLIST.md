# GitHub Pages Deployment Checklist

## Workflow Status ✓
- [x] `deploy.yml` - Updated to use Node 20.x and v4 actions
- [x] `nextjs.yml` - Fixed malformed step and updated to v4 actions
- [x] Added pnpm support to both workflows
- [x] Added `export const dynamic = "force-static"` to `sitemap.ts` and `robots.ts`
- [x] All GitHub Actions are updated to current versions (v4)

## Required GitHub Repository Configuration ⚠️

You MUST complete these steps in your GitHub repository settings:

### 1. GitHub Pages Source Setting
**Go to:** https://github.com/ghosts-lk/ghosts-lk.github.io/settings/pages

- **Source:** Change to "GitHub Actions"
- **Branch:** Should be "main" (for this repo, any branch selection doesn't matter since source is GitHub Actions)

### 2. Branch Protection Rules (if any)
**Go to:** https://github.com/ghosts-lk/ghosts-lk.github.io/settings/branches

- If you have branch protection rules on `main`, ensure:
  - Deployments are not blocked
  - Status checks include the "build" job from GitHub Actions

### 3. Actions Permissions
**Go to:** https://github.com/ghosts-lk/ghosts-lk.github.io/settings/actions

- Ensure **Actions permissions** are set to:
  - ✓ Allow all actions and reusable workflows
  - OR ✓ Allow selected actions

### 4. Verify Workflow File Locations
- [x] `.github/workflows/deploy.yml` - exists
- [x] `.github/workflows/nextjs.yml` - exists

## Build & Deployment Flow

1. Push to `main` branch triggers workflows
2. **Build Step:**
   - Installs Node 20.x
   - Sets up pnpm
   - Installs dependencies with pnpm/npm
   - Runs `npm run build` 
   - Uploads `./out` directory as artifact
3. **Deploy Step:**
   - Takes artifact from build job
   - Deploys to GitHub Pages via `actions/deploy-pages@v4`
   - Site available at `https://ghosts-lk.github.io`

## Troubleshooting

### Error: "Failed to create deployment (status: 404)"
- **Solution:** Check GitHub Pages source setting (must be "GitHub Actions")

### Error: "Cannot find any run with github.run_id"
- **Solution:** Usually occurs when GitHub Pages is not properly configured for Actions
- Verify the source setting is set to "GitHub Actions"

### Error: "GitHub Pages has not been enabled"
- **Solution:** Go to repository settings → Pages and enable it with "GitHub Actions" as source

## Next Steps

1. Go to https://github.com/ghosts-lk/ghosts-lk.github.io/settings/pages
2. Set **Source** to **GitHub Actions**
3. Save settings
4. Trigger a new workflow run (push to main or manually trigger)
5. Check Actions tab to see deployment progress
6. Once successful, site will be live at https://ghosts-lk.github.io

---

**Last Updated:** January 17, 2026
