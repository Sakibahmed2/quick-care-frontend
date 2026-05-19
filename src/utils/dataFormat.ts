import { format } from "date-fns";

export const formatData = (date: string) => {
  const formattedDate = format(new Date(date), "yyyy-MM-dd");

  return formattedDate;
};
