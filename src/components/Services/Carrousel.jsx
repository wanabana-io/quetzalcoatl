import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ServiceData } from './ServiceData';
import Card from "./Card";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1000 },
    items: 0
  },
  tablet: {
    breakpoint: { max: 1000, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1
  }
};

const Simple = ({ deviceType }) => {
  return (
    <Carousel
      ssr
      partialVisibile
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
      arrows={false}
      infinite={true}
      autoPlaySpeed={5000}
      transitionDuration={500}
      autoPlay={true}
    >

      <Card {...ServiceData.Planning} />
      <Card {...ServiceData.Design} />
      <Card {...ServiceData.Developing} />
      <Card {...ServiceData.Consulting} />

    </Carousel>
  );
};

export default Simple;
