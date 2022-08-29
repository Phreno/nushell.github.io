import{_ as s,o as r,c as n,a as e,t,d as o,e as c}from"./app.a6df64b1.js";const i={},d={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=o(),p={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; seq char ...rest --separator --terminator</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: sequence chars</li><li><code>--separator {string}</code>: separator character (defaults to \\n)</li><li><code>--terminator {string}</code>: terminator character (defaults to \\n)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>sequence a to e with newline separator</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> char a e
</code></pre></div><p>sequence a to e with pipe separator separator</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> char <span class="token parameter variable">-s</span> <span class="token string">&#39;|&#39;</span> a e
</code></pre></div>`,9);function _(a,m){return r(),n("div",null,[e("h1",d,[l,h,e("code",null,t(a.$frontmatter.title),1)]),e("div",p,t(a.$frontmatter.usage),1),u])}const g=s(i,[["render",_],["__file","seq_char.html.vue"]]);export{g as default};
