### 定义

```ts
function getCanUseValue(str: string | number): string
```

传入字符串或数字返回可直接作用于css的数据

##### 场景

组件有一个属性：fontSize，类型为 string|number，调用时可以传12，也可以是12px，那么就需要getCanUseValue来统一处理

### 用法

```js
import { getCanUseValue } from '@hl/utils'

getCanUseValue(12) // 12px
getCanUseValue('12px') // 12px
getCanUseValue('100%') // 100%
getCanUseValue('60vh') // 60vh
getCanUseValue('calc(100vh - 100px)') // calc(100vh - 100px)
```
