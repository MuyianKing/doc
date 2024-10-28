---
title: 按钮
---

## hl-button

### 基础用法

<hl-demo-button />

### 图标按钮

<hl-demo-button-icon/>

### 文字按钮

<hl-demo-button-text/>

### 属性

| 属性        | 说明                                          | 类型    | 可选值                          | 默认值  |
| ----------- | --------------------------------------------- | ------- | ------------------------------- | ------- |
| button-type | 按钮样式                                      | String  | button-按钮 icon-图标 text-文字 | button  |
| icon        | 设置图标，button-type为button、icon时有效，   | String  | —                               | —       |
| size        | 图标大小                                      | Number  | —                               | 18      |
| show-icon   | button-type为button且配置了icon，控制图标显示 | Boolean | —                               | true    |
| text        | 按钮文字或鼠标悬浮提示                        | String  | —                               | —       |
| placement   | button-type为icon时，鼠标悬浮提示的位置       | String  | 取值同el-tooltip                | top     |
| type        | 类型                                          | String  | 取值同el-button                 | primary |
