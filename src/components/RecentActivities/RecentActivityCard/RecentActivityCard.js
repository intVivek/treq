import "./RecentActivityCard.scss";
import React from "react";
import dateFormat, { masks } from "dateformat";

const RecentActivityCard = ({ message, title, createdAt, icon }) => {
  masks.hammerTime = "dddd";
  return (
    <div className="recentActivity">
      <div className="statusIcon">{icon}</div>
      <div className="body">
        <div className="title">{title}</div>
        <div className="bottom">
          <div className="message">{message}</div>
          <div className="createdAt">{dateFormat(createdAt, "hammerTime")}</div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivityCard;
