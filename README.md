# Susi Air Operations Tool ✈️

A modern, highly optimized internal dashboard built for Susi Air pilots and operation teams to track regulatory flight hours limits, manage dynamic flight trend analytics, monitor document expiries, and stay updated with the latest operation news.

## 🔗 Live Deployment
*   **Production URL:** [https://susi-air-test.withalx.com](https://susi-air-test.withalx.com)

---

## 🛠️ Tech Stack & Choices

This project leverages the latest web technologies to deliver instantaneous loading times and robust performance:

### 1. Framework: Nuxt v4 & Vue v3.5
*   **Why:** Nuxt 4 introduces optimized directory structures and enhanced server-hydration layers. Paired with Vue 3.5's reactive memory optimizations, the application ensures extremely light CPU/RAM overhead on mobile devices.

### 2. Styling: Tailwind CSS v4 (`@tailwindcss/vite`)
*   **Why:** Tailwind v4 runs on a lightning-fast Rust-based engine with native Vite compiler integration. It removes the need for complex PostCSS setups, compiling styles nearly instantaneously.
*   **Helpers:** `clsx` and `tailwind-merge` are utilized for safe, dynamic utility-class merges, preventing Tailwind cascading conflicts on custom reusable components.

### 3. State Management: Pinia
*   **Why:** Pinia is the lightweight state-management engine, perfect for maintaining complex application states with minimal boilerplate.

### 4. Charts: Apache ECharts (`nuxt-echarts`)
*   **Why:** ECharts 6 utilizes lightweight HTML5 Canvas rendering instead of bloated SVG nodes. This allows rendering hundreds of rolling data-points without stuttering, especially on low-end iPads typically found in pilot cockpits.
*   **Safety:** Wrapped in `<ClientOnly>` to ensure full SSR-safety and zero hydration mismatch logs during Nuxt server-side generation.

### 5. Reliability: Nuxt PWA (`@vite-pwa/nuxt`)
*   **Why:** Installed to turn this application into a Progressive Web App (PWA), ensuring it can be installed on pilots' tablets and function in areas with low or spotty cellular connectivity.

---

## 🚀 Getting Started

### Prerequisites
Ensure you have **Node.js (v18.x or higher)** and **pnpm** (recommended) or npm installed.

### 1. Clone the Repository
```bash
git clone https://github.com/mifta-alx/susi-air-technical-test.git
cd susi-air-technical-test
```

### 2. Install Dependencies
```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install
```

### 3. Start Development Server
Runs the development server on `http://localhost:3000`:
```bash
# Using pnpm
pnpm dev

# Or using npm
npm run dev
```

### 4. Build for Production
Build the application under Nuxt 4's optimized build engine:
```bash
# Using pnpm
pnpm build

# Or using npm
npm run build
```

### 5. Preview Locally
Preview the production build locally to test server-side hydration:
```bash
# Using pnpm
pnpm preview

# Or using npm
npm run preview
```

---

## 💡 Notes & Future Improvements

### Why these libraries?
*   **Nuxt 4 & Vue 3.5:** Chosen for the latest performance optimizations and a streamlined development experience.
*   **Tailwind CSS v4:** Selected for its speed and native Vite support.
*   **Pinia:** Provides a clean and reactive state management solution.
*   **Apache ECharts:** Essential for high-performance data visualization on mobile/tablet devices.
*   **Nuxt PWA:** Critical for ensuring the dashboard works in offline or low-connectivity environments.

### Future Improvements (With More Time)
If I had more time to refine this project, I would focus on:

1.  **Testing:** Implement comprehensive unit and integration testing using Vitest to ensure business logic remains solid during scaling.
2.  **API Caching:** Implement a more robust offline-first synchronization strategy (e.g., TanStack Query with persistence) to handle intermittent connectivity more gracefully than basic PWA caching.
3.  **UI/UX Accessibility:** Conduct an accessibility audit (WCAG 2.1) to ensure the dashboard is usable for all staff members, including those with visual impairments, in high-pressure cockpit environments.
4.  **Deployment Pipeline:** Set up automated CI/CD workflows using GitHub Actions to run linters and tests on every push.
