import{_ as s,u as n,o as r,c as o,a,t,d as l,e as c}from"./app.b8dbd919.js";const d={computed:{frontmatter(){return n().value}}},p={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=l(),h={style:{"white-space":"pre-wrap"}},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; default (default value) (column name)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>default value</code>: the value to use as a default</li><li><code>column name</code>: the name of the column</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Give a default &#39;target&#39; column to all file entries</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> -la <span class="token operator">|</span> default <span class="token string">&#39;nothing&#39;</span> target
</code></pre></div><p>Default the <code>$nothing</code> value in a list</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token variable">$nothing</span>, <span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">|</span> default <span class="token number">3</span>
</code></pre></div>`,9);function f(g,_,k,v,b,e){return r(),o("div",null,[a("h1",p,[i,u,a("code",null,t(e.frontmatter.title),1)]),a("div",h,t(e.frontmatter.usage),1),m])}var $=s(d,[["render",f],["__file","default.html.vue"]]);export{$ as default};
