<script setup>
import { downloadFile, previewFileUrl } from '@/utils/file'

const code = `
<template>
  <hl-form-item label="卡片展示">
    <el-switch v-model="card" />
  </hl-form-item>

  <h4 class="mt-0">
    音频文件
  </h4>
  <hl-file :file="audio" :card />

  <h4>其他文件</h4>
  <hl-file :file :card />
</template>
<script setup>
  const audio = {
  id: 'A1728545590096XK',
  name: 'test.mp3',
  path: '2024/10/10/A1728545590096XK.mp3',
}

const file = {
  id: 'N1728545567198Rp',
  name: '测试文档',
  path: '2024/10/10/N1728545567198Rp.docx',
}

const card = ref(false)
<\/script>
`

const customConfig = {
  previewFileUrl,
  downloadFile,
}

const audio = {
  id: 'A1728545590096XK',
  name: 'test.mp3',
  path: '2024/10/10/A1728545590096XK.mp3',
}

const file = {
  id: 'N1728545567198Rp',
  name: '测试文档',
  path: '2024/10/10/N1728545567198Rp.docx',
}

const card = ref(false)
</script>

<template>
  <custom-code-preview :code>
    <hl-config-provider :custom-config>
      <hl-form-item label="卡片展示">
        <el-switch v-model="card" />
      </hl-form-item>

      <h4 class="mt-0">
        音频文件
      </h4>
      <hl-file :file="audio" :card />

      <h4>其他文件</h4>
      <hl-file :file :card />
    </hl-config-provider>
  </custom-code-preview>
</template>

<style lang="scss">
.upload-wrapper {
  margin-bottom: 10px;
}
</style>
