// Navigation Bar Component
function NavBar({ title, onBack, onHome, showHome = true }) {
  return (
    <div className="bg-gray-800 py-4 px-6 flex items-center justify-between">
      <button
        onClick={onBack}
        className="text-white text-lg font-semibold touch-target hover:text-gray-300"
      >
        ← BACK
      </button>
      <div className="text-white text-xl font-bold tracking-wide">
        {title}
      </div>
      {showHome ? (
        <button
          onClick={onHome}
          className="text-white text-lg font-semibold touch-target hover:text-gray-300"
        >
          HOME
        </button>
      ) : (
        <div className="w-20"></div>
      )}
    </div>
  );
}
