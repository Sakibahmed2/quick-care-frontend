import React from "react";
import doctor1 from "@/assets/doctors/doctor1.png";
import doctor2 from "@/assets/doctors/doctor2.png";
import Container from "@/components/UI/Container";
import Image from "next/image";
import { CircleAlert } from "lucide-react";

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

const SingleDoctorPage = async ({
  params,
}: {
  params: Promise<{ doctorId: string }>;
}) => {
  const doctorId = (await params).doctorId;

  console.log((await params).doctorId);

  const doctor = doctors.find((doctor) => doctor.id === doctorId);

  if (!doctor) {
    return <p>Doctor not found</p>;
  }

  const { name, img, specialty, experience, about, fees, isAvailable } = doctor;

  return (
    <Container className="mt-10">
      <div className="grid grid-cols-5">
        <div className="col-span-1">
          <Image
            src={img}
            alt="doctor image"
            className="bg-primary rounded-lg"
          />
        </div>

        <div className="col-span-4 border-2 rounded-lg p-5">
          <h2 className="text-3xl font-semibold">{name}</h2>
          <div className="flex items-center gap-2">
            <p className="text-gray-600 text-lg">{specialty}</p>
            <p className="text-gray-500 text-sm my-2 border border-black rounded-full w-full max-w-28 py-1 text-center">
              {experience} exp
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`size-2 rounded-full ${
                isAvailable ? "bg-green-600" : "bg-red-600"
              }`}
            ></div>
            <p
              className={`text-sm ${
                isAvailable ? "text-green-600" : "text-red-600"
              }`}
            >
              {isAvailable ? "Available" : "Not available"}
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold flex items-center gap-1">
              About <CircleAlert size={22} />
            </p>
            <span className="text-gray-600 mt-4">{about}</span>
          </div>
          <p className="text-gray-600 mt-4">
            Appointment Fees: <span className="font-semibold">{fees}</span>
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-medium">Booking a slot</h2>

        {/* Date for appointment */}
        <div className="flex gap-4 mt-4">
          <div className="px-5 py-3 w-full max-w-[150px] text-center rounded-full bg-primary text-white">
            Aug - 10
          </div>
          <div className="border border-slate-700 px-5 py-3 w-full max-w-[150px] text-center rounded-full ">
            Aug - 10
          </div>
          <div className="border border-slate-700 px-5 py-3 w-full max-w-[150px] text-center rounded-full ">
            Aug - 10
          </div>
          <div className="border border-slate-700 px-5 py-3 w-full max-w-[150px] text-center rounded-full ">
            Aug - 10
          </div>
        </div>

        {/* Time for appointment */}
        <div>
          <div className="flex gap-4 mt-4">
            <div className="px-3 py-1 w-full max-w-[100px] text-center rounded-full border-primary border bg-primary/5 text-sm">
              10:00 AM
            </div>
            <div className="border border-slate-700 px-3 py-1 w-full max-w-[100px] text-center rounded-full text-sm">
              10:00 AM
            </div>
          </div>
        </div>

        <button className="btn btn-primary mt-4 rounded-lg">
          Book an appointment
        </button>
      </div>
    </Container>
  );
};

export default SingleDoctorPage;
