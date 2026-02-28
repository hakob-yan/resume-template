import React from "react";
import { jobs, type Job } from "./data";

// Refactored JobItem
const JobItem: React.FC<{ job: Job }> = ({ job }) => (
  <div>
    <div className="flex justify-between items-center">
      {/* Job title and company */}
      <h3 className="text-base font-semibold">
        {job.title} <span className="font-bold">— {job.company}</span>
      </h3>

      {/* Period and location */}
      <span className="text-sm font-bold">
        {job.period}
        {job.location ? ` · ${job.location}` : ""}
      </span>
    </div>

    <ul className="list-disc pl-5 space-y-0.5 text-gray-700">
      {job.responsibilities.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
);
// Main CV component
const CV: React.FC = () => {
  return (
    <div className="text-gray-900 px-4 text-sm leading-snug">
      <div className="w-full p-5 space-y-1">
        {/* HEADER */}
        <header>
          <h1 className="text-3xl font-bold tracking-tight">Hakob Hakobyan</h1>
          <p className="text-lg font-semibold text-gray-700">
            Senior Full Stack Engineer (React · Node.js · Cloud)
          </p>
          <div className="flex flex-wrap gap-x-1.5 gap-y-1 text-xs text-gray-600 items-center">
            <span>Yerevan, Armenia</span>
            <span>•</span>
            <a href="tel:+37493102122" className="hover:underline">
              +374 93 102 122
            </a>
            <span>•</span>
            <a href="mailto:devhakob@gmail.com" className="hover:underline">
              devhakob@gmail.com
            </a>
            <span>•</span>
            <a
              href="https://www.linkedin.com/in/hakob-yan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/hakob-yan
            </a>
            <span>•</span>
            <a
              href="https://github.com/hakob-yan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/hakob-yan
            </a>
          </div>
        </header>

        {/* SUMMARY */}
        <section>
          <h2 className="text-xl font-bold">Summary</h2>
          <p className="text-gray-700 leading-snug">
            Senior Engineer with 5+ years building high-throughput web apps
            using TypeScript, React (Next.js), and Node.js. Experienced in
            leading teams to deliver crypto payment gateways and real-time data
            platforms. Skilled in migrating monoliths to scalable cloud systems.
            Focused on high engineering standards, mentoring, and clean,
            maintainable code that balances technical debt with business needs.
          </p>
        </section>

        {/* EXPERIENCE */}
        <section>
          <h2 className="text-xl font-bold">Professional Experience</h2>
          {jobs.map((job, idx) => (
            <JobItem key={idx} job={job} />
          ))}
        </section>

        {/* SKILLS */}
        <section>
          <h2 className="text-xl font-bold text-gray-800">Technical Skills</h2>
          <p className="text-gray-700">
            Frontend — React, Next.js, TypeScript, Redux Toolkit, MobX, Tailwind
            CSS, D3.js, Jest, React Testing Library;
            <br />
            Backend — Node.js, Express, REST APIs, WebSockets, JSON Schema
            validation, Python scripting;
            <br />
            Databases — PostgreSQL, MongoDB, MySQL, Redis;
            <br />
            DevOps & Tools — Docker, AWS (Lambda, S3), CI/CD (Jenkins), Git,
            Containerization, Testing & Monitoring;
            <br />
          </p>
        </section>

        {/* EDUCATION */}
        <section>
          <h2 className="text-xl font-bold">Education</h2>
          <p className="text-gray-700">
            National University of Armenia — Telecommunications and Engineering
            (2017 – 2023)
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-800">Languages</h2>
          <p className="flex">
            <span className="font-medium">English:&#160;</span> C1 (Proficient),
            <span className="font-medium ml-2">Russian:&#160;</span> C1
            (Proficient),
            <span className="font-medium ml-2">Armenian:&#160;</span> Native
          </p>
        </section>
      </div>
    </div>
  );
};

export default CV;
