import { BASE_URL, ICONIFY_API } from '@app'
import { addAPIProvider } from '@iconify/vue'
import { login } from '@server/tyyh'

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import DefaultTheme from 'vitepress/theme'
import customecomp from '../../components/custom/index'

import hldemo from '../../components/hl-demo/index'
import './custom.css'
import './index.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    addAPIProvider('', {
      resources: [BASE_URL + ICONIFY_API],
    })

    window.hl = {}

    if (!sessionStorage.getItem('TOKEN')) {
      login().then((data) => {
        sessionStorage.setItem('TOKEN', data.token)
      })
    }

    app.use(ElementPlus, {
      locale: zhCn,
    }).use(customecomp).use(hldemo)
  },
}
