import{_ as s,o as n,c as a,e}from"./app.68c16707.js";const t={},o=e(`<p>This command reverses the order of the elements in a sorted table.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> sort-by name
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502 name                       \u2502 type \u2502 readonly \u2502 size   \u2502 accessed       \u2502 modified</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 abaracadabra.txt           \u2502 File \u2502          \u2502 <span class="token number">401</span> B  \u2502 <span class="token number">23</span> minutes ago \u2502 <span class="token number">16</span> minutes ago
 <span class="token number">1</span> \u2502 coww.txt                   \u2502 File \u2502          \u2502  <span class="token number">24</span> B  \u2502 <span class="token number">22</span> minutes ago \u2502 <span class="token number">17</span> minutes ago
 <span class="token number">2</span> \u2502 randomweirdstuff.txt       \u2502 File \u2502          \u2502 <span class="token number">197</span> B  \u2502 <span class="token number">21</span> minutes ago \u2502 <span class="token number">18</span> minutes ago
 <span class="token number">3</span> \u2502 youshouldeatmorecereal.txt \u2502 File \u2502          \u2502 <span class="token number">768</span> B  \u2502 <span class="token number">30</span> seconds ago \u2502 now
 <span class="token number">4</span> \u2502 zeusiscrazy.txt            \u2502 File \u2502          \u2502 <span class="token number">556</span> B  \u2502 <span class="token number">22</span> minutes ago \u2502 <span class="token number">18</span> minutes ago
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> sort-by name <span class="token operator">|</span> reverse
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502 name                       \u2502 type \u2502 readonly \u2502 size   \u2502 accessed       \u2502 modified</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 zeusiscrazy.txt            \u2502 File \u2502          \u2502 <span class="token number">556</span> B  \u2502 <span class="token number">22</span> minutes ago \u2502 <span class="token number">19</span> minutes ago
 <span class="token number">1</span> \u2502 youshouldeatmorecereal.txt \u2502 File \u2502          \u2502 <span class="token number">768</span> B  \u2502 <span class="token number">39</span> seconds ago \u2502 <span class="token number">18</span> seconds ago
 <span class="token number">2</span> \u2502 randomweirdstuff.txt       \u2502 File \u2502          \u2502 <span class="token number">197</span> B  \u2502 <span class="token number">21</span> minutes ago \u2502 <span class="token number">18</span> minutes ago
 <span class="token number">3</span> \u2502 coww.txt                   \u2502 File \u2502          \u2502  <span class="token number">24</span> B  \u2502 <span class="token number">22</span> minutes ago \u2502 <span class="token number">18</span> minutes ago
 <span class="token number">4</span> \u2502 abaracadabra.txt           \u2502 File \u2502          \u2502 <span class="token number">401</span> B  \u2502 <span class="token number">23</span> minutes ago \u2502 <span class="token number">16</span> minutes ago
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> sort-by size
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502 name                       \u2502 type \u2502 readonly \u2502 size   \u2502 accessed       \u2502 modified</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 coww.txt                   \u2502 File \u2502          \u2502  <span class="token number">24</span> B  \u2502 <span class="token number">22</span> minutes ago \u2502 <span class="token number">18</span> minutes ago
 <span class="token number">1</span> \u2502 randomweirdstuff.txt       \u2502 File \u2502          \u2502 <span class="token number">197</span> B  \u2502 <span class="token number">21</span> minutes ago \u2502 <span class="token number">18</span> minutes ago
 <span class="token number">2</span> \u2502 abaracadabra.txt           \u2502 File \u2502          \u2502 <span class="token number">401</span> B  \u2502 <span class="token number">23</span> minutes ago \u2502 <span class="token number">16</span> minutes ago
 <span class="token number">3</span> \u2502 zeusiscrazy.txt            \u2502 File \u2502          \u2502 <span class="token number">556</span> B  \u2502 <span class="token number">22</span> minutes ago \u2502 <span class="token number">19</span> minutes ago
 <span class="token number">4</span> \u2502 youshouldeatmorecereal.txt \u2502 File \u2502          \u2502 <span class="token number">768</span> B  \u2502 a minute ago   \u2502 <span class="token number">26</span> seconds ago
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> sort-by size <span class="token operator">|</span> reverse
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502 name                       \u2502 type \u2502 readonly \u2502 size   \u2502 accessed       \u2502 modified</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 youshouldeatmorecereal.txt \u2502 File \u2502          \u2502 <span class="token number">768</span> B  \u2502 a minute ago   \u2502 <span class="token number">32</span> seconds ago
 <span class="token number">1</span> \u2502 zeusiscrazy.txt            \u2502 File \u2502          \u2502 <span class="token number">556</span> B  \u2502 <span class="token number">22</span> minutes ago \u2502 <span class="token number">19</span> minutes ago
 <span class="token number">2</span> \u2502 abaracadabra.txt           \u2502 File \u2502          \u2502 <span class="token number">401</span> B  \u2502 <span class="token number">23</span> minutes ago \u2502 <span class="token number">16</span> minutes ago
 <span class="token number">3</span> \u2502 randomweirdstuff.txt       \u2502 File \u2502          \u2502 <span class="token number">197</span> B  \u2502 <span class="token number">21</span> minutes ago \u2502 <span class="token number">18</span> minutes ago
 <span class="token number">4</span> \u2502 coww.txt                   \u2502 File \u2502          \u2502  <span class="token number">24</span> B  \u2502 <span class="token number">22</span> minutes ago \u2502 <span class="token number">18</span> minutes ago
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div>`,6),p=[o];function r(c,l){return n(),a("div",null,p)}var u=s(t,[["render",r],["__file","reverse.html.vue"]]);export{u as default};
