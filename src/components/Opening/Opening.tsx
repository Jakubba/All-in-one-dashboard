import React from "react";
import "./Opening.module.styles.scss";
export const Opening: React.FC = () => {
  return (
    <div className="loader">
      <div className="loader-wrapper">
        <div className="loader-indicator">
          <span className="loader first_sm"></span>
          <span className="loader second_sm"></span>
          <span className="loader third_sm"></span>
        </div>
        <span className="indicator-text">Uploading...</span>
      </div>
    </div>
  );
};

export default Opening;
