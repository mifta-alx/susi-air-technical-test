<script lang="ts" setup>
import { computed } from "vue";
import type { DocumentStatus } from "~/types/documents";
const props = defineProps<{
  status: DocumentStatus;
}>();

const badgeConfig = computed(() => {
  const mapping: Record<DocumentStatus, { text: string; classes: string }> = {
    expired: {
      text: "Expired",
      classes: "bg-red-500/10 text-red-600 border-red-500/20",
    },
    soon: {
      text: "Expiring Soon",
      classes: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    },
    safe: {
      text: "Valid",
      classes: "bg-green-500/10 text-green-600 border-green-500/20",
    },
  };

  return (
    mapping[props.status] || {
      text: props.status,
      classes: "bg-secondary/10 text-secondary/80 border-secondary/20",
    }
  );
});
</script>
<template>
  <div
    class="inline-flex items-center px-2.5 py-0.5 text-[10px] font-semibold rounded-2xl tracking-tight transition-colors duration-150"
    :class="badgeConfig.classes"
  >
    {{ badgeConfig.text }}
  </div>
</template>
