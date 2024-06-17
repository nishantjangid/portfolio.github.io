import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero_section from "./HeroSection/Hero_section";

const Header = () => {
  return (
    <header id="sticky-header" className="xl:pl-12 absolute left-0 top-0 w-full z-10">
      <Navbar />
    </header>
  );
};

export default Header;
