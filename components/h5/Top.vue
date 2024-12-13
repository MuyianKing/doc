<script setup>
import { HlTop } from '@hl/h5'
</script>

<template>
  <div class="py-4">
    <hl-top title="这是导航栏" />
    <hl-top title="不需要返回箭头" class="mt-4" no-back />
    <hl-top title="自定义背景色" class="mt-4" bgc="#ff5c5c" />
  </div>
</template>

<style lang='scss' scoped></style>
