<script setup>
import { HlImage } from '@hl/h5'
</script>

<template>
  <div class="p-4">
    <div>
      <div class="type-title">
        基础用法
      </div>
      <hl-image src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" height="auto" />
    </div>

    <div class="mt-8">
      <div class="type-title">
        填充模式
      </div>
      <div class="flex flex-wrap">
        <div v-for="fit in ['contain', 'fill', 'cover']" :key="fit" class="mr-4 mb-4">
          <hl-image src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" :fit />
          <div class="sub-title">
            {{ fit }}
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8">
      <div class="type-title">
        圆形图片
      </div>
      <div class="flex flex-wrap">
        <div v-for="fit in ['contain', 'fill', 'cover']" :key="fit" class="mr-4 mb-4">
          <hl-image src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" :fit round />
          <div class="sub-title">
            {{ fit }}
          </div>
        </div>
      </div>
    </div>

    <div class="mt-16 text-center text-gray-400 text-lg">
      继承van-image所有属性
    </div>
  </div>
</template>

<style lang='scss' scoped>
.type-title {
  color: gray;
  margin-bottom: 10px;
}

.sub-title {
  color: gray;
  text-align: center;
}
</style>
