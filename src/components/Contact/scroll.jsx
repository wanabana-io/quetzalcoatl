import React from "react";
import { ReactSVG } from 'react-svg'
import Arrow from "../../assets/contact/arrow.svg"

const Scroll  = () => {
	const scrollToTop = () =>{
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<ReactSVG src={Arrow}
			className='arrow-scroll'
			onClick={scrollToTop}
		/>
	);
}

export default Scroll;
