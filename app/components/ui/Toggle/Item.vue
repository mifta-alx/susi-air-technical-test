<script setup lang="ts">
const modelValue = defineModel<string>({ required: true })

defineProps<{
  value: string
}>()
</script>

<template>
  <button
    type="button"
    @click="modelValue = value"
    :class="[
      'px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all duration-150',
      modelValue === value
        ? 'bg-white text-blue-600 shadow-sm border border-slate-100'
        : 'text-slate-400 hover:text-slate-600'
    ]"
  >
    {{ value.toUpperCase() }}
  </button>
</template>