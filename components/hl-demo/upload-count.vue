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
})

const customConfig = {
  uploadFile,
  previewFileUrl,
  downloadFile,
}

const form_ref = ref()
function submit() {
  form_ref.value.validate()
}
</script>

<template>
  <custom-code-preview :code>
    <hl-config-provider :custom-config>
      <el-form ref="form_ref" :model>
        <hl-form-item label="上传文件" prop="file" min-count="2">
          <hl-upload v-model="model.file" multiple :max-count="3" />
        </hl-form-item>
      </el-form>

      <div class="text-right">
        <hl-button @click="submit">
          提交
        </hl-button>
      </div>
    </hl-config-provider>
  </custom-code-preview>
</template>

<style lang="scss">
.upload-wrapper {
  margin-bottom: 10px;
}
</style>
