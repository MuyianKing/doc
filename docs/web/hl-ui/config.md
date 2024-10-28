---
title: 配置组件
---

## hl-config-provider

### 基本使用

<hl-demo-config/>

### custom-config属性

```js
{
  uploadFile:Function // 上传组件自动上传调用的方法
  previewFileUrl:Function // 预览组件：生成上传文件最终的访问地址
  downloadFile:Function // hl-file组件点击会自动文件，downloadFile为下载时调用的方法
}
```
