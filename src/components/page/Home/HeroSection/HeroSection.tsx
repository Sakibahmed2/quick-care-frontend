"use client";

import bgImg from "@/assets/heart-bg.svg";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

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
      delay: 0.5,
    });
  });

  return (
    <div
      className="md:flex justify-between items-center mt-20 rounded-lg md:h-[500px] px-4 pt-20 md:px-0 md:pt-0 w-full backdrop-blur-sm "
      id="hero-section"
    >
      <div
        id="text-animation"
        className="text-center md:text-start md:w-1/2 md:ml-16"
      >
        <h1 className=" text-3xl md:text-6xl font-semibold ">
          Find the <span className="text-primary ">Best Doctors</span> in your
          area
        </h1>
        <p className="secondary-text mt-2 mb-4">
          Find best doctors near you by specialty, location, and availability.
          Book appointments and read patient reviews easily.
        </p>
        <Link href="/doctors">
          <Button variant={"default"} size={"lg"} className="rounded-full">
            Book appointment
            <span>
              <MoveRight />
            </span>
          </Button>
        </Link>
      </div>
      <div className="md:w-1/2 mt-5 md:mt-40 md:-mr-20" id="hero-img">
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
