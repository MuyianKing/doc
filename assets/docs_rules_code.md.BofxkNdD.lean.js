import{ax as s,t as a,aU as l,q as e}from"./chunks/framework.DRauMKQ-.js";const c=JSON.parse('{"title":"代码规范","description":"","frontmatter":{"title":"代码规范"},"headers":[],"relativePath":"docs/rules/code.md","filePath":"docs/rules/code.md","lastUpdated":1729061054000}'),t={name:"docs/rules/code.md"};function n(h,i,r,p,d,o){return e(),a("div",null,i[0]||(i[0]=[l(`<h3 id="项目中相同的html结构、代码逻辑不允许出现两次" tabindex="-1">项目中相同的html结构、代码逻辑不允许出现两次 <a class="header-anchor" href="#项目中相同的html结构、代码逻辑不允许出现两次" aria-label="Permalink to &quot;项目中相同的html结构、代码逻辑不允许出现两次&quot;">​</a></h3><h3 id="css-html" tabindex="-1">CSS HTML <a class="header-anchor" href="#css-html" aria-label="Permalink to &quot;CSS HTML&quot;">​</a></h3><ul><li>html中不能出现内联样式，可以使用<a href="https://www.tailwindcss.cn/docs/width" target="_blank" rel="noreferrer">tailwindcss</a>代替</li><li>id请使用驼峰或下划线命名，类名使用中横线连接</li><li>组件名称使用中横线连接</li><li>不允许出现没有意义的结构代码：</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;test&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><blockquote><p>外层的div没有任何意思，一般情况下不会出现这样的代码，但是结构变得复杂后也有可能出现</p></blockquote><h3 id="js" tabindex="-1">JS <a class="header-anchor" href="#js" aria-label="Permalink to &quot;JS&quot;">​</a></h3><ul><li>请确保安装ESlint插件并生效，不允许自己添加任何ESlint规则，代码提交前请确保没有任何ESlint错误和警告</li><li>方法只能使用function定义，并使用驼峰命名法命名</li><li>变量使用下划线连接</li><li>.vue文件内不允许出现任何直接与后端接口相关的代码，请全部写到server中</li><li>server中的所有对外的方法都必须返回Promise</li><li>server中的所有异常请抛出来，不允许直接提示错误信息</li><li>所有的弹框页使用hl-dialog写在弹出组件中，非特殊情况禁止使用el-dialog</li><li>全局事件总线已被废弃，请使用pinia代替</li><li>所有上传附件一律使用hl-upload，新启动的任何项目必须满足目前的上传规范，有特殊需求向我说明，我来提供解决方案</li><li>不能出现任何重复或者相似度极高的代码，一旦发现当月考核先扣5分</li><li>需要使用环境变量时请使用@hl/utils/app中抛出来的对象</li><li>图标库：使用hl-icon配合<a href="https://icon-sets.iconify.design/?category=General" target="_blank" rel="noreferrer">iconify</a>，以前使用的<a href="https://iconpark.oceanengine.com/home" target="_blank" rel="noreferrer">iconpark</a>和element-plus已被弃用</li><li>非必要不要使用provide和inject透传数据</li><li>组件没有跟标签时请显式指定谁继承父组件传过来的属性</li><li>文件引用：当引用文件和当前文件同级或者属于下级使用相对路径，否则使用绝对路径(通过别名)；memorepo方式构建的项目packages文件夹下的全部使用相对路径</li><li>tailwindcss 一次性最多使用5个类，超过请使用自定义类名</li><li>pinia下的模块必须使用use开头，store结尾，不要手动应用，直接用</li></ul><h3 id="控制台" tabindex="-1">控制台 <a class="header-anchor" href="#控制台" aria-label="Permalink to &quot;控制台&quot;">​</a></h3><ul><li>控制台不能出现代码相关的警告：Vue语法警告、Element Plus等组件的废弃属性、配置等警告</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// defineEmits应该传入数组，传入字符串功能正常，但是会在控制台提示警告，这种警告就不应该出现</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> emits</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineEmits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;close&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>项目中我们可能会接手别人的代码，别人也会接手我们的代码，而所有的代码规范都是为了提高代码的可维护性，希望大家自觉遵守</p></div>`,11)]))}const E=s(t,[["render",n]]);export{c as __pageData,E as default};
