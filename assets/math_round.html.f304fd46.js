import{_ as t,u as n,o as r,c as o,a,t as s,d as p,e as c}from"./app.b8dbd919.js";const i={computed:{frontmatter(){return n().value}}},d={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=p(),h={style:{"white-space":"pre-wrap"}},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; math round --precision</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--precision {number}</code>: digits of precision</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Apply the round function to a list of numbers</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1.5</span> <span class="token number">2.3</span> -3.1<span class="token punctuation">]</span> <span class="token operator">|</span> math round
</code></pre></div><p>Apply the round function with precision specified</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1.555</span> <span class="token number">2.333</span> -3.111<span class="token punctuation">]</span> <span class="token operator">|</span> math round -p <span class="token number">2</span>
</code></pre></div>`,9);function _(f,g,b,k,x,e){return r(),o("div",null,[a("h1",d,[l,u,a("code",null,s(e.frontmatter.title),1)]),a("div",h,s(e.frontmatter.usage),1),m])}var y=t(i,[["render",_],["__file","math_round.html.vue"]]);export{y as default};
