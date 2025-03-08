import StatisticsCard from "@/components/UI/StatisticsCard";
import {
  BriefcaseMedical,
  CalendarDays,
  Hospital,
  WalletCards,
} from "lucide-react";
import React from "react";

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
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {statistics.map((item, idx) => (
          <StatisticsCard key={idx} item={item} />
        ))}
      </div>

      <div></div>
    </div>
  );
};

export default AdminDashboard;
