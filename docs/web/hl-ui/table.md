---
title: 表格
---

### Table 表格

> Element Plus的[el-table](https://element-plus.gitee.io/zh-CN/component/table.html)的单元格无法根据内容的长度分配单元格宽度，导致一些列在没有数据的情况下会显得特别空，hl-table就是为了解决此问题

:::warning

- 项目中为了保持代码一致性，请大家统一使用hl-table作为表格渲染组件<br/>
- 但是如果表格有单元格合并需求请使用el-table或原生table

:::

### 基础用法

<hl-demo-table/>

### 表头固定

> 组件默认带有表头固定功能，且不能取消

> 默认表格主体部分的高度等于外层容器高度减去表头高度；<br/>
> 当外层容器高度不固定或这需要自定义最大高度时可以通过maxHeight属性设置表格主体的最大高度

<hl-demo-table-fixed/>

### 内容隐藏

> 默认情况下，hl-table会以换行的形式将内容全部显示出来，当我们需要用...截断文字时可以将nowrap设为true实现

<hl-demo-table-nowrap/>

### 表头定制

> 需求：当表格字段过多时我们希望可以自定义显示的字段

hl-table内部实现了表头定制的组件，可以通过edit-header属性控制组件的显示与隐藏，用户配置的需要显示的字段信息保存在了storage中，这样保证下次打开的内容和当前一致，所以还需要配置storage对应的key值

<hl-demo-table-header/>

- storage-key：整个项目必须唯一

### 单元格宽度

> - 原生标签td即使设置了宽度，最终渲染出来的单元格的宽度也是根据内容来分配的，设置的宽度只是作为其中一个分配因子。<br/>
> - hl-table-column的width属性表现效果和原生td保持一致。<br/>
> - hl-table-column的min-width设置最小宽度

### Table属性

| 属性            | 说明                                                        | 类型                | 可选值            | 默认值   |
| --------------- | ----------------------------------------------------------- | ------------------- | ----------------- | -------- |
| data            | 数据源                                                      | Array               | —                 | []       |
| maxHeight       | 表格的最大高度：不包括表头                                  | String              | —                 | —        |
| nowrap          | 内容是否换行                                                | Boolean             | —                 | false    |
| align           | 单元格对齐方式                                              | String              | left/right/center | center   |
| hover           | 鼠标hover行上的鼠标样式                                     | Array               | css - cursor      | default  |
| border          | 是否显示边框                                                | Boolean             | —                 | false    |
| borderColor     | 边框颜色                                                    | String              | —                 | #333     |
| borderWidth     | 边框宽度                                                    | String              | —                 | 1px      |
| emptyText       | 没有数据时显示的文字                                        | String              | —                 | 没有数据 |
| hightLight      | 是否高亮选中行                                              | Boolean             | —                 | false    |
| lightLine       | 默认高亮的行数                                              | Number              | —                 | 0        |
| editHeader      | 控制显示和隐藏表头定制                                      | Boolean             | —                 | false    |
| storageKey      | 自定义表头的信息存储在localstorage，storageKey为对应的key值 | String              | —                 | —        |
| rowClass        | 行样式，可以根据方法的回调参数自定义每一行的样式            | Function(row,index) | -                 | -        |
| tooltipEffect   | 文字提示的样式                                              | String              | light/dark        | light    |
| tooltopMaxWidth | 文字提示框的最大宽度                                        | String              | css宽度样式       | 90vw     |

### Table方法

| 名称     | 说明     | 参数 |
| -------- | -------- | ---- |
| doLayout | 重新布局 | —    |

### Table事件

| 事件名   | 说明       | 回调参数                   |
| -------- | ---------- | -------------------------- |
| rowClick | 点击行触发 | (row:Object, index:Number) |

### Table插槽

| 插槽名 | 说明                     |
| ------ | ------------------------ |
| empty  | 当数据为空时自定义的内容 |

### TableColumn属性

| 属性       | 说明                                                                                             | 类型                   | 可选值            | 默认值  |
| ---------- | ------------------------------------------------------------------------------------------------ | ---------------------- | ----------------- | ------- |
| type       | 列的类型                                                                                         | String                 | default/index     | default |
| prop       | 字段名                                                                                           | String                 | -                 | -       |
| label      | 表头名                                                                                           | String                 | -                 | -       |
| index      | 索引，默认从1开始计数,传入方法时，会将当前索引作为参数传过去                                     | String/Number/Function | -                 | -       |
| width      | 宽度,可以是20也可以是20px，即使设置了此宽度，最后渲染出来的宽度还是要以原生table自适应的结果为准 | String/Number          | -                 | -       |
| minWidth   | 最小宽度,和el-table的逻辑不同，hl-table不会根据最小宽度去分配宽度，就是设置了最小宽度            | String/Number          | -                 | -       |
| align      | 对齐方式                                                                                         | String                 | center/right/left | -       |
| style      | 自定义样式                                                                                       | String/Object          | -                 | -       |
| className  | 自定义class                                                                                      | String                 | -                 | -       |
| labelStyle | 自定义表头样式                                                                                   | String/Object          | -                 | -       |

### TableColumn插槽

| 插槽名  | 说明                                       |
| ------- | ------------------------------------------ |
| default | 自定义列的内容 作用域参数为 "{row, index}" |
| header  | 自定义表头的内容                           |
