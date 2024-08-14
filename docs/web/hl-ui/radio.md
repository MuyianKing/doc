---
title: 单选组
---

### 基本用法

```vue
<template>
  <hl-radio v-model="sex" :options="options" />
</template>

<script setup>
const options = [
  {
    label: "男",
    value: 1,
  },
  {
    label: "女",
    value: 2,
  },
];

const sex = ref(1);
</script>
```

### 属性

| 属性                  | 说明         | 类型                  | 可选值 | 默认值 |
| --------------------- | ------------ | --------------------- | ------ | ------ |
| model-value / v-model | 选中项绑定值 | String, Number, Array | —      | —      |

### 事件

| 事件名 | 说明             | 回调参数                     |
| ------ | ---------------- | ---------------------------- |
| change | 选项发生变化触发 | (val: String, Number, Array) |
