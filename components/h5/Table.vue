<script setup>
import { HlTable } from '@hl/h5'
import { ref } from 'vue'

const data = ref([])

function createData() {
  for (let i = 0; i < 20; i++) {
    data.value.push({
      name: `muyian${data.value.length + 1}`,
      age: 18,
    })
  }
}

createData()
</script>

<template>
  <div class="p-4 overflow-y-auto h-full">
    <hl-table :data>
      <hl-table-column type="index" />
      <hl-table-column label="姓名" prop="name" />
    </hl-table>
  </div>
</template>

<style lang='scss' scoped></style>
