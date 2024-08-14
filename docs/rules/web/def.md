
### 场景说明

在创建用户时我们需要保存的用户的学历，页面以下拉选择的形式展示，学历有以下选项：小学、初中、高中、本科、硕士，一般情况下代码如下:

```vue
<el-select v-model="value">
  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"/>
</el-select>
<script setup>
const value = ref('');
const options = [{
    value: 1,
    label: '小学',
  },{
    value: 2,
    label: '初中',
  }, {
    value: 3,
    label: '高中',
  },{
    value: 4,
    label: '大学',
  },{
    value: 5,
    label: '硕士',
  },  {
    value: 6,
    label: '博士',
  }];
</script>
```

传递给后端的是 1、2、3...，当我们需要展示详情的时候，就需要把 1、2、3...转换成对应的文本，所以就需要在多个组件中重复定义 options。
default 目录下的文件就是定义了这些选项。

> 将上诉的 1、2、3...转换成小学、初中...，需要遍历数组查找，可以调用 getLabelByVal 方法完成转换

- index.js 为通用选项，如性别、职业等
- 其他可以按业务、类型等划分