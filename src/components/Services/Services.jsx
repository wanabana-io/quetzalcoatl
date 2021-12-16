import React from 'react';
import Carrousel from './Carrousel';
import CardDesktop from './CardDesktop';
import { ServiceData } from './ServiceData';

const Services = () => {
  return (
    <>
      <div className='services-container'>
        <div className='services-title'>
          <h1>Our Services</h1>
        </div>

        <Carrousel />

        <div className='services-data'>
          <CardDesktop {...ServiceData.Planning} />
          <CardDesktop {...ServiceData.Design} />
          <CardDesktop {...ServiceData.Developing} />
          <CardDesktop {...ServiceData.Consulting} />
        </div>
      </div>
    </>
   );
}

export default Services;
