<script setup>
import { vBottom } from '@hl/directions'
import { useList } from '@hl/hooks'
import { success } from '@hl/ui/utils'
import { getIcons } from '@server/icon'
import copy from 'copy-text-to-clipboard'

const {
  HlListPage,
  query,
  page_query,
  getData,
  table_data,
} = useList({
  query: {
    query: '',
    limit: 200,
  },
  server: getIcons,
})

function handleCopy(icon) {
  copy(icon)
  success(`复制成功：${icon}`)
}

function handleMore() {
  if (page_query.page * page_query.limit < table_data.count) {
    // page_query.page++
  }
}
</script>

<template>
  <hl-list-page no-add>
    <template #search>
      <hl-form-item label="关键字">
        <hl-input v-model="query.query" @change="getData" />
      </hl-form-item>
    </template>

    <template #table>
      <div v-bottom="handleMore" class="flex flex-wrap icon-table">
        <div v-for="icon in table_data.data" :key="icon" @click="handleCopy(icon)">
          <hl-icon :icon="icon" class="icon-item" />
        </div>
      </div>
    </template>
  </hl-list-page>
</template>

<style lang='scss' scoped>
.icon-item {
  margin: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
}

.icon-item:hover {
  cursor: pointer;
  background-color: var(--color-primary);
  color: white;
}

.icon-table {
  height: calc(100vh - 400px) !important;
  overflow-y: auto;
}
</style>
