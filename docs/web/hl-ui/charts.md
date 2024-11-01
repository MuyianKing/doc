---
title: 图表
---

## hl-chart

当我们直接使用echarts渲染图表时我们可能会遇到以下几个问题：

- 页面大小变化不会自动调整
- 一些情况下从其他页面切回到含有 echarts 的页面，图表可能显示不出来
- 设置 tips 后鼠标 hover 可能会出现滚动条

而hl-chart已经帮我们解决了上面的问题

::: warning 提醒
项目图表必须使用hl-chart
:::

### 基础用法

<client-only>
  <hl-demo-charts/>
</client-only>

上面的两个图表左边是封装的hl-chart，右边是直接使用echarts，当我们改变页面尺寸时我们会发现hl-chart会自动改变自身的尺寸，右边却不会。
