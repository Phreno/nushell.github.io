import{_ as t,p as o,q as r,Q as a,t as e,v as n,a1 as p}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; range (rows)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>rows</code>: range of rows to return: Eg) 4..7 (=&gt; from 4 to 7)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get the last 2 items</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span>,2,3,4,5<span class="token punctuation">]</span> <span class="token operator">|</span> range <span class="token number">4</span><span class="token punctuation">..</span><span class="token number">5</span>
</code></pre></div><p>Get the last 2 items</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span>,2,3,4,5<span class="token punctuation">]</span> <span class="token operator">|</span> range <span class="token punctuation">(</span>-2<span class="token punctuation">)</span><span class="token punctuation">..</span>
</code></pre></div><p>Get the next to last 2 items</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span>,2,3,4,5<span class="token punctuation">]</span> <span class="token operator">|</span> range <span class="token punctuation">(</span>-3<span class="token punctuation">)</span><span class="token punctuation">..</span>-2
</code></pre></div>`,11);function h(s,g){return o(),r("div",null,[a("h1",l,[i,e(),a("code",null,n(s.$frontmatter.title),1),e(" for filters")]),a("div",d,n(s.$frontmatter.filters),1),u])}const k=t(c,[["render",h],["__file","range.html.vue"]]);export{k as default};
