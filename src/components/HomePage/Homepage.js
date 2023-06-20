import "./Homepage.scss";
import React from "react";
import Header from "../Header/Header";
import RecentActivities from "../RecentActivities/RecentActivities";
import OverSeasAccount from "../OverSeasAccount/OverSeasAccount";
import IndianAccount from "../IndianAccount/IndianAccount";

const Homepage = () => {
  return (
    <div className="HomePage">
      <Header />
      <div className="content">
        <RecentActivities />
        <div className="accounts">
          <OverSeasAccount />
          <IndianAccount />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
