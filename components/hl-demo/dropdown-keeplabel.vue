<script setup>
const options = [
  {
    label: '测试1',
    value: 1,
  },
  {
    label: '测试2',
    value: 2,
  },
]

const value = ref('')

const code = `
<template>
  <hl-dropdown v-model="value" :options label="下拉" keep-label />
</template>
<script>
const options = [
  {
    label: '测试1',
    value: 1,
  },
  {
    label: '测试2',
    value: 2,
  },
]

const value = ref('')
<\/script>
`
</script>

<template>
  <custom-code-preview :code>
    <hl-dropdown v-model="value" :options label="下拉" keep-label />
  </custom-code-preview>
</template>

<style lang='scss' scoped></style>
