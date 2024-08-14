### assets 目录

> assets 目录是需要被打包工具编译的资源目录

- audio：音频
- fonts：字体文件
- img：图片
- scss：通用 scss 文件
- json：json 文件

### components 目录

> 通用业务组件目录：比如用户下拉选择组件，页面布局组件等。基本上一些通用的业务组件都会定义在该目录下



### hooks 目录

#### select.js

现在有一个需求：定义一个人员下拉组件，需要实现多选、远程搜索和下拉加载更多功能，上述的需求可以拆分为以下几个要点：

- 调用后端接口获取数据
- 搜索时清空待选项，加载符合搜索条件的数据
- 监听组件 scroll 事件，滚动到底部时判断还有没有数据，还有数据再次请求后端，将数据累加在选项后
- 如果组件有初始值，需要先根据初始值调用接口，获取到已经选择的选项的数据后再获取其他待选项

select.js 实现了这些要点，只需要你传入几个参数

> 在编写组件前请先确保你要调取的后端接口实现了如下功能：

- 带有分页功能：下拉加载功能需要
- 可以根据名字(展示的 label)搜索
- 可以根据id搜索，id可以是多个，多个id 逗号连接：组件有初始值时需要根据id搜索

##### 使用

```js
import useSelect from '@hooks/select';
let { select_value, dataList, loadmore, handleSelChange, commonFilter, query } = useSelect(props, emits, apiUser, config);
```

#### 参数说明

- props：组件定义的 prop
- emits：组件定义的事件，至少要定义 update:modelValue 事件，select.js 获取触发此方法实现双向绑定
- apiUser：后端接口在/api/index 中对应的的方法
- config
  - params：需要额外传递给后端的参数
  - key：初始值默认情况下根据 id 搜索，当接口的参数名不是 id 时，需要配置该参数
  - format_config：带选项的数据格式为{label:"",value:""}，默认情况下 select.js 把接口返回的 name 字段转换成 label，id 转换成 value;有些时候后端返回字段并不是 id 和 name,就需要额外配置一下
    ```js
    {
      id_key:"被转换成value的字段名，默认id",
      name_key:"被转换成label的字段名，默认name",
      extend_keys:"默认情况select.js只会返回label和value，当我们需要接口返回的其他字段时需要定义参数，格式为数组，里面定义的是字段名"
    }
    ```

#### 返回值

- select_value：ref 类型，el-select 的 v-model 绑定值
- dataList：ref 类型数组，带选项
- loadmore：Function，自定义指令 v-loadmore 绑定的方法，用于下拉到底部加载更多，内部已经实现了是否还有数据的逻辑
- handleSelChange：该方法主要实现了 v-model 绑定了什么类型的数据就返回什么类型的数据
- commonFilter：需要重新搜索时调用此方法
- query：reactive 类型，请求后端时传递的参数，自定义远程搜索时需要绑定参数

#### 示例

```vue
<template>
  <el-select v-model="select_value" :remote-method="filter" @change="handleSelChange" :multiple="multiple" :placeholder="placeholder" filterable remote :clearable="clearable" remote-show-suffix>
    <div v-loadmore="loadmore">
      <el-option value="" v-if="all">全部</el-option>
      <el-option v-for="item in dataList" :key="item.id" :value="item.id" :label="item.name"></el-option>
    </div>
  </el-select>
</template>

<script setup name="UserSelect">
import { apiUser } from '@/api';
import useSelect from '@hooks/select';

const props = defineProps({
  modelValue: {
    type: [String, Array, Number],
    default: '',
  },
  placeholder: {
    type: String,
    default: '请选择',
  },
  // 多选
  multiple: {
    type: Boolean,
    default: false,
  },
  // 显示全部
  all: {
    type: Boolean,
    default: false,
  },
  // 显示清除图标
  clearable: {
    type: Boolean,
    default: false,
  },
  // 禁用
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['update:modelValue']);

let params = {
  opt: 'get',
};

let { select_value, dataList, loadmore, handleSelChange, commonFilter, query } = useSelect(props, emits, apiUser, {
  params,
});

// 自定义搜索
const filter = (val) => {
  // 设置请求的参数
  query.query = val;
  commonFilter();
};
</script>
```

### router 目录

#### index.js

路由入口文件主要完成根据菜单生成路由，配置路由模式，配置路由守卫等功能

#### menu目录

该文件夹定义所有的路由文件，按照模块分类

### 路由格式

```js
{
  path: 'base-config',
  component: () => import('@views/task/design/components/base-config/Index.vue'),
  meta: {
    title: '基础配置',
    icon: 'icon-park-outline:log',
  },
  children: []//子路由
}
```

### server 目录

- 理想情况下，vue 页面只负责交互逻辑，所有和后端的交互都应该写在 server 中

### pinia 目录

Pinia 模块目录，持久化使用[pinia-plugin-persistedstate](https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/)

### 全局属性

项目会将下面的属性挂载到 winidow 上，不需要再引入

```js
window.dayjs = dayjs;
window.hl = {
  message,
  storage,
  file,
  common,
  api,
};
```
