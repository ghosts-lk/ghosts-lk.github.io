# Ghost Protocol

A Flutter web application for Ghost Protocol services.

## GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the main branch.

### Manual Deployment

If you want to manually deploy the project to GitHub Pages, follow these steps:

1. Build the web version:

   ```
   flutter build web --release --base-href /ghost_protocol/
   ```

2. Deploy the `build/web` directory to GitHub Pages.

### Local Development

To run the project locally:

1. Get dependencies:

   ```
   flutter pub get
   ```

2. Run the web version:
   ```
   flutter run -d chrome
   ```

## Project Structure

- `lib/` - Contains all Dart code
  - `screens/` - Screen widgets
  - `widgets/` - Reusable UI components
  - `models/` - Data models
- `web/` - Web-specific files
- `.github/workflows/` - GitHub Actions workflows

## Features

- Responsive design for mobile and desktop
- Service listings with pricing
- Contact information
- Modern UI with cyberpunk theme
