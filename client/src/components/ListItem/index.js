import React from "react";
import "./styles.scss"

const ListItem = ({ desc }) => {
  return (
    <div className="list-item">
      <p className="list-dot">&#8226; </p>
      <p >{desc}</p>
    </div>
  );
};

export default ListItem;
