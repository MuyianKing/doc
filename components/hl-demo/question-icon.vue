<script setup>
const code = `
<hl-question-icon>
  这是一段提示信息
</hl-question-icon>

<hl-question-icon placement="right" class="ml-4">
  这是一段提示信息
</hl-question-icon>

<hl-question-icon placement="left" class="ml-4">
  这是一段提示信息
</hl-question-icon>
`
</script>

<template>
  <custom-code-preview :code>
    <div class="flex">
      <hl-question-icon>
        这是一段提示信息
      </hl-question-icon>

      <hl-question-icon placement="right" class="ml-4">
        这是一段提示信息
      </hl-question-icon>

      <hl-question-icon placement="left" class="ml-4">
        这是一段提示信息
      </hl-question-icon>
    </div>
  </custom-code-preview>
</template>

<style lang='scss' scoped></style>
