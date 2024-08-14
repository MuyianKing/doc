--- 
title: 可编辑文本
---

>双击文本显示输入框编辑

### 基本用法
~~~vue
<template>
  <hl-edit-info model-value="test" @change="handleChange" />>
</template>

<script setup>
function handleChange(val){
  console.log(val)
}
</script>
~~~


### 属性
| 属性    | 说明   | 类型  | 可选值 | 默认值  |
| -------| ------ | ------| ------ | ------ |
|  modelValue/v-model  | 显示的值 | * |   —   |   —  |
| width | 容器宽度 | String| — | 100% |
| align | 对齐方式 | String | left/right/center | left |
| editable | 是否可编辑 | Boolean | — | true |
| placeholder | 值为空时的提示信息|String | 没有值时的提示信息 | — | — |
| zeroToEmpty | 值为0时双击编辑是否置为空字符串 | Boolean | — | false |
| type | 文本类型 | String | textarea|input | input |
| rows | 文本域行数 | Number | — | 3 |
| emptyValue | modelValue为空字符串时显示的值 | String | — | '' |

### 事件
| 事件名 | 说明  | 回调参数 |
| ------- | ------ | ------ |
|change  |文本变化时触发|(val:String)|