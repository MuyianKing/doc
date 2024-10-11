import tailwindcss from 'tailwindcss'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vitepress'
import useAlias from '../alias.config'

const { alias_map } = useAlias()

export default defineConfig({
  title: '华龙通信科技',
  description: '华龙前端技术开发文档',
  base: '/doc/',
  vite: {
    resolve: {
      alias: {
        ...alias_map,
      },
    },
    ssr: {
      noExternal: ['@hl/ui', '@hl/utils', 'validator', 'element-plus'],
    },
    plugins: [
      AutoImport({
        imports: ['vue'],
        eslintrc: {
          enabled: true,
        },
      }),
      Components({
        directoryAsNamespace: true,
        resolvers: [
          {
            type: 'component',
            resolve: (name) => {
              if (name.startsWith('Hl')) {
                return {
                  name,
                  importName: name,
                  from: '@hl/ui',
                  path: `@hl/ui/index.js`,
                }
              }
            },
          },
        ],
        dts: true,
      }),
    ],
    css: {
      postcss: {
        plugins: [
          tailwindcss,
        ],
      },
    },
  },
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '项目管理',
        link: '/docs/projects/list',
      },
      {
        text: '后端',
        link: '/docs/interface/base',
      },
      {
        text: '开发规范',
        link: '/docs/rules/web/outline',
      },
      {
        text: '小程序',
        items: [{ text: '视讯通话', link: '/docs/mp/video/socket' }],
      },
      {
        text: '中后台',
        items: [{ text: 'Hl-UI', link: '/docs/web/hl-ui/home' }],
      },
    ],
    sidebar: {
      '/docs/web/hl-ui/': [
        {
          text: '基础组件',
          items: [
            { text: '图标', link: '/docs/web/hl-ui/icon' },
            { text: '按钮', link: '/docs/web/hl-ui/button' },
            { text: '预设按钮', link: '/docs/web/hl-ui/button-type' },
          ],
        },
        {
          text: '表单组件',
          items: [
            { text: '表单项', link: '/docs/web/hl-ui/form-item' },
            { text: '日期', link: '/docs/web/hl-ui/date' },
            { text: '文本框', link: '/docs/web/hl-ui/input' },
            { text: '下拉框', link: '/docs/web/hl-ui/select' },
            { text: '单选框', link: '/docs/web/hl-ui/radio' },
            { text: '复选框', link: '/docs/web/hl-ui/checkbox' },
            { text: '上传', link: '/docs/web/hl-ui/upload' },
          ],
        },
        {
          text: '数据展示',
          items: [
            { text: '表格', link: '/docs/web/hl-ui/table' },
            { text: '附件', link: '/docs/web/hl-ui/preview' },
            { text: '图片', link: '/docs/web/hl-ui/image' },
            { text: '视频', link: '/docs/web/hl-ui/video' },
            { text: '文件', link: '/docs/web/hl-ui/file' },
            { text: '数字', link: '/docs/web/hl-ui/num' },
            { text: '分页', link: '/docs/web/hl-ui/page' },
            { text: '时间', link: '/docs/web/hl-ui/time' },
            { text: '手机号', link: '/docs/web/hl-ui/tel' },
            { text: '身份证号', link: '/docs/web/hl-ui/id-card' },
            { text: '可编辑文本', link: '/docs/web/hl-ui/editinfo' },
          ],
        },
        {
          text: '反馈组件',
          items: [],
        },
        {
          text: '地图组件',
          items: [{ text: '地图选点', link: '/docs/web/hl-ui/pointer-select' }],
        },
        {
          text: '布局组件',
          items: [
            { text: '列表页', link: '/docs/web/hl-ui/search' },
            { text: '表单弹框', link: '/docs/web/hl-ui/form-dialog' },
          ],
        },
      ],
      '/docs/mp/video/': [{ text: '视讯通话', link: '/docs/mp/video/socket' }],
      '/docs/rules/': [
        {
          text: 'WEB项目说明',
          items: [
            { text: '目录结构', link: '/docs/rules/web/outline' },
            { text: '接口管理', link: '/docs/rules/web/api' },
            { text: 'default目录', link: '/docs/rules/web/def' },
            { text: 'model目录', link: '/docs/rules/web/model' },
            { text: 'utils目录', link: '/docs/rules/web/utils' },
            { text: '其他', link: '/docs/rules/web/other' },
          ],
        },
        { text: 'Uni App', link: '/docs/rules/uni' },
        { text: '代码规范', link: '/docs/rules/code' },
      ],
    },
    aside: true,
    outline: {
      level: 'deep',
      label: '目录',
    },
    lastUpdated: {
      text: '最后更新时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    search: {
      provider: 'local',
      placeholder: '搜索文档',
      options: {},
    },
  },
})
