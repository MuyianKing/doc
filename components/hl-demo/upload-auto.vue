<script setup>
import { downloadFile, previewFileUrl } from '@/utils/file'
import { uploadFile } from '@server/file'

const code = `
<template>
  <el-form ref="form_ref" :model>
    <hl-form-item label="上传文件" prop="file" min-count="2">
      <hl-upload v-model="model.file" multiple :max-count="3" />
    </hl-form-item>
  </el-form>
</template>
<script setup>
  const model = reactive({
    file: [],
  })
<\/script>
`

const model = reactive({
  file: [],
  autoUpload: true,
  progress: false,
})

const customConfig = {
  uploadFile,
  previewFileUrl,
  downloadFile,
}
</script>

<template>
  <custom-code-preview :code>
    <hl-config-provider :custom-config>
      <pre>{{ model.file }}</pre>
      <el-form>
        <hl-form-item label="自动上传">
          <el-switch v-model="model.autoUpload" />
        </hl-form-item>
        <hl-form-item label="是否展示上传进度">
          <el-switch v-model="model.progress" />
        </hl-form-item>
      </el-form>

      <hl-upload v-model="model.file" :auto-upload="model.autoUpload" :progress="model.progress" />
    </hl-config-provider>
  </custom-code-preview>
</template>

<style lang="scss">
.upload-wrapper {
  margin-bottom: 10px;
}
</style>
