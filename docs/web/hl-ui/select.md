--- 
title: 选择器
---
## Select 选择器

>hl-select继承[el-select](https://element-plus.gitee.io/zh-CN/component/select.html)所有属性和事件

### 基础用法
~~~vue
<template>
  <hl-select v-model="sex" :options="options" />
</template>

<script setup>
const options = [{
  label:"男",
  value:1,
},{
  label:"女",
  value:2,
}]

const sex = ref(1)
</script>
~~~


### 属性
| 属性    | 说明   | 类型  | 可选值 | 默认值  |
| ------- | ------ | ------| ------ | ------  |
|  model-value / v-model   | 选中项绑定值 |  String, Number, Array|  —    |     —  |
|  placeholder   | 空值提示信息 |  String|  —    |     请选择  |
|  all   | 是否显示选择项“全部” |  Boolean|  —    |     false  |

>当选择全部时v-model绑定的值为空字符串

