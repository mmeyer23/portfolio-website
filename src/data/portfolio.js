export const profile = {
  name: 'Mason Meyer',
  role: 'Full-stack software engineer',
  location: 'Portland, Oregon',
  availability: 'Open to relocation',
  email: 'mason.meyer@gmail.com',
  github: 'https://github.com/mmeyer23',
  linkedin: 'https://www.linkedin.com/in/-mason-meyer/',
  headline: 'I build software with the whole system in view.',
  introduction:
    'I bring together formal systems training, hands-on SaaS development, and a decade of customer and business leadership to turn complex needs into practical software.',
};

export const signals = [
  { label: 'Education', value: 'M.S. Computer Science' },
  { label: 'Product scale', value: '2,000+ SaaS users' },
  { label: 'Focus', value: 'Full-stack systems' },
  { label: 'Perspective', value: 'Code to customer' },
];

export const projects = [
  {
    id: 'daily-shred',
    eyebrow: '01 / Subscription SaaS',
    name: 'The Daily Shred',
    summary:
      'A B2B2C wellness platform built and operated from architecture through ongoing product development.',
    contribution: 'Co-founder · Lead developer',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    highlights: [
      'Designed Redis sorted-set leaderboards with five-minute batch refreshes, reducing API latency by about 80% and database load by about 90%.',
      'Built cohort-based messaging experiments that contributed to a 90% lift in email opens and a 250% lift in click-through rates.',
    ],
    visibility: 'Proprietary product',
    visual: 'signals',
  },
  {
    id: 'data-wizard',
    eyebrow: '02 / Safe AI tooling',
    name: 'DataWizard',
    summary:
      'A preview-first workflow that turns natural-language requests into reviewable PostgreSQL seed plans.',
    contribution: 'Maintainer · Full-stack engineer',
    stack: ['React', 'Node.js', 'TypeScript', 'OpenAI', 'PostgreSQL'],
    highlights: [
      'Separated model-generated plans from deterministic SQL rendering and database execution.',
      'Added policy checks, credential masking, explicit approval gates, and automated quality budgets.',
    ],
    link: 'https://github.com/mmeyer23/dataWizard',
    linkLabel: 'View repository',
    visual: 'pipeline',
  },
  {
    id: 'legacy-modernizer',
    eyebrow: '03 / Software modernization',
    name: 'Legacy Modernizer',
    summary:
      'An inspectable pipeline for analyzing legacy Fortran and producing structured Python migration guidance.',
    contribution: 'Creator · Systems engineer',
    stack: ['Python', 'FastAPI', 'Pydantic', 'LLMs', 'AST'],
    highlights: [
      'Introduced an intermediate representation between source analysis and code generation to make translation behavior inspectable.',
      'Combined typed models and AST checks with AI-assisted semantic review to surface structural and migration gaps.',
    ],
    link: 'https://github.com/mmeyer23/legacy-code-modernizer',
    linkLabel: 'View repository',
    visual: 'migration',
  },
];

export const experience = [
  {
    dates: '2020 - Present',
    company: 'The Daily Shred',
    role: 'Co-founder & Lead Developer',
    detail:
      'Lead architecture and development for a subscription platform while balancing product, infrastructure, customer, and operational needs.',
  },
  {
    dates: '2024 - 2025',
    company: 'PodMD · OSLabs',
    role: 'Full-stack Software Engineer',
    detail:
      'Built workload-aware restart orchestration and least-privilege EKS integrations for an open-source Kubernetes observability tool.',
    link: 'https://github.com/oslabs-beta/PodMD',
  },
  {
    dates: '2018 - 2024',
    company: 'The Forge Fitness Studio',
    role: 'Web Developer · Chief Operating Officer',
    detail:
      'Developed production workflows in React, Express, and PostgreSQL while leading the customer and operating systems those tools supported.',
  },
];

export const capabilities = [
  {
    label: 'Languages',
    values: 'JavaScript, TypeScript, Python, C++, SQL, Bash',
  },
  {
    label: 'Applications',
    values: 'React, Next.js, Node.js, Express, FastAPI, REST APIs',
  },
  {
    label: 'Data',
    values: 'PostgreSQL, MySQL, Redis, Pandas, scikit-learn',
  },
  {
    label: 'Infrastructure',
    values: 'AWS, Docker, Kubernetes, EKS, Linux, GitHub Actions',
  },
  {
    label: 'Quality',
    values: 'Jest, Mocha, Supertest, Prometheus, Grafana',
  },
];
