import{_ as t,u as n,o,c as r,a,t as s,d as p,e as c}from"./app.68c16707.js";const l={computed:{frontmatter(){return n().value}}},i={id:"frontmatter-title",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=p(),u={style:{"white-space":"pre-wrap"}},g=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; path parse --columns --extension</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--columns {table}</code>: Optionally operate by column path</li><li><code>--extension {string}</code>: Manually supply the extension (without the dot)</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>Each path is split into a table with &#39;parent&#39;, &#39;stem&#39; and &#39;extension&#39; fields.
On Windows, an extra &#39;prefix&#39; column is added.
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Parse a path</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;/home/viking/spam.txt&#39;</span> <span class="token operator">|</span> path parse
</code></pre></div><p>Replace a complex extension</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;/home/viking/spam.tar.gz&#39;</span> <span class="token operator">|</span> path parse -e tar.gz <span class="token operator">|</span> upsert extension <span class="token punctuation">{</span> <span class="token string">&#39;txt&#39;</span> <span class="token punctuation">}</span>
</code></pre></div><p>Ignore the extension</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;/etc/conf.d&#39;</span> <span class="token operator">|</span> path parse -e <span class="token string">&#39;&#39;</span>
</code></pre></div><p>Parse all paths under the &#39;name&#39; column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> path parse -c <span class="token punctuation">[</span> name <span class="token punctuation">]</span>
</code></pre></div>`,15);function m(x,_,k,f,v,e){return o(),r("div",null,[a("h1",i,[d,h,a("code",null,s(e.frontmatter.title),1)]),a("div",u,s(e.frontmatter.usage),1),g])}var y=t(l,[["render",m],["__file","path_parse.html.vue"]]);export{y as default};
