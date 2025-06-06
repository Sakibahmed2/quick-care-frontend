import React from "react";
import brainImg from "@/assets/specialties/brain.png";
import cardiologyImg from "@/assets/specialties/cardiology.png";
import dentalImg from "@/assets/specialties/tooth.png";
import organImg from "@/assets/specialties/organ.png";
import disabledImg from "@/assets/specialties/disabled.png";

import { TSpecialty } from "@/types/global";
import SpecialtyCard from "@/components/ui/SpecialtyCard";

const specialties = [
  {
    name: "Cardiologist",
    image: cardiologyImg,
  },
  {
    name: "Dentist",
    image: dentalImg,
  },
  {
    name: "Neurologist",
    image: brainImg,
  },
  {
    name: "Gastroenterologist",
    image: organImg,
  },
  {
    name: "Psychiatry",
    image: disabledImg,
  },
];

const Specialty = () => {
  return (
    <div className="mt-44 ">
      <div className="w-full max-w-[500px] text-center mx-auto">
        <h2 className="text-2xl md:text-4xl font-medium">Find by specialty</h2>
        <p className="secondary-text mt-4">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 bg-primary/10 mt-10 mb-10 w-10/12 mx-auto px-10 py-5 rounded-3xl backdrop-blur-md">
        {specialties.map((specialty: TSpecialty, index: number) => (
          <SpecialtyCard key={index} specialty={specialty} />
        ))}
      </div>
    </div>
  );
};

export default Specialty;
