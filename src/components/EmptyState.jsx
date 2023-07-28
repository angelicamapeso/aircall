import React from "react";
import "../styles/empty-state.scss";

import BoxIcon from "../icons/box.svg";

const EmptyState = ({ message }) => {
  return (
    <div className="empty">
      <img src={BoxIcon} />
      <p>{message}</p>
    </div>
  );
};

export default EmptyState;
