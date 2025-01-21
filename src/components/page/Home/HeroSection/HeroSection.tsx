import doctorGroup from "@/assets/doc-header-img.svg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="md:flex justify-between items-center mt-10 bg-primary/90 rounded-lg md:h-[500px] relative px-4 pt-4 md:px-0 md:pt-0">
      <div className="md:pl-20 text-center md:text-start md:w-[700px] ">
        <h1 className=" text-4xl md:text-6xl font-semibold text-white">
          Find the best doctors in your area
        </h1>
        <p className="text-slate-200 mt-2 mb-4">
          Book an appointment with the best doctors in your area
        </p>
        <button className="btn bg-white rounded-full">Book appointment</button>
      </div>
      <div className="md:absolute bottom-0 -right-24">
        <Image src={doctorGroup} height={1000} width={700} alt="Doctor Group" />
      </div>
    </div>
  );
};

export default HeroSection;
