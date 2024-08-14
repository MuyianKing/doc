--- 
title: 地图选点
---


### 基本用法
~~~vue
<template>
  <!-- 经纬度绑定到一个对象上 -->
 <hl-pointer-select v-model="lnglat" />

  <!-- 单独绑定经纬度 -->
 <hl-pointer-select v-model:lng="lnglat.lng" v-model:lat="lnglat.lat"/>
</template>

<script setup>
const lnglat = ref({
  lng: '',
  lat: '',
});
</script>
~~~


### 属性
| 属性    | 说明   | 类型  | 可选值 | 默认值  |
| -------| ------ | ------| ------ | ------ |
| modelValue/v-model | 绑定的经纬度 | * |   —   |   —  |
| lat/v-model:lat | 绑定的纬度 | String/Number| — |  — |
| lng/v-model:lng | 绑定的纬度 | String/Number| — |  — |
| size |弹出框的高度|String/Number| 单位可以是px也可以是百分比 |60%|
| title |弹出框标题|String| — |选择位置(拖动图标选择位置)|
| center |地图初始化的中心点|Object| — |{lng: 120.005514,lat: 31.798964}|
| zoom |地图默认缩放|String/Number|1-20|15|
| icon |点的图标|String|—|—|
| iconSize |图标大小，数组分别表示宽高|Array| — | [0, 0] |
| toFixed | 经纬度保留小数点后几位 | String/Number |—|—|
