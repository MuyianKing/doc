<script setup>
const code = `
<template>

<\/template>
`

const text_value = ref('')
function handleChange() {
  console.log('test')
}
</script>

<template>
  <custom-code-preview :code>
    <div class="flex">
      <hl-edit-info v-model="text_value" @change="handleChange" />
    </div>
  </custom-code-preview>
</template>

<style lang='scss' scoped>

</style>
