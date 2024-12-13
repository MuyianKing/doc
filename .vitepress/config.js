import tailwindcss from 'tailwindcss'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vitepress'
import useAlias from '../alias.config'

const { alias_map } = useAlias()

export default defineConfig({
  title: '华龙通信',
  description: '前端物料文档',
  base: '/doc/',
  vite: {
    resolve: {
      alias: alias_map,
    },
    ssr: {
      noExternal: true,
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
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
      postcss: {
        plugins: [
          tailwindcss,
        ],
      },
    },
  },
  themeConfig: {
    logo: '/logo.png',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '亮色主题',
    darkModeSwitchTitle: '深色主题',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '面试题',
        link: '/docs/interview/home',
      },
      {
        text: '开发规范',
        link: '/docs/rules/web/outline',
      },
      {
        text: '工具包',
        items: [
          { text: '@hl/utils', link: '/docs/utils/home' },
          { text: '@hl/hooks', link: '/docs/hooks/home' },
        ],
      },
      {
        text: 'UI',
        items: [
          { text: 'Hl-UI', link: '/docs/web/hl-ui/home' },
          { text: 'Hl-H5', link: '/docs/h5/home' },
        ],
      },
    ],
    sidebar: {
      '/docs/interview': [
        { text: '轮播', link: '/docs/interview/home' },
      ],
      '/docs/utils': [
        { text: '开始', link: '/docs/utils/home' },
        {
          text: 'common',
          items: [
            { text: 'isTruth', link: '/docs/utils/isTruth' },
            { text: 'someInArray', link: '/docs/utils/someInArray' },
            { text: 'guid', link: '/docs/utils/guid' },
            { text: 'getLabelByVal', link: '/docs/utils/getLabelByVal' },
            { text: 'jsonparse', link: '/docs/utils/jsonparse' },
            { text: 'arrayUnion', link: '/docs/utils/arrayUnion' },
            { text: 'firstUpcase', link: '/docs/utils/firstUpcase' },
            { text: 'getCanUseValue', link: '/docs/utils/getCanUseValue' },
          ],
        },
      ],
      '/docs/hooks': [
        { text: 'useList', link: '/docs/hooks/use-list' },
      ],
      '/docs/h5': [
        {
          text: '基础组件',
          items: [
            { text: '按钮', link: '/docs/h5/button' },
            { text: '头像', link: '/docs/h5/avatar' },
            { text: '分割线', link: '/docs/h5/divider' },
            { text: '图标', link: '/docs/h5/icon' },
            { text: '表格', link: '/docs/h5/table' },
          ],
        },
        {
          text: '表单组件',
          items: [
            { text: '表单', link: '/docs/h5/form' },
            { text: '输入框', link: '/docs/h5/input' },
            { text: '下拉框', link: '/docs/h5/select' },
            { text: '单选框', link: '/docs/h5/radio' },
            { text: '复选框', link: '/docs/h5/checkbox' },
            { text: '日期', link: '/docs/h5/date' },
            { text: '上传', link: '/docs/h5/upload' },
          ],
        },
        {
          text: '文件组件',
          items: [
            { text: '图片', link: '/docs/h5/image' },
            { text: '视频', link: '/docs/h5/video' },
            { text: '音频', link: '/docs/h5/audio' },
            { text: '文件', link: '/docs/h5/file' },
            { text: '所有文件', link: '/docs/h5/preview' },
          ],
        },
        {
          text: '导航组件',
          items: [
            { text: '导航栏', link: '/docs/h5/top' },
            { text: 'Tabbar栏', link: '/docs/h5/tabbar' },
            { text: '列表', link: '/docs/h5/list' },
          ],
        },
      ],
      '/docs/web/hl-ui/': [
        {
          text: '配置组件',
          items: [
            { text: '全局配置', link: '/docs/web/hl-ui/config' },
          ],
        },
        {
          text: '基础组件',
          items: [
            { text: '图标', link: '/docs/web/hl-ui/icon' },
            { text: '图标选择', link: '/docs/web/hl-ui/icon-select' },
            { text: '所有图标', link: '/docs/web/hl-ui/icon-all' },
            { text: '按钮', link: '/docs/web/hl-ui/button' },
            { text: '预设按钮', link: '/docs/web/hl-ui/button-type' },
            { text: '个性标题', link: '/docs/web/hl-ui/block-title' },
          ],
        },
        {
          text: '表单组件',
          items: [
            { text: '表单项', link: '/docs/web/hl-ui/form-item' },
            { text: '日期', link: '/docs/web/hl-ui/date' },
            { text: '文本框', link: '/docs/web/hl-ui/input' },
            { text: '下拉框', link: '/docs/web/hl-ui/select' },
            { text: '远程下拉', link: '/docs/web/hl-ui/select-remote' },
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
            { text: '图表', link: '/docs/web/hl-ui/charts' },
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
          items: [
            { text: '弹框', link: '/docs/web/hl-ui/dialog' },
            { text: '右击菜单', link: '/docs/web/hl-ui/context-menu' },
            { text: '下拉菜单', link: '/docs/web/hl-ui/dropdown' },
            { text: '级联下拉', link: '/docs/web/hl-ui/dropdown-cascader' },
            { text: '疑问提示', link: '/docs/web/hl-ui/question-icon' },
          ],
        },
        {
          text: '布局组件',
          items: [
            { text: '列表页', link: '/docs/web/hl-ui/search' },
            { text: '表单弹框', link: '/docs/web/hl-ui/form-dialog' },
            { text: 'Grid布局', link: '/docs/web/hl-ui/grid-layout' },
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
