import{_ as r,u as s,o,c as n,a as e,t as a,d as i,e as h}from"./app.68c16707.js";const d={computed:{frontmatter(){return s().value}}},c={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=i(),u={style:{"white-space":"pre-wrap"}},m=h(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; term size --columns --rows</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--columns</code>: Report only the width of the terminal</li><li><code>--rows</code>: Report only the height of the terminal</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Return the width height of the terminal</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> term size
</code></pre></div><p>Return the width (columns) of the terminal</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> term size -c
</code></pre></div><p>Return the height (rows) of the terminal</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> term size -r
</code></pre></div>`,11);function g(_,f,x,v,b,t){return o(),n("div",null,[e("h1",c,[l,p,e("code",null,a(t.frontmatter.title),1)]),e("div",u,a(t.frontmatter.usage),1),m])}var z=r(d,[["render",g],["__file","term_size.html.vue"]]);export{z as default};
