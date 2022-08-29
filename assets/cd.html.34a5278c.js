import{_ as t,o as n,c as r,a as e,t as s,d as o,e as c}from"./app.a6df64b1.js";const d={},i={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),l=o(),p={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; cd (path)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>path</code>: the path to change to</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Change to your home directory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> ~
</code></pre></div><p>Change to a directory via abbreviations</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> d/s/9
</code></pre></div><p>Change to the previous working directory ($OLDPWD)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> -
</code></pre></div>`,11);function g(a,m){return n(),r("div",null,[e("h1",i,[h,l,e("code",null,s(a.$frontmatter.title),1)]),e("div",p,s(a.$frontmatter.usage),1),u])}const b=t(d,[["render",g],["__file","cd.html.vue"]]);export{b as default};
