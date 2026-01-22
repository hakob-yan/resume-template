import "./styles.scss";
const basicSkillsArr = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "TypeScript",

  "React (Hooks)",
  "Redux Toolkit (RTK Query)",

  "Next.js",

  "REST APIs",
  "GraphQL",

  "Node.js",
  "Express.js",

  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "Mongoose",
  "Sequelize",
  "Prisma",

  "WebSockets (Socket.IO)",

  "Docker",
  "Amazon S3",
];

const librariesArr = [
  "Sass / SCSS",
  "Tailwind CSS",
  "Material UI",
  "Styled Components",
];


const allSkills = [...basicSkillsArr, ...librariesArr];

function Skills() {
  return (
    <div className="Skills section">
      <p className="section-title">Skills</p>
      <div className="topic skills_section">
        <div className="first-part-skills">
          {allSkills.map((skill) => (
            <p key={skill} className="skill-item">
              {" "}
              {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
