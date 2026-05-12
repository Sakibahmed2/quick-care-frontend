import {
  BriefcaseMedical,
  Calendar,
  CalendarSearch,
  CreditCard,
  GraduationCap,
  Hospital,
  House,
} from "lucide-react";
import { ReactNode } from "react";

export type TDashboardRole = "admin" | "doctor";

type TSidebarItem = {
  title: string;
  icon: ReactNode;
  path: string;
};

export const sidebarItems = (role: TDashboardRole): TSidebarItem[] => {
  const menus: TSidebarItem[] = [];

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
        },
        {
          title: "Specialties",
          icon: <GraduationCap />,
          path: `${role}/specialties`,
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
      break;

    default:
      break;
  }

  return menus;
};
