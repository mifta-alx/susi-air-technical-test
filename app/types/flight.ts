export interface PilotInfo {
  name: string;
  totalFlightHours: number;
}

export interface FlightLimits {
  daily: number;
  weekly: number;
  monthly: number;
  annual: number;
}

export interface ChartBoundDetail {
  limit: number;
  max: number;
  windowDays: number;
  displayRangeDays: number;
}

export interface ChartBounds {
  "1w": ChartBoundDetail;
  "1m": ChartBoundDetail;
  "3m": ChartBoundDetail;
  "6m": ChartBoundDetail;
  "1y": ChartBoundDetail;
}

export interface DailyFlightHour {
  date: string;
  hours: number;
}

export interface FlightHoursData {
  pilot: PilotInfo;
  limits: FlightLimits;
  chartBounds: ChartBounds;
  flightHours: DailyFlightHour[];
}

export interface FlightDetail {
  id: number;
  flight_number: string;
  date: string;
  date_display: string;
  aircraft_type: string;
  duration: string;
  departure: { code: string; city: string; time: string };
  arrival: { code: string; city: string; time: string };
}
