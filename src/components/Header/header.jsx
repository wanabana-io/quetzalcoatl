import React from "react";
import LogoHeaderDesktop from "../../assets/header/logo-desktop-header.svg";
import LogoHeaderMobile from "../../assets/header/logo-mobile-header.svg";
import MenuIcon from "../../assets/header/hamburguer-menu.svg";
import HeaderItem from "../../shared/HeaderItem/headerItem";

const Header = ({ isOpen }) => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="logos-container">
          <img
            alt="Logo"
            className="logos-container__desktop"
            src={LogoHeaderDesktop}
          />
          <img
            alt="Logo"
            className="logos-container__mobile"
            src={LogoHeaderMobile}
          />
        </div>

        <div className="menu-container">
          <img
            alt="Hamburguer icon"
            className="menu-container__hamburguer-icon"
            src={MenuIcon}
            onClick={() => isOpen()}
          />

          <HeaderItem
            goTo="services"
            text="Services"
            itemClass="menu-container__link"
          />

          <HeaderItem
            goTo="about"
            text="About"
            itemClass="menu-container__link"
          />

          <HeaderItem
            goTo="contact"
            text="Contact"
            itemClass="menu-container__link"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
