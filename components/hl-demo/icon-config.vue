<script setup>
const code = `
<template>
  // 通过color和size属性修改
  <hl-icon icon="el:user" color="#f00" size="18px"/>

  // 通过style修改
  <hl-icon icon="el:user" style="color:red;font-size: 18px;"/>
</template>
`
</script>

<template>
  <custom-code-preview :code>
    <div class="flex">
      <hl-icon icon="el:user" color="#f00" size="18px" class="mr-4" />

      <hl-icon icon="el:user" style="color:red;font-size: 18px;" />
    </div>
  </custom-code-preview>
</template>

<style lang="scss" scoped></style>
