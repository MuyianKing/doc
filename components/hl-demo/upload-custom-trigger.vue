<script setup>
import { downloadFile, previewFileUrl } from '@/utils/file'
import { uploadFile } from '@server/file'
import { ElMessageBox } from 'element-plus'

const customConfig = {
  uploadFile,
  previewFileUrl,
  downloadFile,
}

const code = `
<template>
  <div>
    <hl-block-title title="自定义触发样式并保留预览" />
    <hl-upload v-model="file" class="mt-4 ml-4">
      <hl-icon icon="teenyicons:image-solid" />
    </hl-upload>
  </div>
  <div class="mt-8">
    <hl-block-title title="自定义触发样式不保留预览" />
    <hl-upload no-preview progress class="mt-4 ml-4" @upload-finish="handleFinish">
      <hl-button>导入</hl-button>
    </hl-upload>
  </div>
</template>
<script setup>
 const file = ref(null)

function handleFinish(row) {
  ElMessageBox.alert(\`文件上传成功，文件ID：$\{row\}\`, '上传完成')
}
<\/script>
`

const file = ref(null)

function handleFinish(row) {
  ElMessageBox.alert(`文件上传成功，文件ID：${row}`, '上传完成')
}
</script>

<template>
  <custom-code-preview :code>
    <hl-config-provider :custom-config>
      <div>
        <hl-block-title title="自定义触发样式并保留预览" />
        <hl-upload v-model="file" class="mt-4 ml-4">
          <hl-icon icon="teenyicons:image-solid" />
        </hl-upload>
      </div>
      <div class="mt-8">
        <hl-block-title title="自定义触发样式不保留预览" />
        <hl-upload no-preview progress class="mt-4 ml-4" @upload-finish="handleFinish">
          <hl-button>导入</hl-button>
        </hl-upload>
      </div>
    </hl-config-provider>
  </custom-code-preview>
</template>

<style lang="scss">
.upload-wrapper {
  margin-bottom: 10px;
}
</style>
