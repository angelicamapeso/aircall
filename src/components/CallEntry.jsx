import React from "react";
import { Link } from "react-router-dom";
import "../styles/call-entry.scss";

import CallIcon from "./CallIcon.jsx";
import { dateRelativeToToday } from "../util/dateTimeFormatter.js";
import { capitalize } from "../util/textFormatter.js";

import MoreIcon from "../icons/more.svg";

const CallEntry = ({ call }) => {
  const { id, created_at, direction, from, to, via, call_type } = call;

  const COLOUR_MAP = {
    missed: "pink",
    voicemail: "yellow",
  };

  return (
    <Link className="call-entry" to={`/call/${id}`}>
      {direction ? (
        <CallIcon direction={direction} />
      ) : (
        <span className="call-icon"></span>
      )}
      <div className="caller-info">
        {from || to || via ? (
          <p>
            <span
              className={`from-to ${
                call_type !== "answered" ? COLOUR_MAP[call_type] : ""
              }`}
            >
              {from ? from : "Unknown"} called {to ? to : "Unknown"}
            </span>
            <span className="via">with Aircall #{via ? via : "Unknown"}</span>
          </p>
        ) : (
          <p className="from-to">Unknown</p>
        )}
      </div>
      <p className="date">
        {call_type && call_type !== "answered" ? (
          <span className={`tag ${COLOUR_MAP[call_type]}-tag`}>
            {capitalize(call_type)}
          </span>
        ) : null}
        <span>
          {call_type && call_type !== "answered" ? "on " : null}
          {dateRelativeToToday(created_at)}
        </span>
      </p>
      <img className="more" src={MoreIcon} />
    </Link>
  );
};

export default CallEntry;
