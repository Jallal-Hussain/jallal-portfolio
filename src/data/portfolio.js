/** Content for Jalal Hussain — layout inspired by buildwithrv.com */

export const PROFILE = {
  name: 'Jalal Hussain',
  shortName: 'JH',
  siteName: 'Build with Jalal',
  tagline: 'MERN Stack Developer & AI/ML Enthusiast',
  role: 'MERN Stack Developer & AI/ML Enthusiast',
  email: 'jalal143880@gmail.com',
  phone: '+92 340 8095 062',
  location: 'Skardu, Gilgit-Baltistan, Pakistan',
  github: 'https://github.com/Jallal-Hussain',
  linkedin: 'https://linkedin.com/in/jalalhussain',
  resumePath: '/Jalal_Hussain_Resume.pdf',
  resumeHtmlPath: '/Jalal_Hussain_Resume.html',
  available: true,
  company: 'NetBots',
  education: 'University of Baltistan, Skardu',
}

export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#work', label: "What I'm building" },
  { href: '#services', label: 'For teams' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Follow me' },
]

export const HERO = {
  greeting: 'Hello, I am Jalal!',
  eyebrow: 'An independent MERN & AI developer',
  headline: 'The developer who actually ships.',
  paragraphs: [
    'Full-stack by practice, AI/ML by curiosity. Two years across internships, client delivery, and production systems at NetBots — MERN, Next.js, FastAPI, and deep learning in the same workflow.',
    'Today, I build web applications clients can run in production, and AI systems teams can query, deploy, and maintain — RAG pipelines, attendance systems, and full MERN dashboards on real VPS infrastructure.',
    'I work lean: design the stack, ship the code, document the handoff. Browse the builds below, or reach out directly — we’ll figure out if we fit.',
  ],
  directCta: 'Or skip the tour; talk to Jalal directly',
  directLink: '#contact',
  priorityNote: 'Email · reply within 24-48 hrs',
  priorityHref: 'mailto:jalal143880@gmail.com',
}

export const CONTACT_PANEL = {
  title: 'Reach Jalal',
  subtitle: 'The fastest way to get a response',
  live: true,
  audiencePrompt: 'Who is this for?',
  audiences: [
    { id: 'you', label: 'Yourself', href: '#offerings' },
    { id: 'team', label: 'Your team or company', href: '#services' },
  ],
}

export const METRICS = [
  { value: 3, suffix: '+', label: 'Projects delivered', sub: 'Production & portfolio' },
  { value: 2, suffix: '+', label: 'Years in stack', sub: 'MERN + AI/ML' },
  { value: 4, suffix: '+', label: 'Certifications', sub: 'Coursera & NetBots' },
  { value: 10, suffix: '+', label: 'Stack tools', sub: 'From React to RAG' },
]

export const EXPERIENCE_STRIP = [
  { role: 'MERN Stack Developer', org: 'NetBots', period: 'Mar 2025 - Oct 2025' },
  { role: 'MERN Stack Intern', org: 'NetBots', period: 'Jun 2024 - Dec 2024' },
  { role: 'BS Computer Science', org: 'University of Baltistan', period: '2023 - Present' },
  { role: 'Client delivery', org: 'Tour & travel · RAG · Admin', period: 'Shipped' },
]

export const SERVICES = {
  eyebrow: 'For teams',
  title: 'Bespoke development, built around your product.',
  intro:
    'Not template demos or tutorial clones. Work shaped around your domain, your data, and the constraints you actually ship inside: legacy APIs, budget, compliance, and team skill level.',
  items: [
    {
      title: 'Full-stack MERN delivery',
      body: 'Get a production-ready web app — React or Next.js frontends, Express APIs, MongoDB models, auth, and deployment on VPS or cloud.',
    },
    {
      title: 'AI & automation integration',
      body: 'RAG over your documents, LLM chat interfaces, FastAPI backends, and Python ML pipelines — wired into dashboards your team already uses.',
    },
    {
      title: 'Ship & hand off',
      body: 'Move from prototype to something maintainable: clean repos, environment setup, and documentation so your team can own it after launch.',
    },
  ],
  footnote: 'To scope work for your team, start with a direct message at the top.',
}

