import{_ as t,u as r,o as n,c as o,a,t as s,d as c,e as p}from"./app.b8dbd919.js";const l={computed:{frontmatter(){return r().value}}},h={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=c(),u={style:{"white-space":"pre-wrap"}},m=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; history --clear</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--clear</code>: Clears out the history entries</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get current history length</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">history</span> <span class="token operator">|</span> length
</code></pre></div><p>Show last 5 commands you have ran</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">history</span> <span class="token operator">|</span> last <span class="token number">5</span>
</code></pre></div><p>Search all the commands from history that contains &#39;cargo&#39;</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">history</span> <span class="token operator">|</span> wrap cmd <span class="token operator">|</span> where cmd <span class="token operator">=~</span> cargo
</code></pre></div>`,11);function g(_,f,k,x,v,e){return n(),o("div",null,[a("h1",h,[i,d,a("code",null,s(e.frontmatter.title),1)]),a("div",u,s(e.frontmatter.usage),1),m])}var b=t(l,[["render",g],["__file","history.html.vue"]]);export{b as default};
