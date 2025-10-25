// Idle Warning Overlay Component
function IdleWarning({ countdown, onDismiss }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 fade-in">
      <div className="bg-white rounded-2xl p-12 max-w-2xl text-center">
        <div className={`text-8xl mb-6 ${countdown <= 5 ? 'pulse-cta' : ''}`}>⏱️</div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Are you still there?</h2>
        <p className="text-6xl font-bold mb-4" style={{ color: countdown <= 5 ? 'var(--pink)' : 'var(--uhmc-teal)' }}>
          {countdown}
        </p>
        <p className="text-2xl text-gray-600 mb-8">
          Returning to home screen in {countdown} seconds...
        </p>
        <button
          onClick={onDismiss}
          className="px-12 py-6 rounded-lg font-bold text-2xl text-white touch-target"
          style={{ backgroundColor: 'var(--uhmc-teal)' }}
        >
          I'm still here
        </button>
      </div>
    </div>
  );
}
