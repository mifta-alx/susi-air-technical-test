<script lang="ts" setup>
import { cn } from "~/utils/styles";

interface Props {
  variant?: "primary" | "danger" | "secondary";
  loading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  loading: false,
  disabled: false,
  type: "button",
});

const emit = defineEmits(["click"]);
const attrs = useAttrs();

const variantClasses = {
  primary: "bg-primary text-white active:scale-[0.98]",
  danger: "bg-danger text-white active:scale-[0.98]",
  secondary: "bg-brand text-white active:scale-[0.98]",
};

const buttonClasses = computed(() => {
  return cn(
    "grow text-sm h-13 flex flex-row gap-2 justify-center items-center py-3.5 rounded-3xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100",
    variantClasses[props.variant],
    attrs.class as string,
  );
});

const handleClick = (event: MouseEvent) => {
  if (!props.loading && !props.disabled) {
    emit("click", event);
  }
};
</script>
<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    @click="handleClick"
    :class="buttonClasses"
  >
    <span
      v-if="loading"
      class="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
    ></span>

    <template v-else>
      <slot name="icon" />
      <slot />
    </template>
  </button>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
