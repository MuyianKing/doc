<script setup>
const code = `
<template>
  <hl-grid-layout :width="300" :min-width="200" class="overflow-y-auto h-[400px]">
    <div v-for="index in 20" :key="index" class="grid-item">
      {{ index }}
    </div>
  </hl-grid-layout>
</template>

<script setup>

<\/script>`
</script>

<template>
  <custom-code-preview :code>
    <hl-grid-layout :width="300" :min-width="200" class="overflow-y-auto h-[400px]">
      <div v-for="index in 20" :key="index" class="grid-item">
        {{ index }}
      </div>
    </hl-grid-layout>
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
