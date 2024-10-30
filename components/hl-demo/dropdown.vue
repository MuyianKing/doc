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
const mul_value = ref([])
const code = `
<template>
  <el-form-item label="基本用法：">
    <hl-dropdown v-model="value" :options label="下拉" />
  </el-form-item>
  <el-form-item label="多选下拉：">
    <hl-dropdown v-model="mul_value" :options multiple label="下拉" />
  </el-form-item>
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
const mul_value = ref([])
<\/script>
`
</script>

<template>
  <custom-code-preview :code>
    <el-form-item label="基本用法：">
      <hl-dropdown v-model="value" :options label="下拉" />
      {{ value }}
    </el-form-item>
    <el-form-item label="多选下拉：">
      <hl-dropdown v-model="mul_value" :options multiple label="下拉" />
      {{ mul_value }}
    </el-form-item>
  </custom-code-preview>
</template>

<style lang='scss' scoped></style>
