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
 <hl-radio v-model="sex" :options :multiple="false"/>
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
  <custom-code-preview :code>
    <hl-checkbox v-model="sex" :options :multiple="false" />
  </custom-code-preview>
</template>
