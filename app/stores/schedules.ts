import { defineStore } from "pinia";
import initialFlightHoursData from "~/data/mock-flight-hours.json";
import upcomingFlightsData from "~/data/mock-upcoming-flights.json";
import type { FlightDetail, FlightHoursData } from "~/types/flight";

export const useScheduleStore = defineStore("schedules", {
  state: () => ({
    schedules: initialFlightHoursData as FlightHoursData,
    upcomingFlights: upcomingFlightsData as FlightDetail[],
  }),

  getters: {
    getPilot: (state) => state.schedules.pilot,
    upcomingSchedule: (state) => {
      const timeStore = useTimeStore();
      const todayStr = timeStore.chartToday;
      return (
        state.upcomingFlights.find((flight) => flight.date === todayStr) || null
      );
    },
  },
});
