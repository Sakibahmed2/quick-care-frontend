/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

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
import { useState } from "react";

export const transactionData = [
  {
    id: "1",
    patientName: "John Doe",
    doctorName: "Dr. Smith",
    amount: 500,
    method: "Credit Card",
    date: "2024-03-10",
    status: "Paid",
  },
  {
    id: "2",
    patientName: "Emily Johnson",
    doctorName: "Dr. Johnson",
    amount: 1200,
    method: "Bank Transfer",
    date: "2024-03-11",
    status: "Unpaid",
  },
  {
    id: "3",
    patientName: "Michael Brown",
    doctorName: "Dr. Brown",
    amount: 750,
    method: "Cash",
    date: "2024-03-12",
    status: "Paid",
  },
  {
    id: "4",
    patientName: "Sophia Wilson",
    doctorName: "Dr. Wilson",
    amount: 300,
    method: "Credit Card",
    date: "2024-03-13",
    status: "Unpaid",
  },
  {
    id: "5",
    patientName: "David Martinez",
    doctorName: "Dr. Martinez",
    amount: 1000,
    method: "Bank Transfer",
    date: "2024-03-14",
    status: "Paid",
  },
];

const AdminTransactionPage = () => {
  const [searchParam, setSearchParam] = useState("");

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-medium">All transactions </h1>
          <p className="text-gray-500 w-10/12 ">
            Here you can view and manage all transactions. You can also add new
            transactions.{" "}
          </p>
        </div>
      </div>

      <div className="border mt-8 rounded-lg">
        <div className="flex justify-between items-center mb-4 p-4">
          <Input
            type="text"
            placeholder="Search here"
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
              <TableHead>Patient name</TableHead>
              <TableHead>Doctor name</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactionData.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell>{item.patientName}</TableCell>
                <TableCell>{item.doctorName}</TableCell>
                <TableCell>${item.amount}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>
                  <Badge
                    variant={item.status === "Paid" ? "success" : "danger"}
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

export default AdminTransactionPage;
