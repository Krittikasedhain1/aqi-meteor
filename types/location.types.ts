type Time = {
  tz: string;
  stime: string;
  vtime: number;
};

export type Location = {
  uid: number;
  aqi: string;
  time: Time;
  station: {
    name: string;
    geo: [number, number];
    url: string;
    country: string;
  };
};

export type Attribution = {
  url: string;
  name: string;
  logo: string;
};

export type City = {
  geo: [number, number];
  name: string;
  url: string;
  location: string;
};

export type Iaqi = {
  dew?: { v: number };
  h?: { v: number };
  no2?: { v: number };
  o3?: { v: number };
  pm10?: { v: number };
  so2?: { v: number };
  co?: { v: number };
  p?: { v: number };
  pm25?: { v: number };
  t?: { v: number };
  w?: { v: number };
  wg?: { v: number };
};

type DailyForecast = {
  avg: number;
  day: string;
  max: number;
  min: number;
};

type Forecast = {
  daily: {
    o3: DailyForecast[];
    pm10: DailyForecast[];
    pm25: DailyForecast[];
  };
};

export type Station = {
  aqi: number;
  idx: number;
  attributions: Attribution[];
  city: City;
  dominentpol: string;
  iaqi: Iaqi;
  time: Time;
  forecast: Forecast;
};
