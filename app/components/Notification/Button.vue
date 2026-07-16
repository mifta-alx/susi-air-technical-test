<script setup lang="ts">
import { Bell } from '@lucide/vue';

</script>

<template>
  <button
    type="button"
    class="border border-secondary/10 bg-surface size-12 flex items-center justify-center rounded-xl active:scale-[0.98] transition-all duration-300 "
  >
  <div class="relative">
    <Bell class="size-5 stroke-2 text-primary" />
    <div class="absolute size-2 rounded-full bg-brand -top-px right-px"/>
  </div>
  </button>
</template>
