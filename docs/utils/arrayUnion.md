### 定义

```ts
function arrayUnion(arr: Array): Array
```

数组去重

### 用法

```js
import { arrayUnion } from '@hl/utils'

arrayUnion([1, 2, 3, 3]) // [1,2,3]
arrayUnion([3, '3']) // [3,'3']
```
