<script setup>
const query = reactive({
  limit: 20,
  page: 1,
})

const table = reactive({
  count: 100,
})

function getData() {}

const code = `
<template>
  <div>
    <div>page：{{ query.page }}</div>
    <div>size：{{ query.limit }}</div>
    <div>count：{{ query.count }}</div>
  </div>
  <hl-page v-model="query.page" :size="query.limit" :count="table.count" @change="getData" />
  <hl-page v-model="query.page" v-model:size="query.limit" :count="table.count" sizes @change="getData" />
</template>
<script setup>
  const query = reactive({
    limit: 20,
    page: 1,
  })

  const table = reactive({
    count: 100,
  })

  function getData() {}
<\/script>
`
</script>

<template>
  <custom-code-preview :code>
    <div>
      <div>page：{{ query.page }}</div>
      <div>size：{{ query.limit }}</div>
      <div>count：{{ query.count }}</div>
    </div>
    <hl-page v-model="query.page" :size="query.limit" :count="table.count" @change="getData" />
    <hl-page v-model="query.page" v-model:size="query.limit" :count="table.count" sizes @change="getData" />
  </custom-code-preview>
</template>

<style lang="scss" scoped></style>
