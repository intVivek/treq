import React, { useEffect, useState } from "react";
import OverSeasAccountCard from "./OverSeasAccountCard/OverSeasAccountCard";
import AccountsWrapper from "../AccountsWrapper/AccountsWrapper";

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
    <AccountsWrapper label={"Overseas Accounts"}>
      {data &&
        data?.map((item, index) => (
          <OverSeasAccountCard
            key={index}
            currency={item.currency_key}
            label={`${item.currency_symbol} ${item.balance}`}
          />
        ))}
    </AccountsWrapper>
  );
};

export default OverSeasAccount;
