import React from "react";
import "./Toggle.scss";

const Toggle = ({ list, active }) => {
  return (
    <div className={"treq-toggle"}>
      {list.map((item, index) => (
        <div className={0 === index && "active"} key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default Toggle;
