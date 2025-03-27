import React from "react";
import "./Checkbox.module.styles.scss";

export const Checkbox = () => {
  return (
    <div className="checkbox-container">
      <div className="checkbox"></div>
      <input className="checkbox-input" type="checkbox" id="checkbox" />
      <label htmlFor="checkbox">Remember me</label>
    </div>
  );
};

export default Checkbox;
