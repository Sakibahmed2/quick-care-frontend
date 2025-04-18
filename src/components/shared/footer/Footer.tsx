import Container from "@/components/ui/Container";
import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-slate-50 pt-10 mt-10">
      <Container>
        <div className="md:flex justify-between items-start gap-8 space-y-5 md:space-y-0">
          <div>
            <div className="flex items-center gap-2">
              <Image src={logo} height={48} width={48} alt="logo" />
              <h1 className="text-3xl font-semibold">
                Quick<span className="text-primary">Care</span>
              </h1>
            </div>
            <p className="text-slate-600 text-sm w-72">
              Effortlessly schedule your medical appointments with Doccure.
              Connect with healthcare professionals, manage appointments &
              prioritize your well being
            </p>
          </div>

          <div>
            <p className="font-medium">Company</p>
            <ul className="text-sm text-slate-600 space-y-2 mt-3">
              <li>About</li>
              <li>Services</li>
              <li>Doctors</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <p className="font-medium">Specialties</p>
            <ul className="text-sm text-slate-600 space-y-2 mt-3">
              <li>Primary care</li>
              <li>Dental</li>
              <li>Therapy</li>
              <li>Cardiology</li>
            </ul>
          </div>

          <div>
            <p className="font-medium">Contact us</p>
            <ul className="text-sm text-slate-600 space-y-2 mt-3">
              <li className="flex items-center gap-2">
                <span>
                  <MapPin size={18} />
                </span>
                <span>1234 North Avenue Luke Lane</span>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <Phone size={18} />
                </span>
                <span>+1233445523</span>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <Mail size={18} />
                </span>
                <span>email@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium">Join our newsletter</p>

            <div className="flex mt-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-2 px-4 rounded-none border border-gray-300 focus:outline-none focus:border-primary"
              />
              <button className="btn-small bg-primary text-white">
                Subscribe
              </button>
            </div>

            <div></div>
          </div>
        </div>
      </Container>
      <div className="bg-slate-100 py-4 mt-8">
        <p className="text-center text-slate-600">
          &copy; 2021 QuickCare. All rights reserved | Designed by Sakib
        </p>
      </div>
    </div>
  );
};

export default Footer;
