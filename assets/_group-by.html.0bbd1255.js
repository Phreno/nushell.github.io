import{_ as t,o as p,c as o,a as n,t as s,d as e,e as c}from"./app.a6df64b1.js";const u={},r={id:"frontmatter-title",tabindex:"-1"},l=n("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),i=e(),k={style:{"white-space":"pre-wrap"}},d=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; group-by ...Group by expressions</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...Group by expressions</code>: Expression(s) that define the lazy group by</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Group by and perform an aggregation</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">6</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token operator">|</span> into <span class="token function">df</span>
    <span class="token operator">|</span> group-by a
    <span class="token operator">|</span> agg <span class="token punctuation">[</span>
        <span class="token punctuation">(</span>col b <span class="token operator">|</span> min <span class="token operator">|</span> as <span class="token string">&quot;b_min&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">(</span>col b <span class="token operator">|</span> max <span class="token operator">|</span> as <span class="token string">&quot;b_max&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">(</span>col b <span class="token operator">|</span> <span class="token function">sum</span> <span class="token operator">|</span> as <span class="token string">&quot;b_sum&quot;</span><span class="token punctuation">)</span>
     <span class="token punctuation">]</span>
</code></pre></div><p>Group by and perform an aggregation</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">6</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token operator">|</span> into lazy
    <span class="token operator">|</span> group-by a
    <span class="token operator">|</span> agg <span class="token punctuation">[</span>
        <span class="token punctuation">(</span>col b <span class="token operator">|</span> min <span class="token operator">|</span> as <span class="token string">&quot;b_min&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">(</span>col b <span class="token operator">|</span> max <span class="token operator">|</span> as <span class="token string">&quot;b_max&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">(</span>col b <span class="token operator">|</span> <span class="token function">sum</span> <span class="token operator">|</span> as <span class="token string">&quot;b_sum&quot;</span><span class="token punctuation">)</span>
     <span class="token punctuation">]</span>
    <span class="token operator">|</span> collect
</code></pre></div>`,9);function b(a,m){return p(),o("div",null,[n("h1",r,[l,i,n("code",null,s(a.$frontmatter.title),1)]),n("div",k,s(a.$frontmatter.usage),1),d])}const g=t(u,[["render",b],["__file","_group-by.html.vue"]]);export{g as default};
