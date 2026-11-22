// Verified personal portfolio data for GOURI TIWARI — Beyond the Obvious.
// Strictly distinguishes implemented prototype work from proposed architecture.

export const NAV_LINKS = [
  { code: '00', label: 'THE ENTRY', href: '#entry' },
  { code: '01', label: 'ABOUT', href: '#human' },
  { code: '02', label: 'WHY ME', href: '#why-me' },
  { code: '03', label: 'ARSENAL', href: '#arsenal' },
  { code: '04', label: 'PROJECTS', href: '#project-lab' },
  { code: '05', label: 'EDUCATION', href: '#journey' },
  { code: '06', label: 'LEADERSHIP', href: '#beyond-code' },
  { code: '07', label: 'CONNECT', href: '#connect' },
];

export const HERO_CONTENT = {
  code: '00',
  edition: 'GOURI TIWARI · PORTFOLIO',
  developerName: 'GOURI TIWARI',
  tagline: 'Beyond the Obvious.',
  roleLine: 'Software Engineering | AI/ML | Intelligent Systems',
  displayTop: 'GOURI',
  displayItalic: 'TIWARI',
  subtitle:
    'B.Tech Computer Science undergraduate at IIST, Indore (2024–2028) exploring AI/ML, geospatial analysis, and structured software architecture.',
  primaryCta: { label: 'Explore Profile', href: '#human' },
  secondaryCta: { label: 'Inspect Projects', href: '#project-lab' },
  coordinates: [
    { key: 'UNDERGRADUATE', value: 'B.Tech CSE · IIST, Indore (2024–2028)' },
    { key: 'DISCIPLINES', value: 'Software Engineering · AI/ML · GIS' },
    { key: 'ETHOS', value: 'Beyond the Obvious.' },
  ],
};

export const ABOUT_CONTENT = {
  code: '01',
  label: 'ABOUT GOURI TIWARI',
  titleLineOne: 'Curious by inquiry,',
  titleLineItalic: 'analytical in execution.',
  pullQuote:
    'Turning complex real-world problems—from geospatial terrain behaviour to atmospheric forecasting and financial document integrity—into practical software systems.',
  bioParagraphs: [
    'I am Gouri Tiwari, a B.Tech Computer Science Engineering undergraduate at Indore Institute of Science and Technology (IIST), Indore (2024–2028). My technical focus centers on software engineering, AI/ML fundamentals, data analysis, geospatial technologies, and intelligent systems.',
    'I approach engineering experimentally: mapping problem constraints first, modelling data workflows with clarity, and bridging conceptual system design with working prototypes.',
  ],
  specSheet: [
    { key: 'Full Name', value: 'Gouri Tiwari' },
    { key: 'Degree', value: 'B.Tech CSE · IIST, Indore (2024–2028)' },
    { key: 'Core Focus', value: 'Software Engineering, AI/ML & GIS' },
    { key: 'Approach', value: 'Analytical, Experimental & Practical' },
  ],
};

