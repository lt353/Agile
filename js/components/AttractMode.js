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
      className="w-full h-full gradient-teal flex flex-col cursor-pointer"
      onClick={onStart}
    >
      <div className="bg-gray-800 text-white py-4 px-6 text-center">
        <p className="text-sm font-semibold tracking-wide">LEVEL 1 - Attract mode</p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-white px-8">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="text-9xl mb-8 float">{slide.icon}</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center">
              {slide.headline}
            </h1>
            <p className="text-2xl md:text-3xl mb-12 text-center text-gray-200">
              {slide.subtext}
            </p>
            <button
              className="pulse-cta bg-yellow-500 text-gray-900 px-12 py-6 rounded-lg text-2xl font-bold hover:bg-yellow-400 transition-colors"
              style={{ backgroundColor: 'var(--yellow)' }}
            >
              {slide.cta}
            </button>
          </div>
        ))}
      </div>

      <div className="py-8 text-center">
        <p className="text-xl text-gray-300">[ Touch to start ]</p>
      </div>
    </div>
  );
}
