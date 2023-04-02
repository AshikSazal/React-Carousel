import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          src="https://via.placeholder.com/800x400.png?text=Slide+1"
          alt="Slide 1"
          width="100vh"
        />
        <div className="carousel-text">
          <h2>Slide 1 Title</h2>
          <p>Slide 1 Description</p>
        </div>
      </div>
      <div>
        <img
          src="https://via.placeholder.com/800x400.png?text=Slide+2"
          alt="Slide 2"
        />
        <div className="carousel-text">
          <h2>Slide 2 Title</h2>
          <p>Slide 2 Description</p>
        </div>
      </div>
      <div>
        <img
          src="https://via.placeholder.com/800x400.png?text=Slide+3"
          alt="Slide 3"
          width="100%"
        />
        <div className="carousel-text">
          <h2>Slide 3 Title</h2>
          <p>Slide 3 Description</p>
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;
