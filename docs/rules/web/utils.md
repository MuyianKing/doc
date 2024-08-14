

### common.js

> common.js 中定义了通用的方法，比较重要的有三个

- getLabelByVal(array,val,config)

  - config： \{label:"label",value:"value"\}
  - val:查找的值
  - array:需要遍历的数组

  该方法会遍历数组根据 val 查找满足条件的值，默认会比较数组对象中的 value 字段，返回 label 字段

- jsonparse(str,def)：解析 json 字符串

  - str：需要解析的 json 字符串
  - def：解析报错返回的默认值，默认空对象

### echarts.util.js

Echarts 可以直接引入

```js
import * as echarts from echarts
```

或者按需加载，但无论哪种都有几个问题：

- 页面大小变化不会自动调整
- 一些情况下从其他页面切回到含有 echarts 的页面，图表可能显示不出来
- 设置 tips 后鼠标 hover 可能会出现滚动条

echarts.util.js 做了以下几件事：

- 默认添加 resize 事件
- 初始化之前会清除调容器上的*echarts_instance*属性
- 默认关闭容器 overflow

> 需要注意的是 echarts.util.js 是按需加载的，默认只会加载几个常用的图表和组件，可能需要手动引入开发中使用到的其他图表和组件

##### 使用

```js
import echarts from '@utils/echarts.util';

echarts.init(container, option, params); //返回Echarts实例对象
```

- container：容器 id 或者是容器的 dom
- option：echarts 配置
- params.resize：是否开启 resize 事件，默认开启
- params.overflow：配置 overflow，同 css overflow，如果容器设置了 oevrflow 此配置不会生效

### file.js

文件相关操作

### message.js

- error(err,'message')：所有的显示错误都应该调用此方法，err 为 Error 对象，message 为前置信息
- confirm(msg, title, params)：封装了 ElMessageBox.confirm，
  - msg：提示信息
  - title：标题，
  - params：ElMessageBox.confirm 的配置参数
- loading(message, params)：封装了 ElLoading
  - message：loading 信息
  - params：ElLoading 的配置参数

```