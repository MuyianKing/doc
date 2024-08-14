---
title: 图片
---

### 基本用法
~~~vue
<template>
  <hl-image src="src"/>
</template>
~~~

默认object-fit为cover, 可通过设置fit属性确定图片如何适应到容器框，取值同原生[object-fit](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit)。

### 图片地址
设置图片地址有两种方式
+ 直接设置src
+ 设置id：组件会根据所给的id生成图片的真实地址

> 同时设置了src和id，只会展示src给定的图片

### 图片预览
+ 组件默认开启预览，无需设置
+ 没有指定预览地址时，预览地址就是图片地址
+ 也可以通过preview属性指定预览地址，preview是数组，数组元素即图片预览地址

#### 关闭预览
只需要将notPreview属性设为true
~~~vue
<template>
  <hl-image src="src" not-preview />
</template>
~~~

### 属性
| 属性    | 说明   | 类型  | 可选值 | 默认值  |
| ------- | ------ | ------| ------ | ------  |
|  id   | 图片ID | Number, String |  —  |  —   |
|  src   | 图片地址 | String |  —    |    —   |
|  height | 图片高度 | String |  —  | 100px |
|  width | 图片宽度 | String |  —  | 100px |
|  fit   |同css object-fit|String| — |cover|
|  preview |预览图片地址|Array|— |[]|
|  notPreview | 是否关闭预览 |Boolean| — |false|

### Table插槽
|插槽名	  |说明    |
|-----   |------  |
|placeholder|当图像尚未加载时，自定义的占位符内容|
|default|其他需要显示的内容|


