<script setup>
const code = `
<template>
  <div class="flex">
    <hl-block-title title="primary" class="block-title-item" />
    <hl-block-title title="danger" type="danger" class="block-title-item" />
    <hl-block-title title="success" type="success" class="block-title-item" />
    <hl-block-title title="测试" class="block-title-item" />
    <hl-block-title class="block-title-item">
      插槽
    </hl-block-title>
  </div>
<\/template>
`
</script>

<template>
  <custom-code-preview :code>
    <div class="flex">
      <hl-block-title title="primary" class="block-title-item" />
      <hl-block-title title="danger" type="danger" class="block-title-item" />
      <hl-block-title title="success" type="success" class="block-title-item" />
      <hl-block-title title="测试" class="block-title-item" />
      <hl-block-title class="block-title-item">
        插槽
      </hl-block-title>
    </div>
  </custom-code-preview>
</template>

<style lang='scss' scoped>
.block-title-item {
  margin: 10px;
  font-size: 14px;
}
</style>
