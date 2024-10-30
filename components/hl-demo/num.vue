<script setup>
const code = `
<template>
  <hl-number :num="998" />
  <hl-number :num="9998" />
  <hl-number :num="99998" />
</template>
`
</script>

<template>
  <custom-code-preview :code>
    <div>
      <hl-number :num="998" />
      <hl-number :num="9998" />
      <hl-number :num="99998" />
    </div>
  </custom-code-preview>
</template>

<style lang="scss" scoped></style>
