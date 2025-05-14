import Sidebar from "@/components/shared/dashboard/sidebar/Sidebar";
import { TChildren } from "@/types/global";
import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";

const DashboardLayout = ({ children }: TChildren) => {
  return (
    <div>
      <div className="w-full py-2 px-4 border-b fixed top-0 bg-white z-50">
        <Link href={"/"} className="flex items-center gap-2">
          <Image src={logo} height={48} width={48} alt="logo" />
          <h1 className="text-3xl font-semibold">
            Quick<span className="text-primary">Care</span>
          </h1>
        </Link>
      </div>

      <div className="flex ">
        <div className="w-1/6 fixed top-16 h-screen  z-40">
          <Sidebar />
        </div>
        <div className="w-5/6 ml-[16.666667%] mt-20 px-6">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