export const WHY_ME_DIMENSIONS = [
  {
    id: 'think-differently',
    index: '01',
    shortTitle: 'THINK DIFFERENTLY',
    quadrant: 'VECTOR NW',
    axisLabel: 'AXIS 01 · SYSTEMS FRAMING',
    heading: 'Looking Beyond Surface Symptoms to System Structure',
    statement:
      'Whether examining flood inundation risk, urban air quality dynamics, or financial audit trails, I study how terrain, physical signals, and verification rules interact before writing code.',
    evidenceTitle: 'Applied System Framing — NEERGARH & Atmospheric Digital Twin',
    evidenceBody:
      'Designed NEERGARH to connect GIS elevation data with future hydrodynamic simulation planning, and structured the Atmospheric Digital Twin around physics-informed What-If emission scenarios rather than isolated metric charts.',
    visualMode: 'lattice',
    technicalSpec: 'DOMAIN INTERACTION GRAPH',
    coordinates: '42.0° NW · ANALYTICAL',
  },
  {
    id: 'build-with-purpose',
    index: '02',
    shortTitle: 'BUILD WITH PURPOSE',
    quadrant: 'VECTOR SW',
    axisLabel: 'AXIS 02 · ARCHITECTURE',
    heading: 'Connecting Software Design with Verifiable Integrity',
    statement:
      'I care about how components hold together under scrutiny—combining UML modelling, relational schemas, and explicit human-review safeguards where reliability matters.',
    evidenceTitle: 'Structured Architecture — VOULTSYNC Workflow Design',
    evidenceBody:
      'Architected VOULTSYNC around OpenCV/PaddleOCR document parsing paired with discrepancy detection, a Maker-Checker approval workflow, and a SHA-256 hash-linked PostgreSQL audit trail.',
    visualMode: 'concentric',
    technicalSpec: 'INTEGRITY & CHECKER CORE',
    coordinates: '28.0° SW · STRUCTURED',
  },
  {
    id: 'lead-beyond-screen',
    index: '03',
    shortTitle: 'LEAD BEYOND THE SCREEN',
    quadrant: 'VECTOR NE',
    axisLabel: 'AXIS 03 · LEADERSHIP',
    heading: 'Mobilizing Teams, Events, and Clear Argumentation',
    statement:
      'Engineering grows stronger when paired with communication and initiative. Beyond technical prototyping, I lead student entrepreneurship programs and articulate ideas in competitive forums.',
    evidenceTitle: 'Verified Leadership — E-Cell IIST & Moot Court',
    evidenceBody:
      'Serving as Vice President of Entrepreneurship Cell, IIST; organized INCEPTION’26 for 200+ participants; and recognized as Best Speaker at Moot Court 2025.',
    visualMode: 'relay',
    technicalSpec: 'ORGANIZATIONAL RELAY',
    coordinates: '42.0° NE · LEADERSHIP',
  },
  {
    id: 'always-evolving',
    index: '04',
    shortTitle: 'ALWAYS EVOLVING',
    quadrant: 'VECTOR SE',
    axisLabel: 'AXIS 04 · EXPERIMENTATION',
    heading: 'Testing Ideas in Competitive & Interdisciplinary Arenas',
    statement:
      'I treat hackathons, national challenges, and cross-disciplinary research concepts as testing grounds to sharpen technical judgment and learn rapidly.',
    evidenceTitle: 'Competitive Milestones — NEC 2025 & IIST Hackathon',
    evidenceBody:
      'Finalist at NEC 2025 (46th rank among 7,000+ teams) and Internal Hackathon Winner at IIST (September 2026), alongside ongoing self-study in AI/ML, GIS, and full-stack tooling.',
    visualMode: 'spiral',
    technicalSpec: 'ITERATIVE DISCOVERY LOOP',
    coordinates: '28.0° SE · EXPERIMENTAL',
  },
];

export const SKILL_LAYERS = [
  {
    id: 'programming',
    layerCode: 'CAT 01',
    pillar: 'core',
    category: 'Programming',
    summary: 'Core languages used for scripting, logic implementation, and relational querying.',
    items: ['Python', 'SQL'],
    context: 'Algorithmic scripting, data pipelines, and relational database queries.',
  },
  {
    id: 'ai-ml',
    layerCode: 'CAT 02',
    pillar: 'intelligence',
    category: 'AI/ML',
    summary: 'Foundational concepts guiding intelligent system design and predictive modelling.',
    items: ['AI fundamentals', 'ML fundamentals', 'Data Science fundamentals'],
    context: 'Supervised modelling concepts, exploratory data workflows, and intelligent system architecture.',
  },
  {
    id: 'data-analysis',
    layerCode: 'CAT 03',
    pillar: 'core',
    category: 'Data Analysis',
    summary: 'Numerical processing, tabular wrangling, and analytical visual communication.',
    items: ['NumPy', 'Pandas', 'Matplotlib', 'Data Visualization'],
    context: 'Dataset preparation, statistical inspection, and clear visual interpretation.',
  },
  {
    id: 'web',
    layerCode: 'CAT 04',
    pillar: 'intelligence',
    category: 'Web',
    summary: 'Foundational web technologies for structured interfaces and interactive maps.',
    items: ['HTML', 'CSS', 'JavaScript'],
    context: 'Semantic layouts, responsive styling, and browser-based interactive visualizations.',
  },
  {
    id: 'ai-tools',
    layerCode: 'CAT 05',
    pillar: 'intelligence',
    category: 'AI Tools',
    summary: 'Modern generative environments for rapid prototyping and structured prompting.',
    items: ['Google AI Studio', 'Generative AI Tools', 'Prompt Engineering'],
    context: 'Iterative ideation, workflow acceleration, and structured prompt design.',
  },
  {
    id: 'developer-tools',
    layerCode: 'CAT 06',
    pillar: 'craft',
    category: 'Developer Tools',
    summary: 'Essential version-control and editing instruments for reproducible builds.',
    items: ['Git', 'GitHub', 'VS Code'],
    context: 'Source versioning, collaborative workflows, and daily software development.',
  },
  {
    id: 'design',
    layerCode: 'CAT 07',
    pillar: 'craft',
    category: 'Design',
    summary: 'Interface wireframing and visual prototyping prior to front-end implementation.',
    items: ['Figma', 'Canva', 'Google AI Studio'],
    context: 'Component layout exploration, screen flows, and UI prototypes.',
  },
  {
    id: 'technical-domains',
    layerCode: 'CAT 08',
    pillar: 'core',
    category: 'Technical Domains',
    summary: 'Domain foundations bridging spatial geography with structured software architecture.',
    items: [
      'GIS fundamentals',
      'Geospatial Data Analysis',
      'Software Design',
      'UML Modelling',
    ],
    context: 'Spatial coordinate mapping, terrain reasoning, and UML-driven system blueprints.',
  },
];

