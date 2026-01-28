export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  description?: string;
  highlights?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
  location?: string;
}

export interface Skill {
  name: string;
  category: 'backend' | 'frontend' | 'devops' | 'security' | 'tools' | 'design';
}

export interface Publication {
  year: string;
  type: 'conference' | 'publication' | 'project';
  title: string;
  description: string;
  details?: string;
}

export const profile = {
  name: 'Jean-Baptiste Machemie',
  title: 'Senior Software Engineer',
  subtitle: 'Software Craftsman & AI Enthusiast',
  location: 'Limoges, Nouvelle-Aquitaine, France',
  email: 'jb.machemie@proton.me',
  phone: '06.51.35.25.09',
  linkedin: 'linkedin.com/in/jean-baptiste-machemie-6900a7181',
  tagline: 'Building scalable systems with security-first mindset',
};

export const coreSkills: string[] = [
  'Backend Architecture',
  'API Design',
  'Distributed Systems',
  'Cloud-based Development',
  'Security Architecture',
  'AI Integration',
  'Pragmatism',
];

export const experiences: Experience[] = [
  {
    company: 'Winch',
    role: 'Senior Software Engineer',
    period: 'Feb 2026 - Present',
    description: 'Full-stack development of fintech platform from scratch with heavy AI integration',
    highlights: [
      'Multi-hat role spanning infrastructure, backend, frontend, design, and product',
      'Building fintech tools from the ground up leveraging AI/ML capabilities',
      'End-to-end ownership of technical architecture and user experience',
      'Rapid prototyping and iteration with modern AI-assisted development',
    ],
  },
  {
    company: 'Jump',
    role: 'Engineering Manager',
    period: 'Oct 2023 - Jan 2026',
    description: 'Leading engineering teams, driving technical strategy and delivery',
    highlights: [
      'Managing cross-functional engineering teams',
      'Architecting scalable microservices infrastructure',
      'Achieved ISO 27001 certification for the company',
      'Driving technical decisions and best practices',
      'Mentoring engineers and fostering team growth',
    ],
  },
  {
    company: 'Jump',
    role: 'Backend Engineer',
    period: 'Sep 2021 - Oct 2023',
    description: 'Building robust backend systems and infrastructure',
    highlights: [
      'Designed and implemented microservices architecture',
      'Kubernetes orchestration and scaling',
      'Infrastructure as Code with Terraform',
      'CI/CD pipeline optimization',
    ],
  },
  {
    company: 'Neocase Software SAS',
    role: 'Full-stack Developer',
    period: 'Dec 2018 - Sep 2021',
    description: 'Developing enterprise software solutions',
    highlights: [
      'Full-stack development of SaaS platform',
      'RESTful API design and implementation',
      'Database optimization and performance tuning',
    ],
  },
  {
    company: 'Aleda',
    role: 'Web Service Developer',
    period: '2018',
    location: 'Limoges, France',
    description: 'RESTful backend and frontend services development',
    highlights: [
      'Development with J2EE, Spring, Primefaces',
      'Continuous integration deployment preparation (GIT, Jenkins)',
      'Unit and functional testing',
    ],
  },
  {
    company: 'DGSI',
    role: 'Specialized Technical Agent',
    period: '2013 - 2016',
    location: 'Levallois, France',
    description: 'Digital investigation and specialized technical operations',
    highlights: [
      'Digital forensics and encrypted data analysis',
      'Computing infrastructure management',
      'Development and maintenance of web monitoring interface (HTML/CSS, PHP, SQL, JQuery)',
    ],
  },
  {
    company: 'Arya Security (AVRUL - Incubator)',
    role: 'Founder',
    period: '2012 - 2013',
    location: 'Limoges, France',
    description: 'Complete technical and business development of Arya Security project',
    highlights: [
      'Automated security specification validator development (Java)',
      'Website development (HTML / CSS)',
      'Full project lifecycle management',
    ],
  },
  {
    company: 'Laboratoire Xlim',
    role: 'Research Engineer',
    period: '2011 - 2012',
    location: 'Limoges, France',
    description: 'Security specifications research and implementation',
    highlights: [
      'Security specifications analysis and implementation (Java)',
      'High-level JavaCard framework development (Java)',
    ],
  },
  {
    company: 'SFR',
    role: 'Intern',
    period: '2011',
    location: 'Paris / Limoges, France',
    description: 'SIM card security research',
    highlights: [
      'Virtual machine hardening for SIM cards (C)',
      'Adaptive security model performance impact study',
    ],
  },
  {
    company: 'SFR',
    role: 'Intern',
    period: '2010',
    location: 'Paris / Limoges, France',
    description: 'Smart card attack simulation',
    highlights: [
      'Fault injection simulator implementation for smart cards (Java)',
      'Comparative performance analysis of innovative countermeasures (Java)',
    ],
  },
];

