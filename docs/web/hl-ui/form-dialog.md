---
title: 表单弹框
---

### 基本用法

<hl-demo-form-dialog/>

和 hl-dialog 相比，hl-form-dialog 做了一下几点

- 预置了提交按钮，只需要绑定提交方法

- 点击提交按钮会触发表单校验，不需要再手动触发

- 提交表单后组件会调用绑定的server方法，server必须返回一个promise，promise失败会弹出失败信息，成功则会提示“保存成功”，无需再手动提示

- 提交成功后会自动触发refresh事件，可以在父组件中绑定该事件用于刷新数据

- 弹框关闭时重置表单校验

### 属性

| 属性       | 说明                                    | 类型          | 可选值 | 默认值 |
| ---------- | --------------------------------------- | ------------- | ------ | ------ |
| title      | 标题                                    | String        | —      | —      |
| rules      | el-form校验规则                         | Object        | —      | —      |
| model      | el-form的model                          | Object        | —      | null   |
| width      | 弹框宽度                                | Number/String | —      | 500px  |
| top        | 弹框距离顶部的距离                      | Number/String | —      | 150px  |
| submitText | 提交按钮文本                            | String        | —      | 提交   |
| inline     | 是否一行显示两个表单项                  | Boolean       | —      | false  |
| server     | 提交调用的方法，返回值必须是一个Promise | Function      | —      | null   |
| labelWidth | 表单项label宽度                         | String/Number | —      | 80px   |
