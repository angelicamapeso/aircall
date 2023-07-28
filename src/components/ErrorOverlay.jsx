import React, { useContext } from "react";
import { LoadingContext } from "../context/LoadingContext";
import "../styles/error-overlay.scss";

import CloseIcon from "../icons/close.svg";

const ErrorOverlay = () => {
  const { error, clearError } = useContext(LoadingContext);

  return (
    error && (
      <div className="error-overlay">
        <button className="close-error btn-error" onClick={() => clearError()}>
          <p>{error}</p>
          <img src={CloseIcon} />
        </button>
      </div>
    )
  );
};

export default ErrorOverlay;
