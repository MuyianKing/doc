### 定义

```ts
function isTruth(str: string): boolean
```

判断给定的str如果是 0、null、false、''、'false'、'null'、'NULL'、'undefined'返回false，否则返回true

### 用法

```js
import { isTruth } from '@hl/utils'

isTruth(0) // false
isTruth('0') // true
isTruth(false) // false
isTruth('false') // false

isTruth('other') // true
```
