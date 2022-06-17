import{_ as n,o as s,c as a,e}from"./app.b8dbd919.js";const p={},t=e(`<h1 id="\u306F\u3057\u3099\u3081\u306B" tabindex="-1"><a class="header-anchor" href="#\u306F\u3057\u3099\u3081\u306B" aria-hidden="true">#</a> \u306F\u3058\u3081\u306B</h1><p>\u3053\u3093\u306B\u3061\u306F\u3001Nushell \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3078\u3088\u3046\u3053\u305D\u3002\u3053\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30B4\u30FC\u30EB\u306F\u3001\u30B7\u30F3\u30D7\u30EB\u306A\u30B3\u30DE\u30F3\u30C9\u3092\u30D1\u30A4\u30D7\u3067\u3064\u306A\u304E\u5408\u308F\u305B\u308B\u3068\u3044\u3046\u30B7\u30A7\u30EB\u306E Unix \u54F2\u5B66\u3092\u73FE\u4EE3\u306E\u958B\u767A\u30B9\u30BF\u30A4\u30EB\u306B\u3082\u3061\u3053\u3080\u3053\u3068\u3067\u3059\u3002</p><p>Nu \u306F Bash \u306E\u3088\u3046\u306A\u4F1D\u7D71\u7684\u306A\u30B7\u30A7\u30EB\u3001PowerShell \u306A\u3069\u306E\u9AD8\u5EA6\u306A\u30B7\u30A7\u30EB\u3001\u95A2\u6570\u578B\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3001\u30B7\u30B9\u30C6\u30E0\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u306A\u3069\u3001\u591A\u304F\u306E\u5206\u91CE\u304B\u3089\u30D2\u30F3\u30C8\u3092\u5F97\u3066\u3044\u307E\u3059\u3002\u3057\u304B\u3057 Nu \u306F\u4F55\u3067\u3082\u3053\u306A\u305B\u308B\u3053\u3068\u3092\u76EE\u6307\u3059\u306E\u3067\u306F\u306A\u304F\u3001\u3044\u304F\u3064\u304B\u306E\u3053\u3068\u3092\u3046\u307E\u304F\u3053\u306A\u305B\u308B\u3053\u3068\u306B\u6CE8\u529B\u3057\u3066\u3044\u307E\u3059\u3002</p><ul><li>\u30E2\u30C0\u30F3\u306A\u96F0\u56F2\u6C17\u3092\u3082\u3064\u67D4\u8EDF\u306A\u30AF\u30ED\u30B9\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u30B7\u30A7\u30EB\u3092\u4F5C\u308B\u3053\u3068</li><li>\u30C7\u30FC\u30BF\u69CB\u9020\u3092\u7406\u89E3\u3059\u308B\u30B3\u30DE\u30F3\u30C9\u30E9\u30A4\u30F3\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u7D44\u307F\u3042\u308F\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3053\u3068</li><li>\u73FE\u4EE3\u7684\u306A CLI \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u63D0\u4F9B\u3059\u308B UX \u3092\u305D\u306A\u3048\u308B\u3053\u3068</li></ul><p>Nu \u306B\u306A\u306B\u304C\u3067\u304D\u308B\u304B\u3092\u307F\u308B\u306B\u306F\u3001\u5B9F\u969B\u306B\u4F7F\u3063\u3066\u307F\u308B\u3053\u3068\u304C\u4E00\u756A\u3067\u3059\u3002</p><p><code>ls</code>\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u3066\u6700\u521D\u306B\u6C17\u3065\u304F\u3053\u3068\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u30D6\u30ED\u30C3\u30AF\u3067\u306F\u306A\u304F\u3001\u69CB\u9020\u5316\u3055\u308C\u305F\u30C6\u30FC\u30D6\u30EB\u30C7\u30FC\u30BF\u304C\u8FD4\u3063\u3066\u304F\u308B\u3053\u3068\u3067\u3059\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span>
\u256D\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token comment">#  \u2502         name          \u2502 type \u2502   size    \u2502  modified   \u2502</span>
\u251C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  <span class="token number">0</span> \u2502 <span class="token number">404</span>.html              \u2502 <span class="token function">file</span> \u2502     <span class="token number">429</span> B \u2502 <span class="token number">3</span> days ago  \u2502
\u2502  <span class="token number">1</span> \u2502 CONTRIBUTING.md       \u2502 <span class="token function">file</span> \u2502     <span class="token number">955</span> B \u2502 <span class="token number">8</span> mins ago  \u2502
\u2502  <span class="token number">2</span> \u2502 Gemfile               \u2502 <span class="token function">file</span> \u2502   <span class="token number">1.1</span> KiB \u2502 <span class="token number">3</span> days ago  \u2502
\u2502  <span class="token number">3</span> \u2502 Gemfile.lock          \u2502 <span class="token function">file</span> \u2502   <span class="token number">6.9</span> KiB \u2502 <span class="token number">3</span> days ago  \u2502
\u2502  <span class="token number">4</span> \u2502 LICENSE               \u2502 <span class="token function">file</span> \u2502   <span class="token number">1.1</span> KiB \u2502 <span class="token number">3</span> days ago  \u2502
\u2502  <span class="token number">5</span> \u2502 README.md             \u2502 <span class="token function">file</span> \u2502     <span class="token number">213</span> B \u2502 <span class="token number">3</span> days ago  \u2502
<span class="token punctuation">..</span>.
</code></pre></div><p>\u3053\u306E\u30C6\u30FC\u30D6\u30EB\u306F\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306E\u5185\u5BB9\u3092\u5225\u306E\u65B9\u6CD5\u3067\u8868\u793A\u3057\u3066\u3044\u308B\u3060\u3051\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u3053\u306E\u30C6\u30FC\u30D6\u30EB\u3092\u5229\u7528\u3059\u308B\u3068\u30B9\u30D7\u30EC\u30C3\u30C9\u30B7\u30FC\u30C8\u3068\u540C\u3058\u3088\u3046\u306B\u3001\u3088\u308A\u30A4\u30F3\u30BF\u30E9\u30AF\u30C6\u30A3\u30D6\u306B\u30C7\u30FC\u30BF\u3092\u64CD\u4F5C\u3067\u304D\u307E\u3059\u3002</p><p>\u6700\u521D\u306B\u884C\u3046\u3053\u3068\u306F\u30C6\u30FC\u30D6\u30EB\u3092\u30B5\u30A4\u30BA\u3067\u30BD\u30FC\u30C8\u3059\u308B\u3053\u3068\u3067\u3059\u3002\u3053\u308C\u3092\u884C\u3046\u306B\u306F<code>ls</code>\u306E\u51FA\u529B\u3092\u53D6\u5F97\u3057\u3066\u3001\u30AB\u30E9\u30E0\u306E\u5185\u5BB9\u306B\u57FA\u3065\u3044\u3066\u30C6\u30FC\u30D6\u30EB\u3092\u30BD\u30FC\u30C8\u3059\u308B\u30B3\u30DE\u30F3\u30C9\u306B\u5165\u529B\u3057\u307E\u3059\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> sort-by size <span class="token operator">|</span> reverse
\u256D\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token comment">#  \u2502         name          \u2502 type \u2502   size    \u2502  modified   \u2502</span>
\u251C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  <span class="token number">0</span> \u2502 Gemfile.lock          \u2502 <span class="token function">file</span> \u2502   <span class="token number">6.9</span> KiB \u2502 <span class="token number">3</span> days ago  \u2502
\u2502  <span class="token number">1</span> \u2502 SUMMARY.md            \u2502 <span class="token function">file</span> \u2502   <span class="token number">3.7</span> KiB \u2502 <span class="token number">3</span> days ago  \u2502
\u2502  <span class="token number">2</span> \u2502 Gemfile               \u2502 <span class="token function">file</span> \u2502   <span class="token number">1.1</span> KiB \u2502 <span class="token number">3</span> days ago  \u2502
\u2502  <span class="token number">3</span> \u2502 LICENSE               \u2502 <span class="token function">file</span> \u2502   <span class="token number">1.1</span> KiB \u2502 <span class="token number">3</span> days ago  \u2502
\u2502  <span class="token number">4</span> \u2502 CONTRIBUTING.md       \u2502 <span class="token function">file</span> \u2502     <span class="token number">955</span> B \u2502 <span class="token number">9</span> mins ago  \u2502
\u2502  <span class="token number">5</span> \u2502 books.md              \u2502 <span class="token function">file</span> \u2502     <span class="token number">687</span> B \u2502 <span class="token number">3</span> days ago  \u2502
<span class="token punctuation">..</span>.
</code></pre></div><p>\u3053\u306E\u4F5C\u696D\u3092\u304A\u3053\u306A\u3046\u305F\u3081\u306B\u3001<code>ls</code>\u306B\u30B3\u30DE\u30F3\u30C9\u30E9\u30A4\u30F3\u5F15\u6570\u3092\u6E21\u3057\u3066\u3044\u306A\u3044\u3053\u3068\u304C\u308F\u304B\u308A\u307E\u3059\u3002\u4EE3\u308F\u308A\u306B\u3001Nu \u304C\u63D0\u4F9B\u3059\u308B<code>sort-by</code>\u30B3\u30DE\u30F3\u30C9\u3092\u5229\u7528\u3057\u3066\u3001<code>ls</code>\u30B3\u30DE\u30F3\u30C9\u306E\u51FA\u529B\u3092\u30BD\u30FC\u30C8\u3057\u3066\u3044\u307E\u3059\u3002\u307E\u305F\u3001\u4E00\u756A\u5927\u304D\u306A\u30D5\u30A1\u30A4\u30EB\u3092\u8868\u793A\u3059\u308B\u305F\u3081\u306B\u9006\u9806\u306B\u4E26\u3073\u66FF\u3048\u3066\u3044\u307E\u3059\u3002</p><p>Nu \u306B\u306F\u30C6\u30FC\u30D6\u30EB\u3092\u6271\u3046\u305F\u3081\u306E\u591A\u304F\u306E\u30B3\u30DE\u30F3\u30C9\u304C\u7528\u610F\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u4F8B\u3048\u3070\u30011 \u30AD\u30ED\u30D0\u30A4\u30C8\u3092\u8D85\u3048\u308B\u30D5\u30A1\u30A4\u30EB\u306E\u307F\u3092\u8868\u793A\u3059\u308B\u3088\u3046\u306B<code>ls</code>\u30B3\u30DE\u30F3\u30C9\u306E\u51FA\u529B\u3092\u30D5\u30A3\u30EB\u30BF\u30FC\u3067\u304D\u307E\u3059\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where size <span class="token operator">&gt;</span> 1kb
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token comment"># \u2502       name        \u2502 type \u2502  size   \u2502  modified  \u2502</span>
\u251C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 <span class="token number">0</span> \u2502 Gemfile           \u2502 <span class="token function">file</span> \u2502 <span class="token number">1.1</span> KiB \u2502 <span class="token number">3</span> days ago \u2502
\u2502 <span class="token number">1</span> \u2502 Gemfile.lock      \u2502 <span class="token function">file</span> \u2502 <span class="token number">6.9</span> KiB \u2502 <span class="token number">3</span> days ago \u2502
\u2502 <span class="token number">2</span> \u2502 LICENSE           \u2502 <span class="token function">file</span> \u2502 <span class="token number">1.1</span> KiB \u2502 <span class="token number">3</span> days ago \u2502
\u2502 <span class="token number">3</span> \u2502 SUMMARY.md        \u2502 <span class="token function">file</span> \u2502 <span class="token number">3.7</span> KiB \u2502 <span class="token number">3</span> days ago \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><p>Unix \u54F2\u5B66\u306B\u3042\u308B\u3088\u3046\u306B\u3001\u30B3\u30DE\u30F3\u30C9\u3092\u3064\u306A\u304E\u5408\u308F\u305B\u308B\u3053\u3068\u3067\u69D8\u3005\u306A\u7D44\u307F\u5408\u308F\u305B\u3092\u4F5C\u308A\u51FA\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u5225\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u307F\u3066\u307F\u307E\u3057\u3087\u3046\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span>
\u256D\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502  <span class="token comment">#  \u2502 pid  \u2502         name         \u2502 status  \u2502  cpu  \u2502    mem    \u2502 virtual  \u2502</span>
\u251C\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502   <span class="token number">0</span> \u2502 <span class="token number">7570</span> \u2502 nu                   \u2502 Running \u2502  <span class="token number">1.96</span> \u2502  <span class="token number">23.2</span> MiB \u2502 <span class="token number">32.8</span> GiB \u2502
\u2502   <span class="token number">1</span> \u2502 <span class="token number">3533</span> \u2502 remindd              \u2502 Sleep   \u2502  <span class="token number">0.00</span> \u2502 <span class="token number">103.6</span> MiB \u2502 <span class="token number">32.3</span> GiB \u2502
\u2502   <span class="token number">2</span> \u2502 <span class="token number">3495</span> \u2502 TVCacheExtension     \u2502 Sleep   \u2502  <span class="token number">0.00</span> \u2502  <span class="token number">11.9</span> MiB \u2502 <span class="token number">32.2</span> GiB \u2502
\u2502   <span class="token number">3</span> \u2502 <span class="token number">3490</span> \u2502 MusicCacheExtension  \u2502 Sleep   \u2502  <span class="token number">0.00</span> \u2502  <span class="token number">12.9</span> MiB \u2502 <span class="token number">32.2</span> GiB \u2502
<span class="token punctuation">..</span>.
</code></pre></div><p>\u3082\u3057\u3042\u306A\u305F\u304C Linux \u3092\u5229\u7528\u3057\u3066\u3044\u308B\u306A\u3089<code>ps</code>\u30B3\u30DE\u30F3\u30C9\u306B\u306F\u99B4\u67D3\u307F\u304C\u3042\u308B\u3067\u3057\u3087\u3046\u3002\u3053\u308C\u3092\u4F7F\u3046\u3068\u3001\u73FE\u5728\u30B7\u30B9\u30C6\u30E0\u304C\u5B9F\u884C\u3057\u3066\u3044\u308B\u3059\u3079\u3066\u306E\u30D7\u30ED\u30BB\u30B9\u306E\u72B6\u614B\u3084\u540D\u524D\u306E\u4E00\u89A7\u3092\u53D6\u5F97\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30D7\u30ED\u30BB\u30B9\u306E CPU \u8CA0\u8377\u3082\u78BA\u8A8D\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</p><p>CPU \u3092\u30A2\u30AF\u30C6\u30A3\u30D6\u306B\u5229\u7528\u3057\u3066\u3044\u308B\u30D7\u30ED\u30BB\u30B9\u3092\u8868\u793A\u3057\u305F\u3044\u5834\u5408\u306F\u3069\u3046\u3067\u3057\u3087\u3046\u304B\u3002\u3055\u304D\u307B\u3069\u306E<code>ls</code>\u30B3\u30DE\u30F3\u30C9\u3068\u540C\u3058\u3088\u3046\u306B\u3001<code>ps</code>\u30B3\u30DE\u30F3\u30C9\u304C\u8FD4\u3059\u30C6\u30FC\u30D6\u30EB\u3092\u5229\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> <span class="token operator">|</span> where cpu <span class="token operator">&gt;</span> <span class="token number">5</span>
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token comment"># \u2502 pid  \u2502      name      \u2502 status  \u2502  cpu   \u2502    mem    \u2502 virtual  \u2502</span>
\u251C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 <span class="token number">0</span> \u2502 <span class="token number">1583</span> \u2502 Terminal       \u2502 Running \u2502  <span class="token number">20.69</span> \u2502 <span class="token number">127.8</span> MiB \u2502 <span class="token number">33.0</span> GiB \u2502
\u2502 <span class="token number">1</span> \u2502  <span class="token number">579</span> \u2502 photoanalysisd \u2502 Running \u2502 <span class="token number">139.50</span> \u2502  <span class="token number">99.9</span> MiB \u2502 <span class="token number">32.3</span> GiB \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><p>\u3053\u308C\u307E\u3067\u3001<code>ls</code>\u3068<code>ps</code>\u3092\u5229\u7528\u3057\u3066\u30D5\u30A1\u30A4\u30EB\u3084\u30D7\u30ED\u30BB\u30B9\u306E\u4E00\u89A7\u3092\u8868\u793A\u3057\u307E\u3057\u305F\u3002Nu \u306F\u3053\u306E\u4ED6\u306B\u3082\u4FBF\u5229\u306A\u30C6\u30FC\u30D6\u30EB\u3092\u4F5C\u308A\u51FA\u3059\u30B3\u30DE\u30F3\u30C9\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002\u6B21\u306B<code>date</code>\u3068<code>sys</code>\u3092\u307F\u3066\u307F\u307E\u3057\u3087\u3046\u3002</p><p><code>date now</code>\u3092\u5B9F\u884C\u3059\u308B\u3068\u3001\u73FE\u5728\u306E\u65E5\u6642\u3068\u6642\u9593\u306B\u95A2\u3059\u308B\u60C5\u5831\u304C\u5F97\u3089\u308C\u307E\u3059\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now
<span class="token number">2022</span>-03-07 <span class="token number">14</span>:14:51.684619600 -08:00
</code></pre></div><p><code>sys</code>\u306F Nu \u304C\u5B9F\u884C\u3055\u308C\u3066\u3044\u308B\u30B7\u30B9\u30C6\u30E0\u306B\u95A2\u3059\u308B\u60C5\u5831\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys
\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token function">host</span>  \u2502 <span class="token punctuation">{</span>record <span class="token number">6</span> fields<span class="token punctuation">}</span> \u2502
\u2502 cpu   \u2502 <span class="token punctuation">[</span>table <span class="token number">4</span> rows<span class="token punctuation">]</span>    \u2502
\u2502 disks \u2502 <span class="token punctuation">[</span>table <span class="token number">3</span> rows<span class="token punctuation">]</span>    \u2502
\u2502 mem   \u2502 <span class="token punctuation">{</span>record <span class="token number">4</span> fields<span class="token punctuation">}</span> \u2502
\u2502 temp  \u2502 <span class="token punctuation">[</span>table <span class="token number">1</span> row<span class="token punctuation">]</span>     \u2502
\u2502 net   \u2502 <span class="token punctuation">[</span>table <span class="token number">4</span> rows<span class="token punctuation">]</span>    \u2502
\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><p>\u3053\u308C\u306F\u3055\u304D\u307B\u3069\u307E\u3067\u306E\u30C6\u30FC\u30D6\u30EB\u3068\u5C11\u3057\u7570\u306A\u308A\u307E\u3059\u3002<code>sys</code>\u30B3\u30DE\u30F3\u30C9\u306F\u5358\u7D14\u306A\u5024\u3067\u306F\u306A\u304F\u30BB\u30EB\u306B\u69CB\u9020\u5316\u3055\u308C\u305F\u30C6\u30FC\u30D6\u30EB\u3092\u542B\u3080\u30C6\u30FC\u30D6\u30EB\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002\u3053\u306E\u30C7\u30FC\u30BF\u3092\u898B\u308B\u306B\u306F\u8868\u793A\u3059\u308B\u5217\u3092\u9078\u629E\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get <span class="token function">host</span>
\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 name           \u2502 Debian GNU/Linux       \u2502
\u2502 os version     \u2502 <span class="token number">11</span>                     \u2502
\u2502 kernel version \u2502 <span class="token number">5.10</span>.92-v8+            \u2502
\u2502 <span class="token function">hostname</span>       \u2502 lifeless               \u2502
\u2502 <span class="token function">uptime</span>         \u2502 19day 21hr 34min 45sec \u2502
\u2502 sessions       \u2502 <span class="token punctuation">[</span>table <span class="token number">1</span> row<span class="token punctuation">]</span>          \u2502
\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><p><code>get</code>\u30B3\u30DE\u30F3\u30C9\u3092\u5229\u7528\u3059\u308B\u3068\u30C6\u30FC\u30D6\u30EB\u306E\u30AB\u30E9\u30E0\u306E\u5185\u5BB9\u3092\u8ABF\u3079\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u3053\u3067\u306F\u3001Nu \u304C\u5B9F\u884C\u3055\u308C\u3066\u3044\u308B\u30DB\u30B9\u30C8\u306B\u95A2\u3059\u308B\u60C5\u5831\u3092\u542B\u3080&quot;host&quot;\u5217\u3092\u8ABF\u3079\u3066\u3044\u307E\u3059\u3002OS \u306E\u540D\u524D\u3001\u30DB\u30B9\u30C8\u540D\u3001CPU \u306A\u3069\u3067\u3059\u3002\u30B7\u30B9\u30C6\u30E0\u4E0A\u306E\u30E6\u30FC\u30B6\u30FC\u306E\u540D\u524D\u3092\u53D6\u5F97\u3057\u3066\u307F\u307E\u3057\u3087\u3046\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get host.sessions.name
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token number">0</span> \u2502 jt \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u256F
</code></pre></div><p>\u73FE\u5728\u3001\u30B7\u30B9\u30C6\u30E0\u306B\u306F&quot;jonathan&quot;\u3068\u3044\u3046\u540D\u524D\u306E\u30E6\u30FC\u30B6\u304C\uFF11\u4EBA\u3060\u3051\u3044\u307E\u3059\u3002\u5217\u306E\u540D\u524D\u3060\u3051\u3067\u306F\u306A\u304F\u30D1\u30B9\u3082\u6E21\u305B\u308B\u3053\u3068\u306B\u6C17\u3065\u304F\u3067\u3057\u3087\u3046\u3002Nu \u306F\u30D1\u30B9\u3092\u53D7\u3051\u53D6\u308B\u3068\u30C6\u30FC\u30D6\u30EB\u306E\u5BFE\u5FDC\u3059\u308B\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002</p><p>\u30C6\u30FC\u30D6\u30EB\u30C7\u30FC\u30BF\u3067\u306F\u306A\u304F\u3001\u6587\u5B57\u5217&quot;jonathan&quot;\u3092\u53D6\u5F97\u3057\u305F\u3053\u3068\u306B\u6C17\u3065\u304B\u308C\u305F\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002Nu \u306F\u30C6\u30FC\u30D6\u30EB\u3060\u3051\u3067\u306A\u304F\u6587\u5B57\u5217\u3082\u6271\u3044\u307E\u3059\u3002\u6587\u5B57\u5217\u306F Nu \u4EE5\u5916\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u6271\u3046\u4E0A\u3067\u91CD\u8981\u306A\u5F79\u5272\u3092\u306F\u305F\u3057\u307E\u3059\u3002</p><p>\u5B9F\u969B\u306B Nu \u306E\u5916\u3067\u6587\u5B57\u5217\u304C\u3069\u306E\u3088\u3046\u306B\u6A5F\u80FD\u3059\u308B\u304B\u898B\u3066\u307F\u307E\u3057\u3087\u3046\u3002\u5148\u307B\u3069\u306E\u4F8B\u3067\u5916\u90E8\u306E<code>echo</code>\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002(<code>^</code>\u306F\u7D44\u8FBC\u307F\u306E<code>echo</code>\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u306A\u3044\u3088\u3046\u6307\u793A\u3057\u3066\u3044\u307E\u3059)\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get host.sessions.name <span class="token operator">|</span> each <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> ^echo <span class="token variable">$it</span> <span class="token punctuation">}</span>
jt
</code></pre></div><p>\u3059\u308B\u3069\u3044\u8AAD\u8005\u306B\u306F\u3053\u308C\u304C\u4EE5\u524D\u3082\u306E\u3068\u4F3C\u3066\u3044\u308B\u3068\u601D\u308F\u308C\u308B\u3067\u3057\u3087\u3046\u3002\u3057\u304B\u3057\u3001\u3055\u304D\u307B\u3069\u306E\u51FA\u529B\u3067<code>echo</code>\u3092\u547C\u3073\u51FA\u3057\u3066\u3044\u308B\u3068\u3044\u3046\u91CD\u8981\u306A\u9055\u3044\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u306E\u3088\u3046\u306B\u3001Nu \u304B\u3089\u30C7\u30FC\u30BF\u3092<code>echo</code>(\u307E\u305F\u306F<code>git</code>\u306E\u3088\u3046\u306A Nu \u4EE5\u5916\u306E\u4EFB\u610F\u306E\u30B3\u30DE\u30F3\u30C9)\u306B\u308F\u305F\u3059\u3053\u3068\u304C\u3067\u304D\u308B\u306E\u3067\u3059\u3002</p><p>\u6CE8\uFF1ANu \u306E\u7D44\u307F\u8FBC\u307F\u30B3\u30DE\u30F3\u30C9\u306E\u30D8\u30EB\u30D7\u30C6\u30AD\u30B9\u30C8\u306F\u3001<code>help</code>\u30B3\u30DE\u30F3\u30C9\u3067\u691C\u51FA\u3067\u304D\u307E\u3059\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">help</span> path
Explore and manipulate paths.

There are three ways to represent a path:

* As a path literal, e.g., <span class="token string">&#39;/home/viking/spam.txt&#39;</span>
* As a structured path: a table with <span class="token string">&#39;parent&#39;</span>, <span class="token string">&#39;stem&#39;</span>, and <span class="token string">&#39;extension&#39;</span> <span class="token punctuation">(</span>and
* <span class="token string">&#39;prefix&#39;</span> on Windows<span class="token punctuation">)</span> columns. This <span class="token function">format</span> is produced by the <span class="token string">&#39;path parse&#39;</span>
  subcommand.
* As an inner list of path parts, e.g., <span class="token string">&#39;[[ / home viking spam.txt ]]&#39;</span><span class="token builtin class-name">.</span>
  Splitting into parts is <span class="token keyword">done</span> by the <span class="token variable"><span class="token variable">\`</span>path <span class="token function">split</span><span class="token variable">\`</span></span> command.

All subcommands accept all three variants as an input. Furthermore, the <span class="token string">&#39;path
join&#39;</span> subcommand can be used to <span class="token function">join</span> the structured path or path parts back into
the path literal.

Usage:
  <span class="token operator">&gt;</span> path

Subcommands:
  path <span class="token function">basename</span> - Get the final component of a path
  path <span class="token function">dirname</span> - Get the parent directory of a path
  path exists - Check whether a path exists
  path <span class="token function">expand</span> - Try to <span class="token function">expand</span> a path to its absolute form
  path <span class="token function">join</span> - Join a structured path or a list of path parts.
  path parse - Convert a path into structured data.
  path relative-to - Get a path as relative to another path.
  path <span class="token function">split</span> - Split a path into parts by a separator.
  path <span class="token builtin class-name">type</span> - Get the <span class="token builtin class-name">type</span> of the object a path refers to <span class="token punctuation">(</span>e.g., file, dir, symlink<span class="token punctuation">)</span>

Flags:
  -h, --help
      Display this <span class="token builtin class-name">help</span> message
</code></pre></div>`,34),o=[t];function c(l,r){return s(),a("div",null,o)}var i=n(p,[["render",c],["__file","introduction.html.vue"]]);export{i as default};
