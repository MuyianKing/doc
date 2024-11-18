<script setup>
import { useList } from '@hl/hooks'

const {
  HlListPage,
  query,
  table_data,
} = useList({
  query: {
    name: '',
  },
  server: async (params) => {
    if (params.id) {
      return {
        id: params.id,
        name: 'update muyianking',
      }
    }

    let data = []
    for (let i = 0; i < 20; i++) {
      data.push({
        id: i + 1,
        name: `muyian${i + 1}`,
      })
    }

    if (params.name) {
      data = data.filter(item => item.name.includes(params.name))
    }

    return {
      data,
      count: 100,
    }
  },
})

function handleEdit(row) {
  console.log('handleEdit', row)
}

const code = `
<script setup>
import { useList } from '@hl/hooks'

const {
  HlListPage,
  query,
  table_data,
} = useList({
  query: {
    keyword: '',
  },
  server:async (params) =>{
    return {
      data,
      count: 100,
    }
  },
})

function handleEdit(row){
  
}
<\/script>
<template>
  <hl-list-page @add="handleEdit">
    <template #search>
      <hl-form-item label="姓名">
        <hl-input v-model="query.name" />
      </hl-form-item>
    </template>

    <template #table>
      <hl-table :data="table_data.data" max-height="300px">
        <hl-table-column type="index" />
        <hl-table-column label="姓名" prop="name" />
        <hl-table-column label="操作">
          <template #default="{ row }">
            <hl-edit-button @click="handleEdit(row)" />
          </template>
        </hl-table-column>
      </hl-table>
    </template>
  </hl-list-page>
</template>
`
</script>

<template>
  <custom-code-preview :code>
    <hl-list-page @add="handleEdit">
      <template #search>
        <hl-form-item label="姓名">
          <hl-input v-model="query.name" />
        </hl-form-item>
      </template>

      <template #table>
        <hl-table :data="table_data.data" max-height="300px">
          <hl-table-column type="index" />
          <hl-table-column label="姓名" prop="name" />
          <hl-table-column label="操作">
            <template #default="{ row }">
              <hl-edit-button @click="handleEdit(row)" />
            </template>
          </hl-table-column>
        </hl-table>
      </template>
    </hl-list-page>
  </custom-code-preview>
</template>

<style lang='scss' scoped></style>
