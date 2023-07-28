import React from "react";

import "../styles/loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </div>
  );
};

export default Loading;
