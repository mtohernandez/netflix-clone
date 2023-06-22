import { useState, useRef } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    ).then((userCredential) => {
      navigate("/home");
    })
    .catch((error) => {
      // If wrong password or email
      if (error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
        setError("Wrong password or email.");
      }

      // If no internet connection
      if (error.code === "auth/network-request-failed") {
        setError("No internet connection.");
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        {error && <p>{error}</p>}
        <label htmlFor="email">Email</label>
        <input id="email" type="text" ref={emailRef} />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" ref={passwordRef} />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default Login;
