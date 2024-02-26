import Card from "./Card";
import { getForcast } from "@/utils/forcast";
import { Station } from "@/types/location.types";
import { getAqiSeverity } from "@/utils/aqi-condition";

const HistoryForcast = ({ data }: { data: Station }) => {
  const forecast = getForcast(data?.forecast?.daily?.pm25);
  console.log(forecast);
  return (
    <div className="container md:px-20 px-4 mx-auto flex flex-col gap-4">
      <h2 className="text-center text-3xl">AQI History & Forcast</h2>
      <div className="grid md:grid-cols-3  gap-4">
        <Card
          color={getAqiSeverity(parseInt(forecast?.yesterday) || 0)}
          name="AQI"
          value={forecast?.yesterday}
          timePeriod="Yesterday"
        />
        <Card
          color={getAqiSeverity(parseInt(forecast?.today) || 0)}
          name="AQI"
          value={forecast?.today}
          timePeriod="Today"
        />
        <Card
          color={getAqiSeverity(parseInt(forecast?.tomorrow) || 0)}
          name="AQI"
          value={forecast?.tomorrow}
          timePeriod="Tomorrow"
        />
      </div>
    </div>
  );
};

export default HistoryForcast;
