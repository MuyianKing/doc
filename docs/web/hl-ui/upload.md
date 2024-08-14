--- 
title: 上传
---
## 上传

:::warning
目前支持图片、视频、文件
:::

### 基础用法
~~~vue
<template>
  <hl-upload type="image" v-model="picture" autoUpload v-model:loading="loading"/>
</template>

<script setup>
const picture = ref('')
const loading = ref(false)
</script>
~~~

### v-model
文件上传成功之后，后端会返回一个ID，这个ID对应了服务器上保存的文件资源；
所以v-model绑定的也是这个ID，多选时为多个ID用逗号连接的字符串

### 上传类型
+ 可以为组件设置type属性来指定文件上传类型，默认为文件，此属性为必传
+ 也可以设置suffix属性来指定文件后缀，所有可设置的后缀名可以查看@utils/file中的mime_type属性

>如果同时设置了type和suffix,取两者的交集

### 自动上传
+ 默认不会自定上传，需要设置autoUpload为true
+ 上传过程中，loading为true表示正在上传，loading为false表示上传结束，如果需要显示正在上传，可以监听该属性

### 自定义文件列表
默认组件为每种文件类型都预设了文件列表的显示样式，如果不能满足需求，可以通过preview插槽自定义
~~~vue
<template>
  <hl-upload type="image" v-model="picture" >
    <template #preview="{files}">
      ...
    </template>
  </hl-upload>
</template>
~~~

files是包含了所有文件的数组，元素结构如下：
~~~js
{
  uuid: '文件唯一ID',
  name: '文件名',
  src:'文件预览地址',
  hover: '鼠标是否hover',
  config: {
    loading:"文件是否正在上传"
  }
}
~~~

### 自定义触发区域
~~~vue
<template>
  <hl-upload type="image" v-model="form.image" auto-upload>
    <template #trigger>
      <el-button type="primary">上传</el-button>
    </template>
  </hl-upload>
</template>
~~~

### 自定触发并且不需要展示列表
>需求：选择一个文件上传，上传结束提示上传成功即可

在这个需求中，我们只需要设置一个上传按钮，点击选择文件并上传，文件上传成功后提示
~~~vue
<template>
  <hl-upload suffix="xlsx,xls" auto-upload custome v-model="file_ids" @upload-finish="upLoad" @upload-error="handleError">
    <hl-import-button />
  </hl-upload>
</template>
~~~

+ custome：不显示任何预设列表
+ upload-finish：自动上传文件结束事件
+ upload-error：上传出错事件
+ default插槽为触发区域内容

### 属性
| 属性    | 说明   | 类型  | 可选值 | 默认值  |
| ------- | ------ | ------| ------ | ------  |
|model-value / v-model| 选中项绑定值 |  String |  —    |     —  |
|type|上传文件类型|String|video image file audio|file|
|suffix|上传文件后缀，多个逗号连接|String|—|—|
|autoUpload|是否自动上传|Boolean|—|false|
|multiple|是否多选|Boolean|—|false|
|readonly|是否只读|Boolean|—|false|
|loading|上传过程中loading为true|Boolean|—|false|
|height|type为video时有效，设置video元素的高度|String|—|100px|
|width|type为video时有效，设置video元素的宽度|String|—|auto|
|controls|type为video时有效，是否显示video元素的控制条|Boolean|—|false|
|custome|是否不需要预设列表，当custome为true时，需要设置默认插槽，否则没有区域触发上传|Boolean|—|false|

### T插槽
|插槽名	   |            说明                          |
|-----    | ---------------------------------------  |
| preview | 自定义显示列表，参数files，所有文件 |
| trigger | 自定义触发区域  |
| default | 自定义触发区域，custome为true时有效  |