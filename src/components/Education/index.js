import React from "react";
import "./styles.scss";

const jobsArr = [
  {
    startDate: "Sep 2017",
    endDate: "Jul 2023",
    specialization: "Telecommunications and Engineering",
    universityName: "National University of Armenia",
    location: "",
    responsibilities: [
      "Explored analytic mathematics and physics in deeper manner also some programming languages .",
      "Investigated and acquired facility of transmitting signals on hardware and software levels.",
      "Designed and implemented network architecture for solar stations.",
    ],
  },
];

function Education() {
  return (
    <div className="Education section">
      <p className="section-title">Education</p>
      <div className="topic section-seperated ">
        {jobsArr.map((job,i) => {
          return (
            <React.Fragment key={i}>
              <div className="topic__left-side">
                <p className="topic-title">
                  {job.startDate + "-" + job.endDate}
                </p>
                <p className="topic-desc topic-title">{job.specialization}</p>
              </div>
              <div className="topic__right-side">
                <p className="topic-title">
                  {job.universityName + job.location}
                </p>
                <ul className="topic-desc">
                  {job.responsibilities.map((el,i) => (
                    <li key={i}>{el}</li>
                  ))}
                </ul>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Education;
