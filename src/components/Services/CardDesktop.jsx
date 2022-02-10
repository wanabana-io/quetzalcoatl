import React from 'react';
import { ReactSVG as Icon } from 'react-svg';
import classNames from "classnames";
import useFirabeImage from '../../hooks/useFirebaseImage';

const CardDesktop = ({direction, img, icon, title, subtitle, description, separation}) => {

  const {url} = useFirabeImage(img);

  const directionclass = classNames("services", {
    "services-direction": direction
  });

  const textSeparation = classNames("services__information-container",{
    "services__information-container-separation": separation
  });

  return (
    <>
      <div className={directionclass}>
        { url && <img src={url} alt={img} className="services__image" /> }
        <div className={textSeparation}>
          <div className="services__title-container">
            <Icon src={icon} beforeInjection={(svg) => {
              svg.setAttribute('height', 48)
              svg.setAttribute('width', 48)
            }} className="services__icon" />
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
