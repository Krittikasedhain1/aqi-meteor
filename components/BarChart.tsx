"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Skeleton from "./Skeleton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Day forcasting for a week",
    },
  },
};

const BarChart = ({ barData }: { barData: any }) => {
  return (
    <div>
      <Bar options={options} data={barData} />
    </div>
  );
};

export const BarCartSkeleton = () => (
  <div className="flex h-[500px] gap-10">
    <div className="flex gap-2 max-w-full">
      <Skeleton className="w-[55px] h-full" />
      <Skeleton className="w-[55px] h-full" />
    </div>
    <div className="flex gap-2">
      <Skeleton className="w-[55px] h-full" />
      <Skeleton className="w-[55px] h-full" />
    </div>
    <div className="flex gap-2">
      <Skeleton className="w-[55px] h-full" />
      <Skeleton className="w-[55px] h-full" />
    </div>
    <div className="flex gap-2">
      <Skeleton className="w-[55px] h-full" />
      <Skeleton className="w-[55px] h-full" />
    </div>
    <div className="flex gap-2">
      <Skeleton className="w-[55px] h-full" />
      <Skeleton className="w-[55px] h-full" />
    </div>
    <div className="flex gap-2">
      <Skeleton className="w-[55px] h-full" />
      <Skeleton className="w-[55px] h-full" />
    </div>
    <div className="flex gap-2">
      <Skeleton className="w-[55px] h-full" />
      <Skeleton className="w-[55px] h-full" />
    </div>
  </div>
);

export default BarChart;
