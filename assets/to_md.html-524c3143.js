import{_ as e,p,q as o,Q as a,t as n,v as t,a1 as c}from"./framework-344bb0e4.js";const r={},l={id:"frontmatter-title-for-formats",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title-for-formats","aria-hidden":"true"},"#",-1),i={class:"command-title"},d=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; to md --pretty --per-element</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--pretty</code>: Formats the Markdown table to vertically align items</li><li><code>--per-element</code>: treat each row as markdown syntax element</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Outputs an MD string representing the contents of this table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>foo bar<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> to md
</code></pre></div><p>Optionally, output a formatted markdown string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>foo bar<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> to md <span class="token parameter variable">--pretty</span>
</code></pre></div><p>Treat each row as a markdown element</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&quot;H1&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Welcome to Nushell&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>foo bar<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> to md --per-element <span class="token parameter variable">--pretty</span>
</code></pre></div><p>Render a list</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> to md <span class="token parameter variable">--pretty</span>
</code></pre></div>`,13);function k(s,m){return p(),o("div",null,[a("h1",l,[u,n(),a("code",null,t(s.$frontmatter.title),1),n(" for formats")]),a("div",i,t(s.$frontmatter.formats),1),d])}const g=e(r,[["render",k],["__file","to_md.html.vue"]]);export{g as default};
