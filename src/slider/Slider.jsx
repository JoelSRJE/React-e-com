import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlideData } from "../utils/Products";
import Slides from "./slides";

const SliderHome = () => {
  /* Inställningar för slide */
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
          {SlideData.map((value, idx) => {
            return (
              <Slides
                key={idx}
                title={value.title}
                cover={value.cover}
                desc={value.desc}
                route={value.route}
              />
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default SliderHome;
