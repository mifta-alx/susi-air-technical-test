<script setup lang="ts">
const props = defineProps<{
  items: Array<{ url: string }>;
}>();

const route = useRoute();
const activeIndex = computed(() => {
  return props.items.findIndex((item) => {
    if (item.url === "/") {
      return route.path === "/";
    }
    return route.path.startsWith(item.url);
  });
});

const indicatorStyle = computed(() => {
  if (activeIndex.value === -1) return { width: "0%", left: "0%", opacity: 0 };

  const totalTabs = props.items.length;
  const tabWidth = 100 / totalTabs;

  const borderSize = 60;
  const centerPosition = tabWidth * activeIndex.value + tabWidth / 2;

  return {
    width: `${borderSize}px`,
    left: `${centerPosition}%`,
    transform: "translateX(-50%)",
    opacity: 1,
  };
});
</script>

<template>
  <nav
    class="fixed bottom-0 left-0 right-0 z-30 shadow-lg bg-surface p-3 flex items-center justify-center"
  >
    <div
      class="relative flex flex-row items-center justify-around w-full max-w-lg"
    >
      <div
        class="absolute -top-3 h-0.75 bg-primary transition-all duration-300 ease-in-out rounded-sm"
        :style="indicatorStyle"
      />
      <slot />
    </div>
  </nav>
</template>
