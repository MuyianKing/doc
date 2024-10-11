<script setup>
import { previewFileUrl } from '@/utils/file'

const code = `
<template>
  <div class="flex flex-wrap justify-between">
    <div class="flex flex-col justify-center items-center mr-2">
      <div>contain</div>
      <hl-image :src />
    </div>
    <div class="flex flex-col justify-center items-center mr-2">
      <div>fill</div>
      <hl-image :src fit="fill" />
    </div>
    <div class="flex flex-col justify-center items-center mr-2">
      <div>cover</div>
      <hl-image :src fit="cover" />
    </div>
    <div class="flex flex-col justify-center items-center mr-2">
      <div>none</div>
      <hl-image :src fit="none" />
    </div>
    <div class="flex flex-col justify-center items-center mr-2">
      <div>scale-down</div>
      <hl-image :src fit="scale-down" />
    </div>
  </div>
<\/template>
<script setup>
  const src = '2024/10/10/P1728545560044ST.png'
<\/script>
`

const customConfig = {
  previewFileUrl,
}

const src = '2024/10/10/P1728545560044ST.png'
</script>

<template>
  <custom-code-preview :code>
    <hl-config-provider :custom-config>
      <div class="flex flex-wrap justify-between">
        <div class="flex flex-col justify-center items-center mr-2">
          <div>contain</div>
          <hl-image :src />
        </div>
        <div class="flex flex-col justify-center items-center mr-2">
          <div>fill</div>
          <hl-image :src fit="fill" />
        </div>
        <div class="flex flex-col justify-center items-center mr-2">
          <div>cover</div>
          <hl-image :src fit="cover" />
        </div>
        <div class="flex flex-col justify-center items-center mr-2">
          <div>none</div>
          <hl-image :src fit="none" />
        </div>
        <div class="flex flex-col justify-center items-center mr-2">
          <div>scale-down</div>
          <hl-image :src fit="scale-down" />
        </div>
      </div>
    </hl-config-provider>
  </custom-code-preview>
</template>

<style lang="scss" scoped></style>
