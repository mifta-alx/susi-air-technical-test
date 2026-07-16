<script setup lang="ts">
import type { ProcessedDocument } from "~/types/documents";

const props = defineProps<{
  data: ProcessedDocument[];
  loading: boolean;
}>();
</script>

<template>
  <div class="flex flex-col gap-2 w-full">
    <div
      v-if="loading"
      v-for="i in 5"
      class="flex animate-pulse bg-secondary/10 w-full h-18.5 rounded-xl"
    />
    <DocumentItem
      v-else
      v-for="doc in data"
      :key="doc.id"
      :id="doc.id"
      :label="doc.label"
      :expiryDate="doc.expiryDate"
      :daysRemaining="doc.daysRemaining"
      :status="doc.status"
    />
  </div>
</template>
