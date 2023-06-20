import "./OverSeasAccount.scss";
import React, { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import OverSeasAccountCard from "./OverSeasAccountCard/OverSeasAccountCard";

const OverSeasAccount = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://mocki.io/v1/d3596385-a881-4afd-8e38-5482986e0528").then(
      (res) => {
        res.json().then((data) => {
          console.log(data);
          setData(data);
        });
      }
    );
  }, []);

  return (
    <div className="accountContainer">
      <Heading label="Overseas Account" />
      <div className="OverseasContainer">
        {data &&
          data?.map((item, index) => (
            <OverSeasAccountCard
              key={index}
              currency={item.currency_key}
              label={`${item.currency_symbol} ${item.balance}`}
            />
          ))}
      </div>
    </div>
  );
};

export default OverSeasAccount;
