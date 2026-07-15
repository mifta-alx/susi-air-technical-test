<script setup lang="ts">
import type { ProcessedDocument } from "~/types/documents";

const props = defineProps<{
  data: ProcessedDocument[];
}>();
</script>

<template>
  <div class="flex flex-col gap-2 w-full">
    <!-- <ClientOnly> -->
    <DocumentItem
      v-for="doc in data"
      :key="doc.id"
      :id="doc.id"
      :label="doc.label"
      :expiryDate="doc.expiryDate"
      :daysRemaining="doc.daysRemaining"
      :status="doc.status"
    />
    <!-- </ClientOnly>

    <template #fallback>
      <div class="animate-pulse bg-secondary h-14 w-full rounded-xl"></div>
    </template> -->
  </div>
</template>
