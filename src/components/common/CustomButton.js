import React from "react";
import "./CustomButton.css";

const CustomButton = (props) => {
  return (
    <button
      className={`customButton ${props.isTransparent && "customButton--info"}`}
    >
      {props.element}
      {props.text.length > 0 && props.text}
    </button>
  );
};

export default CustomButton;
