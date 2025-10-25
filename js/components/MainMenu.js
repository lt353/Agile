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
      <div className="bg-gray-800 py-6 px-8 flex items-center justify-between">
        <div className="text-white text-xl font-bold">UHMC</div>
        <div className="text-white text-3xl font-bold tracking-wide">Ka Lama</div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 md:p-10 lg:p-12">
        <div className="max-w-4xl mx-auto space-y-6">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleClick(item)}
              className={`w-full bg-white border-2 rounded-lg p-10 text-center touch-target card-hover ${
                !item.active ? 'opacity-60' : ''
              }`}
              style={{ borderColor: '#cccccc' }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 whitespace-pre-line">
                {item.title}
              </h2>
              {item.subtitle && (
                <p className="text-lg text-gray-500 mt-3">{item.subtitle}</p>
              )}
            </button>
          ))}

          <div className="grid grid-cols-2 gap-6">
            {bottomItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleClick(item)}
                className="bg-white border-2 rounded-lg p-8 text-center touch-target card-hover opacity-60"
                style={{ borderColor: '#cccccc' }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{item.subtitle}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="py-6 text-center" style={{ backgroundColor: 'var(--light-gray)' }}>
        <p className="text-sm text-gray-600">* Need Help? Visit Admissions Room 201</p>
      </div>
    </div>
  );
}
