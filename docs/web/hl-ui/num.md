---
title: 数字
---

> 添加千分位

> 大数字自动转换为xxx万、xxx亿、xxx千亿

### 基础用法

~~~vue
<template>
  <hl-num :num="num"/>
</template>

<script setup>
const num = ref(99999999999)
</script>
~~~

### 属性

| 属性        | 说明  | 类型  | 可选值| 默认值  |
| ----------- | ------ | ------ | ------ | -------- |
| num | 数字  | Number | —  | —   |
| separator | 千分位分隔符  | Number | —  | ,  |