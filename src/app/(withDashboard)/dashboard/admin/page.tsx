"use client";

import StatisticsCard from "@/components/UI/StatisticsCard";
import { Table, TableProps, Tag } from "antd";
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

interface DataType {
  id: number;
  patient: string;
  doctor: string;
  date: string;
  time: string;
  status: string;
}

const AdminDashboard = () => {
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Patient",
      dataIndex: "patient",
      key: "patient",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Doctor",
      dataIndex: "doctor",
      key: "doctor",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => (
        <Tag color={text === "Approved" ? "green" : "red"}>{text}</Tag>
      ),
    },
  ];

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
        <div className="p-4 rounded-lg shadow">
          <Table<DataType>
            columns={columns}
            dataSource={data}
            rowKey={"id"}
            pagination={false}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