export const PROJECTS_LIST = [
  {
    id: 'neergarh',
    index: 'PROJECT 01',
    featured: true,
    visualType: 'terrain',
    previewImage: '/neergarh-dashboard.png',
    previewImageAlt:
      'NEERGARH dashboard and frontend preview showing Leaflet terrain basemap, parametric wave estimates, synthetic flow demonstration controls, and pending Delft3D hydrodynamic solver state',
    previewCaption:
      'NEERGARH dashboard / frontend preview — includes a synthetic flow demonstration; Delft3D hydrodynamic simulation integration remains pending.',
    status: 'Frontend Prototype + Pending Delft3D Simulation',
    title: 'NEERGARH',
    subtitle: 'Dam Inundation Framework',
    summary:
      'A geospatial dam inundation framework pairing an interactive dashboard and frontend mapping preview (including a synthetic flow demonstration) with a planned Delft3D hydrodynamic flood-modelling pipeline.',
    problemStatement:
      'Assessing downstream dam-break risk requires bridging dam-location spatial context, terrain elevation data, and hydrodynamic flow modelling inside a coherent analytical workflow.',
    technicalApproach:
      'Built an interactive Leaflet terrain mapping and dashboard frontend preview with parametric estimates and synthetic flow demonstration controls, designed to connect later with verified DEM inputs and Delft3D Flexible Mesh outputs.',
    implementedScope:
      'Interactive dashboard/frontend preview built with Leaflet terrain mapping, receptor markers, parametric wave overview, and a synthetic flow demonstration.',
    proposedScope:
      'Delft3D Flexible Mesh hydrodynamic solver integration, calibrated NetCDF grid ingestion, and validated dam-break inundation simulation results (pending, not yet implemented).',
    technologies: ['Python', 'JavaScript', 'Leaflet', 'GIS', 'OpenStreetMap'],
    geoMeta: 'FRONTEND PREVIEW · DELFT3D SIMULATION PENDING',
  },
  {
    id: 'atmospheric-digital-twin',
    index: 'PROJECT 02',
    featured: false,
    visualType: 'state-graph',
    status: 'Proposed Framework (Conceptual Architecture)',
    title: 'ATMOSPHERIC DIGITAL TWIN',
    subtitle: '72-Hour AQI Forecasting System',
    summary:
      'A proposed AI-physics-based forecasting architecture targeting 72-hour multi-pollutant AQI prediction and What-If policy simulation for Delhi NCR.',
    problemStatement:
      'Urban air-quality spikes across Delhi NCR involve coupled meteorological, regional fire, satellite, and local emission drivers that require 72-hour lookahead and intervention testing.',
    technicalApproach:
      'Designed an AI-physics hybrid framework integrating weather, ground air-quality stations, satellite observations, fire events, and emission data to forecast PM2.5, PM10, O3, and NOx alongside interactive What-If scenario exploration.',
    implementedScope:
      'System architecture specification, multi-source data pipeline design, and forecasting problem formulation for Delhi NCR pollutants (PM2.5, PM10, O3, NOx).',
    proposedScope:
      'Full AI-physics model training, real-time multi-source ingestion (weather, AQI, satellite, fire, emissions), What-If scenario simulator, and operational validation (proposed only; no validated operational system deployed yet).',
    technologies: [
      'AI/ML',
      'Python',
      'Atmospheric Modelling',
      'Geospatial Data Analysis',
      'Data Visualization',
    ],
    geoMeta: 'PROPOSED AI-PHYSICS FRAMEWORK · 72H DELHI NCR FORECAST',
  },
  {
    id: 'voultsync',
    index: 'PROJECT 03',
    featured: false,
    visualType: 'index-matrix',
    status: 'System Architecture & Proposed Workflow',
    title: 'VOULTSYNC',
    subtitle: 'Intelligent FDR Lifecycle Management System',
    summary:
      'An intelligent Fixed Deposit Receipt (FDR) reconciliation and governance architecture uniting OCR extraction, dual-control review, and tamper-evident auditing.',
    problemStatement:
      'Manual tracking of Fixed Deposit Receipts leaves institutions vulnerable to data-entry discrepancies, missed lifecycle events, and fragmented compliance audit records.',
    technicalApproach:
      'Structured a backend-and-vision pipeline using OpenCV preprocessing and PaddleOCR extraction feeding into a Node.js/Express.js and PostgreSQL lifecycle dashboard with Maker-Checker approvals and SHA-256 hash chaining.',
    implementedScope:
      'Full architectural design, relational schema planning, and workflow specification covering document ingestion, discrepancy checks, and audit trail structure.',
    proposedScope:
      'Production-scale OCR reconciliation pipeline (OpenCV + PaddleOCR), automated discrepancy alerts, Maker-Checker role enforcement, SHA-256 hash-linked audit ledger, and live lifecycle dashboard in Node.js/Express.js/PostgreSQL.',
    technologies: [
      'Python',
      'OpenCV',
      'PaddleOCR',
      'Node.js',
      'Express.js',
      'PostgreSQL',
    ],
    geoMeta: 'OCR RECONCILIATION · MAKER-CHECKER · SHA-256 AUDIT TRAIL',
  },
];

