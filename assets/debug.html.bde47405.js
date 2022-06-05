import{_ as n,u as t,o as r,c as o,a,t as s,d as p,e as c}from"./app.68c16707.js";const l={computed:{frontmatter(){return t().value}}},i={id:"frontmatter-title",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=p(),h={style:{"white-space":"pre-wrap"}},g=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; debug --raw</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--raw</code>: Prints the raw value representation</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Print the value of a string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;hello&#39;</span> <span class="token operator">|</span> debug
</code></pre></div><p>Print the value of a table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>version patch<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">0.1</span>.0 false<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">0.1</span>.1 true<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">0.2</span>.0 false<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> debug
</code></pre></div>`,9);function m(k,_,f,b,v,e){return r(),o("div",null,[a("h1",i,[u,d,a("code",null,s(e.frontmatter.title),1)]),a("div",h,s(e.frontmatter.usage),1),g])}var w=n(l,[["render",m],["__file","debug.html.vue"]]);export{w as default};
