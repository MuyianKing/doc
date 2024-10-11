<script setup>
import { previewFileUrl } from '@/utils/file'

const code = `
<template>
  <hl-form-item label="宽">
    <hl-input v-model="config.width" />
  </hl-form-item>
  <hl-form-item label="高">
    <hl-input v-model="config.height" />
  </hl-form-item>
  <hl-form-item label="控制条">
    <el-switch v-model="config.controls" />
  </hl-form-item>
  <hl-video :src :controls="config.controls" :width="config.width" :height="config.height" />
<\/template>
<script setup>
  const src = '2024/10/10/V1728545583232Ag.mp4'
  const config = ref({
    controls: false,
    width: '100%',
    height: 'auto',
  })
<\/script>
`

const customConfig = {
  previewFileUrl,
}

const src = '2024/10/10/V1728545583232Ag.mp4'
const config = ref({
  controls: false,
  width: '100%',
  height: 'auto',
})
</script>

<template>
  <custom-code-preview :code>
    <hl-config-provider :custom-config>
      <hl-form-item label="宽">
        <hl-input v-model="config.width" />
      </hl-form-item>
      <hl-form-item label="高">
        <hl-input v-model="config.height" />
      </hl-form-item>
      <hl-form-item label="控制条">
        <el-switch v-model="config.controls" />
      </hl-form-item>
      <hl-video :src :controls="config.controls" :width="config.width" :height="config.height" />
    </hl-config-provider>
  </custom-code-preview>
</template>

<style lang="scss" scoped></style>
