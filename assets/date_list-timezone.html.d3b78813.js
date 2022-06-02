import{_ as t,o as s,c as n,a as e,t as r,d as o,e as i}from"./app.6670dc1a.js";const c={},d=e("h1",{id:"frontmatter-title",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),o(),e("code",null,"{{ $frontmatter.title }}")],-1),h={style:{"white-space":"pre-wrap"}},l=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; date list-timezone </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Show timezone(s) that contains &#39;Shanghai&#39;</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> list-timezone <span class="token operator">|</span> where timezone <span class="token operator">=~</span> Shanghai
</code></pre></div>`,5);function p(a,m){return s(),n("div",null,[d,e("div",h,r(a.$frontmatter.usage),1),l])}var u=t(c,[["render",p],["__file","date_list-timezone.html.vue"]]);export{u as default};