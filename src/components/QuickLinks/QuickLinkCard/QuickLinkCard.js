import "./QuickLinkCard.scss";
import React from "react";
import { ReactComponent as Chevron } from "../../assets/icons/Chevron.svg";

const QuickLinkCard = ({ name, icon, color }) => {
  return (
    <div className="quickLinkCard">
      <div className="chip" style={{ background: color }} />
      <div
        className="iconBackground"
        style={{ background: color, opacity: 0.2 }}
      />
      <div className="icon">{icon}</div>
      <div className="name">{name}</div>
      <Chevron />
    </div>
  );
};

export default QuickLinkCard;