export const OFFERINGS = {
  eyebrow: 'One-to-one',
  title: 'What can you build with me?',
  intro:
    'Three doors, each opening onto something concrete. Pick the one that matches where you are right now.',
  items: [
    {
      title: 'Build your portfolio',
      bullets: [
        'Position yourself as a MERN + AI developer',
        'Project selection & GitHub polish',
        'Resume and case-study narrative',
      ],
      cta: "Let's build your portfolio",
      duration: '30 min',
      href: 'mailto:jalal143880@gmail.com?subject=Portfolio%20review',
    },
    {
      title: 'Build your AI stack',
      bullets: [
        'RAG, LLM APIs, and Python backends',
        'Picks tailored to your use case',
        'From FastAPI to production deploy',
      ],
      cta: "Let's map your AI stack",
      duration: '30 min',
      href: 'mailto:jalal143880@gmail.com?subject=AI%20stack%20consultation',
    },
    {
      title: 'Build your idea',
      bullets: [
        'From spec to working MERN prototype',
        'Live build session on the call',
        'Stop planning, start shipping',
      ],
      cta: "Let's build your idea",
      duration: '60 min',
      href: 'mailto:jalal143880@gmail.com?subject=Project%20build%20session',
    },
  ],
}

export const WORK = {
  eyebrow: "What I'm building",
  title: 'Where the work actually lives.',
  tabs: [
    { id: 'projects', label: 'Builds' },
    { id: 'experience', label: 'Experience' },
    { id: 'certs', label: 'Credentials' },
  ],
  tabIntro: {
    projects: 'Client work, course capstones, and AI systems — the repos and demos behind the stack.',
    experience: 'Operator history at NetBots and the path through full-stack certification.',
    certs: 'Formal training that backs the practice — Coursera, NetBots, and Python foundations.',
  },
}

export const PROJECTS = [
  {
    id: 'rag',
    title: 'CAG — Chat with Your PDF',
    category: 'AI / RAG Build',
    description:
      'FastAPI backend with PDF upload, extraction, LLM conversational AI, auth, document management, and summarization.',
    tags: ['FastAPI', 'Python', 'React', 'LLM', 'RAG'],
    repo: 'https://github.com/Jallal-Hussain/Hope_to_skills_Python_Project',
    live: null,
    image:
      'https://raw.githubusercontent.com/Jallal-Hussain/Hope_to_skills_Python_Project/main/Landing.png',
    imageAlt: 'CAG RAG project preview',
  },
  {
    id: 'tour',
    title: 'Tour & Travel Web Application',
    category: 'Client · Full Stack',
    description:
      'First client tour agency — Home, Tours, Blogs, About, Contact — Next.js UI with Express/MongoDB and VPS deployment.',
    tags: ['Next.js', 'Tailwind', 'Express', 'MongoDB'],
    repo: null,
    live: 'https://tourmakerpakistan.com',
    image: 'https://opengraph.githubassets.com/1/NETBOTS-IO/TourMaker',
    imageAlt: 'Tour agency project preview',
  },
  {
    id: 'face',
    title: 'Face Recognition Attendance System',
    category: 'Deep Learning',
    description:
      'Dual-mode attendance: ArcFace + classifier and OCR card scanning, Gradio UI, CSV records.',
    tags: ['ArcFace', 'OCR', 'Python', 'Gradio'],
    repo: 'https://github.com/Jallal-Hussain/Face-Recognition-Attendance-System',
    live: null,
    image:
      'https://raw.githubusercontent.com/Jallal-Hussain/Face-Recognition-Attendance-System/main/images/gradio_interface.jpg',
    imageAlt: 'Face recognition Gradio UI',
  },
  {
    id: 'lms',
    title: 'Library Management System',
    category: 'MERN Capstone',
    description:
      'This project showcases a comprehensive LMS frontend: A fully client-side demo of a modern library management system built with Next.js App Router, Tailwind CSS (shadcn-style UI), and mock data/auth.',
    tags: ['TypeScript', 'Recharts.js', 'Tailwind CSS', 'ShadCN UI', 'Next.js 16'],
    repo: 'https://github.com/Jallal-Hussain/Library-Management-System',
    live: null,
    image: 'https://raw.githubusercontent.com/Jallal-Hussain/Library-Management-System/main/screenshots/Landing.jpg',
    imageAlt: 'Library management project preview',
  },
  {
    id: 'hotel',
    title: 'Hotel Management System',
    category: 'MERN Capstone',
    description:
      'Admin panel for bookings, inventory, and staff — the project that set my path from CS student to full-stack developer.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    repo: 'https://github.com/Jallal-Hussain/Rinor_Project_1',
    live: null,
    image: 'https://opengraph.githubassets.com/1/Jallal-Hussain/Rinor_Project_1',
    imageAlt: 'Hotel management project preview',
  },
]

