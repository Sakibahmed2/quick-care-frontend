import HeroSection from "@/components/page/Home/HeroSection/HeroSection";
import Specialty from "@/components/page/Home/Specialty/Specialty";
import TopDoctor from "@/components/page/Home/TopDoctor/TopDoctor";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <HeroSection />

      <Specialty />

      <TopDoctor />
    </div>
  );
};

export default HomePage;
