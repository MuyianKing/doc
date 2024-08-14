---
title: 输入框
---
## hl-input

### 基本用法

```vue
<template>
  <hl-input v-model="name" />
</template>

<script setup>
const name = ref("");
</script>
```

> info 组件继承了[el-input](https://element-plus.gitee.io/zh-CN/component/input.html#基础用法)的所有属性

### Placeholder

- 当组件手动设置了提示信息，以设置的为准
- 没有设置时如果组件被 [el-form-item](https://element-plus.gitee.io/zh-CN/component/form.html#formitem-attributes) 或 hl-form-item 包裹，并且两个组件设置了 label，那么提示信息为 “请输入+label”，也就是说放入 el-form-item 或 hl-form-item 里面的 hl-input 不需要手动设置 placeholder
- 其他情况默认为“请输入”

### 提示指引

> 需求：当鼠标放入输入框时希望在输入框的下面弹出信息框提示用来解释当前输入字段的含义

```vue
<template>
  <hl-input v-model="name" tip="这是一条提示信息" tip-label="提示标题" />
</template>

<script setup>
const name = ref("");
</script>
```

- tip-label：为指引标题，没有设置该属性，会先判断是否被[el-form-item](https://element-plus.gitee.io/zh-CN/component/form.html#formitem-attributes) 或 hl-form-item 包裹，被包裹则取它们上面的 label 属性作为标题；如果既没设置也没被包裹，则不显示标题

### 属性

| 属性                  | 说明         | 类型                  | 可选值 | 默认值 |
| --------------------- | ------------ | --------------------- | ------ | ------ |
| model-value / v-model | 选中项绑定值 | String, Number, Array | —      | —      |
| placeholder           | 提示信息     | String                | —      | —      |
| tip                   | 指引信息     | String                | —      | —      |
| tipLabel              | 指引标题     | String                | —      | —      |

### 插槽

| 插槽名 | 说明           |
| ------ | -------------- |
| suffix | 输入框尾部内容 |
| append | 输入框后置内容 |
