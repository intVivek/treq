import "./IndianAccountCard.scss";
import React from "react";

const IndianAccountCard = ({ bankName, accountNo = "" }) => {
  return (
    <div className="IndianAccountCard">
      <div className="body">
        <div className="flagContainer">
          <div className="flag"></div>
          <div className="label">{bankName}</div>
        </div>
        <div className="title">{`**** **** **** ${accountNo
          .toString()
          ?.substr(-4)}`}</div>
      </div>
    </div>
  );
};

export default IndianAccountCard;
