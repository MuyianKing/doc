<script setup>
import { HlButton } from '@hl/h5'
</script>

<template>
  <div class="button-wrapper">
    <hl-button>
      默认按钮
    </hl-button>
    <hl-button type="success">
      成功按钮
    </hl-button>
    <hl-button type="danger">
      危险按钮
    </hl-button>
    <hl-button type="warning">
      警告按钮
    </hl-button>
    <hl-button icon="plus">
      按钮
    </hl-button>
    <hl-button icon="plus" loading>
      按钮
    </hl-button>
  </div>
</template>

<style lang='scss' scoped>
.button-wrapper {
  padding: 10px;

  .van-button {
    margin: 5px;
  }
}
</style>
