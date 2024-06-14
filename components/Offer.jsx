import React from "react";

function Offer({ gradient, title, img }) {
  return (
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
  );
}

export default Offer;
