# @hl/utils

> @hl/utils 是从日常代码中总结出来的通用方法，目前已经和基础组件库、通用模板等深度绑定，请大家认读阅读，不要在项目中重复建设

## 使用

```js
import { guid } from '@hl/utils'
```

::: warning 提醒

- 所有的方法全部通过@hl/utils直接暴露，下面的common、color模块只是将方法做了一个归纳
- 当然如果你看了源码会发现，代码里也对方法做了归纳，也就是说我们还可以使用下面代码引入：

```js
import { guid } from '@hl/utils/es/common'
```

但是为了统一规范不推荐这么使用
:::
