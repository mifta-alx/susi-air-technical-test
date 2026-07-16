export interface PilotInfo {
  name: string;
  totalFlightHours: number;
  avatarSrc: string;
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
