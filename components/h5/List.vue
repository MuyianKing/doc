<script setup>
import { HlList } from '@hl/h5'
import { ref } from 'vue'

const data = ref([])

function createData() {
  for (let i = 0; i < 10; i++) {
    data.value.push({
      label: `label_${data.value.length + 1}`,
      value: i,
    })
  }
}

const status = ref({
  loading: false,
  count: 200,
})

function handleMore() {
  status.value.loading = true

  setTimeout(() => {
    createData()
    status.value.loading = false
  }, 1000)
}

createData()
</script>

<template>
  <hl-list class="p-2" :data :status @load="handleMore">
    <div v-for="item in data" :key="item.value" class="list-it">
      {{ item.label }}
    </div>
  </hl-list>
</template>

<style lang='scss' scoped>
.list-it {
  width: 100%;
  height: 200px;
  background-color: #fff;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
