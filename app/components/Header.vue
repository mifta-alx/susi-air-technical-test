<script setup lang="ts">

const props = defineProps<{
  name: string;
  totalHours: number;
}>();

const route = useRoute();
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

const pageTitle = computed(() => {
  if (route.path === "/") {
    return props.name;
  }
  return route.meta.title ? String(route.meta.title) : "Page Title";
});

const isDashboard = computed(() => route.path === "/");

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    class="sticky top-0 z-50 flex items-center justify-between w-full py-4 px-5 transition-all duration-300"
    :class="[
      isScrolled
        ? 'py-5 bg-surface backdrop-blur-md shadow-sm'
        : 'pt-10 bg-transparent',
    ]"
  >
    <div class="flex flex-col gap-0.5">
      <span
        v-if="isDashboard"
        class="text-xs font-medium text-secondary/80 tracking-tight"
      >
        Welcome back,
      </span>
      <h1
        class="text-2xl font-bold tracking-tight text-primary transition-all duration-300"
        :class="{ 'text-xl': isScrolled }"
      >
        {{ isDashboard ? name : pageTitle }}
      </h1>

      <div
        v-if="isDashboard"
        class="flex items-center gap-1.5 text-xs text-secondary/80 font-medium transition-all"
      >
        <span
          >You've flown <span class="font-semibold text-primary">{{ totalHours.toFixed(1) }} hrs</span> total</span
        >
      </div>
    </div>

    <div class="flex items-center gap-3">
      <NotificationButton />
      <UiAvatar :name="name" />
    </div>
  </header>
</template>
