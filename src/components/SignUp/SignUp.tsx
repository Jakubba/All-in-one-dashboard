import React, { useState } from "react";
import clsx from "clsx";
import "./SignUp.module.style.scss";

import img from "../../assets/image/login.png";
import lockIcon from "../../assets/icons/lock.svg";
import personIcon from "../../assets/icons/user.svg";
import emailIcon from "../../assets/icons/envelope.svg";
import close from "../../assets/icons/close.png";

import InputField from "../InputField/InputField";
import Checkbox from "../Checkbox/Checkbox";
import Button, { ButtonVariant } from "../Button/Button";
import SignIn from "../SignIn/SignIn";
import ResetPassword from "../ResetPassword/ResetPassword";

import { auth, createUserWithEmailAndPassword } from "../../firabase/firabase";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface SignUpProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isResetPasswordVisible, setIsResetPasswordVisible] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailTrimmed = email.trim();
    const passwordTrimmed = password.trim();

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailTrimmed)) {
      toast.error("Proszę wprowadzić poprawny adres e-mail.");
      return;
    }

    if (passwordTrimmed.length < 6) {
      toast.error("Hasło musi mieć co najmniej 6 znaków.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emailTrimmed,
        passwordTrimmed,
      );

      console.log("Użytkownik utworzony:", userCredential.user);
      toast.success("Konto zostało utworzone!");

      onClose();
    } catch (error: any) {
      console.error("Błąd rejestracji:", error);

      switch (error.code) {
        case "auth/email-already-in-use":
          toast.error("Adres e-mail jest już używany.");
          break;
        case "auth/weak-password":
          toast.error("Hasło jest zbyt słabe. Użyj co najmniej 6 znaków.");
          break;
        default:
          toast.error("Nie udało się założyć konta: " + (error.message || error));
      }
    }
  };

  return (
    <>
      <section className={clsx("SignUp", { show: isOpen, hide: !isOpen })}>
        <div className="SignUp__wrapper">
          <div className="SignUp-info">
            <img src={img} alt="SignUp Illustration" />
            <h2 className="SignUp-info__title">Learn faster and don't waste your time</h2>
            <p className="SignUp-info__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <div className="SignUp-form-container">
            <button className="SignUp-form__btn-close" onClick={onClose}>
              <img src={close} alt="Close" />
            </button>

            <form className="SignUp-form" onSubmit={handleSignUp}>
              <h2 className="SignUp-form__title">
                Join Over 52 Million People Using Our Tools from Around the World.
              </h2>
              <p className="SignUp-form__description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>

              <InputField
                type="email"
                id="email"
                placeholder="Email"
                icon={emailIcon}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputField
                type="text"
                id="name"
                placeholder="Name"
                icon={personIcon}
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                Sign Up
              </Button>
            </form>

            <h3 className="SignUp-form__question">Do you have an account?</h3>
            <Button variant={ButtonVariant.Secondary} onClick={() => setIsSignIn(true)}>
              Sign in
            </Button>
            <h3 className="SignUp-form__question">Never received or forgot your password?</h3>
            <Button
              variant={ButtonVariant.Secondary}
              onClick={() => setIsResetPasswordVisible(true)}
            >
              Reset Password
            </Button>
          </div>
        </div>
      </section>

      {isSignIn && (
        <SignIn isOpen={isSignIn} onClose={() => setIsSignIn(false)} onSignUp={handleSignUp} />
      )}

      {isResetPasswordVisible && (
        <ResetPassword
          isOpen={isResetPasswordVisible}
          onClose={() => setIsResetPasswordVisible(false)}
        />
      )}

      <ToastContainer />
    </>
  );
};

export default SignUp;
