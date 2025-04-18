"use client";

import { Badge } from "@/components/ui/badge";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
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

export const appointmentData = [
  {
    id: "1",
    patientName: "John Doe",
    date: "2024-03-20", // YYYY-MM-DD format
    startTime: "10:00 AM", // HH:MM AM/PM format
    endTime: "10:30 AM", // HH:MM AM/PM format
    status: "Scheduled",
    reason: "Annual Checkup",
  },
  {
    id: "2",
    patientName: "Emily Johnson",
    date: "2024-03-21",
    startTime: "11:30 AM",
    endTime: "12:00 PM",
    status: "Pending",
    reason: "Back Pain Consultation",
  },
  {
    id: "3",
    patientName: "Michael Brown",
    date: "2024-03-22",
    startTime: "02:00 PM",
    endTime: "02:30 PM",
    status: "Cancelled",
    reason: "Follow-up for Medication",
  },
  {
    id: "3",
    patientName: " Jhon doe",
    date: "2024-03-22",
    startTime: "02:00 PM",
    endTime: "02:30 PM",
    status: "Completed",
    reason: "Fiver",
  },
];

const DoctorAppointmentsPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-medium">My appointments </h1>
          <p className="text-gray-500 w-10/12 ">
            Here you can view and manage your appointments. You can also add new
            appointments.{" "}
          </p>
        </div>
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
            <TableRow className="overflow-hidden rounded-md">
              <TableHead>Patient</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Start Time</TableHead>
              <TableHead>End Time</TableHead>
              <TableHead>Reason</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointmentData.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell>{item.patientName}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.startTime}</TableCell>
                <TableCell>{item.endTime}</TableCell>
                <TableCell>{item.reason ? item.reason : "N/A"}</TableCell>

                <TableCell>
                  <Badge
                    variant={
                      item.status === "Scheduled"
                        ? "success"
                        : item.status === "Pending"
                        ? "warning"
                        : item.status === "Cancelled"
                        ? "danger"
                        : "default"
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-4">
                    <Button variant={"default"} size={"sm"}>
                      Accept
                    </Button>
                    <Button variant={"destructive"} size={"sm"}>
                      Cancel
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DoctorAppointmentsPage;
