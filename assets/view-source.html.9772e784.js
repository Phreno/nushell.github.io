import{_ as e,o as t,c as o,a,t as n,d as c,e as p}from"./app.ea1b8c3e.js";const i={},r={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=c(),d={style:{"white-space":"pre-wrap"}},h=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; view-source (item)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>item</code>: name or block to view</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>View the source of a code block</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> abc <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;hi&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> view-source <span class="token variable">$abc</span>
</code></pre></div><p>View the source of a custom command</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> def hi <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;Hi!&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> view-source hi
</code></pre></div><p>View the source of a custom command, which participates in the caller environment</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> def-env foo <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> let-env BAR <span class="token operator">=</span> <span class="token string">&#39;BAZ&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> view-source foo
</code></pre></div><p>View the source of a module</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> module mod-foo <span class="token punctuation">{</span> <span class="token builtin class-name">export</span> <span class="token function">env</span> FOO_ENV <span class="token punctuation">{</span> <span class="token string">&#39;BAZ&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> view-source mod-foo
</code></pre></div>`,13);function k(s,m){return t(),o("div",null,[a("h1",r,[l,u,a("code",null,n(s.$frontmatter.title),1)]),a("div",d,n(s.$frontmatter.usage),1),h])}var f=e(i,[["render",k],["__file","view-source.html.vue"]]);export{f as default};
