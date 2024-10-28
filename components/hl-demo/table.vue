<script setup>
const code = `
<template>
  <hl-table :data="list">
    <hl-table-column type="index" />
    <hl-table-column label="处置金额" prop="task_account" />
    <hl-table-column label="处置信息" prop="task_log" />
    <hl-table-column label="处置时间" prop="task_time" />
  </hl-table>
</template>
`

const list = ref([{
  task_account: 10,
  task_log: '测试',
  task_time: '2022-09-27',
}])
</script>

<template>
  <custom-code-preview :code>
    <hl-table :data="list">
      <hl-table-column type="index" />
      <hl-table-column label="处置金额" prop="task_account" />
      <hl-table-column label="处置信息" prop="task_log" />
      <hl-table-column label="处置时间" prop="task_time" />
    </hl-table>
  </custom-code-preview>
</template>

<style lang="scss" scoped></style>