export const EDUCATION_LIST = [
  {
    id: 'edu-1',
    period: '2024 — 2028',
    degree: 'B.Tech Computer Science Engineering',
    institution: 'Indore Institute of Science and Technology (IIST), Indore',
    focus: 'CGPA: 7.5 / 10',
    notes:
      'Undergraduate coursework and applied exploration across software engineering, AI/ML fundamentals, data analysis, geospatial systems, and UML modelling.',
  },
  {
    id: 'edu-2',
    period: '2023 — 2024',
    degree: 'Class XII (Senior Secondary)',
    institution: 'PM Shri Kendriya Vidyalaya MHOW',
    focus: 'Score: 73%',
    notes: 'Completed senior secondary school education under the CBSE curriculum.',
  },
  {
    id: 'edu-3',
    period: '2021 — 2022',
    degree: 'Class X (Secondary)',
    institution: 'PM Shri Kendriya Vidyalaya MHOW',
    focus: 'Score: 73%',
    notes: 'Completed secondary school foundation.',
  },
];

export const LEADERSHIP_ITEMS = [
  {
    id: 'lead-1',
    period: 'Current Role',
    category: 'EXECUTIVE LEADERSHIP',
    title: 'Vice President, Entrepreneurship Cell, IIST',
    detail:
      'Leading student entrepreneurship initiatives, coordinating cross-functional teams, and fostering startup and innovation culture on campus.',
  },
  {
    id: 'lead-2',
    period: '2026',
    category: 'EVENT ORGANIZATION',
    title: 'Organized INCEPTION’26 (200+ Participants)',
    detail:
      'Planned and executed INCEPTION’26 at IIST, managing operations, outreach, and participant experience for more than 200 attendees.',
  },
  {
    id: 'lead-3',
    period: 'September 2026',
    category: 'TECHNICAL COMPETITION',
    title: 'Internal Hackathon Winner, IIST',
    detail:
      'Awarded 1st place at the IIST Internal Hackathon for collaborative engineering, problem framing, and technical prototype execution.',
  },
  {
    id: 'lead-4',
    period: '2025',
    category: 'NATIONAL FINALIST',
    title: 'NEC 2025 Finalist — 46th Rank Among 7,000+ Teams',
    detail:
      'Placed 46th nationally out of more than 7,000 competing teams in the National Entrepreneurship Challenge (NEC) 2025.',
  },
  {
    id: 'lead-5',
    period: '2025',
    category: 'COMMUNICATION & ADVOCACY',
    title: 'Best Speaker, Moot Court 2025',
    detail:
      'Recognized as Best Speaker for structured reasoning, persuasive oral advocacy, and poise under questioning.',
  },
];

export const OWNER_EMAIL = 'agustd03gouri07@gmail.com';

export const PROFILE_IMAGE_PATH = '/gouri-profile.png';
export const RESUME_PDF_PATH = '/Gouri_Tiwari_Resume.pdf';
export const RESUME_DOWNLOAD_NAME = 'Gouri_Tiwari_Resume.pdf';

export const PORTFOLIO_REVIEW_MAILTO = `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(
  'Portfolio Review — Gouri Tiwari'
)}&body=${encodeURIComponent(
  'Hello Gouri,\n\nI reviewed your portfolio (Beyond the Obvious) and wanted to share the following feedback:\n\n- Technical Clarity & Projects:\n- Architecture & Documentation:\n- Suggestions:\n'
)}`;

export const CONTACT_DETAILS = [
  {
    id: 'email',
    label: 'Direct Email',
    value: OWNER_EMAIL,
    href: `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent('Portfolio Inquiry — Gouri Tiwari')}`,
    copyable: true,
    icon: 'mail',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/gouritiwari808',
    href: 'https://www.linkedin.com/in/gouritiwari808/',
    copyable: false,
    icon: 'linkedin',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/tiwari16-like',
    href: 'https://github.com/tiwari16-like',
    copyable: false,
    icon: 'github',
  },
];
