<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useRoute } from "vue-router";

const props = defineProps<{
  name: string;
  totalHours: number;
  src?: string;
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
  return route.meta.title ? String(route.meta.title) : "";
});

const isDashboard = computed(() => route.path === "/");

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    :key="route.path"
    class="header-scroll sticky top-0 z-50 flex items-center justify-between w-full max-w-md px-5 transition-all duration-300 isolate"
    :data-scrolled="isScrolled"
  >
    <div class="flex flex-col gap-0.5">
      <span
        v-if="isDashboard"
        class="text-xs font-medium text-secondary/80 tracking-tight"
      >
        Welcome back,
      </span>
      <h1
        class="header-title text-2xl font-bold tracking-tight text-primary transition-all duration-300"
      >
        {{ isDashboard ? name : pageTitle }}
      </h1>

      <div
        v-if="isDashboard"
        class="flex items-center gap-1.5 text-xs text-secondary/80 font-medium transition-all"
      >
        <span>
          You've flown
          <span class="font-semibold text-primary"
            >{{ totalHours.toFixed(1) }} hrs</span
          >
          total
        </span>
      </div>
    </div>

    <div class="flex items-center gap-3">
      <NotificationButton />
      <UiAvatar :name="name" :src="src" />
    </div>
  </header>
</template>
