import React, {useEffect, useState} from "react";
import { waveyData } from './waveyData';

const Wavey = ({ reverseWavey }) => {

	const getWidth = () => {
		const { innerWidth: width } = window;
		return width
	}

	const useWidth = () => {
		const [currentWidth, setCurrentWidth] = useState(getWidth());

		useEffect(() => {
			function handleResize() {
				setCurrentWidth(getWidth());
			}

			window.addEventListener('resize', handleResize);
			return () => window.removeEventListener('resize', handleResize);
		}, []);

		return currentWidth;
	}

	const width = useWidth();

	const data = reverseWavey ? waveyData.waveyAbout : waveyData.waveyServices

	const { path, classContainer, classWavey } = data

	const viewSize = width < 1000 ? "0 0 500 250" : "0 0 500 150"

	return(
		<div className="wavey">
			<div className="wavey__relative">
			<div className={`wavey-container ${ classContainer }`}>
				<svg viewBox={ viewSize } preserveAspectRatio="none" className="wavey-sizes">
					<path d={ path }
						className={ classWavey }
					>
					</path>
				</svg>
			</div>
			</div>
		</div>
	)
}

Wavey.defaultProps = {
  reverseWavey:false
};

export default Wavey
