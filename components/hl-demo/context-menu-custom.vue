<script setup>
const options = [{
  icon: 'zondicons:add-outline',
  label: '添加',
}, {
  icon: 'ep:delete',
  label: '删除',
}]

const context_menu_ref = ref()
function handleContextMenu() {
  context_menu_ref.value.toggle()
}

function handleSelected(row) {
  console.log(row)
}

const code = `
<template>
  <div class="right-click-wrapper" @contextmenu.prevent="handleContextMenu">
    右击区域
  </div>

  <hl-context-menu ref="context_menu_ref" :options @click="handleSelected">
    <hl-context-menu-item v-slot="row">
      {{ row.label }}
    </hl-context-menu-item>
    <hl-context-menu-item v-slot="row">
      {{ row.label }}
    </hl-context-menu-item>
  </hl-context-menu>
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
  function handleContextMenu() {
    context_menu_ref.value.toggle()
  }

  function handleSelected(row) {
    console.log(row)
  }
<\/script>`
</script>

<template>
  <custom-code-preview :code>
    <div class="right-click-wrapper" @contextmenu.prevent="handleContextMenu">
      右击区域
    </div>

    <hl-context-menu ref="context_menu_ref" :options @click="handleSelected">
      <hl-context-menu-item v-slot="row">
        {{ row.label }}
      </hl-context-menu-item>
      <hl-context-menu-item v-slot="row">
        {{ row.label }}
      </hl-context-menu-item>
    </hl-context-menu>
  </custom-code-preview>
</template>

<style lang="scss" scoped>
.right-click-wrapper {
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray;
  background-color: #f7f7f7;
}
</style>
