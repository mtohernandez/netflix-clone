import { useState, useRef } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import InputForm from "../styled/Form/InputForm";
import ButtonForm from "../styled/Form/ButtonForm";
import LabelForm from "../styled/Form/LabelForm";
import BlackTransparentContainer from "../styled/Containers/BlackTransparentContainer";
import H1Text from "../styled/Text/H1Text";
import PText from "../styled/Text/PText";
import LinkText from "../styled/Text/LinkText";
import StraightLineGray from "../styled/Stylish/StraightLineGray";

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
        }

        // If no internet connection
        if (error.code === "auth/network-request-failed") {
          setError("No internet connection.");
        }
      });
  };

  return (
    <BlackTransparentContainer>
      <form onSubmit={handleLogin}>
        <H1Text>Start The Journey</H1Text>
        <StraightLineGray />
        <LabelForm htmlFor="email">Email</LabelForm>
        <InputForm
          id="email"
          type="text"
          ref={emailRef}
          placeholder="email@example.com"
        />
        <LabelForm htmlFor="password">Password</LabelForm>
        <InputForm
          id="password"
          type="password"
          ref={passwordRef}
          placeholder="password"
        />
        <PText>
          Not having an account? <LinkText>Sign Up</LinkText>
        </PText>
        <ButtonForm type="submit" $fullWidth>
          Sign In
        </ButtonForm>
      </form>
    </BlackTransparentContainer>
  );
};

export default LoginForm;
