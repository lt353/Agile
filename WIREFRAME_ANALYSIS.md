# COMPLETE WIREFRAME ANALYSIS
## Digital Signage Flow from "Current Digital Signage Flow.svg"

---

## 1. ALL SCREENS IN THE WIREFRAME (16 Total)

Listed in order of appearance in the SVG file:

1. **Faculty Member View** (clip0_137_2)
2. **By Name** (clip1_137_2)
3. **Room info** (clip2_137_2)
4. **floor_2_list_view** (clip3_137_2)
5. **Floor 2_2** (clip4_137_2) - Map view
6. **floor_1_list_view** (clip6_137_2)
7. **Floor 1** (clip7_137_2) - Map view
8. **By floor** (clip9_137_2)
9. **Directory Landing** (clip12_137_2)
10. **ABIT** (clip13_137_2)
11. **Accounting** (clip14_137_2)
12. **Hospitality** (clip15_137_2)
13. **Business_2** (clip16_137_2)
14. **Programs** (clip17_137_2)
15. **Features Main Menu** (clip18_137_2)
16. **Attract Mode** (clip19_137_2)

---

## 2. THE VISUAL FLOW - User Journey

### STARTING SCREEN: **Attract Mode**

The application starts at **"Attract Mode"** (NOT "Directory Landing"!)

```
┌─────────────────────────────────────────────────────────────────┐
│                      FULL USER JOURNEY                          │
└─────────────────────────────────────────────────────────────────┘

LEVEL 1 (START):
┌──────────────────┐
│  Attract Mode    │ ← SCREENSAVER/IDLE STATE
│  (Slideshow)     │   - Rotating slides cycle automatically
│  TAP TO START    │   - Placeholder content
└────────┬─────────┘
         │
         │ (User taps screen)
         ▼
LEVEL 2 (MAIN MENU):
┌──────────────────────────┐
│  Features Main Menu      │ ← MAIN NAVIGATION HUB
│  ┌────────────────────┐  │
│  │ Programs           │──┼──┐
│  └────────────────────┘  │  │
│  ┌────────────────────┐  │  │
│  │ Directory Landing  │──┼──┼───┐
│  └────────────────────┘  │  │   │
└──────────────────────────┘  │   │
                              │   │
    ┌─────────────────────────┘   │
    │                             │
    ▼                             ▼
LEVEL 3A (PROGRAMS):          LEVEL 3B (DIRECTORY):
┌──────────────────┐          ┌───────────────────┐
│  Programs        │          │ Directory Landing │
│  ┌────────────┐  │          │ ┌───────────────┐ │
│  │ ABIT       │  │          │ │ By floor      │ │
│  ├────────────┤  │          │ ├───────────────┤ │
│  │ Accounting │  │          │ │ By Name       │ │
│  ├────────────┤  │          │ └───────────────┘ │
│  │ Business   │  │          └────┬──────────┬───┘
│  ├────────────┤  │               │          │
│  │ Hospitality│  │               │          │
│  └────────────┘  │               │          │
└──────────────────┘               │          │
                                   │          │
         ┌─────────────────────────┘          └────────────────┐
         │                                                      │
         ▼                                                      ▼
LEVEL 4A (FLOORS):                                    LEVEL 4B (SEARCH):
┌──────────────────┐                                  ┌──────────────────┐
│  By floor        │                                  │  By Name         │
│  ┌────────────┐  │                                  │  [Search input]  │
│  │ Floor 1    │  │                                  │  [Results list]  │
│  ├────────────┤  │                                  └────────┬─────────┘
│  │ Floor 2    │  │                                           │
│  └────────────┘  │                                           ▼
└────┬──────┬──────┘                                  ┌──────────────────┐
     │      │                                         │ Faculty Member   │
     │      │                                         │ View             │
     │      │                                         └────────┬─────────┘
     │      │                                                  │
     ▼      ▼                                                  │
┌─────────┬──────────┐                                        │
│ Floor 1 │ Floor 2  │                                        │
├─────────┼──────────┤                                        │
│ LIST    │ LIST     │                                        │
│ VIEW    │ VIEW     │                                        │
│  ↕      │  ↕       │                                        │
│ MAP     │ MAP      │                                        │
│ VIEW    │ VIEW     │                                        │
└─────┬───┴────┬─────┘                                        │
      │        │                                              │
      └────┬───┘                                              │
           │                                                  │
           └────────────────┬─────────────────────────────────┘
                            │
                            ▼
                   ┌──────────────────┐
                   │  Room info       │
                   │  (Details view)  │
                   └──────────────────┘
```

---

## 3. WHAT YOU'RE MISSING - The Critical Gap

### YOUR CURRENT IMPLEMENTATION:
```
✓ directory-landing
✓ by-floor
✓ floor-1-list
✓ floor-1-map
✓ floor-2-list
✓ floor-2-map
✓ room-info
✓ by-name
✓ faculty-view
```

