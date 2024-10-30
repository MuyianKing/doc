<script setup>
import { useDebounceFn } from '@vueuse/core'
import { onMounted } from 'vue'

const query = reactive({
  username: '',
  name: '',
  page: 1,
  limit: 20,
})

const table = reactive({
  count: 0,
  data: [],
})

// 获取数据
function getData() {
  table.count = 1
  table.data = [{
    username: '慕易安',
    name: '杨峰',
    phone: '17551108745',
  }]
}

// 搜索
const search = useDebounceFn(() => {
  query.page = 1
  getData()
}, 300)

// 添加|编辑
function edit() {

}

onMounted(() => {
  getData()
})

const code = `
<template>
  <hl-search-page>
    <template #header>
      <el-form-item label="用户名">
        <el-input v-model="query.username" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="query.name" placeholder="请输入姓名" />
      </el-form-item>
      <el-button type="primary" @click="search">
        查询
      </el-button>
      <el-button type="success" @click="edit">
        添加
      </el-button>
    </template>

    <template #table>
      <hl-table :data="table.data">
        <hl-table-column type="index" />
        <hl-table-column label="用户名" prop="username" />
        <hl-table-column label="姓名" prop="name" />
        <hl-table-column label="手机号" prop="phone" />
      </hl-table>
    </template>

    <hl-page v-model:page="query.page" :size="query.limit" :count="table.count" @change="getData" />
  </hl-search-page>
</template>
<script setup>
  const query = reactive({
    username: '',
    name: '',
    page: 1,
    limit: 20,
  })

  const table = reactive({
    count: 0,
    data: [],
  })

  // 获取数据
  function getData() {
    table.count = 1
    table.data = [{
      username: '慕易安',
      name: '杨峰',
      phone: '17551108745',
    }]
  }

  // 搜索
  const search = useDebounceFn(() => {
    query.page = 1
    getData()
  }, 300)

  // 添加|编辑
  function edit() {

  }

  onMounted(() => {
    getData()
  })
<\/script>
`
</script>

<template>
  <custom-code-preview :code>
    <hl-search-page>
      <template #header>
        <el-form-item label="用户名">
          <el-input v-model="query.username" placeholder="请输入用户名" @change="search" />
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="query.name" placeholder="请输入姓名" @change="search" />
        </el-form-item>
        <el-button type="primary" @click="search">
          查询
        </el-button>
        <el-button type="success" @click="edit">
          添加
        </el-button>
      </template>

      <template #table>
        <hl-table :data="table.data">
          <hl-table-column type="index" />
          <hl-table-column label="用户名" prop="username" />
          <hl-table-column label="姓名" prop="name" />
          <hl-table-column label="手机号" prop="phone" />
        </hl-table>
      </template>

      <hl-page v-model:page="query.page" :size="query.limit" :count="table.count" @change="getData" />
    </hl-search-page>
  </custom-code-preview>
</template>

<style lang='scss' scoped></style>
