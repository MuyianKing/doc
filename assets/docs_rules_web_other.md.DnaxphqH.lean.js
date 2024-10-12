import{ax as i,t as a,aU as n,q as l}from"./chunks/framework.DRauMKQ-.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/rules/web/other.md","filePath":"docs/rules/web/other.md","lastUpdated":1723624027000}'),h={name:"docs/rules/web/other.md"};function t(e,s,p,k,E,r){return l(),a("div",null,s[0]||(s[0]=[n(`<h3 id="assets-目录" tabindex="-1">assets 目录 <a class="header-anchor" href="#assets-目录" aria-label="Permalink to &quot;assets 目录&quot;">​</a></h3><blockquote><p>assets 目录是需要被打包工具编译的资源目录</p></blockquote><ul><li>audio：音频</li><li>fonts：字体文件</li><li>img：图片</li><li>scss：通用 scss 文件</li><li>json：json 文件</li></ul><h3 id="components-目录" tabindex="-1">components 目录 <a class="header-anchor" href="#components-目录" aria-label="Permalink to &quot;components 目录&quot;">​</a></h3><blockquote><p>通用业务组件目录：比如用户下拉选择组件，页面布局组件等。基本上一些通用的业务组件都会定义在该目录下</p></blockquote><h3 id="hooks-目录" tabindex="-1">hooks 目录 <a class="header-anchor" href="#hooks-目录" aria-label="Permalink to &quot;hooks 目录&quot;">​</a></h3><h4 id="select-js" tabindex="-1">select.js <a class="header-anchor" href="#select-js" aria-label="Permalink to &quot;select.js&quot;">​</a></h4><p>现在有一个需求：定义一个人员下拉组件，需要实现多选、远程搜索和下拉加载更多功能，上述的需求可以拆分为以下几个要点：</p><ul><li>调用后端接口获取数据</li><li>搜索时清空待选项，加载符合搜索条件的数据</li><li>监听组件 scroll 事件，滚动到底部时判断还有没有数据，还有数据再次请求后端，将数据累加在选项后</li><li>如果组件有初始值，需要先根据初始值调用接口，获取到已经选择的选项的数据后再获取其他待选项</li></ul><p>select.js 实现了这些要点，只需要你传入几个参数</p><blockquote><p>在编写组件前请先确保你要调取的后端接口实现了如下功能：</p></blockquote><ul><li>带有分页功能：下拉加载功能需要</li><li>可以根据名字(展示的 label)搜索</li><li>可以根据id搜索，id可以是多个，多个id 逗号连接：组件有初始值时需要根据id搜索</li></ul><h5 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h5><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> useSelect </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@hooks/select&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { select_value, dataList, loadmore, handleSelChange, commonFilter, query } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useSelect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(props, emits, apiUser, config);</span></span></code></pre></div><h4 id="参数说明" tabindex="-1">参数说明 <a class="header-anchor" href="#参数说明" aria-label="Permalink to &quot;参数说明&quot;">​</a></h4><ul><li>props：组件定义的 prop</li><li>emits：组件定义的事件，至少要定义 update:modelValue 事件，select.js 获取触发此方法实现双向绑定</li><li>apiUser：后端接口在/api/index 中对应的的方法</li><li>config <ul><li>params：需要额外传递给后端的参数</li><li>key：初始值默认情况下根据 id 搜索，当接口的参数名不是 id 时，需要配置该参数</li><li>format_config：带选项的数据格式为{label:&quot;&quot;,value:&quot;&quot;}，默认情况下 select.js 把接口返回的 name 字段转换成 label，id 转换成 value;有些时候后端返回字段并不是 id 和 name,就需要额外配置一下<div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  id_key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;被转换成value的字段名，默认id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  name_key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;被转换成label的字段名，默认name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  extend_keys</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;默认情况select.js只会返回label和value，当我们需要接口返回的其他字段时需要定义参数，格式为数组，里面定义的是字段名&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li></ul></li></ul><h4 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h4><ul><li>select_value：ref 类型，el-select 的 v-model 绑定值</li><li>dataList：ref 类型数组，带选项</li><li>loadmore：Function，自定义指令 v-loadmore 绑定的方法，用于下拉到底部加载更多，内部已经实现了是否还有数据的逻辑</li><li>handleSelChange：该方法主要实现了 v-model 绑定了什么类型的数据就返回什么类型的数据</li><li>commonFilter：需要重新搜索时调用此方法</li><li>query：reactive 类型，请求后端时传递的参数，自定义远程搜索时需要绑定参数</li></ul><h4 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h4><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">el-select</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;select_value&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :remote-method</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;filter&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @change</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;handleSelChange&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :multiple</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;multiple&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;placeholder&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> filterable</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> remote</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :clearable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;clearable&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> remote-show-suffix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-loadmore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;loadmore&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">el-option</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;all&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;全部&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">el-option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">el-option</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;item in dataList&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;item.id&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;item.id&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;item.name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">el-option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">el-select</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;UserSelect&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { apiUser } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@/api&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> useSelect </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@hooks/select&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> props</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineProps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  modelValue: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: [String, Array, Number],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    default: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  placeholder: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: String,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    default: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;请选择&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 多选</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  multiple: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: Boolean,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    default: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 显示全部</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  all: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: Boolean,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    default: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 显示清除图标</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  clearable: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: Boolean,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    default: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 禁用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  disabled: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: Boolean,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    default: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> emits</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineEmits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;update:modelValue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> params </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  opt: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;get&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { select_value, dataList, loadmore, handleSelChange, commonFilter, query } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useSelect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(props, emits, apiUser, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  params,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 自定义搜索</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> filter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">val</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 设置请求的参数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  query.query </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> val;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  commonFilter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="router-目录" tabindex="-1">router 目录 <a class="header-anchor" href="#router-目录" aria-label="Permalink to &quot;router 目录&quot;">​</a></h3><h4 id="index-js" tabindex="-1">index.js <a class="header-anchor" href="#index-js" aria-label="Permalink to &quot;index.js&quot;">​</a></h4><p>路由入口文件主要完成根据菜单生成路由，配置路由模式，配置路由守卫等功能</p><h4 id="menu目录" tabindex="-1">menu目录 <a class="header-anchor" href="#menu目录" aria-label="Permalink to &quot;menu目录&quot;">​</a></h4><p>该文件夹定义所有的路由文件，按照模块分类</p><h3 id="路由格式" tabindex="-1">路由格式 <a class="header-anchor" href="#路由格式" aria-label="Permalink to &quot;路由格式&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;base-config&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@views/task/design/components/base-config/Index.vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  meta</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;基础配置&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;icon-park-outline:log&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  children</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//子路由</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="server-目录" tabindex="-1">server 目录 <a class="header-anchor" href="#server-目录" aria-label="Permalink to &quot;server 目录&quot;">​</a></h3><ul><li>理想情况下，vue 页面只负责交互逻辑，所有和后端的交互都应该写在 server 中</li></ul><h3 id="pinia-目录" tabindex="-1">pinia 目录 <a class="header-anchor" href="#pinia-目录" aria-label="Permalink to &quot;pinia 目录&quot;">​</a></h3><p>Pinia 模块目录，持久化使用<a href="https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/" target="_blank" rel="noreferrer">pinia-plugin-persistedstate</a></p><h3 id="全局属性" tabindex="-1">全局属性 <a class="header-anchor" href="#全局属性" aria-label="Permalink to &quot;全局属性&quot;">​</a></h3><p>项目会将下面的属性挂载到 winidow 上，不需要再引入</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.dayjs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dayjs;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.hl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  message,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  storage,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  file,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  common,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  api,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div>`,34)]))}const o=i(h,[["render",t]]);export{g as __pageData,o as default};
