--- 
title: 时间
---

### 基本用法
~~~vue
<template>
  <hl-time-parser time="2023-01-18 14:15:00"/>
</template>
~~~

> 显示规则：当容器不足以完全显示时间，组件会将时间两行显示，上面显示日期，下面显示时间


### 如何拆分日期和时间
> 组件默认日期和时间之间用空格连接，所以默认会根据空格拆分；当然可以配置separator属性来指定拆分字符

~~~vue
<template>
  <hl-time-parser time="2023-01-18~14:15:00" separator="~"/>
</template>
~~~

### 属性
| 属性    | 说明   | 类型  | 可选值 | 默认值  |
| -------| ------ | ------| ------ | ------ |
|   time  | 时间 | String |   —   |   —  |
| separator  | 拆分字符 | String |   —   |   —  |
| nowrap |当容器不够时不换行|Boolean|—|false|