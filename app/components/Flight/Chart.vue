<script setup lang="ts">
const props = defineProps<{
  displayDates: string[]
  chartDataValues: number[]
  limit: number
  yMax: number
  todayStr: string
}>()

const chartOption = computed(() => {
  return {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#e2e8f0',
      textStyle: { color: '#1e293b', fontSize: 12 },
      formatter: (params: any) => {
        const item = params[0]
        const isToday = item.name === props.todayStr ? ' <b class="text-blue-600">(Today)</b>' : ''
        return `<div>
          <p class="text-[11px] text-gray-400 font-medium">${item.name}${isToday}</p>
          <p class="text-sm font-bold mt-0.5">${item.value} hrs <span class="text-[10px] font-normal text-gray-500">rolling</span></p>
        </div>`
      }
    },
    grid: {
      left: '4%',
      right: '6%',
      bottom: '10%',
      top: '12%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: props.displayDates,
      axisLabel: {
        fontSize: 10,
        color: '#64748b',
        formatter: (value: string) => {
          if (value === props.todayStr) return 'Today'
          return value.substring(5) // Format MM-DD
        }
      },
      axisLine: { lineStyle: { color: '#f1f5f9' } }
    },
    yAxis: {
      type: 'value',
      max: props.yMax,
      axisLabel: { fontSize: 10, color: '#64748b' },
      splitLine: { lineStyle: { color: '#f8fafc' } }
    },
    series: [
      {
        data: props.chartDataValues,
        type: 'line',
        smooth: true,
        showSymbol: false,
        lineStyle: { color: '#0284c7', width: 2.5 },
        itemStyle: { color: '#0284c7' },
        markLine: {
          symbol: ['none', 'none'],
          silent: true,
          label: {
            position: 'end',
            formatter: `Limit: ${props.limit}h`,
            fontSize: 10,
            fontWeight: 'bold',
            color: '#ef4444',
            padding: [0, 0, 8, -50]
          },
          lineStyle: {
            color: '#ef4444',
            type: 'dashed',
            width: 1.5
          },
          data: [{ yAxis: props.limit }]
        }
      }
    ]
  }
})
</script>

<template>
  <!-- Bungkus dengan ClientOnly agar Canvas ECharts tidak memicu error/kosong saat SSR Reload -->
  <ClientOnly>
    <VChart :option="chartOption" class="w-full h-full" autoresize />
    
    <!-- State Loading/Fallback saat hidrasi server -->
    <template #fallback>
      <div class="w-full h-full flex items-center justify-center bg-slate-50/50 rounded-xl animate-pulse">
        <span class="text-xs text-slate-400 font-medium">Loading Flight Data Chart...</span>
      </div>
    </template>
  </ClientOnly>
</template>