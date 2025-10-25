// Navigation Bar Component
function NavBar({ title, onBack, onHome, showHome = true }) {
  return (
    <div style={{ backgroundColor: 'var(--uhmc-teal)' }} className="py-4 px-6 flex items-center justify-between shadow-md">
      <button
        onClick={onBack}
        className="text-white text-lg font-bold tracking-wide touch-target px-4 py-3 hover:bg-white hover:bg-opacity-10 rounded transition-all"
      >
        ← BACK
      </button>
      <div className="flex flex-col items-center">
        <img
          src="assets/logos/UHMC-Seal-Top-Center-White.png"
          alt="UHMC Seal"
          className="h-16"
        />
        {title && (
          <div className="text-white text-sm font-semibold tracking-wider mt-1">{title}</div>
        )}
      </div>
      {showHome ? (
        <button
          onClick={onHome}
          className="text-white text-lg font-bold tracking-wide touch-target px-4 py-3 hover:bg-white hover:bg-opacity-10 rounded transition-all"
        >
          HOME
        </button>
      ) : (
        <div className="w-24"></div>
      )}
    </div>
  );
}
