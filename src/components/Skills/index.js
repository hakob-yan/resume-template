import React from "react";
import ListItem from "../ListItem"
import "./styles.scss";
const basicScillsArr = []||[
  "HTML5",
  "CSS3",
  "JavaScript(ES6+)",
  "TypeScript",
  "React",
  "Redux(Thunk)",
  "MobX",
  "Next.js",
  "Apollo GraphQL"
];
const librariesArr = [] ||  [
  "Sass/SCSS",
  "Tailwind CSS",
  "Styled Components",
  "Material UI",
  "Bootstrap 5",
];
const toolssArr =[] || ["Ajax", "RESTful APIs", "OOP", "Git", "Docker", "Webpack", "Babel"];

function Skills() {
  return (
    <div className="Skills section">
      <p className="section-title">Skills</p>
      <div className="topic skills_section">
        <div className="first-part-skills">
          <div className="topic-desc">
            {basicScillsArr.map((skill) => (
              <ListItem skill desc={skill} />
            ))}
          </div>
        </div>
        <div className="second-part-skills">
          <div className="topic-desc">
            {librariesArr.map((skill) => (
              <ListItem skill desc={skill} />
            ))}
          </div>
        </div>
        <div className="third-part-skills">
          <div className="topic-desc">
            {toolssArr.map((skill) => (
              <ListItem skill desc={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
