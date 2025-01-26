import HeroSection from "@/components/page/Home/HeroSection/HeroSection";
import HowItWorks from "@/components/page/Home/HowItWorks/HowItWorks";
import Specialty from "@/components/page/Home/Specialty/Specialty";
import TopDoctor from "@/components/page/Home/TopDoctor/TopDoctor";
import Container from "@/components/UI/Container";
import React from "react";

const HomePage = () => {
  return (
    <Container>
      <HeroSection />

      <Specialty />

      <HowItWorks />

      <TopDoctor />
    </Container>
  );
};

export default HomePage;
