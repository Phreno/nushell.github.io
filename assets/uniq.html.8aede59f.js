import{_ as a,o as n,c as s,e}from"./app.68c16707.js";const p={},t=e(`<p>Returns unique rows or values from a dataset.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Given a file <code>test.csv</code></p><div class="language-csv ext-csv"><pre class="language-csv"><code><span class="token value">first_name</span><span class="token punctuation">,</span><span class="token value">last_name</span><span class="token punctuation">,</span><span class="token value">rusty_at</span><span class="token punctuation">,</span><span class="token value">type</span>
<span class="token value">Andr\xE9s</span><span class="token punctuation">,</span><span class="token value">Robalino</span><span class="token punctuation">,</span><span class="token value">10/11/2013</span><span class="token punctuation">,</span><span class="token value">A</span>
<span class="token value">Andr\xE9s</span><span class="token punctuation">,</span><span class="token value">Robalino</span><span class="token punctuation">,</span><span class="token value">10/11/2013</span><span class="token punctuation">,</span><span class="token value">A</span>
<span class="token value">Jonathan</span><span class="token punctuation">,</span><span class="token value">Turner</span><span class="token punctuation">,</span><span class="token value">10/12/2013</span><span class="token punctuation">,</span><span class="token value">B</span>
<span class="token value">Yehuda</span><span class="token punctuation">,</span><span class="token value">Katz</span><span class="token punctuation">,</span><span class="token value">10/11/2013</span><span class="token punctuation">,</span><span class="token value">A</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">open</span> test.csv <span class="token operator">|</span> <span class="token function">uniq</span><span class="token variable">\`</span></span>
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502 first_name \u2502 last_name \u2502 rusty_at   \u2502 type</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 Andr\xE9s     \u2502 Robalino  \u2502 <span class="token number">10</span>/11/2013 \u2502 A
 <span class="token number">1</span> \u2502 Jonathan   \u2502 Turner    \u2502 <span class="token number">10</span>/12/2013 \u2502 B
 <span class="token number">2</span> \u2502 Yehuda     \u2502 Katz      \u2502 <span class="token number">10</span>/11/2013 \u2502 A
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">open</span> test.csv <span class="token operator">|</span> get <span class="token builtin class-name">type</span> <span class="token operator">|</span> <span class="token function">uniq</span><span class="token variable">\`</span></span>
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 A
 <span class="token number">1</span> \u2502 B
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><h3 id="counting" tabindex="-1"><a class="header-anchor" href="#counting" aria-hidden="true">#</a> Counting</h3><p><code>--count</code> or <code>-c</code> is the flag to output a <code>count</code> column.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">open</span> test.csv <span class="token operator">|</span> get <span class="token builtin class-name">type</span> <span class="token operator">|</span> <span class="token function">uniq</span> -c<span class="token variable">\`</span></span>
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502 value \u2502 count</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 A     \u2502     <span class="token number">3</span>
 <span class="token number">1</span> \u2502 B     \u2502     <span class="token number">2</span>
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div>`,9),o=[t];function c(l,u){return n(),s("div",null,o)}var k=a(p,[["render",c],["__file","uniq.html.vue"]]);export{k as default};
