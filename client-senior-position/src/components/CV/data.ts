
export const cvText = {
  header: {
    name: "Hakob Hakobyan",
    title: "Senior Full Stack Engineer (React · Node.js · Cloud)",
    location: "Yerevan, Armenia",
    phone: "+374 93 102 122",
    email: "devhakob@gmail.com",
    linkedin: "linkedin.com/in/hakob-yan",
    github: "github.com/hakob-yan",
  },
  summary: {
    heading: "Summary",
    content:
      "Senior Engineer with 5+ years building high-throughput web apps using TypeScript, React (Next.js), and Node.js. Experienced in leading teams to deliver crypto payment gateways and real-time data platforms. Skilled in migrating monoliths to scalable cloud systems. Focused on high engineering standards, mentoring, and clean, maintainable code that balances technical debt with business needs.",
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
        "Led development of a production-ready crypto exchange (Next.js, TypeScript) for 50,000+ users.",
        "Architected scalable SSR frontend with lazy loading, cutting page load time by 45% and boosting SEO by 30%.",
        "Implemented real-time trading via WebSockets (<200ms latency) and expanded to 7 languages, boosting adoption 25%",
        "Established testing standards (Jest, RTL) with 90%+ coverage and resolved performance bottlenecks for smoother UX.",
        "Mentored 4 engineers and coordinated cross-functional teams, improving deployment efficiency by 20%.",
      ],
    },
    {
      title: "Senior Full Stack Engineer",
      company: "BigBI",
      period: "Jan 2024 – Dec 2025",
      location: "Remote · Israel",
      responsibilities: [
        "Led architecture and system design decisions for a Node.js backend handling authentication, user management, and core services within a scalable microservices architecture.",
        "Designed database indexing and Redis-based caching strategies to optimize query performance and reduce database load.",
        "Implemented API rate limiting, and security best practices (OWASP) to ensure reliable and secure data contracts.",
        "Designed event-driven workflows with RabbitMQ, enhancing system reliability via distributed architecture.",
        "Containerized services with Docker and managed Jenkins CI/CD pipelines for automated builds and deployments.",
      ],
    },

    {
      title: "Full Stack Developer",
      company: "Cretrix",
      period: "Aug 2022 – Sep 2023",
      location: "Armenia",

      responsibilities: [
        "Engineered 20+ dynamic, reusable data visualization components (D3.js), refactored legacy chart architecture, and improved export performance by 35%.",
        "Enhanced authentication flows with JWT and 2FA, integrated Stripe subscriptions, and implemented secure REST APIs, improving user security and system reliability.",
        "Developed full-stack features across React frontend and Node.js backend, added middleware CSV validation, automated workflows with AWS, and containerized the app with Docker, reducing deployment errors by 40%.",
        "Integrated analytics (Intercom custom events), led access control improvements, and established maintainable endpoint tests, boosting operational efficiency and code reliability.",
      ],
    },
    {
      title: "Frontend Developer",
      company: "NWSLAB",
      period: "Feb 2020 – Aug 2022",
      location: "Armenia",

      responsibilities: [
        "Built scalable React frontends, migrating legacy class components to functional hooks with Redux and MobX.",
        "Created reusable component libraries and custom hooks following DRY principles to support team development.",
        "Streamlined API usage and state management, cutting redundant requests and boosting app responsiveness.",
        "Wrote unit tests for React components and maintained database interactions (MongoDB, MySQL) to ensure code stability.",
      ],
    },
  ],
  skills: {
    heading: "Technical Skills",
    frontend:
      "JavaScript (ES6+), TypeScript, React, Next.js, Redux Toolkit, MobX, GraphQL, Tailwind CSS, Material-UI, Styled Components, D3.js, Micro Frontends",
    backend:
      "Node.js, Express, REST APIs, WebSockets, RabbitMQ, Microservices, Event-Driven Architecture, Serverless (AWS Lambda), Python, Authentication & Authorization (JWT, 2FA), Performance Optimization, Security (OWASP), Load Balancing, Horizontal Scaling, Design Patterns, SOLID Principles",
    databases:
      "PostgreSQL, MongoDB, MySQL, Redis, Indexing, Query Optimization, Caching, Data Validation",
    testing:
      "Jest, React Testing Library, Cypress, Playwright, Test Coverage & Quality Standards",
    devops:
      "Docker, AWS (Lambda, S3), CI/CD, Git, Containerization, Monitoring & Deployment Automation",
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
