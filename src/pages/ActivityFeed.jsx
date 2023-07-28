import React, { useContext, useEffect } from "react";
import { CallContext } from "../context/CallContext";
import { LoadingContext } from "../context/LoadingContext";

import Loading from "../components/Loading.jsx";
import EmptyState from "../components/EmptyState.jsx";

import CallEntry from "../components/CallEntry.jsx";
import ArchiveIcon from "../icons/archive.svg";

import "../styles/activity-feed.scss";

const ActivityFeed = () => {
  const { unarchivedCalls, getAllCalls, archiveAllCalls } =
    useContext(CallContext);
  const { isLoading } = useContext(LoadingContext);

  useEffect(() => {
    getAllCalls();
  }, []);

  return (
    <div id="activity-feed" className="container-view">
      {isLoading ? (
        <Loading />
      ) : !unarchivedCalls.length ? (
        <EmptyState message={"No Calls"} />
      ) : (
        <div>
          <div className="archive-section">
            <button className="btn-pink" onClick={() => archiveAllCalls()}>
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
      )}
    </div>
  );
};

export default ActivityFeed;
