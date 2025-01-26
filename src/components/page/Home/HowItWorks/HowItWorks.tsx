import React from "react";
import doctorLookImg from "@/assets/appointment-doc-img.png";
import Image from "next/image";
import {
  BriefcaseMedical,
  CalendarDays,
  CircleUserRound,
  Search,
} from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="bg-slate-50 md:flex items-center md:w-full pt-10">
      <div className="md:w-1/2">
        <Image
          src={doctorLookImg}
          height={400}
          width={400}
          alt="Doctor Look"
          className="transform -scale-x-100"
        />
      </div>

      <div className="">
        <div className="text-center md:text-start mt-5 md:mt-0">
          <p className="text-primary font-semibold">How it works</p>
          <h2 className="text-2xl md:text-4xl font-medium">
            4 easy steps to get your solution
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pr-5 ">
          <div className="flex items-center space-x-4">
            <p className="text-primary bg-primary/10 p-3 rounded-md">
              <Search size={32} />
            </p>
            <div>
              <h3 className="font-medium">Search for a doctor</h3>
              <p className="text-slate-600 text-sm">
                Find the right doctor for your needs and book an appointment
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <p className="text-primary bg-primary/10 p-3 rounded-md">
              <CircleUserRound size={32} />
            </p>
            <div>
              <h3 className="font-medium">Check doctor profile</h3>
              <p className="text-slate-600 text-sm">
                Explore detailed doctor profiles on our platform to make
                informed healthcare decision.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <p className="text-primary bg-primary/10 p-3 rounded-md">
              <CalendarDays size={32} />
            </p>
            <div>
              <h3 className="font-medium">Schedule appointment</h3>
              <p className="text-slate-600 text-sm">
                After choose your preferred doctor, select a convenient time
                slot, & confirm your appointment.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <p className="text-primary bg-primary/10 p-3 rounded-md">
              <BriefcaseMedical size={32} />
            </p>
            <div>
              <h3 className="font-medium">Get your solution</h3>
              <p className="text-slate-600 text-sm">
                Discuss your health concerns with the doctor and receive
                personalized advice & solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