export const education: Education[] = [
  {
    institution: 'Université de Limoges',
    degree: 'Master in Information Security - Cryptis',
    year: '2011',
    location: 'Limoges, France',
  },
  {
    institution: 'Université de Limoges',
    degree: 'Bachelor\'s Degree in Computer Science',
    year: '2009',
    location: 'Limoges, France',
  },
  {
    institution: 'Lycée Bernard Palissy',
    degree: 'Scientific Baccalaureate - Mathematics Specialization',
    year: '2005',
    location: 'St-Léonard de Noblat, France',
  },
];

export const skills: Skill[] = [
  // DevOps & Infrastructure
  { name: 'Kubernetes', category: 'devops' },
  { name: 'Docker', category: 'devops' },
  { name: 'Terraform', category: 'devops' },
  { name: 'AWS', category: 'devops' },
  { name: 'GCP', category: 'devops' },
  { name: 'CI/CD', category: 'devops' },
  { name: 'GitOps', category: 'devops' },
  { name: 'Jenkins', category: 'devops' },

  // Backend
  { name: 'Microservices', category: 'backend' },
  { name: 'Go', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'Java / J2EE', category: 'backend' },
  { name: 'JavaCard', category: 'backend' },
  { name: 'C', category: 'backend' },
  { name: 'C++', category: 'backend' },
  { name: 'Spring', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'SQL / No-SQL', category: 'backend' },
  { name: 'Redis', category: 'backend' },
  { name: 'GraphQL', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'PHP', category: 'backend' },

  // Frontend
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'Vue.js', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'HTML / CSS', category: 'frontend' },
  { name: 'JQuery', category: 'frontend' },
  { name: 'Primefaces', category: 'frontend' },

  // Security
  { name: 'Security Architecture', category: 'security' },
  { name: 'Cryptography', category: 'security' },
  { name: 'Digital Forensics', category: 'security' },
  { name: 'Secure Coding', category: 'security' },
  { name: 'Reverse Engineering', category: 'security' },
  { name: 'Encrypted Data Analysis', category: 'security' },

  // Tools
  { name: 'Git', category: 'tools' },
  { name: 'Linux', category: 'tools' },
  { name: 'Monitoring', category: 'tools' },
  { name: 'Agile', category: 'tools' },
  { name: 'Tests Unitaires', category: 'tools' },

  // Design
  { name: 'Photoshop', category: 'design' },
  { name: 'Illustrator', category: 'design' },
  { name: 'InDesign', category: 'design' },
];

export const publications: Publication[] = [
  {
    year: '2012',
    type: 'conference',
    title: 'Chip-to-Cloud 2012 - Speaker',
    description: 'Smart Analyzer, an Automatic Rules Compliance Checker',
    details: 'Presentation of the security specification validator developed for Arya Security',
  },
  {
    year: '2011',
    type: 'publication',
    title: 'WIFS - SmartCM',
    description: 'SmartCM, a Smart Card Fault Injection Simulator',
    details: 'Publication on fault injection attack simulation on smart cards',
  },
  {
    year: '2011',
    type: 'publication',
    title: 'CARDIS - Evaluation of SIM Security',
    description: 'Evaluation of the Ability to Transform SIM Applications into Hostile Applications',
    details: 'Security analysis of SIM applications and risks of transformation into hostile applications',
  },
  {
    year: '2011',
    type: 'project',
    title: 'Comparative Study of Access Control Methods',
    description: 'Analysis of security models (DAC, MAC, RBAC, TE and MLS)',
    details: 'Study of Linux Security Modules (LSM) AppArmor, Tomoyo and SELinux',
  },
  {
    year: '2010',
    type: 'project',
    title: 'Kerberos/LDAP Server Prototyping',
    description: 'Authentication system on Kerberos realm with LDAP directory',
    details: 'Design and implementation in VMware ESXi environment',
  },
  {
    year: '2009',
    type: 'project',
    title: 'Netkit Project - uml_dump Module Development',
    description: 'Virtual switch for Netkit enabling real-time network traffic dump',
    details: 'Tool officially integrated into Netkit project in 2010',
  },
];

