<script setup>
const text = ref('')

const code = `
<template>
  <hl-form-item label="姓名">
    <hl-input v-model="text" placeholder="自定义placeholder" />
  </hl-form-item>
  <!-- 自动获取placeholder -->
  <hl-form-item label="姓名">
    <hl-input v-model="text" />
  </hl-form-item>
</template>
<script setup>
  const text = ref('')
<\/script>`
</script>

<template>
  <custom-code-preview :code="code">
    <hl-form-item label="姓名">
      <hl-input v-model="text" placeholder="自定义placeholder" />
    </hl-form-item>
    <!-- 自动获取placeholder -->
    <hl-form-item label="姓名">
      <hl-input v-model="text" />
    </hl-form-item>
  </custom-code-preview>
</template>
