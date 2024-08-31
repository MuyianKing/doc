---
title: 日期
---

## hl-date

### 基础用法

<hl-demo-date/>

### 选择一段时间

#### 基础用法

大部分场景中我们都是使用两个字段单独绑定开始时间和结束时间，当然hl-date也支持v-model绑定为一个时间范围
<hl-demo-date-range/>

> 特别注意：之所以封装hl-date这个组件是因为在实际使用过程中发现[el-date-picker](https://element-plus.org/zh-CN/component/date-picker.html#%E9%80%89%E6%8B%A9%E4%B8%80%E6%AE%B5%E6%97%B6%E9%97%B4)的选择一段时间并不好用，所以开发中所有的选择一段时间需求非特殊情况只能使用hl-date

#### 数据格式

hl-date继承了[el-date-picker](https://element-plus.gitee.io/zh-CN/component/date-picker.html)的所有的属性，也包括format和valueFormat，但是有些情况我们可能需要单独设置开始时间和结束时间的格式，可以使用start-value-format和end-value-format

<hl-demo-date-range-format/>

### 属性

| 属性             | 说明                                | 类型               | 可选值                       | 默认值                                                  |
| ---------------- | ----------------------------------- | ------------------ | ---------------------------- | ------------------------------------------------------- |
| type             | 组件类型                            | String             | date-一个日期 range-日期范围 | date                                                    |
| model-value      | 绑定值                              | String             | —                            | —                                                       |
| start            | 开始时间：type为range时有效         | String             | —                            | —                                                       |
| end              | 结束时间：type为range时有效         | String             | —                            | —                                                       |
| startPlaceholder | 开始时间提示信息：type为range时有效 | String             | —                            | 请选择开始时间                                          |
| endPlaceholder   | 结束时间提示信息：type为range时有效 | String             | —                            | 请选择结束时间                                          |
| startValueFormat | 开始时间格式：type为range时有效     | String             | 同 valueFormat               | 同 valueFormat，设置 startValueFormat，valueFormat 失效 |
| endValueFormat   | 结束时间格式：type为range时有效     | String             | 同 valueFormat               | endValueFormat                                          |
| separator        | 中间的分隔符：type为range时有效     | String             | —                            | ~                                                       |
| width            | 单个选择框的长度：type为range时有效 | String/Number      | auto：均分外部容器的宽度     | 150                                                     |
| emptyValue       | 空值：点击清除图标组件时绑定的值    | String/Number/Null | —                            | 空字符串                                                |

### 事件

| 事件名 | 说明                             | 回调参数      |
| ------ | -------------------------------- | ------------- |
| change | 开始时间或结束时间发生变化时触发 | (val: String) |
