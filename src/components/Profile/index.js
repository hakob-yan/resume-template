import React from "react";
import "./styles.scss";

function Profile() {
  return (
    <div className="Profile section">
      <p className="section-title">Profile</p>
      <div className="topic">
        <p className="summary">
          A Frontend Web Developer, proficient in core React concepts, such as
          components, state, props, JSX (JavaScript XML), and the Virtual DOM.
          Deep understanding of Frontend architecture and having ability to
          design and maintain it professional. Having strong knowledge of
          Typescript and understanding its core concepts.
        </p>

        <p className="summary">
          Meanwhile, having long experience with backend technologies,
          especially focused on Node.js/Expresss.js. Experience with integration
          API's, services, and developing highly structured databases.
        </p>
      </div>
    </div>
  );
}

export default Profile;
