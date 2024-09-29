<script setup>
const options = [{
  label: '男',
  value: 1,
}, {
  label: '女',
  value: 2,
}]

const sex = ref(1)

const code = `
<template>
 <hl-radio v-model="sex" :options line />
</template>
<script setup>
const options = [{
  label: '男',
  value: 1,
}, {
  label: '女',
  value: 2,
}]

const sex = ref(1)
<\/script>`
</script>

<template>
  <custom-code-preview :code="code">
    <hl-radio v-model="sex" :options line />
  </custom-code-preview>
</template>
