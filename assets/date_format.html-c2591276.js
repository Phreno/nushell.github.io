import{_ as n,p as o,q as r,Q as a,t as s,v as e,a1 as c}from"./framework-344bb0e4.js";const i={},d={id:"frontmatter-title-for-date",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#frontmatter-title-for-date","aria-hidden":"true"},"#",-1),l={class:"command-title"},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; date format (format string) --list</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>format string</code>: the desired date format</li><li><code>--list</code>: lists strftime cheatsheet</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Format a given date-time as a string using the default format (RFC 2822).</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;2021-10-22 20:00:12 +01:00&quot;</span> <span class="token operator">|</span> <span class="token function">date</span> <span class="token function">format</span>
</code></pre></div><p>Format the current date-time using a given format string.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now <span class="token operator">|</span> <span class="token function">date</span> <span class="token function">format</span> <span class="token string">&quot;%Y-%m-%d %H:%M:%S&quot;</span>
</code></pre></div><p>Format the current date using a given format string.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now <span class="token operator">|</span> <span class="token function">date</span> <span class="token function">format</span> <span class="token string">&quot;%Y-%m-%d %H:%M:%S&quot;</span>
</code></pre></div><p>Format a given date using a given format string.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;2021-10-22 20:00:12 +01:00&quot;</span> <span class="token operator">|</span> <span class="token function">date</span> <span class="token function">format</span> <span class="token string">&quot;%Y-%m-%d&quot;</span>
</code></pre></div>`,13);function h(t,g){return o(),r("div",null,[a("h1",d,[p,s(),a("code",null,e(t.$frontmatter.title),1),s(" for date")]),a("div",l,e(t.$frontmatter.date),1),u])}const m=n(i,[["render",h],["__file","date_format.html.vue"]]);export{m as default};
