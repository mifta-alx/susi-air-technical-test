<script setup lang="ts">
const props = defineProps<{
  name: string;
  src?: string;
}>();

const initials = computed(() => {
  if (!props.name) return "P";
  const parts = props.name.trim().split(/\s+/);
  if (parts.length > 1 && parts[0] && parts[1]) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return parts[0]?.charAt(0).toUpperCase() || "P";
});
</script>

<template>
  <div
    class="border-secondary/10 bg-surface flex items-center justify-center border size-12 rounded-xl overflow-hidden select-none"
  >
    <img v-if="src" :src="src" :alt="name" class="w-full h-full object-cover" />

    <span v-else class="text-sm font-bold text-primary tracking-wider">
      {{ initials }}
    </span>
  </div>
</template>
