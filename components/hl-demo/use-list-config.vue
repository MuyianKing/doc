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
  server: async () => {
    return {
      data: [{}, {}],
      count: 100,
    }
  },
})

const code = `
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
  server: async () => {
    return {
      data: [{}, {}],
      count: 100,
    }
  },
})
<\/script>
<template>
  <hl-list-page no-add no-search no-page>
    <template #search>
      <hl-form-item label="姓名">
        <hl-input v-model="query.name" />
      </hl-form-item>
    </template>

    <template #table>
      <hl-table :data="table_data.data" max-height="300px">
        <hl-table-column type="index" />
      </hl-table>
    </template>
  </hl-list-page>
</template>
`
</script>

<template>
  <custom-code-preview :code>
    <hl-list-page no-add no-search no-page>
      <template #search>
        <hl-form-item label="姓名">
          <hl-input v-model="query.name" />
        </hl-form-item>
      </template>

      <template #table>
        <hl-table :data="table_data.data" max-height="300px">
          <hl-table-column type="index" />
        </hl-table>
      </template>
    </hl-list-page>
  </custom-code-preview>
</template>

<style lang='scss' scoped></style>
