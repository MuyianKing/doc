<script setup>
import { getIcons } from '@server/icon'

const customConfig = {
  getIcons,
}

const icon = ref()

const code = `
<template>
<hl-icon-select v-model="icon" />
</template>
<script>
const icon = ref()
<\/script>
`
</script>

<template>
  <div>
    <custom-code-preview :code>
      <hl-config-provider :custom-config>
        <hl-icon-select v-model="icon" />
      </hl-config-provider>
    </custom-code-preview>
  </div>
</template>

<style lang='scss' scoped></style>
