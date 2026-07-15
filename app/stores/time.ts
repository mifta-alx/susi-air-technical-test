import { defineStore } from 'pinia'

export const useTimeStore = defineStore('time', () => {
  const documentStore = useDocumentStore()
  // const scheduleStore = useScheduleStore()

  const chartToday = computed(() => documentStore.today || '2026-05-31')
  // const scheduleToday = computed(() => scheduleStore.today || '2026-05-15')

  return {
    chartToday,
    // scheduleToday
  }
})