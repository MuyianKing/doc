<script setup>
import { downloadFile, previewFileUrl } from '@/utils/file'
import { mime_type } from '@hl/utils/es/file'
import { uploadFile } from '@server/file'

const code = `
<template>
   <hl-upload v-model="file" :type :suffix :list-type multiple :trigger-type />
</template>
<script setup>
  const file = ref(null)
<\/script>
`

const file = ref(null)

const customConfig = {
  uploadFile,
  previewFileUrl,
  downloadFile,
}

// video：视频 image：图片 file：文件 audio：音频, all:所有文件类型
const file_type = [{
  label: '视频',
  value: 'video',
}, {
  label: '图片',
  value: 'image',
}, {
  label: '文件',
  value: 'file',
}, {
  label: '音频',
  value: 'audio',
}, {
  label: '全部',
  value: 'all',
}]

const style_options = [{
  value: 'card',
  label: '卡片',
}, {
  value: 'line',
  label: '行布局',
}, {
  value: '',
  label: '自动',
}]

const trigger_options = [{
  value: 'card',
  label: '卡片',
}, {
  value: 'line',
  label: '行布局',
}, {
  value: '',
  label: '跟随预览样式',
}]

const type = ref([])
const suffix = ref([])
const listType = ref('')
const triggerType = ref('')

function handleChange() {
  if (listType.value === '') {
    type.value = []
    suffix.value = []
  }
}
</script>

<template>
  <custom-code-preview :code>
    <hl-config-provider :custom-config>
      <div>
        <hl-form-item label="预览样式：">
          <hl-radio v-model="listType" :options="style_options" @change="handleChange" />
        </hl-form-item>
        <hl-form-item label="触发样式：">
          <hl-radio v-model="triggerType" :options="trigger_options" />
        </hl-form-item>
        <template v-if="listType === ''">
          <hl-form-item label="文件类型：">
            <hl-checkbox v-model="type" :options="file_type" />
          </hl-form-item>
          <hl-form-item label="文件后缀：">
            <hl-checkbox v-model="suffix" :options="mime_type.map(item => ({ label: item.suffix, value: item.suffix }))" />
          </hl-form-item>
        </template>
      </div>
      <hl-upload v-model="file" :type :suffix :list-type multiple :trigger-type />
    </hl-config-provider>
  </custom-code-preview>
</template>

<style lang="scss">
.upload-wrapper {
  margin-bottom: 10px;
}
</style>
