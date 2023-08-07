import React from "react";
import "./styles.scss";
const basicScillsArr = [
  "HTML5",
  "CSS3",
  "JavaScript(ES6+)",
  "TypeScript",
  "React(hooks)",
  "Redux(Thunk)",
  "Next.js",
  "MobX",
  "RESTful APIs",
  "GraphQL",
  "D3.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "Redis",
  "Template Engines",
  "WebSockets/Socket.IO/WS.js",
  "MySQL",
  "Sequelize",
  "jQuery",
  "Stripe",
  "Intercom",
  "Docker",
  "Amazon S3"
  
];
const librariesArr = [
  "Sass/SCSS",
  "Tailwind CSS",
  "Styled Components",
  "Material UI",
  "Bootstrap 5",
];
const toolssArr = [
  // "Ajax",
  // "OOP",
  // "Git",
  // "Docker",
  // "Webpack",
  // "Babel",
];

const allSkills=[...basicScillsArr,...librariesArr,...toolssArr];

function Skills() {
  return (
    <div className="Skills section">
      <p className="section-title">Skills</p>
      <div className="topic skills_section">
        <div className="first-part-skills">
          {allSkills.map((skill) => (
            <p key={skill} className="skill-item"> {skill}</p>
          ))}
        </div>
        {/* <div className="second-part-skills">
          {librariesArr.map((skill) => (
            <p className="skill-item"> {skill}</p>
          ))}
        </div>
        <div className="third-part-skills">
          {toolssArr.map((skill) => (
            <p className="skill-item"> {skill}</p>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default Skills;