export const easterEggs = {
  terminalCommands: [
    { cmd: 'whoami', response: 'jean-baptiste.machemie@portfolio:~$ Engineering Manager with a passion for scalable systems and team leadership' },
    { cmd: 'history', response: '1. SFR - Smart Card Security Research (2010-2011)\n2. Laboratoire Xlim - Security Research Engineer (2011-2012)\n3. Arya Security - Project Leader (2012-2013)\n4. DGSI - Digital Forensics & Investigation (2013-2016)\n5. Aleda - Full-stack Developer (2018)\n6. Neocase - Full-stack Developer (2018-2021)\n7. Jump - Backend Engineer (2021-2023)\n8. Jump - Engineering Manager (2023-2026)\n9. Winch - Senior Software Engineer (2026-Present)\n\n// Building the future, one commit at a time' },
    { cmd: 'ls -la /secrets', response: 'drwxr-xr-x  2 jbm  staff    64 Jan 26 2024 .\ndrwxr-xr-x  6 jbm  staff   192 Jan 26 2024 ..\n-rw-r--r--  1 jbm  staff  1337 Jan 26 2024 kubernetes_mastery.txt\n-rw-r--r--  1 jbm  staff  2048 Jan 26 2024 security_expertise.enc\n-rw-r--r--  1 jbm  staff  3072 Jan 26 2024 cryptography_research.gpg\n-rw-r--r--  1 jbm  staff  1024 Jan 26 2024 javacard_framework.jar\n-rw-------  1 jbm  staff  4096 Jan 26 2024 leadership_notes.md\n-rw-r--r--  1 jbm  staff   512 Jan 26 2024 netkit_contribution.patch' },
    { cmd: 'cat .env', response: 'PASSION=engineering\nSKILL_LEVEL=senior\nLOCATION=limoges\nSTATUS=always_learning\nCOFFEE_REQUIRED=true\n# Secrets are meant to stay secret 🔐' },
    { cmd: 'hack.exe', response: 'ACCESS DENIED.\nJust kidding! But I did work at DGSI on:\n- Digital forensics & encrypted data analysis\n- Smart card security research\n- Reverse engineering\n\nNice try though 😉' },
    { cmd: 'sudo make me a sandwich', response: 'Okay.\n🥪 Sandwich made!\n\nBut seriously, with great power comes great responsibility.' },
    { cmd: 'git log --reverse', response: 'commit 1a2b3c4d (2009)\n    feat: Netkit uml_dump module - first major open-source contribution\n\ncommit 2b3c4d5e (2010-2011)\n    feat: Smart card security research @ SFR\n\ncommit 3c4d5e6f (2011-2012)\n    feat: JavaCard framework & security specs @ Laboratoire Xlim\n\ncommit 4d5e6f7g (2012-2013)\n    feat: Arya Security project - automated security validator\n\ncommit 5e6f7g8h (2013-2016)\n    feat: Digital forensics & encrypted data analysis @ DGSI\n\ncommit 6f7g8h9i (2018)\n    feat: Full-stack development with J2EE & Spring @ Aleda\n\ncommit 7g8h9i0j (2018-2021)\n    feat: Enterprise SaaS platform development @ Neocase\n\ncommit 8h9i0j1k (2021-2023)\n    feat: Microservices & K8s infrastructure @ Jump\n\ncommit 9i0j1k2l (2023-2026)\n    feat: Engineering Manager - Leading teams @ Jump\n\ncommit 0j1k2l3m (2026)\n    feat: Multi-hat full-stack fintech development @ Winch\n\nHEAD -> main (2026)\n    feat: Building this fancy retro portfolio with Astro & React' },
    { cmd: 'neofetch', response: '                    jbm@portfolio\n                    -------------\n   _____           OS: Engineering OS v2026.1\n  /     \\          Host: Limoges, France\n |  o_o |          Kernel: Leadership-6.0-stable\n  \\  >  /          Uptime: 16 years in tech\n  /     \\          Shell: bash 5.2.0\n /|     |\\         Packages: microservices, k8s, terraform, ai\n/_|     |_\\        Theme: RetroSystem [dark]\n                   Icons: Phosphor Green\n                   Terminal: iTerm2\n                   CPU: Brain (8 cores)\n                   Memory: ∞ passion for tech' },
  ],
  konamiCode: 'Up, Up, Down, Down, Left, Right, Left, Right, B, A',
  hiddenMessage: 'If you found this in the source code, you know how to dig! Let\'s connect.',
};
