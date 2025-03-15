import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type TChildren = {
  children: ReactNode;
};

export type TSpecialty = {
  name: string;
  image: StaticImageData;
};

export type TModalComponentsProps = {
  isDialogOpen: boolean;
  setIsDialogOpen: (isOpen: boolean) => void;
};
