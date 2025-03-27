import React from "react";
import "./InputField.styles.scss";

interface InputFieldProps {
  type: string;
  id: string;
  placeholder: string;
  icon: string;
  value?: string;
  onChange: (e: any) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  id,
  placeholder,
  icon,
  value,
  onChange,
}) => {
  return (
    <div className="input-container">
      <img className="input-container__img" src={icon} alt={`${id} Icon`} />
      <input type={type} id={id} placeholder={placeholder} required />
    </div>
  );
};

export default InputField;
