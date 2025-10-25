// Programs Grid Component
function ProgramsGrid({ onNavigate, onBack, onHome }) {
  const programsList = [
    { id: 'abit', name: 'ABIT', fullName: 'Applied Business & Information Technology' },
    { id: 'business', name: 'BUSINESS', fullName: 'Business Administration' },
    { id: 'accounting', name: 'ACCOUNTING', fullName: 'Accounting' },
    { id: 'hospitality', name: 'HOSPITALITY', fullName: 'Hospitality & Tourism' }
  ];

  return (
    <div className="w-full h-full flex flex-col slide-in" style={{ backgroundColor: 'var(--off-white)' }}>
      <NavBar title="PROGRAMS MENU" onBack={onBack} onHome={onHome} showHome={false} />

      <div className="flex-1 overflow-y-auto p-8 md:p-12 lg:p-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {programsList.map(program => (
              <button
                key={program.id}
                onClick={() => onNavigate(`program-${program.id}`)}
                className="bg-white rounded-2xl p-16 md:p-20 text-center touch-target shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-200"
                style={{
                  border: '4px solid var(--uhmc-teal)',
                  minHeight: '320px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{
                  color: 'var(--uhmc-teal)',
                  fontWeight: 800
                }}>
                  {program.name}
                </h2>
                <p className="text-xl font-medium" style={{ color: 'var(--gray)' }}>
                  {program.fullName}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
