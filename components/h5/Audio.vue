<script setup>
import { HlAudio } from '@hl/h5'

const file = {
  id: 'A1732245131968YP',
  name: '测试音频测试音频测试音频测试音频测试音频.mp3',
  path: '2024/11/22/A1732245131968YP.mp3',
}
</script>

<template>
  <div class="p-4">
    <hl-audio :file />
    <hl-audio :file class="mt-4" />
  </div>
</template>

<style lang='scss' scoped></style>
