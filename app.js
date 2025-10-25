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

    // Find all rooms for this floor
    const floorData = buildingData.floors.find(f => f.id === floorNumber);
    if (!floorData) return;

    // Add click handlers to all room number paths
    floorData.rooms.forEach(room => {
      const roomElement = container.querySelector(`path[id="${room.number}"]`);
      if (roomElement) {
        roomElement.style.cursor = 'pointer';
        roomElement.addEventListener('click', () => {
          this.showRoomInfo(floorNumber, room.number);
        });

        // Also add hover effect
        roomElement.addEventListener('mouseenter', () => {
          roomElement.style.opacity = '0.7';
          roomElement.style.filter = 'drop-shadow(0 0 5px rgba(0, 0, 0, 0.5))';
        });

        roomElement.addEventListener('mouseleave', () => {
          roomElement.style.opacity = '1';
          roomElement.style.filter = 'none';
        });
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

    // Sort rooms by number
    const sortedRooms = [...floorData.rooms].sort((a, b) => {
      return parseInt(a.number) - parseInt(b.number);
    });

    // Group notable departments first for Floor 2
    let roomsToDisplay = sortedRooms;
    if (floorNumber === 2) {
      const departments = buildingData.departments.filter(d => d.floor === 2);
      const departmentRooms = departments.map(dept => {
        return sortedRooms.find(room => room.number === dept.room);
      }).filter(Boolean);

      const otherRooms = sortedRooms.filter(room => {
        return !departmentRooms.find(dr => dr.number === room.number);
      });

      roomsToDisplay = [...departmentRooms, ...otherRooms];
    }

    container.innerHTML = roomsToDisplay.map(room => {
      return `
        <div class="room-item" onclick="app.showRoomInfo(${floorNumber}, '${room.number}')">
          <div class="room-item-title">${room.number} - ${room.name}</div>
          ${room.department ? `<div class="room-item-subtitle">${room.department}</div>` : ''}
          ${room.occupant ? `<div class="room-item-subtitle">${room.occupant}</div>` : ''}
        </div>
      `;
    }).join('');
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

    const room = floorData.rooms.find(r => r.number === roomNumber);
    if (!room) return;

    this.currentRoomInfo = { floor: floorNumber, room };

    // Populate room info
    document.getElementById('room-info-title').textContent = `Room ${room.number}`;
    document.getElementById('room-info-number').textContent = room.number;
    document.getElementById('room-info-name').textContent = room.name;
    document.getElementById('room-info-department').textContent = room.department || 'N/A';
    document.getElementById('room-info-occupant').textContent = room.occupant || 'Vacant';
    document.getElementById('room-info-floor').textContent = floorNumber;

    const colorIndicator = document.getElementById('room-info-color');
    colorIndicator.style.backgroundColor = room.color;

    this.navigate('room-info');
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
