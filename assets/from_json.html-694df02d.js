import{_ as o,p as r,q as n,Q as a,t,v as s,a1 as c}from"./framework-344bb0e4.js";const d={},i={id:"frontmatter-title-for-formats",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-formats","aria-hidden":"true"},"#",-1),p={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from json --objects</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--objects</code> <code>(-o)</code>: treat each line as a separate value</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Converts json formatted string to table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;{ &quot;a&quot;: 1 }&#39;</span> <span class="token operator">|</span> from json
</code></pre></div><p>Converts json formatted string to table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;{ &quot;a&quot;: 1, &quot;b&quot;: [1, 2] }&#39;</span> <span class="token operator">|</span> from json
</code></pre></div>`,9);function f(e,m){return r(),n("div",null,[a("h1",i,[l,t(),a("code",null,s(e.$frontmatter.title),1),t(" for formats")]),a("div",p,s(e.$frontmatter.formats),1),h])}const _=o(d,[["render",f],["__file","from_json.html.vue"]]);export{_ as default};