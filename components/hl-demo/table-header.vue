<script setup>
const code = `
<script>
const edit_header = ref(false)
<\/script>

<template>
 <div class="text-right">
  <hl-button class="mb-2" @click="edit_header = true">
    定制表头
  </hl-button>
</div>
<hl-table v-model:edit-header="edit_header" :data="list" storage-key="edit_header_key">
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

const edit_header = ref(false)
</script>

<template>
  <custom-code-preview :code="code">
    <div class="text-right">
      <hl-button class="mb-2" @click="edit_header = true">
        定制表头
      </hl-button>
    </div>
    <hl-table v-model:edit-header="edit_header" :data="list" storage-key="edit_header_key">
      <hl-table-column type="index" />
      <hl-table-column label="处置金额" prop="task_account" />
      <hl-table-column label="处置信息" prop="task_log" />
      <hl-table-column label="处置时间" prop="task_time" />
    </hl-table>
  </custom-code-preview>
</template>

<style lang="scss" scoped></style>
