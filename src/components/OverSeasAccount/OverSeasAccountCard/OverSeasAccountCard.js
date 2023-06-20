import React from "react";
import "./OverSeasAccountCard.scss";

const currencyToCountry = {
  usd: "US",
  gbp: "GB",
};

const OverSeasAccountCard = ({ currency, label }) => {
  return (
    <div className="overSeasAccountCard">
      <div className="body">
        <div className="title">{currency}</div>
        <div className="flagContainer">
          <div className="flag">
            <img
              alt="country"
              src={`https://flagsapi.com/${currencyToCountry[currency]}/flat/64.png`}
            />
          </div>
          <div className="label">{label}</div>
        </div>
      </div>
    </div>
  );
};

export default OverSeasAccountCard;
