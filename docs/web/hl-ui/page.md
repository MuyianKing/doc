--- 
title: 分页
---

### 基础用法
~~~vue
<template>
   <hl-page :size="query.limit" :count="table.count" v-model:page="query.page" @change="getData" />
</template>

<script setup>
const query = reactive({
  limit:20,
  page:1
})

const table = reactive({
  count:0
})
function getData(){}
</script>
 ~~~

 ### Page属性
| 属性    | 说明   | 类型  | 可选值 | 默认值  |
| ------- | ------ | ------| ------ | ------  |
|  count   | 总条数 | Number |  —    |     0   |
|  size   | 每页大小 | Number |  —    |    —   |
|  page   | 当前页 | Number |  —    |     1   |


### 事件
| 事件名 |    说明  |  回调参数 |
| ------- | ------ | ------    |
|change  | page发生变化时触发|(val: Number)|