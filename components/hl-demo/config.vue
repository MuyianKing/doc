<script setup>
const customConfig = {
  uploadFile: () => { },
  previewFileUrl: () => { },
  downloadFile: () => { },
}

const code = `
<template>
  <hl-config-provider :custom-config />
</template>
<script setup>
  const customConfig = {
    uploadFile: () => { },
    previewFileUrl: () => { },
    downloadFile: () => { },
  }
<\/script>`
</script>

<template>
  <custom-code-preview :code>
    <hl-config-provider :custom-config />
  </custom-code-preview>
</template>
