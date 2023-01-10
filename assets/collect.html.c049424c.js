import{_ as o,z as r,A as c,X as a,C as s,D as n,a6 as t}from"./framework.3d018c9f.js";const l={},p={id:"frontmatter-title-for-filters",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=t(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; collect (closure) --keep-env</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>closure</code>: the closure to run once the stream is collected</li><li><code>--keep-env</code>: let the block affect environment variables</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Use the second value in the stream</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> collect <span class="token punctuation">{</span> <span class="token operator">|</span>x<span class="token operator">|</span> <span class="token variable">$x</span>.1 <span class="token punctuation">}</span>
</code></pre></div>`,7),h={id:"frontmatter-title-for-lazyframe",tabindex:"-1"},m=a("a",{class:"header-anchor",href:"#frontmatter-title-for-lazyframe","aria-hidden":"true"},"#",-1),f={class:"command-title"},k=t(`<h2 id="signature-1" tabindex="-1"><a class="header-anchor" href="#signature-1" aria-hidden="true">#</a> Signature</h2><p><code>&gt; collect </code></p><h2 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h2><p>drop duplicates</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into lazy <span class="token operator">|</span> collect
</code></pre></div>`,5);function _(e,b){return r(),c("div",null,[a("h1",p,[i,s(),a("code",null,n(e.$frontmatter.title),1),s(" for filters")]),a("div",d,n(e.$frontmatter.filters),1),u,a("h1",h,[m,s(),a("code",null,n(e.$frontmatter.title),1),s(" for lazyframe")]),a("div",f,n(e.$frontmatter.lazyframe),1),k])}const x=o(l,[["render",_],["__file","collect.html.vue"]]);export{x as default};