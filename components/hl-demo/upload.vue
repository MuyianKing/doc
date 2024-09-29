<script setup>
const file = ref(null)

const code = `
<template>

</template>
<script setup>

<\/script>`
</script>

<template>
  <custom-code-preview :code="code">
    <hl-upload v-model="file" />
  </custom-code-preview>
</template>
