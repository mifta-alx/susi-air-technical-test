<!-- pages/[...slug].vue -->
<script setup lang="ts">
definePageMeta({
  layout: "blank",
});

useSeoMeta({
  title: "Coming soon - Susi Air Operations Tool",
  ogTitle: "Coming soon - Susi Air Operations Tool",
});

const route = useRoute();

const pageName = computed(() => {
  const path = route.path.replace('/', '');
  if (!path) return 'Feature';
  return path
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
});
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-[calc(100vh-180px)] px-6 text-center isolate">
    <!-- Card Wrapper Berbumbu Glassmorphism khas Nuxt 4/v4 -->
    <div class="w-full max-w-sm p-8 rounded-3xl bg-surface/60 backdrop-blur-xl border border-secondary/10 shadow-sm flex flex-col items-center">
      
      <!-- Icon Container yang Lebih Estetik -->
      <div class="relative w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-primary/5 border border-primary/10 group">
        <!-- Efek Pendaran Cahaya di Belakang Icon -->
        <div class="absolute inset-0 bg-primary/10 rounded-2xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
        
        <!-- Icon Emoji dengan Animasi Halus -->
        <span class="relative text-3xl animate-pulse">🛠️</span>
      </div>

      <!-- Teks Utama -->
      <span class="text-[10px] font-bold tracking-widest text-secondary/40 uppercase mb-1">
        Under Construction
      </span>
      <h1 class="text-xl font-bold text-primary tracking-tight mb-2">
        {{ pageName }} Module
      </h1>
      <p class="text-xs text-secondary/60 leading-relaxed max-w-60 mb-6">
        This section is currently being calibrated for your flight logs. We'll be cleared for takeoff soon.
      </p>

      <!-- Tombol Kembali yang Selaras dengan Tema Aplikasi Kamu -->
      <NuxtLink
        to="/"
        class="w-full py-2.5 text-xs font-semibold text-surface bg-primary rounded-xl shadow-sm hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 cursor-pointer select-none"
      >
        Return to Dashboard
      </NuxtLink>
    </div>
  </div>
</template>