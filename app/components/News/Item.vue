<script lang="ts" setup>
import type { NewsItem } from '~/types/news';

const props = defineProps<{
  news: NewsItem;
}>();
</script>
<template>
  <NuxtLink
    href="/"
    class="flex-none relative w-70 aspect-4/5 bg-surface border border-secondary/10 rounded-2xl overflow-hidden flex flex-col select-none active:scale-[0.98] transition-all duration-300"
  >
    <img
      :src="news.image"
      :alt="news.title"
      class="w-full h-full object-cover"
    />
    <div class="absolute p-3 bottom-0">
      <div
        class="p-4 flex flex-col flex-1 justify-between gap-3 bg-surface rounded-xl"
      >
        <h4
          class="font-bold text-app-primary text-sm line-clamp-2 leading-snug tracking-tight"
        >
          {{ news.title }}
        </h4>
        <div class="flex flex-row justify-between items-center">
          <span
            class="text-[11px] font-semibold tracking-tight uppercase text-brand"
            >{{ news.category }}</span
          >
          <span class="text-[11px] text-app-secondary font-medium">
            {{ news.date }}
          </span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
