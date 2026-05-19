"use client";

import useProfile from "@/hooks/useProfile";
import { cn } from "@/lib/utils";
import { sidebarItems } from "@/utils/sidebarItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const Sidebar = () => {
  const pathName = usePathname();
  const { profile, isAuthInitialized, isLoadingProfile } = useProfile();

  const role = profile?.role === "admin" || profile?.role === "doctor"
    ? profile.role
    : undefined;

  const items = useMemo(() => {
    return role ? sidebarItems(role) : [];
  }, [role]);


  const matchPath = (path: string) => {
    const normalizePath = (value: string) => value.replace(/\/+$/, "");

    const currentPath = normalizePath(pathName);
    const targetPath = normalizePath(`/dashboard/${path}`);

    return currentPath === targetPath;
  };

  if (!isAuthInitialized || isLoadingProfile) {
    return (
      <div className="bg-gray-50 border-r h-screen flex flex-col gap-2 pt-2 px-3">
        <div className="h-10 animate-pulse rounded bg-gray-200" />
        <div className="h-10 animate-pulse rounded bg-gray-200" />
        <div className="h-10 animate-pulse rounded bg-gray-200" />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 border-r h-screen flex flex-col gap-2 pt-2">
      {items.map((item, idx) => {
        return (
          <Link
            href={`/dashboard/${item.path}`}
            key={idx}
            className={cn(
              "flex items-center py-2 px-4 mx-2 gap-6 cursor-pointer hover:bg-gray-200 text-sm ",
              matchPath(item.path) &&
              "text-primary bg-primary/10 font-medium border-l-4 border-primary transition-all duration-100",
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
