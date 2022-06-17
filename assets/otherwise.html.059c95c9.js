import{_ as e,u as t,o as p,c as o,a,t as s,d as c,e as r}from"./app.b8dbd919.js";const l={computed:{frontmatter(){return t().value}}},u={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),k=c(),h={style:{"white-space":"pre-wrap"}},d=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; otherwise (otherwise expression)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>otherwise expression</code>: expressioini to apply when no when predicate matches</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Create a when conditions</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> when <span class="token punctuation">((</span>col a<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token number">4</span> <span class="token operator">|</span> otherwise <span class="token number">5</span>
</code></pre></div><p>Create a when conditions</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> when <span class="token punctuation">((</span>col a<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token number">4</span> <span class="token operator">|</span> when <span class="token punctuation">((</span>col a<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">6</span> <span class="token operator">|</span> otherwise <span class="token number">0</span>
</code></pre></div><p>Create a new column for the dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">6</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
   <span class="token operator">|</span> to-lazy
   <span class="token operator">|</span> with-column <span class="token punctuation">(</span>
       when <span class="token punctuation">((</span>col a<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token number">4</span> <span class="token operator">|</span> otherwise <span class="token number">5</span> <span class="token operator">|</span> as c
     <span class="token punctuation">)</span>
   <span class="token operator">|</span> with-column <span class="token punctuation">(</span>
       when <span class="token punctuation">((</span>col a<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token number">10</span> <span class="token operator">|</span> when <span class="token punctuation">((</span>col a<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token number">6</span> <span class="token operator">|</span> otherwise <span class="token number">0</span> <span class="token operator">|</span> as d
     <span class="token punctuation">)</span>
   <span class="token operator">|</span> collect
</code></pre></div>`,11);function m(b,g,w,_,f,n){return p(),o("div",null,[a("h1",u,[i,k,a("code",null,s(n.frontmatter.title),1)]),a("div",h,s(n.frontmatter.usage),1),d])}var v=e(l,[["render",m],["__file","otherwise.html.vue"]]);export{v as default};
