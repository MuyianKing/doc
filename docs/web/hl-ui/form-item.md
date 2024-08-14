---
title: 表单项
---

> hl-form-item 继承了[el-form-item](https://element-plus.gitee.io/zh-CN/component/form.html#formitem-attributes)所有的属性，在 el-form-item 基础上 hl-form-item 预设了一些校验规则

### 基础用法

```vue
<template>
  <hl-form-item lanel="姓名" prop="name" required>
    <hl-input v-model="name" />
  </hl-form-item>
</template>
```

> 上面的 required 表示姓名为必填项，当没有填写时会提示“请输入姓名”

### 预设规则

> 所有的规则都是以属性的方式设置比如手机号的属性为 phone，只需要如下设置：

```vue
<template>
  <hl-form-item lanel="姓名" prop="name" phone>
    <hl-input v-model="name" />
  </hl-form-item>
</template>
```

| 规则     | 属性      | 说明         |
| -------- | --------- | ------------ |
| 必填     | required  | -            |
| 身份证号 | idCard    | -            |
| 整型     | integer   | -            |
| 手机号   | phone     | -            |
| 车牌号   | carNum    | -            |
| IP 地址  | ip        | -            |
| 端口     | port      | -            |
| 最大长度 | maxLength | 绑定一个数字 |
| 最小长度 | minLength | 绑定一个数字 |

### 属性

| 属性    | 说明                                                                                           | 类型          | 可选值 | 默认值 |
| ------- | ---------------------------------------------------------------------------------------------- | ------------- | ------ | ------ |
| trigger | 触发校验方式                                                                                   | String        |        | blur   |
| rules   | 自定义校验规则                                                                                 | Object, Array |        | null   |
| info    | 提示信息：组件会自动根据表单组件判断是“请选择”还是“请输入”，当无法正确判断时需要手动设置改属性 | String        |        |        |
