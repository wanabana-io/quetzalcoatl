import React from "react";
import { Link } from "react-scroll";

const HeaderItem = ({ goTo, text, itemClass, isOpen }) => {
  return (
    <>
      <Link
        activeClass={goTo}
        className={itemClass}
        duration={500}
        offset={-50}
        smooth={true}
        spy={true}
        to="about"
        onClick={() => {
          isOpen();
        }}
      >
        {text}
      </Link>
    </>
  );
};

HeaderItem.defaultProps = {
  isOpen: () => {},
};

export default HeaderItem;
