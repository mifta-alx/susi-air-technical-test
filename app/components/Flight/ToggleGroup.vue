<script setup lang="ts">
import { provide, computed } from 'vue';

const modelValue = defineModel<string>({ required: true });

const props = defineProps<{
  options: string[];
}>();

// Sediakan state untuk dibaca oleh ToggleItem
provide('toggleContext', {
  modelValue,
});

// Cari tahu index mana yang sedang aktif
const activeIndex = computed(() => props.options.indexOf(modelValue.value));

// Kalkulasi gaya background menggunakan logika center anchor dari bottom nav kamu
const pillStyle = computed(() => {
  if (activeIndex.value === -1) return { width: '0%', left: '0%', opacity: 0 };

  const totalTabs = props.options.length;
  const tabWidth = 100 / totalTabs;

  // Cari titik tengah dari tab yang aktif
  const centerPosition = tabWidth * activeIndex.value + tabWidth / 2;

  return {
    // Lebar pill disesuaikan dengan lebar satu tab penuh (dikurangi kompensasi padding)
    width: `calc(${tabWidth}% - 4px)`,
    // Tembak koordinat ke titik tengah tab aktif
    left: `${centerPosition}%`,
    // Geser mundur -50% agar posisi pill pas sempurna di tengah tab tersebut
    transform: 'translateX(-50%)',
    opacity: 1,
  };
});
</script>

<template>
  <div class="flex justify-center">
    <!-- Menggunakan w-full dan max-w agar ukuran flex row terbagi rata sempurna lewat tombolnya -->
    <div
      class="relative h-10 w-full max-w-xs flex flex-row bg-surface p-1 rounded-xl border border-secondary/20 isolate items-center"
    >
      <!-- Pill Background yang sliding mengikuti logika center posisi -->
      <div
        class="absolute top-1 bottom-1 rounded-lg bg-primary border border-primary/10 transition-all duration-300 ease-in-out -z-10"
        :style="pillStyle"
      />
      
      <slot />
    </div>
  </div>
</template>
<!-- <template>
  <div class="flex justify-center">
    <div
      class="relative h-10 flex flex-row bg-surface p-1 rounded-2xl border border-secondary/20 gap-1"
    >
     <slot/>
    </div>
  </div>
</template> -->
