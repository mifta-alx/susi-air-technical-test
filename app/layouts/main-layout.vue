<script setup lang="ts">

const flightStore = useFlightStore();
const pilotName = computed(() => flightStore.getPilot?.name || "Pilot");
const totalHours = computed(() => flightStore.getTotalHours || 0);

</script>

<template>
  <div class="min-h-screen bg-background flex flex-col items-center">
    <Header 
      :name="pilotName" 
      :total-hours="totalHours" 
    />
    <main class="w-full max-w-md px-5 pt-2 pb-24 flex">
      <slot />
    </main>
    <BottomTabNav />
  </div>
</template>
