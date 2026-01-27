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
  category: 'backend' | 'frontend' | 'devops' | 'security' | 'tools';
}

export const profile = {
  name: 'Jean-Baptiste Machemie',
  title: 'Engineering Manager',
  subtitle: 'Senior Software Engineer & Tech Leader',
  location: 'Limoges, Nouvelle-Aquitaine, France',
  email: 'jb.machemie@gmail.com',
  linkedin: 'linkedin.com/in/jean-baptiste-machemie-6900a7181',
  tagline: 'Building scalable systems & leading engineering teams',
};

export const coreSkills: string[] = [
  'Microservices',
  'Kubernetes',
  'Terraform',
  'Leadership',
  'Architecture',
];

export const experiences: Experience[] = [
  {
    company: 'Jump',
    role: 'Engineering Manager',
    period: 'Oct 2023 - Present',
    description: 'Leading engineering teams, driving technical strategy and delivery',
    highlights: [
      'Managing cross-functional engineering teams',
      'Architecting scalable microservices infrastructure',
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
      'Frontend development with modern frameworks',
      'Database optimization and performance tuning',
    ],
  },
  {
    company: 'Aleda',
    role: 'Full-stack Developer',
    period: 'Apr 2018 - Sep 2018',
    location: 'Limoges, France',
    description: 'RESTful backend and frontend services development',
  },
  {
    company: 'Ministère de l\'Intérieur',
    role: 'Agent Spécialisé',
    period: 'Oct 2013 - Jun 2016',
    location: 'Paris, France',
    description: 'Specialized technical and security operations',
    highlights: [
      'Internal tools development',
      'Digital forensics and encrypted data analysis',
      'High-performance computing infrastructure management',
      'Security-focused system administration',
    ],
  },
  {
    company: 'Arya Security',
    role: 'Project Leader',
    period: 'Sep 2012 - Sep 2013',
    location: 'Limoges, France',
    description: 'Technical and business development of Arya Security project',
    highlights: [
      'Automated security specification validator',
      'Full project lifecycle management',
      'Technical architecture and implementation',
    ],
  },
  {
    company: 'Laboratoire Xlim',
    role: 'Ingénieur de Recherche',
    period: 'Sep 2011 - Aug 2012',
    location: 'Limoges, France',
    description: 'Research and implementation of security specifications',
    highlights: [
      'Security specification analysis and implementation',
      'High-level JavaCard framework development',
      'Research in secure systems',
    ],
  },
  {
    company: 'SFR',
    role: 'Stagiaire',
    period: 'Mar 2011 - Aug 2011',
    location: 'Paris, France',
    description: 'SIM card security research',
    highlights: [
      'Virtual machine hardening for SIM cards',
      'Adaptive security model performance analysis',
    ],
  },
];

export const education: Education[] = [
  {
    institution: 'Université de Limoges',
    degree: 'Master, Sécurité des Technologies de l\'Information et de la Communication',
    year: '2011',
    location: 'Limoges, France',
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

  // Backend
  { name: 'Microservices', category: 'backend' },
  { name: 'Go', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'Redis', category: 'backend' },
  { name: 'GraphQL', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },

  // Frontend
  { name: 'TypeScript', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'Vue.js', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },

  // Security
  { name: 'Security Architecture', category: 'security' },
  { name: 'Cryptography', category: 'security' },
  { name: 'Digital Forensics', category: 'security' },
  { name: 'Secure Coding', category: 'security' },

  // Tools
  { name: 'Git', category: 'tools' },
  { name: 'Linux', category: 'tools' },
  { name: 'Monitoring', category: 'tools' },
  { name: 'Agile', category: 'tools' },
];

export const easterEggs = {
  terminalCommands: [
    { cmd: 'whoami', response: 'jean-baptiste.machemie@portfolio:~$ Engineering Manager with a passion for scalable systems and team leadership' },
    { cmd: 'history', response: '1. Ministry of Interior - Digital Forensics\n2. Research Engineer - Security\n3. Full-stack Developer\n4. Backend Engineer\n5. Engineering Manager @ Jump\n\n// Building the future, one commit at a time' },
    { cmd: 'ls -la /secrets', response: 'drwxr-xr-x  2 jbm  staff    64 Jan 26 2024 .\ndrwxr-xr-x  6 jbm  staff   192 Jan 26 2024 ..\n-rw-r--r--  1 jbm  staff  1337 Jan 26 2024 kubernetes_mastery.txt\n-rw-r--r--  1 jbm  staff  2048 Jan 26 2024 security_expertise.enc\n-rw-------  1 jbm  staff  4096 Jan 26 2024 leadership_notes.md' },
    { cmd: 'cat .env', response: 'PASSION=engineering\nSKILL_LEVEL=senior\nLOCATION=limoges\nSTATUS=always_learning\nCOFFEE_REQUIRED=true\n# Secrets are meant to stay secret 🔐' },
    { cmd: 'hack.exe', response: 'ACCESS DENIED.\nJust kidding! But I did work at the Ministry of Interior on digital forensics.\nNice try though 😉' },
    { cmd: 'sudo make me a sandwich', response: 'Okay.\n🥪 Sandwich made!\n\nBut seriously, with great power comes great responsibility.' },
    { cmd: 'git log --reverse', response: 'commit 1a2b3c4d (2011)\n    Started with security research at SFR\n\ncommit 5e6f7g8h (2013)\n    Ministry of Interior - Digital forensics\n\ncommit 9i0j1k2l (2018)\n    Full-stack development journey begins\n\ncommit 3m4n5o6p (2021)\n    Backend Engineer @ Jump\n\ncommit 7q8r9s0t (2023)\n    Engineering Manager - Leading teams\n\nHEAD -> main (2024)\n    Building this fancy retro portfolio' },
    { cmd: 'neofetch', response: '                    jbm@portfolio\n                    -------------\n   _____           OS: Engineering OS v2024.1\n  /     \\          Host: Limoges, France\n |  o_o |          Kernel: Leadership-6.0-stable\n  \\  >  /          Uptime: 13 years in tech\n  /     \\          Shell: bash 5.2.0\n /|     |\\         Packages: microservices, k8s, terraform\n/_|     |_\\        Theme: RetroSystem [dark]\n                   Icons: Phosphor Green\n                   Terminal: iTerm2\n                   CPU: Brain (8 cores)\n                   Memory: ∞ passion for tech' },
  ],
  konamiCode: 'Up, Up, Down, Down, Left, Right, Left, Right, B, A',
  hiddenMessage: 'If you found this in the source code, you know how to dig! Let\'s connect.',
};
