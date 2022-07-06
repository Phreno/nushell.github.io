import{_ as a,r as o,o as n,c as r,a as t,b as c,e as s,d as e}from"./app.ea1b8c3e.js";const i={},l=s(`<h1 id="\u8A2D\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u8A2D\u5B9A" aria-hidden="true">#</a> \u8A2D\u5B9A</h1><p>Nu \u306B\u306F\u3001\u898B\u305F\u76EE\u3084\u6319\u52D5\u3092\u5909\u66F4\u3055\u305B\u308B\u305F\u3081\u306E\u5185\u90E8\u7684\u306A\u5909\u6570\u304C\u3042\u308A\u307E\u3059\u3002 \u4EE5\u4E0B\u304C\u305D\u306E\u30EA\u30B9\u30C8\u3067\u3059\u3002</p><table><thead><tr><th>Variable</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>completion_mode</td><td>&quot;list&quot; or &quot;circular&quot;</td><td>\u5229\u7528\u3059\u308B\u81EA\u52D5\u88DC\u5B8C\u306E\u30E2\u30FC\u30C9</td></tr><tr><td>ctrlc_exit</td><td>boolean</td><td>ctrl-c \u3092\u8907\u6570\u56DE\u62BC\u3057\u305F\u3068\u304D\u306B Nu \u3092 exit \u3059\u308B\u304B\u3069\u3046\u304B</td></tr><tr><td>disable_table_indexes</td><td>boolean</td><td>\u30C6\u30FC\u30D6\u30EB\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u30AB\u30E9\u30E0\u3092\u7121\u52B9\u306B\u3059\u308B\u304B\u3069\u3046\u304B</td></tr><tr><td>edit_mode</td><td>&quot;vi&quot; or &quot;emacs&quot;</td><td>\u884C\u306E\u7DE8\u96C6\u30E2\u30FC\u30C9\u3092&quot;vi&quot;\u304B&quot;emacs&quot;\u30E2\u30FC\u30C9\u306B\u5909\u66F4\u3059\u308B</td></tr><tr><td>env</td><td>row</td><td>\u5916\u90E8\u30B3\u30DE\u30F3\u30C9\u306B\u6E21\u3059\u74B0\u5883\u5909\u6570</td></tr><tr><td>header_align</td><td>&quot;center&quot;, &quot;right&quot;, or other</td><td>\u30C6\u30FC\u30D6\u30EB\u306E\u30D8\u30C3\u30C0\u30FC\u306E\u63C3\u3048\u65B9</td></tr><tr><td>key_timeout</td><td>integer</td><td>edit \u30E2\u30FC\u30C9\u306E\u30B9\u30A4\u30C3\u30C1\u6642\u306E\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8</td></tr><tr><td>nonzero_exit_errors</td><td>boolean</td><td>\u5916\u90E8\u30B3\u30DE\u30F3\u30C9\u304C 0 \u4EE5\u5916\u306E\u7D42\u4E86\u30B9\u30C6\u30FC\u30BF\u30B9\u306E\u5834\u5408\u306B\u30A8\u30E9\u30FC\u3092\u8868\u793A\u3059\u308B\u304B\u3069\u3046\u304B</td></tr><tr><td>path</td><td>list of strings</td><td>\u30D0\u30A4\u30CA\u30EA\u30FC\u3092\u691C\u7D22\u3059\u308B PATH</td></tr><tr><td>startup</td><td>list of strings</td><td><code>alias</code>\u306E\u3088\u3046\u306A nushell \u8D77\u52D5\u6642\u306B\u5B9F\u884C\u3059\u308B\u30B3\u30DE\u30F3\u30C9</td></tr><tr><td>table_mode</td><td>&quot;light&quot; or other</td><td>\u30C6\u30FC\u30D6\u30EB\u306E\u30E2\u30FC\u30C9</td></tr><tr><td>no_auto_pivot</td><td>boolean</td><td>\u81EA\u52D5\u3067 1 \u884C\u306E\u30C7\u30FC\u30BF\u3092 pivot \u3059\u308B\u304B\u3069\u3046\u304B</td></tr><tr><td>skip_welcome_message</td><td>boolean</td><td>nushell \u8D77\u52D5\u6642\u306B\u30A6\u30A7\u30EB\u30AB\u30E0\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u8868\u793A\u3092\u30B9\u30AD\u30C3\u30D7\u3059\u308B\u304B\u3069\u3046\u304B</td></tr></tbody></table><h2 id="\u5229\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5229\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u5229\u7528\u65B9\u6CD5</h2><h3 id="\u5909\u6570\u306E\u8A2D\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u5909\u6570\u306E\u8A2D\u5B9A" aria-hidden="true">#</a> \u5909\u6570\u306E\u8A2D\u5B9A</h3><p>\u3053\u308C\u3089\u306E\u5909\u6570\u306E\u3044\u305A\u308C\u304B\u3092\u8A2D\u5B9A\u3059\u308B\u306B\u306F<code>config set</code> \u30B3\u30DE\u30F3\u30C9\u3092\u5229\u7528\u3057\u307E\u3059\u3002\u4F8B\u3048\u3070</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; config set edit_mode &quot;vi&quot;
</code></pre></div><h3 id="\u30CF\u309A\u30A4\u30D5\u309A\u30E9\u30A4\u30F3\u304B\u3089\u306E\u5909\u6570\u3092\u8A2D\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u30CF\u309A\u30A4\u30D5\u309A\u30E9\u30A4\u30F3\u304B\u3089\u306E\u5909\u6570\u3092\u8A2D\u5B9A" aria-hidden="true">#</a> \u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u304B\u3089\u306E\u5909\u6570\u3092\u8A2D\u5B9A</h3><p>\u8A2D\u5B9A\u3057\u305F\u3044\u5024\u3092\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u3092\u901A\u3058\u3066\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u305F\u3081\u306B\u306F<code>set_into</code>\u30D5\u30E9\u30B0\u3092\u5229\u7528\u3057\u307E\u3059\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo &quot;bar&quot; | config set_into foo
</code></pre></div><p>\u3053\u306E\u65B9\u6CD5\u306F\u3001<code>env</code>\u3084<code>path</code>\u5909\u6570\u3092\u8A2D\u5B9A\u3059\u308B\u969B\u306B\u4FBF\u5229\u3067\u3059\u3002</p><h3 id="\u3059\u3078\u3099\u3066\u306E\u5909\u6570\u306E\u8868\u793A" tabindex="-1"><a class="header-anchor" href="#\u3059\u3078\u3099\u3066\u306E\u5909\u6570\u306E\u8868\u793A" aria-hidden="true">#</a> \u3059\u3079\u3066\u306E\u5909\u6570\u306E\u8868\u793A</h3><p><code>config</code>\u30B3\u30DE\u30F3\u30C9\u3092\u5F15\u6570\u306A\u3057\u3067\u5B9F\u884C\u3059\u308B\u3068\u73FE\u5728\u306E\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u5909\u6570\u3092\u8868\u793A\u3057\u307E\u3059\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; config
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 completion_mode \u2502 circular
 env             \u2502 [row 51 columns]
 path            \u2502 [table 9 rows]
 startup         \u2502 [table 1 rows]
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>\u6CE8: \u3082\u3057\u307E\u3060\u5909\u6570\u3092\u8A2D\u5B9A\u3057\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u51FA\u529B\u304C\u7A7A\u306E\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002</p><h3 id="\u5909\u6570\u306E\u53D6\u5F97" tabindex="-1"><a class="header-anchor" href="#\u5909\u6570\u306E\u53D6\u5F97" aria-hidden="true">#</a> \u5909\u6570\u306E\u53D6\u5F97</h3><p><code>get</code>\u30D5\u30E9\u30B0\u3092\u5229\u7528\u3057\u3066\u7279\u5B9A\u306E\u5909\u6570\u306E\u5024\u3092\u53D6\u5F97\u3067\u304D\u307E\u3059\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; config get edit_mode
</code></pre></div><h3 id="\u5909\u6570\u306E\u524A\u9664" tabindex="-1"><a class="header-anchor" href="#\u5909\u6570\u306E\u524A\u9664" aria-hidden="true">#</a> \u5909\u6570\u306E\u524A\u9664</h3><p>\u5909\u6570\u3092\u524A\u9664\u3059\u308B\u5834\u5408\u3001<code>remove</code>\u30D5\u30E9\u30B0\u3092\u5229\u7528\u3057\u307E\u3059\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; config remove edit_mode
</code></pre></div><h3 id="\u8A2D\u5B9A\u5168\u4F53\u306E\u30AF\u30EA\u30A2" tabindex="-1"><a class="header-anchor" href="#\u8A2D\u5B9A\u5168\u4F53\u306E\u30AF\u30EA\u30A2" aria-hidden="true">#</a> \u8A2D\u5B9A\u5168\u4F53\u306E\u30AF\u30EA\u30A2</h3><p>\u8A2D\u5B9A\u5168\u4F53\u3092\u30AF\u30EA\u30A2\u3057\u3066\u3001\u6700\u521D\u304B\u3089\u3084\u308A\u306A\u304A\u3057\u305F\u3044\u5834\u5408\u306F<code>--clear</code>\u30D5\u30E9\u30B0\u3092\u5229\u7528\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3068\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\u3082\u30AF\u30EA\u30A2\u3055\u308C\u308B\u306E\u3067\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; config clear
</code></pre></div><h3 id="\u8A2D\u5B9A\u304B\u3099\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u5834\u6240\u3092\u307F\u3064\u3051\u308B" tabindex="-1"><a class="header-anchor" href="#\u8A2D\u5B9A\u304B\u3099\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u5834\u6240\u3092\u307F\u3064\u3051\u308B" aria-hidden="true">#</a> \u8A2D\u5B9A\u304C\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u5834\u6240\u3092\u307F\u3064\u3051\u308B</h3><p>\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u5834\u6240\u304B\u3089\u8AAD\u307F\u8FBC\u307E\u308C\u307E\u3059\u3002\u3053\u306E\u5834\u6240\u3092\u307F\u3064\u3051\u308B\u306B\u306F<code>-path</code>\u30D5\u30E9\u30B0\u3092\u5229\u7528\u3057\u307E\u3059\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; config path
/home/jonathant/.config/nu/config.toml
</code></pre></div><h3 id="\u30D5\u30A1\u30A4\u30EB\u304B\u3089\u8A2D\u5B9A\u3092\u8AAD\u307F\u8FBC\u3080" tabindex="-1"><a class="header-anchor" href="#\u30D5\u30A1\u30A4\u30EB\u304B\u3089\u8A2D\u5B9A\u3092\u8AAD\u307F\u8FBC\u3080" aria-hidden="true">#</a> \u30D5\u30A1\u30A4\u30EB\u304B\u3089\u8A2D\u5B9A\u3092\u8AAD\u307F\u8FBC\u3080</h3><p>\u30C7\u30D5\u30A9\u30EB\u30C8\u3068\u306F\u9055\u3046\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\u3092\u8AAD\u307F\u8FBC\u307F\u305F\u3044\u5834\u5408\u306F\u3001<code>load</code> \u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u3092\u5229\u7528\u3057\u307E\u3059\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; config load myconfiguration.toml
</code></pre></div><h2 id="nu-\u3092\u30ED\u30AF\u3099\u30A4\u30F3\u30B7\u30A7\u30EB\u3068\u3057\u3066\u8A2D\u5B9A\u3059\u308B" tabindex="-1"><a class="header-anchor" href="#nu-\u3092\u30ED\u30AF\u3099\u30A4\u30F3\u30B7\u30A7\u30EB\u3068\u3057\u3066\u8A2D\u5B9A\u3059\u308B" aria-hidden="true">#</a> Nu \u3092\u30ED\u30B0\u30A4\u30F3\u30B7\u30A7\u30EB\u3068\u3057\u3066\u8A2D\u5B9A\u3059\u308B</h2><p>Nu \u3092\u30ED\u30B0\u30A4\u30F3\u30B7\u30A7\u30EB\u3068\u3057\u3066\u5229\u7528\u3059\u308B\u306B\u306F\u3001<code>path</code>\u3068<code>env</code>\u5909\u6570\u3092\u8A2D\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u308C\u3089\u306B\u3088\u308A\u30ED\u30B0\u30A4\u30F3\u30B7\u30A7\u30EB\u3068\u3057\u3066\u5916\u90E8\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3059\u308B\u306E\u306B\u5341\u5206\u306A\u30B5\u30DD\u30FC\u30C8\u304C\u5F97\u3089\u308C\u307E\u3059\u3002</p><p>\u5207\u308A\u66FF\u3048\u308B\u524D\u306B\u3001Bash \u7B49\u306E\u5225\u306E\u30B7\u30A7\u30EB\u304B\u3089 Nu \u3092\u5B9F\u884C\u3057\u307E\u3059\u3002\u305D\u3057\u3066\u6B21\u306E\u30B3\u30DE\u30F3\u30C9\u3067\u74B0\u5883\u5909\u6570\u3068 PATH \u3092\u30B7\u30A7\u30EB\u304B\u3089\u53D6\u5F97\u3057\u307E\u3059\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; config set path $nu.path
&gt; config set env $nu.env
</code></pre></div><p>0.7.2 \u3088\u308A\u4EE5\u524D\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3067\u306F</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; config --set [path $nu:path]
&gt; config --set [env $nu:env]
</code></pre></div><p><code>$nu.path</code>\u304A\u3088\u3073<code>$nu.env</code>\u306B\u306F\u305D\u308C\u305E\u308C\u3001\u73FE\u5728\u306E PATH \u3068\u74B0\u5883\u5909\u6570\u304C\u30BB\u30C3\u30C8\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u3053\u308C\u3089\u3092\u30BB\u30C3\u30C8\u3059\u308B\u3068\u3001\u306E\u3061\u306B Nu \u3092\u30ED\u30B0\u30A4\u30F3\u30B7\u30A7\u30EB\u3068\u3057\u3066\u5229\u7528\u3057\u305F\u3055\u3044\u306B\u5229\u7528\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002</p><p>\u6B21\u306B\u3044\u304F\u3064\u304B\u306E\u30C7\u30A3\u30B9\u30C8\u30EA\u30D3\u30E5\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u3001Nu \u304C<code>/etc/shells</code>\u306E\u30EA\u30B9\u30C8\u306B\u542B\u307E\u308C\u3066\u3044\u308B\u304B\u3092\u78BA\u8A8D\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>\u276F cat /etc/shells
# /etc/shells: valid login shells
/bin/sh
/bin/dash
/bin/bash
/bin/rbash
/usr/bin/screen
/usr/bin/fish
/home/jonathan/.cargo/bin/nu
</code></pre></div><p>\u3053\u308C\u306B\u3088\u308A\u3001<code>chsh</code>\u3067 Nu \u3092\u30ED\u30B0\u30A4\u30F3\u30B7\u30A7\u30EB\u3068\u3057\u3066\u8A2D\u5B9A\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002\u30ED\u30B0\u30A2\u30A6\u30C8\u5F8C\u3001\u6B21\u56DE\u306E\u30ED\u30B0\u30A4\u30F3\u6642\u306B Nu \u306E\u7D20\u6575\u306A\u30D7\u30ED\u30F3\u30D7\u30C8\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002</p><h2 id="\u30D5\u309A\u30ED\u30F3\u30D5\u309A\u30C8\u306E\u8A2D\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u30D5\u309A\u30ED\u30F3\u30D5\u309A\u30C8\u306E\u8A2D\u5B9A" aria-hidden="true">#</a> \u30D7\u30ED\u30F3\u30D7\u30C8\u306E\u8A2D\u5B9A</h2>`,41),h=e("\u30D7\u30ED\u30F3\u30D7\u30C8\u306E\u8A2D\u5B9A\u306F"),u=t("code",null,"prompt",-1),g=e("\u306E\u5024\u3092\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u3067\u884C\u3044\u307E\u3059\u3002"),p=t("br",null,null,-1),x=e(" \u4F8B\u3048\u3070\u3001"),_={href:"https://starship.rs",target:"_blank",rel:"noopener noreferrer"},v=e("starship"),f=e("\u3092\u4F7F\u3046\u306B\u306F\u3001\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u3066\u6B21\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002(0.18.2 and later)"),b=t("div",{class:"language-text ext-text"},[t("pre",{class:"language-text"},[t("code",null,`config set prompt "starship prompt"
`)])],-1),m=t("p",null,"Nu \u3092\u518D\u8D77\u52D5\u3059\u308B\u3068",-1),q=t("div",{class:"language-text ext-text"},[t("pre",{class:"language-text"},[t("code",null,`nushell on \u{1F4D9} master [$] is \u{1F4E6} v0.18.2 via \u{1F980} v1.48.0-nightly
\u276F
`)])],-1);function N(k,$){const d=o("ExternalLinkIcon");return n(),r("div",null,[l,t("p",null,[h,u,g,p,x,t("a",_,[v,c(d)]),f]),b,m,q])}var w=a(i,[["render",N],["__file","configuration.html.vue"]]);export{w as default};
