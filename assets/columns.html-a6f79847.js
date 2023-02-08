import{_ as o,p,q as c,Q as a,t as n,v as t,a1 as e}from"./framework-344bb0e4.js";const r={},l={id:"frontmatter-title-for-dataframe",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),u={class:"command-title"},d=e(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; columns </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Dataframe columns</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> columns
</code></pre></div>`,5),h={id:"frontmatter-title-for-filters",tabindex:"-1"},m=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),k={class:"command-title"},f=e(`<h2 id="signature-1" tabindex="-1"><a class="header-anchor" href="#signature-1" aria-hidden="true">#</a> Signature</h2><p><code>&gt; columns </code></p><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>This is a counterpart to <code>values</code>, which produces a list of columns&#39; values.</p><h2 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h2><p>Get the columns from the record</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span> acronym:<span class="token environment constant">PWD</span>, meaning:<span class="token string">&#39;Print Working Directory&#39;</span> <span class="token punctuation">}</span> <span class="token operator">|</span> columns
</code></pre></div><p>Get the columns from the table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name,age,grade<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>bill,20,a<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> columns
</code></pre></div><p>Get the first column from the table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name,age,grade<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>bill,20,a<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> columns <span class="token operator">|</span> first
</code></pre></div><p>Get the second column from the table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name,age,grade<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>bill,20,a<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> columns <span class="token operator">|</span> <span class="token keyword">select</span> <span class="token number">1</span>
</code></pre></div>`,13);function g(s,b){return p(),c("div",null,[a("h1",l,[i,n(),a("code",null,t(s.$frontmatter.title),1),n(" for dataframe")]),a("div",u,t(s.$frontmatter.dataframe),1),d,a("h1",h,[m,n(),a("code",null,t(s.$frontmatter.title),1),n(" for filters")]),a("div",k,t(s.$frontmatter.filters),1),f])}const v=o(r,[["render",g],["__file","columns.html.vue"]]);export{v as default};
