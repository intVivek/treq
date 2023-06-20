import React from "react";
import "./Toggle.scss";

const Toggle = ({ list, active, onClick }) => {
  return (
    <div className={"treq-toggle"}>
      {list.map((item, index) => (
        <div
          onClick={() => onClick(index)}
          className={active === index && "active"}
          key={index}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Toggle;
