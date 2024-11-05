---
title: 远程下拉
---

## hl-select-remote

### 应用场景

> 用户数据是我们应用最常见的数据，在一些场景下我们可能需要一个用户下拉选择组件，下面我们来实现一下：

```vue
<script setup>
// 用户数据
const userList = ref([])

// 获取所有的用户数据
function getUserList() {
}
</script>

<template>
  <hl-select :options="useList" />
</template>
```

> 上面的代码可以满足我们的场景但是当用户数据量大时就不可避免的页面卡顿，这时候我们就需要加上分页

```vue
<template>
  <el-select :remote-method="filterFun" filterable remote-show-suffix remote :loading no-data-text="没有数据">
    <div v-loadmore="loadmore">
      ......
    </div>
  </el-select>
</template>
```

> v-loadmore指令提供滚动到底部的触发条件
>
> loadmore为获取分页数据的方法
>
> filterFun为筛选获取数据的方法

> 上面的代码把分页的问题解决了，但分页也给回显带来了麻烦：我们第一次加载的总是第一页的数据，当我们选择了第二页的数据，回显找不到对应的数据就无法正常显示，这是我们还需要做一些额外操作：

```js
function init() {
  // 1、如果v-model有值，需要调一次接口根据id或者其他主键查询数据
  // 2、获取第一页的数据
  // 3、去重数据并合并
}

init()

```

到这一个能用的用户下拉组件就可以使用了，当然其他还有很多细节就不展开说了，总结一下一个远程下拉组件需要做的工作：

- 前端
  - 获取数据
  - 支持下拉加载更多
  - 支持分页查询
  - 支持远程搜索
  - 回显第二页数据
- 后端接口
  - 支持分页
  - 支持关键字查询
  - 支持根据id获取其他主键查询

后端不必说，前端的这些工作hl-select-remote以全部完成了

### 基础使用

```vue
<script setup>
// 获取所有的用户数据
function getUserList() {
  return {
    count: 100,
    data: [{
      userId: 1,
      userName: '测试'
    }]
  }
}

const queryConfig = {
  id_key: 'userId',
  query_key: 'userName'
}

const dataConfig = {
  label_key: 'userName',
  value_key: 'userId'
}
</script>

<template>
  <hl-select-remote :server="getUserList" class="min-w-[120px]" :query-config :data-config />
</template>
```

#### 属性

##### server

server为获取数据的方法，格式如下：

```ts
type server = Promise<{
  count: number // 数据量
  data: Array<object> // 数据
}>
```

##### query-config

```ts
// 查询配置
interface queryConfig {
  id_key: 'id' // 数据回显时需要根据主键查询已经选择的数据，id_key配置主键字段名，默认id
  query_key: '' // 远程搜索接口规定的查询字段名，默认query
}
```

##### data-config

下拉组件默认需要的数据格式是

```js
[
  {
    label: '显示的字段',
    value: 'v-model绑定的字段'
  }
]
```

但是大部分情况下业务数据不可能是label和value，而是userName、userId之类的，dataConfig就是配置这个映射关系的

```ts
interface dataConfig {
  label_key: 'userName' // 默认name
  value_key: 'userId' // 默认id
  extend_keys: [] // 默认组件只会从数据去label_key和value_key对应的两个字段数据，如果需要其他字段，通过extend_keys定义
}
```

### 最后

hl-selcet-remote继承[el-select](https://element-plus.org/zh-CN/component/select.html)所有属性
