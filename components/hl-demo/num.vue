<script setup>
const code = `
<template>
  <hl-button type="danger">提交</hl-button>
  <hl-button type="primary" plain>提交</hl-button>
  <hl-button type="warning" loading>提交</hl-button>
</template>
`
</script>

<template>
  <custom-code-preview :code="code">
    <div>
      <hl-number :num="998" />
      <hl-number :num="9998" />
      <hl-number :num="99998" />
    </div>
  </custom-code-preview>
</template>

<style lang="scss" scoped></style>
