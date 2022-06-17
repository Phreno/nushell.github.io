import{_ as t,u as n,o as r,c as o,a,t as s,d as c,e as l}from"./app.b8dbd919.js";const d={computed:{frontmatter(){return n().value}}},i={id:"frontmatter-title",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=c(),m={style:{"white-space":"pre-wrap"}},u=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; help ...rest --find</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: the name of command to get help on</li><li><code>--find {string}</code>: string to find in command names, usage, and search terms</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>show all commands and sub-commands</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">help</span> commands
</code></pre></div><p>show help for single command</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">help</span> match
</code></pre></div><p>show help for single sub-command</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">help</span> str lpad
</code></pre></div><p>search for string in command names, usage and search terms</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">help</span> --find char
</code></pre></div>`,13);function g(f,_,b,x,v,e){return r(),o("div",null,[a("h1",i,[p,h,a("code",null,s(e.frontmatter.title),1)]),a("div",m,s(e.frontmatter.usage),1),u])}var w=t(d,[["render",g],["__file","help.html.vue"]]);export{w as default};