export const EXPERIENCE = [
  {
    id: 'netbots-dev',
    role: 'MERN Stack Developer',
    company: 'NetBots',
    period: 'Mar 2025 - Oct 2025',
    type: 'Enterprise & client delivery',
    bullets: [
      'Built and shipped full-stack MERN applications with Express REST APIs, MongoDB schemas, and React/Next.js frontends.',
      'Developed CAG (Chat with Your PDF): FastAPI, PDF ingestion, LLM chat, auth, and summarization.',
      'Delivered tour-agency website with VPS deployment; contributed to NetBots sub-domain products.',
    ],
  },
  {
    id: 'netbots-intern',
    role: 'MERN Stack Developer Internship',
    company: 'NetBots',
    period: 'Jun 2024 - Dec 2024',
    type: 'Certification & capstones',
    bullets: [
      'Completed NetBots MERN Stack Web Development programme with production-style projects.',
      'Implemented authentication, CRUD APIs, and responsive React UIs with MongoDB data models.',
      'Built Hotel Management admin panel and e-commerce UI clones under senior mentorship.',
    ],
  },
]

export const CERTIFICATIONS = [
  { name: 'Basic Python Development for AI/ML', issuer: 'Hope to Skills', date: 'Apr 2025' },
  { name: 'MERN Stack Front to Back', issuer: 'Coursera', date: 'Feb 2025' },
  { name: 'MERN Stack Web Development', issuer: 'NetBots', date: 'Apr 2024' },
  {
    name: 'HTML, CSS & JavaScript for Web Developers',
    issuer: 'Coursera',
    date: 'Aug 2023',
  },
]

export const HIGHLIGHTS = {
  eyebrow: 'Notes from the work',
  title: 'What keeps showing up.',
  intro: 'Grouped by what collaborators and coursework tend to mention — shipping, clarity, and depth when it matters.',
  groups: [
    {
      title: 'Clear systems, not slide decks',
      items: [
        'Breaks complex MERN flows into steps teams can follow',
        'Documentation and repo structure that survive handoff',
      ],
    },
    {
      title: 'On the deep technical stuff',
      items: [
        'RAG pipelines, ArcFace embeddings, and FastAPI backends',
        'Comfortable going from notebook to integrated product',
      ],
    },
    {
      title: 'Less talk, more building',
      items: [
        'Live demos and working prototypes over theory',
        'Leaves with runnable code, not just requirements',
      ],
    },
    {
      title: 'Full-stack range',
      items: [
        'Next.js client sites to Python ML services in one portfolio',
        'VPS deploys and real client delivery experience',
      ],
    },
  ],
}

export const PERSONAS = {
  eyebrow: 'Who I am',
  title: 'Four selves, one practice.',
  intro:
    "Four overlapping habits shape the work. None of them work alone; together they're how I stay useful across very different rooms.",
  items: [
    {
      title: 'The builder',
      body: 'Most alive at the keyboard — MERN apps, FastAPI services, and AI pipelines that actually run in production.',
    },
    {
      title: 'The learner',
      body: 'BS Computer Science at University of Baltistan; certifications and course capstones that stress-test new stacks.',
    },
    {
      title: 'The integrator',
      body: 'Useful at the seams: connecting frontends, APIs, databases, and ML models into one coherent product.',
    },
    {
      title: 'The shipper',
      body: 'Client tour sites, RAG systems, and admin dashboards — biased toward done, deployed, and documented.',
    },
  ],
}

export const SKILLS = [
  'React', 'Next.js', 'Node.js', 'Express', 'FastAPI', 'Python',
  'MongoDB', 'MySQL', 'PostgreSQL', 'LLM', 'RAG', 'Deep Learning', 'Git', 'VPS',
]

export const FOOTER = {
  tagline: 'Independent MERN & AI developer.',
  sub: 'Working with teams and individuals to ship useful software inside real constraints.',
  sitemap: [
    { href: '#work', label: "What I'm building" },
    { href: '#services', label: 'For teams' },
    { href: '#offerings', label: 'One-to-one' },
    { href: '#highlights', label: 'Notes from the work' },
    { href: '#about', label: 'Who I am' },
  ],
  social: [
    { href: PROFILE.github, label: 'GitHub', handle: '@Jallal-Hussain' },
    { href: PROFILE.linkedin, label: 'LinkedIn', handle: 'jalalhussain' },
    { href: `mailto:${PROFILE.email}`, label: 'Email', handle: PROFILE.email },
  ],
}
