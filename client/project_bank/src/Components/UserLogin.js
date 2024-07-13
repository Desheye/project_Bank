import React from "react";
import "../css/userlogin.css";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";
import { motion as m } from "framer-motion";
import { useLoginAnimations } from "./loginAnimations";

function UserLogin() {
  const {
    loginBoxAnimation,
    signupBoxAnimation,
    signupFormAnimation,
    loginGridAnimation,
    triggerAnimations
  } = useLoginAnimations();

  return (
    <div className="grid-wrap">
      <div className="containerA">
        <m.div
          className="welcome-back A"
          animate={loginBoxAnimation}
        >
          <div className="loginbox">
            <h1>Already Have An Account ?</h1>
            <button className="loginbox-button" onClick={triggerAnimations}>Login</button>
          </div>
        </m.div>
        <m.div className="signupbox B" animate={signupFormAnimation}>
          <div className="box-wrapper">
            <form className="signup-form">
              <div className="form-group">
                <input type="text" id="fullName" className="form-control" placeholder=" " required />
                <FaUser className="form-label" />
              </div>
              <div className="form-group">
                <input type="tel" id="phone" className="form-control" placeholder=" " required />
                <FaPhone className="form-label" />
              </div>
              <div className="form-group">
                <input type="email" id="email" className="form-control" placeholder=" " required />
                <FaEnvelope className="form-label" />
              </div>
              <div className="form-group">
                <input type="password" id="password" className="form-control" placeholder=" " required />
                <FaLock className="form-label" />
              </div>
              <div className="form-group">
                <input type="password" id="confirmPassword" className="form-control" placeholder=" " required />
                <FaLock className="form-label" />
              </div>
              <button type="submit" className="submit-btn">Sign Up</button>
            </form>
          </div>
        </m.div>
      </div>

      <div className="containerB">
        <m.div
          className="create-account A"
          animate={signupBoxAnimation}
        >
          <div className="signup-Box">
            <h1>Don't Have An Account ? <br /> Start Here.</h1>
            <button className="loginbox-button" onClick={triggerAnimations}>Sign Up</button>
          </div>
        </m.div>

        <m.div className="login-grid B" animate={loginGridAnimation}>
          <div className="box-wrapper">
            <form className="signup-form">
              <div className="form-group">
                <input type="text" id="fullName" className="form-control" placeholder=" " required />
                <FaUser className="form-label" />
              </div>
              <div className="form-group">
                <input type="email" id="email" className="form-control" placeholder=" " required />
                <FaEnvelope className="form-label" />
              </div>
              <div className="form-group">
                <input type="tel" id="phone" className="form-control" placeholder=" " required />
                <FaPhone className="form-label" />
              </div>
              <h4>Forgot Password ?</h4>
              <button type="submit" className="submit-btn">Sign In</button>
            </form>
          </div>
        </m.div>
      </div>
    </div>
  );
}

export default UserLogin;
