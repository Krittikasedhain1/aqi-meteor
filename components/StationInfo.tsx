import { Iaqi } from "@/types/location.types";
import { formattedNumber } from "@/utils/number";

const weatherKeys: {
  iaqi: string;
  label: string;
  unit?: string;
}[] = [
  { iaqi: "dew", label: "Dew", unit: "°C" },
  { iaqi: "h", label: "Humidity", unit: "%" },
  { iaqi: "p", label: "Pressure", unit: "mbar" },
  { iaqi: "t", label: "Temperature", unit: "°C" },
  { iaqi: "w", label: "Wind", unit: "km/h" },
];

const StationInfo = ({
  stationName,
  location,
  data,
}: {
  stationName: string;
  location: string;
  data: any;
}) => {
  const dateObject = new Date(data.time.iso);
  const formattedDate = dateObject.toLocaleString(undefined, {
    weekday: "short", // Short day name
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="container flex flex-col gap-4 mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-3 md:gap-0 md:justify-between justify-center items-center">
        <div className="order-2 flex flex-col gap-4">
          <h2 className="-ml-1.5 text-3xl md:text-6xl font-bold">
            {stationName}
          </h2>
          <span className="font-bold text-base">{location} </span>
          <span className="font-bold text-sm">
            {data.city.geo.map((x: number) => formattedNumber(x)).join(", ")}{" "}
            <span className="text-gray-800 font-bold text-xs">
              (updated: {formattedDate})
            </span>
          </span>
        </div>
        <div className="order-1 md:order-3  flex justify-center md:pl-10">
          <div className="w- px-8 md:px-12 p-8 md:p-12 shadow-2xl text-3xl bg-white font-bold text-black cursor-pointer  border-4 border-gray-300 rounded-full hover:bg-green-50 hover:-translate-y-2 transition-all duration-150">
            {data.aqi}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <a
          className="font-bold text-lg text-blue-600 hover:underline"
          target="_blank"
          href={data.city.url}
        >
          History
        </a>
        <div className="flex flex-wrap gap-4 mt-3 mb-10">
          {weatherKeys.map((w) => (
            <div
              key={w.iaqi}
              className="px-5 rounded-md py-3 flex flex-col justify-center align-center gap-3 ring-2 ring-white ring-inset bg-[#c0f0cb]"
            >
              <span className="text-xs font-normal text-center">{w.label}</span>
              <span className="text-xs font-bold text-center">
                {data.iaqi[w.iaqi as keyof Iaqi]?.v
                  ? `${formattedNumber(data.iaqi[w.iaqi as keyof Iaqi]?.v)} ${
                      w.unit
                    }`
                  : "-"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StationInfo;
