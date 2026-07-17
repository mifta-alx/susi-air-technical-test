<script setup lang="ts">
const props = defineProps<{ value: string }>();
const context = inject<{ modelValue: any }>("toggleContext");

const isActive = computed(() => context?.modelValue.value === props.value);
</script>

<template>
  <button
    type="button"
    @click="context!.modelValue.value = value"
    class="relative flex-1 py-2 text-[10px] font-semibold uppercase tracking-wider transition-colors duration-300 z-10 whitespace-nowrap"
    :class="isActive ? 'text-surface' : 'text-secondary/60'"
  >
    {{ value }}
  </button>
</template>
