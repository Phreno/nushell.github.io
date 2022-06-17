import{_ as s,u as n,o as r,c as o,a as e,t,d as l,e as c}from"./app.b8dbd919.js";const i={computed:{frontmatter(){return n().value}}},d={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=l(),u={style:{"white-space":"pre-wrap"}},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; cal --year --quarter --month --full-year --week-start --month-names</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--year</code>: Display the year column</li><li><code>--quarter</code>: Display the quarter column</li><li><code>--month</code>: Display the month column</li><li><code>--full-year {int}</code>: Display a year-long calendar for the specified year</li><li><code>--week-start {string}</code>: Display the calendar with the specified day as the first day of the week</li><li><code>--month-names</code>: Display the month names instead of integers</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>This month&#39;s calendar</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cal</span>
</code></pre></div><p>The calendar for all of 2012</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cal</span> --full-year <span class="token number">2012</span>
</code></pre></div><p>This month&#39;s calendar with the week starting on monday</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cal</span> --week-start monday
</code></pre></div>`,11);function f(g,_,y,k,x,a){return r(),o("div",null,[e("h1",d,[h,p,e("code",null,t(a.frontmatter.title),1)]),e("div",u,t(a.frontmatter.usage),1),m])}var v=s(i,[["render",f],["__file","cal.html.vue"]]);export{v as default};
