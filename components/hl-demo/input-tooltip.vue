<script setup>
const text = ref('')

const code = `
<template>
  <hl-form-item label="姓名">
    <hl-input v-model="text" tip="这是一段指引信息" tip-label="提示标题" />
  </hl-form-item>
</template>
<script setup>
  const text = ref('')
<\/script>`
</script>

<template>
  <custom-code-preview :code="code">
    <hl-form-item label="姓名">
      <hl-input v-model="text" tip="这是一段指引信息" tip-label="提示标题" />
    </hl-form-item>
  </custom-code-preview>
</template>
