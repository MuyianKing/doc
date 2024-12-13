<script setup>
import { HlRadio } from '@hl/h5'
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

const value = ref('')
</script>

<template>
  <div class="p-4">
    <div>
      <div class="title">
        基本用法
      </div>
      <hl-radio v-model="value" :options />
    </div>

    <div class="mt-8">
      <div class="title">
        垂直排列
      </div>
      <hl-radio v-model="value" :options direction="vertical" />
    </div>

    <div class="mt-8">
      <div class="title">
        图标大小
      </div>
      <hl-radio v-model="value" :options icon-size="40px" />
    </div>
  </div>
</template>

<style lang='scss' scoped>
.title {
  margin-bottom: 10px;
  color: gray;
}
</style>
