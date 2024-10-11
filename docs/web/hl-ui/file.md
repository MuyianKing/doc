---
title: 文件
---

### 基本用法

<hl-demo-file/>

> 地址处理同[hl-image](/docs/web/hl-ui/image.html#图片地址)

### 下载

组件默认单击下载，可以设置no-download取消下载

### 属性

| 属性       | 说明                   | 类型    | 可选值 | 默认值 |
| ---------- | ---------------------- | ------- | ------ | ------ |
| file       | 图片信息               | Object  | —      | null   |
| card       | 是否采用卡片布局       | Boolean | —      | false  |
| width      | 宽度，只对卡片样式有效 | string  | —      | 100px  |
| height     | 高度，只对卡片样式有效 | string  | —      | 100px  |
| noDownload | 是否禁止下载           | Boolean | —      | false  |

> file字段要求同 [hl-preview](/docs/web/hl-ui/preview.html#%E5%B1%9E%E6%80%A7)的files
