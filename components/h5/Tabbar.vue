<script setup>
import { HlTabbar } from '@hl/h5'

const tabbar_list = [
  {
    name: '组件',
    inactive: 'ant-design:home-outlined',
  },
  {
    name: '我的',
    inactive: 'icon-park-solid:user',
  },
]
</script>

<template>
  <div class="p-4">
    <hl-tabbar :list="tabbar_list" class="relative" />
  </div>
</template>

<style lang='scss' scoped>
:deep(.hl-van-nav-bar) {
  .van-nav-bar {
    background-color: #409eff !important;
  }
}
</style>
