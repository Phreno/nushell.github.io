import{_ as s,o as n,c as o,a as e,t,d as r,e as i}from"./app.ea1b8c3e.js";const d={},c={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),l=r(),p={style:{"white-space":"pre-wrap"}},_=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; date list-timezone </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Show timezone(s) that contains &#39;Shanghai&#39;</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> list-timezone <span class="token operator">|</span> where timezone <span class="token operator">=~</span> Shanghai
</code></pre></div>`,5);function m(a,u){return n(),o("div",null,[e("h1",c,[h,l,e("code",null,t(a.$frontmatter.title),1)]),e("div",p,t(a.$frontmatter.usage),1),_])}var g=s(d,[["render",m],["__file","date_list-timezone.html.vue"]]);export{g as default};
