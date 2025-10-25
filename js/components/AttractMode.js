// Attract Mode Component
function AttractMode({ onStart, currentSlide }) {
  const slides = [
    {
      icon: '🎓',
      headline: 'Welcome to Ka Lama',
      subtext: 'Business & Hospitality Building',
      cta: 'Touch anywhere to explore'
    },
    {
      icon: '📚',
      headline: 'Four Career-Focused Programs',
      subtext: 'Business • Hospitality • Accounting • ABIT',
      cta: 'Touch to discover your path'
    },
    {
      icon: '🏢',
      headline: 'Find Faculty & Offices',
      subtext: 'Interactive building directory',
      cta: 'Touch to navigate'
    },
    {
      icon: '💼',
      headline: 'Launch Your Career',
      subtext: 'Certificates to Bachelor\'s Degrees',
      cta: 'Touch to begin'
    }
  ];

  return (
    <div
      className="w-full h-full gradient-teal flex flex-col cursor-pointer relative"
      onClick={onStart}
    >
      {/* UHMC Logo at top */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
        <img
          src="assets/logos/UHMC-Seal-Top-Center-White.png"
          alt="UHMC Seal"
          className="h-24 md:h-32 opacity-90"
        />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-white px-8 pt-32">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="text-9xl mb-10 float">{slide.icon}</div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-center" style={{ fontWeight: 800 }}>
              {slide.headline}
            </h1>
            <p className="text-3xl md:text-4xl mb-16 text-center text-white font-medium opacity-95">
              {slide.subtext}
            </p>
            <button
              className="pulse-cta text-gray-900 px-16 py-8 rounded-2xl text-3xl font-bold shadow-2xl transition-all"
              style={{ backgroundColor: 'var(--yellow)', fontWeight: 800 }}
            >
              {slide.cta}
            </button>
          </div>
        ))}
      </div>

      <div className="py-10 text-center">
        <p className="text-2xl text-white font-semibold opacity-90">Touch anywhere to start</p>
      </div>
    </div>
  );
}
