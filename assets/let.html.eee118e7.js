import{_ as a,o as s,c as e,e as n}from"./app.6670dc1a.js";const t={},l=n(`<p>Create a variable and give it a value.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>equals<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>expr<span class="token operator">&gt;</span> <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>&lt;name&gt;</code> the name of the variable</li><li><code>&lt;equals&gt;</code> the equals sign</li><li><code>&lt;expr&gt;</code> the value for the variable</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Assign a simple value to a variable</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> x <span class="token operator">=</span> <span class="token number">3</span>
</code></pre></div><p>Assign the result of an expression to a variable</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> result <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">3</span> + <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$result</span>
</code></pre></div><p>Create a variable using the full name</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> <span class="token variable">$three</span> <span class="token operator">=</span> <span class="token number">3</span>
</code></pre></div>`,14),p=[l];function o(r,c){return s(),e("div",null,p)}var h=a(t,[["render",o],["__file","let.html.vue"]]);export{h as default};