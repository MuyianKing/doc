import{R as i}from"./chunks/theme.B9b7n5Jv.js";import{aM as s,aV as u,aW as l,aX as c,aY as f,aZ as d,a_ as m,a$ as h,b0 as b,b1 as g,b2 as A,d as w,ay as y,o as P,w as v,b3 as C,b4 as R,b5 as E,h as S}from"./chunks/framework.DRauMKQ-.js";function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=p(i),T=w({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=y();return P(()=>{v(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&C(),R(),E(),o.setup&&o.setup(),()=>S(o.Layout)}});async function _(){globalThis.__VITEPRESS__=!0;const e=V(),a=D();a.provide(l,e);const t=c(e.route);return a.provide(f,t),a.component("Content",d),a.component("ClientOnly",m),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:h}),{app:a,router:e,data:t}}function D(){return b(T)}function V(){let e=s,a;return g(t=>{let n=A(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),s&&(e=!1),r},o.NotFound)}s&&_().then(({app:e,router:a,data:t})=>{a.go().then(()=>{u(a.route,t.site),e.mount("#app")})});export{_ as createApp};
