<script setup>
import { HlSelect } from '@hl/h5'
import { ref } from 'vue'

const options = [
  {
    label: '男',
    value: 1,
  },
  {
    label: '女',
    value: 2,
  },
]

const value = ref()
const value2 = ref([])
</script>

<template>
  <div>
    <div class="p-4 bg-white">
      <div class="title">
        单选
      </div>
      <hl-select v-model="value" :options />
    </div>

    <div class="p-4 bg-white mt-4">
      <div class="title">
        多选
      </div>
      <hl-select v-model="value2" :options multiple class="mt-4" />
    </div>
  </div>
</template>

<style lang='scss' scoped>
.title {
  color: gray;
  margin-bottom: 10px;
}
</style>
