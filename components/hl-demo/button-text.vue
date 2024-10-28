<script setup>
const code = `
<template>
  <hl-button button-type="text" class="text-blue-400">
    测试
  </hl-button>
</template>
`
</script>

<template>
  <custom-code-preview :code>
    <div style="display: flex;align-items: center;">
      <hl-button button-type="text" class="text-blue-400">
        测试
      </hl-button>
    </div>
  </custom-code-preview>
</template>

<style lang="scss" scoped></style>
