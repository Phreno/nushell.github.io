import{_ as n,u as t,o as r,c,a,t as s,d as o,e as p}from"./app.68c16707.js";const l={computed:{frontmatter(){return t().value}}},i={id:"frontmatter-title",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=o(),h={style:{"white-space":"pre-wrap"}},m=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; math variance --sample</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--sample</code>: calculate sample variance</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get the variance of a list of numbers</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">|</span> math variance
</code></pre></div><p>Get the sample variance of a list of numbers</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">|</span> math variance -s
</code></pre></div>`,9);function _(b,k,f,g,v,e){return r(),c("div",null,[a("h1",i,[d,u,a("code",null,s(e.frontmatter.title),1)]),a("div",h,s(e.frontmatter.usage),1),m])}var B=n(l,[["render",_],["__file","math_variance.html.vue"]]);export{B as default};