### MISSING FROM WIREFRAME:
```
✗ Attract Mode (LEVEL 1 - The START screen!)
✗ Features Main Menu (LEVEL 2 - Main navigation)
✗ Programs (Academic programs browser)
✗ ABIT (Program detail)
✗ Accounting (Program detail)
✗ Business_2 (Program detail)
✗ Hospitality (Program detail)
```

---

## 4. SCREEN DESCRIPTIONS - What Each Screen Looks Like

### LEVEL 1: Attract Mode
**Header:** "LEVEL 1 - Attract mode"
**Visual Layout:**
- Large content area showing "SLIDESHOW"
- Placeholder text: "PLACEHOLDER"
- Bottom text: "(Rotating slides cycle automatically)"
- **Purpose:** Idle/screensaver state that attracts attention
- **Action:** User taps anywhere to proceed to Features Main Menu

---

### LEVEL 2: Features Main Menu
**Header:** "LEVEL 2: MAIN MENU"
**Visual Layout:**
- Main navigation hub with large button options
- At least 2 main categories:
  1. "Programs" (Browse academic programs)
  2. "Directory Landing" (Find rooms/people)
- Help text: "Need help? Visit Admissions Room 201"
- **Navigation:** Buttons lead to either Programs or Directory Landing

---

### LEVEL 3A: Programs
**Visual Layout:**
- List of academic program categories
- Buttons for:
  - ABIT
  - Accounting
  - Business
  - Hospitality
- Each button navigates to that program's detail screen
- Back button → Features Main Menu
- Home button → (likely back to Attract Mode or Features Main Menu)

---

### LEVEL 3A-Detail: Program Screens (ABIT, Accounting, Business_2, Hospitality)
**Visual Layout:**
- Program-specific information
- Details about the academic program
- Contact information
- Department information
- **Navigation:**
  - Back button → Programs
  - Home button

---

### LEVEL 3B: Directory Landing
**Header:** "Building Directory" or similar
**Visual Layout:**
- Your current implementation has this as a single button "Find Rooms & Faculty"
- Based on wireframe, should have clear navigation to:
  - "By floor" (Browse by floor number)
  - "By Name" (Search for people)
- Help text present
- **Navigation:**
  - Back button → Features Main Menu
  - Home button

---

### LEVEL 4A: By floor
**Header:** "Select a Floor"
**Visual Layout:**
- Floor selection screen
- Buttons for:
  - Floor 2 (with preview of departments)
  - Floor 1 (with preview of areas)
- Each floor preview shows key departments/areas
- **Navigation:**
  - Back button → Directory Landing
  - "Floors" button (breadcrumb navigation)
  - Home button

---

### LEVEL 4A-Detail: Floor List Views (floor_1_list_view, floor_2_list_view)
**Header:** "Floor 1" or "Floor 2"
**Visual Layout:**
- Search box at top: "Search this floor..."
- Toggle button: "🗺️ SWITCH TO MAP VIEW"
- Scrollable list of rooms:
  - Room number
  - Room name
  - Department (if applicable)
  - Occupant (if applicable)
- **Navigation:**
  - "← Floors" button → By floor
  - Toggle to Map View
  - Home button
  - Clicking room → Room info

---

### LEVEL 4A-Detail: Floor Map Views (Floor 1, Floor 2_2)
**Header:** "Floor 1" or "Floor 2"
**Visual Layout:**
- Search box at top: "Search this floor..."
- Toggle button: "🗋 SWITCH TO LIST VIEW"
- Interactive floor map (SVG)
- Instructions: "Tap any room number on the map for details"
- Rooms highlighted based on search
- **Navigation:**
  - "← Floors" button → By floor
  - Toggle to List View
  - Home button
  - Clicking room on map → Room info

---

### LEVEL 4B: By Name
**Header:** "By Name" or "Search Results"
**Visual Layout:**
- Search input box: "Search faculty or staff..."
- On-screen keyboard (for touch interface)
- Search results counter: "RESULTS (X found)"
- List of matching faculty/staff:
  - Name
  - Title - Department
  - Room #, Floor #
- **Navigation:**
  - Back button → Directory Landing (or "← Floors")
  - Home button
  - Clicking person → Faculty Member View

---

### LEVEL 5A: Faculty Member View
**Header:** "Search Results" or faculty name
**Visual Layout:**
- Faculty member details:
  - Name (large header)
  - Title
  - Department
  - Office location (clickable → Room info)
- Buttons/links:
  - "👤 OCCUPANT"
  - "👥 VIEW DEPARTMENT"
  - "📍 VIEW ON FLOOR MAP"
  - "📍 DIRECTIONS"
  - "📱 CONTACT"
- **Navigation:**
  - "← Back" or "← Search" → By Name
  - Home button
  - Click office location → Room info

---

### LEVEL 5B: Room info
**Header:** "Room Details" or "Room [number]"
**Visual Layout:**
- Room details:
  - Room Number
  - Room Name
  - Department
  - Occupant
  - Floor
  - Category (color indicator)
- Buttons present on screen:
  - "🗺️ VIEW FULL FLOOR MAP"
  - "📍 Room [number] is highlighted on the map above"
  - Directions/navigation info
