import { TSpecialty } from "@/types/global";
import Image from "next/image";
import React from "react";

const SpecialtyCard = ({ specialty }: { specialty: TSpecialty }) => {
  const { name, image } = specialty || {};

  return (
    <div className="flex flex-col items-center gap-1 ">
      <div className="bg-gradient-to-t from-primary/10 to-primary  p-5 rounded-full">
        <Image src={image} height={64} width={64} alt={name} />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default SpecialtyCard;
