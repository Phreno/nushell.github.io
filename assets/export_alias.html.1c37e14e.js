import{_ as t,o as n,c as r,a as e,t as s,d as l,e as o}from"./app.a6df64b1.js";const i={},d={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=l(),p={style:{"white-space":"pre-wrap"}},u=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; export alias (name) (initial_value)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>name</code>: name of the alias</li><li><code>initial_value</code>: equals sign followed by value</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nushell.html
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>export an alias of ll to ls -l, from a module</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">export</span> <span class="token builtin class-name">alias</span> ll <span class="token operator">=</span> <span class="token function">ls</span> <span class="token parameter variable">-l</span>
</code></pre></div>`,9);function m(a,_){return n(),r("div",null,[e("h1",d,[c,h,e("code",null,s(a.$frontmatter.title),1)]),e("div",p,s(a.$frontmatter.usage),1),u])}const x=t(i,[["render",m],["__file","export_alias.html.vue"]]);export{x as default};
