export interface AirportDetails {
  code: string;
  city: string;
  time: string;
}

export interface UpcomingFlight {
  flight_number: string;
  date: string; 
  date_display: string;
  aircraft_type: string;
  duration: string;
  departure: AirportDetails;
  arrival: AirportDetails;
}

export interface LegendItem {
  code: string; 
  label: string;
  color: string;
}

export interface ScheduleItem {
  id: string;
  duty_date: string; 
  status: 1 | 2;
  base_name: string; 
  base_color: string;
  duty_type: string; 
  count_schedules: number;
  count_logbooks: number;
}

export interface FieldGuide {
  duty_date: string;
  status: string;
  base_name: string;
  base_color: string;
  duty_type: string;
  count_schedules: string;
  count_logbooks: string;
}

export interface FlightDashboardData {
  today: string; 
  fieldGuide: FieldGuide;
  upcomingFlights: UpcomingFlight;
  legend: LegendItem[];
  schedules: ScheduleItem[];
}