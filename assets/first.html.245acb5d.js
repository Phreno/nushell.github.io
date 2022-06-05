import{_ as n,o as s,c as a,e}from"./app.68c16707.js";const p={},t=e(`<p>Use <code>first</code> to retrieve the first &quot;n&quot; rows of a table. <code>first</code> has a required amount parameter that indicates how many rows you would like returned. If more than one row is returned, an index column will be included showing the row number.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> <span class="token operator">|</span> first <span class="token number">1</span>
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 pid     \u2502 <span class="token number">14733</span>
 name    \u2502 nu_plugin_core_p
 status  \u2502 Running
 cpu     \u2502 <span class="token number">4.1229</span>
 mem     \u2502 <span class="token number">2.1</span> MB
 virtual \u2502 <span class="token number">4.8</span> GB
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> <span class="token operator">|</span> first <span class="token number">5</span>
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502 pid   \u2502 name             \u2502 status  \u2502 cpu      \u2502 mem     \u2502 virtual</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 <span class="token number">14747</span> \u2502 nu_plugin_core_p \u2502 Running \u2502   <span class="token number">3.5653</span> \u2502  <span class="token number">2.1</span> MB \u2502  <span class="token number">4.8</span> GB
 <span class="token number">1</span> \u2502 <span class="token number">14735</span> \u2502 Python           \u2502 Running \u2502 <span class="token number">100.0008</span> \u2502 <span class="token number">27.4</span> MB \u2502  <span class="token number">5.4</span> GB
 <span class="token number">2</span> \u2502 <span class="token number">14734</span> \u2502 mdworker_shared  \u2502 Running \u2502   <span class="token number">0.0000</span> \u2502 <span class="token number">18.4</span> MB \u2502  <span class="token number">4.7</span> GB
 <span class="token number">3</span> \u2502 <span class="token number">14729</span> \u2502 mdworker_shared  \u2502 Running \u2502   <span class="token number">0.0000</span> \u2502  <span class="token number">8.2</span> MB \u2502  <span class="token number">5.0</span> GB
 <span class="token number">4</span> \u2502 <span class="token number">14728</span> \u2502 mdworker_shared  \u2502 Running \u2502   <span class="token number">0.0000</span> \u2502  <span class="token number">8.0</span> MB \u2502  <span class="token number">4.9</span> GB
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div>`,4),r=[t];function o(c,l){return s(),a("div",null,r)}var m=n(p,[["render",o],["__file","first.html.vue"]]);export{m as default};
