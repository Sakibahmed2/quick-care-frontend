"use client";

import { cn } from "@/lib/utils";
import { sidebarItems } from "@/utils/sidebarItems";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <div className="bg-gray-50 border-r h-screen flex flex-col gap-2 pt-2">
      {sidebarItems("doctor").map((item, idx) => {
        return (
          <Link
            href={`/dashboard/${item.path}`}
            key={idx}
            className={cn(
              "flex items-center py-2 px-4 mx-4 gap-6 cursor-pointer hover:bg-gray-200 text-sm rounded-md",
              pathName === `/dashboard/${item.path}` &&
              "text-primary bg-primary/10 "
            )}
          >
            <div>{item.icon}</div>
            <p className="truncate">{item.title}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
