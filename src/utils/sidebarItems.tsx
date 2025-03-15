import {
  BriefcaseMedical,
  Calendar,
  CalendarSearch,
  CreditCard,
  Hospital,
  House,
} from "lucide-react";

export const sidebarItems = (role: string) => {
  const menus = [];

  switch (role) {
    case "admin":
      menus.push(
        {
          title: "Dashboard",
          icon: <House />,
          path: `${role}`,
        },
        {
          title: "Doctors",
          icon: <BriefcaseMedical />,
          path: `${role}/doctors`,
        },
        {
          title: "Patients",
          icon: <Hospital />,
          path: `${role}/patients`,
        },
        {
          title: "Transactions",
          icon: <CreditCard />,
          path: `${role}/transactions`,
        }
      );
      break;

    case "doctor":
      menus.push(
        {
          title: "Dashboard",
          icon: <House />,
          path: `${role}`,
        },
        {
          title: "Schedule",
          icon: <Calendar />,
          path: `${role}/schedules`,
        },
        {
          title: "Appointments",
          icon: <CalendarSearch />,
          path: `${role}/appointments`,
        },
        {
          title: "Patients",
          icon: <Hospital />,
          path: `${role}/patients`,
        }
      );
  }

  return menus;
};
