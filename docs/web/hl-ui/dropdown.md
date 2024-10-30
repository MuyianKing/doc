---
title: 下拉菜单
---

## hl-dropdown

### 基础用法

<hl-demo-dropdown />

### keep-label

<hl-demo-dropdown-keeplabel />

label的显示规则是：

- 单选如果没有选中则显示label，选中了则显示选中的label
- 多选则始终显示label
- 如果keep-label属性为true则无论单选还是多选始终

### 属性

| 属性               | 说明             | 类型                | 可选值 | 默认值    |
| ------------------ | ---------------- | ------------------- | ------ | --------- |
| model-vale/v-model | 绑定的值         | Array/String/Number | —      | undefined |
| options            | 下拉选项         | Array               | —      | []        |
| multiple           | 是否多选         | Boolean             | —      | false     |
| label              | 标签             | String              | —      | 空字符串  |
| keepLabel          | 是否保持label    | Boolean             | —      | false     |
| hasSearch          | 是否可搜索       | Boolean             | —      | false     |
| noAll              | 是否去除全部     | Boolean             | —      | false     |
| noArrow            | 是否去掉下拉箭头 | Boolean             | —      | false     |
