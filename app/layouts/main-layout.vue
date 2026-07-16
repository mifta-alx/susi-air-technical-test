<script setup lang="ts">

const flightStore = useFlightStore();
const pilotInfo = computed(() => flightStore.getPilot);

</script>

<template>
  <div class="min-h-screen bg-background flex flex-col items-center">
    <Header 
      :name="pilotInfo.name"
      :src="pilotInfo.avatarSrc"
      :total-hours="pilotInfo.totalFlightHours" 
    />
    <main class="w-full max-w-md px-5 pt-2 pb-24 flex">
      <slot />
    </main>
    <BottomTabNav />
  </div>
</template>
