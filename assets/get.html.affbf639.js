import{_ as t,o as s,c as n,a as e,t as r,d as o,e as c}from"./app.6670dc1a.js";const l={},p=e("h1",{id:"frontmatter-title",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),o(),e("code",null,"{{ $frontmatter.title }}")],-1),i={style:{"white-space":"pre-wrap"}},d=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; get (cell_path) ...rest --ignore-errors</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>cell_path</code>: the cell path to the data</li><li><code>...rest</code>: additional cell paths</li><li><code>--ignore-errors</code>: return nothing if path can&#39;t be found</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Extract the name of files as a list</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> get name
</code></pre></div><p>Extract the name of the 3rd entry of a file list</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> get name.2
</code></pre></div><p>Extract the name of the 3rd entry of a file list (alternative)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> get <span class="token number">2</span>.name
</code></pre></div><p>Extract the cpu list from the sys information record</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get cpu
</code></pre></div>`,13);function h(a,g){return s(),n("div",null,[p,e("div",i,r(a.$frontmatter.usage),1),d])}var f=t(l,[["render",h],["__file","get.html.vue"]]);export{f as default};