import React from 'react';
import { ReactSVG } from 'react-svg'
import classNames from "classnames";

const CardDesktop = ({direction, imgDesktop, iconDesktop, title, subtitle, description, separation}) => {

  const directionclass = classNames("services", {
    "services-direction": direction
  });

  const textSeparation = classNames("services__information-container",{
    "services__information-container-separation": separation
  });
  return (
    <>
      <div className={directionclass}>
        <ReactSVG src={imgDesktop} className="services__image" />
        <div className={textSeparation}>
          <div className="services__title-container">
            <ReactSVG src={iconDesktop} className="services__icon" />
            <h1 className="services__title">{title}</h1>
          </div>
          <h3 className="services__subtitle">{subtitle}</h3>
          <h2 className="services__description">{description}</h2>
        </div>
      </div>
    </>
  );
}

export default CardDesktop;
