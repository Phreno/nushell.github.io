import{_ as e,p,q as o,Q as n,t as s,v as t,a1 as c}from"./framework-344bb0e4.js";const l={},r={id:"frontmatter-title-for-expression",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#frontmatter-title-for-expression","aria-hidden":"true"},"#",-1),i={class:"command-title"},k=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; when </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Create a when conditions</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> when <span class="token punctuation">((</span>col a<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token number">4</span>
</code></pre></div><p>Create a when conditions</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> when <span class="token punctuation">((</span>col a<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token number">4</span> <span class="token operator">|</span> when <span class="token punctuation">((</span>col a<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">6</span>
</code></pre></div><p>Create a new column for the dataframe</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">6</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
   <span class="token operator">|</span> into lazy
   <span class="token operator">|</span> with-column <span class="token punctuation">(</span>
       when <span class="token punctuation">((</span>col a<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token number">4</span> <span class="token operator">|</span> otherwise <span class="token number">5</span> <span class="token operator">|</span> as c
     <span class="token punctuation">)</span>
   <span class="token operator">|</span> with-column <span class="token punctuation">(</span>
       when <span class="token punctuation">((</span>col a<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token number">10</span> <span class="token operator">|</span> when <span class="token punctuation">((</span>col a<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token number">6</span> <span class="token operator">|</span> otherwise <span class="token number">0</span> <span class="token operator">|</span> as d
     <span class="token punctuation">)</span>
   <span class="token operator">|</span> collect
</code></pre></div>`,9);function d(a,h){return p(),o("div",null,[n("h1",r,[u,s(),n("code",null,t(a.$frontmatter.title),1),s(" for expression")]),n("div",i,t(a.$frontmatter.expression),1),k])}const b=e(l,[["render",d],["__file","when.html.vue"]]);export{b as default};
