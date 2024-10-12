import{ax as m,t as b,aU as o,V as l,v as d,T as e,ai as a,q as c}from"./chunks/framework.DRauMKQ-.js";const P=JSON.parse('{"title":"上传","description":"","frontmatter":{"title":"上传"},"headers":[],"relativePath":"docs/web/hl-ui/upload.md","filePath":"docs/web/hl-ui/upload.md","lastUpdated":1727679435000}'),f={name:"docs/web/hl-ui/upload.md"};function _(q,t,x,g,k,v){const r=a("hl-demo-upload"),i=a("hl-demo-upload-type"),n=a("hl-demo-upload-count"),u=a("hl-demo-upload-auto"),s=a("hl-demo-upload-style"),p=a("hl-demo-upload-custom-trigger"),h=a("hl-demo-upload-preview");return c(),b("div",null,[t[0]||(t[0]=o('<h2 id="上传" tabindex="-1">上传 <a class="header-anchor" href="#上传" aria-label="Permalink to &quot;上传&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">警告</p><p>项目中不允许自己写任何上传组件，非要写必须讨论后再决定</p></div><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3>',3)),l(r),t[1]||(t[1]=o(`<ul><li>单选的初始值为null，多选的初始值为[]</li></ul><div class="danger custom-block"><p class="custom-block-title">这很重要</p><p>上面的两个例子中无论是单选还是多选，最终上传的后端的是一个对象或者是对象数组，对象结构如下</p><pre>{
  &quot;id&quot;: &quot;P1727665397346ph&quot;,
  &quot;name&quot;: &quot;bg@2x.png&quot;,
  &quot;path&quot;: &quot;2024/9/30/P1727665397346ph.png&quot;
}
</pre><ul><li><p>这个数据结构不允许改动，直接给后端，至于后端是存id还是将整个数据直接入库后端自己看着办<br></p></li><li><p>但是我们回显或者修改表单数据时，我们需要的数据结构就是我们传给后端的，也就是说我们传给后端什么数据后端返给我们的也必须是一模一样的数据<br></p></li><li><p>id、name、path三个字段已经定义，非特殊情况不允许擅自改动，也不允许自己兼容后端的字段，比如后端给的file_name，自己把file_name赋给name<br></p></li><li><p>上传包括前端和后端截至目前（2024-09-30）已经形成一个规范，所有人必须遵循，后端不满足就让后端整改，前端也不允许擅自重新自定义上传相关组件，有特殊需求讨论决定方案</p></li></ul></div><h3 id="限制文件上传类型" tabindex="-1">限制文件上传类型 <a class="header-anchor" href="#限制文件上传类型" aria-label="Permalink to &quot;限制文件上传类型&quot;">​</a></h3>`,3)),l(i),t[2]||(t[2]=d("h3",{id:"限制文件上传数量",tabindex:"-1"},[e("限制文件上传数量 "),d("a",{class:"header-anchor",href:"#限制文件上传数量","aria-label":'Permalink to "限制文件上传数量"'},"​")],-1)),l(n),t[3]||(t[3]=d("ul",null,[d("li",null,"最少上传：hl-upload本身无法配置最少上传数量，但是如果是多选可以给hl-form-item指定min-count也是同样的效果"),d("li",null,"最多上传：给hl-upload指定max-count即可")],-1)),t[4]||(t[4]=d("h3",{id:"上传配置",tabindex:"-1"},[e("上传配置 "),d("a",{class:"header-anchor",href:"#上传配置","aria-label":'Permalink to "上传配置"'},"​")],-1)),l(u),t[5]||(t[5]=d("ul",null,[d("li",null,"自动上传：默认自动上传，也推荐全部采用自动上传；如果没有自动上传v-model绑定的数据格式不变，不同的是path变成了blob对象"),d("li",null,"上传进度：建议将网络改为3G查看效果，默认关闭，但是组件本身也是带有loading效果的")],-1)),t[6]||(t[6]=d("h3",{id:"显示方式",tabindex:"-1"},[e("显示方式 "),d("a",{class:"header-anchor",href:"#显示方式","aria-label":'Permalink to "显示方式"'},"​")],-1)),l(s),t[7]||(t[7]=d("ul",null,[d("li",null,[e("预览样式：卡片样式和行布局样式很好理解，重点讨论一下自动样式； "),d("ul",null,[d("li",null,"自动样式目前只会根据配置的type和suffix来选择不同展示方式，一句话总结就是文件类型中只有图片和视频那么采用卡片样式，否则采用行布局样式；"),d("li",null,"当type=all时采用卡片布局"),d("li",null,"当文件类型中不包含图片、视频时推荐使用行布局，当文件中既有图片、视频，又有文件时推荐使用卡片样式")])])],-1)),t[8]||(t[8]=d("h3",{id:"自定义触发样式",tabindex:"-1"},[e("自定义触发样式 "),d("a",{class:"header-anchor",href:"#自定义触发样式","aria-label":'Permalink to "自定义触发样式"'},"​")],-1)),l(p),t[9]||(t[9]=d("h3",{id:"自定义预览样式",tabindex:"-1"},[e("自定义预览样式 "),d("a",{class:"header-anchor",href:"#自定义预览样式","aria-label":'Permalink to "自定义预览样式"'},"​")],-1)),l(h),t[10]||(t[10]=o('<div class="info custom-block"><p class="custom-block-title">提示</p><p>自定义预览样式后原来组件自带的重新上传和删除功能需要自己实现，组件暴露了两个方法帮助实现：</p><ul><li>handleReupload：重新上传</li><li>handleDel：删除</li></ul></div><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>选中项绑定值</td><td>Object、Array</td><td>—</td><td>—</td></tr><tr><td>type</td><td>上传文件类型</td><td>String、 Array</td><td>video image file audio all</td><td>image</td></tr><tr><td>suffix</td><td>上传文件后缀</td><td>String, Array</td><td>—</td><td>—</td></tr><tr><td>autoUpload</td><td>是否自动上传</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>multiple</td><td>是否多选</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>readonly</td><td>是否只读</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>maxCount</td><td>最大上传数量</td><td>Number</td><td>—</td><td>—</td></tr><tr><td>progress</td><td>是否显示上传进度条</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>noPreview</td><td>不显示预览列表</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>listType</td><td>预览列表样式，默认自动</td><td>String</td><td>card-卡片形式 line-行布局</td><td>—</td></tr><tr><td>triggerType</td><td>触发样式，默认跟随listType</td><td>String</td><td>card-卡片形式 line-行布局</td><td>—</td></tr></tbody></table><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>preview</td><td>自定义显示列表，参数files，所有文件</td></tr><tr><td>default</td><td>自定义触发区域</td></tr></tbody></table>',5))])}const w=m(f,[["render",_]]);export{P as __pageData,w as default};