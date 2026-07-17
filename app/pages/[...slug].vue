<script setup lang="ts">
import { Construction } from "@lucide/vue";

definePageMeta({
  layout: "blank",
});
const route = useRoute();
const router = useRouter();

const pageName = computed(() => {
  const path = route.path.replace("/", "");
  if (!path) return "Feature";
  return path
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
});

useSeoMeta({
  title: `${pageName.value} - Susi Air Operations`,
  ogTitle: `${pageName.value} - Susi Air Operations`,
});

const backToDashboard = () => {
  router.push("/");
};
</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-[calc(100vh-110px)] w-full px-6 text-center isolate"
  >
    <Construction class="size-24 text-secondary opacity-15 mb-4" />
    <span
      class="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase mb-1 block"
    >
      Coming soon
    </span>

    <h1 class="text-xl font-bold text-primary tracking-tight mb-3">
      "{{ pageName }}" is not available
    </h1>

    <p class="text-sm text-secondary leading-relaxed max-w-60 mb-8">
      This module is currently unavailable. Please check back later.
    </p>

    <UiButton class="w-full" @click="backToDashboard">
      Return to Dashboard
    </UiButton>
  </div>
</template>
