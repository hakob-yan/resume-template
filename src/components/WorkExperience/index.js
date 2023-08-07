import React from "react";
import "./styles.scss";
import ListItem from "../ListItem";

const jobsArr = [
  {
    startDate: "Aug 2022",
    endDate: "Present",
    position: "Full-Stack Developer",
    companyName: "Cretrix LLC",
    location: "Yerevan, Armenia",
    aboutCompany:
      "Cretrix has been doing web development, promotion and web support since 2009.Cretrix offers Software Architecture and Web/Mobile Application development services.",
    responsibilities: [
      "Built 2FA authentication to improve user's security level.",
      "Created and handled as private RESTful APIs as public.",
      "Created more than 20 type of charts for data visualization by D3.js.",
      "Improved chart downloading by configuring Puppeteer.",
      "Integrated Stripe payment system into applications. Added and handledsubscription plans and created products for users",
      "Added Intercom into web applications .Created new Intercom events for stats and higher admin control also for user convenience for familiarizing features of applications.",
      "Developed new Automation logic with Node.js and AWS services.",
      "Tested endpoints with expect testing library."
    ],
    usedTechnologies: "Redux",
  },
  {
    startDate: "Feb 2022",
    endDate: "Aug 2022",
    position: "React Web Developer",
    companyName: "NWSLab",
    location: "Yerevan, Armenia",
    aboutCompany:
      "NWSLab has been working since 2015 and during this period they have implemented many projects of various orientations",
    responsibilities: [
      "Worked with MongoDB by driver Mongoose and MySQL by Sequelize.",
      "Built custom hooks for applications to avoid repetitive code snippets (followed D.R.Y principle)",
      "Migrated most of class components into functional ones to avoid props drilling and to have ability of using hooks.",
      "Wrote unit tests ,tested React Components by React Testing Library.",
      "Created new reusable React components , handled and maintained."
     
    ],
    usedTechnologies: "Redux",
  },
  {
    startDate: "2020",
    endDate: "Mar 2022",
    position: "Frontend Web Developer",
    companyName: "Freelancer",
    location: "Yerevan, Armenia",
    aboutCompany:
      "",
    responsibilities: [
      "Redux was inseparable part of my development.",
      "Built HTML layouts with its enhanced animation system to bring best view.",
      "Provided responsive design of Web Applications by creating web version of Application.",
      "Enhanced component styling by the help of Bootstrap.",
      "Created new reusable components , which helped me to speed up our developing and maintaining."
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
            <React.Fragment key={job.companyName}>
              <div className="topic__left-side">
                <p className="topic-title">
                  {job.startDate + " - " + job.endDate}
                </p>
                <p className="topic-desc topic-title">{job.position}</p>
              </div>
              <div className="topic__right-side">
                <p className="topic-title">{job.companyName +'\t'+ job.location}</p>
                <p className="topic-desc">{job.aboutCompany}</p>
                <ul className="topic-desc">
                  {job.responsibilities.map((el,i) => (
                    <ListItem key={i} desc={el} />
                  ))}
                </ul>
                <p className="topic-desc">{job.usedTechnologies}</p>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default WorkExperience;