- **Navigation:**
  - "← Back" button → previous screen
  - Home button

---

## 5. THE USER JOURNEY - Complete Path

### Primary Flow 1: Finding a Room by Floor
```
Attract Mode (idle)
  → User taps screen
  → Features Main Menu
  → Directory Landing
  → By floor
  → Floor 2 (select)
  → floor_2_list_view (LIST VIEW)
  ⇄ Floor 2_2 (MAP VIEW) [toggle back and forth]
  → Room info (tap room)
```

### Primary Flow 2: Finding a Person by Name
```
Attract Mode (idle)
  → User taps screen
  → Features Main Menu
  → Directory Landing
  → By Name
  → [Type name, see results]
  → Faculty Member View
  → Room info (tap office location)
```

### Secondary Flow: Browsing Programs
```
Attract Mode (idle)
  → User taps screen
  → Features Main Menu
  → Programs
  → [Select program: ABIT/Accounting/Business/Hospitality]
  → Program detail screen
```

---

## 6. SCREENS YOU MIGHT HAVE MISSED

1. **Attract Mode** - The actual starting screen! Your app jumps straight to directory-landing
2. **Features Main Menu** - The main navigation hub that should come before Directory
3. **Programs** - Academic program browser
4. **ABIT, Accounting, Business_2, Hospitality** - Individual program detail screens (4 screens)

**Total missing: 7 screens out of 16!**

---

## 7. VISUAL DIFFERENCES - List View vs Map View

### List View (floor_1_list_view, floor_2_list_view)
**Layout:**
- Vertical scrollable list
- Text-based entries
- Each room as a card/row with:
  - Room number - Room name
  - Subtitle: Department
  - Subtitle: Occupant
- Search filters the list
- Toggle button: "🗺️ SWITCH TO MAP VIEW"

### Map View (Floor 1, Floor 2_2)
**Layout:**
- Full floor plan (SVG graphic)
- Interactive room numbers on map
- Visual spatial representation
- Search highlights matching rooms on map
- Toggle button: "🗋 SWITCH TO LIST VIEW"
- Help text: "Tap any room number on the map for details"

**Key Difference:** List view is text-based and scrollable; Map view is visual/spatial and shows the physical layout.

---

## 8. HEADER/NAVIGATION ON EACH SCREEN

### Common Navigation Elements:
- **Left:** "← Back" or "← Floors" or "← Search" (screen-specific)
- **Center:** Screen title
- **Right:** "HOME" button (on most screens)

### Specific Headers:
- **Attract Mode:** No navigation (full-screen idle state)
- **Features Main Menu:** "LEVEL 2: MAIN MENU" label
- **Directory Landing:** "Building Directory"
- **By floor:** "Select a Floor"
- **Floor views:** "Floor 1" or "Floor 2"
- **By Name:** "By Name" or search-related
- **Faculty Member View:** Faculty name or "Search Results"
- **Room info:** "Room Details" or "Room [number]"
- **Programs:** "Programs" or similar
- **Program details:** Program name

---

## 9. KEY FINDINGS - Why Your Implementation Doesn't Match

### Issue #1: Wrong Starting Point
**Wireframe:** Starts at Attract Mode → Features Main Menu → Directory Landing
**Your App:** Starts directly at directory-landing

### Issue #2: Missing Entire Feature Branch
**Wireframe:** Has complete "Programs" section with 4 program detail screens
**Your App:** No Programs section at all

### Issue #3: Missing Screensaver/Idle State
**Wireframe:** Has Attract Mode with rotating slideshow
**Your App:** No idle/attract mode

### Issue #4: Simplified Navigation
**Wireframe:** Multi-level menu: Attract → Main Menu → Landing → Features
**Your App:** Simplified flow that skips the main menu level

---

## 10. NAVIGATION TREE

```
Attract Mode (START)
    │
    └── Features Main Menu
            ├── Programs
            │       ├── ABIT
            │       ├── Accounting
            │       ├── Business_2
            │       └── Hospitality
            │
            └── Directory Landing
                    ├── By floor
                    │       ├── Floor 1
                    │       │       ├── floor_1_list_view ⇄ Floor 1 (map)
                    │       │       └── Room info
                    │       │
                    │       └── Floor 2
                    │               ├── floor_2_list_view ⇄ Floor 2_2 (map)
                    │               └── Room info
                    │
                    └── By Name
                            └── Faculty Member View
                                    └── Room info
```

---

## RECOMMENDATION

To match the wireframes exactly, you need to:

1. **Add Attract Mode screen** - Idle/screensaver with slideshow
2. **Add Features Main Menu screen** - Main navigation hub
3. **Add Programs screen** - Academic program browser
4. **Add 4 program detail screens** - ABIT, Accounting, Business_2, Hospitality
5. **Update navigation flow** - Start at Attract Mode, not Directory Landing
6. **Add proper HOME button** - Should return to Attract Mode or Features Main Menu
7. **Update Back button logic** - Should follow the tree structure above

The Directory portion of your implementation is mostly correct, but it's missing the entire first 2 levels of the application and the Programs feature branch.
