import{ax as k,q as r,t as i,S as l,U as a,O as h,aV as e,ai as t,p as o}from"./chunks/framework.CHV6MyHS.js";const A=JSON.parse('{"title":"Grid布局","description":"","frontmatter":{"title":"Grid布局"},"headers":[],"relativePath":"docs/web/hl-ui/grid-layout.md","filePath":"docs/web/hl-ui/grid-layout.md","lastUpdated":1730444318000}'),E={name:"docs/web/hl-ui/grid-layout.md"};function g(y,s,c,u,m,F){const d=t("hl-demo-grid"),n=t("client-only"),p=t("hl-demo-grid-fun");return o(),r("div",null,[s[0]||(s[0]=i("h2",{id:"hl-grid-layout",tabindex:"-1"},[l("hl-grid-layout "),i("a",{class:"header-anchor",href:"#hl-grid-layout","aria-label":'Permalink to "hl-grid-layout"'},"​")],-1)),s[1]||(s[1]=i("h3",{id:"基本用法",tabindex:"-1"},[l("基本用法 "),i("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1)),a(n,null,{default:h(()=>[a(d)]),_:1}),s[2]||(s[2]=e(`<blockquote><p>当我们改变屏幕尺寸时会发现hl-demo-grid里面的内容列数会自动改变，变化规则由width和min-width控制，代码如下：</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 设置列数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setColumnRow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // el是容器</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> width</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> el.clientWidth</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> column </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> width </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> config.width</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 当column小数部分大于0.5向上取整，否则向下取整</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  column </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> column </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">floor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(column) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ceil</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(column) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">floor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(column)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 内容块实际快读</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> real_width</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> width </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> column</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 宽度小于最小宽度，列数减一以增加内容块宽度</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (config.min_width </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> real_width </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> config.min_width) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    column </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  el.style[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;grid-template-columns&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`repeat(\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">column</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}, 1fr)\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="函数方式" tabindex="-1">函数方式 <a class="header-anchor" href="#函数方式" aria-label="Permalink to &quot;函数方式&quot;">​</a></h3>`,3)),a(n,null,{default:h(()=>[a(p)]),_:1}),s[3]||(s[3]=e('<h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>width</td><td>内容块宽度</td><td>Number</td><td>—</td><td>—</td></tr><tr><td>minWidth</td><td>内容块最小宽度</td><td>Number</td><td>—</td><td>0</td></tr><tr><td>gap</td><td>内容块之间的间隙</td><td>Number</td><td>—</td><td>10</td></tr><tr><td>rowGap</td><td>内容块行之间的间隙</td><td>Number</td><td>—</td><td>10</td></tr><tr><td>columnGap</td><td>内容块列之间的间隙</td><td>Number</td><td>—</td><td>10</td></tr></tbody></table>',2))])}const b=k(E,[["render",g]]);export{A as __pageData,b as default};
