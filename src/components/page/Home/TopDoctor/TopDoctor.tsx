import React from "react";
import doctor1 from "@/assets/doctors/doctor1.png";
import doctor2 from "@/assets/doctors/doctor2.png";
import DoctorCard from "@/components/UI/DoctorCard";

const doctors = [
  {
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

const TopDoctor = () => {
  return (
    <div className="mt-20 mb-20">
      <div>
        <h2 className="text-4xl font-medium text-center">Top Doctors</h2>
        <p className="text-center text-slate-600 mt-2">
          Choose from our top-rated doctors and schedule an appointment today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="btn-small border-2 border-primary rounded-md bg-primary/5 hover:bg-primary/15 transition-all ease-in-out duration-300">
          View more
        </button>
      </div>
    </div>
  );
};

export default TopDoctor;
