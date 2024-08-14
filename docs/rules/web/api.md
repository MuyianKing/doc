
> api 目录下维护所有的接口请求地址

### apis目录
> 一个前端项目可能需要对接一个或多个后端，正常情况下他们的BASE_URL是一样的，不同的是前缀，比如我们的大多数请求前缀都是"/api"，当我们需要进行统一鉴权时就需要调用统一用户的地址，它的前缀可能就是"/tyyh"，这时候我们需要在apis目录建立两个js文件分别是index.js和tyyh.js，文件格式如下：
~~~js
// index.js
export default {
  config: {
    // 接口前缀
    prefix: '',
  },
  // 所有请求地址
  urls: {
    login: '/user/login',
  },
}

// tyyh.js
export default {
  config: {
    // 接口前缀
    prefix: '/tyyh',
  },
  // 所有请求地址
  urls: {
    upload: '/file/upload',
  },
}
~~~

> 这里做一个约定：index.js默认作为项目中主要请求的配置文件，index.js在最终生成api时会和其他文件做区分


### index.js文件
> index.js 会根据apis下的文件生成最终的请求地址并抛出一个api对象，生成规则如下：


+ /apis/index.js文件：直接把urls下的所有的属性挂载到抛出的api对象上
+ 其他文件：会先将文件名作为key挂载到api对象上，再把urls下的所有属性挂载到api[key]下

~~~js
// apis下的index.js和tyyh.js最终会生成下面的api对象：
{
  login:"/user/login",
  tyyh:{
    upload: '/tyyh/file/upload',
  }
}

// 然会这个对象会挂载到window.hl下
~~~


在 server 中如下调用：

```js
// server/user.js
import { post } from "@utils/request"
function login(user){
  return post(hl.api.login, user)
}
```