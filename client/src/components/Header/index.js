import React from "react";
import LinkedIn from "../../assets/icons/linkedin.svg";
import Gmail from "../../assets/icons/gmail.svg";
import GitHub from "../../assets/icons/github.svg";
import Phone from "../../assets/icons/phone.svg";
import Location from "../../assets/icons/location.svg";

import "./styles.scss";

const contactsArr = [
  { src: Phone, value: "+374-93-102-122", link: "tel:+374-93-102-122" },
  {
    src: Location,
    value: "Yerevan, Armenia",
    link: "https://goo.gl/maps/F5TodZ4nsdAPjRNZ9",
  },
  {
    src: Gmail,
    value: "devhakob@gmail.com",
    link: "mailto:devhakob@gmail.com",
  },
  {
    src: LinkedIn,
    value: "linkedin.com/in/hakob-yan",
    link: "https://www.linkedin.com/in/hakob-yan",
  },
  {
    src: GitHub,
    value: "github.com/hakob-yan",
    link: "https://github.com/hakob-yan",
  },
];
const Contacts = () => {
  return (
    <div className="contacts">
      {contactsArr.map((el) => {
        return (
          <div key={el.link} className="contact">
            <img src={el.src} alt="logo" className="logo" />
            <a
              className="social-media-name"
              href={el.link}
              target="_blank"
              rel="noreferrer"
            >
              {el.value}
            </a>
          </div>
        );
      })}
    </div>
  );
};

function Header() {
  return (
    <div className="Header">
      <div className="persoal-info">
        <h1 className="full-name">Hakob Hakobyan</h1>
        <h2 className="profession">Senior Frontend Engineer</h2>
      </div>
      <Contacts />
    </div>
  );
}

export default Header;
