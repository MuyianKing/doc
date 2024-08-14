--- 
title: 列表页
---
一个列表页面可以分成三部分
+ 搜索区域：搜索区域使用flex布局，搜索条件被包含在了el-form中，条件自动换行
+ 列表区域：列表区域的高度是整个页面的高度减去搜索区域高度再减去其他组件高度，并且当其他区域的高度变化时列表区域可以自适应
+ 其他组件：这里包含了需要显示在表格下面的内容，比如分页

### 基本用法
~~~vue
<hl-search-page>
  <template #header>
    <el-form-item label="用户名">
      <el-input v-model="query.username" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item label="姓名">
      <el-input v-model="query.name" placeholder="请输入姓名"></el-input>
    </el-form-item>
    <el-button type="primary" @click="search">查询</el-button>
    <el-button type="success" @click="edit">添加</el-button>
  </template>

  <template #table>
    <hl-table :data="table.data">
      <hl-table-column type="index" />
      <hl-table-column label="用户名" prop="username" />
      <hl-table-column label="姓名" prop="name" />
      <hl-table-column label="手机号" prop="phone" />
    </hl-table>
  </template>

  <hl-page :size="query.limit" :count="table.count" v-model:page="query.page" @change="getData" />
</hl-search-page>
~~~

### 插槽
|插槽名	  |说明    |
|-----   |------  |
| header  | 搜索区域的内容 |
| table  | 列表内容 |
| default  | 列表后面的内容 |