<script setup>
import { useEventListener } from '@vueuse/core'
import data from './lunbo.json'

const count = ref(0)

const no_next = ref(false)
function handleNext() {
  if (no_next.value) {
    return
  }

  count.value++
  handleDisabled()
}

const no_prev = ref(0)
function handlePrev() {
  if (no_prev.value) {
    return
  }

  count.value--
  handleDisabled()
}

// 处理边界问题
function handleDisabled() {
  if (count.value + 1 > data.length / 4) {
    no_next.value = true
  } else {
    no_next.value = false
  }

  if (count.value === 0) {
    no_prev.value = true
  } else {
    no_prev.value = false
  }
}

const _width = 210

const offset = ref(0)
function handleMouseenter() {
  offset.value = 0
}

function handleMousemove(e) {
  offset.value += e.movementX
}

const lunbo_ref = ref()
function handleMousedown() {
  // 去除transtion
  lunbo_ref.value.style.transition = 'none'

  document.addEventListener('mousemove', handleMousemove)
}

async function handleMouseup() {
  await nextTick()

  document.removeEventListener('mousemove', handleMousemove)

  // 加回transtion
  lunbo_ref.value.style.transition = 'all linear 0.5s'

  if (Math.abs(offset.value) > _width * 2) {
    offset.value > 0 ? count.value-- : count.value++
  }
  offset.value = 0

  handleDisabled()
}

const _style = computed(() => {
  let translateX = -count.value * 4 * _width + offset.value

  translateX = translateX > 0 ? 0 : translateX

  return {
    transform: `translateX(${translateX}px)`,
  }
})

onMounted(() => {
  handleDisabled()

  useEventListener(document, 'mouseup', handleMouseup)
})
</script>

<template>
  <div class="wrapper">
    <div class="arrow-item" :class="{ 'dis-click': no_prev }" @click="handlePrev">
      <hl-icon icon="teenyicons:left-outline" />
    </div>
    <div ref="lunbo_ref" class="lunbo-wrapper" :style="_style" @mouseenter="handleMouseenter" @mousedown="handleMousedown">
      <div v-for="(item, index) in data" :key="index" class="item">
        <div class="flex justify-between leading-[20px] p-2 text-gray-500">
          <div>{{ item.title }}</div>
          <div>{{ item.status }}</div>
        </div>

        <div v-for="content in item.content" :key="content.name" class="flex leading-[30px] mt-2 px-2 justify-between">
          <div class="flex items-center">
            <img :src="content.logo" :alt="content.name" class="w-[24px] h-[24px] pointer-events-none">
            <div class="ml-1">
              {{ content.name }}
            </div>
          </div>
          <div class="font-bold">
            {{ content.score }}
          </div>
        </div>

        <div class="footer-item">
          集锦
        </div>
      </div>
    </div>
    <div class="arrow-item" :class="{ 'dis-click': no_next }" @click="handleNext">
      <hl-icon icon="teenyicons:right-outline" />
    </div>
  </div>
</template>

<style lang='scss' scoped>
$border-color: #eee;

.wrapper {
  width: fit-content;
  display: flex;
  overflow: hidden;
}

.arrow-item {
  position: relative;
  z-index: 9;
  background-color: #f2f2f2;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray;
  cursor: pointer;
}

.item {
  width: 200px;
  flex-shrink: 0;
  border: 1px solid $border-color;
  margin-right: 10px;
}

.footer-item {
  text-align: center;
  color: #16b13a;
  border-top: 1px solid $border-color;
  padding: 10px;
  font-size: 15px;
  line-height: 20px;
  margin-top: 10px;
}

.lunbo-wrapper {
  transition: all linear 0.5s;
  user-select: none;
  @apply flex w-[830px];
}

.dis-click {
  cursor: not-allowed;
  color: gray;
}
</style>
