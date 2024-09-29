---
title: 表单项
---

> hl-form-item 继承了[el-form-item](https://element-plus.gitee.io/zh-CN/component/form.html#formitem-attributes)所有的属性，在 el-form-item 基础上 hl-form-item 预设了一些校验规则

### 基础用法

<hl-demo-form-item/>

> 上面的 required 表示姓名为必填项，当没有填写时会提示“请输入姓名”

### 预设规则

| 规则     | 属性名        | 说明                                                                      |
| -------- | ------------- | ------------------------------------------------------------------------- |
| 必填     | required      | -                                                                         |
| 身份证号 | idCard        | -                                                                         |
| 邮箱     | email         | -                                                                         |
| 整型     | integer       | -                                                                         |
| 数字     | number        | 包含小数、整数                                                            |
| 手机号   | phone         | -                                                                         |
| 车牌号   | carNum        | -                                                                         |
| IP 地址  | ip            | -                                                                         |
| 端口     | port          | -                                                                         |
| 最大长度 | maxLength     | 绑定一个数字                                                              |
| 最小长度 | minLength     | 绑定一个数字                                                              |
| 上传     | uploadLoading | 表单中有hl-upload并且开启了自动上传，设置了该属性后文件未上传完成不能提交 |
| 数组长度 | minCount      | 当字段类型是数组时，校验数组长度                                          |

### 属性

| 属性        | 说明                                                                                               | 类型          | 可选值     | 默认值 |
| ----------- | -------------------------------------------------------------------------------------------------- | ------------- | ---------- | ------ |
| trigger     | 触发校验方式                                                                                       | String        |            | blur   |
| rules       | 自定义校验规则                                                                                     | Object, Array |            | null   |
| info        | 提示信息：必填校验会自动根据表单类型判断是“请选择”还是“请输入”，当无法正确判断时可以手动设置改属性 | String        |            |        |
| labelWidth  | 表单标签长度                                                                                       | String        | fit-自适应 | —      |
| minCountMsg | 配置校验规则minCount使用，不满足minCount的提示信息                                                 |
