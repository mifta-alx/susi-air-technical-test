<script setup lang="ts">
const props = defineProps<{
  displayDates: string[];
  data: number[];
  limit: number;
  yMax: number;
  todayStr: string;
}>();

const chartOption = computed(() => {
  return {
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      borderColor: "#e2e8f0",
      textStyle: { color: "#1e293b", fontSize: 12 },
      formatter: (params: any) => {
        const item = params[0];
        const isToday =
          item.name === props.todayStr
            ? ' <b class="text-brand">(Today)</b>'
            : "";
        return `<div>
          <p class="text-[11px] text-secondary">${item.name}${isToday}</p>
          <p class="text-sm font-bold mt-0.5">${item.value} hrs <span class="text-[10px] font-normal text-gray-500">rolling</span></p>
        </div>`;
      },
    },
    grid: {
      left: "2%",
      right: "2%",
      bottom: "12%",
      top: "4%",
    },
    xAxis: {
      type: "category",
      data: props.displayDates,
      axisLabel: {
        fontSize: 10,
        color: "#6B7280",
        formatter: (value: string) => {
          if (value === props.todayStr) return "Today";
          return value.substring(5);
        },
      },
      axisLine: { lineStyle: { color: "#6B7280", opacity: 0.05 } },
    },
    yAxis: {
      type: "value",
      max: props.yMax,
      axisLabel: {
        // formatter: (value: number) => {
        //   if (value === props.limit) return `{limit|${value}}`;
        //   return value.toString();
        // },
        rich: {
          limit: { color: "#E63757", fontWeight: "bold" },
        },
      },
      splitLine: { lineStyle: { color: "#6B7280", opacity: 0.05 } },
    },
    series: [
      {
        data: props.data,
        type: "line",
        smooth: true,
        showSymbol: false,
        lineStyle: { color: "#0E2138", width: 2.5 },
        itemStyle: { color: "#0E2138" },
        markLine: {
          symbol: ["none", "none"],
          silent: true,
          label: {
            show: true,
            position: "end",
            formatter: `LIMIT ({c} hrs)`,
            fontSize: 10,
            fontWeight: "bold",
            color: "#E63757",
            align: "right",
            verticalAlign: "bottom",
          },
          lineStyle: {
            color: "#E63757",
            type: "dashed",
            width: 1,
          },
          data: [{ yAxis: props.limit }],
        },
      },
    ],
  };
});
</script>

<template>
  <ClientOnly>
    <VChart :option="chartOption" class="w-full h-full" autoresize />

    <template #fallback>
      <div
        class="w-full h-full flex items-center justify-center bg-surface rounded-xl animate-pulse"
      >
        <span class="text-xs text-secondary/40 font-medium"
          >Loading Flight Trend Chart</span
        >
      </div>
    </template>
  </ClientOnly>
</template>
