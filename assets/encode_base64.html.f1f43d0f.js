import{_ as t,o as n,c as r,a as e,t as s,d as c,e as o}from"./app.a6df64b1.js";const d={},i={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=c(),p={style:{"white-space":"pre-wrap"}},u=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; encode base64 ...rest --character-set</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally base64 encode data by column paths</li><li><code>--character-set {string}</code>: specify the character rules for encoding the input. Valid values are &#39;standard&#39;, &#39;standard-no-padding&#39;, &#39;url-safe&#39;, &#39;url-safe-no-padding&#39;,&#39;binhex&#39;, &#39;bcrypt&#39;, &#39;crypt&#39;</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Base64 encode a string with default settings</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;Some Data&#39;</span> <span class="token operator">|</span> encode base64
</code></pre></div><p>Base64 encode a string with the binhex character set</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;Some Data&#39;</span> <span class="token operator">|</span> encode base64 --character-set binhex
</code></pre></div>`,9);function g(a,_){return n(),r("div",null,[e("h1",i,[l,h,e("code",null,s(a.$frontmatter.title),1)]),e("div",p,s(a.$frontmatter.usage),1),u])}const m=t(d,[["render",g],["__file","encode_base64.html.vue"]]);export{m as default};
