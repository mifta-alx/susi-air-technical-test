<script setup lang="ts">
import { computed, inject } from "vue";

const props = defineProps<{
  value: string;
}>();

// Ambil context dari Group parent
const context = inject<{ modelValue: any }>("toggleContext");

const isActive = computed(() => context?.modelValue.value === props.value);

const selectItem = () => {
  if (context) {
    context.modelValue.value = props.value;
  }
};
</script>

<template>
  <button
    type="button"
    @click="selectItem"
    :class="
      cn(
        'flex-1 px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors duration-300 ease-in-out focus:outline-none z-10',
        isActive
          ? 'text-surface font-bold'
          : 'text-secondary/50 hover:text-secondary/80',
      )
    "
  >
    {{ value.toUpperCase() }}
  </button>
</template>
<!-- <script setup lang="ts">
const modelValue = defineModel<string>({ required: true });

const props = defineProps<{
  value: string;
}>();

const isActive = computed(() => modelValue.value === props.value);
</script>

<template>
  <button
    type="button"
    @click="modelValue = value"
    :class="[
      'px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-[flex,background-color] duration-300 ease-in-out overflow-hidden',
      isActive
        ? 'bg-primary/80 text-surface border border-primary/60'
        : 'text-secondary/50',
    ]"
  >
    {{ value.toUpperCase() }}
  </button>
</template> -->
