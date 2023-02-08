import{_ as o,p,q as c,Q as a,t as n,v as e,a1 as t}from"./framework-344bb0e4.js";const r={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),u={class:"command-title"},d=t(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; sort-by ...rest --reverse --ignore-case --natural</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: the column(s) to sort by</li><li><code>--reverse</code>: Sort in reverse order</li><li><code>--ignore-case</code>: Sort string-based columns case-insensitively</li><li><code>--natural</code>: Sort alphanumeric string-based columns naturally (1, 9, 10, 99, 100, ...)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Sort files by modified date</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> sort-by modified
</code></pre></div><p>Sort files by name (case-insensitive)</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> sort-by name <span class="token parameter variable">-i</span>
</code></pre></div><p>Sort a table by a column (reversed order)</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>fruit count<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>apple <span class="token number">9</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>pear <span class="token number">3</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>orange <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> sort-by fruit <span class="token parameter variable">-r</span>
</code></pre></div>`,11),k={id:"frontmatter-title-for-lazyframe",tabindex:"-1"},h=a("a",{class:"header-anchor",href:"#frontmatter-title-for-lazyframe","aria-hidden":"true"},"#",-1),m={class:"command-title"},b=t(`<h2 id="signature-1" tabindex="-1"><a class="header-anchor" href="#signature-1" aria-hidden="true">#</a> Signature</h2><p><code>&gt; sort-by </code></p><h2 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h2><p>Sort dataframe by one column</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">6</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> sort-by a
</code></pre></div><p>Sort column using two columns</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">6</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> sort-by <span class="token punctuation">[</span>a b<span class="token punctuation">]</span> <span class="token parameter variable">-r</span> <span class="token punctuation">[</span>false true<span class="token punctuation">]</span>
</code></pre></div>`,7);function f(s,g){return p(),c("div",null,[a("h1",l,[i,n(),a("code",null,e(s.$frontmatter.title),1),n(" for filters")]),a("div",u,e(s.$frontmatter.filters),1),d,a("h1",k,[h,n(),a("code",null,e(s.$frontmatter.title),1),n(" for lazyframe")]),a("div",m,e(s.$frontmatter.lazyframe),1),b])}const _=o(r,[["render",f],["__file","sort-by.html.vue"]]);export{_ as default};
