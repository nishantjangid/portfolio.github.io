'use client'
import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero_section from "./components/HeroSection/Hero_section";
import SpecialtiesSection from "./components/SpecialtiesSection/SpecialtiesSection";
import SkillSection from "./components/SkillSection/SkillSection";
import Footer from "./components/Footer";
import MyWorkSection from "./components/MyWorkSection/MyWorkSection";


const App = () => {

  return (
    <div>
      <Hero_section />
      <SpecialtiesSection/>
      <SkillSection/>
      <MyWorkSection/>
      <Footer/>
    </div>
  );
};

export default App;
