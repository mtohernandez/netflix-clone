import React, { useRef, useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./SignUpScreen.css";

const SingUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [signInError, setSignInError] = useState("");

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        setSignInError(error.message);
      });
  };

  const inputHandler = (e) => {
    if (e.target.value > 0) setSignInError("");
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((error) => {
        setSignInError(error.message);
      });
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input
          ref={emailRef}
          type="email"
          placeholder="Email"
          onChange={inputHandler}
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          onChange={inputHandler}
        />
        <h3 className={`signupScreen__error`}>{signInError}</h3>
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signupScreen__gray">New to Netflix? </span>
          <span className="signupScreen__link" onClick={register}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SingUpScreen;
