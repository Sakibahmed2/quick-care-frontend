"use client";

import doctor1 from "@/assets/doctors/doctor1.png";
import doctor2 from "@/assets/doctors/doctor2.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, SquarePlus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import CreateDoctorModal from "./_components/CreateDoctorModal";

const doctors = [
  {
    id: "1 ",
    name: "Dr. Emily Carter",
    img: doctor1,
    specialty: "Cardiologist",
    experience: "10 years",
    about:
      "Dr. Carter specializes in treating heart-related conditions and is known for her compassionate approach.",
    fees: "$150",
    isAvailable: true,
  },
  {
    id: "2",
    name: "Dr. Michael Johnson",
    img: doctor2,
    specialty: "Dermatologist",
    experience: "8 years",
    about:
      "Dr. Johnson has extensive experience in treating skin diseases and providing advanced dermatological care.",
    fees: "$120",
    isAvailable: false,
  },
  {
    id: "3",
    name: "Dr. Sarah Williams",
    img: doctor2,
    specialty: "Pediatrician",
    experience: "12 years",
    about:
      "Dr. Williams is dedicated to providing exceptional healthcare to children of all ages.",
    fees: "$100",
    isAvailable: true,
  },
  {
    id: "4",
    name: "Dr. James Anderson",
    img: doctor1,
    specialty: "Orthopedic Surgeon",
    experience: "15 years",
    about:
      "Dr. Anderson is a leading expert in treating bone and joint issues, ensuring patients recover quickly.",
    fees: "$200",
    isAvailable: true,
  },
];

const AdminDoctorPage = () => {
  const [searchParam, setSearchParam] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  console.log(searchParam);

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-medium">All doctors </h1>
          <p className="text-gray-500 w-10/12 ">
            Here you can view, add, edit, and delete doctors from the system.
          </p>
        </div>

        <Button size={"lg"} onClick={() => setIsOpen(true)}>
          <SquarePlus size={24} />
          Add doctor{" "}
        </Button>
      </div>

      <div className="border mt-8 rounded-lg">
        <div className="flex justify-between items-center mb-4 p-4">
          <Input
            type="text"
            placeholder="Search doctors"
            StartIcon={Search}
            onChange={(e) => setSearchParam(e.target.value)}
            className="w-1/3 py-6 "
          />

          <Select>
            <SelectTrigger className="w-[180px] py-6">
              <SelectValue placeholder={`Sorted by: `} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sort by</SelectLabel>

                <SelectItem value="createdAt">Newest</SelectItem>
                <SelectItem value="-createdAt">Oldest</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <Table>
          <TableHeader className="rounded-md">
            <TableRow className="overflow-hidden rounded-md bg-gray-100">
              <TableHead>Name</TableHead>
              <TableHead>Specialty</TableHead>
              <TableHead>Availability</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {doctors.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.img}
                      alt={item.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex flex-col items-start">
                      <p className="font-semibold">{item.name}</p>{" "}
                      <Badge variant={"outline"} className="text-gray-500">
                        {item.experience}
                      </Badge>
                    </div>
                  </div>
                </TableCell>

                <TableCell>
                  <p>{item.specialty}</p>
                </TableCell>

                <TableCell>
                  <Badge
                    variant={item.isAvailable ? "success" : "danger"}
                    className="capitalize"
                  >
                    {item.isAvailable ? "Available" : "Not available"}
                  </Badge>
                </TableCell>

                <TableCell>
                  <div className="flex items-center space-x-4">
                    <Button variant={"outline"} size={"sm"}>
                      Edit
                    </Button>
                    <Button variant={"destructive"} size={"sm"}>
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Create Doctor Modal */}
      <CreateDoctorModal isDialogOpen={isOpen} setIsDialogOpen={setIsOpen} />
    </div>
  );
};

export default AdminDoctorPage;
