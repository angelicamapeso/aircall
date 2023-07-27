import React, { useContext, useEffect } from "react";
import { CallContext } from "../context/CallContext";

import CallEntry from "../components/CallEntry.jsx";
import ArchiveIcon from "../icons/archive.svg";

import "../styles/activity-feed.scss";

const ActivityFeed = () => {
  const { unarchivedCalls, getAllCalls } = useContext(CallContext);

  useEffect(() => {
    getAllCalls();
  }, []);

  useEffect(() => {
    console.log(unarchivedCalls);
  }, [unarchivedCalls]);
  return (
    <div id="activity-feed" className="container-view">
      <div className="archive-section">
        <button className="btn-pink">
          <img src={ArchiveIcon} />
          Archive all calls
        </button>
      </div>
      <ul>
        {unarchivedCalls.map((call) => (
          <li key={call.id}>
            <CallEntry call={call} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;
