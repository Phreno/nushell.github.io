import{_ as t,o as n,c as r,a as e,t as s,d as o,e as c}from"./app.a6df64b1.js";const i={},l={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=o(),u={style:{"white-space":"pre-wrap"}},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; cumulative (type) --reverse</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>type</code>: rolling operation</li><li><code>--reverse</code>: Reverse cumulative calculation</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Cumulative sum for a series</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> cumulative <span class="token function">sum</span>
</code></pre></div>`,7);function m(a,_){return n(),r("div",null,[e("h1",l,[p,d,e("code",null,s(a.$frontmatter.title),1)]),e("div",u,s(a.$frontmatter.usage),1),h])}const k=t(i,[["render",m],["__file","_cumulative.html.vue"]]);export{k as default};
