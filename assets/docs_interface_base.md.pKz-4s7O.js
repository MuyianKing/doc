import{ax as a,t as i,aU as n,q as t}from"./chunks/framework.DRauMKQ-.js";const o=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/interface/base.md","filePath":"docs/interface/base.md","lastUpdated":1723624027000}'),l={name:"docs/interface/base.md"};function h(e,s,p,k,d,r){return t(),i("div",null,s[0]||(s[0]=[n(`<h2 id="文件" tabindex="-1">文件 <a class="header-anchor" href="#文件" aria-label="Permalink to &quot;文件&quot;">​</a></h2><h3 id="上传" tabindex="-1">上传 <a class="header-anchor" href="#上传" aria-label="Permalink to &quot;上传&quot;">​</a></h3><blockquote><p>前端上传文件，可以是多个文件；后端返回一个文件ID构成的数组。</p></blockquote><h4 id="请求" tabindex="-1">请求 <a class="header-anchor" href="#请求" aria-label="Permalink to &quot;请求&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    url：</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/upload&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    method：</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;POST&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Content</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Type：</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;multipart/form-data&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    data：FormData</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="响应" tabindex="-1">响应 <a class="header-anchor" href="#响应" aria-label="Permalink to &quot;响应&quot;">​</a></h4><p>后端在接收到文件后，先将文件保存到服务器(文件名必须唯一)，再往upload表中插入一条记录，每条记录都有一个唯一ID对应服务器上文件，需要返回给前端就是这个唯一ID；需要注意的是无论前端上传一个文件还是多个，都应返回一个数组。</p><h3 id="根据id获取文件详细信息" tabindex="-1">根据ID获取文件详细信息 <a class="header-anchor" href="#根据id获取文件详细信息" aria-label="Permalink to &quot;根据ID获取文件详细信息&quot;">​</a></h3><h4 id="请求-1" tabindex="-1">请求 <a class="header-anchor" href="#请求-1" aria-label="Permalink to &quot;请求&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    url：</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/upload_info&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    method：</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;POST&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //文件ID，支持多个ID，逗号连接</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		file_ids</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="响应-1" tabindex="-1">响应 <a class="header-anchor" href="#响应-1" aria-label="Permalink to &quot;响应&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    file_name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;文件名&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    file_id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;文件ID&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    file_path:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;文件地址&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h3 id="下载文件" tabindex="-1">下载文件 <a class="header-anchor" href="#下载文件" aria-label="Permalink to &quot;下载文件&quot;">​</a></h3><h4 id="请求-2" tabindex="-1">请求 <a class="header-anchor" href="#请求-2" aria-label="Permalink to &quot;请求&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/download?id=\${id}&amp;token=\${token}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    method</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;GET&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li>ID：文件ID</li><li>token：用户token</li></ul><h4 id="响应-2" tabindex="-1">响应 <a class="header-anchor" href="#响应-2" aria-label="Permalink to &quot;响应&quot;">​</a></h4><p>返回文件的二进制流</p><blockquote><p>响应头中必须包含文件名，文件大小，其中文件名如果是中文原来会报错，沈方逸做的处理，不知道科不科学</p></blockquote><h3 id="预览" tabindex="-1">预览 <a class="header-anchor" href="#预览" aria-label="Permalink to &quot;预览&quot;">​</a></h3><h4 id="请求-3" tabindex="-1">请求 <a class="header-anchor" href="#请求-3" aria-label="Permalink to &quot;请求&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	url：“</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">preview</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">id</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">token</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">token</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">big</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">big</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">”</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	method</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;GET&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li>big：理论上上传的图片分被剪切压缩的小图和原图，big为0表示查看小图，big为1表示查看原图</li></ul><h2 id="用户" tabindex="-1">用户 <a class="header-anchor" href="#用户" aria-label="Permalink to &quot;用户&quot;">​</a></h2><h3 id="登录" tabindex="-1">登录 <a class="header-anchor" href="#登录" aria-label="Permalink to &quot;登录&quot;">​</a></h3><h4 id="请求-4" tabindex="-1">请求 <a class="header-anchor" href="#请求-4" aria-label="Permalink to &quot;请求&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/login&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    methods</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;POST&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">       	username</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;用户名&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;密码&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="响应-3" tabindex="-1">响应 <a class="header-anchor" href="#响应-3" aria-label="Permalink to &quot;响应&quot;">​</a></h4><ul><li>响应头必须携带token</li><li>返回用户基本信息</li></ul><h3 id="token" tabindex="-1">token <a class="header-anchor" href="#token" aria-label="Permalink to &quot;token&quot;">​</a></h3><p>作用：前端再请求接口时，除了一些特殊的接口不需要携带token，其他的都需要；后端拿到token会校验当前token是否失效，如果失效接口直接返回认证失败，未失效才能继续请求token。</p><p>有效期：toekn默认有效期为5分钟到2小时，如果不去刷新token，token在失效后前端将无法继续请求</p><p>刷新token：前端会定时请求刷新token的接口，前端每次请求，接口需要将token的有效期设置成当前时间的后5分钟</p><h3 id="其他接口" tabindex="-1">其他接口 <a class="header-anchor" href="#其他接口" aria-label="Permalink to &quot;其他接口&quot;">​</a></h3><ul><li>添加用户</li><li>修改用户</li><li>修改密码 <ul><li>普通用户修改密码：必须上传原密码</li><li>管理员修改密码：直接修改</li></ul></li><li>删除用户</li><li>根据id或名字查询用户，id可以是多个（逗号连接），名字模糊查询</li></ul><h3 id="日志" tabindex="-1">日志 <a class="header-anchor" href="#日志" aria-label="Permalink to &quot;日志&quot;">​</a></h3><p>获取操作日志</p><h2 id="字典" tabindex="-1">字典 <a class="header-anchor" href="#字典" aria-label="Permalink to &quot;字典&quot;">​</a></h2><h3 id="获取所有字典" tabindex="-1">获取所有字典 <a class="header-anchor" href="#获取所有字典" aria-label="Permalink to &quot;获取所有字典&quot;">​</a></h3><h4 id="请求-5" tabindex="-1">请求 <a class="header-anchor" href="#请求-5" aria-label="Permalink to &quot;请求&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/dict&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    method</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;POST&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    data：{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        opt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;get_dict&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="响应-4" tabindex="-1">响应 <a class="header-anchor" href="#响应-4" aria-label="Permalink to &quot;响应&quot;">​</a></h4><blockquote><p>已数组形式返回所有字典</p></blockquote><h3 id="获取指定字典" tabindex="-1">获取指定字典 <a class="header-anchor" href="#获取指定字典" aria-label="Permalink to &quot;获取指定字典&quot;">​</a></h3><blockquote><p>同上，请求中加上参数：type(对应字典类型)</p></blockquote>`,45)]))}const c=a(l,[["render",h]]);export{o as __pageData,c as default};