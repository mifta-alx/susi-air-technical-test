<script lang="ts" setup>
const props = defineProps<{
  loading: boolean;
}>();
</script>
<template>
  <div
    v-if="loading"
    class="rounded-2xl h-130 w-full bg-secondary/10 animate-pulse"
  />
  <div
    v-else
    class="bg-surface border border-secondary/10 p-5 rounded-2xl flex flex-col gap-5"
  >
    <slot />
    <ScheduleLegendCard />
  </div>
</template>
