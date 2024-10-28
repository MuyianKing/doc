<script setup>
const show = ref(false)
function handleShow() {
  show.value = true
}

const code = `
<template>
  <div>
    <hl-button @click="handleShow">
      打开弹窗
    </hl-button>
    <hl-dialog v-model="show" title="这是一个弹窗" top="10">
      <div class="w-full h-[100vh]">
        content
      </div>

      <template #footer>
        <hl-button>提交</hl-button>
      </template>
    </hl-dialog>
  </div>
</template>

<script>
  const show = ref(false)
  function handleShow() {
    show.value = true
  }
<\/script>
`
</script>

<template>
  <custom-code-preview :code>
    <div>
      <hl-button @click="handleShow">
        打开弹窗
      </hl-button>
      <hl-dialog v-model="show" title="这是一个弹窗" top="20">
        <div class="w-full h-[100vh]">
          content
        </div>

        <template #footer>
          <hl-button>提交</hl-button>
        </template>
      </hl-dialog>
    </div>
  </custom-code-preview>
</template>

<style lang='scss' scoped></style>
