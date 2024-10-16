### 定义

```ts
function jsonparse(str: string, def: any = {}): any
```

解析json字符串str并返回解析成功的json对象；解析出错则返回def

### 用法

```js
import { jsonparse } from '@hl/utils'

jsonparse('{"name":"muyian"}') // {name:'muyian'}
jsonparse('test') // {}
jsonparse('test', '') // ''
```
