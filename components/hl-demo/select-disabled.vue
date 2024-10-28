<script setup>
const options = [{
  label: '男',
  value: 1,
}, {
  label: '女',
  value: 2,
}, {
  label: '其他',
  value: 3,
}]

const sex = ref(1)

const code = `
<template>
  <hl-form-item label="性别">
    <hl-select v-model="sex" :options :disabled-options="3" />
  </hl-form-item>
  <!-- 数组禁用一批 -->
  <hl-form-item label="性别">
    <hl-select v-model="sex" :options :disabled-options="[2, 3]" />
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
      <hl-select v-model="sex" :options :disabled-options="3" />
    </hl-form-item>
    <!-- 数组禁用一批 -->
    <hl-form-item label="性别">
      <hl-select v-model="sex" :options :disabled-options="[2, 3]" />
    </hl-form-item>
  </custom-code-preview>
</template>
