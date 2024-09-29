<script setup>
const code = `
<template>
  <div class="flex items-center mt-4">
    <!-- 添加按钮 -->
    <hl-add-button />
    <hl-add-button :icon="false" />
    <hl-add-button>创建</hl-add-button>
  </div>

  <div class="flex items-center mt-4">
    <!-- 查询按钮 -->
    <hl-search-button />
    <hl-search-button :icon="false" />
    <hl-search-button>搜索</hl-search-button>
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
      <!-- 查询按钮 -->
      <hl-search-button />
      <hl-search-button :icon="false" />
      <hl-search-button>搜索</hl-search-button>
    </div>

    <div class="flex items-center mt-4">
      <!-- 导出按钮 -->
      <hl-export-button />
      <hl-export-button :icon="false" />
      <hl-export-button text class="ml-4">
        点击导出
      </hl-export-button>
    </div>

    <div class="flex items-center mt-4">
      <!-- 导入按钮 -->
      <hl-import-button />
      <hl-import-button :icon="false" />
      <hl-import-button text class="ml-4">
        点击导入
      </hl-import-button>
    </div>
  </custom-code-preview>
</template>
