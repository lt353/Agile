// Digital Signage Application Logic

const app = {
  currentScreen: 'attract-mode',
  previousScreen: null,
  currentRoomInfo: null,
  currentFacultyInfo: null,
  floor1Data: null,
  floor2Data: null,

  // Initialize the application
  init() {
    this.loadFloorMaps();
    this.populateFloorLists();
    this.navigate('attract-mode');
    this.setupAttractMode();
  },

  // Setup attract mode tap handler
  setupAttractMode() {
    const attractMode = document.getElementById('attract-mode');
    if (attractMode) {
      attractMode.addEventListener('click', () => {
        this.navigate('features-main-menu');
      });
    }
  },

  // Navigation
  navigate(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
      screen.classList.remove('active');
    });

    // Show target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
      this.previousScreen = this.currentScreen;
      this.currentScreen = screenId;
      targetScreen.classList.add('active');

      // Special handling for map views - ensure SVG is loaded
      if (screenId === 'floor-1-map' && !this.floor1Data) {
        this.loadFloorMaps();
      } else if (screenId === 'floor-2-map' && !this.floor2Data) {
        this.loadFloorMaps();
      }
    }
  },

  navigateBack() {
    if (this.previousScreen) {
      this.navigate(this.previousScreen);
    } else {
      this.navigate('attract-mode');
    }
  },

  // Load floor map SVGs
  async loadFloorMaps() {
    try {
      // Load Floor 1 Map
      const floor1Response = await fetch('assets/floor1.svg');
      const floor1Text = await floor1Response.text();
      const floor1Container = document.getElementById('floor-1-map-svg');
      if (floor1Container) {
        floor1Container.innerHTML = floor1Text;
        this.addRoomClickHandlers(1);
      }

      // Load Floor 2 Map
      const floor2Response = await fetch('assets/floor2.svg');
      const floor2Text = await floor2Response.text();
      const floor2Container = document.getElementById('floor-2-map-svg');
      if (floor2Container) {
        floor2Container.innerHTML = floor2Text;
        this.addRoomClickHandlers(2);
      }

      this.floor1Data = floor1Text;
      this.floor2Data = floor2Text;
    } catch (error) {
      console.error('Error loading floor maps:', error);
    }
  },

  // Add click handlers to room numbers on maps
  addRoomClickHandlers(floorNumber) {
    const containerId = `floor-${floorNumber}-map-svg`;
    const container = document.getElementById(containerId);

    if (!container) return;

    // Find all path elements with 3-digit IDs (room numbers)
    const svg = container.querySelector('svg');
    if (!svg) return;

    const allPaths = svg.querySelectorAll('path[id]');
    allPaths.forEach(pathElement => {
      const roomId = pathElement.getAttribute('id');

      // Check if it's a 3-digit room number matching our floor
      if (roomId && /^\d{3}$/.test(roomId)) {
        const roomFloor = Math.floor(parseInt(roomId) / 100);

        if (roomFloor === floorNumber) {
          pathElement.style.cursor = 'pointer';

          pathElement.addEventListener('click', () => {
            this.showRoomInfo(floorNumber, roomId);
          });

          // Add hover effect
          pathElement.addEventListener('mouseenter', () => {
            pathElement.style.opacity = '0.7';
            pathElement.style.filter = 'drop-shadow(0 0 8px rgba(74, 144, 226, 0.8))';
          });

          pathElement.addEventListener('mouseleave', () => {
            pathElement.style.opacity = '1';
            pathElement.style.filter = 'none';
          });
        }
      }
    });
  },

  // Populate floor list views
  populateFloorLists() {
    // Floor 1 List
    this.populateFloorList(1);
    // Floor 2 List
    this.populateFloorList(2);
  },

  populateFloorList(floorNumber) {
    const containerId = `floor-${floorNumber}-list-items`;
    const container = document.getElementById(containerId);

    if (!container) return;

    const floorData = buildingData.floors.find(f => f.id === floorNumber);
    if (!floorData) return;

    let html = '';

    if (floorNumber === 2) {
      // Floor 2 categories
      const categories = [
        {
          title: 'ADMINISTRATIVE OFFICES',
          rooms: floorData.rooms.filter(r => ['201', '203', '232'].includes(r.number))
        },
        {
          title: 'FACULTY OFFICES - HAWAIIAN STUDIES',
          rooms: floorData.rooms.filter(r => r.department === 'Hawaiian Studies' && r.number !== '204')
        },
        {
          title: 'FACULTY OFFICES - BUSINESS & HOSPITALITY',
          rooms: floorData.rooms.filter(r => ['206', '209', '211', '213', '214', '216', '217', '218'].includes(r.number))
        },
        {
          title: 'FACULTY OFFICES - SOCIAL SCIENCE',
          rooms: floorData.rooms.filter(r => ['235', '221', '233', '234'].includes(r.number) && r.department !== 'Hospitality Faculty')
        },
        {
          title: 'PROGRAM / SERVICE OFFICES',
          rooms: floorData.rooms.filter(r => ['233'].includes(r.number))
        },
        {
          title: 'VACANT / UNASSIGNED ROOMS',
          rooms: floorData.rooms.filter(r => !r.occupant && r.department !== 'Facilities')
        }
      ];

      categories.forEach(category => {
        if (category.rooms.length > 0) {
          html += `<div class="category-header">${category.title}</div>`;
          category.rooms.forEach(room => {
            html += `
              <div class="room-item" onclick="app.showRoomInfo(${floorNumber}, '${room.number}')">
                <div class="room-item-title">Room ${room.number} - ${room.name}</div>
                ${room.department ? `<div class="room-item-subtitle">${room.department}</div>` : ''}
                ${room.occupant ? `<div class="room-item-subtitle">${room.occupant}</div>` : ''}
                <div class="room-item-arrow">▶</div>
              </div>
            `;
          });
        }
      });
    } else if (floorNumber === 1) {
      // Floor 1 categories
      const categories = [
        {
          title: 'STUDENT SERVICES / RESOURCE CENTERS',
          rooms: floorData.rooms.filter(r => ['101'].includes(r.number))
        },
        {
          title: 'FACULTY OFFICES - SOCIAL SCIENCE',
          rooms: floorData.rooms.filter(r => ['110', '111', '120', '121'].includes(r.number))
        },
        {
          title: 'FACULTY OFFICES - HUMANITIES',
          rooms: floorData.rooms.filter(r => ['117', '118', '119', '123'].includes(r.number))
        },
        {
          title: 'FACULTY OFFICES - STEM DEPARTMENT',
          rooms: floorData.rooms.filter(r => ['114', '115', '126'].includes(r.number))
        },
        {
          title: 'FACULTY OFFICES - OTHER DEPARTMENTS',
          rooms: floorData.rooms.filter(r => ['112', '113'].includes(r.number))
        },
        {
          title: 'PROGRAM / SERVICE OFFICES',
          rooms: floorData.rooms.filter(r => ['127', '130', '131', '134'].includes(r.number))
        }
      ];

      categories.forEach(category => {
        if (category.rooms.length > 0) {
          html += `<div class="category-header">${category.title}</div>`;
          category.rooms.forEach(room => {
            html += `
              <div class="room-item" onclick="app.showRoomInfo(${floorNumber}, '${room.number}')">
                <div class="room-item-title">Room ${room.number} - ${room.name}</div>
                ${room.department ? `<div class="room-item-subtitle">${room.department}</div>` : ''}
                ${room.occupant ? `<div class="room-item-subtitle">${room.occupant}</div>` : ''}
                <div class="room-item-arrow">▶</div>
              </div>
            `;
          });
        }
      });
    }

    container.innerHTML = html;
  },

  // Search floor
  searchFloor(floorNumber, query) {
    const containerId = `floor-${floorNumber}-list-items`;
    const container = document.getElementById(containerId);

    if (!container) return;

    const floorData = buildingData.floors.find(f => f.id === floorNumber);
    if (!floorData) return;

    const searchTerm = query.toLowerCase().trim();

    if (!searchTerm) {
      this.populateFloorList(floorNumber);
      return;
    }

    const filteredRooms = floorData.rooms.filter(room => {
      return room.number.toLowerCase().includes(searchTerm) ||
             room.name.toLowerCase().includes(searchTerm) ||
             (room.department && room.department.toLowerCase().includes(searchTerm)) ||
             (room.occupant && room.occupant.toLowerCase().includes(searchTerm));
    });

    if (filteredRooms.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-title">No Results Found</div>
          <div class="empty-state-message">Try a different search term</div>
        </div>
      `;
      return;
    }

    container.innerHTML = filteredRooms.map(room => {
      return `
        <div class="room-item" onclick="app.showRoomInfo(${floorNumber}, '${room.number}')">
          <div class="room-item-title">${room.number} - ${room.name}</div>
          ${room.department ? `<div class="room-item-subtitle">${room.department}</div>` : ''}
          ${room.occupant ? `<div class="room-item-subtitle">${room.occupant}</div>` : ''}
        </div>
      `;
    }).join('');
  },

  // Search floor map - highlight matching rooms
  searchFloorMap(floorNumber, query) {
    const containerId = `floor-${floorNumber}-map-svg`;
    const container = document.getElementById(containerId);

    if (!container) return;

    const floorData = buildingData.floors.find(f => f.id === floorNumber);
    if (!floorData) return;

    const searchTerm = query.toLowerCase().trim();

    // Reset all rooms to normal
    floorData.rooms.forEach(room => {
      const roomElement = container.querySelector(`path[id="${room.number}"]`);
      if (roomElement) {
        roomElement.style.opacity = '1';
        roomElement.style.filter = 'none';
      }
    });

    if (!searchTerm) return;

    // Find matching rooms
    const matchingRooms = floorData.rooms.filter(room => {
      return room.number.toLowerCase().includes(searchTerm) ||
             room.name.toLowerCase().includes(searchTerm) ||
             (room.department && room.department.toLowerCase().includes(searchTerm)) ||
             (room.occupant && room.occupant.toLowerCase().includes(searchTerm));
    });

    // Highlight matching rooms
    matchingRooms.forEach(room => {
      const roomElement = container.querySelector(`path[id="${room.number}"]`);
      if (roomElement) {
        roomElement.style.filter = 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.8))';
      }
    });
  },

  // Show room info
  showRoomInfo(floorNumber, roomNumber) {
    const floorData = buildingData.floors.find(f => f.id === floorNumber);
    if (!floorData) return;

    let room = floorData.rooms.find(r => r.number === roomNumber);

    // If room not in our data, create a placeholder
    if (!room) {
      room = {
        number: roomNumber,
        name: 'Room',
        department: 'General',
        occupant: '',
        color: '#FFF9E6'
      };
    }

    this.currentRoomInfo = { floor: floorNumber, room };

    // Populate room info
    document.getElementById('room-info-title').textContent = `ROOM ${room.number}`;
    document.getElementById('room-info-floor-label').textContent = `Floor ${floorNumber}`;
    document.getElementById('room-info-occupant').textContent = room.occupant || 'Vacant';
    document.getElementById('room-info-department').textContent = room.department || 'General';

    // Set contact info (email placeholder)
    const contactEl = document.getElementById('room-info-contact');
    if (contactEl) {
      contactEl.textContent = room.occupant ? `${room.occupant.toLowerCase().replace(/\s+/g, '')}@hawaii.edu` : 'N/A';
    }

    // Set directions based on floor
    const directionsEl = document.getElementById('room-info-directions');
    if (directionsEl) {
      const directions = floorNumber === 2
        ? '• Take stairs or elevator to Floor 2<br>• Turn right from the elevator<br>• Room ' + room.number + ' is on the left side'
        : '• Take stairs or go to Floor 1<br>• Turn left from the entrance<br>• Room ' + room.number + ' is on the right side';
      directionsEl.innerHTML = directions;
    }

    this.navigate('room-info');
  },

  // View floor map from room detail
  viewFloorMap() {
    if (!this.currentRoomInfo) return;
    const floor = this.currentRoomInfo.floor;
    this.navigate(`floor-${floor}-map`);
  },

  // View department (placeholder)
  viewDepartment() {
    alert('Department view feature coming soon!');
  },

  // View on floor map from faculty search
  viewOnFloorMap() {
    if (!this.currentFacultyInfo) return;
    this.navigate(`floor-${this.currentFacultyInfo.floor}-map`);
  },

  // Search by name
  searchByName(query) {
    const resultsContainer = document.getElementById('name-search-results');
    const countContainer = document.getElementById('search-results-count');

    if (!resultsContainer) return;

    const searchTerm = query.toLowerCase().trim();

    if (!searchTerm) {
      resultsContainer.innerHTML = '';
      countContainer.textContent = '';
      return;
    }

    const matchingFaculty = buildingData.faculty.filter(faculty => {
      return faculty.name.toLowerCase().includes(searchTerm) ||
             (faculty.department && faculty.department.toLowerCase().includes(searchTerm)) ||
             (faculty.title && faculty.title.toLowerCase().includes(searchTerm));
    });

    countContainer.textContent = `RESULTS (${matchingFaculty.length} found)`;

    if (matchingFaculty.length === 0) {
      resultsContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-title">No Results Found</div>
          <div class="empty-state-message">Try searching for a different name</div>
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = matchingFaculty.map(faculty => {
      return `
        <div class="search-result-item" onclick="app.showFacultyInfo('${faculty.name}')">
          <div class="room-item-title">${faculty.name}</div>
          <div class="room-item-subtitle">${faculty.title} - ${faculty.department}</div>
          <div class="room-item-subtitle">Room ${faculty.room}, Floor ${faculty.floor}</div>
        </div>
      `;
    }).join('');
  },

  // Show faculty info
  showFacultyInfo(facultyName) {
    const faculty = buildingData.faculty.find(f => f.name === facultyName);
    if (!faculty) return;

    this.currentFacultyInfo = faculty;

    document.getElementById('faculty-info-name').textContent = faculty.name;
    document.getElementById('faculty-info-title').textContent = faculty.title;
    document.getElementById('faculty-info-department').textContent = faculty.department;
    document.getElementById('faculty-info-room').textContent = `Room ${faculty.room}, Floor ${faculty.floor}`;

    this.navigate('faculty-view');
  },

  // Show faculty room from faculty view
  showFacultyRoom() {
    if (!this.currentFacultyInfo) return;
    this.showRoomInfo(this.currentFacultyInfo.floor, this.currentFacultyInfo.room);
  },

  // On-screen keyboard
  showKeyboard() {
    const keyboard = document.getElementById('keyboard');
    if (keyboard) {
      keyboard.classList.add('active');
    }
  },

  hideKeyboard() {
    const keyboard = document.getElementById('keyboard');
    if (keyboard) {
      keyboard.classList.remove('active');
    }
  },

  typeKey(key) {
    const input = document.getElementById('name-search-input');
    if (!input) return;

    if (key === 'BACKSPACE') {
      input.value = input.value.slice(0, -1);
    } else {
      input.value += key;
    }

    this.searchByName(input.value);
  },

  clearSearch() {
    const input = document.getElementById('name-search-input');
    if (input) {
      input.value = '';
      this.searchByName('');
    }
  }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});
