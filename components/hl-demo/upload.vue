<script setup>
import { downloadFile, previewFileUrl } from '@/utils/file'
import { uploadFile } from '@server/file'

const code = `
<template>
  const file = ref(null)
  const files = ref([])

  <hl-upload v-model="file" class="mt-2 ml-2" />
  <hl-upload v-model="files" class="mt-2 ml-2" multiple />
</template>
<script setup>

<\/script>`

const file = ref(null)
const files = ref([])

const customConfig = {
  uploadFile,
  previewFileUrl,
  downloadFile,
}
</script>

<template>
  <custom-code-preview :code="code">
    <hl-config-provider :custom-config>
      <div class="upload-wrapper">
        <hl-block-title class="leading-4">
          单选
        </hl-block-title>
        <pre>{{ file }}</pre>
        <hl-upload v-model="file" class="mt-2 ml-2" />
      </div>
      <div>
        <hl-block-title class="leading-4">
          多选
        </hl-block-title>
        <pre>{{ files }}</pre>
        <hl-upload v-model="files" class="mt-2 ml-2" multiple type="all" />
      </div>
    </hl-config-provider>
  </custom-code-preview>
</template>

<style lang="scss">
.upload-wrapper {
  margin-bottom: 10px;
}
</style>
