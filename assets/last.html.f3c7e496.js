import{_ as s,u as n,o as r,c as o,a,t,d as c,e as p}from"./app.b8dbd919.js";const l={computed:{frontmatter(){return n().value}}},d={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=c(),u={style:{"white-space":"pre-wrap"}},m=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; last (rows)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>rows</code>: starting from the back, the number of rows to return</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get the last 2 items</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1,2</span>,3<span class="token punctuation">]</span> <span class="token operator">|</span> last <span class="token number">2</span>
</code></pre></div><p>Get the last item</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1,2</span>,3<span class="token punctuation">]</span> <span class="token operator">|</span> last
</code></pre></div>`,9);function _(f,g,k,b,x,e){return r(),o("div",null,[a("h1",d,[i,h,a("code",null,t(e.frontmatter.title),1)]),a("div",u,t(e.frontmatter.usage),1),m])}var w=s(l,[["render",_],["__file","last.html.vue"]]);export{w as default};
