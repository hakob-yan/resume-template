import React from "react";
import "./styles.scss";
const languagesArr = [
  {
    language: "English",
    level: 4,
    desc: "Proficient",
  },
  {
    language: "Russian",
    level: 4,
    desc: "Proficient",
  },
  {
    language: "Armenian",
    level: 5,
    desc: "Native",
  },
];
const LngLevel = ({ level }) => {
  return (
    <div className="lang-level">
      {[0, 0, 0, 0, 0].map((el, i) => {
        return <div className={`level ${i<level  ? "active" : ""}`} key={i}></div>;
      })}
    </div>
  );
};

const LangElem = ({ lang }) => {
  return (
    <div className="lang-item">
      <p>{lang.language}</p>
      <p>{lang.desc}</p>
      <LngLevel level={lang.level} />
    </div>
  );
};

function Languages() {
  return (
    <div className="Languages section">
      <p className="section-title">Languages</p>
      <div className="topic language-secion">
        {languagesArr.map((lang,i) => {
          return <LangElem key={i} lang={lang} />;
        })}
      </div>
    </div>
  );
}

export default Languages;
