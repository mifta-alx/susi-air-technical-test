<script lang="ts" setup>
import { Hourglass } from "@lucide/vue";

const emit = defineEmits<{
  (e: "closePlaceholder"): void;
}>();
</script>

<template>
  <div
    class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6"
  >
    <div
      class="bg-white rounded-2xl p-5 w-full max-w-sm text-center flex flex-col items-center justify-center gap-5"
    >
      <Hourglass class="size-16 mt-4 text-secondary opacity-15" />
      <div class="space-y-1 mb-2">
        <h3 class="font-bold text-primary text-xl">Coming Soon</h3>
        <p class="text-xs text-secondary">
          Detailed schedule page is unavailable.
        </p>
      </div>
      <button
        @click="emit('closePlaceholder')"
        class="w-full py-2.5 bg-primary text-surface rounded-xl font-semibold text-sm active:scale-[0.98] transition-all duration-300"
      >
        Dismiss
      </button>
    </div>
  </div>
</template>
