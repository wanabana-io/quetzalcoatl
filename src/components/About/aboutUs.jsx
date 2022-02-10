import React from 'react';
import AboutUsImage from '../../assets/about/about-us.svg';

const About = () => {
  return (
    <div className="about">
      <div className='about__information'>
        <h1 className="about__description">Native to the tropical areas of Mexico and South America</h1>
        <h2 className="about__origin">wanabana from "Guanábana"</h2>
      </div>

      <div className="about__image-container">
        <img src={AboutUsImage} alt='About Image' className="about__image-about" />
      </div>
    </div>
  );
}

export default About;
