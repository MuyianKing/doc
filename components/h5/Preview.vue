<script setup>
import { HlPreview } from '@hl/h5'

const files = [
  {
    id: 'P1732240241666CM4',
    name: '项目目录.png',
    path: '2024/11/22/P1732240241666CM.png',
  },
  {
    id: 'P1732240241666CM4',
    name: '项目目录.png',
    path: '2024/11/22/P1732240241666CM.png',
  },
  {
    id: 'A1732245131968YP',
    name: '测试音频测试音频测试音频测试音频测试音频.mp3',
    path: '2024/11/22/A1732245131968YP.mp3',
  },
  {
    id: 'N1732243830507aE',
    name: 'GB35114-2017公共安全视频监控联网信息安全技术要求.pdf',
    path: '2024/11/22/N1732243830507aE.pdf',
  },
]
</script>

<template>
  <div class="p-4">
    <hl-preview :files width="100px" />
  </div>
</template>

<style lang='scss' scoped></style>
