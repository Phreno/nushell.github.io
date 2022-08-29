import{_ as s,o as r,c as o,a as e,t,d as n,e as l}from"./app.a6df64b1.js";const c={},d={id:"frontmatter-title",tabindex:"-1"},i=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=n(),p={style:{"white-space":"pre-wrap"}},f=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from table (select) --as</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>select</code>: table of derived table to select from</li><li><code>--as {string}</code>: Alias for the selected table</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Selects a table from database</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> db.sqlite <span class="token operator">|</span> from table table_a <span class="token operator">|</span> describe
</code></pre></div>`,7);function _(a,m){return r(),o("div",null,[e("h1",d,[i,h,e("code",null,t(a.$frontmatter.title),1)]),e("div",p,t(a.$frontmatter.usage),1),f])}const b=s(c,[["render",_],["__file","from_table.html.vue"]]);export{b as default};
