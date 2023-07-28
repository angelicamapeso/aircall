import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CallContext } from "../context/CallContext";
import { getTime, getDuration, getDate } from "../util/dateTimeFormatter";
import { getTypeText } from "../util/textFormatter";

import BackIcon from "../icons/back_chev.svg";
import ArchiveIcon from "../icons/archive.svg";
import UnarchiveIcon from "../icons/unarchive.svg";
import CallIcon from "../components/CallIcon.jsx";

import "../styles/activity-detail.scss";

const ActivityDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getCallById, updateCallArchive } = useContext(CallContext);
  const [call, setCall] = useState(null);

  useEffect(() => {
    getCallById(id).then((call) => (call ? setCall(call) : null));
  }, []);

  const TAG_MAP = {
    missed: "pink-tag",
    voicemail: "yellow-tag",
  };

  return (
    <div id="activity-detail" className="container-view">
      <div className="back-section">
        <a onClick={() => navigate(-1)}>
          <img src={BackIcon} />
          Back
        </a>
      </div>
      {call && (
        <div className="details">
          <div className="archive-info">
            {call.is_archived ? <p className="tag pink-tag">Archived</p> : null}
            <button
              className={call.is_archived ? "btn-blue" : "btn-pink"}
              onClick={() => updateCallArchive(id)}
            >
              <img src={call.is_archived ? UnarchiveIcon : ArchiveIcon} />
              {call.is_archived ? "Unarchive Call" : "Archive Call"}
            </button>
          </div>
          {call.from || call.to || call.via ? (
            <h1>
              <span className="from-to">{`From ${
                call.from ? call.from : "Unknown"
              } to ${call.to ? call.to : "Unknown"}`}</span>
              <span className="via">{`with Aircall #${
                call.via ? call.via : "Unknown"
              }`}</span>
            </h1>
          ) : (
            <h1>Unknown</h1>
          )}
          <p className="date">{getDate(call.created_at)}</p>
          <div className="call-time-type">
            <p className="time">{getTime(call.created_at)}</p>
            <p className="type-duration">
              <span
                className={`type ${
                  TAG_MAP[call.call_type]
                    ? "tag " + TAG_MAP[call.call_type]
                    : ""
                }`}
              >
                {getTypeText(call)}
              </span>
              <span className="duration">{getDuration(call.duration)}</span>
            </p>
            {call.direction && <CallIcon direction={call.direction} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivityDetail;
