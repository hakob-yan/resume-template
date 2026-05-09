import React from "react";
import type { IJob, Role } from "./types";
import { cvText } from "./positions/seniorFrontEnd";
// --- Job Item Component ---
const JobItem: React.FC<{ job: IJob; targetRole: Role }> = ({
  job,
  targetRole,
}) => {
  // Filter responsibilities based on the requested role
  const filteredResponsibilities = job.responsibilities.filter(
    (item) => targetRole === "all" || item.roles.includes(targetRole),
  );

  // Do not render the job block if all responsibilities are filtered out
  if (filteredResponsibilities.length === 0) return null;

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center">
        <h3 className="text-base font-semibold">
          {job.title} <span className="font-bold">— {job.company}</span>
        </h3>
        <span className="text-sm font-bold">
          {job.period}
          {job.location ? ` · ${job.location}` : ""}
        </span>
      </div>
      <ul className="list-disc pl-5 space-y-0.5 text-gray-700">
        {filteredResponsibilities.map((item, idx) => (
          <li key={idx}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

// --- Main CV Component ---
const CV: React.FC<{ targetRole?: Role }> = ({ targetRole = "frontend" }) => {
  // Filter skill categories based on the requested role
  const filteredSkills = cvText.skills.categories.filter(
    (skill) => targetRole === "all" || skill.roles.includes(targetRole),
  );

  return (
    <div className="text-gray-900 px-4 text-sm leading-snug">
      <div className="w-full p-5 space-y-4">
        {/* HEADER */}
        <header className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">
            {cvText.header.name}
          </h1>
          <p className="text-lg font-semibold text-gray-700">
            {cvText.header.title}
          </p>
          <div className="flex flex-wrap gap-x-1.5 gap-y-1 text-xs text-gray-600 items-center">
            <span>{cvText.header.location}</span>
            <span>•</span>
            <a href={`tel:${cvText.header.phone}`} className="hover:underline">
              {cvText.header.phone}
            </a>
            <span>•</span>
            <a
              href={`mailto:${cvText.header.email}`}
              className="hover:underline"
            >
              {cvText.header.email}
            </a>
            <span>•</span>
            <a
              href={`https://${cvText.header.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {cvText.header.linkedin}
            </a>
            <span>•</span>
            <a
              href={`https://${cvText.header.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {cvText.header.github}
            </a>
          </div>
        </header>

        {/* SUMMARY */}
        <section>
          <h2 className="text-xl font-bold mb-1">{cvText.summary.heading}</h2>
          <p className="text-gray-700 leading-snug">{cvText.summary.content}</p>
        </section>

        {/* EXPERIENCE */}
        <section>
          <h2 className="text-xl font-bold mb-2">
            {cvText.experience.heading}
          </h2>
          {cvText.jobs.map((job, idx) => (
            <JobItem key={idx} job={job} targetRole={targetRole} />
          ))}
        </section>

        {/* SKILLS */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            {cvText.skills.heading}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {filteredSkills.map((skill, idx) => (
              <React.Fragment key={idx}>
                <strong>{skill.label}:</strong> {skill.items} <br />
              </React.Fragment>
            ))}
          </p>
        </section>

        {/* EDUCATION */}
        <section>
          <h2 className="text-xl font-bold mb-1">{cvText.education.heading}</h2>
          <p className="text-gray-700">{cvText.education.content}</p>
        </section>

        {/* LANGUAGES */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-1">
            {cvText.languages.heading}
          </h2>
          <p className="flex">
            {cvText.languages.content.map((lang, idx) => (
              <span
                key={idx}
                className={`font-medium${idx > 0 ? " ml-2" : ""}`}
              >
                {lang.lang}:&#160;{lang.level}
                {idx < cvText.languages.content.length - 1 ? "," : ""}
              </span>
            ))}
          </p>
        </section>
      </div>
    </div>
  );
};

export default CV;
