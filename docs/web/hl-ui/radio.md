---
title: 单选框
---

## hl-radio

### 基本用法

<hl-demo-radio />

### 纵向排列

<hl-demo-radio-line/>

### 取消选择

当 empty=true时再次点击已选择的选项可取消选择
<hl-demo-radio-empty/>

### 属性

| 属性                  | 说明             | 类型                  | 可选值 | 默认值 |
| --------------------- | ---------------- | --------------------- | ------ | ------ |
| model-value / v-model | 选中项绑定值     | String, Number, Array | —      | —      |
| options               | 选项             | Array                 | —      | —      |
| empty                 | 是否可取消选择   | Boolean               | —      | —      |
| line                  | 每个选项独占一行 | Boolean               | —      | —      |
| readonly              | 是否只读         | Boolean               | —      | —      |

### 事件

| 事件名 | 说明             | 回调参数                     |
| ------ | ---------------- | ---------------------------- |
| change | 选项发生变化触发 | (val: String, Number, Array) |

> 继承[<el-radio-group](https://element-plus.org/zh-CN/component/radio.html#radio-attributes)所有属性
