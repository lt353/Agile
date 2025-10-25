# Building Directory - Digital Signage Application

## Overview
A comprehensive digital signage application for building directory navigation, featuring interactive floor maps and faculty search functionality. Originally converted from Figma wireframes.

## Project Type
- **Language**: Vanilla JavaScript (HTML/CSS/JS)
- **Type**: Static web application
- **Server**: Python HTTP server for local development
- **Port**: 5000 (frontend)

## Architecture

### File Structure
```
/
├── index.html          # Main application with all 8 screens
├── styles.css          # Design system (exact colors and styling from wireframes)
├── app.js              # Navigation and interactivity logic
├── data.js             # Room, department, and faculty data
├── assets/
│   ├── floor1.svg     # Floor 1 interactive map (26 rooms)
│   └── floor2.svg     # Floor 2 interactive map (25 rooms)
└── Current Digital Signage Flow.svg  # Original Figma wireframes
```

### Key Features
1. **Interactive Floor Maps** - Clickable SVG floor plans with 51 rooms across 2 floors
2. **Directory Search** - Search rooms by number, name, department, or occupant
3. **Faculty Search** - Search 24 faculty members with on-screen keyboard
4. **Multi-View Navigation** - Toggle between list and map views
5. **Room Details** - Detailed information for each room
6. **Responsive Design** - Works on various screen sizes

### Technology Stack
- Pure HTML5, CSS3, JavaScript (ES6+)
- No frameworks or dependencies
- SVG for interactive floor maps
- Python HTTP server for development

### Data Structure
- 51 rooms total (26 on Floor 1, 25 on Floor 2)
- 24 faculty members with office locations
- 5 major departments
- Color-coded room types

## Development

### Running Locally
The app is served using Python's built-in HTTP server on port 5000.

### Deployment
Configured for Replit autoscale deployment - runs only when accessed.

## Recent Changes
- **2025-10-25**: Initial import from GitHub repository and Replit environment setup
- Configured Python HTTP server workflow on port 5000
- Added deployment configuration for production

## User Preferences
None specified yet.
