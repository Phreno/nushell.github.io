import{_ as s,u as r,o,c as n,a as e,t,d as c,e as l}from"./app.68c16707.js";const d={computed:{frontmatter(){return r().value}}},i={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=c(),m={style:{"white-space":"pre-wrap"}},_=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from toml </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Converts toml formatted string to table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;a = 1&#39;</span> <span class="token operator">|</span> from toml
</code></pre></div><p>Converts toml formatted string to table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;a = 1
b = [1, 2]&#39;</span> <span class="token operator">|</span> from toml
</code></pre></div>`,7);function u(f,g,x,v,b,a){return o(),n("div",null,[e("h1",i,[p,h,e("code",null,t(a.frontmatter.title),1)]),e("div",m,t(a.frontmatter.usage),1),_])}var B=s(d,[["render",u],["__file","from_toml.html.vue"]]);export{B as default};
