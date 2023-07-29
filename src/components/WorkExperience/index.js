import React from "react";
import "./styles.scss";
const jobsArr = [
  {
    startDate: "Mar 2016",
    endDate: "Mar 2018",
    position: "Front End Developer",
    companyName: "Cretrix",
    location: "Yerevan,Armenia",
    aboutCompany: "Yerevan,Armenia",
    responsibilities: "I have Done",
    usedTechnologies: "Redux",
  },
  {
    startDate: "Mar 2016",
    endDate: "Mar 2018",
    position: "Front End Developer",
    companyName: "Cretrix",
    location: "Yerevan,Armenia",
    aboutCompany: "Yerevan,Armenia",
    responsibilities: "I have Done",
    usedTechnologies: "Redux",
  },
];

function WorkExperience() {
  return (
    <div className="WorkExperience section">
      <p className="section-title">Work Experience</p>
      <div className="topic section-seperated ">
        {jobsArr.map((job) => {
          return (
            <>
              <div className="job-left-side">
                <p className="duration">{job.startDate + job.endDate}</p>
                <p className="position">{job.position}</p>
              </div>
              <div className="job-right-side">
                <p className="job-title">{job.companyName + job.location}</p>
                <p className="about-company">{job.aboutCompany}</p>
                <p className="job-duties">{job.responsibilities}</p>
                <p className="job-tech-stack">{job.usedTechnologies}</p>

              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default WorkExperience;
