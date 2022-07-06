import{_ as s,o as r,c as o,a as e,t,d as n,e as c}from"./app.ea1b8c3e.js";const d={},i={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=n(),h={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from json --objects</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--objects</code>: treat each line as a separate value</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Converts json formatted string to table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;{ &quot;a&quot;: 1 }&#39;</span> <span class="token operator">|</span> from json
</code></pre></div><p>Converts json formatted string to table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;{ &quot;a&quot;: 1, &quot;b&quot;: [1, 2] }&#39;</span> <span class="token operator">|</span> from json
</code></pre></div>`,9);function m(a,f){return r(),o("div",null,[e("h1",i,[l,p,e("code",null,t(a.$frontmatter.title),1)]),e("div",h,t(a.$frontmatter.usage),1),u])}var g=s(d,[["render",m],["__file","from_json.html.vue"]]);export{g as default};
