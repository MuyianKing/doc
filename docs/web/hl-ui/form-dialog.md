---
title: 表单弹框
---

### 基本用法

```vue
<template>
  <hl-form-dialog
    :model-value="modelValue"
    :title="title"
    :rules="rules"
    :model="form"
    label-width="80px"
    @close="close"
    @submit="submit"
  >
    <hl-form-item label="姓名" prop="name" required>
      <hl-input v-model="form.name" />
    </hl-form-item>
    <hl-form-item label="手机号" prop="tele_long" required phone>
      <hl-input v-model="form.tele_long" />
    </hl-form-item>
  </hl-form-dialog>
</template>
```

和 hl-dialog 相比，hl-form-dialog 做了一下几点

- 预置了提交按钮，只需要绑定提交事件

- 提交时校验表单规则，不需要使用时再校验，也就是说当触发了提交事件时，已经满足了校验规则

- 弹框关闭时重置表单校验
