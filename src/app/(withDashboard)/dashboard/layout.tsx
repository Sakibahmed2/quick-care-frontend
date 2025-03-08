import Sidebar from "@/components/shared/dashboard/sidebar/Sidebar";
import { TChildren } from "@/types/global";
import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";

const DashboardLayout = ({ children }: TChildren) => {
  return (
    <div>
      <div className="w-full py-2 px-4 border-b">
        <div className="flex items-center gap-2">
          <Image src={logo} height={48} width={48} alt="logo" />
          <h1 className="text-3xl font-semibold">
            Quick<span className="text-primary">Care</span>
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-12 ">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10 mt-10 mx-6">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
