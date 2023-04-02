import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";
import './MultiCarousel.css';

const MultiCarousel = () => {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="root">
      <h1>React Multi Carousel</h1>
      <Carousel infinite={true} responsive={responsive}>
      {product}
    </Carousel>
    </div>
  );
};

export default MultiCarousel;
