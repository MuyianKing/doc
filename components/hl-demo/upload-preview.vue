<script setup>
import { downloadFile, previewFileUrl } from '@/utils/file'
import { uploadFile } from '@server/file'

const code = `
<template>
  <hl-upload ref="upload_ref" v-model="upload_files" multiple trigger-type="line">
    <template #preview="{ files }">
      <div class="w-full">
        <div v-for="file in files" :key="file.id" class="flex items-center">
          <span @click="handleReUpload(file)">{{ file.name }}</span>
          <hl-icon icon="ph:trash-bold" @click="handleDel(file)" />
        </div>
      </div>
    </template>
  </hl-upload>
</template>
<script setup>
const upload_files = ref([])

const upload_ref = ref()
function handleReUpload(row) {
  upload_ref.value.handleReupload(row)
}

function handleDel(row) {
  upload_ref.value.handleDel(row)
}
<\/script>
`
const customConfig = {
  uploadFile,
  previewFileUrl,
  downloadFile,
}

const upload_files = ref([])

const upload_ref = ref()
function handleReUpload(row) {
  upload_ref.value.handleReupload(row)
}

function handleDel(row) {
  upload_ref.value.handleDel(row)
}
</script>

<template>
  <custom-code-preview :code>
    <hl-config-provider :custom-config>
      <hl-upload ref="upload_ref" v-model="upload_files" multiple trigger-type="line">
        <template #preview="{ files }">
          <div class="w-full">
            <div v-for="file in files" :key="file.id" class="flex items-center">
              <span @click="handleReUpload(file)">{{ file.name }}</span>
              <hl-icon icon="ph:trash-bold" @click="handleDel(file)" />
            </div>
          </div>
        </template>
      </hl-upload>
    </hl-config-provider>
  </custom-code-preview>
</template>

<style lang="scss">
.upload-wrapper {
  margin-bottom: 10px;
}
</style>
