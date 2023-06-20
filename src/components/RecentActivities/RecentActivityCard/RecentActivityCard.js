import "./RecentActivityCard.scss";
import Avatar from "../../Avatar/Avatar";
import React from "react";

const RecentActivityCard = ({ message, title, createdAt, status }) => {
  return (
    <div className="recentActivity">
      <Avatar />
      <div className="body">
        <div className="title">{title}</div>
        <div className="bottom">
          <div className="message">{message}</div>
          <div className="createdAt">{createdAt}</div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivityCard;
