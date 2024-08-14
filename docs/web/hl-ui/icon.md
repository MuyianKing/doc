---
title: 图标
---

> 项目中使用[iconify](https://icon-sets.iconify.design)图标库

## hl-icon

### 基础用法

<hl-demo-icon/>

### 颜色 大小

<hl-demo-icon-config/>
> hl-icon的默认大小为18px，颜色则会继承父组件的颜色

### 说明

- hl-icon只是对iconify的[vue组件](https://iconify.design/docs/icon-components/vue/)进行了一层简单的包装。
- hl-icon在渲染的时候会向服务器发送请求来获取图标的svg内容及宽高等，当项目的部署环境有互联网时不需要做任何额外的配置，会向默认的服务器发送请求；但是我们大部分项目都是部署在内网，这就需要我们自己搭建服务；正常情况下后端会在公安网、检察院各部署一套以供项目使用，前端需要在配置文件中通过【VITE_ICONIFY_API】配置指定服务器。
