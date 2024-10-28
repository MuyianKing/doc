<script setup>
const options = [{
  icon: 'zondicons:add-outline',
  label: '添加',
}, {
  icon: 'ep:delete',
  label: '删除',
}]

const context_menu_ref = ref()
function handleContextMenu(index) {
  context_menu_ref.value.toggle(index)
}

const selected_data = ref(null)
function handleSelected(row) {
  selected_data.value = row
}

const code = `
<template>
  <div class="flex flex-wrap">
    {{ selected_data }}
    <div v-for="item in 9" :key="item" class="click-item" @contextmenu.prevent="handleContextMenu(item)">
      item{{ item }}
    </div>
  </div>
  <hl-context-menu ref="context_menu_ref" :options @click="handleSelected" />
</template>
<script setup>
  const options = [{
    icon: 'zondicons:add-outline',
    label: '添加',
  }, {
    icon: 'ep:delete',
    label: '删除',
  }]

  const context_menu_ref = ref()
  function handleContextMenu(index) {
    context_menu_ref.value.toggle(index)
  }

  const selected_data = ref(null)
  function handleSelected(row) {
    selected_data.value = row
  }
<\/script>`
</script>

<template>
  <custom-code-preview :code>
    {{ selected_data }}
    <div class="flex flex-wrap">
      <div v-for="item in 9" :key="item" class="click-item" @contextmenu.prevent="handleContextMenu(item)">
        item{{ item }}
      </div>
    </div>

    <hl-context-menu ref="context_menu_ref" :options @click="handleSelected" />
  </custom-code-preview>
</template>

<style lang="scss" scoped>
.click-item {
  background-color: #409eff;
  color: white;
  margin: 1em;
  border-radius: 5px;
  padding: 5px 15px;
}
</style>
