import { bgColors } from "@/components/Card";
import Header from "@/components/Header";
import { notFound } from "next/navigation";
import { Station } from "@/types/location.types";
import { getAqiSeverity } from "@/utils/aqi-condition";
import StationInfo from "@/components/StationInfo";
import HistoryForcast from "@/components/HistoryForcast";
import RecentViewed from "@/components/RecentViewed";
import ParticleList from "@/components/ParticleList";

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
  const severity = getAqiSeverity(data.aqi || 0);

  return (
    <main className="flex flex-col gap-12 pb-12">
      <div
        className={`${bgColors[severity]} bg-[#89FFA3] flex flex-col gap-12  rounded-b-3xl`}
      >
        <Header />
        <StationInfo
          stationName={stationName}
          location={location}
          data={data}
        />
      </div>
      <ParticleList data={data} />
      <HistoryForcast data={data} />
      <RecentViewed data={data} />
    </main>
  );
}
