/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Badge } from "@/components/UI/badge";
import { Input } from "@/components/UI/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/UI/table";
import { Search } from "lucide-react";
import { useState } from "react";

const patients = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    age: 32,
    gender: "Male",
    disease: "Fever",
    appointmentDate: "2024-03-14",
    startTime: "10:00 AM",
    endTime: "10:30 AM",
    status: "Pending",
  },

  {
    id: "2",
    name: "Emily Johnson",
    email: "emily.j@example.com",
    age: 28,
    gender: "Female",
    disease: "Diabetes",
    appointmentDate: "2024-03-12",
    startTime: "11:00 AM",
    endTime: "11:30 AM",
    status: "Scheduled",
  },
  {
    id: "3",
    name: "Michael Brown",
    email: "michael.b@example.com",
    age: 45,
    gender: "Male",
    disease: "Heart Disease",
    appointmentDate: "2024-03-10",
    startTime: "12:00 PM",
    endTime: "12:30 PM",
    status: "Completed",
  },
  {
    id: "4",
    name: "John Doe",
    email: "john.doe@example.com",
    age: 32,
    gender: "Male",
    disease: "Fever",
    appointmentDate: "2024-03-14",
    startTime: "10:00 AM",
    endTime: "10:30 AM",
    status: "Cancelled",
  },
];

const DoctorPatientsPage = () => {
  const [searchParam, setSearchParam] = useState("");

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-medium">All my patients </h1>
          <p className="text-gray-500 w-10/12 ">
            Here you can see all your patients and their details
          </p>
        </div>
      </div>

      <div className="border mt-8 rounded-lg">
        <div className="flex justify-between items-center mb-4 p-4">
          <Input
            type="text"
            placeholder="Search patients"
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
            <TableRow className="overflow-hidden rounded-md">
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Appointment Date</TableHead>
              <TableHead>Start time</TableHead>
              <TableHead>End time</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell>{item.gender}</TableCell>
                <TableCell>{item.appointmentDate}</TableCell>
                <TableCell>{item.startTime}</TableCell>
                <TableCell>{item.endTime}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      item.status === "Pending"
                        ? "warning"
                        : item.status === "Scheduled"
                        ? "success"
                        : item.status === "Completed"
                        ? "default"
                        : "danger"
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DoctorPatientsPage;
