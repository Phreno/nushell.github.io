import{_ as t,p as r,q as p,Q as a,t as e,v as n,a1 as c}from"./framework-344bb0e4.js";const o={},l={id:"frontmatter-title-for-strings",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),d={class:"command-title"},g=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str replace (find) (replace) ...rest --all --no-expand --string</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>find</code>: the pattern to find</li><li><code>replace</code>: the replacement string</li><li><code>...rest</code>: For a data structure input, operate on strings at the given cell paths</li><li><code>--all</code> <code>(-a)</code>: replace all occurrences of the pattern</li><li><code>--no-expand</code> <code>(-n)</code>: do not expand capture groups (like $name) in the replacement string</li><li><code>--string</code> <code>(-s)</code>: match the pattern as a substring of the input, instead of a regular expression</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Find and replace contents with capture group</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;my_library.rb&#39;</span> <span class="token operator">|</span> str replace <span class="token string">&#39;(.+).rb&#39;</span> <span class="token string">&#39;$1.nu&#39;</span>
</code></pre></div><p>Find and replace all occurrences of find string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;abc abc abc&#39;</span> <span class="token operator">|</span> str replace <span class="token parameter variable">-a</span> <span class="token string">&#39;b&#39;</span> <span class="token string">&#39;z&#39;</span>
</code></pre></div><p>Find and replace all occurrences of find string in table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>ColA ColB ColC<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>abc abc ads<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> str replace <span class="token parameter variable">-a</span> <span class="token string">&#39;b&#39;</span> <span class="token string">&#39;z&#39;</span> ColA ColC
</code></pre></div><p>Find and replace contents without using the replace parameter as a regular expression</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;dogs_$1_cats&#39;</span> <span class="token operator">|</span> str replace <span class="token string">&#39;\\$1&#39;</span> <span class="token string">&#39;$2&#39;</span> <span class="token parameter variable">-n</span>
</code></pre></div><p>Find and replace the first occurrence using string replacement <em>not</em> regular expressions</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;c:\\some\\cool\\path&#39;</span> <span class="token operator">|</span> str replace <span class="token string">&#39;c:\\some\\cool&#39;</span> <span class="token string">&#39;~&#39;</span> <span class="token parameter variable">-s</span>
</code></pre></div><p>Find and replace all occurrences using string replacement <em>not</em> regular expressions</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;abc abc abc&#39;</span> <span class="token operator">|</span> str replace <span class="token parameter variable">-a</span> <span class="token string">&#39;b&#39;</span> <span class="token string">&#39;z&#39;</span> <span class="token parameter variable">-s</span>
</code></pre></div><p>Find and replace with fancy-regex</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;a successful b&#39;</span> <span class="token operator">|</span> str replace <span class="token string">&#39;\\b([sS])uc(?:cs|s?)e(ed(?:ed|ing|s?)|ss(?:es|ful(?:ly)?|i(?:ons?|ve(?:ly)?)|ors?)?)\\b&#39;</span> <span class="token string">&#39;\${1}ucce$2&#39;</span>
</code></pre></div><p>Find and replace with fancy-regex</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;GHIKK-9+*&#39;</span> <span class="token operator">|</span> str replace <span class="token string">&#39;[*[:xdigit:]+]&#39;</span> <span class="token string">&#39;z&#39;</span>
</code></pre></div>`,21);function u(s,h){return r(),p("div",null,[a("h1",l,[i,e(),a("code",null,n(s.$frontmatter.title),1),e(" for strings")]),a("div",d,n(s.$frontmatter.strings),1),g])}const b=t(o,[["render",u],["__file","str_replace.html.vue"]]);export{b as default};