export const data = {
  header: {
    name: "Hakob Hakobyan",
    title: "Senior Frontend Engineer | React · Next.js · TypeScript",
    location: "Yerevan, Armenia",
    phone: "+374 93 102 122",
    email: "devhakob@gmail.com",
    linkedin: "linkedin.com/in/hakob-yan",
    github: "github.com/hakob-yan",
  },

  summary: {
    heading: "Summary",
    content:
      "Senior Frontend Engineer with 6+ years of experience architecting scalable, high-traffic web applications using React, Next.js, and TypeScript. Strong focus on performance, system design, and developer experience. Experienced in leading frontend architecture decisions, establishing testing standards, mentoring engineers, and delivering measurable business impact in production environments.",
  },

  experience: {
    heading: "Professional Experience",
  },

  jobs: [
    {
      title: "Lead Frontend Engineer",
      company: "Swaps.app",
      period: "Sep 2023 – Present",
      location: "Remote · Estonia",
      responsibilities: [
        "Led frontend architecture and development of a production crypto exchange serving 50,000+ users.",
        "Designed scalable SSR architecture in Next.js with modular structure and micro-frontend patterns, improving page load time by 45% and SEO by 30%.",
        "Built high-performance real-time trading interface using WebSockets (<200ms latency) with multilingual support, increasing product adoption by 25%.",
        "Established testing strategy (Jest, React Testing Library) and CI quality gates, achieving 90%+ coverage and reducing regressions.",
        "Mentored 4 frontend engineers, conducted code reviews, and aligned UI architecture across cross-functional teams.",
      ],
    },

    {
      title: "Senior Frontend Engineer",
      company: "BigBI",
      period: "Jan 2024 – Dec 2025",
      location: "Remote · Israel",
      responsibilities: [
        "Developed scalable data-intensive dashboards and internal UI platforms using React and TypeScript.",
        "Architected reusable component systems and improved state management using Redux Toolkit and MobX.",
        "Optimized rendering performance and reduced unnecessary re-renders in complex visualization flows.",
        "Collaborated closely with backend teams on API contracts and frontend architecture decisions.",
        "Implemented CI/CD pipelines for automated testing and deployment of frontend applications.",
      ],
    },

    {
      title: "Frontend Engineer",
      company: "Cretrix",
      period: "Aug 2022 – Sep 2023",
      location: "Armenia",
      responsibilities: [
        "Built 20+ dynamic React components and D3.js visualizations for analytics dashboards.",
        "Refactored legacy charting modules, improving export performance by 35%.",
        "Enhanced authentication flows (JWT, 2FA) and strengthened secure API integrations.",
        "Improved state architecture and access control logic, increasing maintainability and UX consistency.",
      ],
    },

    {
      title: "Frontend Developer",
      company: "NWSLAB",
      period: "Feb 2020 – Aug 2022",
      location: "Armenia",
      responsibilities: [
        "Developed scalable React applications and migrated legacy class components to modern hook-based architecture.",
        "Created reusable component libraries and custom hooks following clean architecture principles.",
        "Improved API efficiency and optimized state management for better responsiveness.",
        "Introduced unit and integration testing standards with Jest and React Testing Library.",
      ],
    },
  ],

  skills: {
    heading: "Technical Skills",

    frontend:
      "React, Next.js, TypeScript, JavaScript (ES6+), Redux Toolkit, MobX, GraphQL, Tailwind CSS, Material UI, Styled Components, D3.js, Storybook, Micro-Frontends, SSR, SPA Architecture, Performance Optimization, Component System Design",

    backend:
      "Node.js, REST APIs, WebSockets, Authentication (JWT, 2FA), API Design Collaboration",
    databases:
      "PostgreSQL, MongoDB, MySQL, Redis, Indexing, Query Optimization, Caching, Data Validation",
    testing:
      "Jest, React Testing Library, Cypress, Playwright, Test Strategy, CI Quality Gates",

    devops:
      "Docker, AWS (Lambda, S3), CI/CD Pipelines, Git, Deployment Automation",
  },

  education: {
    heading: "Education",
    content:
      "National University of Armenia — Telecommunications and Engineering (2017 – 2023)",
  },
  languages: {
    heading: "Languages",
    content: [
      { lang: "English", level: "C1 (Proficient)" },
      { lang: "Russian", level: "C1 (Proficient)" },
      { lang: "Armenian", level: "Native" },
    ],
  },
};
