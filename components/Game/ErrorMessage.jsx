import React from "react";
import { MdError } from "react-icons/md";
import "./ErrorMessage.css";

const ErrorMessage = ({ showError }) => {
  return (
    <div>
      <div className={`errorMessage ${showError ? "showError" : ""}`}>
        <MdError className="errorIcon" />
        <div className="errorText">
          <p className="msg">Cell already occupied!</p>
          <span>You can't change the move once its placed</span>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
