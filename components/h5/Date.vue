<script setup>
import { HlDate } from '@hl/h5'
import { ref } from 'vue'

const datetime = ref()
const date = ref()
</script>

<template>
  <div class="p-4">
    <hl-date v-model="datetime" class="mt-4" />

    <hl-date v-model="date" class="mt-4" format="YYYY-MM-DD" />
  </div>
</template>

<style lang='scss' scoped></style>
