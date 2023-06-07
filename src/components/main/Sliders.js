import React from "react";
import { Row } from "../custom";
import requests from "../../API/requests";
import "./Sliders.css";

const Sliders = () => {
  return (
    <div className="sliders">
      {Object.entries(requests).map(([key, { link, title }], index) =>
        <Row key={key} fetchUrl={link} title={title} isLargeRow={index === 1} />
      )}
    </div>
  );
};

export default Sliders;
