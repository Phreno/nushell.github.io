import{_ as n,o as t,c as o,a as e,t as s,d as r,e as i}from"./app.a6df64b1.js";const p={},c={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=r(),h={style:{"white-space":"pre-wrap"}},f=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; open (filename) --raw</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>filename</code>: the filename to use</li><li><code>--raw</code>: open file as raw binary</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Open a file, with structure (based on file extension or SQLite database header)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> myfile.json
</code></pre></div><p>Open a file, as raw bytes</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> myfile.json <span class="token parameter variable">--raw</span>
</code></pre></div><p>Open a file, using the input to get filename</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;myfile.txt&#39;</span> <span class="token operator">|</span> <span class="token function">open</span>
</code></pre></div><p>Open a file, and decode it by the specified encoding</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> myfile.txt <span class="token parameter variable">--raw</span> <span class="token operator">|</span> decode utf-8
</code></pre></div>`,13);function u(a,g){return t(),o("div",null,[e("h1",c,[l,d,e("code",null,s(a.$frontmatter.title),1)]),e("div",h,s(a.$frontmatter.usage),1),f])}const b=n(p,[["render",u],["__file","open.html.vue"]]);export{b as default};
