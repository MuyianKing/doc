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
  <hl-form-item label="性别">
    <hl-select v-model="sex" :options readonly/>
  </hl-form-item>
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
    <hl-form-item label="性别">
      <hl-select v-model="sex" :options readonly />
    </hl-form-item>
  </custom-code-preview>
</template>
