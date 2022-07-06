import{_ as s,o as t,c as o,a as e,t as n,d as i,e as r}from"./app.ea1b8c3e.js";const c={},l={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=i(),u={style:{"white-space":"pre-wrap"}},h=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; register (plugin) (signature) --encoding --shell</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>plugin</code>: path of executable for plugin</li><li><code>signature</code>: Block with signature description as json object</li><li><code>--encoding {string}</code>: Encoding used to communicate with plugin. Options: [capnp, json]</li><li><code>--shell {path}</code>: path of shell used to run plugin (cmd, sh, python, etc)</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nushell.html
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Register <code>nu_plugin_query</code> plugin from ~/.cargo/bin/ dir</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> register -e json ~/.cargo/bin/nu_plugin_query
</code></pre></div><p>Register <code>nu_plugin_query</code> plugin from <code>nu -c</code>(plugin will be available in that nu session only)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> plugin <span class="token operator">=</span> <span class="token punctuation">((</span>which nu<span class="token punctuation">)</span>.path.0 <span class="token operator">|</span> path <span class="token function">dirname</span> <span class="token operator">|</span> path <span class="token function">join</span> <span class="token string">&#39;nu_plugin_query&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> nu -c <span class="token string">$&#39;register -e json ($plugin); version&#39;</span>
</code></pre></div>`,11);function g(a,_){return t(),o("div",null,[e("h1",l,[p,d,e("code",null,n(a.$frontmatter.title),1)]),e("div",u,n(a.$frontmatter.usage),1),h])}var f=s(c,[["render",g],["__file","register.html.vue"]]);export{f as default};
