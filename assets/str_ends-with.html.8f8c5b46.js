import{_ as r,o as n,c as i,a as e,t,d as a,e as o}from"./app.8af834da.js";const c={},d={id:"frontmatter-title-for-strings",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),l=a(),p=a(" for strings"),g={class:"command-title"},_=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str ends-with (string) ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>string</code>: the string to match</li><li><code>...rest</code>: optionally matches suffix of text by column paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Checks if string ends with &#39;.rb&#39;</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;my_library.rb&#39;</span> <span class="token operator">|</span> str ends-with <span class="token string">&#39;.rb&#39;</span>
</code></pre></div><p>Checks if string ends with &#39;.txt&#39;</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;my_library.rb&#39;</span> <span class="token operator">|</span> str ends-with <span class="token string">&#39;.txt&#39;</span>
</code></pre></div>`,9);function f(s,m){return n(),i("div",null,[e("h1",d,[h,l,e("code",null,t(s.$frontmatter.title),1),p]),e("div",g,t(s.$frontmatter.strings),1),_])}const b=r(c,[["render",f],["__file","str_ends-with.html.vue"]]);export{b as default};