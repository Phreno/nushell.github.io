import{_ as t,o as n,c as o,a,t as s,d as p,e as r}from"./app.ea1b8c3e.js";const c={},i={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=p(),h={style:{"white-space":"pre-wrap"}},u=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str capitalize ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally capitalize text by column paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Capitalize contents</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;good day&#39;</span> <span class="token operator">|</span> str capitalize
</code></pre></div><p>Capitalize contents</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;anton&#39;</span> <span class="token operator">|</span> str capitalize
</code></pre></div><p>Capitalize a column in a table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>lang, gems<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>nu_test, <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> str capitalize lang
</code></pre></div>`,11);function g(e,_){return n(),o("div",null,[a("h1",i,[l,d,a("code",null,s(e.$frontmatter.title),1)]),a("div",h,s(e.$frontmatter.usage),1),u])}var k=t(c,[["render",g],["__file","str_capitalize.html.vue"]]);export{k as default};
