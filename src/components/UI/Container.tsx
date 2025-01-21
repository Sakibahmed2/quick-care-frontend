import { cn } from "@/utils/cn";
import React from "react";

type TContainer = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainer) => {
  return (
    <div className={cn("w-full max-w-[1280px] mx-auto px-4  ", className)}>
      {children}
    </div>
  );
};

export default Container;
