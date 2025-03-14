/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

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
    phone: "+1 (234) 567-890",
    address: "123 Main St, New York, USA",
    disease: "Fever",
    doctor: "Dr. Smith",
    appointmentDate: "2024-03-14",
    status: "Admitted",
  },
  {
    id: "2",
    name: "Emily Johnson",
    email: "emily.j@example.com",
    age: 28,
    gender: "Female",
    phone: "+1 (987) 654-321",
    address: "456 Oak St, California, USA",
    disease: "Diabetes",
    doctor: "Dr. Williams",
    appointmentDate: "2024-03-12",
    status: "Discharged",
  },
  {
    id: "3",
    name: "Michael Brown",
    email: "michael.b@example.com",
    age: 45,
    gender: "Male",
    phone: "+1 (555) 123-456",
    address: "789 Pine St, Texas, USA",
    disease: "Heart Disease",
    doctor: "Dr. Brown",
    appointmentDate: "2024-03-10",
    status: "Under Treatment",
  },
];

const AdminPatientsPage = () => {
  const [searchParam, setSearchParam] = useState("");

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-medium">All patients </h1>
          <p className="text-gray-500 w-10/12 ">
            Here you can view and manage all patients. You can also add new
            patients.{" "}
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
              <TableHead>Doctor</TableHead>
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
                <TableCell>{item.doctor}</TableCell>
                <TableCell>{item.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminPatientsPage;
