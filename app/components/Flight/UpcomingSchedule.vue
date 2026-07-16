<script setup lang="ts">
import { Plane } from "@lucide/vue";
import type { UpcomingFlight } from "~/types/schedules";
const props = defineProps<{
  data: UpcomingFlight | null;
}>();
</script>

<template>
  <NuxtLink
    v-if="data"
    href="/"
    class="bg-surface border border-secondary/10 rounded-2xl p-5 w-full select-none flex flex-col gap-5 active:scale-[0.98] transition-all duration-300"
  >
    <div class="flex justify-between items-center">
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
      <FlightStationInfo
        :city="data.departure.city"
        :code="data.departure.code"
        :time="data.departure.time"
      />

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

      <FlightStationInfo
        :city="data.arrival.city"
        :code="data.arrival.code"
        :time="data.arrival.time"
        position="right"
      />
    </div>

    <div
      class="flex justify-between items-center"
    >
      <div class="flex gap-1.5 items-center">
        <span
          class="text-xs text-secondary/70 font-medium tracking-tight"
          >{{ data.date_display }}</span
        >
      </div>
    </div>
  </NuxtLink>
  <div
    v-else
    class="text-xs text-secondary p-4 bg-surface rounded-xl border border-dashed border-secondary/20 text-center"
  >
    No flight schedule matching found.
  </div>
</template>
