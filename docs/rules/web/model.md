### 业务场景

当我们创建一个用户的时候我们通常需要事先定义一个对象：

```js
const user = ref({
  name: '',
  username: '',
  role: '',
});
```

当我们修改一个用户的时候我们也需要事先定义一个对象：

```js
const user = ref({
  name: '',
  username: '',
  role: '',
});

user.value.name = 'muyian';
user.value.username = 'admin';
user.value.role = 10;
```

上述代码对于整个页面来说是比较冗余，尤其是字段多时，model 就是为了解决此问题。

### 使用

1、在 model 目录下建立 user.js 文件

```js
class User {
  constructor(user = {}) {
    user = user || {};

    this.id = user.id || '';
    this.name = user.name || '';
    this.username = user.username || '';
    this.role = user.role || '';
  }
}
```

2、使用

```js
import UserModel from '@model/user';
// 创建
const user = ref(new UserModel());

// 编辑
user.value = new UserModel({
  name: 'muyian',
  // 这里传入的可以是列表直接传入的用户数据或者是通过id请求接口获取到的数据
});
```

> model 不仅仅可以将冗余的代码搬离业务，更重要的是规范数据格式