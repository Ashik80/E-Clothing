import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "./Products.css";
import Slider from "react-slick";
import SlideUp from "../components/SlideUp";

const Products = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <SlideUp offset={150}>
      <div
        className="products"
      >
        <Slider {...settings}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Slider>
      </div>
    </SlideUp>
  );
};

export default Products;
