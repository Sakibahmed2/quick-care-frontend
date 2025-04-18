import HeroSection from "@/components/page/Home/HeroSection/HeroSection";
import HowItWorks from "@/components/page/Home/HowItWorks/HowItWorks";
import Specialty from "@/components/page/Home/Specialty/Specialty";
import TopDoctor from "@/components/page/Home/TopDoctor/TopDoctor";
import Container from "@/components/ui/Container";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <Container>
      <div>
        <Image
          src={"/bg-svg-1.svg"}
          width={500}
          height={500}
          className="h-[500px] w-[500px] absolute top-0 -left-10 -z-50"
          alt="Bg svg"
        />
      </div>
      <HeroSection />

      <Specialty />

      <TopDoctor />

      <HowItWorks />
    </Container>
  );
};

export default HomePage;
