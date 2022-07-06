import{_ as s,o as r,c as n,a as e,t,d as o,e as d}from"./app.ea1b8c3e.js";const c={},i={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=o(),h={style:{"white-space":"pre-wrap"}},_=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; db describe </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Describe SQLite database constructed query</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> db <span class="token function">open</span> foo.db <span class="token operator">|</span> db <span class="token keyword">select</span> table_1 <span class="token operator">|</span> db describe
</code></pre></div>`,5);function b(a,u){return r(),n("div",null,[e("h1",i,[l,p,e("code",null,t(a.$frontmatter.title),1)]),e("div",h,t(a.$frontmatter.usage),1),_])}var m=s(c,[["render",b],["__file","db_describe.html.vue"]]);export{m as default};
