import React from "react";
import { Link } from "react-scroll";

const HeaderItem = ({ goTo, text }) => {
  return (
    <>
      <Link
        activeClass={goTo}
        className="menu-container__link"
        duration={500}
        offset={-50}
        smooth={true}
        spy={true}
        to="about"
      >
        {text}
      </Link>
    </>
  );
};

export default HeaderItem;
