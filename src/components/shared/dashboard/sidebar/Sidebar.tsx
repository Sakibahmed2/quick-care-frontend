"use client";

import { cn } from "@/lib/utils";
import { sidebarItems } from "@/utils/sidebarItems";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();

  console.log(pathName)

  const matchPath = (path: string) => {
    const currentSegments = pathName.split("/").filter(Boolean);
    const targetSegments = path.split("/").filter(Boolean);

    const currentLastTwo = currentSegments.slice(-2);
    const targetLastTwo = targetSegments.slice(-2);

    // check if any segment matches
    return currentLastTwo.some(seg => targetLastTwo.includes(seg));
  }

  return (
    <div className="bg-gray-50 border-r h-screen flex flex-col gap-2 pt-2">
      {sidebarItems("admin").map((item, idx) => {
        return (
          <Link
            href={`/dashboard/${item.path}`}
            key={idx}
            className={cn(
              "flex items-center py-2 px-4 mx-4 gap-6 cursor-pointer hover:bg-gray-200 text-sm rounded-md",
              matchPath(item.path) &&
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
