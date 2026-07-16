import { defineStore } from "pinia";
import initialSchedulesData from "~/data/mock-schedules.json";
import type { FlightDashboardData } from "~/types/schedules";

export const useScheduleStore = defineStore("schedules", {
  state: () => ({
    ...(structuredClone(initialSchedulesData) as FlightDashboardData),
    loading: true,
  }),

  actions: {
    async fetchSchedules() {
      this.loading = true;
      await new Promise((resolve) => setTimeout(resolve, 800));
      this.loading = false;
    },
  },

  getters: {
    upcomingSchedule: (state) => {
      const timeStore = useTimeStore();
      const todayStr = timeStore.today;
      return state.upcomingFlights.date === todayStr
        ? state.upcomingFlights
        : null;
    },
    schedulesMap: (state) => {
      const map = new Map();
      state.schedules.forEach((item) => {
        map.set(item.duty_date, item);
      });
      return map;
    },
  },
});
