"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaRegHeart, FaHeart } from "react-icons/fa";

function Product({ name, brand, img, btn }) {
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const toggleHeart = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  return (
    <div className="relative w-[200px]  rounded-lg mt-4 shadow-lg">
      <span
        className="absolute w-8 h-8 bg-white p-1 shadow-md top-2 left-2 rounded-lg flex items-center justify-center cursor-pointer"
        onClick={toggleHeart}
      >
        {isHeartFilled ? (
          <FaHeart className="text-red-500" />
        ) : (
          <FaRegHeart className="text-gray-500" />
        )}
      </span>
      <div className="w-full">
        <img
          className=" h-48 rounded-xl object-cover mx-auto"
          src={img}
          alt=" "
        />
      </div>
      <div className="flex flex-col items-center">
        <h3 className="font-medium text-sm">{name}</h3>
        <span className="text-xs font-medium text-gray-500">{brand}</span>
        <button className="text-xs text-gray-500 border-2 rounded-lg py-1 px-2 mt-3">
          {btn}
        </button>
      </div>
    </div>
  );
}

export default Product;
