import React from "react";

const CV: React.FC = () => {
  return (
    <div className="text-gray-900 py-12 px-6 w-full h-full">
      <div className="w-full  p-10 space-y-10">
        {/* HEADER */}
        <header className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">Hakob Hakobyan</h1>
          <p className="text-xl font-semibold text-gray-700">
            Senior Full Stack Engineer (React · TypeScript · Node.js)
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span>Yerevan, Armenia</span>
            <span>+374 93 102 122</span>
            <span>devhakob@gmail.com</span>
            <span>linkedin.com/in/hakob-yan</span>
            <span>github.com/hakob-yan</span>
          </div>
        </header>

        {/* SUMMARY */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Summary</h2>
          <p className="leading-relaxed text-gray-700">
            Senior Full Stack Engineer with 6+ years of experience building
            scalable, high-performance web applications from scratch.
            Specialized in React, Next.js, TypeScript, and Node.js. Strong
            ownership mindset — from architecture design to production
            deployment. Delivered crypto payment platforms, BI systems, and
            real-time data applications with focus on performance, SEO,
            internationalization, and system reliability.
          </p>
        </section>

        {/* EXPERIENCE */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>

          {/* Swaps */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">
                Senior Frontend Engineer — Swaps.app
              </h3>
              <span className="text-sm text-gray-500">
                Aug 2023 – Present · Remote
              </span>
            </div>

            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
              <li>
                Architected and built the entire Next.js application from
                scratch, establishing scalable frontend structure and modular
                architecture.
              </li>
              <li>
                Improved SEO performance by implementing structured metadata,
                server-side rendering, and Google best practices.
              </li>
              <li>
                Implemented internationalization (7 languages) and full theme
                system (light/dark mode), increasing global accessibility.
              </li>
              <li>
                Developed real-time features using WebSockets (Socket.IO).
              </li>
              <li>
                Introduced unit and integration testing using Jest and React
                Testing Library.
              </li>
            </ul>

            <p className="mt-3 text-sm text-gray-600">
              Tech: Next.js, TypeScript, React, Redux Toolkit, Tailwind CSS,
              WebSockets, Jest
            </p>
          </div>

          {/* BigBI */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">
                Full Stack Engineer — BigBI Analytics
              </h3>
              <span className="text-sm text-gray-500">
                Jan 2024 – Dec 2025 · Contract
              </span>
            </div>

            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
              <li>
                Designed and implemented scalable data pipelines for processing
                large datasets.
              </li>
              <li>
                Created JSON Schema validation layers improving data integrity
                and reducing runtime errors.
              </li>
              <li>
                Automated CI/CD pipelines and Dockerized services to streamline
                deployment.
              </li>
              <li>
                Integrated AWS services and optimized PostgreSQL queries for
                improved performance.
              </li>
            </ul>

            <p className="mt-3 text-sm text-gray-600">
              Tech: Node.js, PostgreSQL, React, Next.js, Docker, AWS, CI/CD
            </p>
          </div>

          {/* Cretrix */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">
                Full Stack Developer — Cretrix LLC
              </h3>
              <span className="text-sm text-gray-500">
                Aug 2022 – Sep 2023 · Yerevan
              </span>
            </div>

            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
              <li>
                Implemented 2FA authentication increasing platform security.
              </li>
              <li>
                Built 20+ advanced data visualization components using D3.js.
              </li>
              <li>Integrated Stripe payments and Intercom analytics system.</li>
              <li>
                Developed backend automation services using Node.js and AWS.
              </li>
            </ul>

            <p className="mt-3 text-sm text-gray-600">
              Tech: React, Tailwind, D3.js, Node.js, MySQL, Docker, AWS
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>

          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <div>
              <h4 className="font-semibold">Frontend</h4>
              <p>React, Next.js, TypeScript, Redux Toolkit, Tailwind CSS</p>
            </div>

            <div>
              <h4 className="font-semibold">Backend</h4>
              <p>Node.js, Express, REST APIs, WebSockets</p>
            </div>

            <div>
              <h4 className="font-semibold">Databases</h4>
              <p>PostgreSQL, MongoDB, MySQL, Redis</p>
            </div>

            <div>
              <h4 className="font-semibold">DevOps & Tools</h4>
              <p>Docker, AWS, CI/CD, Git</p>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <p className="text-gray-700">
            National University of Armenia — Telecommunications and Engineering
            (2017 – 2023)
          </p>
        </section>
      </div>
    </div>
  );
};

export default CV;
