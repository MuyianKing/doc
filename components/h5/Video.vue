<script setup>
import { HlVideo } from '@hl/h5'

const src = 'https://prod-streaming-video-msn-com.akamaized.net/a8c412fa-f696-4ff2-9c76-e8ed9cdffe0f/604a87fc-e7bc-463e-8d56-cde7e661d690.mp4'
</script>

<template>
  <div class="p-4">
    <hl-video :src />

    <div class="mt-4">
      <div class="sub-title">
        带控制条
      </div>
      <hl-video controls :src />
    </div>

    <div class="mt-4">
      <div class="sub-title">
        设置宽高
      </div>
      <hl-video :src height="100px" width="200px" />
    </div>
  </div>
</template>

<style lang='scss' scoped>
.sub-title {
  color: gray;
  margin-bottom: 7px;
}
</style>
