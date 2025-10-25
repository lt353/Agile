// Main App Component
function KioskApp() {
  const { useState, useEffect, useCallback } = React;

  const [currentScreen, setCurrentScreen] = useState('attract');
  const [previousScreen, setPreviousScreen] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const navigate = useCallback((screen) => {
    setPreviousScreen(currentScreen);
    setCurrentScreen(screen);
  }, [currentScreen]);

  const goBack = useCallback(() => {
    if (previousScreen) {
      setCurrentScreen(previousScreen);
      setPreviousScreen(null);
    }
  }, [previousScreen]);

  const goHome = useCallback(() => {
    setPreviousScreen(null);
    setCurrentScreen('menu');
  }, []);

  const { showWarning, countdown, dismissWarning } = useIdleTimeout(
    () => setCurrentScreen('attract'),
    60000,
    15000
  );

  // Attract mode slideshow
  useEffect(() => {
    if (currentScreen === 'attract') {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % 4);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentScreen]);

  return (
    <div className="w-full h-full relative bg-gray-50">
      {currentScreen === 'attract' && <AttractMode onStart={() => navigate('menu')} currentSlide={currentSlide} />}
      {currentScreen === 'menu' && <MainMenu onNavigate={navigate} />}
      {currentScreen === 'programs' && <ProgramsGrid onNavigate={navigate} onBack={goBack} onHome={goHome} />}
      {currentScreen === 'program-abit' && <ProgramDetail program={programs.abit} onBack={goBack} onHome={goHome} />}
      {currentScreen === 'program-business' && <ProgramDetail program={programs.business} onBack={goBack} onHome={goHome} />}
      {currentScreen === 'program-accounting' && <ProgramDetail program={programs.accounting} onBack={goBack} onHome={goHome} />}
      {currentScreen === 'program-hospitality' && <ProgramDetail program={programs.hospitality} onBack={goBack} onHome={goHome} />}
      {currentScreen === 'directory' && <ComingSoon title="Building & Faculty Directory" onBack={goBack} onHome={goHome} />}

      {showWarning && currentScreen !== 'attract' && (
        <IdleWarning countdown={countdown} onDismiss={dismissWarning} />
      )}
    </div>
  );
}

// Render App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<KioskApp />);
