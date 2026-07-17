<script setup lang="ts">
const props = defineProps<{
  loading: boolean;
}>();

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
const timeStore = useTimeStore();

const activeToggle = ref<ToggleOption>("1w");
const toggleOptions: ToggleOption[] = ["1w", "1m", "3m", "6m", "1y"];

const currentConfig = computed(() => CONFIG[activeToggle.value]);

const todayStr = computed(() => timeStore.today);

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

const chartDataValues = computed(() => {
  const windowDays = currentConfig.value.windowDays;
  return displayDates.value.map((dateStr) => {
    return flightStore.getCalculateRolling(dateStr, windowDays);
  });
});
</script>

<template>
  <div
    v-if="loading"
    class="flex animate-pulse bg-secondary/10 h-88.5 w-full rounded-xl"
  />
  <div
    v-else
    class="bg-surface p-5 rounded-2xl border border-secondary/10 space-y-4"
  >
    <div class="w-full h-64 block relative">
      <FlightTrendChart
        :display-dates="displayDates"
        :data="chartDataValues"
        :limit="currentConfig.limit"
        :y-max="currentConfig.yMax"
        :today-str="todayStr"
      />
    </div>

    <FlightToggleGroup v-model="activeToggle" :options="toggleOptions">
      <FlightToggleItem
        v-for="opt in toggleOptions"
        :key="opt"
        :value="opt"
        v-model="activeToggle"
      />
    </FlightToggleGroup>
  </div>
</template>
