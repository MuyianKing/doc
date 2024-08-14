<template>
  <custom-code-preview :code="code">
    <hl-date v-model="date" />
  </custom-code-preview>
</template>
<script setup>
const date = ref();

const code = `
<template>
  <hl-date v-model="date" />
</template>

<script setup>
  const date = ref();
<\/script>`;
</script>
<style lang="scss" scoped></style>
