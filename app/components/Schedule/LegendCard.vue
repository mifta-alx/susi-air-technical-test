<script lang="ts" setup>
const scheduleStore = useScheduleStore();
const legend = computed(() => scheduleStore.legend);
</script>
<template>
  <div class="grid grid-cols-2 gap-x-1 gap-y-3 mt-4">
    <div
      v-for="item in legend"
      :key="item.code"
      class="flex items-center gap-2"
    >
      <div
        class="size-2.5 rounded-full shrink-0"
        :style="{ backgroundColor: item.color }"
      />
      <span class="text-xs text-primary/90 font-semibold tracking-tight uppercase leading-0">
        {{ item.label }}
      </span>
    </div>
  </div>
</template>
