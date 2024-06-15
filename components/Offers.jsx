"use client";
import React, { useRef } from "react";
import offerImg from "@/images/offer-1.png";
import offerImg2 from "@/images/offer-2.png";
import offerImg3 from "@/images/offer-3.png";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Offers() {
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);
  const imgRef3 = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);

  useGSAP(() => {
    const animateImage = (imgElement) => {
      if (!imgElement) return;
      gsap.set(imgElement, { scale: 0 });
      gsap.fromTo(
        imgElement,
        { scale: 0 },
        {
          scale: 1,
          duration: 2,
          ease: "power3.out",
        }
      );
    };

    animateImage(imgRef1.current);
    animateImage(imgRef2.current);
    animateImage(imgRef3.current);
  }, []);

  useGSAP(() => {
    const animateText = (textElement) => {
      if (!textElement) return;
      gsap.set(textElement, { x: "-100%", opacity: 0 });
      gsap.fromTo(
        textElement,
        { x: "-100%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );
    };

    animateText(textRef1.current);
    animateText(textRef2.current);
    animateText(textRef3.current);
  }, []);

  return (
    <div className="mt-[3rem]">
      <h1 className="font-semibold">Special Offers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-8 mt-7">
        <div className="relative col-span-1 sm:col-span-1 md:col-span-1 bg-gradient-to-r from-orange-500 to-yellow-500 h-36 rounded-lg">
          <Image
            ref={imgRef1}
            src={offerImg}
            alt="Special Offer"
            width={0}
            height={0}
            className="absolute right-[-8px] top-[-30px] w-36 md:w-28 lg:w-40 sm:hidden md:flex"
          />
          <div ref={textRef1} className="p-4 text-white">
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

        <div className="relative col-span-1 sm:col-span-1 md:col-span-1 bg-gradient-to-r from-red-500 to-pink-500 h-36 rounded-lg">
          <Image
            ref={imgRef2}
            src={offerImg2}
            alt="Special Offer"
            width={0}
            height={0}
            className="absolute right-[-40px] top-[-55px] w-64 sm:hidden md:flex md:w-48 lg:w-64"
          />
          <div ref={textRef2} className="p-4 text-white">
            <h3 className="font-semibold text-2xl md:text-sm lg:text-2xl">
              Jacket zara
            </h3>
            <p>
              <span className="text-xl font-medium">New arrivals</span>
              <br />
              <span className="font-medium">199$</span>
            </p>
          </div>
        </div>

        <div className="relative col-span-1 sm:col-span-1 md:col-span-1 bg-gradient-to-br from-rose-400 to-rose-300 h-36 rounded-lg">
          <Image
            ref={imgRef3}
            src={offerImg3}
            alt="Special Offer"
            width={0}
            height={0}
            className="absolute right-[-8px] top-[-65px] w-40 sm:w-32 md:w-32 lg:w-40 sm:hidden md:flex"
          />
          <div ref={textRef3} className="p-4 text-white">
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
