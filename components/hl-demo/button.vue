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
  <custom-code-preview :code>
    <div style="display: flex;align-items: center;">
      <hl-button type="danger">
        提交
      </hl-button>

      <hl-button type="primary" plain>
        提交
      </hl-button>

      <hl-button type="warning" loading>
        提交
      </hl-button>
    </div>
  </custom-code-preview>
</template>

<style lang="scss" scoped></style>
