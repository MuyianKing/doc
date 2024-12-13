<script setup>
import { downloadFile, previewFileUrl } from '@/utils/file'
import { HlConfigProvider, HlMainBody } from '@hl/h5'

defineProps({
  comp: String,
  title: String,
})

const config = {
  downloadFile,
  previewFileUrl,

}
</script>

<template>
  <div class="phone">
    <hl-config-provider :custom-config="config">
      <hl-main-body title no-back no-top class="overflow-y-auto">
        <component :is="comp" />
      </hl-main-body>
    </hl-config-provider>
  </div>
</template>

<style lang='scss' scoped>
.phone {
  background-image: url(./iPhone13.png);
  background-size: 100% 100%;
  width: 310px;
  height: 627px;
  padding: 48px 13px 25px;
}

:deep(.hl-van-nav-bar) {
  .van-nav-bar {
    background-color: #fff;

    .van-nav-bar__text,
    .van-nav-bar__arrow {
      color: #333 !important;
      font-size: 18px;
      font-weight: bold;
    }
  }
}
</style>
