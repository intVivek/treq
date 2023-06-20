import Heading from "../Heading/Heading";
import "./RecentActivities.scss";
import React, { useEffect, useState } from "react";
import RecentActivityCard from "./RecentActivityCard/RecentActivityCard";

const RecentActivities = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/433b83e6-d5f7-4607-85db-8c47d992e4fd").then(
      (res) => {
        res.json().then((data) => {
          console.log(data);
          setData(data);
        });
      }
    );
  }, []);

  return (
    <div className="treqRecentActivities">
      <Heading label={"Recent Activities"} />
      {data &&
        data?.map((item, index) => (
          <RecentActivityCard
            message={item.message}
            title={item.title}
            createdAt={item.created_ts}
            status={item.status}
          />
        ))}
    </div>
  );
};

export default RecentActivities;
