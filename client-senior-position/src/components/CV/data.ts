// Job type
export type Job = {
  title: string;
  company: string;
  period: string;
  location?: string;
  responsibilities: string[];
};

export const jobs: Job[] = [
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
];
