import useEcharts from '@/utils/echarts'
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
    useEcharts()

    app.use(ElementPlus, {
      locale: zhCn,
    }).use(customecomp).use(hldemo)
  },
}
