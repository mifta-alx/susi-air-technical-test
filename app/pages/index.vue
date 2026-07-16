<script setup lang="ts">
definePageMeta({
  layout: "main-layout",
  title: "Home",
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

const isLoading = ref(true);

onMounted(async () => {
  await Promise.all([
    flightStore.initData(),
    newsStore.fetchNews(),
    scheduleStore.fetchSchedules(),
  ]);
  isLoading.value = false;
});

const thisDay = computed(() => timeStore.today);
</script>

<template>
  <div class="flex flex-col gap-4 w-full">
    <FlightUpcomingSchedule
      :data="scheduleStore.upcomingSchedule"
      :loading="isLoading"
    />
    <div>
      <SectionHeader
        title="Latest News"
        :description="formatDate(thisDay)"
        url-cta="/news"
      />
      <NewsList :data="newsStore.latestNews" :loading="isLoading" />
    </div>
    <div>
      <SectionHeader title="Limit Summary" />
      <LimitSummary
        :data="flightStore.getLimitCardsData"
        :loading="isLoading"
      />
    </div>
    <div>
      <SectionHeader
        title="Flight Hours Trend"
        description="Rolling cumulative flight time analysis against regulatory caps."
      />
      <!-- <FlightTrendCard /> -->
    </div>
    <div>
      <SectionHeader title="My Documents" />
      <DocumentList
        :data="documentsStore.getProcessedDocuments"
        :loading="isLoading"
      />
    </div>
  </div>
</template>
