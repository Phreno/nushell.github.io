import{_ as n,u as t,o,c as r,a as e,t as s,d as p,e as c}from"./app.b8dbd919.js";const i={computed:{frontmatter(){return t().value}}},d={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=p(),h={style:{"white-space":"pre-wrap"}},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; window (window_size) --stride</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>window_size</code>: the size of each window</li><li><code>--stride {int}</code>: the number of rows to slide over between windows</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>A sliding window of two elements</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">|</span> window <span class="token number">2</span>
</code></pre></div><p>A sliding window of two elements, with a stride of 3</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span>, <span class="token number">4</span>, <span class="token number">5</span>, <span class="token number">6</span>, <span class="token number">7</span>, <span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">|</span> window <span class="token number">2</span> --stride <span class="token number">3</span>
</code></pre></div>`,9);function w(b,k,_,f,g,a){return o(),r("div",null,[e("h1",d,[l,u,e("code",null,s(a.frontmatter.title),1)]),e("div",h,s(a.frontmatter.usage),1),m])}var v=n(i,[["render",w],["__file","window.html.vue"]]);export{v as default};
