<script setup>
import DemoComp from './components/Demo.vue'

defineProps({
  comp: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="h5-demo-wrapper">
    <div class="content">
      <slot />
    </div>
    <demo-comp v-if="comp" :comp :title />
  </div>
</template>

<style lang='scss' scoped>
.h5-demo-wrapper {
  display: flex;

  .content {
    flex: 1;
    min-width: 0;
    margin-right: 30px;
  }
}
</style>
