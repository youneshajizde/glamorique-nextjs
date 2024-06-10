"use client";

import { useState, useEffect, useRef } from "react";
import Links from "./Links";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import avatar from "@/images/avatar.jpg";
function Navbar() {
  const [isOpen, setIsOpen] = useState();
  const sidebarRef = useRef(null);

  // Function to handle clicks outside of the sidebar
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Add event listener for clicks outside of the sidebar
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Add event listener for clicks outside of the sidebar
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to handle screen size changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");
    const handleScreenSizeChange = () => {
      if (mediaQuery.matches) {
        setIsOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleScreenSizeChange);

    // Clean up the event listener on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleScreenSizeChange);
    };
  }, []);
  return (
    <div className=" flex  justify-between items-center py-4 ">
      <div
        ref={sidebarRef}
        className={` fixed h-screen bg-white z-40  p-0 left-0 top-0 transition-all duration-300 ease-in-out ${
          isOpen ? "w-[200px]" : "w-0"
        }`}
      >
        <ul className={`${isOpen ? "flex" : "hidden"} flex-col space-y-5 p-4`}>
          <li className="font-semibold">
            <span className="text-blue-700">Glam</span>orique
          </li>
          <Links label={"New"} />
          <Links label={"Categories"} />
        </ul>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <div>
        <ul className="hidden sm:flex space-x-16 font-medium items-center">
          <li className="font-semibold">
            <span className="text-blue-700">Glam</span>orique
          </li>
          <Links label={"New"} />
          <Links label={"Categories"} />
        </ul>

        <span className="flex sm:hidden">
          <IoMenu className="text-2xl" onClick={() => setIsOpen(!isOpen)} />
        </span>
      </div>
      <div>
        <ul className="flex space-x-32 sm:space-x-6  md:space-x-36 lg:space-x-80 items-center text-xl tex t-gray-600 ">
          <li className="hidden sm:flex  space-x-3">
            <IoSearchOutline />
            <input
              className="text-sm hover:border-b hover:border-gray-300 transition duration-300 ease-in-out focus:outline-none"
              type="text"
              placeholder="search for you product..."
            />
          </li>

          <li className="flex items-center space-x-7 text-gray-700">
            <span className="p-3 relative w-6 h-6">
              {" "}
              {/* Define specific width and height here */}
              <Image
                src={avatar}
                layout="fill"
                objectFit="cover"
                className="absolute rounded-full"
              />
            </span>
            <span>
              <FaRegMoon />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
