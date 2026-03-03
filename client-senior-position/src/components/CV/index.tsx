import React from "react";
import type { IJob } from "./types";
import { cvText } from "./positions";

const JobItem: React.FC<{ job: IJob }> = ({ job }) => (
  <div>
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
      {job.responsibilities.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
);

// --- Main CV component ---
const CV: React.FC = () => {
  return (
    <div className="text-gray-900 px-4 text-sm leading-snug">
      <div className="w-full p-5 space-y-1">
        {/* HEADER */}
        <header>
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
          <h2 className="text-xl font-bold">{cvText.summary.heading}</h2>
          <p className="text-gray-700 leading-snug">{cvText.summary.content}</p>
        </section>

        {/* EXPERIENCE */}
        <section>
          <h2 className="text-xl font-bold">{cvText.experience.heading}</h2>
          {cvText.jobs.map((job, idx) => (
            <JobItem key={idx} job={job} />
          ))}
        </section>

        {/* SKILLS */}
        <section>
          <h2 className="text-xl font-bold text-gray-800">
            {cvText.skills.heading}
          </h2>
          <p className="text-gray-700">
            <strong>Frontend:</strong> {cvText.skills.frontend} <br />
            <strong>Backend:</strong> {cvText.skills.backend} <br />
            <strong>Databases:</strong> {cvText.skills.databases} <br />
            <strong>Testing:</strong> {cvText.skills.testing} <br />
            <strong>DevOps & Tools:</strong> {cvText.skills.devops}
          </p>
        </section>

        {/* EDUCATION */}
        <section>
          <h2 className="text-xl font-bold">{cvText.education.heading}</h2>
          <p className="text-gray-700">{cvText.education.content}</p>
        </section>

        {/* LANGUAGES */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800">
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
