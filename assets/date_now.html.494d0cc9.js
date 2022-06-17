import{_ as s,u as n,o,c as r,a,t,d as c,e as p}from"./app.b8dbd919.js";const d={computed:{frontmatter(){return n().value}}},i={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=c(),h={style:{"white-space":"pre-wrap"}},g=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; date now </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get the current date and display it in a given format string.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now <span class="token operator">|</span> <span class="token function">date</span> <span class="token function">format</span> <span class="token string">&quot;%Y-%m-%d %H:%M:%S&quot;</span>
</code></pre></div><p>Get the time duration from 2019-04-30 to now</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">(</span>date now<span class="token punctuation">)</span> - <span class="token number">2019</span>-05-01
</code></pre></div><p>Get the time duration since a more accurate time</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">(</span>date now<span class="token punctuation">)</span> - <span class="token number">2019</span>-05-01T04:12:05.20+08:00
</code></pre></div><p>Get current time in full RFC3339 format with timezone</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now <span class="token operator">|</span> debug
</code></pre></div>`,11);function m(f,_,k,b,v,e){return o(),r("div",null,[a("h1",i,[l,u,a("code",null,t(e.frontmatter.title),1)]),a("div",h,t(e.frontmatter.usage),1),g])}var w=s(d,[["render",m],["__file","date_now.html.vue"]]);export{w as default};
