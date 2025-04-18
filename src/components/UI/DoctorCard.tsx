/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./badge";
import { Card, CardContent, CardHeader } from "./card";
import { Separator } from "./separator";

const DoctorCard = ({ doctor }: { doctor: any }) => {
  const { id, name, img, specialty, isAvailable } = doctor || {};

  return (
    <Link href={`/doctors/${id}`} passHref>
      <Card className="w-full max-w-sm overflow-hidden">
        <div className="relative bg-primary/10">
          <div className="absolute top-3 right-4 bg-white rounded-md px-2 py-1  text-xs border">
            $200
          </div>
          {/* <Avatar className="w-full h-48 rounded-none">
            <AvatarImage
              src={img}
              alt="Doctor profile"
              className="object-cover w-full h-full"
            />
            <AvatarFallback className="rounded-none">DR</AvatarFallback>
          </Avatar> */}
          <Image
            src={img}
            alt={name}
            className=" h-[200px] w-[200px] flex justify-center items-center mx-auto "
          />
        </div>

        <CardHeader className="p-6 pb-2">
          <div className="flex justify-between items-start">
            <div>
              <h3 className=" font-medium text-slate-800">{name}</h3>
              <p className="text-slate-500 text-xs">{specialty}</p>
            </div>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className="p-6 pt-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-slate-500" />
              <span className="text-slate-700 text-sm">Newyork, USA</span>
            </div>
            <Badge
              variant="outline"
              className={cn(
                "flex items-center gap-1",

                isAvailable
                  ? "bg-green-50 text-green-500 border-green-100 "
                  : "bg-red-50 text-red-500 border-red-100"
              )}
            >
              <span
                className={cn(
                  "h-2 w-2 rounded-full ",
                  isAvailable ? "bg-green-500" : "bg-red-500"
                )}
              ></span>
              Available
            </Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default DoctorCard;
