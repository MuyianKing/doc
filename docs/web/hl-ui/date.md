---
title: 日期
---

## Date

### 基础用法

<hl-demo-date/>

### 属性

| 属性               | 说明                                                             | 类型               | 可选值                                                                    | 默认值                                                      |
| ------------------ | ---------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------- | ----------------------------------------------------------- |
| modelValue/v-model | 时间                                                             | String             | —                                                                         | —                                                           |
| type               | 类型，可以设置 daterange 但不推荐，时间范围请使用 DateRange 组件 | String             | year/month/date/dates/datetime/week                                       | date                                                        |
| emptyValue         | 空值，当清空数据时 modelValue 的值                               | String/Number/Null | —                                                                         | 空字符串                                                    |
| placeholder        | 提示信息                                                         | String             | —                                                                         | 请选择时间                                                  |
| valueFormat        | modelValue 的格式                                                | String             | 同[dayjs](https://dayjs.fenxianglu.cn/category/display.html#格式化)的格式 | type 为 datetime 时为 YYYY-MM-DD HH:mm:ss,其他为 YYYY-MM-DD |
| format             | 展示的时间格式                                                   | String             | 同 valueFormat                                                            | 同 valueFormat                                              |

### 事件

| 事件名 | 说明                      | 回调参数      |
| ------ | ------------------------- | ------------- |
| change | modelValue 发生变化时触发 | (val: String) |

> 继承[el-date-picker](https://element-plus.gitee.io/zh-CN/component/date-picker.html)所有属性和事件

## DateRange

### 基础用法

```vue
<template>
  <hl-date-range v-model:start="start" v-model:end="end" />
</template>

<script setup>
const start = ref();
const end = ref();
</script>
```

### 属性

| 属性             | 说明                                                 | 类型               | 可选值                                                                    | 默认值                                                      |
| ---------------- | ---------------------------------------------------- | ------------------ | ------------------------------------------------------------------------- | ----------------------------------------------------------- |
| type             | 类                                                   | String             | year/month/date/dates/datetime/week                                       | date                                                        |
| start            | 开始时间                                             | String             | —                                                                         | —                                                           |
| end              | 结束时间                                             | String             | —                                                                         | —                                                           |
| startPlaceholder | 开始时间提示信息                                     | String             | —                                                                         | 请选择开始时间                                              |
| endPlaceholder   | 结束时间提示信息                                     | String             | —                                                                         | 请选择结束时间                                              |
| valueFormat      | 开始时间和结束时间格式                               | String             | 同[dayjs](https://dayjs.fenxianglu.cn/category/display.html#格式化)的格式 | type 为 datetime 时为 YYYY-MM-DD HH:mm:ss,其他为 YYYY-MM-DD |
| startValueFormat | 开始时间格式                                         | String             | 同 valueFormat                                                            | 同 valueFormat，设置 startValueFormat，valueFormat 失效     |
| endValueFormat   | 结束时间格式                                         | String             | 同 valueFormat                                                            | endValueFormat                                              |
| format           | 展示的时间格式                                       | String             | 同 valueFormat                                                            | 同 valueFormat                                              |
| separator        | 中间的分隔符                                         | String             | —                                                                         | ~                                                           |
| width            | 单个选择框的长度                                     | String/Number      | —                                                                         | 150                                                         |
| noWarning        | 默认当开始时间大于结束时间时会提示，此选项可关闭提示 | Boolean            | false/true                                                                | false                                                       |
| emptyValue       | 空值                                                 | String/Number/Null | —                                                                         | 空字符串                                                    |

### 事件

| 事件名 | 说明                             | 回调参数      |
| ------ | -------------------------------- | ------------- |
| change | 开始时间或结束时间发生变化时触发 | (val: String) |
