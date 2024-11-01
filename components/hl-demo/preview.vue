<script setup>
import { downloadFile, previewFileUrl } from '@/utils/file'
import '@hl/theme-chalk/wavesurfer.scss'

const code = `
<template>
  <h3 class="mt-0">图片</h3>
  <hl-preview :files="files[0]" />

  <h3>视频</h3>
  <hl-preview :files="files[1]" />

  <h3>音频</h3>
  <hl-preview :files="files[2]" />

  <h3>文件</h3>
  <hl-preview :files="files[3]" />

  <h3>多个附件</h3>
  <hl-preview :files />
<\/template>
<script setup>
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
    name: '测试文档',
    path: '2024/10/10/N1728545567198Rp.docx',
  },
  {
    id: 'N1728545576807nr',
    name: '统一用户对接-对接文档.xlsx',
    path: '2024/10/10/N1728545576807nr.xlsx',
  },
]
<\/script>
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
    name: '测试文档',
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
        图片
      </h3>
      <hl-preview :files="files[0]" />

      <h3>视频</h3>
      <hl-preview :files="files[1]" />

      <h3>音频</h3>
      <hl-preview :files="files[2]" />

      <h3>文件</h3>
      <hl-preview :files="files[3]" />

      <h3>多个附件</h3>
      <hl-preview :files />
    </hl-config-provider>
  </custom-code-preview>
</template>

<style lang="scss" scoped></style>
