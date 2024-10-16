### 定义

```ts
function evalByFun(code: string, ctx: object): any
```

执行表达式code并返回表达式值，ctx为code执行的上下文

### 用法

```js
evalByFun('i+j', {
  i: 1,
  j: 2,
}) // 3
```
