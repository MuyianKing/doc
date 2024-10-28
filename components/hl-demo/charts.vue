<script setup>
import * as echarts from 'echarts'
import { nextTick, onMounted } from 'vue'

const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
    },
  ],
}

onMounted(() => {
  nextTick(() => {
    const chartDom = document.getElementById('chart_demo')
    const myChart = echarts.init(chartDom)
    myChart.setOption(option)
  })
})

const code = `
<template>
  <custom-code-preview :code>
    <div class="h-[300px] flex">
      <div class="h-full flex-1">
        <h3>hl-chart</h3>
        <hl-chart :option />
      </div>
      <div class="h-full flex-1">
        <h3>echart</h3>
        <div id="chart_demo" />
      </div>
    </div>
  </custom-code-preview>
</template>
<script setup>
const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: {
    data: [150, 230, 224, 218, 135, 147, 260],
    type: 'line',
  }
}

onMounted(() => {
  nextTick(() => {
    const chartDom = document.getElementById('chart_demo')
    const myChart = echarts.init(chartDom)
    myChart.setOption(option)
  })
})
<\/script>
`
</script>

<template>
  <custom-code-preview :code>
    <div class="flex">
      <div class="h-full flex-1">
        <h3>hl-chart</h3>
        <hl-chart :option class="h-[300px] " />
      </div>
      <div class="h-full flex-1">
        <h3>echart</h3>
        <div id="chart_demo" class="h-[300px] " />
      </div>
    </div>
  </custom-code-preview>
</template>

<style lang='scss' scoped>
#chart_demo {
  width: 100%;
  height: 100%;
}
</style>
