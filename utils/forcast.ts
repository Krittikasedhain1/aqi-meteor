import { DailyForecast } from "@/types/location.types";

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export const getForcast = (
  data: DailyForecast[]
): {
  yesterday: string;
  today: string;
  tomorrow: string;
} => {
  const today = new Date();
  const yesterday = new Date(today);
  const tomorrow = new Date(today);

  yesterday.setDate(today.getDate() - 1);
  tomorrow.setDate(today.getDate() + 1);

  return {
    yesterday:
      data?.find((x) => x.day === formatDate(yesterday))?.avg?.toString() ||
      "-",
    today:
      data?.find((x) => x.day === formatDate(today))?.avg?.toString() || "-",
    tomorrow:
      data?.find((x) => x.day === formatDate(tomorrow))?.avg?.toString() || "-",
  };
};
