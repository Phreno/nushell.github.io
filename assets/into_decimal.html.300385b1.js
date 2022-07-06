import{_ as t,o as n,c as o,a,t as s,d as r,e as c}from"./app.ea1b8c3e.js";const i={},p={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=r(),h={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; into decimal ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally convert text into decimal by column paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert string to integer in table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token string">&#39;5.01&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into decimal num
</code></pre></div><p>Convert string to integer</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;1.345&#39;</span> <span class="token operator">|</span> into decimal
</code></pre></div><p>Convert decimal to integer</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;-5.9&#39;</span> <span class="token operator">|</span> into decimal
</code></pre></div>`,11);function g(e,m){return n(),o("div",null,[a("h1",p,[l,d,a("code",null,s(e.$frontmatter.title),1)]),a("div",h,s(e.$frontmatter.usage),1),u])}var k=t(i,[["render",g],["__file","into_decimal.html.vue"]]);export{k as default};
