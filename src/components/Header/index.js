import React from "react";
import LinkedIn from "../../assets/icons/linkedin.svg";
import Gmail from "../../assets/icons/gmail.svg";
import GitHub from "../../assets/icons/github.svg";
import Phone from "../../assets/icons/phone.svg";
import Location from "../../assets/icons/location.svg";



import "./styles.scss";

const contactsArr = [
  { src: Phone, value: "+374-93-102-122" },
  { src: Location, value: "Yerevan, Armenia" },
  { src: Gmail, value: "devhakob@gmail.com" },
  { src: LinkedIn, value: "linkedin.com/in/hakob-yan" },
  { src: GitHub, value: "github.com/hakob-yan" },




  
];
const Contacts = () => {
  return (
    <div className="contacts">
      {contactsArr.map((el) => {
        return (
          <div className="contact">
            <img src={el.src} alt="logo" className="logo" />
            <a
              className="social-media-name"
              href={`https://` + el.value}
              target="_blank"
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
        <h2 className="profession">React Web Developer</h2>
      </div>
      <Contacts />
    </div>
  );
}

export default Header;
