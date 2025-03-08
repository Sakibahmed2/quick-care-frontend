import { BriefcaseMedical, CreditCard, Hospital, House } from "lucide-react";

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
  }

  return menus;
};
