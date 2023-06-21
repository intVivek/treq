import Heading from "../Heading/Heading";
import "./RecentActivities.scss";
import React, { useEffect, useState } from "react";
import RecentActivityCard from "./RecentActivityCard/RecentActivityCard";
import { ReactComponent as FileIcon } from "..//assets/icons/FileIcon.svg";
import { ReactComponent as ReceivedIcon } from "../assets/icons/ReceivedIcon.svg";

const statusIcon = {
  AccountStatus: <FileIcon />,
  "Payment Received": <ReceivedIcon />,
};

const RecentActivities = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/433b83e6-d5f7-4607-85db-8c47d992e4fd").then(
      (res) => {
        res.json().then((data) => {
          setData(data.sort((a,b)=>new Date(b.created_ts).getTime()-new Date(a.created_ts).getTime()));
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
            key={index}
            message={item.message}
            title={item.title}
            createdAt={item.created_ts}
            status={item.status}
            icon={statusIcon[item.status]}
          />
        ))}
    </div>
  );
};

export default RecentActivities;
