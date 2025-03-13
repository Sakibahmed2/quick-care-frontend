"use client";

import { Badge } from "@/components/UI/badge";
import StatisticsCard from "@/components/UI/StatisticsCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/UI/table";
import {
  BriefcaseMedical,
  CalendarDays,
  Hospital,
  WalletCards,
} from "lucide-react";

const statistics = [
  {
    title: "Total doctors",
    count: 10,
    icon: <BriefcaseMedical size={52} />,
  },
  {
    title: "Total appointments",
    count: 10,
    icon: <CalendarDays size={52} />,
  },
  {
    title: "Total patients",
    count: 10,
    icon: <Hospital size={52} />,
  },
  {
    title: "Total transactions",
    count: "$1000",
    icon: <WalletCards size={52} />,
  },
];

const AdminDashboard = () => {
  const data = [
    {
      id: 1,
      patient: "John Doe",
      doctor: "Dr. Jane Doe",
      date: "2021-09-29",
      time: "10:00 AM",
      status: "Approved",
    },
    {
      id: 2,
      patient: "John Doe",
      doctor: "Dr. Jane Doe",
      date: "2021-09-29",
      time: "10:00 AM",
      status: "Pending",
    },
    {
      id: 3,
      patient: "John Doe",
      doctor: "Dr. Jane Doe",
      date: "2021-09-29",
      time: "10:00 AM",
      status: "Pending",
    },
    {
      id: 4,
      patient: "John Doe",
      doctor: "Dr. Jane Doe",
      date: "2021-09-29",
      time: "10:00 AM",
      status: "Pending",
    },
    {
      id: 5,
      patient: "John Doe",
      doctor: "Dr. Jane Doe",
      date: "2021-09-29",
      time: "10:00 AM",
      status: "Pending",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {statistics.map((item, idx) => (
          <StatisticsCard key={idx} item={item} />
        ))}
      </div>

      <div className="mt-8">
        <Table>
          <TableHeader className="rounded-md">
            <TableRow className="overflow-hidden rounded-md">
              <TableHead>Patient</TableHead>
              <TableHead>Doctor</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell>{item.patient}</TableCell>
                <TableCell>{item.doctor}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.time}</TableCell>
                <TableCell className="">
                  <Badge
                    variant={item.status === "Approved" ? "success" : "danger"}
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

export default AdminDashboard;
