import React from "react";
import { waveyData } from "./waveyData";

const Wavey = ({ reverseWavey }) => {
  const data = reverseWavey ? waveyData.waveyAbout : waveyData.waveyServices;

  const { path, classContainer, classWavey } = data;

  return (
    <div className="wavey">
      <div className="wavey__relative">
        <div className={`wavey-container ${classContainer}`}>
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="wavey-sizes"
          >
            <path d={path} className={classWavey}></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

Wavey.defaultProps = {
  reverseWavey: false,
};

export default Wavey;
