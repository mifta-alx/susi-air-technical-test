<script lang="ts" setup>
defineProps<{
  title: string;
  description?: string;
  ctaText?: string;
  urlCta?: string
}>();
</script>
<template>
  <div class="justify-between flex items-center mb-2">
    <div>
      <h4 class="font-bold text-primary tracking-tighter text-lg">{{ title }}</h4>
      <p v-if="description" class="text-[11px] text-secondary">
        {{ description }}
      </p>
    </div>
    <NuxtLink v-if="urlCta" class="text-brand text-xs font-semibold tracking-tight" :href="urlCta">{{ ctaText || 'See all' }}</NuxtLink>
  </div>
</template>
