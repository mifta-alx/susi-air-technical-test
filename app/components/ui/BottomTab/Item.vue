<script setup lang="ts">
const props = defineProps({
  href: { type: String, required: true },
  icon: { type: Function, required: true },
});

const route = useRoute();
const isActive = computed(() => route.path === props.href);
</script>

<template>
  <NuxtLink
    :to="href"
    :class="{
      'text-primary!': isActive,
    }"
    class="flex flex-col items-center justify-center w-full h-full text-secondary/70 gap-1.5"
  >
    <component
      :is="icon"
      class="size-6 transition-all duration-300"
      :class="isActive ? 'stroke-[2px]' : 'stroke-[1.75px]'"
    />
    <span class="text-xs">
      <slot />
    </span>
  </NuxtLink>
</template>
