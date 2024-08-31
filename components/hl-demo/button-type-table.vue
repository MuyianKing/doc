<script setup>
const code = `
<template>
  <!-- 查看详情 -->
  <hl-detail-button />
  <hl-detail-button text class="ml-4" />
  <hl-detail-button class="ml-4" />

  <!-- 编辑 -->
  <hl-edit-button />
  <hl-edit-button text class="ml-4" />
  <!-- 自定义图标 -->
  <hl-edit-button class="ml-4" icon="icon-park:edit-two" />

  <!-- 删除按钮 -->
  <hl-del-button />
  <hl-del-button text class="ml-4" />
  <hl-del-button class="ml-4" text="自定义文字" />
</template>
`
</script>

<template>
  <custom-code-preview :code="code">
    <div class="flex items-center mt-4">
      <!-- 查看详情 -->
      <hl-detail-button />
      <hl-detail-button text class="ml-4" />
      <hl-detail-button class="ml-4" />
      <hl-detail-button class="ml-4">
        自定义按钮
      </hl-detail-button>
    </div>

    <div class="flex items-center mt-4">
      <!-- 编辑 -->
      <hl-edit-button />
      <hl-edit-button text class="ml-4" />
      <!-- 自定义图标 -->
      <hl-edit-button class="ml-4" icon="icon-park:edit-two" />
    </div>

    <div class="flex items-center mt-4">
      <!-- 删除按钮 -->
      <hl-del-button />
      <hl-del-button text class="ml-4" />
      <hl-del-button text="自定义文字" class="ml-4" />
      <hl-del-button text class="ml-4">
        自定义按钮
      </hl-del-button>
    </div>
  </custom-code-preview>
</template>
