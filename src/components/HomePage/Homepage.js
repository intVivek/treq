import "./Homepage.scss";
import React from "react";
import Header from "../Header/Header";
import RecentActivities from "../RecentActivities/RecentActivities";

const Homepage = () => {
  return (
    <div className="HomePage">
      <Header />
      <RecentActivities />
    </div>
  );
};

export default Homepage;
