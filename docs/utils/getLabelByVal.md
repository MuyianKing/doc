### 定义

```ts
interface Config {
  label: string // 返回的对象的key,默认label
  value: any // 比较的对象的key，默认value
  obj: boolean // 是否返回对象
}

function getLabelByVal(array: Array<object>, val: any, config: Config = {})

```

##### 场景

现在有一个数组：

```js
[
  {
    label: '测试1',
    value: 'test1'
  },
  {
    label: '测试2',
    value: 'test2'
  }
]
```

需要找到value=test2的对象的label，那么就可以使用getLabelByVal

### 用法

##### 基础用法

```js
import { getLabelByVal } from '@hl/utils'

const array = [
  {
    label: '测试1',
    value: 'test1'
  },
  {
    label: '测试2',
    value: 'test2'
  }
]

getLabelByVal(array, 'test2') // 测试2

getLabelByVal(array, 'test2', {
  obj: true
}) // {label:'测试2',value:'test2'}

```

##### 自定义数据字段

有时候数组的对象结构不是上面的label、value，可能是其他字段比如：

```js
const array = [
  {
    id: 1,
    name: 'name1'
  },
  {
    id: 2,
    name: 'name2'
  }
]

// 获取id=2的name
getLabelByVal(array, 2, {
  label: 'name',
  value: 'id'
}) // name2
```
