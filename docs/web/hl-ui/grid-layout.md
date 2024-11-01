---
title: Grid布局
---

## hl-grid-layout

### 基本用法

<hl-demo-grid />

> 当我们改变屏幕尺寸时会发现hl-demo-grid里面的内容列数会自动改变，变化规则由width和min-width控制，代码如下：

```js
// 设置列数
function setColumnRow() {
  // el是容器
  const width = el.clientWidth
  let column = width / config.width

  // 当column小数部分大于0.5向上取整，否则向下取整
  column = column - Math.floor(column) > 0.5 ? Math.ceil(column) : Math.floor(column)

  // 内容块实际快读
  const real_width = width / column
  // 宽度小于最小宽度，列数减一以增加内容块宽度
  if (config.min_width && real_width < config.min_width) {
    column -= 1
  }

  el.style['grid-template-columns'] = `repeat(${column}, 1fr)`
}
```

### 函数方式

<hl-demo-grid-fun />
