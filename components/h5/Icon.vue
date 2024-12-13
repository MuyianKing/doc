<script setup>
import { HlIcon, HlList } from '@hl/h5'
import { getIcons } from '@server/icon'
import { reactive, ref } from 'vue'

const icons = ref([])
const status = reactive({
  loading: true,
  count: 0,
})

let page = 1
function getData() {
  status.loading = true
  getIcons({
    limit: 200,
    page,
  }).then(({ data, count }) => {
    status.count = count
    data.forEach((icon) => {
      icons.value.push(icon)
    })
  }).finally(() => {
    status.loading = false
  })
}

function handleMore() {
  console.log('handleMore')

  page++
  getData()
}

getData()
</script>

<template>
  <hl-list class="p-2" :data="icons" :status @load="handleMore">
    <div class="flex flex-wrap">
      <div v-for="icon in icons" :key="icon" class="w-[20%] text-center py-3">
        <hl-icon :icon size="36" />
      </div>
    </div>
  </hl-list>
</template>

<style lang='scss' scoped></style>
