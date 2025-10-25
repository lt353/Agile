// Program Detail Component
function ProgramDetail({ program, onBack, onHome }) {
  return (
    <div className="w-full h-full flex flex-col slide-in" style={{ backgroundColor: 'var(--light-gray)' }}>
      <NavBar title={program.shortName.toUpperCase()} onBack={onBack} onHome={onHome} showHome={true} />

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-6 md:p-10 space-y-6">
          {/* Hero Image Placeholder */}
          <div className="bg-gray-800 rounded-lg flex items-center justify-center text-white text-4xl font-bold" style={{ minHeight: '400px' }}>
            [LARGE PHOTO]
          </div>

          {/* Program Title */}
          <div className="bg-white border-4 border-black rounded-lg p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {program.name}
            </h1>
            <p className="text-xl text-gray-600 italic">{program.tagline}</p>
          </div>

          {/* Description */}
          <div className="bg-white rounded-lg p-8">
            <p className="text-lg leading-relaxed text-gray-800">
              {program.description}
            </p>
          </div>

          {/* Special Distinction (Hospitality only) */}
          {program.distinction && (
            <div className="bg-yellow-100 border-2 rounded-lg p-6" style={{ borderColor: 'var(--yellow)' }}>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{program.distinction.title}</h3>
              <p className="text-lg text-gray-800">{program.distinction.placement}</p>
            </div>
          )}

          {/* Degree Options */}
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Degree Options</h2>
            <div className="space-y-3">
              {program.degrees.map((degree, index) => (
                <div key={index} className="border-l-4 pl-4" style={{ borderColor: 'var(--uhmc-teal)' }}>
                  <p className="font-bold text-lg">{degree.name}</p>
                  <p className="text-gray-600">{degree.credits} {degree.duration && `• ${degree.duration}`}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {program.id === 'abit' ? 'Key Focus Areas' : 'Program Features'}
            </h2>
            <ul className="space-y-2">
              {program.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-2xl mr-3" style={{ color: 'var(--uhmc-teal)' }}>•</span>
                  <span className="text-lg text-gray-800">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Career Opportunities */}
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
            <div className="space-y-3">
              {program.careers.map((career, index) => (
                <div key={index} className="border-l-4 pl-4" style={{ borderColor: 'var(--olive)' }}>
                  <p className="font-bold text-lg">{career.title}</p>
                  {(career.salary || career.growth) && (
                    <p className="text-gray-600">
                      {career.salary} {career.growth && `• ${career.growth}`}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications (ABIT only) */}
          {program.certifications && (
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Certifications</h2>
              <ul className="space-y-2">
                {program.certifications.map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-2xl mr-3" style={{ color: 'var(--uhmc-teal)' }}>✓</span>
                    <span className="text-lg text-gray-800">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Statistics (Hospitality only) */}
          {program.statistics && (
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Program Statistics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded">
                  <p className="text-3xl font-bold" style={{ color: 'var(--uhmc-teal)' }}>
                    {program.statistics.enrollment}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">Program Enrollment</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded">
                  <p className="text-3xl font-bold" style={{ color: 'var(--uhmc-teal)' }}>
                    {program.statistics.placement}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">Job Placement</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded">
                  <p className="text-3xl font-bold" style={{ color: 'var(--uhmc-teal)' }}>
                    {program.statistics.persistence}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">Persistence Rate</p>
                </div>
              </div>
            </div>
          )}

          {/* Contact Information */}
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <div className="space-y-4">
              {program.contact.chair && (
                <div>
                  <p className="font-bold text-lg">Department Chair</p>
                  <p className="text-gray-800">{program.contact.chair}</p>
                  <p className="text-gray-600">{program.contact.chairRoom}</p>
                  <p className="text-gray-600">{program.contact.chairPhone}</p>
                </div>
              )}
              {program.contact.coordinator && (
                <div>
                  <p className="font-bold text-lg">{program.contact.chair ? 'Program Coordinator' : 'Coordinator'}</p>
                  <p className="text-gray-800">{program.contact.coordinator}</p>
                  {program.contact.room && <p className="text-gray-600">{program.contact.room}</p>}
                  {program.contact.coordinatorRoom && <p className="text-gray-600">{program.contact.coordinatorRoom}</p>}
                  <p className="text-gray-600">{program.contact.phone || program.contact.coordinatorPhone}</p>
                  <p className="text-gray-600">{program.contact.email}</p>
                </div>
              )}
              {program.contact.counselor && (
                <div>
                  <p className="font-bold text-lg">Counselor</p>
                  <p className="text-gray-800">{program.contact.counselor}</p>
                </div>
              )}
              {program.contact.counselors && (
                <div>
                  <p className="font-bold text-lg">Counselors</p>
                  <p className="text-gray-800">{program.contact.counselors}</p>
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
