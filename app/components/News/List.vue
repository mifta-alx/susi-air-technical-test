<script setup lang="ts">
import type { NewsItem } from "~/types/news";

const props = defineProps<{
  data: NewsItem[];
}>();
</script>

<template>
  <div class="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
    <div
      class="flex gap-4 overflow-x-auto scrollbar-hide px-5 snap-x snap-mandatory pb-2"
    >
      <NewsItem v-for="news in data" :key="news.id" :news="news" />
    </div>
  </div>
</template>
