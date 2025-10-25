# Assets Directory

This directory contains all image and media assets for the Ka Lama Digital Kiosk application.

## Directory Structure

### `/logos` - UHMC Brand Logos
Contains official University of Hawaii Maui College logo files:
- `UHMC-Block-Horizontal-Square-White.png` - Horizontal block logo (white version)
- `UHMC-Block-Square-Blue.png` - Square block logo (blue version)
- `UHMC-Seal-Left-Blue.png` - Official seal with left alignment (blue)
- `UHMC-Seal-Top-Center-Black.png` - Official seal centered top (black)
- `UHMC-Seal-Top-Center-White.png` - Official seal centered top (white)

### `/screens` - Screen Design Mockups
Contains SVG mockups and design files for different screens:
- `Accounting.svg` - Accounting program screen design
- `Attract Mode.svg` - Attract mode screen design
- `Features Main Menu.svg` - Main features menu screen design
- `Programs.svg` - Programs overview screen design

### `/images` - General Images
Directory for general application images (currently empty).

## Usage

All assets are accessible via relative paths from the root:
- Logos: `assets/logos/filename.png`
- Screens: `assets/screens/filename.svg`
- Images: `assets/images/filename.ext`

## Notes

These assets are organized for easy maintenance and to keep the project root clean. The kiosk application (kiosk.html) currently uses inline React components and does not directly reference these files - they are available for future use or documentation purposes.
