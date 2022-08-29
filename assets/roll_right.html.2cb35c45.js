import{_ as e,o as t,c as o,a,t as n,d as p,e as c}from"./app.a6df64b1.js";const l={},r={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=p(),d={style:{"white-space":"pre-wrap"}},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; roll right --by --cells-only</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--by {int}</code>: Number of columns to roll</li><li><code>--cells-only</code>: rotates columns leaving headers fixed</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Rolls columns to the right</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b c<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> roll right
</code></pre></div><p>Rolls columns to the right with fixed headers</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b c<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> roll right --cells-only
</code></pre></div>`,9);function k(s,m){return t(),o("div",null,[a("h1",r,[i,u,a("code",null,n(s.$frontmatter.title),1)]),a("div",d,n(s.$frontmatter.usage),1),h])}const g=e(l,[["render",k],["__file","roll_right.html.vue"]]);export{g as default};
