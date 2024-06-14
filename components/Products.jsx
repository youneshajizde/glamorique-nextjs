"use client";

import React, { useEffect, useState } from "react";
import Product from "./Product";
import fetchData from "@/lib/fetchData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Products() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,

    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [allproducts, setAllProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await fetchData(`/products?populate=*`);
      setAllProducts(data.data);
    })();
  }, []);

  const items = allproducts.map((product, index) => (
    <Product
      key={index}
      name={product.attributes.name}
      brand={product.attributes.brand}
      img={
        process.env.NEXT_PUBLIC_STRAPI_URL +
        product?.attributes?.image?.data[0]?.attributes?.url
      }
      btn={"Show more"}
    />
  ));
  console.log(items);

  return (
    <div className="mt-8 ">
      <h1 className="font-semibold">All Products</h1>

      <Slider {...settings}>{items}</Slider>
    </div>
  );
}

export default Products;

{
  /* */
}
