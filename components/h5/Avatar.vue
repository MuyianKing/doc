<script setup>
import { HlAvatar } from '@hl/h5'
</script>

<template>
  <div class="p-2 flex">
    <div class="flex flex-col justify-center items-center">
      <div>图片头像</div>
      <hl-avatar class="m-2" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
    </div>

    <div class="flex flex-col justify-center items-center">
      <div>缺省头像</div>
      <hl-avatar class="m-2" />
    </div>
  </div>
</template>

<style lang='scss' scoped>
</style>
