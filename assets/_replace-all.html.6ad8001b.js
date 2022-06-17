import{_ as r,u as s,o as n,c,a as e,t,d as o,e as l}from"./app.b8dbd919.js";const d={computed:{frontmatter(){return s().value}}},i={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=o(),u={style:{"white-space":"pre-wrap"}},_=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; replace-all --pattern --replace</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--pattern {string}</code>: Regex pattern to be matched</li><li><code>--replace {string}</code>: replacing string</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Replaces string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>abac abac abac<span class="token punctuation">]</span> <span class="token operator">|</span> to-df <span class="token operator">|</span> replace-all -p a -r A
</code></pre></div>`,7);function m(g,f,x,b,k,a){return n(),c("div",null,[e("h1",i,[p,h,e("code",null,t(a.frontmatter.title),1)]),e("div",u,t(a.frontmatter.usage),1),_])}var B=r(d,[["render",m],["__file","_replace-all.html.vue"]]);export{B as default};
