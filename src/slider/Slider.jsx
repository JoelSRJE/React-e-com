import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlideData } from "../utils/products";
import Slides from "./slides";

const SliderHome = () => {
  const settings = {
    nav: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <section className="Slide">
      <div>
        <Slider {...settings}>
          {SlideData.map((value, index) => {
            return (
              <Slides
                key={index}
                title={value.title}
                cover={value.cover}
                desc={value.desc}
              />
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default SliderHome;
