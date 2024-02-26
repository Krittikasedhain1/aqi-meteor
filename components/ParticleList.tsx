import { particles } from "@/constants/particles.constants";
import { getAqiSeverity } from "@/utils/aqi-condition";
import { Iaqi, Station } from "@/types/location.types";
import Card from "./Card";

const ParticleList = ({ data }: { data: Station }) => {
  return (
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
  );
};

export default ParticleList;
