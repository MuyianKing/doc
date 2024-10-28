<script setup>
const date = reactive({
  start: '',
  end: '',
})

const code = `
<template>
   <hl-date
      type="range"
      v-model:start="date.start" 
      v-model:end="date.end"  
      start-value-format="YYYY-MM-DD 00:00:00" 
      end-value-format="YYYY-MM-DD 23:59:59" />
</template>

<script setup>
  const date = reactive({
    start: '',
    end: '',
  })
<\/script>`
</script>

<template>
  <custom-code-preview :code>
    <div>
      <div>开始时间：{{ date.start }}</div>
      <div>结束时间：{{ date.end }}</div>
    </div>
    <hl-date v-model:start="date.start" v-model:end="date.end" type="range" start-value-format="YYYY-MM-DD 00:00:00" end-value-format="YYYY-MM-DD 23:59:59" />
  </custom-code-preview>
</template>

<style lang="scss" scoped></style>
