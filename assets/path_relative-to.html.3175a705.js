import{_ as t,o as s,c as n,a,t as r,d as o,e as p}from"./app.6670dc1a.js";const l={},i=a("h1",{id:"frontmatter-title",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),o(),a("code",null,"{{ $frontmatter.title }}")],-1),h={style:{"white-space":"pre-wrap"}},c=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; path relative-to (path) --columns</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>path</code>: Parent shared with the input path</li><li><code>--columns {table}</code>: Optionally operate by column path</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>Can be used only when the input and the argument paths are either both
absolute or both relative. The argument path needs to be a parent of the input
path.
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Find a relative path from two absolute paths</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;/home/viking&#39;</span> <span class="token operator">|</span> path relative-to <span class="token string">&#39;/home&#39;</span>
</code></pre></div><p>Find a relative path from two absolute paths in a column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> ~ <span class="token operator">|</span> path relative-to ~ -c <span class="token punctuation">[</span> name <span class="token punctuation">]</span>
</code></pre></div><p>Find a relative path from two relative paths</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;eggs/bacon/sausage/spam&#39;</span> <span class="token operator">|</span> path relative-to <span class="token string">&#39;eggs/bacon/sausage&#39;</span>
</code></pre></div>`,13);function d(e,u){return s(),n("div",null,[i,a("div",h,r(e.$frontmatter.usage),1),c])}var m=t(l,[["render",d],["__file","path_relative-to.html.vue"]]);export{m as default};