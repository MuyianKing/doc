<script setup>
import { HlFile } from '@hl/h5'

const files = [
  {
    id: 'N1732243815264be',
    name: '公共安全社会视频资源安全联网设备开发计划20221227(1)(1).doc',
    path: '2024/11/22/N1732243815264be.doc',
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
    <hl-file v-for="file in files" :key="file.id" class="block mb-4" :file="file" />
  </div>
</template>

<style lang='scss' scoped></style>
