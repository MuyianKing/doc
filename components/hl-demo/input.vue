<script setup>
const text = ref('')

const code = `
<template>
  <hl-input v-model="text" />
</template>
<script setup>
  const text = ref('')
<\/script>`
</script>

<template>
  <custom-code-preview :code="code">
    <hl-input v-model="text" />
  </custom-code-preview>
</template>
