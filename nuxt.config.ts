import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: ["./app/assets/css/global.css"],
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss() as any],
    optimizeDeps: {
      include: ["@lucide/vue"],
    },
  },
  modules: ["@vite-pwa/nuxt", "@pinia/nuxt", "@nuxt/image", "nuxt-echarts"],
  echarts: {
    renderer: 'canvas',
    charts: ['LineChart'],
    components: ['DatasetComponent', 'GridComponent', 'TooltipComponent', 'MarkLineComponent']
  },
  pwa: {
    strategies : "generateSW",
    registerType: "autoUpdate",
    manifest: {
      name: "Susi Air Operations Tool",
      short_name: "SusiAir Ops",
      description:
        "Operational and professional flight monitoring tool for Susi Air.",
      theme_color: "#0E2138" ,
      background_color: "#F5F6F8",
      display: "standalone",
      orientation: "portrait",
      icons: [
        {
          src: "android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        }
      ],
    },
    workbox: {
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
    },
    injectManifest: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
    },
    devOptions: {
      enabled: false,
      suppressWarnings: true,
      navigateFallback: "/",
      navigateFallbackAllowlist: [/^\/$/],
      type: "module",
    },
    includeAssets: ["favicon.ico", "apple-touch-icon.png", "favicon-16x16.png", "favicon-32x32.png"],
  },
});