import React from 'react';
import { Link } from 'react-router-dom';
import './Login.module.style.scss';
import img from '../../assets/image/login.png';
import lock from '../../assets/icons/lock.svg';
import person from '../../assets/icons/user.svg';
import email from '../../assets/icons/envelope.svg';
import InputField from '../InputField/InputField';
import close from '../../assets/icons/close.png';

export const Login = () => {
  return (
    <section className="login-section">
      <div className="login-wrapper">
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

            {/* Wykorzystujemy nowy reużywalny komponent InputField */}
            <InputField type="email" id="email" placeholder="Email" icon={email} />
            <InputField type="text" id="name" placeholder="Name" icon={person} />
            <InputField type="password" id="password" placeholder="Password" icon={lock} />

            <div className="checkbox-container">
              <div className="checkbox"></div>
              <input className="checkbox-input" type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">Remember me</label>
            </div>
            <button className="login-form__button" type="submit">
              SIGN UP
            </button>
          </form>
          <h3 className="login-form__question">Do you have an account?</h3>
          <Link to="/registration" className="login-form__link">
            Sign in
          </Link>
          <h3 className="login-form__question">Never received or forgot your password?</h3>
          <Link to="/reset-password" className="login-form__link">
            Reset password
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
