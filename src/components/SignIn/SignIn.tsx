import React, { useState } from "react";
import clsx from "clsx";
import "./SignIn.scss";

import img from "../../assets/image/login.png";
import lockIcon from "../../assets/icons/lock.svg";
import emailIcon from "../../assets/icons/envelope.svg";
import close from "../../assets/icons/close.png";

import InputField from "../InputField/InputField";
import Checkbox from "../Checkbox/Checkbox";
import Button, { ButtonVariant } from "../Button/Button";
import ResetPassword from "../ResetPassword/ResetPassword";

interface SignInProps {
  isOpen: boolean;
  onClose: () => void;
  onSignUp: (e: React.FormEvent) => Promise<void>;
}

const SignIn: React.FC<SignInProps> = ({ isOpen, onClose, onSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isResetPasswordVisible, setIsResetPasswordVisible] = useState(false);

  return (
    <>
      <section className={clsx("signin", { show: isOpen, hide: !isOpen })}>
        <div className="signin__wrapper">
          <div className="signin-info">
            <img src={img} alt="SignIn Illustration" />
            <h2 className="signin-info__title">Welcome Back!</h2>
            <p className="signin-info__description">Sign in to continue your learning journey.</p>
          </div>

          <div className="signin-form-container">
            <button className="signin-form__btn-close" onClick={onClose}>
              <img src={close} alt="Close" />
            </button>

            <form className="signin-form">
              <h2 className="signin-form__title">Sign in to your account</h2>
              <p className="signin-form__description">Enter your credentials below.</p>

              <InputField
                type="email"
                id="email"
                placeholder="Email"
                icon={emailIcon}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputField
                type="password"
                id="password"
                placeholder="Password"
                icon={lockIcon}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Checkbox />
              <Button type="submit" variant={ButtonVariant.Primary}>
                Sign In
              </Button>
            </form>

            <h3 className="signin-form__question">Don't have an account?</h3>
            <Button variant={ButtonVariant.Secondary} onClick={onSignUp}>
              Sign Up
            </Button>
            <h3 className="signin-form__question">Forgot your password?</h3>
            <Button
              variant={ButtonVariant.Secondary}
              onClick={() => setIsResetPasswordVisible(true)}
            >
              Reset Password
            </Button>
          </div>
        </div>
      </section>

      {isResetPasswordVisible && (
        <ResetPassword
          isOpen={isResetPasswordVisible}
          onClose={() => setIsResetPasswordVisible(false)}
        />
      )}
    </>
  );
};

export default SignIn;
