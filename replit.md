# Ka Lama Digital Kiosk - UH Maui College

## Overview
A comprehensive digital kiosk application for UH Maui College featuring interactive program information, career paths, and student resources. Built with React and Tailwind CSS.

## Project Type
- **Language**: JavaScript (React via CDN)
- **Type**: Static web application  
- **Server**: Python HTTP server for local development
- **Port**: 5000 (frontend)

## Architecture

### File Structure
```
/
├── index.html          # Redirect to kiosk
├── kiosk.html          # Main kiosk application
├── favicon.svg         # Site favicon
├── assets/
│   ├── logos/         # UHMC brand logos (5 PNG files)
│   ├── screens/       # Screen design mockups (4 SVG files)
│   └── images/        # General images folder
└── .gitignore
```

### Assets Organization
- **assets/logos/** - Contains 5 UHMC brand logos:
  - UHMC-Block-Horizontal-Square-White.png
  - UHMC-Block-Square-Blue.png
  - UHMC-Seal-Left-Blue.png
  - UHMC-Seal-Top-Center-Black.png
  - UHMC-Seal-Top-Center-White.png

- **assets/screens/** - Contains 4 screen design files:
  - Accounting.svg
  - Attract Mode.svg
  - Features Main Menu.svg
  - Programs.svg

### Key Features
1. **Attract Mode** - Slideshow with automatic timeout
2. **Programs Menu** - Four career-focused programs:
   - Applied Business & Information Technology (ABIT)
   - Business Administration
   - Accounting
   - Hospitality & Tourism
3. **Program Details** - Comprehensive information including careers, features, and salary data
4. **Interactive UI** - Touch-optimized kiosk interface
5. **Timeout Protection** - Auto-return to attract mode after inactivity

### Technology Stack
- React 18 (via CDN)
- Tailwind CSS (via CDN)
- Babel Standalone for JSX
- Google Fonts (Montserrat)
- Python HTTP server for development

### Brand Colors
- UHMC Teal: #004f71
- Dark Teal: #00313e
- Gray: #65665c
- Sage: #afa960
- Pink: #e63f51
- Yellow: #ffb600
- Orange: #dd8a03

## Development

### Running Locally
The app is served using Python's built-in HTTP server on port 5000.
- Access via: http://localhost:5000
- Automatically opens kiosk.html

### Deployment
Configured for Replit autoscale deployment - runs only when accessed.

## Recent Changes
- **2025-10-25**: Initial import from GitHub repository
- Set up Replit environment with Python HTTP server
- Organized image assets into logical folders (logos, screens, images)
- Created index.html redirect to kiosk.html
- Added favicon
- Configured deployment for production

## User Preferences
None specified yet.
