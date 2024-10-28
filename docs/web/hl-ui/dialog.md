---
title: 弹框
---

## hl-dialog

### 基础用法

<hl-demo-dialog/>

> 继承了[e-dialog](https://element-plus.gitee.io/zh-CN/component/dialog.html)所有属性，做了以下调整

- 默认组件距离顶部150px，可通过top属性配置
- 组件外部不会出现滚动条，当内容超出弹框范围，标题和底部 footer 保持不变，内容主体出现滚动条
- close-on-click-modal：默认false
- destroyOnClose：默认true
- append-to-body：该配置不再生效，全部挂载到body
