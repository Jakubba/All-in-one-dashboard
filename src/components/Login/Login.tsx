import React from 'react';
import { Link } from 'react-router-dom';
import './Login.module.style.scss';

import img from '../../assets/image/login.png';
import lock from '../../assets/icons/lock.svg';
import person from '../../assets/icons/user.svg';
import email from '../../assets/icons/envelope.svg';
import close from '../../assets/icons/close.png';

import InputField from '../InputField/InputField';
import Checkbox from '../Checkbox/Checkbox';
import Button, { ButtonVariant } from '../Button/Button';

export const Login = () => {
  return (
    <section className="login">
      <div className="login__wrapper">
        <div className="login-info">
          <img src={img} alt="Login Illustration" />
          <h2 className="login-info__title">Learn faster and don't waste your time</h2>
          <p className="login-info__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="login-form-container">
          <button className="login-form__btn-close">
            <img src={close} alt="" />
          </button>
          <form className="login-form">
            <h2 className="login-form__title">
              Join Over 52 Million People Using Our Tools from Around the World.
            </h2>
            <p className="login-form__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>

            <InputField type="email" id="email" placeholder="Email" icon={email} />
            <InputField type="text" id="name" placeholder="Name" icon={person} />
            <InputField type="password" id="password" placeholder="Password" icon={lock} />
            <Checkbox />
            <Button variant={ButtonVariant.Primary}>Sign Up</Button>
          </form>
          <h3 className="login-form__question">Do you have an account?</h3>
          <Button variant={ButtonVariant.Secondary} href="/registration">
            Sign in
          </Button>
          <h3 className="login-form__question">Never received or forgot your password?</h3>
          <Button variant={ButtonVariant.Secondary} href="/reset-password">
            Sign in
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Login;
