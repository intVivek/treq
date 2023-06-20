import React from "react";
import "./Header.scss";
import Avatar from "../Avatar/Avatar";
import Toggle from "../Toggle/Toggle";

const toggleListItems = [
  "Dashboard",
  "Accounts",
  "Payments",
  "Post-Export Documents",
];

const Header = () => {
  return (
    <div className="treq-header">
      <div className="topSection">
        <label>Welcome back Mr. Rahul</label>
        <Avatar />
      </div>
      <Toggle list={toggleListItems} />
    </div>
  );
};

export default Header;
