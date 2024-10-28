<script setup>
const date = ref()

const date_obj = reactive({
  start: '',
  end: '',
})

const code = `
<template>
  <hl-date
    v-model="date"
    v-model:start="date_obj.start"
    v-model:end="date_obj.end" type="range"
  />
</template>

<script setup>
  const date = ref()
  const date_obj = reactive({
    start: '',
    end: '',
  })
<\/script>`
</script>

<template>
  <custom-code-preview :code>
    <div>
      <div>时间范围：{{ date }}</div>
      <div>开始时间：{{ date_obj.start }}</div>
      <div>结束时间：{{ date_obj.end }}</div>
    </div>
    <hl-date
      v-model="date"
      v-model:start="date_obj.start"
      v-model:end="date_obj.end" type="range"
    />
  </custom-code-preview>
</template>

<style lang="scss" scoped></style>
