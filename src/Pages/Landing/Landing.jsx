import React from "react";
import Header from "../../Components/Header/Header";
import CarouselEffect from "../../Components/Carousel/CarouselEffect";
import Product from "../../Components/Product/Product";
import LayOut from "../../Components/LayOut/LayOut";
import Category from "../../Components/Category/Category";

function Landing() {
  return (
    <LayOut>
      <CarouselEffect />
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing;
