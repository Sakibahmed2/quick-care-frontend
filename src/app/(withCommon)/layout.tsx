import { TChildren } from "@/types/global";
import React from "react";

const CommonLayout = ({ children }: TChildren) => {
  return (
    <div>
      <h1>Common Layout</h1>
      {children}
    </div>
  );
};

export default CommonLayout;
