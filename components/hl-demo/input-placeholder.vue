<script setup>
const text = ref('')

const code = `
<template>
  <!-- 自动获取placeholder -->
  <hl-form-item label="姓名">
    <hl-input v-model="text" />
  </hl-form-item>
   <hl-form-item label="姓名">
    <hl-input v-model="text" placeholder="自定义placeholder" />
  </hl-form-item>
</template>
<script setup>
  const text = ref('')
<\/script>`
</script>

<template>
  <custom-code-preview :code="code">
    <!-- 自动获取placeholder -->
    <hl-form-item label="姓名">
      <hl-input v-model="text" />
    </hl-form-item>

    <hl-form-item label="姓名">
      <hl-input v-model="text" placeholder="自定义placeholder" />
    </hl-form-item>
  </custom-code-preview>
</template>
