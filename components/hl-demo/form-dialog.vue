<script setup>
const code = ``

const show = ref(false)
const form = reactive({
  name: '',
  tel: '',
})

async function server() {
  return true
}
</script>

<template>
  <custom-code-preview :code>
    <hl-button @click="show = true">
      编辑
    </hl-button>

    <hl-form-dialog v-model="show" title="表单弹框" :model="form" :server>
      <hl-form-item label="姓名" prop="name" required>
        <hl-input v-model="form.name" />
      </hl-form-item>
      <hl-form-item label="手机号" prop="tel" required phone>
        <hl-input v-model="form.tel" />
      </hl-form-item>
    </hl-form-dialog>
  </custom-code-preview>
</template>

<style lang='scss' scoped></style>
