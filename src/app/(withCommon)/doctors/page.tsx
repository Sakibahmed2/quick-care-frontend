/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Container from "@/components/ui/Container";
import React, { useState } from "react";
import doctor1 from "@/assets/doctors/doctor1.png";
import doctor2 from "@/assets/doctors/doctor2.png";
import DoctorCard from "@/components/ui/DoctorCard";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

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
  const [searchParam, setSearchParam] = useState("");

  return (
    <Container className="pt-10 pb-10 backdrop-blur-md">
      <div className="flex items-center">
        <div className=" mb-5">
          <h1 className="text-3xl font-medium">Doctors</h1>

          <p className="text-gray-500 w-10/12 ">
            Find the best doctors in your area. Search by specialty or name to
            find the right doctor for you.
          </p>
        </div>

        <div className="w-1/3 mb-5 ml-auto">
          <Input
            type="text"
            placeholder="Search doctors"
            StartIcon={Search}
            onChange={(e) => setSearchParam(e.target.value)}
            className="py-6 "
          />
        </div>
      </div>

      <hr className="border mb-4" />

      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-1 ">
          {specialties.map((specialty, idx) => (
            <p
              key={idx}
              className={cn(
                "border border-slate-400 text-slate-700 mb-3 p-2 text-center rounded-md",
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
