import{_ as t,o as s,c as o,a as e,t as n,d as r,e as i}from"./app.ea1b8c3e.js";const c={},l={id:"frontmatter-title",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=r(),h={style:{"white-space":"pre-wrap"}},u=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; export env (name) (block)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>name</code>: name of the environment variable</li><li><code>block</code>: body of the environment variable definition</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nushell.html
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Import and evaluate environment variable from a module</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> module foo <span class="token punctuation">{</span> <span class="token builtin class-name">export</span> <span class="token function">env</span> FOO_ENV <span class="token punctuation">{</span> <span class="token string">&quot;BAZ&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> use foo FOO_ENV<span class="token punctuation">;</span> <span class="token variable">$env</span>.FOO_ENV
</code></pre></div>`,9);function m(a,_){return s(),o("div",null,[e("h1",l,[d,p,e("code",null,n(a.$frontmatter.title),1)]),e("div",h,n(a.$frontmatter.usage),1),u])}var v=t(c,[["render",m],["__file","export_env.html.vue"]]);export{v as default};
