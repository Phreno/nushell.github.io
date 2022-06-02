import{_ as s,o as t,c as i,a as e,t as d,d as o,e as n}from"./app.6670dc1a.js";const r={},l=e("h1",{id:"frontmatter-title",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),o(),e("code",null,"{{ $frontmatter.title }}")],-1),c={style:{"white-space":"pre-wrap"}},h=n(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; keybindings list --modifiers --keycodes --modes --events --edits</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--modifiers</code>: list of modifiers</li><li><code>--keycodes</code>: list of keycodes</li><li><code>--modes</code>: list of edit modes</li><li><code>--events</code>: list of reedline event</li><li><code>--edits</code>: list of edit commands</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get list of key modifiers</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> keybindings list -m
</code></pre></div><p>Get list of reedline events and edit commands</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> keybindings list -e -d
</code></pre></div><p>Get list with all the available options</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> keybindings list
</code></pre></div>`,11);function p(a,m){return t(),i("div",null,[l,e("div",c,d(a.$frontmatter.usage),1),h])}var f=s(r,[["render",p],["__file","keybindings_list.html.vue"]]);export{f as default};