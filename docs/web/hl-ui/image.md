---
title: 图片
---

### 基本用法

<hl-demo-image/>

默认object-fit为contain, 可通过设置fit属性确定图片如何适应到容器框，取值同原生[object-fit](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit)

### 图片地址

- 组件会调用外部项目透传进来的previewFileUrl生成最终的访问路径
- 大部分情况下previewFileUrl的逻辑如下
  - 地址以http开头直接在尾部拼上token
  - 不是以http开头则在头部拼上preview，在尾部拼上token

### 图片预览

- 组件默认开启预览，无需设置
- 没有指定预览地址时，预览地址就是图片地址
- 也可以通过preview属性指定预览地址，preview是数组，数组元素即图片预览地址，需要注意的是这个预览地址组件不会像上面一样处理

#### 关闭预览

只需要将no-preview属性设为true

```vue
<template>
  <hl-image src="src" no-preview />
</template>
```

### 属性

| 属性      | 说明             | 类型    | 可选值 | 默认值 |
| --------- | ---------------- | ------- | ------ | ------ |
| src       | 图片地址         | String  | —      | —      |
| height    | 图片高度         | String  | —      | 100px  |
| width     | 图片宽度         | String  | —      | 100px  |
| fit       | 同css object-fit | String  | —      | cover  |
| preview   | 预览图片地址     | Array   | —      | []     |
| noPreview | 是否关闭预览     | Boolean | —      | false  |

### Table插槽

| 插槽名      | 说明                                 |
| ----------- | ------------------------------------ |
| placeholder | 当图像尚未加载时，自定义的占位符内容 |
| default     | 其他需要显示的内容                   |
