---
title: 图标选择
---

## hl-icon-select

### 基础用法

<hl-demo-icon-select/>

### 全局配置

> 因为组件不提供图标服务，所以需要全局配置获取图标的方法

```vue
<script setup>
const customConfig = {
  getIcons: Function,
}
</script>

<template>
  <hl-config-provider :custom-config>
    <hl-icon-select v-model="icon" />
  </hl-config-provider>
</template>

```
