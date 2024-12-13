<script setup>
import { HlCheckbox } from '@hl/h5'
import { ref } from 'vue'

const options = [
  {
    label: '苹果',
    value: 'apple',
  },
  {
    label: '梨子',
    value: 'pear',
  },
]

const value = ref([])
</script>

<template>
  <div class="p-4">
    <hl-checkbox v-model="value" :options />
  </div>
</template>

<style lang='scss' scoped></style>
