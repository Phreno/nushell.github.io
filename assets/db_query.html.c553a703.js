import{_ as t,o as r,c as s,a as e,t as n,d as o,e as d}from"./app.6670dc1a.js";const i={},c=e("h1",{id:"frontmatter-title",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),o(),e("code",null,"{{ $frontmatter.title }}")],-1),l={style:{"white-space":"pre-wrap"}},h=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; db query (query)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>query</code>: SQL to execute against the database</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get 1 table out of a SQLite database</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> db <span class="token function">open</span> foo.db <span class="token operator">|</span> db query <span class="token string">&quot;SELECT * FROM Bar&quot;</span>
</code></pre></div>`,7);function p(a,u){return r(),s("div",null,[c,e("div",l,n(a.$frontmatter.usage),1),h])}var f=t(i,[["render",p],["__file","db_query.html.vue"]]);export{f as default};