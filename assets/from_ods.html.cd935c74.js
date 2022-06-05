import{_ as s,u as n,o as r,c as o,a as e,t,d,e as c}from"./app.68c16707.js";const i={computed:{frontmatter(){return n().value}}},p={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=d(),u={style:{"white-space":"pre-wrap"}},f=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from ods --sheets</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--sheets {list&lt;string&gt;}</code>: Only convert specified sheets</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert binary .ods data to a table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> test.txt <span class="token operator">|</span> from ods
</code></pre></div><p>Convert binary .ods data to a table, specifying the tables</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> test.txt <span class="token operator">|</span> from ods -s <span class="token punctuation">[</span>Spreadsheet1<span class="token punctuation">]</span>
</code></pre></div>`,9);function m(_,g,x,b,v,a){return r(),o("div",null,[e("h1",p,[l,h,e("code",null,t(a.frontmatter.title),1)]),e("div",u,t(a.frontmatter.usage),1),f])}var y=s(i,[["render",m],["__file","from_ods.html.vue"]]);export{y as default};
