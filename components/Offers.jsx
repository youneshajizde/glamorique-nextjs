import React from "react";
import offerImg from "@/images/offer-1.png";
import offerImg2 from "@/images/offer-2.png";
import offerImg3 from "@/images/offer-3.png";
import Image from "next/image";

function Offers() {
  return (
    <div className="mt-[3rem]">
      <h1 className="font-semibold">Special Offers</h1>
      <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3  gap-8 mt-7">
        <div class="relative col-span-1 sm:col-span-1 md:col-span-1  bg-gradient-to-r from-orange-500 to-yellow-500 h-36 rounded-lg">
          <Image
            src={offerImg} // Path from the public directory
            alt="Special Offer"
            width={0} // Adjust width as needed
            height={0} // Adjust height as needed
            className="absolute right-[-8px] top-[-30px] w-36 md:w-28 lg:w-40 sm:hidden md:flex"
          />
          <div className="p-4 text-white">
            <h3 className="text-2xl md:text-sm lg:text-2xl font-semibold">
              Nike caprice
            </h3>
            <p>
              <span className="text-3xl font-semibold">10%</span>
              <br />
              <span className="font-medium">Discount</span>
            </p>
          </div>
        </div>

        <div class="relative col-span-1 sm:col-span-1 md:col-span-1 bg-gradient-to-r from-red-500 to-pink-500 h-36 rounded-lg">
          <Image
            src={offerImg2} // Path from the public directory
            alt="Special Offer"
            width={0} // Adjust width as needed
            height={0} // Adjust height as needed
            className="absolute right-[-40px] top-[-55px] w-64 sm:hidden md:flex md:w-48 lg:w-64"
          />
          <div className="p-4 text-white">
            <h3 className=" font-semibold text-2xl md:text-sm lg:text-2xl">
              Jacket zara
            </h3>
            <p>
              <span className="text-xl font-medium">New arrivals</span>
              <br />
              <span className="font-medium">199$</span>
            </p>
          </div>
        </div>

        <div class="relative col-span-1 sm:col-span-1 md:col-span-1 bg-gradient-to-br from-rose-400 to-rose-300 h-36 rounded-lg">
          <Image
            src={offerImg3} // Path from the public directory
            alt="Special Offer"
            width={0} // Adjust width as needed
            height={0} // Adjust height as needed
            className="absolute right-[-8px] top-[-65px] w-40 sm:w-32 md:w-32 lg:w-40 sm:hidden md:flex"
          />
          <div className="p-4 text-white">
            <h3 className="font-semibold text-2xl md:text-sm lg:text-2xl">
              Climax cruz
              <br /> <span>in pink</span>
            </h3>
            <p>
              <span className="text-sm font-medium">
                Nike's new collection 2025
              </span>
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
