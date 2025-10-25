// Main Menu Component
function MainMenu({ onNavigate }) {
  const menuItems = [
    { id: 'programs', title: 'PROGRAMS', active: true },
    { id: 'directory', title: 'BUILDING\n& FACULTY DIRECTORY', active: true },
    { id: 'careers', title: 'CAREERS & INTERNSHIPS', subtitle: '(Placeholder, not in use)', active: false },
    { id: 'events', title: 'EVENTS &\nANNOUNCEMENTS', subtitle: '(Placeholder, not in use)', active: false }
  ];

  const bottomItems = [
    { id: 'survey', title: 'SURVEY', subtitle: '(Placeholder, not in use)', icon: '📋' },
    { id: 'website', title: 'UHMC WEBSITE', subtitle: '(Placeholder, not in use)', icon: '🌐' }
  ];

  const handleClick = (item) => {
    if (item.active) {
      onNavigate(item.id);
    } else {
      alert('Coming Soon!');
    }
  };

  return (
    <div className="w-full h-full flex flex-col fade-in" style={{ backgroundColor: 'var(--off-white)' }}>
      <div style={{ backgroundColor: 'var(--uhmc-teal)' }} className="py-6 px-8 flex items-center justify-between shadow-lg">
        <img
          src="assets/logos/UHMC-Block-Horizontal-Square-White.png"
          alt="UHMC Logo"
          className="h-16"
        />
        <div className="text-white text-4xl font-bold tracking-wider" style={{ fontWeight: 800 }}>
          Ka Lama
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-8 md:p-12 lg:p-16">
        <div className="max-w-5xl mx-auto space-y-6">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleClick(item)}
              className={`w-full bg-white rounded-2xl p-12 text-center touch-target transition-all duration-200 ${
                item.active
                  ? 'shadow-lg hover:shadow-2xl hover:-translate-y-1'
                  : 'opacity-50 cursor-not-allowed'
              }`}
              style={{
                border: item.active ? `4px solid var(--uhmc-teal)` : '4px solid #cccccc'
              }}
            >
              <h2 className="text-4xl md:text-5xl font-bold whitespace-pre-line" style={{
                color: item.active ? 'var(--uhmc-teal)' : '#666',
                fontWeight: 800
              }}>
                {item.title}
              </h2>
              {item.subtitle && (
                <p className="text-lg text-gray-500 mt-4 font-medium">{item.subtitle}</p>
              )}
            </button>
          ))}

          <div className="grid grid-cols-2 gap-6">
            {bottomItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleClick(item)}
                className="bg-white rounded-2xl p-10 text-center touch-target shadow-md opacity-50 cursor-not-allowed"
                style={{ border: '4px solid #cccccc' }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-700">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{item.subtitle}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="py-8 text-center" style={{ backgroundColor: 'var(--light-gray)' }}>
        <p className="text-lg font-medium" style={{ color: 'var(--gray)' }}>
          * Need Help? Visit Admissions Room 201
        </p>
      </div>
    </div>
  );
}
