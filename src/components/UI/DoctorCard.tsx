/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/utils/cn";
import Image from "next/image";
import React from "react";

const DoctorCard = ({ doctor }: { doctor: any }) => {
  const { name, img, specialty, experience, isAvailable } = doctor || {};

  return (
    <div className="relative bg-slate-100 rounded-lg shadow-sm p-6 w-72 mx-auto text-center">
      {/* Profile Image */}
      <div className="relative -top-10 flex justify-center">
        <Image
          src={img}
          alt={name}
          className="bg-primary/80 h-28 w-28  rounded-full border-4 border-white"
        />
      </div>

      {/* Doctor Details */}
      <div className="-mt-8">
        <h3 className="text-xl font-medium">{name}</h3>
        <p className="text-gray-600">{specialty}</p>
        <p className="text-xs text-gray-500 border-2 border-primary my-2 w-24 mx-auto rounded-full">
          {experience} exp
        </p>
        <div className="flex justify-center items-center gap-2 mt-2">
          <div
            className={cn(
              "size-2 rounded-full",

              isAvailable ? "bg-green-600" : "bg-red-600"
            )}
          ></div>
          <p
            className={cn(
              "text-sm",
              isAvailable ? "text-green-600" : "text-red-600"
            )}
          >
            {isAvailable ? "Available" : "Not available"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
