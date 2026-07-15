import { defineStore } from "pinia";
import newsData from "~/data/mock-news.json";
import type { NewsItem } from "~/types/news";

export const useNewsStore = defineStore("news", {
  state: () => ({
    items: newsData as NewsItem[],
    loading: false,
    error: null as string | null,
  }),
  getters: {
    latestNews: (state) => state.items.slice(0, 3),
  },
  actions: {
    async fetchNews() {
      this.loading = true;
      try {
        this.items = newsData;
      } catch (err) {
        this.error = 'Failed to load news';
      } finally {
        this.loading = false;
      }
    }
  }
});
