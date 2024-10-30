<script setup>
const code = `
<template>
  <hl-edit-info v-model="text_value" @change="handleChange" />
</template>
<script>
  const text_value = ref('')
  function handleChange(val) {
    console.log(val)
  }
<\/script>
`

const text_value = ref('')
function handleChange(val) {
  console.log(val)
}
</script>

<template>
  <custom-code-preview :code>
    <div class="flex">
      <hl-edit-info v-model="text_value" @change="handleChange" />
    </div>
  </custom-code-preview>
</template>

<style lang='scss' scoped></style>
