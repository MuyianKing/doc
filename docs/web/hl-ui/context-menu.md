---
title: 右击菜单
---

## 右击菜单

### 基础使用

<client-only>
  <hl-demo-context-menu/>
</client-only>

### 绑定数据

<client-only>
  <hl-demo-context-menu-data/>
</client-only>

> toggle方法接收的参数会出现在click事件抛出来的数据的data属性上

### 自定义选项

<client-only>
  <hl-demo-context-menu-custom/>
</client-only>

hl-context-menu-item组件插槽接收来自options对应索引的配置

### 属性

| 属性    | 说明   | 类型  | 可选值 | 默认值 |
| ------- | ------ | ----- | ------ | ------ |
| options | 操作项 | Array | —      | —      |

### 方法

| 方法名 | 说明                 | 参数                                                                          |
| ------ | -------------------- | ----------------------------------------------------------------------------- |
| toggle | 控制菜单的显示与隐藏 | 布尔类型-true显示，false隐藏；其他类型-显示菜单并将数据做点参数传递给点击事件 |
