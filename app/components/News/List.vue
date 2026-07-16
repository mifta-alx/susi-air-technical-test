<script setup lang="ts">
import type { NewsItem } from "~/types/news";

const props = defineProps<{
  data: NewsItem[];
  loading: boolean;
}>();
</script>

<template>
  <div class="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
    <div
      class="flex gap-4 overflow-x-auto scrollbar-hide px-5 snap-x snap-mandatory pb-2"
    >
      <div
        v-for="i in 3"
        v-if="loading"
        class="flex-none animate-pulse bg-secondary/10 aspect-4/5 w-70 rounded-2xl"
      />
      <NewsItem v-else v-for="news in data" :key="news.id" :news="news" />
    </div>
  </div>
</template>
