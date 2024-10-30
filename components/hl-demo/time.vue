<script setup>
const code = `
<template>
  <hl-time time="2023-01-18 14:15:00" class="w-[155px] bg-blue-200" />

  <div class="w-[90px] bg-blue-200 mt-4">
    <hl-time time="2023-01-18 14:15:00" />
  </div>
<\/template>
`
</script>

<template>
  <custom-code-preview :code>
    <hl-time time="2023-01-18 14:15:00" class="w-[155px] bg-blue-200" />

    <div class="w-[90px] bg-blue-200 mt-4">
      <hl-time time="2023-01-18 14:15:00" />
    </div>
  </custom-code-preview>
</template>

<style lang='scss' scoped></style>
