import DefaultTheme from 'vitepress/theme'
import './custom.css'
import './index.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import { addAPIProvider } from '@iconify/vue'
import customecomp from '../../components/custom/index'
import hldemo from '../../components/hl-demo/index'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    addAPIProvider('', {
      resources: ['http://192.168.10.106:28085/hualong/json/json'],
    })

    app.use(ElementPlus, {
      locale: zhCn,
    }).use(customecomp)
      .use(hldemo)
  },
}
