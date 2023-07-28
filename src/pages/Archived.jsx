import React, { useContext, useEffect } from "react";
import { CallContext } from "../context/CallContext";
import { LoadingContext } from "../context/LoadingContext";

import Loading from "../components/Loading.jsx";
import EmptyState from "../components/EmptyState.jsx";

import CallEntry from "../components/CallEntry.jsx";
import UnarchiveIcon from "../icons/unarchive.svg";

import "../styles/archived.scss";

const Archived = () => {
  const { archivedCalls, getAllCalls, resetCalls } = useContext(CallContext);
  const { isLoading } = useContext(LoadingContext);

  useEffect(() => {
    getAllCalls();
  }, []);

  return (
    <div id="archived" className="container-view">
      {isLoading ? (
        <Loading />
      ) : !archivedCalls.length ? (
        <EmptyState message={"No Archived Calls"} />
      ) : (
        <div>
          <div className="unarchive-section">
            <button className="btn-blue" onClick={() => resetCalls()}>
              <img src={UnarchiveIcon} />
              Unarchive All Calls
            </button>
          </div>
          <ul>
            {archivedCalls.map((call) => (
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

export default Archived;
