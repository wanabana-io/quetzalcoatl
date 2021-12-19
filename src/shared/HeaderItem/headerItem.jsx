import React from "react";
import { Link } from "react-scroll";

const HeaderItem = ({ goTo, text, itemClass, isOpen }) => {
  return (
    <>
      <Link
        className={itemClass}
        duration={500}
        offset={20}
        smooth={true}
        spy={true}
        to={goTo}
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
