<script setup lang="ts">
import type { FlightDetail } from "~/types/flight";

definePageMeta({
  layout: "main-layout",
  title: "Home"
});
useSeoMeta({
  title: "Home - Susi Air Operations Tool",
  ogTitle: "Home - Susi Air Operations Tool",
});
const flightStore = useFlightStore();
const timeStore = useTimeStore();
const documentsStore = useDocumentStore();
const newsStore = useNewsStore();
const scheduleStore = useScheduleStore();

const thisDay = computed(() => timeStore.chartToday);
const limitCards = computed(() => flightStore.getLimitCardsData || []);
const processedDocuments = computed(
  () => documentsStore.getProcessedDocuments || [],
);
const listNews = computed(() => newsStore.latestNews || []);
const upcomingSchedule = computed<FlightDetail | null>(
  () => scheduleStore.upcomingSchedule || null,
);
</script>

<template>
  <div class="flex flex-col gap-4 w-full">
    <FlightUpcomingSchedule :data="upcomingSchedule" />
    <div>
      <SectionHeader
        title="Latest News"
        :description="formatDate(thisDay)"
        url-cta="/"
      />
      <NewsList :data="listNews" />
    </div>
    <div>
      <SectionHeader title="Limit Summary" />
      <LimitSummary :data="limitCards" />
    </div>
    <div>
      <!-- <SectionHeader title="Flight Hours Trend" description="Rolling cumulative flight time analysis against regulatory caps." /> -->
      <!-- <FlightTrendCard /> -->
    </div>
    <div>
      <SectionHeader title="My Documents" />
      <DocumentList :data="processedDocuments" />
    </div>
  </div>
</template>
