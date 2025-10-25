// Program data for Ka Lama Digital Kiosk
const programs = {
  abit: {
    id: 'abit',
    name: 'Applied Business and Information Technology',
    shortName: 'ABIT',
    tagline: 'Innovative hybrid degree for the dynamic job market',
    description: 'The BAS in Applied Business and Information Technology (ABIT) program presents an exceptional opportunity for those looking to enhance their business acumen and technology expertise. This innovative hybrid degree equips students with vital business, entrepreneurship, and technology skills, preparing them for a dynamic job market.',
    degrees: [
      { name: 'Bachelor of Applied Science (BAS)', credits: '121 credits', duration: '4 years' },
      { name: 'Upper Division Transfer', credits: '60 credits', duration: '2 years (for AA holders), Entirely online' }
    ],
    features: [
      'Technology Entrepreneurship - Launch your own tech startup',
      'Information Technology Services - Manage IT systems',
      'Cybersecurity - Protect organizations from digital threats',
      'Project Management - Lead teams and deliver projects',
      'AI/Machine Learning - Work with cutting-edge AI technology'
    ],
    careers: [
      { title: 'Information Security Analyst', salary: '$103,590/year', growth: '33.3% growth' },
      { title: 'Data Scientist', salary: '$98,230/year', growth: '31.4% growth' },
      { title: 'Software Developer', salary: '$110,140/year', growth: '22.2% growth' },
      { title: 'Computer & Information Research Scientist', salary: '$126,830/year', growth: '21.9% growth' },
      { title: 'Business Analyst (Hawaii)', salary: '$68,346/year average', growth: '' }
    ],
    certifications: [
      'NSA Certificate of Completion in Cybersecurity Studies (upon graduation)',
      'Google Cybersecurity Certificate (aligned)',
      'CompTIA Network+, Security+ (aligned)'
    ],
    contact: {
      coordinator: 'Dr. Debasis Bhattacharya, JD, DBA',
      phone: '(808) 984-3619',
      email: 'debasisb@hawaii.edu',
      counselor: 'Linda Fujitani, (808) 984-3226'
    }
  },
  business: {
    id: 'business',
    name: 'Business Administration',
    shortName: 'Business',
    tagline: 'Launch or advance your business career',
    description: 'The Business Administration program offers a wide range of courses in entrepreneurship, accounting, and business management to help you advance your business career or give you the skills to start your own small business.',
    degrees: [
      { name: 'Certificate of Competence (CO)', credits: '9-12 credits', duration: '' },
      { name: 'Certificate of Achievement (CA)', credits: '30 credits', duration: '~1 year' },
      { name: 'Associate in Applied Science (AAS)', credits: '61 credits', duration: '~2 years' },
      { name: 'AAS Business Technology Concentration', credits: '61 credits', duration: '~2 years' }
    ],
    features: [
      'Multiple pathways from certificate to degree',
      'Focus on management, marketing, and sales',
      'Essential skills in business, communication, math',
      'Transfer to ABIT or UH West Oahu'
    ],
    careers: [
      { title: 'Business Owner/Entrepreneur', salary: '', growth: '' },
      { title: 'Manager/Retail Management', salary: '', growth: '' },
      { title: 'Sales Professional', salary: '', growth: '' },
      { title: 'Marketing Specialist', salary: '', growth: '' },
      { title: 'Business Analyst', salary: '', growth: '' },
      { title: 'Operations Manager', salary: '', growth: '' },
      { title: 'Office Manager', salary: '', growth: '' }
    ],
    contact: {
      coordinator: 'Gil Logan, PhD, PHR, CBP',
      room: '218 (Ka Lama Building, Floor 2)',
      phone: '(808) 984-3344',
      email: 'glogan@hawaii.edu',
      counselor: 'Linda Fujitani, (808) 984-3226'
    }
  },
  accounting: {
    id: 'accounting',
    name: 'Accounting',
    shortName: 'Accounting',
    tagline: 'Build a strong foundation in accounting',
    description: 'The Accounting Program prepares you for careers in accounting with small businesses, hotels, service industries, and other organizations on Maui and beyond. From entry-level positions to office management roles.',
    degrees: [
      { name: 'Certificate of Achievement (CA)', credits: '30 credits', duration: '~1 year' },
      { name: 'Associate in Applied Science (AAS)', credits: '60-61 credits', duration: '~2 years' }
    ],
    features: [
      'Hands-on training with QuickBooks & Excel',
      'Hawaii-specific: GET tax, Hawaii payroll',
      'Small class sizes, personalized instruction',
      'Transfer pathways to UH system'
    ],
    careers: [
      { title: 'Accounting Clerk (Entry-level with CA)', salary: '', growth: '' },
      { title: 'Accounting Assistant', salary: '', growth: '' },
      { title: 'Accounts Payable/Receivable Clerk', salary: '', growth: '' },
      { title: 'Bookkeeper (Mid-level with AAS)', salary: '', growth: '' },
      { title: 'Accounting Technician', salary: '', growth: '' },
      { title: 'Office Manager', salary: '', growth: '' },
      { title: 'Payroll Specialist', salary: '', growth: '' }
    ],
    whyAccounting: [
      'High demand, job security',
      'Competitive salaries',
      'Global opportunities',
      'Flexibility (remote/hybrid)'
    ],
    contact: {
      coordinator: 'Aubrey Weston',
      room: '231 (Ka Lama Building, Floor 2)',
      phone: '(808) 984-3470',
      email: 'aubrey77@hawaii.edu',
      counselor: 'Linda Fujitani, (808) 984-3226'
    }
  },
  hospitality: {
    id: 'hospitality',
    name: 'Hospitality & Tourism',
    shortName: 'Hospitality',
    tagline: 'Become a leader with hospitality!',
    description: 'Join one of Hawaii\'s premier hospitality programs - ACPHA accredited! The program emphasizes Hawaiian culture, multicultural awareness, sustainability, and ethical decision-making.',
    distinction: {
      title: 'ACPHA Accredited - Only program in Hawaii!',
      placement: '90% Job Placement Rate for graduates'
    },
    degrees: [
      { name: 'Certificate of Competence (CO)', credits: '', duration: '' },
      { name: 'Certificate of Achievement (CA)', credits: '', duration: '~1 year' },
      { name: 'Associate in Applied Science (AAS)', credits: '63-64 credits', duration: '2 years' }
    ],
    features: [
      'ACPHA accredited curriculum',
      'Study abroad opportunities',
      'International internships',
      'Hawaiian cultural focus',
      'Transfer agreements (UHWO, NAU)'
    ],
    careers: [
      { title: 'Hotel/Resort Manager', salary: '', growth: '' },
      { title: 'Food & Beverage Manager', salary: '', growth: '' },
      { title: 'Event Planner/Coordinator', salary: '', growth: '' },
      { title: 'Tourism Development Specialist', salary: '', growth: '' },
      { title: 'Hospitality Marketing Manager', salary: '', growth: '' },
      { title: 'Front Office Manager', salary: '', growth: '' },
      { title: 'Catering Manager', salary: '', growth: '' }
    ],
    statistics: {
      enrollment: '24 majors',
      placement: '100% (2023-2024)',
      persistence: '75% Fall to Spring'
    },
    contact: {
      chair: 'Lorelle A.S. Peros, CHE',
      chairRoom: '219 (Ka Lama, Floor 2)',
      chairPhone: '(808) 984-3343',
      coordinator: 'Dr. Liping Liu, PhD, CHE',
      coordinatorRoom: '122 (Ka Lama, Floor 1)',
      coordinatorPhone: '(808) 984-3328',
      counselors: 'Linda Fujitani (808) 984-3226, Darlene Guerrero (808) 984-3579'
    }
  }
};
