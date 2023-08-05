import React from "react";
import "./styles.scss"

const ListItem = ({ desc,skill }) => {
  console.log(11,skill);
  return (
    <div className="list-item">
      <p className="list-dot">&#8226; </p>
      <p className={skill?'list-text':''}>{desc}</p>
    </div>
  );
};

export default ListItem;
