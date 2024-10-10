<script setup>
import { downloadFile, previewFileUrl } from '@/utils/file'
import '@hl/theme-chalk/wavesurfer.scss'

const code = `
<template>
  <h3 class="mt-0">卡片展示</h3>
  <hl-preview :files card />
  
  <h3>覆盖 .hl-file-item 样式</h3>
  <hl-preview :files />
<\/template>
<style lang="scss" scoped>
  :deep(.hl-file-item) {
    width: 100%;
    display: block;
  }
<\/style>
`

const files = [
  {
    id: 'P1728545560044ST',
    name: 'Snipaste_2024-07-04_11-20-18.png',
    path: '2024/10/10/P1728545560044ST.png',
  },
  {
    id: 'V1728545583232Ag',
    name: '下载.mp4',
    path: '2024/10/10/V1728545583232Ag.mp4',
  },
  {
    id: 'A1728545590096XK',
    name: 'test.mp3',
    path: '2024/10/10/A1728545590096XK.mp3',
  },
  {
    id: 'N1728545567198Rp',
    name: '分局、派出所质态评估开发.docx',
    path: '2024/10/10/N1728545567198Rp.docx',
  },
  {
    id: 'N1728545576807nr',
    name: '统一用户对接-对接文档.xlsx',
    path: '2024/10/10/N1728545576807nr.xlsx',
  },
]

const customConfig = {
  previewFileUrl,
  downloadFile,
}
</script>

<template>
  <custom-code-preview :code>
    <hl-config-provider :custom-config>
      <h3 class="mt-0">
        卡片展示
      </h3>
      <hl-preview :files card />

      <h3>
        覆盖 .hl-file-item 样式
      </h3>
      <hl-preview :files class="custom-upload" />
    </hl-config-provider>
  </custom-code-preview>
</template>

<style lang="scss" scoped>
.custom-upload {
  :deep(.hl-file-item) {
    width: 100%;
    display: block;
  }
}
</style>
