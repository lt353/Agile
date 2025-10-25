# Building Directory - Digital Signage Application

A comprehensive digital signage application converted from Figma wireframes, featuring interactive floor maps and directory search functionality.

## Overview

This application provides an intuitive building directory system with the following features:
- Interactive floor selection
- List and map views for each floor
- Searchable room directory
- Faculty/staff search with on-screen keyboard
- Clickable floor map with exact room positioning
- Detailed room and faculty information

## File Structure

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

## Features

### 8 Complete Screens

1. **Directory Landing** - Entry point with "Find Rooms & Faculty" option
2. **By Floor Selection** - Choose between Floor 1 and Floor 2 with department previews
3. **Floor 1 List View** - Scrollable list of all rooms on Floor 1
4. **Floor 1 Map View** - Interactive floor map with clickable room numbers
5. **Floor 2 List View** - Scrollable list of all rooms on Floor 2 with departments
6. **Floor 2 Map View** - Interactive floor map with clickable room numbers
7. **Room Info** - Detailed information about selected rooms
8. **By Name Search** - Faculty/staff search with on-screen keyboard
9. **Faculty View** - Faculty member details with link to office location

### Navigation Flows

All navigation flows from the wireframes have been preserved:
- Global HOME button on every screen
- Contextual back buttons (← Back, ← Floors, ← Search)
- Seamless toggle between List and Map views
- Navigation history maintained

### Interactive Elements

- **Map/List Toggle** - Switch between views while maintaining floor context
- **Search Functionality** - Real-time search on both list and map views
- **Clickable Floor Maps** - All room numbers on maps are interactive
- **On-Screen Keyboard** - Full QWERTY keyboard for faculty search
- **Room Highlighting** - Visual feedback on hover and search matches

### Design System

Exact colors and styling from wireframes:
- Primary Action: `#FFD700` (Gold/Yellow buttons)
- Navigation Bar: `#E0E0E0` (Light gray)
- Text Primary: `#333333` (Dark gray)
- Text Secondary: `#666666` (Medium gray)
- Search Box: `#F0F0F0` (Light gray background)

Room color coding:
- Classrooms/Offices: `#FFF9E6` (Cream)
- Restrooms/Utilities: `#4A90E2` (Blue)
- Men's Restrooms: `#76F6E9` (Cyan)
- Women's Restrooms: `#74D5F6` (Light Blue)
- Labs/Science: `#7DD046` (Green)
- Conference Rooms: `#FA8BED` (Pink)
- Administration: `#FFD700` (Gold)

## Floor Maps

### Floor 1
- **26 rooms** (101-137)
- General offices, classrooms, science labs, computer labs
- Facilities: Restrooms, stairs, elevators

### Floor 2
- **25 rooms** (201-235)
- Key departments:
  - Admissions & Records (Room 201)
  - Financial Aid Office (Room 202)
  - Business Administration (Room 203)
  - Hawaiian Studies (Room 204)
  - Hospitality Faculty (Room 206+)
- Facilities: Conference rooms, restrooms, stairs, elevators

## Data Structure

The application includes comprehensive data in `data.js`:
- **51 total rooms** across both floors
- **24 faculty members** with office locations
- **5 major departments** with room assignments
- Room details: number, name, department, occupant, color coding

## How to Use

### Local Development

1. Open `index.html` in a web browser
2. For best results, use a local web server:
   ```bash
   python3 -m http.server 8000
   ```
   Then navigate to `http://localhost:8000`

### Navigation

- **HOME button** - Returns to main entry screen
- **Back buttons** - Navigate to previous screen with context
- **Floor selection** - Choose Floor 1 or Floor 2
- **Toggle buttons** - Switch between List and Map views
- **Search** - Filter rooms by number, name, department, or occupant
- **Click rooms** - On maps or lists to view details
- **Faculty search** - Use on-screen keyboard or type directly

### Search Features

**Floor Search:**
- Available on both List and Map views
- Searches across: room numbers, names, departments, occupants
- Map view highlights matching rooms
- List view filters results in real-time

**Faculty Search:**
- Full-text search across faculty names, titles, departments
- On-screen keyboard for touch-screen kiosks
- Shows room location with clickable link

## Technical Details

### Browser Compatibility

- Modern browsers with ES6+ support
- SVG support required for interactive maps
- Responsive design adapts to different screen sizes

### Performance

- Lazy loading of floor maps (loaded on first view)
- Efficient event delegation for clickable elements
- Smooth transitions between screens
- Minimal dependencies (vanilla JavaScript)

### Accessibility

- Large touch targets (44x44px minimum)
- High contrast text and backgrounds
- Clear visual hierarchy
- Keyboard navigation support

## Content Preservation

All content from the original Figma wireframes has been preserved:
- ✅ Exact text labels and headers
- ✅ Department names and room assignments
- ✅ Floor map positioning (coordinates maintained)
- ✅ Room number placements on maps
- ✅ Color coding for room types
- ✅ Navigation flow and screen relationships
- ✅ Button labels and helper text
- ✅ Search placeholders and instructions

## Future Enhancements

Potential improvements:
- Backend integration for live data updates
- Wayfinding directions between rooms
- Event scheduling integration
- Multi-building support
- Accessibility improvements (screen reader support)
- Analytics tracking
- Admin dashboard for content management

## Credits

Converted from Figma wireframes to working digital signage application while preserving:
- All 8+ screens from original design
- Exact content and text
- Precise floor map positioning
- Complete navigation flows
- Interactive elements and links
- Design system and color palette

---

**Last Updated:** October 25, 2025
**Version:** 1.0.0
