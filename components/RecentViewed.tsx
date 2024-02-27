"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import { Station } from "@/types/location.types";
import { getAqiSeverity } from "@/utils/aqi-condition";
import { formatDistance } from "date-fns";

import Card from "./Card";

type ExtendedStation = Station & {
  date: Date;
  geo: {
    lat: number;
    lng: number;
  };
};
const recentsToShow = 6;

const RecentViewed = ({ data }: { data: Station }) => {
  const params = useParams<{ lat: string; lng: string }>();
  const [prevList, setPrevList] = useState<ExtendedStation[] | null>(null);

  useEffect(() => {
    const prevData = localStorage.getItem("data")
      ? JSON.parse(localStorage.getItem("data") || "") || []
      : [];
    setPrevList(
      prevData
        .filter((prev: ExtendedStation) => prev.idx !== data.idx)
        .slice(0, recentsToShow)
    );
    const isNotFresh = prevData.find((x: Station) => x.idx === data.idx);
    if (!isNotFresh) {
      localStorage.setItem(
        "data",
        JSON.stringify([
          {
            ...data,
            date: new Date().toISOString(),
            geo: { lat: params.lat, lng: params.lng },
          },
          ...prevData,
        ])
      );
    }
  }, [data, params]);

  if (!prevList?.length) return null;

  return (
    <div className="container md:px-20 px-4 mx-auto flex flex-col gap-4">
      <h2 className="text-center text-3xl">Recently Viewed</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {prevList &&
          prevList.map((p) => (
            <Link key={p.idx} href={`/station/${p.geo.lat}/${p.geo.lng}`}>
              <Card
                color={getAqiSeverity(p.iaqi.pm25?.v || 0)}
                name={p.city.name}
                value={p.iaqi.pm25?.v || "-"}
                timePeriod={formatDistance(
                  p.date ? new Date(p.date) : new Date(),
                  new Date()
                )}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default RecentViewed;
