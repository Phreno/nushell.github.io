import{_ as s,o as r,c as o,a as e,t,d as n,e as c}from"./app.ce0c0699.js";const d={},i={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=n(),p={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; col (column name)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>column name</code>: Name of column to be used</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Creates a named column expression and converts it to a nu object</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> col a <span class="token operator">|</span> into nu
</code></pre></div>`,7);function m(a,_){return r(),o("div",null,[e("h1",i,[l,h,e("code",null,t(a.$frontmatter.title),1)]),e("div",p,t(a.$frontmatter.usage),1),u])}const g=s(d,[["render",m],["__file","col.html.vue"]]);export{g as default};