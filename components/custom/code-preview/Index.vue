<script setup>
import { ElMessage } from 'element-plus'
import copy from 'copy-text-to-clipboard'

import { codeToHtml } from 'shiki'
import { watch } from 'vue'

const props = defineProps({
  code: {
    type: String,
    default: '',
  },
  codeType: {
    type: String,
    default: 'vue',
  },
})

const open_flg = ref(false)
const code_html = ref('')

function open() {
  open_flg.value = !open_flg.value
}

function handleCopy() {
  copy(props.code)
  ElMessage.success('复制成功')
}

const _style = computed(() => {
  if (open_flg.value) {
    return {
      height: 'auto',
    }
  }

  return {
    height: 0,
    padding: 0,
  }
})

watch(() => props.code, async () => {
  code_html.value = await codeToHtml(props.code, {
    lang: 'vue',
    theme: 'one-dark-pro',
  })
}, {
  immediate: true,
})
</script>

<template>
  <div class="code-preview">
    <div class="code-wrapper">
      <slot />
    </div>
    <div class="opt-wrapper">
      <svg class="opt" width="17" height="17" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" @click="handleCopy">
        <path d="M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163" stroke="#888" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z" fill="none" stroke="#888" stroke-width="4" stroke-linejoin="round" />
      </svg>
      <svg class="opt" viewBox="0 0 24 24" width="1.2em" height="1.2em" @click="open">
        <path fill="#888" d="m23 12l-7.071 7.071l-1.414-1.414L20.172 12l-5.657-5.657l1.414-1.414L23 12zM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414L3.828 12z" />
      </svg>
    </div>
    <div class="code" :style="_style">
      <div class="language">
        {{ codeType }}
      </div>
      <div class="hljs" :class="codeType" v-html="code_html" />
    </div>
  </div>
</template>

<style lang="scss">
.code-preview {
  border: 1px solid var(--vp-c-divider);
  border-radius: 5px;
  margin-top: 5px;

  .code-wrapper {
    border-bottom: 1px solid var(--vp-c-divider);
    padding: 10px;
  }

  .opt-wrapper {
    padding: 10px;
    text-align: right;
    color: gray;
    display: flex;
    justify-content: flex-end;

    .opt {
      cursor: pointer;
      margin-right: 10px;
    }

    .opt:last-child {
      margin-right: 0;
    }
  }

  .code {
    padding: 0;
    overflow-y: auto;
    height: 0;
    position: relative;
    background-color: var(--vp-c-bg-alt);
    border-radius: 5px;
    padding-bottom: 10px;

    .language {
      position: absolute;
      top: 5px;
      right: 10px;
      color: #aaa;
      font-size: 13px;
      z-index: 9;
    }
  }

  .el-table__header {
    margin: 0 !important;
  }
}

.hljs {
  width: 100%;
  padding: 0 20px;

  pre {
    background-color: transparent !important;
    margin: 0;
  }
}
</style>
