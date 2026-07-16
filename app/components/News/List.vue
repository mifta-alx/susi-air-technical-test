<script setup lang="ts">
import type { NewsItem } from '~/types/news';

const props = defineProps<{
  data: NewsItem[];
}>();
</script>

<template>
  <div class="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
    <div
      class="flex gap-4 overflow-x-auto no-scrollbar px-5 snap-x snap-mandatory pb-2"
    >
      <div
        v-for="news in data"
        :key="news.id"
        class="flex-none relative w-70 aspect-4/5 bg-surface border border-secondary/10 rounded-2xl overflow-hidden flex flex-col select-none"
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
      </div>
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
