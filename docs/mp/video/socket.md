---
title: 视讯通话
---

### Socket

#### 建立连接
连接建立成功之后前端需要将用户信息，房间号发给后端
~~~js
{
  opt: "update_room",
  data: {
    type: 1,
    user_id: this.user.user_id,
    user_name: this.user.user_name,
    room_id: this.room_id
  }
}
~~~
后端需要返回
~~~js
{
  type: "update_room",
  data: {
    type: 1,
    user_id: this.user.user_id,
    user_name: this.user.user_name,
    room_id: this.room_id,

    // 人员ID数组：表示当前房间在线人员的ID
    online:[]
  }
}
~~~

#### 加入房间
~~~js
{
  opt:"join_room",
  room_id:"房间号",
  user_id:"用户ID",
  user_name:"用户名",
  token:"TOKEN"
}
~~~

后端返回
+ 加入成功的消息
```js
{
  type:"join_room",
  data:{
    user_id:"",
    user_name:"用户名",
    stream_id:"流的唯一ID",
    url:"流地址"
  }
}
```
+ 通话成员信息
```js
{
  type:"update_chat",
  data:[
    {
      user_id:"用户ID",
      user_name:"用户名",
      stream_id:"流的唯一ID",
      url:"流地址"
    }
  ]
}
```

#### 结束会议
前端发送
~~~js
{
  opt:"stop_room",
	room_id:"房间号"
}
~~~
后端返回
~~~js
{
  type:"stop_room"
}
~~~

后端需要给房间内的每个用户发送消息，前端收到消息后会直接断开连接。

> 别忘了合成视频

#### 退出房间
前端不发送任何退出房间的信息，直接断开连接，下面讨论断开连接

#### 断开连接
断开连接主要纠结的是发送exit_room还是stop_room

+ exit_room格式
~~~js
{
  type:"exit_room",
  data:{
    // 人员ID数组：表示当前房间在线人员的ID
    online:[]
  }
}
~~~

前端收到exit_room之后更新当前成员的状态（是否在线），不会销毁实例

+ stop_room
~~~js
{
  type:"stop_room"
}
~~~
前端收到stop_room会销毁所有实例对象并退出聊天

>两个人都没有点开视频，应该发exit_room；一个人点开了视频或者两个人都点开了视频