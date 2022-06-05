import{_ as n,u as t,o,c as r,a,t as e,d as p,e as c}from"./app.68c16707.js";const i={computed:{frontmatter(){return t().value}}},l={id:"frontmatter-title",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=p(),h={style:{"white-space":"pre-wrap"}},k=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr set-with-idx (value) --indices</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>value</code>: value to be inserted in series</li><li><code>--indices {any}</code>: list of indices indicating where to set the value</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Set value in selected rows from series</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> series <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">1</span> <span class="token number">5</span> <span class="token number">2</span> <span class="token number">4</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> indices <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$series</span> <span class="token operator">|</span> dfr set-with-idx <span class="token number">6</span> -i <span class="token variable">$indices</span>
</code></pre></div>`,7);function m(f,_,b,x,v,s){return o(),r("div",null,[a("h1",l,[d,u,a("code",null,e(s.frontmatter.title),1)]),a("div",h,e(s.frontmatter.usage),1),k])}var w=n(i,[["render",m],["__file","dfr_set-with-idx.html.vue"]]);export{w as default};
