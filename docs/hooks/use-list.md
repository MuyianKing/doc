---
title: useList
---

## useList

### 基本用法

<hl-demo-use-list/>

#### 参数

```ts
interface params {
  query: object // 配置查询条件所有字段和初始值

  // 获取数据的方法
  server: (params: object) => Promise<{
    data: any[] // 列表数据
    count: number // 数据量总数
    [prop: string]: string // 其他数据字段
  }>

  autoSearch: boolean // 页面挂载后是否自动获取数据，默认true

  autoUpdate: boolean // 查询参数变化后是否自动查询，默认true

  pageConifg: {
    sizes: boolean // 分页组件是否显示每页条数选择
  }

  noPage: boolean // 是否不渲染分页，默认false

  data_extend_keys: string[] // 默认返回的tableData字段只包含接口中的data和count两个字段，如果有其他字段，需要配置字段名

  onEnd: function // 接口调用结束后执行的方法，默认null

  oneServer: function // 更新一行数据调用的接口
  oneServerKey: string //  更新一行数据接口参数key，默认id
}
```

#### 返回值

```ts
interface returndata {
  HlListPage: RenderFunction // 组件渲染函数
  query: reactive<any> // 查询参数
  page_query: reactive<{
    page: number
    limit: number
  }> // 分页查询参数

  getData: function // 获取数据方法，该方法只会根据当前条件查询，不会主动改变任何参数值
  search: funciton // 搜索方法：添加了防抖和每次会将分页置为1

  updateOne: (row) => void // 从接口中更新指定row条目的最新数据
  loading: boolean // 是否正在查询数据
  table_data: reactive<{
    count: 0 // 数据量
    data: [] // 当前页数据
    [prop: string]: string // data_extend_keys中定义的其他数据字段
  }>
}
```

### HlListPage

> HlListPage在[HlSearchPage](/docs/web/hl-ui/search.html)基础上默认增加了三个组件：

- 查询按钮：已经绑定了search方法,默认带防抖
- 添加按钮：点击会向外抛出add事件，需要手动绑定，事件第一个参数为null
- 分页组件：无需再关心分页，内部实现满足目前大部分需求

::: warning 提示
如果不想要这三个组件额可以分别使用no-add、no-search、no-page三个属性阻止渲染
:::

<hl-demo-use-list-config/>

### 刷新一行

> 当我们修改了某一行数据时，我们通常会直接调用getData刷新当前页数据，这带来的问题是会重置当前页的滚动条；为了解决这个问题useList返回了一个方法updateOne用于更新一行数据，当然这要满足一定的条件：

- 首先需要一个能够获取到当前改动行新数据的方法，默认会调用传入的server方法，参数默认为{id:'xxx'}
- 如果server不支持获取当前行最新数据，则么需要再定义一个专门的方法获取，通过oneServer传入，参数默认也是{id:'xxx'}
- 大部分情况下我们都是根据id获取数据的，如果存在其他情况可以通过oneServerKey指定主键字段名
