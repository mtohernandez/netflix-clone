import React, { useState } from "react";
import { NetflixIcon } from "../icons";
import SignUpScreen from "./SignUpScreen";
import "./LoginScreen.css";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  const [email, setEmail] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <div className="loginScreen__logo">
          <NetflixIcon />
        </div>
        <button onClick={() => setSignIn(true)} className="loginScreen__button">Sign In</button>
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {signIn ? (
          <SignUpScreen email={email}/>
        ) : (
          <>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Address" onChange={emailHandler}/>
                <button onClick={() => setSignIn(true)} className="loginScreen__getStarted">Get Started</button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
