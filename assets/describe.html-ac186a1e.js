import{_ as t,p as o,q as r,Q as a,t as e,v as n,a1 as c}from"./framework-344bb0e4.js";const p={},l={id:"frontmatter-title-for-core",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; describe --no-collect</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--no-collect</code>: do not collect streams of structured data</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Describe the type of a string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;hello&#39;</span> <span class="token operator">|</span> describe
</code></pre></div><p>Describe a stream of data, collecting it first</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> each <span class="token punctuation">{</span><span class="token operator">|</span>i<span class="token operator">|</span> <span class="token variable">$i</span><span class="token punctuation">}</span> <span class="token operator">|</span> describe
</code></pre></div><p>Describe the input but do not collect streams</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> each <span class="token punctuation">{</span><span class="token operator">|</span>i<span class="token operator">|</span> <span class="token variable">$i</span><span class="token punctuation">}</span> <span class="token operator">|</span> describe --no-collect
</code></pre></div>`,11);function h(s,k){return o(),r("div",null,[a("h1",l,[i,e(),a("code",null,n(s.$frontmatter.title),1),e(" for core")]),a("div",d,n(s.$frontmatter.core),1),u])}const m=t(p,[["render",h],["__file","describe.html.vue"]]);export{m as default};
