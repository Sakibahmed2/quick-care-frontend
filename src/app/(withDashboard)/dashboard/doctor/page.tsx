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
import { Calendar, Hospital, Receipt } from "lucide-react";

const statistics = [
  {
    title: "Patients",
    value: 100,
    icon: <Hospital />,
  },
  {
    title: "Appointments",
    value: 100,
    icon: <Calendar />,
  },
  {
    title: "Earnings",
    value: 100,
    icon: <Receipt />,
  },
];

const appointmentsData = [
  {
    id: "1",
    patientName: "John Doe",
    date: "2024-03-20",
    time: "10:00 AM",
    status: "Scheduled",
  },
  {
    id: "2",
    patientName: "Emily Johnson",
    date: "2024-03-21",
    time: "11:30 AM",
    status: "Pending",
  },
  {
    id: "3",
    patientName: "Michael Brown",
    date: "2024-03-22",
    time: "02:00 PM",
    status: "Cancelled",
  },
];

const DoctorDashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {statistics.map((item, idx) => (
          <StatisticsCard key={idx} item={item} />
        ))}
      </div>

      <div className="mt-8">
        <div>
          <h2 className="text-xl font-medium mb-2">Recent appointments</h2>
        </div>

        <Table>
          <TableHeader className="rounded-md">
            <TableRow className="overflow-hidden  bg-gray-100">
              <TableHead>Patient</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointmentsData.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell>{item.patientName}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.time}</TableCell>
                <TableCell className="">
                  <Badge
                    variant={
                      item.status === "Scheduled"
                        ? "success"
                        : item.status === "Pending"
                        ? "warning"
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

export default DoctorDashboard;
