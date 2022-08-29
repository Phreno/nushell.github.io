import{_ as t,o as r,c as n,a,t as s,d as l,e as c}from"./app.a6df64b1.js";const o={},i={id:"frontmatter-title",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=l(),d={style:{"white-space":"pre-wrap"}},g=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str trim ...rest --char --left --right --all --both --format</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally trim text by column paths</li><li><code>--char {string}</code>: character to trim (default: whitespace)</li><li><code>--left</code>: trims characters only from the beginning of the string (default: whitespace)</li><li><code>--right</code>: trims characters only from the end of the string (default: whitespace)</li><li><code>--all</code>: trims all characters from both sides of the string <em>and</em> in the middle (default: whitespace)</li><li><code>--both</code>: trims all characters from left and right side of the string (default: whitespace)</li><li><code>--format</code>: trims spaces replacing multiple characters with singles in the middle (default: whitespace)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Trim whitespace</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;Nu shell &#39;</span> <span class="token operator">|</span> str trim
</code></pre></div><p>Trim a specific character</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;=== Nu shell ===&#39;</span> <span class="token operator">|</span> str trim <span class="token parameter variable">-c</span> <span class="token string">&#39;=&#39;</span> <span class="token operator">|</span> str trim
</code></pre></div><p>Trim all characters</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39; Nu   shell &#39;</span> <span class="token operator">|</span> str trim <span class="token parameter variable">-a</span>
</code></pre></div><p>Trim whitespace from the beginning of string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39; Nu shell &#39;</span> <span class="token operator">|</span> str trim <span class="token parameter variable">-l</span>
</code></pre></div><p>Trim a specific character</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;=== Nu shell ===&#39;</span> <span class="token operator">|</span> str trim <span class="token parameter variable">-c</span> <span class="token string">&#39;=&#39;</span>
</code></pre></div><p>Trim whitespace from the end of string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39; Nu shell &#39;</span> <span class="token operator">|</span> str trim <span class="token parameter variable">-r</span>
</code></pre></div><p>Trim a specific character</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;=== Nu shell ===&#39;</span> <span class="token operator">|</span> str trim <span class="token parameter variable">-r</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;=&#39;</span>
</code></pre></div>`,19);function m(e,u){return r(),n("div",null,[a("h1",i,[p,h,a("code",null,s(e.$frontmatter.title),1)]),a("div",d,s(e.$frontmatter.usage),1),g])}const k=t(o,[["render",m],["__file","str_trim.html.vue"]]);export{k as default};
