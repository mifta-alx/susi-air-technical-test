<script setup lang="ts">
interface LimitCardItem {
  id: string
  title: string
  subtitle: string
  current: number
  limit: number
}

const props = defineProps<{
  data: LimitCardItem[]
}>();
</script>

<template>
  <div class="grid grid-cols-2 gap-2">
    <LimitCard 
      v-for="(item, key) in data" 
      :key="key"
      :period="key"
      :label="item.title"
      :limit="item.limit"
      :current="item.current"
    />
  </div>
</template>
