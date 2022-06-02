import{_ as a,o as r,c as s,a as e,t as n,d,e as o}from"./app.6670dc1a.js";const c={},i=e("h1",{id:"frontmatter-title",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),d(),e("code",null,"{{ $frontmatter.title }}")],-1),l={style:{"white-space":"pre-wrap"}},h=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; run-external ...rest --redirect-stdout --redirect-stderr</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: external command to run</li><li><code>--redirect-stdout</code>: redirect-stdout</li><li><code>--redirect-stderr</code>: redirect-stderr</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Run an external command</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> run-external <span class="token string">&quot;echo&quot;</span> <span class="token string">&quot;-n&quot;</span> <span class="token string">&quot;hello&quot;</span>
</code></pre></div>`,7);function u(t,p){return r(),s("div",null,[i,e("div",l,n(t.$frontmatter.usage),1),h])}var x=a(c,[["render",u],["__file","run-external.html.vue"]]);export{x as default};