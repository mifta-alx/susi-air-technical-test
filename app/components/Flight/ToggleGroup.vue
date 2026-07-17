<script setup lang="ts">
const modelValue = defineModel<string>({ required: true });
const props = defineProps<{ options: string[] }>();
provide("toggleContext", { modelValue });

const containerRef = ref<HTMLElement | null>(null);
const pillStyle = ref({ width: "0px", left: "0px" });

const updatePill = () => {
  if (!containerRef.value) return;
  const index = props.options.indexOf(modelValue.value);
  const buttons = containerRef.value.querySelectorAll("button");
  const targetBtn = buttons[index];
  if (targetBtn) {
    pillStyle.value = {
      width: `${targetBtn.offsetWidth}px`,
      left: `${targetBtn.offsetLeft}px`,
    };
  }
};

watch(modelValue, updatePill, { flush: "post" });
onMounted(updatePill);
</script>

<template>
  <div class="flex justify-center">
    <div
      ref="containerRef"
      class="relative w-full flex bg-secondary/5 p-1 rounded-xl border border-secondary/20"
    >
      <div
        class="absolute top-1 bottom-1 rounded-lg bg-primary transition-all duration-300 ease-in-out"
        :style="pillStyle"
      />
      <slot />
    </div>
  </div>
</template>
