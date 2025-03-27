import React, { useState } from "react";
import clsx from "clsx";
import "./ResetPassword.scss";

import closeIcon from "../../assets/icons/close.png";
import emailIcon from "../../assets/icons/envelope.svg";
import InputField from "../InputField/InputField";
import Button, { ButtonVariant } from "../Button/Button";

interface ResetPasswordProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResetPassword: React.FC<ResetPasswordProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage("If this email is registered, you will receive a password reset link.");
  };

  return (
    <section className={clsx("reset-password", { show: isOpen, hide: !isOpen })}>
      <div className="reset-password__wrapper">
        <button className="reset-password__btn-close" onClick={onClose}>
          <img src={closeIcon} alt="Close" />
        </button>

        <div className="reset-password-form-container">
          <h2 className="reset-password__title">Reset Your Password</h2>
          <p className="reset-password__description">
            Enter your email address to receive a password reset link.
          </p>

          {error && <p className="error-message">{error}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}

          <form className="reset-password-form" onSubmit={handleResetPassword}>
            <InputField
              type="email"
              id="email"
              placeholder="Enter your email"
              icon={emailIcon}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button type="submit" variant={ButtonVariant.Primary}>
              Send Reset Link
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
