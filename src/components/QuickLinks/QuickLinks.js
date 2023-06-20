import QuickLinkCard from "./QuickLinkCard/QuickLinkCard";
import "./QuickLinks.scss";
import React from "react";
import { ReactComponent as PouchIcon } from "../assets/icons/PouchIcon.svg";
import { ReactComponent as PaymentIcon } from "../assets/icons/PaymentIcon.svg";
import { ReactComponent as CreditCardIcon } from "../assets/icons/CreditCardIcon.svg";
import Heading from "../Heading/Heading";

const quickLinksList = [
  { name: "Add Player", icon: <PouchIcon />, color: "#00A25B" },
  { name: "Request Payment", icon: <PaymentIcon />, color: "#9075E1" },
  { name: "Download FIRA", icon: <CreditCardIcon />, color: "#E06A43" },
];

const QuickLinks = () => {
  return (
    <div className="quickLinksContainer">
      <Heading label="Quick Links" />
      <div className={"window"}>
        {quickLinksList.map((quickLink, index) => (
          <QuickLinkCard
            key={index}
            name={quickLink.name}
            icon={quickLink.icon}
            color={quickLink.color}
          />
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
