"use client";

import CreateScheduleModal from "@/components/dashboard/doctor/schedule/CreateScheduleModal";
import { Badge } from "@/components/ui/badge";
/* eslint-disable @typescript-eslint/no-unused-vars */
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

const doctorSchedules = [
  {
    id: "1",
    date: "2024-03-20",
    startTime: "09:00 AM",
    endTime: "09:30 AM",
    status: "Available",
  },
  {
    id: "2",
    date: "2024-03-20",
    startTime: "09:30 AM",
    endTime: "10:00 AM",
    status: "Booked",
  },
  {
    id: "3",
    date: "2024-03-20",
    startTime: "10:00 AM",
    endTime: "10:30 AM",
    status: "Available",
  },
];

const DoctorSchedulesPage = () => {
  const [searchParam, setSearchParam] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-medium">My schedules </h1>
          <p className="text-gray-500 w-10/12 ">
            Here you can view and manage your schedules. You can also add new
            schedules.{" "}
          </p>
        </div>

        <Button onClick={() => setIsDialogOpen(true)} size={"lg"}>
          <SquarePlus size={24} />
          Add schedules{" "}
        </Button>
      </div>

      <div className="border mt-8 rounded-lg">
        <div className="flex justify-between items-center mb-4 p-4">
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
              <TableHead>Date</TableHead>
              <TableHead>Start Time</TableHead>
              <TableHead>End Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {doctorSchedules.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.startTime}</TableCell>
                <TableCell>{item.endTime}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      item.status === "Available" ? "success" : "default"
                    }
                  >
                    {item.status}
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

      {/*  Create Schedule modal  */}

      <CreateScheduleModal
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
    </div>
  );
};

export default DoctorSchedulesPage;
