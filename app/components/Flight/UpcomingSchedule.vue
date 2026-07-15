<script setup lang="ts">
import { Calendar, Plane } from "@lucide/vue";
import type { FlightDetail } from "~/types/flight";
const props = defineProps<{
  data: FlightDetail | null;
}>();
</script>

<template>
  <div
    v-if="data"
    class="bg-surface border border-secondary/10 rounded-2xl p-5 w-full select-none"
  >
    <div class="flex justify-between items-center mb-5">
      <div class="flex flex-col text-left">
        <span class="text-[10px] font-medium text-secondary/80">
          Upcoming Flight
        </span>
        <span class="text-sm font-medium text-primary tracking-tight">
          {{ data.flight_number }}
        </span>
      </div>
      <div class="flex flex-col text-right">
        <span class="text-[10px] font-medium text-secondary/80"> Type </span>
        <span class="text-sm font-medium text-primary tracking-tight">
          {{ data.aircraft_type }}
        </span>
      </div>
    </div>

    <div class="flex justify-between items-center relative">
      <div class="flex flex-col flex-1 gap-0.5">
        <span class="text-[22px] font-semibold text-primary leading-none mb-1">
          {{ data.departure.code }}
        </span>
        <span
          class="text-[11px] text-secondary/70 font-medium tracking-tight truncate"
        >
          {{ data.departure.city }}
        </span>
        <span class="text-[10px] text-secondary/70 font-medium tracking-tight">
          {{ data.departure.time }}
        </span>
      </div>

      <div
        class="flex flex-col items-center justify-center flex-1 h-14 relative select-none"
      >
        <div
          class="absolute left-0 top-4.5 size-2 rounded-full border-2 border-primary bg-surface z-10"
        />
        <svg
          class="w-full h-7 overflow-visible stroke-secondary/20"
          viewBox="0 0 100 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0,16 Q 50,-8 100,16"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-dasharray="4 4"
          />
        </svg>
        <div
          class="absolute right-0 top-4.5 w-2 h-2 rounded-full border-2 border-primary bg-surface z-10"
        />
        <div
          class="absolute top-1 left-1/2 -translate-x-1/2 text-primary bg-surface"
        >
          <Plane class="size-4 rotate-45" />
        </div>

        <span
          class="text-[11px] text-secondary font-semibold mt-1 tracking-tight z-10 px-1"
        >
          {{ data.duration }}
        </span>
      </div>

      <div class="flex flex-col flex-1 gap-0.5 text-right">
        <span class="text-[22px] font-semibold text-primary leading-none mb-1">
          {{ data.arrival.code }}
        </span>
        <span
          class="text-[11px] text-secondary/70 font-medium tracking-tight truncate"
        >
          {{ data.arrival.city }}
        </span>
        <span class="text-[10px] text-secondary/70 font-medium tracking-tight">
          {{ data.arrival.time }}
        </span>
      </div>
    </div>

    <div
      class="flex gap-1.5 items-center border-t border-dashed border-secondary/20 pt-4 mt-4"
    >
      <Calendar class="size-3.5 text-secondary/70" />
      <span class="text-[10px] text-secondary/70 font-medium tracking-tight">{{
        data.date_display
      }}</span>
    </div>
  </div>
  <div
    v-else
    class="text-xs text-secondary p-4 bg-surface rounded-xl border border-dashed border-secondary/20 text-center"
  >
    No flight schedule matching found.
  </div>
</template>
