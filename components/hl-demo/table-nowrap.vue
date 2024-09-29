<script setup>
const code = `
<script>
  const nowrap = ref(false)
<\/script>
<template>
  <el-switch v-model="nowrap" size="large" active-text="一行" inactive-text="多行" inline-prompt style="--el-switch-off-color:#13ce66" />
  <hl-table :data="list" :nowrap>
    <hl-table-column type="index" />
    <hl-table-column label="处置金额" prop="task_account" />
    <hl-table-column label="处置信息" prop="task_log" />
    <hl-table-column label="处置时间" prop="task_time" />
  </hl-table>
</template>
`

const list = ref([{
  task_account: 10,
  task_log: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试',
  task_time: '2022-09-27',
}])

const nowrap = ref(false)
</script>

<template>
  <custom-code-preview :code="code">
    <el-switch v-model="nowrap" size="large" active-text="一行" inactive-text="多行" inline-prompt style="--el-switch-off-color:#13ce66" />

    <hl-table :data="list" :nowrap>
      <hl-table-column type="index" />
      <hl-table-column label="处置金额" prop="task_account" />
      <hl-table-column label="处置信息" prop="task_log" />
      <hl-table-column label="处置时间" prop="task_time" />
    </hl-table>
  </custom-code-preview>
</template>

<style lang="scss" scoped></style>
