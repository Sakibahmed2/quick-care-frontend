/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const StatisticsCard = ({ item }: { item: any }) => {
  const { title, value, icon } = item || {};

  return (
    <div className="flex items-center gap-4 p-4 bg-gray-50 border rounded-md">
      <div className="text-primary bg-primary/10 p-2 rounded-lg">{icon}</div>
      <div>
        <p className="text-2xl font-medium">{value}</p>
        <p className="text-gray-600">{title}</p>
      </div>
    </div>
  );
};

export default StatisticsCard;
