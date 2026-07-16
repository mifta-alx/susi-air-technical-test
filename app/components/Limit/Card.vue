<script setup lang="ts">
const props = defineProps<{
  label: string;
  current: number;
  limit: number
}>()

const percentageNumber = computed(() => {
  if (props.limit === 0) return 0;
  return (props.current / props.limit) * 100;
});

const percentageDisplay = computed(() => percentageNumber.value.toFixed(0));

const barColor = computed(() => {
  if (percentageNumber.value >= 90) return "bg-brand"; 
  if (percentageNumber.value >= 75) return "bg-warning";
  return "bg-success";
});
</script>

<template>
  <div class="bg-surface border border-secondary/10 p-4 flex flex-col gap-2 rounded-xl">
    <div class="flex justify-between items-center">
      <span class="text-xs text-secondary font-medium">{{ label }}</span>
      <span class="text-xs font-bold">{{ percentageDisplay }}%</span>
    </div>

    <div class="text-lg font-bold text-primary">
      {{ current }}
      <span class="text-sm font-normal text-secondary">/ {{ limit }} hrs</span>
    </div>

    <div class="h-2 w-full bg-secondary/15 rounded-full overflow-hidden">
      <div
        class="h-full rounded-full transition-all duration-500"
        :class="barColor"
        :style="{ width: `${Math.min(percentageNumber, 100)}%` }"
      ></div>
    </div>
  </div>
</template>
