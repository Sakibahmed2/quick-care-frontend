"use client";

import bgImg from "@/assets/heart-bg.svg";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroSection = () => {
  useGSAP(() => {
    gsap.to("#hero-img", {
      opacity: 0.9,
      scale: 1.05,
      y: -10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.from("#text-animation", {
      x: -400,
      stagger: 1.2,
      duration: 1,
      opacity: 0,
      ease: "power1.inOut",
    });
  });

  return (
    <div className="md:flex justify-between items-center mt-10 rounded-lg md:h-[500px] px-4 pt-4 md:px-0 md:pt-0 w-full backdrop-blur-sm ">
      <div
        id="text-animation"
        className="text-center md:text-start md:w-1/2 md:ml-16"
      >
        <h1 className=" text-3xl md:text-6xl font-semibold ">
          Find the best doctors in your area
        </h1>
        <p className="secondary-text mt-2 mb-4">
          Book an appointment with the best doctors in your area
        </p>
        <Button className="rounded-full">
          Book appointment
          <span>
            <MoveRight />
          </span>
        </Button>
      </div>
      <div className="md:w-1/2 md:mt-40 md:-mr-20" id="hero-img">
        <Image
          src={bgImg}
          height={1000}
          width={600}
          alt="Doctor Group"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAwIiBoZWlnaHQ9IjEwMDAiIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPjxpbWFnZSB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAwIiBoZWlnaHQ9IjEwMDAiIHhsaW5rOnNwYWNlPSJ1cmwoI2ltYWdlMSkiIHdpZHRoPSIxMDAwIiBoZWlnaHQ9IjEwMDAiIGZpbGw9IiNmZmZmZmYiIC8+PC9zdmc+"
        />
      </div>
    </div>
  );
};

export default HeroSection;
