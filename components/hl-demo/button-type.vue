<script setup>
const code = `
<template>
  <div class="flex items-center mt-4">
    <!-- 添加按钮 -->
    <hl-add-button />
    <hl-add-button>创建</hl-add-button>
  </div>

  <div class="flex items-center mt-4">
    <!-- 删除按钮 -->
    <hl-del-button />
    <hl-del-button text class="ml-4" />
  </div>

  <div class="flex items-center mt-4">
    <!-- 查看按钮 -->
    <hl-detail-button :size="30" />
    <hl-detail-button text class="ml-4" />
    <hl-detail-button text class="ml-4">
      点击查看
    </hl-detail-button>
  </div>

  <div class="flex items-center mt-4">
    <!-- 导出按钮 -->
    <hl-export-button />
    <hl-export-button text class="ml-4">
      点击导出
    </hl-export-button>
  </div>

  <div class="flex items-center mt-4">
    <!-- 导入按钮 -->
    <hl-import-button />
    <hl-import-button text class="ml-4">
      点击导入
    </hl-import-button>
  </div>
</template>
`
</script>

<template>
  <custom-code-preview :code="code">
    <div class="flex items-center mt-4">
      <!-- 添加按钮 -->
      <hl-add-button />
      <hl-add-button :icon="false" />
      <hl-add-button>创建</hl-add-button>
    </div>

    <div class="flex items-center mt-4">
      <!-- 删除按钮 -->
      <hl-del-button />
      <hl-del-button text class="ml-4" />
      <hl-del-button text class="ml-4">
        自定义文字
      </hl-del-button>
    </div>

    <div class="flex items-center mt-4">
      <!-- 查看按钮 -->
      <hl-detail-button :size="30" />
      <hl-detail-button text class="ml-4" />
      <hl-detail-button text class="ml-4">
        点击查看
      </hl-detail-button>
    </div>

    <div class="flex items-center mt-4">
      <!-- 导出按钮 -->
      <hl-export-button />
      <hl-export-button text class="ml-4">
        点击导出
      </hl-export-button>
    </div>

    <div class="flex items-center mt-4">
      <!-- 导入按钮 -->
      <hl-import-button />
      <hl-import-button text class="ml-4">
        点击导入
      </hl-import-button>
    </div>
  </custom-code-preview>
</template>
