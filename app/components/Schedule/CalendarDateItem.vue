<script lang="ts" setup>
import type { ScheduleItem } from "~/types/schedules";

const props = defineProps<{
  day: number;
  duty: ScheduleItem | null;
  isToday: boolean;
  isPadding: boolean;
}>();

const emit = defineEmits<{
  (e: "dateClick", dayData: typeof props): void;
}>();
</script>

<template>
  <button
    type="button"
    :disabled="!duty"
    @click="emit('dateClick', props)"
    :class="
      cn(
        'border border-secondary/10 rounded-md aspect-square flex flex-col items-center justify-between relative transition-all duration-300',
        duty  ? 'cursor-pointer active:scale-95' : 'cursor-default',
        isPadding
          ? 'bg-secondary/5 text-secondary/40 opacity-70'
          : 'bg-surface text-primary',
        isToday && 'border-primary',
      )
    "
  >
    <template v-if="day">
      <span class="absolute top-1 left-1 text-[10px] font-medium">{{
        day
      }}</span>
      <div
        v-if="duty"
        class="absolute bottom-1 left-1 right-1 h-1 rounded-full"
        :style="{ backgroundColor: duty.base_color }"
      ></div>
    </template>
  </button>
</template>
