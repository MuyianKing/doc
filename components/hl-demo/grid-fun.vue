<script setup>
import { useGridLayout } from '@hl/ui'

const container_ref = ref()
useGridLayout(container_ref, {
  min_width: 300,
  width: 300,
})

const code = `
<template>
  <div ref="container_ref" class="overflow-y-auto h-[400px]">
    <div v-for="index in 30" :key="index" class="grid-item">
      {{ index }}
    </div>
  </div>
</template>

<script setup>
  import { useGridLayout } from '@hl/ui'

  const container_ref = ref()
  useGridLayout(container_ref, {
    min_width: 300,
    width: 300,
  })
<\/script>`
</script>

<template>
  <custom-code-preview :code>
    <div ref="container_ref" class="overflow-y-auto h-[400px]">
      <div v-for="index in 30" :key="index" class="grid-item">
        {{ index }}
      </div>
    </div>
  </custom-code-preview>
</template>

<style lang="scss" scoped>
.grid-item {
  height: 150px;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
