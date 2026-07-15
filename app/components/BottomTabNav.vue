<script setup lang="ts">
import { House, Calendar, NotebookText, CircleEllipsis} from "@lucide/vue";

const items = [
  {
    title: "Home",
    url: "/",
    icon: House,
  },
  {
    title: "Schedule",
    url: "/schedule",
    icon: Calendar,
  },
  {
    title: "Logbook",
    url: "/logs",
    icon: NotebookText,
  },
  {
    title: "More",
    url: "/more",
    icon: CircleEllipsis,
  },
];
</script>

<template>
    <UiBottomTabNavigator :items="items">
      <UiBottomTabItem
        v-for="(item, index) in items"
        :key="index"
        :icon="item.icon"
        :href="item.url"
      >
        {{ item.title }}
      </UiBottomTabItem>
    </UiBottomTabNavigator>
</template>
