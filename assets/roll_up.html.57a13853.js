import{_ as n,o as e,c as t,a,t as o,d as p,e as r}from"./app.6670dc1a.js";const c={},l=a("h1",{id:"frontmatter-title",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),p(),a("code",null,"{{ $frontmatter.title }}")],-1),u={style:{"white-space":"pre-wrap"}},i=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; roll up --by</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--by {int}</code>: Number of rows to roll</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Rolls rows up</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> roll up
</code></pre></div>`,7);function d(s,h){return e(),t("div",null,[l,a("div",u,o(s.$frontmatter.usage),1),i])}var k=n(c,[["render",d],["__file","roll_up.html.vue"]]);export{k as default};