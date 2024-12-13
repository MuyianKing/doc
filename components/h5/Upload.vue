<script setup>
import { HlUpload } from '@hl/h5'
import { ref } from 'vue'

const mul_value = ref([
  {
    id: 'P1732240239360Po',
    name: '微信图片_20241115151750.png',
    path: '2024/11/22/P1732240239360Po.png',
  },
  {
    id: 'P1732240241666CM',
    name: '项目目录.png',
    path: '2024/11/22/P1732240241666CM.png',
  },
  {
    id: 'P1732240239360Po1',
    name: '微信图片_20241115151750.png',
    path: '2024/11/22/P1732240239360Po.png',
  },
  {
    id: 'P1732240241666CM2',
    name: '项目目录.png',
    path: '2024/11/22/P1732240241666CM.png',
  },
  {
    id: 'P1732240239360Po3',
    name: '微信图片_20241115151750.png',
    path: '2024/11/22/P1732240239360Po.png',
  },
  {
    id: 'P1732240241666CM4',
    name: '项目目录.png',
    path: '2024/11/22/P1732240241666CM.png',
  },
])

const file_value = ref([
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
])
</script>

<template>
  <div class="p-4">
    <hl-upload />

    <div class="mt-4">
      <div class="sub-title">
        上传多个
      </div>
      <hl-upload v-model="mul_value" multiple />
    </div>

    <div class="mt-4">
      <div class="sub-title">
        上传文件
      </div>
      <hl-upload v-model="file_value" multiple :type="['file', 'image', 'audio']" />
    </div>
  </div>
</template>

<style lang='scss' scoped>
.sub-title {
  color: gray;
  margin-bottom: 5px;
}
</style>
