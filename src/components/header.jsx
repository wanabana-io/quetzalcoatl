import React from 'react';
import LogoHeaderDesktop from '../assets/logo-desktop-header.svg';
import LogoHeaderMobile from '../assets/logo-mobile-header.svg';
import MenuIcon from '../assets/hamburguer-menu.svg';

const Header = () => {
  return (
  <>
    <div className='header-container'>
      <div className='logos-container'>
        <a href='#'><img src={LogoHeaderDesktop} alt="Logo" className='logos-container__desktop' /></a>
        <a href='#'><img src={LogoHeaderMobile} alt="Logo" className='logos-container__mobile' /></a>
      </div>

      <div className='menu-container'>
        <a> <img src={MenuIcon} className='menu-container__hamburguer-icon' alt="Hamburguer icon" /></a>
        <a href="#" className="menu-container__link">Services</a>
        <a href="#" className="menu-container__link">About</a>
        <a href="#" className="menu-container__link">Contact</a>
      </div>
    </div>
  </>
  );
}

export default Header;
