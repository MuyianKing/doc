<script setup>
const code = `
<template>
  <div style="display: flex;align-items: center;">
    <hl-button type="danger">提交</hl-button>

    <hl-button type="primary" plain>提交</hl-button>

    <hl-button type="warning" loading>提交</hl-button>

    <hl-button button-type="icon" icon="teenyicons:send-solid" style="font-size: 26px;margin-left: 15px;" text="纯图标" />
  </div>
</template>
`
</script>

<template>
  <custom-code-preview :code="code">
    <div style="display: flex;align-items: center;">
      <hl-button type="danger">
        提交
      </hl-button>

      <hl-button type="primary" plain>
        提交
      </hl-button>

      <hl-button type="warning" loading>
        提交
      </hl-button>

      <hl-button button-type="icon" icon="teenyicons:send-solid" style="font-size: 20px;margin-left: 15px;" text="纯图标" />
    </div>
  </custom-code-preview>
</template>

<style lang="scss" scoped></style>
