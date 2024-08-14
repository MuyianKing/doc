## 文件

### 上传

> 前端上传文件，可以是多个文件；后端返回一个文件ID构成的数组。

#### 请求

~~~js
{
    url："/upload"
    method："POST"
    Content-Type："multipart/form-data"
    data：FormData
}
~~~



#### 响应

后端在接收到文件后，先将文件保存到服务器(文件名必须唯一)，再往upload表中插入一条记录，每条记录都有一个唯一ID对应服务器上文件，需要返回给前端就是这个唯一ID；需要注意的是无论前端上传一个文件还是多个，都应返回一个数组。



### 根据ID获取文件详细信息

#### 请求

~~~js
{
    url："/upload_info"
    method："POST"
    data:{
        //文件ID，支持多个ID，逗号连接
		file_ids:''
    }
}
~~~



#### 响应

~~~js
[{
    file_name: "文件名",
    file_id: "文件ID"
    file_path:"文件地址"
},
 ...
]
~~~



### 下载文件

#### 请求

~~~js
{
    url:"/download?id=${id}&token=${token}",
    method:"GET",
}
~~~

+ ID：文件ID
+ token：用户token



#### 响应

返回文件的二进制流

> 响应头中必须包含文件名，文件大小，其中文件名如果是中文原来会报错，沈方逸做的处理，不知道科不科学



### 预览

#### 请求

~~~js
{
	url：“/preview?id=${id}&token=${token}&big=${big}”
	method:"GET",
}
~~~

+ big：理论上上传的图片分被剪切压缩的小图和原图，big为0表示查看小图，big为1表示查看原图



## 用户

### 登录

#### 请求

~~~js
{
    url:"/login",
    methods:"POST",
    data:{
       	username:"用户名",
        password:"密码"
    }
}
~~~



#### 响应

+ 响应头必须携带token
+ 返回用户基本信息



### token

作用：前端再请求接口时，除了一些特殊的接口不需要携带token，其他的都需要；后端拿到token会校验当前token是否失效，如果失效接口直接返回认证失败，未失效才能继续请求token。

有效期：toekn默认有效期为5分钟到2小时，如果不去刷新token，token在失效后前端将无法继续请求

刷新token：前端会定时请求刷新token的接口，前端每次请求，接口需要将token的有效期设置成当前时间的后5分钟



### 其他接口

+ 添加用户
+ 修改用户
+ 修改密码
  + 普通用户修改密码：必须上传原密码
  + 管理员修改密码：直接修改
+ 删除用户
+ 根据id或名字查询用户，id可以是多个（逗号连接），名字模糊查询

### 日志

获取操作日志



## 字典

### 获取所有字典

#### 请求

~~~js
{
    url:"/dict",
    method:"POST",
    data：{
        opt:"get_dict"
    }
}
~~~



#### 响应

> 已数组形式返回所有字典

### 获取指定字典

> 同上，请求中加上参数：type(对应字典类型)

