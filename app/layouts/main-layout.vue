<script setup lang="ts">

const flightStore = useFlightStore();
const pilotName = computed(() => flightStore.getPilot?.name || "Pilot");
const totalHours = computed(() => flightStore.getTotalHours || 0);

</script>

<template>
  <div class="min-h-screen bg-background flex flex-col items-center">
    <Header 
      :name="pilotName" 
      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      :total-hours="totalHours" 
    />
    <main class="w-full max-w-md px-5 pt-2 pb-24 flex">
      <slot />
    </main>
    <BottomTabNav />
  </div>
</template>
