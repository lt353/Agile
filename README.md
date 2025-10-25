# Ka Lama Digital Kiosk

A React-based digital kiosk application for UH Maui College's Ka Lama Business Building.

## Features

- **Touch-optimized interface** with large touch targets (60px+)
- **Auto-idle timeout** (60 seconds) with 15-second warning overlay
- **Smooth transitions** and professional animations
- **Responsive design** optimized for 4K portrait displays (1080x1920, 2160x3840)
- **UHMC brand colors** and Montserrat typography
- **Complete program information** for ABIT, Business, Accounting, and Hospitality

## File Structure

```
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # All custom styles and animations
├── js/
│   ├── app.js            # Main application component
│   ├── data/
│   │   └── programs.js   # Program data
│   ├── hooks/
│   │   └── useIdleTimeout.js  # Idle timeout hook
│   └── components/
│       ├── AttractMode.js     # Attract mode slideshow
│       ├── MainMenu.js        # Main menu screen
│       ├── ProgramsGrid.js    # Programs grid
│       ├── ProgramDetail.js   # Program detail pages
│       ├── NavBar.js          # Navigation bar component
│       ├── IdleWarning.js     # Idle warning overlay
│       └── ComingSoon.js      # Coming soon placeholder
└── kiosk.html             # Single-file version (legacy)
```

## How to Use

1. Open `index.html` in a web browser
2. No build process or server required
3. Touch anywhere on Attract Mode to start

## Navigation Flow

```
Attract Mode (Slideshow)
    ↓
Main Menu
    ├── Programs → Programs Grid → Program Details
    └── Building Directory → Coming Soon
```

## Updating Components

Each component is in its own file for easy maintenance:

- **Update program data**: Edit `js/data/programs.js`
- **Update styles**: Edit `css/styles.css`
- **Update a screen**: Edit the corresponding component in `js/components/`
- **Update idle timeout**: Edit `js/hooks/useIdleTimeout.js`

## Brand Colors

- Primary: `#004f71` (UHMC Teal)
- Dark Teal: `#00313e`
- Yellow: `#ffb600`
- Olive: `#789904`
- Pink: `#e63f51`

## Technology Stack

- React 18 (via CDN)
- Tailwind CSS (via CDN)
- Babel Standalone for JSX
- Google Fonts (Montserrat)
