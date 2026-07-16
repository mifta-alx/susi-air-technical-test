import { defineStore } from "pinia";
import mockDocumentsData from "~/data/mock-documents.json";

export const useTimeStore = defineStore("time", () => {
  const today = ref<string>(mockDocumentsData.today || "2026-05-31");

  const year = computed<string>(() => {
    const parts = today.value.split("-");
    return parts[0] ?? "2026";
  });

  const month = computed<string>(() => {
    const parts = today.value.split("-");
    return parts[1] ?? "05";
  });

  return {
    today,
    year,
    month
  };
});