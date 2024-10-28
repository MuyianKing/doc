<script setup>
const code = `
<template>
  <el-form ref="form_ref" :model="model" label-width="80">
    <hl-form-item label="姓名" prop="name" required>
      <hl-input v-model="model.name" />
    </hl-form-item>
    <hl-form-item label="年龄" prop="age" integer required>
      <hl-input v-model="model.age" />
    </hl-form-item>
    <hl-form-item label="身份证号" prop="id_card" id-card>
      <hl-input v-model="model.id_card" />
    </hl-form-item>
    <hl-form-item label="手机号" prop="phone" phone>
      <hl-input v-model="model.phone" />
    </hl-form-item>
  </el-form>
  <div class="text-right">
    <hl-button @click="submit">
      提交
    </hl-button>
  </div>
</template>
`

const form_ref = ref()
const model = reactive({
  name: '',
  age: '',
  phone: '',
  id_card: '',
})

function submit() {
  form_ref.value.validate()
}
</script>

<template>
  <custom-code-preview :code>
    <el-form ref="form_ref" :model="model" label-width="80">
      <hl-form-item label="姓名" prop="name" required>
        <hl-input v-model="model.name" />
      </hl-form-item>
      <hl-form-item label="年龄" prop="age" integer required>
        <hl-input v-model="model.age" />
      </hl-form-item>
      <hl-form-item label="身份证号" prop="id_card" id-card>
        <hl-input v-model="model.id_card" />
      </hl-form-item>
      <hl-form-item label="手机号" prop="phone" phone>
        <hl-input v-model="model.phone" />
      </hl-form-item>
    </el-form>
    <div class="text-right">
      <hl-button @click="submit">
        提交
      </hl-button>
    </div>
  </custom-code-preview>
</template>

<style lang="scss" scoped></style>
