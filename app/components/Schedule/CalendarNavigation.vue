<script lang="ts" setup>
import { ChevronLeft, ChevronRight } from "@lucide/vue";

const props = defineProps<{
  currentMonth: number;
  currentYear: number;
  totalActiveDays : number;
}>();

const emit = defineEmits<{
  (e: "prev"): void;
  (e: "next"): void;
}>();
</script>
<template>
  <div class="flex items-center justify-between">
    <div class="flex flex-col">
      <h2 class="text-base font-semibold text-primary tracking-tight">
        {{ monthNames[currentMonth] }} {{ currentYear }}
      </h2>
      <span class="text-[11px] text-primary/70 font-medium">{{ totalActiveDays }} scheduled duties</span>
    </div>
      <div class="flex items-center gap-1.5">
      <button
        type="button"
        @click="emit('prev')"
        class="size-8 flex justify-center items-center border border-secondary/20 rounded-lg hover:bg-secondary/5 text-primary transition-all duration-300 active:scale-95"
      >
        <ChevronLeft class="size-4" />
      </button>
      <button
        type="button"
        @click="emit('next')"
        class="size-8 flex justify-center items-center border border-secondary/20 rounded-lg hover:bg-secondary/5 text-primary transition-all duration-300 active:scale-95"
      >
        <ChevronRight class="size-4" />
      </button>
    </div>
  </div>
</template>
