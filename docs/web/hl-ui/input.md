---
title: 输入框
---

## hl-input

### 基本用法

<hl-demo-input/>

> hl-input组件继承了[el-input](https://element-plus.gitee.io/zh-CN/component/input.html#基础用法)的所有属性和方法，只是在它的基础上做了几点增强

### Placeholder

> 当hl-input被hl-form-item包裹时，我们大部分情况下时不需要手动设置placeholder，组件会自动获取hl-form-item的label属性生成“请输入+hl-form-item的label”

<hl-demo-input-placeholder/>

### 提示指引

> 需求：当鼠标放入输入框时希望在输入框的上面弹出信息框提示用来解释当前输入字段的含义

<hl-demo-input-tooltip/>

### 属性

| 属性                  | 说明         | 类型                  | 可选值 | 默认值 |
| --------------------- | ------------ | --------------------- | ------ | ------ |
| model-value / v-model | 选中项绑定值 | String, Number, Array | —      | —      |
| placeholder           | 提示信息     | String                | —      | —      |
| tip                   | 指引信息     | String                | —      | —      |
| tip-label             | 指引标题     | String                | —      | —      |

### 插槽

| 插槽名 | 说明           |
| ------ | -------------- |
| suffix | 输入框尾部内容 |
| append | 输入框后置内容 |
