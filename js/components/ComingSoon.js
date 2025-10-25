// Coming Soon Component
function ComingSoon({ title, onBack, onHome }) {
  return (
    <div className="w-full h-full flex flex-col slide-in" style={{ backgroundColor: 'var(--off-white)' }}>
      <NavBar title={title.toUpperCase()} onBack={onBack} onHome={onHome} showHome={true} />

      <div className="flex-1 flex items-center justify-center p-12">
        <div className="text-center max-w-2xl">
          <div className="text-9xl mb-10">🚧</div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{
            color: 'var(--uhmc-teal)',
            fontWeight: 800
          }}>
            Coming Soon!
          </h2>
          <p className="text-2xl text-gray-700 font-medium mb-12">
            The {title} feature is currently under development.
          </p>
          <button
            onClick={onBack}
            className="px-12 py-6 rounded-2xl font-bold text-2xl text-white touch-target shadow-lg hover:shadow-2xl transition-all"
            style={{
              backgroundColor: 'var(--uhmc-teal)',
              fontWeight: 800
            }}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
