import{_ as s,u as n,o,c as r,a,t,d as c,e as i}from"./app.68c16707.js";const p={computed:{frontmatter(){return n().value}}},d={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=c(),h={style:{"white-space":"pre-wrap"}},m=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; export </code></p><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>This command is a parser keyword. For details, check
https://www.nushell.sh/book/thinking_in_nushell.html#parsing-and-evaluation-are-different-stages
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Export a definition from a module</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> module utils <span class="token punctuation">{</span> <span class="token builtin class-name">export</span> def my-command <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;hello&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> use utils my-command<span class="token punctuation">;</span> my-command
</code></pre></div>`,7);function _(f,x,g,k,v,e){return o(),r("div",null,[a("h1",d,[l,u,a("code",null,t(e.frontmatter.title),1)]),a("div",h,t(e.frontmatter.usage),1),m])}var w=s(p,[["render",_],["__file","export.html.vue"]]);export{w as default};
