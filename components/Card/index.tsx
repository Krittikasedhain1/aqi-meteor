import {
  BAD,
  GOOD,
  MODERATE,
  NOT_FOUND,
  UNHEALTHY,
  VERY_UNHEALTHY,
  severityLabels,
} from "@/constants/severity.constants";
import Skeleton from "../Skeleton";
import { DailyForecast } from "@/types/location.types";

export const bgColors = {
  red: "bg-[#ff7898]",
  [UNHEALTHY]: "bg-[#ff7898]",
  green: "bg-[#89FFA3]",
  [GOOD]: "bg-[#89FFA3]",
  orange: "bg-[#FFA800]",
  [BAD]: "bg-[#FFA800]",
  yellow: "bg-[#FDE400]",
  [MODERATE]: "bg-[#FDE400]",
  blue: "bg-blue-500",
  [VERY_UNHEALTHY]: "bg-blue-500",
  [NOT_FOUND]: "bg-gray-300",
};

const Card = ({
  color,
  name,
  value,
  timePeriod,
}: {
  color: keyof typeof bgColors;
  name: string;
  value: string | DailyForecast["avg"];
  timePeriod?: string;
}) => {
  const colorClass = bgColors[color];
  return (
    <div
      className={`${colorClass} w-full flex flex-col justify-center px-5 py-5 gap-2 rounded h-52`}
    >
      <span className="uppercase font-semibold text-base md:text-lg line-clamp-2">
        {name}
      </span>
      <span className="text-4xl md:text-6xl font-bold">{value}</span>
      {(color in severityLabels || Boolean(timePeriod)) && (
        <span className="text-xs font-bold">
          {timePeriod || severityLabels[color as keyof typeof severityLabels]}
        </span>
      )}
    </div>
  );
};

export const CardSkeleton = ({
  containsPeriod = false,
}: {
  containsPeriod?: boolean;
}) => {
  return (
    <div className={`w-full shadow flex flex-col px-5 py-5 gap-2 rounded`}>
      <Skeleton className="h-[28px] w-20" />
      <Skeleton className="h-[36px] w-full" />
      {containsPeriod && <Skeleton className="h-[16px] w-10" />}
    </div>
  );
};

export default Card;
