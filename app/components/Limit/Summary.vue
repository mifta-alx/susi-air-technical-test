<script setup lang="ts">
interface LimitCardItem {
  id: string;
  title: string;
  subtitle: string;
  current: number;
  limit: number;
}

const props = defineProps<{
  data: LimitCardItem[];
  loading: boolean;
}>();
</script>

<template>
  <div class="grid grid-cols-2 gap-2">
    <div
      v-if="loading"
      v-for="i in 4"
      class="flex animate-pulse bg-secondary/10 h-25.5 w-full rounded-xl"
    />
    <LimitCard
      v-else
      v-for="(item, key) in data"
      :key="key"
      :period="key"
      :label="item.title"
      :limit="item.limit"
      :current="item.current"
    />
  </div>
</template>
