<script setup>
import { HlInput } from '@hl/h5'
import { ref } from 'vue'

const value = ref()
</script>

<template>
  <div class="bg-white p-4">
    <hl-input v-model="value" />
    <hl-input v-model="value" type="textarea" class="mt-4" placeholder="请输入文本域" />
  </div>
</template>

<style lang='scss' scoped>
</style>
