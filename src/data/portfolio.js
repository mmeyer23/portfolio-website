export const profile = {
  name: 'Mason Meyer',
  role: 'Systems analyst & solutions engineer',
  location: 'Portland, Oregon',
  availability: 'Open to relocation',
  email: 'mason.meyer@gmail.com',
  github: 'https://github.com/mmeyer23',
  linkedin: 'https://www.linkedin.com/in/-mason-meyer/',
  headline: 'I turn complex business needs into practical technical systems.',
  introduction:
    'I combine systems analysis, solution design, software implementation, and operational leadership to improve workflows and carry projects from discovery through delivery.',
};

export const signals = [
  { label: 'Education', value: 'M.S. Computer Science' },
  { label: 'Engagement impact', value: '+65% post-launch' },
  { label: 'Product scale', value: '2,000+ active subscribers' },
  { label: 'Business impact', value: '50% → 80% retention' },
];

export const solutionLifecycle = [
  {
    label: 'Discover',
    detail: 'Stakeholder goals, requirements, and constraints',
  },
  {
    label: 'Map',
    detail: 'Processes, systems, and data flows',
  },
  {
    label: 'Design',
    detail: 'A practical solution and implementation plan',
  },
  {
    label: 'Deliver',
    detail: 'Build, configure, integrate, and deploy',
  },
  {
    label: 'Enable',
    detail: 'Documentation, handoff, and adoption',
  },
];

export const projects = [
  {
    id: 'data-wizard',
    eyebrow: '01 / Safe AI tooling',
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
    eyebrow: '02 / Software modernization',
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
    dates: '2025 - Present',
    company: 'Independent Web Development',
    role: 'Independent Web Developer',
    detail:
      'Led discovery and delivery across five client and founder-led launches, translating business goals into technical requirements, user flows, integrations, and production systems from solution design through deployment and handoff.',
  },
  {
    dates: '2020 - Present',
    company: 'The Daily Shred',
    role: 'Co-founder',
    detail:
      'Operate a digital subscription service serving 2,000+ active subscribers, leading client proposals and product demonstrations while owning the technical and operational systems behind service delivery.',
  },
  {
    dates: '2024 - 2025',
    company: 'PodMD · OSLabs',
    role: 'Software Engineer',
    detail:
      'Translated reliability and access-control constraints into workload-aware restart orchestration and least-privilege AWS EKS integrations for an open-source Kubernetes observability platform.',
  },
  {
    dates: '2018 - 2024',
    company: 'The Forge Fitness Studio',
    role: 'Co-founder & Operations Manager',
    detail:
      'Administered the core business platform, evaluated vendors, documented workflows, and translated operational requirements into improvements that raised member retention from approximately 50% to 80% and engagement by 65%.',
  },
];

export const capabilities = [
  {
    label: 'Discovery & analysis',
    values:
      'Requirements gathering, stakeholder discovery, process analysis, workflow design, solution design, documentation',
  },
  {
    label: 'Solution delivery',
    values:
      'Software configuration, implementation, API integration, deployment, training, handoff, adoption',
  },
  {
    label: 'Business systems',
    values:
      'CRM administration, reporting, data analysis, vendor evaluation, operational workflows, staff enablement',
  },
  {
    label: 'Technical foundation',
    values:
      'JavaScript, TypeScript, Python, SQL, React, Next.js, Node.js, REST APIs, relational databases',
  },
  {
    label: 'Cloud & operations',
    values:
      'AWS, Docker, Kubernetes, Cloudflare, GitHub Actions, authentication, authorization, observability',
  },
  {
    label: 'Communication & enablement',
    values:
      'Stakeholder presentations, product demonstrations, technical writing, process documentation, staff training',
  },
  {
    label: 'Credentials',
    values:
      'AWS Cloud Practitioner, Kong Microservices, Atlassian Agile Project Management, PagerDuty DevOps',
  },
];
