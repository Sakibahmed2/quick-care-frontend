import Sidebar from "@/components/shared/dashboard/sidebar/Sidebar";
import { TChildren } from "@/types/global";
import React from "react";

const DashboardLayout = ({ children }: TChildren) => {
  return (
    <div>
      <div className="w-full p-4 border-b">
        <p className="text-center">Navbar</p>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10 mt-10">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
