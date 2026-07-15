<script lang="ts" setup>
defineProps<{
  src: string;
}>();
</script>
<template>
    <NuxtImg :src="src" class="obejct-cover size-12 rounded-lg" />
</template>
