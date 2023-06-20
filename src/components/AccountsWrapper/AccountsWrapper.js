import Heading from "../Heading/Heading";
import "./AccountsWrapper.scss";
import React from "react";

const AccountsWrapper = ({ label, children }) => {
  return (
    <div className="accountContainer">
      <Heading label={label} />
      <div className="window">{children}</div>
    </div>
  );
};

export default AccountsWrapper;
