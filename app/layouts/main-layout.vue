<script setup lang="ts">
const flightStore = useFlightStore();

onMounted(async () => {
  await flightStore.initData();
});
</script>

<template>
  <div class="min-h-screen bg-background flex flex-col items-center">
    <Header
      :loading="flightStore.loading"
      :name="flightStore.getPilot.name"
      :src="flightStore.getPilot.avatarSrc"
      :total-hours="flightStore.getPilot.totalFlightHours"
    />
    <main class="w-full max-w-md px-5 pt-2 pb-24 flex">
      <slot />
    </main>
    <BottomTabNav />
  </div>
</template>
