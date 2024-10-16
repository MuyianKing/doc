---
title: 代码规范
---

### 项目中相同的html结构、代码逻辑不允许出现两次

### CSS HTML

- html中不能出现内联样式，可以使用[tailwindcss](https://www.tailwindcss.cn/docs/width)代替
- id请使用驼峰或下划线命名，类名使用中横线连接
- 组件名称使用中横线连接
- 不允许出现没有意义的结构代码：

```html
<div>
  <div>test</div>
</div>

```

> 外层的div没有任何意思，一般情况下不会出现这样的代码，但是结构变得复杂后也有可能出现

### JS

- 请确保安装ESlint插件并生效，不允许自己添加任何ESlint规则，代码提交前请确保没有任何ESlint错误和警告
- 方法只能使用function定义，并使用驼峰命名法命名
- 变量使用下划线连接
- .vue文件内不允许出现任何直接与后端接口相关的代码，请全部写到server中
- server中的所有对外的方法都必须返回Promise
- server中的所有异常请抛出来，不允许直接提示错误信息
- 所有的弹框页使用hl-dialog写在弹出组件中，非特殊情况禁止使用el-dialog
- 全局事件总线已被废弃，请使用pinia代替
- 所有上传附件一律使用hl-upload，新启动的任何项目必须满足目前的上传规范，有特殊需求向我说明，我来提供解决方案
- 不能出现任何重复或者相似度极高的代码，一旦发现当月考核先扣5分
- 需要使用环境变量时请使用@hl/utils/app中抛出来的对象
- 图标库：使用hl-icon配合[iconify](https://icon-sets.iconify.design/?category=General)，以前使用的[iconpark](https://iconpark.oceanengine.com/home)和element-plus已被弃用
- 非必要不要使用provide和inject透传数据
- 组件没有跟标签时请显式指定谁继承父组件传过来的属性
- 文件引用：当引用文件和当前文件同级或者属于下级使用相对路径，否则使用绝对路径(通过别名)；memorepo方式构建的项目packages文件夹下的全部使用相对路径
- tailwindcss 一次性最多使用5个类，超过请使用自定义类名
- pinia下的模块必须使用use开头，store结尾，不要手动应用，直接用

### 控制台

- 控制台不能出现代码相关的警告：Vue语法警告、Element Plus等组件的废弃属性、配置等警告

```js
// defineEmits应该传入数组，传入字符串功能正常，但是会在控制台提示警告，这种警告就不应该出现
const emits = defineEmits('close')
```

:::warning
项目中我们可能会接手别人的代码，别人也会接手我们的代码，而所有的代码规范都是为了提高代码的可维护性，希望大家自觉遵守
:::
