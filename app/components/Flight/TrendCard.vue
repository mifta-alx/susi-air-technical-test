<script setup lang="ts">
import { computed, ref } from "vue";

type ToggleOption = "1w" | "1m" | "3m" | "6m" | "1y";

interface ToggleConfig {
  windowDays: number;
  limit: number;
  yMax: number;
}

const CONFIG: Record<ToggleOption, ToggleConfig> = {
  "1w": { windowDays: 7, limit: 40, yMax: 45 },
  "1m": { windowDays: 30, limit: 100, yMax: 125 },
  "3m": { windowDays: 90, limit: 300, yMax: 325 },
  "6m": { windowDays: 180, limit: 600, yMax: 625 },
  "1y": { windowDays: 365, limit: 1050, yMax: 1250 },
};

const flightStore = useFlightStore();
const documentStore = useDocumentStore();
const activeToggle = ref<ToggleOption>("1w");

// Ambil config aktif saat ini
const currentConfig = computed(() => CONFIG[activeToggle.value]);

// 1. Tanggal hari ini
const todayStr = computed<string>(() => {
  return documentStore?.today || new Date().toISOString().split("T")[0] || "";
});

// 2. Array 15 Hari untuk Sumbu X
const displayDates = computed(() => {
  const dates: string[] = [];
  const baseDate = new Date(todayStr.value);
  if (isNaN(baseDate.getTime())) return dates;

  for (let i = -7; i <= 7; i++) {
    const d = new Date(baseDate);
    d.setDate(baseDate.getDate() + i);
    dates.push(d.toISOString().split("T")[0] || "");
  }
  return dates;
});

// 3. Hitung Agregasi Rolling Sum
const chartDataValues = computed(() => {
  const windowDays = currentConfig.value.windowDays;
  const flightLogs = flightStore?.getFlightHours || [];

  const hoursMap = new Map<string, number>();
  flightLogs.forEach((log) => {
    if (log && log.date) hoursMap.set(log.date, log.hours || 0);
  });

  return displayDates.value.map((dateStr) => {
    let totalSum = 0;
    const targetDate = new Date(dateStr);
    if (isNaN(targetDate.getTime())) return 0;

    for (let i = 0; i < windowDays; i++) {
      const d = new Date(targetDate);
      d.setDate(targetDate.getDate() - i);
      const lookupStr = d.toISOString().split("T")[0] || "";
      totalSum += hoursMap.get(lookupStr) || 0;
    }
    return totalSum;
  });
});
</script>

<template>
  <div class="bg-surface p-5 rounded-2xl border border-secondary/10 space-y-4">
    <!-- <div>
      <h3 class="text-sm font-bold text-primary tracking-tight">
        Flight Hours Trend
      </h3>
      <p class="text-[11px] text-slate-400 mt-0.5">
        Rolling cumulative flight time analysis against regulatory caps.
      </p>
    </div> -->

    <!-- Area Chart Canvas Container -->
    <div class="w-full h-64 block relative">
      <!-- <FlightTrendChart
        :display-dates="displayDates"
        :chart-data-values="chartDataValues"
        :limit="currentConfig.limit"
        :y-max="currentConfig.yMax"
        :today-str="todayStr"
      /> -->
    </div>

    <FlightToggleGroup v-model="activeToggle" :options="['1w', '1m', '3m', '6m', '1y']">
      <FlightToggleItem
        v-for="opt in ['1w', '1m', '3m', '6m', '1y'] as const"
        :key="opt"
        :value="opt"
        v-model="activeToggle"
      />
    </FlightToggleGroup>
  </div>
</template>
