import { defineStore } from "pinia";
import initialFlightHoursData from "~/data/mock-flight-hours.json";
import type { FlightHoursData } from "~/types/flight";

export const useFlightStore = defineStore("flights", {
  state: () => ({
    ...(structuredClone(initialFlightHoursData) as FlightHoursData),
    loading: true,
  }),
  actions: {
    async initData() {
      this.loading = true;
      await new Promise((resolve) => setTimeout(resolve, 600));
      this.loading = false;
    },
  },
  getters: {
    getPilot: (state) => state.pilot,
    getFlightHours: (state) => state.flightHours,

    getFlightHoursMap: (state) => {
      const hoursMap = new Map<string, number>();
      const flightLogs = state.flightHours || [];

      flightLogs.forEach((log) => {
        if (log && log.date) hoursMap.set(log.date, log.hours || 0);
      });
      return hoursMap;
    },

    getCalculateRolling() {
      return (dateStr: string, days: number): number => {
        let total = 0;
        const baseDate = new Date(dateStr);
        const hoursMap = this.getFlightHoursMap;
        for (let i = 0; i < days; i++) {
          const d = new Date(baseDate);
          d.setDate(baseDate.getDate() - i);
          const lookupStr = d.toISOString().split("T")[0] || "";
          total += hoursMap.get(lookupStr) || 0;
        }
        return Math.round(total * 10) / 10;
      };
    },

    getLimitCardsData(state) {
      const hoursMap = this.getFlightHoursMap;
      const calculateRollingHours = this.getCalculateRolling;
      
      return (todayStr: string) => {
        const limits = state.limits;

        return [
          {
            id: "daily",
            title: "Daily",
            subtitle: "Today only",
            current: hoursMap.get(todayStr) || 0,
            limit: limits.daily,
          },
          {
            id: "weekly",
            title: "Weekly",
            subtitle: "Rolling 7 days",
            current: calculateRollingHours(todayStr, 7),
            limit: limits.weekly,
          },
          {
            id: "monthly",
            title: "Monthly",
            subtitle: "Rolling 30 days",
            current: calculateRollingHours(todayStr, 30),
            limit: limits.monthly,
          },
          {
            id: "annual",
            title: "Annual",
            subtitle: "Rolling 365 days",
            current: calculateRollingHours(todayStr, 365),
            limit: limits.annual,
          },
        ];
      };
    },
  },
});
