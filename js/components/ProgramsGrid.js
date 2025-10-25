// Programs Grid Component
function ProgramsGrid({ onNavigate, onBack, onHome }) {
  const programsList = [
    { id: 'abit', name: 'ABIT' },
    { id: 'business', name: 'BUSINESS' },
    { id: 'accounting', name: 'ACCOUNTING' },
    { id: 'hospitality', name: 'HOSPITALITY' }
  ];

  return (
    <div className="w-full h-full flex flex-col slide-in" style={{ backgroundColor: 'var(--off-white)' }}>
      <NavBar title="PROGRAMS MENU" onBack={onBack} onHome={onHome} showHome={false} />

      <div className="flex-1 overflow-y-auto p-6 md:p-10 lg:p-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {programsList.map(program => (
              <button
                key={program.id}
                onClick={() => onNavigate(`program-${program.id}`)}
                className="bg-white border-2 rounded-lg p-16 md:p-20 text-center touch-target card-hover"
                style={{ borderColor: '#cccccc', minHeight: '300px' }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  {program.name}
                </h2>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
