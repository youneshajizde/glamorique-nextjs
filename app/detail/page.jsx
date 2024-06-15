import React from "react";
import Link from "next/link";
import Links from "@/components/Links";
import Image from "next/image";
import midImg from "@/images/middle.jpg";
import model from "@/images/1.png";
function Page() {
  return (
    <div className="w-[90%] h-screen mx-auto">
      <div className="w-full h-screen grid grid-cols-3">
        <section className="bg-slate-800 h-full ">
          <ul className="flex space-x-8 p-4 items-center">
            <li className="font-semibold">
              <span className="text-blue-700">Glam</span>orique
            </li>
            <Links label={"New"} />
            <Links label={"Categories"} />
          </ul>
        </section>
        <section className="h-full relative">
          <Image
            src={midImg}
            width={0}
            height={0}
            sizes="100vw"
            fill
            objectFit="cover"
            className="relative inset-0"
          />
          <div className="absolute inset-0 bg-white opacity-50"></div>
          <div
            className="absolute top-32 left-2 text-[6rem] font-black text-white"
            style={{ lineHeight: 1 }}
          >
            <h1>
              NEW
              <br />
              ZEST
              <br />
              ON
            </h1>
          </div>

          <Image
            src={model}
            layout="intrinsic"
            width={320}
            height={480} // Update to a fixed or proportional height
            className="absolute w-80 left-10 bottom-0"
            alt="Model Image"
          />
        </section>

        <section className="bg-slate-600 h-full"></section>
      </div>
    </div>
  );
}

export default Page;
