import{_ as t,u as n,o as r,c as o,a as e,t as s,d as c,e as l}from"./app.68c16707.js";const d={computed:{frontmatter(){return n().value}}},p={id:"frontmatter-title",tabindex:"-1"},i=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=c(),u={style:{"white-space":"pre-wrap"}},f=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; sleep (duration) ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>duration</code>: time to sleep</li><li><code>...rest</code>: additional time</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Sleep for 1sec</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">sleep</span> 1sec
</code></pre></div><p>Sleep for 3sec</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">sleep</span> 1sec 1sec 1sec
</code></pre></div><p>Send output after 1sec</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">sleep</span> 1sec<span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token keyword">done</span>
</code></pre></div>`,11);function g(m,_,x,k,b,a){return r(),o("div",null,[e("h1",p,[i,h,e("code",null,s(a.frontmatter.title),1)]),e("div",u,s(a.frontmatter.usage),1),f])}var S=t(d,[["render",g],["__file","sleep.html.vue"]]);export{S as default};
