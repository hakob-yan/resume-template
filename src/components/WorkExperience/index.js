import React from "react";
import "./styles.scss";
import ListItem from "../ListItem";

const jobsArr = [
  {
    startDate: "Aug 2022",
    endDate: "Present",
    position: "Front End Developer",
    companyName: "Cretrix LLC",
    location: "Yerevan,Armenia",
    aboutCompany:
      "We have been doing web development, promotion and web support since 2009. During these years we have created dozen of 5 years of work experience.",
      responsibilities: [
        "Integrated Stripe payment system into applications. Added and handled subscription plans and created products for users.",
        "Added Intercom into web applications .Created new Intercom events for stats    and higher admin control also for user convenience for familiarizing features of    applications.",
        "Built more than 20 type of charts by D3.js and optimized performance.",
      ],
    usedTechnologies: "Redux",
  },
  {
    startDate: "Mar 2016",
    endDate: "Mar 2018",
    position: "Front End Developer",
    companyName: "Cretrix",
    location: "Yerevan,Armenia",
    aboutCompany:
      "Cretrix offers Software Architecture and Web/Mobile Application development services to increase your business and to make your projects successful.",
    responsibilities: [
      "Integrated Stripe payment system into applications. Added and handled subscription plans and created products for users.",
      "Added Intercom into web applications .Created new Intercom events for stats    and higher admin control also for user convenience for familiarizing features of    applications.",
      "Built more than 20 type of charts by D3.js and optimized performance.",
    ],
    usedTechnologies: "Redux",
  },
  {
    startDate: "Mar 2016",
    endDate: "Mar 2018",
    position: "Front End Developer",
    companyName: "Cretrix",
    location: "Yerevan,Armenia",
    aboutCompany:
      "Cretrix offers Software Architecture and Web/Mobile Application development services to increase your business and to make your projects successful.",
    responsibilities: [
      "Integrated Stripe payment system into applications. Added and handled subscription plans and created products for users.",
      "Added Intercom into web applications .Created new Intercom events for stats    and higher admin control also for user convenience for familiarizing features of    applications.",
      "Built more than 20 type of charts by D3.js and optimized performance.",
    ],
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
              <div className="topic__left-side">
                <p className="topic-title">{job.startDate +'-' +job.endDate}</p>
                <p className="topic-desc topic-title">{job.position}</p>
              </div>
              <div className="topic__right-side">
                <p className="topic-title">{job.companyName + job.location}</p>
                <p className="topic-desc">{job.aboutCompany}</p>
                <ul className="topic-desc">
                  {job.responsibilities.map((el) => (
                    <ListItem desc={el}/>
                  ))}
                </ul>
                <p className="topic-desc">{job.usedTechnologies}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default WorkExperience;
