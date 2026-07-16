<template>
  <div class="grid grid-cols-7 gap-1 text-center">
    <span
      v-for="day in ['S', 'M', 'T', 'W', 'T', 'F', 'S']"
      :key="day"
      class="text-xs font-semibold text-secondary/80 uppercase"
    >
      {{ day }}
    </span>
  </div>
</template>
