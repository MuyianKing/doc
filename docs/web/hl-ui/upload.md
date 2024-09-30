---
title: 上传
---

## 上传

:::warning 警告
项目中不允许自己写任何上传组件，非要写必须讨论后再决定
:::

### 基础用法

<hl-demo-upload />

- 单选的初始值为null，多选的初始值为[]

:::danger 这很重要
上面的两个例子中无论是单选还是多选，最终上传的后端的是一个对象或者是对象数组，对象结构如下

<pre>
{
  "id": "P1727665397346ph",
  "name": "bg@2x.png",
  "path": "2024/9/30/P1727665397346ph.png"
}
</pre>

- 这个数据结构不允许改动，直接给后端，至于后端是存id还是将整个数据直接入库后端自己看着办<br/>

- 但是我们回显或者修改表单数据时，我们需要的数据结构就是我们传给后端的，也就是说我们传给后端什么数据后端返给我们的也必须是一模一样的数据<br/>

- id、name、path三个字段已经定义，非特殊情况不允许擅自改动，也不允许自己兼容后端的字段，比如后端给的file_name，自己把file_name赋给name<br/>

- 上传包括前端和后端截至目前（2024-09-30）已经形成一个规范，所有人必须遵循，后端不满足就让后端整改，前端也不允许擅自重新自定义上传相关组件，有特殊需求讨论决定方案

:::

### 限制文件上传类型

<hl-demo-upload-type/>

### 限制文件上传数量

<hl-demo-upload-count/>
+ 最少上传：hl-upload本身无法配置最少上传数量，但是如果是多选可以给hl-form-item指定min-count也是同样的效果
+ 最多上传：给hl-upload指定max-count即可

### 上传配置

<hl-demo-upload-auto/>
+ 自动上传：默认自动上传，也推荐全部采用自动上传；如果没有自动上传v-model绑定的数据格式不变，不同的是path变成了blob对象
+ 上传进度：建议将网络改为3G查看效果，默认关闭，但是组件本身也是带有loading效果的

### 显示方式

<hl-demo-upload-style/>
+ 预览样式：卡片样式和行布局样式很好理解，重点讨论一下自动样式；
  + 自动样式目前只会根据配置的type和suffix来选择不同展示方式，一句话总结就是文件类型中只有图片和视频那么采用卡片样式，否则采用行布局样式；
  + 当type=all时采用卡片布局
  + 当文件类型中不包含图片、视频时推荐使用行布局，当文件中既有图片、视频，又有文件时推荐使用卡片样式

### 自定义触发样式

<hl-demo-upload-custom-trigger/>

### 自定义预览样式

<hl-demo-upload-preview/>

:::info 提示
自定义预览样式后原来组件自带的重新上传和删除功能需要自己实现，组件暴露了两个方法帮助实现：

- handleReupload：重新上传
- handleDel：删除
  :::

### 属性

| 属性                  | 说明                       | 类型           | 可选值                     | 默认值 |
| --------------------- | -------------------------- | -------------- | -------------------------- | ------ |
| model-value / v-model | 选中项绑定值               | Object、Array  | —                          | —      |
| type                  | 上传文件类型               | String、 Array | video image file audio all | image  |
| suffix                | 上传文件后缀               | String, Array  | —                          | —      |
| autoUpload            | 是否自动上传               | Boolean        | —                          | false  |
| multiple              | 是否多选                   | Boolean        | —                          | false  |
| readonly              | 是否只读                   | Boolean        | —                          | false  |
| maxCount              | 最大上传数量               | Number         | —                          | —      |
| progress              | 是否显示上传进度条         | Boolean        | —                          | false  |
| noPreview             | 不显示预览列表             | Boolean        | —                          | true   |
| listType              | 预览列表样式，默认自动     | String         | card-卡片形式 line-行布局  | —      |
| triggerType           | 触发样式，默认跟随listType | String         | card-卡片形式 line-行布局  | —      |

### 插槽

| 插槽名  | 说明                                |
| ------- | ----------------------------------- |
| preview | 自定义显示列表，参数files，所有文件 |
| default | 自定义触发区域                      |
