<script setup>
const code = `
<template>
  <hl-button icon="icon-park:user" button-type="icon" :size="30" class="mr-4" />
  <hl-button icon="icon-park:user" button-type="icon" :size="30" text="带提示的图标按钮" />
</template>
`
</script>

<template>
  <custom-code-preview :code="code">
    <div style="display: flex;align-items: center;">
      <hl-button icon="icon-park:user" button-type="icon" :size="30" class="mr-4" />
      <hl-button icon="icon-park:user" button-type="icon" :size="30" text="带提示的图标按钮" />
    </div>
  </custom-code-preview>
</template>

<style lang="scss" scoped></style>
