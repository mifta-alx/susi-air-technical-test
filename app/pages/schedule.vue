<script setup lang="ts">
import type { ScheduleItem } from "~/types/schedules";

definePageMeta({
  layout: "main-layout",
  title: "Schedule",
});

useSeoMeta({
  title: "Schedule - Susi Air Operations Tool",
  ogTitle: "Schedule - Susi Air Operations Tool",
});

interface CalendarDay {
  dayNum: number;
  dateStr: string;
  duty: ScheduleItem | null;
  isPadding: boolean;
}

const showPlaceholder = ref(false);
const scheduleStore = useScheduleStore();
const timeStore = useTimeStore();

onMounted(async () => {
  await scheduleStore.fetchSchedules();
});

const todayStr = computed(() => timeStore.today);
const initialMonth = computed(() => parseInt(timeStore.month, 10) - 1);
const initialYear = computed(() => parseInt(timeStore.year, 10));

const schedulesMap = computed(() => scheduleStore.schedulesMap);

const currentYear = ref<number>(initialYear.value);
const currentMonth = ref<number>(initialMonth.value);

const daysInMonth = computed(() => {
  const date = new Date(currentYear.value, currentMonth.value + 1, 0);
  return date.getDate();
});

const firstDayOffset = computed(() => {
  const date = new Date(currentYear.value, currentMonth.value, 1);
  return date.getDay();
});

const prevMonthLastDay = new Date(
  currentYear.value,
  currentMonth.value,
  0,
).getDate();

const calendarDays = computed<CalendarDay[]>(() => {
  const days: CalendarDay[] = [];

  for (let i = firstDayOffset.value - 1; i >= 0; i--) {
    days.push({
      dayNum: prevMonthLastDay - i,
      dateStr: "",
      duty: null,
      isPadding: true,
    });
  }

  for (let i = 1; i <= daysInMonth.value; i++) {
    const dateString = `${currentYear.value}-${String(currentMonth.value + 1).padStart(2, "0")}-${String(i).padStart(2, "0")}`;
    days.push({
      dayNum: i,
      dateStr: dateString,
      duty: schedulesMap.value.get(dateString) || null,
      isPadding: false,
    });
  }

  const remainingSlots = (days.length > 35 ? 42 : 35) - days.length;
  for (let i = 1; i <= remainingSlots; i++) {
    days.push({
      dayNum: i,
      dateStr: "",
      duty: null,
      isPadding: true,
    });
  }

  return days;
});

const nextMonth = () => {
  if (currentMonth.value === 11) {
    currentMonth.value = 0;
    currentYear.value++;
  } else {
    currentMonth.value++;
  }
};

const prevMonth = () => {
  if (currentMonth.value === 0) {
    currentMonth.value = 11;
    currentYear.value--;
  } else {
    currentMonth.value--;
  }
};

const handleDateClick = (dayData: any) => {
  if (dayData.duty) {
    showPlaceholder.value = true;
  }
};

const totalActiveDays = computed(() => {
  return calendarDays.value.filter((day) => day.duty !== null).length;
});
</script>

<template>
  <div class="flex flex-col w-full">
    <ScheduleCalendarCard :loading="scheduleStore.loading">
      <ScheduleCalendarNavigation
        :current-month="currentMonth"
        :current-year="currentYear"
        :total-active-days="totalActiveDays"
        @prev="prevMonth"
        @next="nextMonth"
      />

      <ScheduleCalendarDays />

      <div class="grid grid-cols-7 gap-1.5">
        <ScheduleCalendarDateItem
          v-for="(day, index) in calendarDays"
          :key="index"
          :day="day?.dayNum"
          :duty="day?.duty"
          :is-padding="day?.isPadding"
          :is-today="day?.dateStr === todayStr"
          @date-click="handleDateClick"
        />
      </div>
    </ScheduleCalendarCard>

    <SchedulePlaceholderDetail
      v-if="showPlaceholder"
      @close-placeholder="showPlaceholder = false"
    />
  </div>
</template>
