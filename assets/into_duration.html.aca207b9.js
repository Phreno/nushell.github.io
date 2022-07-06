import{_ as t,o as e,c as o,a,t as s,d as p,e as r}from"./app.ea1b8c3e.js";const c={},i={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=p(),d={style:{"white-space":"pre-wrap"}},h=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; into duration ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: column paths to convert to duration (for table input)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert string to duration in table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>value<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token string">&#39;1sec&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token string">&#39;2min&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token string">&#39;3hr&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token string">&#39;4day&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token string">&#39;5wk&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into duration value
</code></pre></div><p>Convert string to duration</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;7min&#39;</span> <span class="token operator">|</span> into duration
</code></pre></div>`,9);function k(n,g){return e(),o("div",null,[a("h1",i,[l,u,a("code",null,s(n.$frontmatter.title),1)]),a("div",d,s(n.$frontmatter.usage),1),h])}var m=t(c,[["render",k],["__file","into_duration.html.vue"]]);export{m as default};
