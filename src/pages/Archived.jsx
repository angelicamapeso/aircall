import React, { useContext, useEffect } from "react";
import { CallContext } from "../context/CallContext";

import CallEntry from "../components/CallEntry.jsx";
import UnarchiveIcon from "../icons/unarchive.svg";

import "../styles/archived.scss";

const Archived = () => {
  const { archivedCalls, getAllCalls, resetCalls } = useContext(CallContext);

  useEffect(() => {
    getAllCalls();
  }, []);

  return (
    <div id="archived" className="container-view">
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
  );
};

export default Archived;
