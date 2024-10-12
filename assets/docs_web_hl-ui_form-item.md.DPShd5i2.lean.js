import{ax as e,t as a,aU as d,V as o,ai as i,q as l}from"./chunks/framework.DRauMKQ-.js";const p=JSON.parse('{"title":"表单项","description":"","frontmatter":{"title":"表单项"},"headers":[],"relativePath":"docs/web/hl-ui/form-item.md","filePath":"docs/web/hl-ui/form-item.md","lastUpdated":1727679435000}'),h={name:"docs/web/hl-ui/form-item.md"};function m(n,t,s,u,f,b){const r=i("hl-demo-form-item");return l(),a("div",null,[t[0]||(t[0]=d('<h2 id="hl-form-item" tabindex="-1">hl-form-item <a class="header-anchor" href="#hl-form-item" aria-label="Permalink to &quot;hl-form-item&quot;">​</a></h2><blockquote><p>hl-form-item 继承了<a href="https://element-plus.gitee.io/zh-CN/component/form.html#formitem-attributes" target="_blank" rel="noreferrer">el-form-item</a>所有的属性，在 el-form-item 基础上 hl-form-item 预设了一些校验规则</p></blockquote><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3>',3)),o(r),t[1]||(t[1]=d('<blockquote><p>上面的 required 表示姓名为必填项，当没有填写时会提示“请输入姓名”</p></blockquote><h3 id="预设规则" tabindex="-1">预设规则 <a class="header-anchor" href="#预设规则" aria-label="Permalink to &quot;预设规则&quot;">​</a></h3><table tabindex="0"><thead><tr><th>规则</th><th>属性名</th><th>说明</th></tr></thead><tbody><tr><td>必填</td><td>required</td><td>-</td></tr><tr><td>身份证号</td><td>idCard</td><td>-</td></tr><tr><td>邮箱</td><td>email</td><td>-</td></tr><tr><td>整型</td><td>integer</td><td>-</td></tr><tr><td>数字</td><td>number</td><td>包含小数、整数</td></tr><tr><td>手机号</td><td>phone</td><td>-</td></tr><tr><td>车牌号</td><td>carNum</td><td>-</td></tr><tr><td>IP 地址</td><td>ip</td><td>-</td></tr><tr><td>端口</td><td>port</td><td>-</td></tr><tr><td>最大长度</td><td>maxLength</td><td>绑定一个数字</td></tr><tr><td>最小长度</td><td>minLength</td><td>绑定一个数字</td></tr><tr><td>上传</td><td>uploadLoading</td><td>表单中有hl-upload并且开启了自动上传，设置了该属性后文件未上传完成不能提交</td></tr><tr><td>数组长度</td><td>minCount</td><td>当字段类型是数组时，校验数组长度</td></tr></tbody></table><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>trigger</td><td>触发校验方式</td><td>String</td><td></td><td>blur</td></tr><tr><td>rules</td><td>自定义校验规则</td><td>Object/Array</td><td></td><td>null</td></tr><tr><td>info</td><td>提示信息：必填校验会自动根据表单类型判断是“请选择”还是“请输入”，当无法正确判断时可以手动设置改属性</td><td>String</td><td></td><td></td></tr><tr><td>labelWidth</td><td>表单标签长度</td><td>String</td><td>fit-自适应</td><td>—</td></tr><tr><td>minCountMsg</td><td>配置校验规则minCount使用，不满足minCount的提示信息</td><td></td><td></td><td></td></tr></tbody></table>',5))])}const q=e(h,[["render",m]]);export{p as __pageData,q as default};
