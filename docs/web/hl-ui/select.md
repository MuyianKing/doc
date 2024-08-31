---
title: 选择器
---

## hl-select

> hl-select继承了[el-select](https://element-plus.gitee.io/zh-CN/component/select.html)所有属性和事件

### 基础用法

<hl-demo-select/>

> 对比el-select，hl-select简化了代码，省去了循环

### 禁用选项

设置disabled-options属性可以禁用一个或一批选项
<hl-demo-select-disabled/>

### 只读

只读模式，组件会去除所有的边框，禁止选择
<hl-demo-select-readonly/>

> disabled-options绑定的值是options中的value

### 属性

| 属性                  | 说明                                                | 类型                  | 可选值 | 默认值 |
| --------------------- | --------------------------------------------------- | --------------------- | ------ | ------ |
| model-value / v-model | 选中项绑定值                                        | String, Number, Array | —      | —      |
| options               | 选项                                                | Array                 | —      | —      |
| placeholder           | 空值提示信息                                        | String                | —      | 请选择 |
| all                   | 是否显示选择项“全部”                                | Boolean               | —      | false  |
| loading               | 如果数据是远程获取的，可以需要将组件设置loading状态 | Boolean               | —      | false  |
| disabledOptions       | 禁用的选项                                          | Array                 | —      | 空数组 |
| readonly              | 是否只读                                            | Boolean               | —      | false  |

> 当选择全部时v-model绑定的值为空字符串
