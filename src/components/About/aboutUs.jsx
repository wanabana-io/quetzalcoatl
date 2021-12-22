import React from 'react';
import { ReactSVG } from 'react-svg'
import AboutUsImage from '../../assets/about/about-us.svg';
import AboutUSImageDesktop from '../../assets/about/about-us-desktop.svg'


const About = () => {
  return (
    <div className="about">
      <div className='about__information'>
        <h1 className="about__description">Native to the tropical areas of Mexico and South America</h1>
        <h2 className="about__origin">wanabana from "Guanábana"</h2>
      </div>

      <div className="about__image-container">
        <ReactSVG src={AboutUsImage} className="about__image-about" />
        <ReactSVG src={AboutUSImageDesktop} className="about__image-about-desktop" />
      </div>
    </div>
  );
}

export default About;
