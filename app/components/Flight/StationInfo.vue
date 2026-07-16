<script lang="ts" setup>
const props = defineProps<{
  code: string;
  city: string;
  time: string;
  position?: string | 'left';
}>();
</script>
<template>
  <div :class="cn('flex flex-col flex-1 gap-0.5', position === 'right' && 'text-right')">
    <span class="text-[22px] font-semibold text-primary leading-none mb-1">
      {{ code }}
    </span>
    <span
      class="text-[11px] text-secondary/70 font-medium tracking-tight truncate"
    >
      {{ city }}
    </span>
    <span class="text-[10px] text-secondary/70 font-medium tracking-tight">
      {{ time }}
    </span>
  </div>
</template>
