'use client'
import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex pl-4 xl:pl-0">
      <div className="flex-1 flex items-center justify-between border-b border-[#3d5a80] border-opacity-40">
        <a href="/">
          <img src={logo.src} alt="logo" className="w-24 sm:w-15" />
        </a>
        <a
          href="contact.html"
          className="flex items-center flex-wrap py-[6px] px-3 text-[15px] font-bold text-active leading-none mr-2 transition-all duration-300 hover:text-orange md:hover:font-light group"
        >
          Let’s Talk
          <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17L17 7"
                stroke="currentColor"
                stroke-opacity="0.9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M7 7H17V17"
                stroke="currentColor"
                stroke-opacity="0.9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
        </a>
      </div>

      <div
        id="offcanvas-toggle"
        className="flex bg-active flex flex-wrap  py-7 px-[38px] cursor-pointer bg-black"
      >
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <nav className={`flex-1 fixed m:auto ${!isOpen && `hidden`} right-0 top-0 bg-black text-white lg:w-2/12 2xl:w-2/12 sm:w-2/12 w-10/12 w-screen`}>
        <div>
        <div
        id="offcanvas-toggle"
        className="flex-none bg-active flex items-center py-5 flex-wrap justify-center cursor-pointer bg-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        <button >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        </div>
        </div>
        <ul
          className="items-center flex flex-col justify-center">
          <li className="p-5 w-full px-3  text-center hover:bg-white hover:text-black">
            <a
              href="#"
              className="text-[15px] font-bold text-active leading-none transition-all duration-300 hover:text-orange md:hover:font-light"
            >
              Home
            </a>
          </li>
          <li  className="p-5 w-full px-3  text-center hover:bg-white hover:text-black">
            <a
              href="#"
              className="text-[15px] font-bold text-active leading-none transition-all duration-300 hover:text-orange md:hover:font-light"
            >
              About
            </a>
          </li>
          <li  className="p-5 w-full px-3  text-center hover:bg-white hover:text-black">
            <a
              href="#"
              className="text-[15px] font-bold text-active leading-none transition-all duration-300 hover:text-orange md:hover:font-light">
              Services
              </a>
            </li>
          </ul>
      </nav>
    </div>
  );
};

export default Navbar;
