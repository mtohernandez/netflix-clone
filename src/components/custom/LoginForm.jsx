import { useState, useRef } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import InputForm from "../styled/Form/InputForm";
import ButtonForm from "../styled/Form/ButtonForm";
import LabelForm from "../styled/Form/LabelForm";
import BlackTransparentContainer from "../styled/Containers/BlackTransparentContainer";
import LinkText from "../styled/Text/LinkText";
import StraightLineGray from "../styled/Stylish/StraightLineGray";
import H1Text from "../styled/Text/H1Text";
import ParagraphP from "../styled/Text/ParagraphP";

const LoginForm = () => {
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
    )
      .then((userCredential) => {
        navigate("/home");
      })
      .catch((error) => {
        // If wrong password or email
        if (
          error.code === "auth/wrong-password" ||
          error.code === "auth/user-not-found"
        ) {
          setError("Wrong password or email.");
          return;
        }

        // If no internet connection
        if (error.code === "auth/network-request-failed") {
          setError("No internet connection.");
          return;
        }

        setError("Something is not right.");
      });
  };

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        navigate("/home");
      })
      .catch((error) => {
        // If email is already in use
        if (error.code === "auth/email-already-in-use") {
          setError("Email is already in use.");
        }

        // If email is invalid
        if (error.code === "auth/invalid-email") {
          setError("Invalid email.");
        }

        // If password is too weak
        if (error.code === "auth/weak-password") {
          setError("Password is too weak.");
        }

        // If no internet connection
        if (error.code === "auth/network-request-failed") {
          setError("No internet connection.");
        }
      });
  };

  const handleInput = (e) => {
    if(e.target.value.length === 0) return;
    setError("");
  };

  return (
    <BlackTransparentContainer>
      <form onSubmit={handleLogin}>
        <H1Text>Sign In</H1Text>
        <StraightLineGray />
        <LabelForm htmlFor="email">Email</LabelForm>
        <InputForm
          id="email"
          type="text"
          ref={emailRef}
          placeholder="email@example.com"
          onChange={handleInput}
        />
        <LabelForm htmlFor="password">Password</LabelForm>
        <InputForm
          id="password"
          type="password"
          ref={passwordRef}
          placeholder="password"
          onChange={handleInput}
        />
        <ParagraphP $colorText="#DB202C">{error}</ParagraphP>
        <ParagraphP >
          Not having an account? <LinkText onClick={register}>Sign Up</LinkText>
        </ParagraphP>
        <ButtonForm type="submit" $fullWidth>
          Sign In
        </ButtonForm>
      </form>
    </BlackTransparentContainer>
  );
};

export default LoginForm;
