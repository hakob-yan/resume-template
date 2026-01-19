import React from "react";
import "./styles.scss";
import ListItem from "../ListItem";

const jobsArr = [
  {
    startDate: "Aug 2023",
    endDate: "Present",
    position: "Senior Frontend Developer",
    companyName: "Swaps.app",
    location: "Estonia, Remote",
    aboutCompany:
      "Swaps.app is a cryptocurrency payment gateway for individuals and businesses.",
    responsibilities: [
      "Designed the architecture and developed the entire application from scratch using Next.js.",
      "Optimized and improved SEO by following Google best practices.",
      "Implemented internationalization by adding support for 7 languages.",
      "Added support for both light and dark modes.",
      "Conducted unit and integration tests leveraging Jest and React Testing Library (RTL).",
    ],
    usedTechnologies: [
      "NextJS",
      "TypeScript",
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "WebSockets",
      "Jest + React Testing Library (RTL)"
    ],
  },
  {
    startDate: "Jan 2024",
    endDate: "Dec 2025",
    position: "Full-Stack Developer",
    companyName: "BigBI Analytics",
    location: "Israel, Remote (Contract)",
    aboutCompany:
      "BigBI Analytics is a data analytics platform for businesses.",
    responsibilities: [
      "Added new data pipelines for efficient processing of large datasets.",
      "Created JSON Schemas to ensure data validation and integrity.",
      "Integrated and configured backend technologies such as Git, Docker, and AWS services.",
      "Worked with CI/CD pipelines to automate deployment processes.",
    ],
    usedTechnologies: [
      "Node.js",
      "PostgreSQL",
      "NextJS",
      "TypeScript",
      "React",
      "Redux Toolkit",
      "Styled Components",
      "CI/CD pipelines",
    ],
  },
  {
    startDate: "Aug 2022",
    endDate: "Sep 2023",
    position: "Full-Stack Developer",
    companyName: "Cretrix LLC",
    location: "Yerevan, Armenia",
    aboutCompany:
      "Cretrix has been providing web development, promotion, and support services since 2009.",
    responsibilities: [
      "Implemented 2FA authentication to improve application security.",
      "Created more than 20 types of charts for data visualization using D3.js.",
      "Improved chart exporting by configuring Puppeteer.",
      "Integrated the Stripe payment system into applications.",
      "Integrated Intercom into web applications and created custom events for analytics and admin control.",
      "Developed automation logic using Node.js and AWS services.",
      "Tested API endpoints using the Expect testing library.",
    ],
    usedTechnologies: [
      "React",
      "Redux",
      "Tailwind CSS",
      "D3.js",
      "Node.js",
      "MySQL",
      "WebSockets",
      "Docker",
      "Amazon S3",
      "Stripe",
      "Intercom",
    ],
  },
  {
    startDate: "Feb 2020",
    endDate: "Aug 2022",
    position: "Frontend Developer",
    companyName: "NWSLab",
    location: "Yerevan, Armenia",
    aboutCompany:
      "NWSLab has been operating since 2015 and has delivered numerous projects across various domains.",
    responsibilities: [
      "Worked with MongoDB using Mongoose and MySQL using Sequelize.",
      "Built custom React hooks to eliminate repetitive code by following the DRY principle.",
      "Migrated class components to functional components to leverage React hooks and reduce prop drilling.",
      "Wrote unit tests and tested React components using React Testing Library.",
      "Created, maintained, and managed reusable React components.",
    ],
    usedTechnologies: [
      "TypeScript",
      "React",
      "Redux",
      "GraphQL",
      "Material UI",
      "Styled Components",
      "MobX",
      "Bootstrap 5",
      "Node.js",
      "MongoDB",
    ],
  },
];

function WorkExperience() {
  return (
    <div className="WorkExperience section">
      <p className="section-title">Work Experience</p>
      <div className="topic section-seperated ">
        {jobsArr.map((job) => {
          return (
            <React.Fragment key={job.companyName}>
              <div className="topic__left-side">
                <p className="topic-title">
                  {job.startDate + " - " + job.endDate}
                </p>
                <p className="topic-desc topic-title">{job.position}</p>
              </div>
              <div className="topic__right-side">
                <p className="topic-title">
                  {job.companyName + "\t" + job.location}
                </p>
                <p className="topic-desc">{job.aboutCompany}</p>
                <ul className="topic-desc">
                  {job.responsibilities.map((el, i) => (
                    <ListItem key={i} desc={el} />
                  ))}
                </ul>
                <p className="used-technologies">
                  {job.usedTechnologies.map((tech, i) => {
                    return <span key={tech}>{tech + ",\t"}</span>;
                  })}
                </p>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default WorkExperience;
