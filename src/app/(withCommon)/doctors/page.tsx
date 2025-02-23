import Container from "@/components/UI/Container";
import React from "react";
import doctor1 from "@/assets/doctors/doctor1.png";
import doctor2 from "@/assets/doctors/doctor2.png";
import { cn } from "@/utils/cn";
import DoctorCard from "@/components/UI/DoctorCard";

const doctors = [
  {
    id: "1",
    name: "Dr. Emily Carter",
    img: doctor1,
    specialty: "Cardiologist",
    experience: "10 years",
    about:
      "Dr. Carter specializes in treating heart-related conditions and is known for her compassionate approach.",
    fees: "$150",
    isAvailable: true,
  },
  {
    id: "2",
    name: "Dr. Michael Johnson",
    img: doctor2,
    specialty: "Dermatologist",
    experience: "8 years",
    about:
      "Dr. Johnson has extensive experience in treating skin diseases and providing advanced dermatological care.",
    fees: "$120",
    isAvailable: false,
  },
  {
    id: "3",
    name: "Dr. Sarah Williams",
    img: doctor2,
    specialty: "Pediatrician",
    experience: "12 years",
    about:
      "Dr. Williams is dedicated to providing exceptional healthcare to children of all ages.",
    fees: "$100",
    isAvailable: true,
  },
  {
    id: "4",
    name: "Dr. James Anderson",
    img: doctor1,
    specialty: "Orthopedic Surgeon",
    experience: "15 years",
    about:
      "Dr. Anderson is a leading expert in treating bone and joint issues, ensuring patients recover quickly.",
    fees: "$200",
    isAvailable: true,
  },
];

const specialties = [
  {
    name: "Cardiologist",
  },
  {
    name: "Dentist",
  },
  {
    name: "Neurologist",
  },
  {
    name: "Gastroenterologist",
  },
  {
    name: "Psychiatry",
  },
];

const DoctorsPage = () => {
  return (
    <Container className="mt-10">
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-1">
          {specialties.map((specialty, idx) => (
            <p
              key={idx}
              className={cn(
                "border border-slate-400 text-slate-700 mt-3 p-2 text-center rounded-md",
                specialty.name === "Cardiologist"
                  ? "bg-blue-100 border-none"
                  : ""
              )}
            >
              {specialty.name}
            </p>
          ))}
        </div>
        <div className="col-span-4 grid grid-cols-3 gap-12 ">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default DoctorsPage;
