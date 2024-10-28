<script setup>
const date = ref()

const code = `
<template>
  <hl-date v-model="date" />
</template>

<script setup>
  const date = ref();
<\/script>`
</script>

<template>
  <custom-code-preview :code>
    <hl-date v-model="date" />
  </custom-code-preview>
</template>

<style lang="scss" scoped></style>
