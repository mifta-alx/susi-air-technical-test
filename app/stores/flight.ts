import { defineStore } from "pinia";
import initialFlightHoursData from "~/data/mock-flight-hours.json";
import type { FlightHoursData } from "~/types/flight";

export const useFlightStore = defineStore("flights", {
  state: () => ({
    ...structuredClone(initialFlightHoursData) as FlightHoursData,
    loading: true,
  }),
  actions: {
    async initData() {
      this.loading = true;
      await new Promise(resolve => setTimeout(resolve, 600));
      this.loading = false;
    },
  },
  getters: {
    getPilot: (state) => state.pilot,
    getFlightHours: (state) => state.flightHours,

    getLimitCardsData: (state) => {
      const timeStore = useTimeStore();
      const todayStr = timeStore.today;

      const flightLogs = state.flightHours || [];
      const limits = state.limits;

      const hoursMap = new Map<string, number>();
      flightLogs.forEach((log) => {
        if (log && log.date) hoursMap.set(log.date, log.hours || 0);
      });

      const calculateRollingHours = (days: number) => {
        let total = 0;
        const baseDate = new Date(todayStr);

        for (let i = 0; i < days; i++) {
          const d = new Date(baseDate);
          d.setDate(baseDate.getDate() - i);
          const lookupStr = d.toISOString().split("T")[0] || "";
          total += hoursMap.get(lookupStr) || 0;
        }
        return parseFloat(total.toFixed(1));
      };

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
          current: calculateRollingHours(7),
          limit: limits.weekly,
        },
        {
          id: "monthly",
          title: "Monthly",
          subtitle: "Rolling 30 days",
          current: calculateRollingHours(30),
          limit: limits.monthly,
        },
        {
          id: "annual",
          title: "Annual",
          subtitle: "Rolling 365 days",
          current: calculateRollingHours(365),
          limit: limits.annual,
        },
      ];
    },
  },
});
