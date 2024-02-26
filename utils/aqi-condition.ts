import {
  BAD,
  GOOD,
  MODERATE,
  NOT_FOUND,
  UNHEALTHY,
  VERY_UNHEALTHY,
} from "@/constants/severity.constants";

export const getAqiSeverity = (aqi: number) => {
  switch (true) {
    case aqi > 0 && aqi <= 50:
      return GOOD;
    case aqi >= 50 && aqi <= 100:
      return MODERATE;
    case aqi >= 100 && aqi <= 150:
      return BAD;
    case aqi >= 150 && aqi <= 200:
      return UNHEALTHY;
    case aqi >= 200:
      return VERY_UNHEALTHY;
    default: {
      return NOT_FOUND;
    }
  }
};
