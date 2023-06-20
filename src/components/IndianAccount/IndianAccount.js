import React, { useEffect, useState } from "react";
import AccountsWrapper from "../AccountsWrapper/AccountsWrapper";
import IndianAccountCard from "./IndianAccountCard/IndianAccountCard";

const IndianAccount = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://mocki.io/v1/dbb4e707-b906-4972-9c7f-5b8bae9cb66d").then(
      (res) => {
        res.json().then((data) => {
          console.log(data);
          setData(data);
        });
      }
    );
  }, []);
  return (
    <AccountsWrapper label={"Indian Accounts"}>
      {data &&
        data?.map((item, index) => (
          <IndianAccountCard
            key={index}
            bankName={item.bank_name}
            accountNo={item.account_number}
          />
        ))}
    </AccountsWrapper>
  );
};

export default IndianAccount;
