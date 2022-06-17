import{_ as t,u as n,o as r,c as o,a,t as s,d as i,e as c}from"./app.b8dbd919.js";const p={computed:{frontmatter(){return n().value}}},l={id:"frontmatter-title",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=i(),u={style:{"white-space":"pre-wrap"}},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; split row (separator) --number</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>separator</code>: the character that denotes what separates rows</li><li><code>--number {int}</code>: Split into maximum number of items</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Split a string into rows of char</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;abc&#39;</span> <span class="token operator">|</span> <span class="token function">split</span> row <span class="token string">&#39;&#39;</span>
</code></pre></div><p>Split a string into rows by the specified separator</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;a--b--c&#39;</span> <span class="token operator">|</span> <span class="token function">split</span> row <span class="token string">&#39;--&#39;</span>
</code></pre></div>`,9);function _(g,f,b,k,x,e){return r(),o("div",null,[a("h1",l,[d,h,a("code",null,s(e.frontmatter.title),1)]),a("div",u,s(e.frontmatter.usage),1),m])}var v=t(p,[["render",_],["__file","split_row.html.vue"]]);export{v as default};
