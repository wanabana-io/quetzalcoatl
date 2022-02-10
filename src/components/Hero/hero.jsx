import React from "react";
import Wavey from 'shared/Wavey/wavey';
import girlImage from 'assets/hero/girl-desktop.svg';
import guyImage from 'assets/hero/guy-dekstop.svg';
import leftDownFlower from 'assets/hero/left-down-flower.svg';
import leftTopFlower from 'assets/hero/left-top-flower.svg';
import rightTopFlower from 'assets/hero/right-top-flower.svg';
import rightDownFlower from 'assets/hero/right-down-flower.svg';


const Hero = () => {
  return (
    <div className="container-information">
      <div className="container-information_info">
        <h1 className="container-information__title">
          We bring amazing and wild websites to life
        </h1>
        <h4 className="container-information__subtitle">
          Plan, code and lauch the project to the jungle
        </h4>
        <a
          className="container-information__button"
          href="mailto:imanny.eg@gmail.com?subject=Let's Work Together Wanabana.io"
        >
          contact us
        </a>
      </div>
      <Wavey />

      <img className="container-information__guy" src={guyImage} alt="guy-back" />
      <img className="container-information__girl" src={girlImage} alt="girl-back" />
      <img className="container-information__left-top-flower" src={leftTopFlower} alt="Flower" />
      <img className="container-information__left-down-flower" src={leftDownFlower} alt="Flower" />
      <img className="container-information__right-top-flower" src={rightTopFlower} alt="Flower" />
      <img className="container-information__right-down-flower" src={rightDownFlower} alt="Flower" />
    </div>
  );
};

export default Hero;
