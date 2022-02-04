import React from "react";
import Wavey from 'shared/Wavey/wavey'
import girlImage from 'assets/hero/girl-desktop.svg'
import guyImage from 'assets/hero/guy-dekstop.svg'

const Hero = () => {
  return (
    <div className="container-information">
      <div className="container-information_info">
        <h1 className="container-information__title">
          We bring amazing and wild website to life
        </h1>
        <h4 className="container-information__subtitle">
          Plan, code and lauch the project to the jungle
        </h4>
        <a
          className="container-information__button"
          href="mailto:imanny.eg@gmail.com?subject=Let's Work Together Wanabana.io"
        >
          Contact Us
        </a>
      </div>
      <Wavey />

      <img className="container-information__guy" src={guyImage} alt="guy-back" />
      <img className="container-information__girl" src={girlImage} alt="girl-back" />
    </div>
  );
};

export default Hero;
