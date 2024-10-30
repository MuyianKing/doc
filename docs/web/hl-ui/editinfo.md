---
title: 可编辑文本
---

## hl-edit-info

> 双击文本显示输入框编辑

### 基本用法

<hl-demo-edit-info />

### 属性

| 属性               | 说明                            | 类型    | 可选值            | 默认值   |
| ------------------ | ------------------------------- | ------- | ----------------- | -------- |
| modelValue/v-model | 绑定的值                        | any     | —                 | —        |
| width              | 容器宽度                        | String  | —                 | 100%     |
| align              | 对齐方式                        | String  | left/right/center | left     |
| editable           | 是否可编辑                      | Boolean | —                 | true     |
| placeholder        | 输入框提示信息                  | String  | —                 | 请输入   |
| triggerInfo        | modelValue为空时触发区域文字    | String  | —                 | 双击编辑 |
| zeroToEmpty        | 值为0时双击编辑是否置为空字符串 | Boolean | —                 | false    |

### 事件

| 事件名 | 说明           | 回调参数     |
| ------ | -------------- | ------------ |
| change | 文本变化时触发 | (val:String) |
