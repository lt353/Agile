// Program Detail Component
function ProgramDetail({ program, onBack, onHome }) {
  return (
    <div className="w-full h-full flex flex-col slide-in" style={{ backgroundColor: 'var(--off-white)' }}>
      <NavBar title={program.shortName.toUpperCase()} onBack={onBack} onHome={onHome} showHome={true} />

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto p-6 md:p-10 lg:p-12 space-y-8">
          {/* Hero Section */}
          <div className="gradient-teal rounded-2xl shadow-2xl overflow-hidden" style={{ minHeight: '450px' }}>
            <div className="flex items-center justify-center h-full p-12 text-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontWeight: 800 }}>
                  {program.name}
                </h1>
                <p className="text-2xl md:text-3xl text-white font-medium italic opacity-90">
                  {program.tagline}
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-2xl shadow-lg p-10">
            <p className="text-xl leading-relaxed text-gray-800 font-medium">
              {program.description}
            </p>
          </div>

          {/* Special Distinction (Hospitality only) */}
          {program.distinction && (
            <div className="rounded-2xl p-8 shadow-lg" style={{
              backgroundColor: 'var(--yellow)',
              border: '4px solid var(--orange)'
            }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.distinction.title}</h3>
              <p className="text-xl text-gray-900 font-medium">{program.distinction.placement}</p>
            </div>
          )}

          {/* Degree Options */}
          <div className="bg-white rounded-2xl shadow-lg p-10">
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--uhmc-teal)', fontWeight: 800 }}>
              Degree Options
            </h2>
            <div className="space-y-5">
              {program.degrees.map((degree, index) => (
                <div key={index} className="border-l-4 pl-6 py-3" style={{ borderColor: 'var(--uhmc-teal)' }}>
                  <p className="font-bold text-xl text-gray-900">{degree.name}</p>
                  <p className="text-lg text-gray-600 mt-1 font-medium">
                    {degree.credits} {degree.duration && `• ${degree.duration}`}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-white rounded-2xl shadow-lg p-10">
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--uhmc-teal)', fontWeight: 800 }}>
              {program.id === 'abit' ? 'Key Focus Areas' : 'Program Features'}
            </h2>
            <ul className="space-y-4">
              {program.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-3xl mr-4 font-bold" style={{ color: 'var(--uhmc-teal)' }}>•</span>
                  <span className="text-xl text-gray-800 font-medium pt-1">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Career Opportunities */}
          <div className="bg-white rounded-2xl shadow-lg p-10">
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--uhmc-teal)', fontWeight: 800 }}>
              Career Opportunities
            </h2>
            <div className="space-y-5">
              {program.careers.map((career, index) => (
                <div key={index} className="border-l-4 pl-6 py-3" style={{ borderColor: 'var(--olive)' }}>
                  <p className="font-bold text-xl text-gray-900">{career.title}</p>
                  {(career.salary || career.growth) && (
                    <p className="text-lg text-gray-600 mt-1 font-medium">
                      {career.salary} {career.growth && `• ${career.growth}`}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications (ABIT only) */}
          {program.certifications && (
            <div className="bg-white rounded-2xl shadow-lg p-10">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--uhmc-teal)', fontWeight: 800 }}>
                Certifications
              </h2>
              <ul className="space-y-4">
                {program.certifications.map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-3xl mr-4 font-bold" style={{ color: 'var(--olive)' }}>✓</span>
                    <span className="text-xl text-gray-800 font-medium pt-1">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Statistics (Hospitality only) */}
          {program.statistics && (
            <div className="bg-white rounded-2xl shadow-lg p-10">
              <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--uhmc-teal)', fontWeight: 800 }}>
                Program Statistics
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-xl" style={{ backgroundColor: 'var(--off-white)' }}>
                  <p className="text-5xl font-bold mb-3" style={{ color: 'var(--uhmc-teal)', fontWeight: 800 }}>
                    {program.statistics.enrollment}
                  </p>
                  <p className="text-lg text-gray-700 font-semibold">Program Enrollment</p>
                </div>
                <div className="text-center p-6 rounded-xl" style={{ backgroundColor: 'var(--off-white)' }}>
                  <p className="text-5xl font-bold mb-3" style={{ color: 'var(--uhmc-teal)', fontWeight: 800 }}>
                    {program.statistics.placement}
                  </p>
                  <p className="text-lg text-gray-700 font-semibold">Job Placement</p>
                </div>
                <div className="text-center p-6 rounded-xl" style={{ backgroundColor: 'var(--off-white)' }}>
                  <p className="text-5xl font-bold mb-3" style={{ color: 'var(--uhmc-teal)', fontWeight: 800 }}>
                    {program.statistics.persistence}
                  </p>
                  <p className="text-lg text-gray-700 font-semibold">Persistence Rate</p>
                </div>
              </div>
            </div>
          )}

          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-10">
            <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--uhmc-teal)', fontWeight: 800 }}>
              Contact Information
            </h2>
            <div className="space-y-6">
              {program.contact.chair && (
                <div className="border-l-4 pl-6" style={{ borderColor: 'var(--uhmc-teal)' }}>
                  <p className="font-bold text-xl text-gray-900 mb-2">Department Chair</p>
                  <p className="text-lg text-gray-800 font-medium">{program.contact.chair}</p>
                  <p className="text-lg text-gray-600">{program.contact.chairRoom}</p>
                  <p className="text-lg text-gray-600">{program.contact.chairPhone}</p>
                </div>
              )}
              {program.contact.coordinator && (
                <div className="border-l-4 pl-6" style={{ borderColor: 'var(--uhmc-teal)' }}>
                  <p className="font-bold text-xl text-gray-900 mb-2">
                    {program.contact.chair ? 'Program Coordinator' : 'Coordinator'}
                  </p>
                  <p className="text-lg text-gray-800 font-medium">{program.contact.coordinator}</p>
                  {program.contact.room && <p className="text-lg text-gray-600">{program.contact.room}</p>}
                  {program.contact.coordinatorRoom && <p className="text-lg text-gray-600">{program.contact.coordinatorRoom}</p>}
                  <p className="text-lg text-gray-600">{program.contact.phone || program.contact.coordinatorPhone}</p>
                  <p className="text-lg text-gray-600">{program.contact.email}</p>
                </div>
              )}
              {program.contact.counselor && (
                <div className="border-l-4 pl-6" style={{ borderColor: 'var(--uhmc-teal)' }}>
                  <p className="font-bold text-xl text-gray-900 mb-2">Counselor</p>
                  <p className="text-lg text-gray-800 font-medium">{program.contact.counselor}</p>
                </div>
              )}
              {program.contact.counselors && (
                <div className="border-l-4 pl-6" style={{ borderColor: 'var(--uhmc-teal)' }}>
                  <p className="font-bold text-xl text-gray-900 mb-2">Counselors</p>
                  <p className="text-lg text-gray-800 font-medium">{program.contact.counselors}</p>
                </div>
              )}
            </div>
          </div>

          <div className="h-20"></div>
        </div>
      </div>
    </div>
  );
}
