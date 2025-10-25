// Coming Soon Component
function ComingSoon({ title, onBack, onHome }) {
  return (
    <div className="w-full h-full flex flex-col slide-in" style={{ backgroundColor: 'var(--off-white)' }}>
      <NavBar title={title.toUpperCase()} onBack={onBack} onHome={onHome} showHome={true} />

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <div className="text-8xl mb-8">🚧</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Coming Soon!</h2>
          <p className="text-xl text-gray-600">
            The {title} feature is currently under development.
          </p>
          <button
            onClick={onBack}
            className="mt-8 px-8 py-4 rounded-lg font-bold text-xl text-white touch-target"
            style={{ backgroundColor: 'var(--uhmc-teal)' }}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
