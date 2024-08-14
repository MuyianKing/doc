---
title: 视频
---

### 基本用法
~~~vue
<template>
  <hl-video src="src"/>
</template>
~~~

> 用法同hl-image，不再赘述

### 属性
| 属性    | 说明   | 类型  | 可选值 | 默认值  |
| ------- | ------ | ------| ------ | ------  |
|  id   | 图片ID | Number, String |  —  |  —   |
|  src   | 图片地址 | String |  —    |    —   |
|  height | 图片高度 | String |  —  | 100px |
|  width | 图片宽度 | String |  —  | 100px |
|  fit   |同css object-fit|String| — |contain|
|  controls | 是否显示视频控制条 | Boolean | — | false |