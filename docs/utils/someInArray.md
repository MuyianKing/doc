### 定义

```ts
function someInArray(someArray: Array, array: Array): boolean
```

判断数组someArray中是否有元素在array中

### 用法

```js
import { someInArray } from '@hl/utils'

someInArray([1, 2], [2, 3, 4]) // true ，2 in [2, 3, 4]
someInArray([1], [2, 3, 4]) // false

```
