import React, { useState } from "react";
import "./Header.scss";
import Avatar from "../Avatar/Avatar";
import Toggle from "../Toggle/Toggle";

const toggleListItems = {
  DashBoard: 0,
  Accounts: 1,
  Payments: 2,
  "Post-Export Documents": 3,
};

const Header = () => {
  const [activeToggle, setActiveToggle] = useState(toggleListItems.DashBoard);

  return (
    <div className="treq-header">
      <div className="topSection">
        <label>Welcome back Mr. Rahul</label>
        <Avatar />
      </div>
      <Toggle
        active={activeToggle}
        onClick={setActiveToggle}
        list={Object.keys(toggleListItems)}
      />
    </div>
  );
};

export default Header;
