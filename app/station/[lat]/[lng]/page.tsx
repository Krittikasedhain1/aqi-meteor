import Card, { CardSkeleton } from "@/components/Card";
import BarChart, { BarCartSkeleton } from "@/components/BarChart";
import Search from "@/components/Search";
import { Suspense } from "react";
import Header from "@/components/Header";
import Skeleton from "@/components/Skeleton";
import { notFound } from "next/navigation";
import { Station, Iaqi } from "@/types/location.types";
import { getAqiSeverity } from "@/utils/aqi-condition";

const weatherKeys: {
  iaqi: string;
  label: string;
}[] = [
  { iaqi: "dew", label: "Dew" },
  { iaqi: "h", label: "Humidity" },
  { iaqi: "p", label: "Pressure" },
  { iaqi: "t", label: "Temperature" },
  { iaqi: "w", label: "Wind" },
];

const particles = ["pm25", "pm10", "o3", "no2", "so2", "co"];

const labels = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];

const barData = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [112, 122, 32, 232, 432, 432, 992, 234, 234],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [10, 20, 50, 780, 980, 5, 992, 9, 77],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default async function HomePage({
  params,
}: {
  params: Record<"lat" | "lng", string>;
}) {
  const { lat, lng } = params;

  const response = await fetch(
    `https://api.waqi.info/feed/geo:${lat};${lng}/?token=${process.env.WAQI_TOKEN}`,
    { cache: "no-cache" }
  );

  const station: { status: string; data: Station } = await response.json();

  // TODO: cannot connect
  if (!response.ok || station.status !== "ok") {
    notFound();
  }

  const { data } = station;

  const [stationName, ...locationSplits] = data.city.name.split(",");
  const location = locationSplits.join(",");

  return (
    <main className="flex flex-col gap-12 pb-12">
      <div className=" bg-[#89FFA3] flex flex-col gap-12  rounded-b-3xl">
        <Header />
        <div className="container flex flex-col gap-4 mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-3 md:gap-0 md:justify-between justify-center items-center">
            <div className="order-2 flex flex-col gap-4">
              <h2 className="-ml-1.5 text-6xl font-bold">{stationName}</h2>
              <span className="font-bold text-base">{location}</span>
              <span className="font-bold text-sm">
                {data.city.geo.join(",")}
              </span>
            </div>
            <div className="order-1 md:order-3  flex justify-center md:pl-10">
              <div className="w-fit p-12 shadow-2xl text-3xl bg-white font-bold text-black cursor-pointer  border-4 border-gray-300 rounded-full hover:bg-green-50 hover:-translate-y-2 transition-all duration-150">
                {data.aqi}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <a
              className="font-bold text-lg text-blue-600"
              target="_blank"
              href={data.city.url}
            >
              History
            </a>
            <div className="flex gap-4 mt-3 mb-10">
              {weatherKeys.map((w) => (
                <div
                  key={w.iaqi}
                  className="px-5 rounded-md py-3 flex flex-col justify-center align-center gap-3 ring-2 ring-white ring-inset bg-[#c0f0cb]"
                >
                  <span className="text-xs font-normal text-center">
                    {w.label}
                  </span>
                  <span className="text-xs font-bold text-center">
                    {data.iaqi[w.iaqi as keyof Iaqi]?.v || "-"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto px-4 container">
        <div className="grid md:grid-cols-4 grid-cols-3 gap-3">
          {particles.map((p) => (
            <Card
              key={p}
              color={getAqiSeverity(data.iaqi[p as keyof Iaqi]?.v || 0)}
              name={p}
              value={data.iaqi[p as keyof Iaqi]?.v.toString() || "-"}
            />
          ))}
        </div>
      </div>
      <div className="container md:px-20 px-4 mx-auto flex flex-col gap-4">
        <h2 className="text-center text-3xl">AQI History & Forcast</h2>
        <div className="grid md:grid-cols-3  gap-4">
          <Card color="red" name="AQI" value="123" timePeriod="Yesterday" />
          <Card color="green" name="AQI" value="123" timePeriod="Today" />
          <Card color="yellow" name="AQI" value="123" timePeriod="Tomorrow" />
          {/* <CardSkeleton /> */}
        </div>
      </div>
      {/* pm25 over the week */}
      <div className="container px-20 mx-auto">
        <Suspense fallback={<BarCartSkeleton />}>
          <BarCartSkeleton />
          <BarChart barData={barData} />
        </Suspense>
      </div>
      <div className="container md:px-20 px-4 mx-auto flex flex-col gap-4">
        <h2 className="text-center text-3xl">Recently Viewed</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card color="green" name="Bejing" value="100" timePeriod="Today" />
          <Card color="red" name="Kathmandu" value="800" timePeriod="Today" />
          <Card color="yellow" name="New York" value="500" timePeriod="Today" />
          <CardSkeleton containsPeriod />
          <CardSkeleton containsPeriod />
          <CardSkeleton containsPeriod />
        </div>
      </div>
    </main>
  );
}
