import { defineStore } from "pinia";
import newsData from "~/data/mock-news.json";
import type { NewsItem } from "~/types/news";

export const useNewsStore = defineStore("news", {
  state: () => ({
    items: newsData as NewsItem[],
    loading: true,
  }),
  actions: {
    async fetchNews() {
      this.loading = true;
      await new Promise(resolve => setTimeout(resolve, 600));
      this.loading = false;
    }
  },
  getters: {
    latestNews: (state) => state.items.slice(0, 3),
  },
});
