import Navbar from "@/components/shared/navbar/Navbar";
import Container from "@/components/UI/Container";
import { TChildren } from "@/types/global";
import React from "react";

const CommonLayout = ({ children }: TChildren) => {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  );
};

export default CommonLayout;
