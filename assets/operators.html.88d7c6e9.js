import{_ as c,r,o as i,c as l,a as t,b as s,w as d,e as o,d as e}from"./app.a6df64b1.js";const p={},h=o(`<h1 id="operators" tabindex="-1"><a class="header-anchor" href="#operators" aria-hidden="true">#</a> Operators</h1><p>Nushell supports the following operators for common math, logic, and string operations:</p><table><thead><tr><th>Operator</th><th>Description</th></tr></thead><tbody><tr><td><code>+</code></td><td>add</td></tr><tr><td><code>-</code></td><td>subtract</td></tr><tr><td><code>*</code></td><td>multiply</td></tr><tr><td><code>/</code></td><td>divide</td></tr><tr><td><code>mod</code></td><td>modulo</td></tr><tr><td><code>==</code></td><td>equal</td></tr><tr><td><code>!=</code></td><td>not equal</td></tr><tr><td><code>&lt;</code></td><td>less than</td></tr><tr><td><code>&lt;=</code></td><td>less than or equal</td></tr><tr><td><code>&gt;</code></td><td>greater than</td></tr><tr><td><code>&gt;=</code></td><td>greater than or equal</td></tr><tr><td><code>=~</code></td><td>regex match / string contains another</td></tr><tr><td><code>!~</code></td><td>inverse regex match / string does <em>not</em> contain another</td></tr><tr><td><code>in</code></td><td>value in list</td></tr><tr><td><code>not-in</code></td><td>value not in list</td></tr><tr><td><code>not</code></td><td>logical not</td></tr><tr><td><code>&amp;&amp;</code>, <code>and</code></td><td>and two Boolean values</td></tr><tr><td><code>||</code>, <code>or</code></td><td>or two Boolean values</td></tr><tr><td><code>//</code></td><td>floor division</td></tr><tr><td><code>**</code></td><td>pow</td></tr><tr><td><code>bit-or</code></td><td>bitwise or</td></tr><tr><td><code>bit-xor</code></td><td>bitwise xor</td></tr><tr><td><code>bit-and</code></td><td>bitwise and</td></tr><tr><td><code>bit-shl</code></td><td>bitwise shift left</td></tr><tr><td><code>bit-shr</code></td><td>bitwise shift right</td></tr><tr><td><code>starts-with</code></td><td>string starts with</td></tr><tr><td><code>ends-with</code></td><td>string ends with</td></tr></tbody></table><p>Parentheses can be used for grouping to specify evaluation order or for calling commands and using the results in an expression.</p><h2 id="order-of-operations" tabindex="-1"><a class="header-anchor" href="#order-of-operations" aria-hidden="true">#</a> Order of Operations</h2><p>Math operations are evaluated in the follow order (from highest precedence to lowest):</p><ul><li>Parentheses (<code>()</code>)</li><li>Multiply (<code>*</code>) and Divide (<code>/</code>) and Power (<code>**</code>)</li><li>Add (<code>+</code>) and Subtract (<code>-</code>)</li></ul><div class="language-text ext-text"><pre class="language-text"><code>&gt; 3 * (1 + 2)
9
</code></pre></div><h2 id="types" tabindex="-1"><a class="header-anchor" href="#types" aria-hidden="true">#</a> Types</h2><p>Not all operations make sense for all data types. If you attempt to perform an operation on non-compatible data types, you will be met with an error message that should explain what went wrong:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; &quot;spam&quot; - 1
Error: nu::parser::unsupported_operation (link)

  \xD7 Types mismatched for operation.
   \u256D\u2500[entry #49:1:1]
 1 \u2502 &quot;spam&quot; - 1
   \xB7 \u2500\u2500\u2500\u252C\u2500\u2500 \u252C \u252C
   \xB7    \u2502   \u2502 \u2570\u2500\u2500 int
   \xB7    \u2502   \u2570\u2500\u2500 doesn&#39;t support these values.
   \xB7    \u2570\u2500\u2500 string
   \u2570\u2500\u2500\u2500\u2500
  help: Change string or int to be the right types and try again.
</code></pre></div><p>The rules might sometimes feel a bit strict, but on the other hand there should be less unexpected side effects.</p><h2 id="regular-expression-string-contains-operators" tabindex="-1"><a class="header-anchor" href="#regular-expression-string-contains-operators" aria-hidden="true">#</a> Regular Expression / string-contains Operators</h2>`,13),u=e("The "),g=t("code",null,"=~",-1),_=e(" and "),m=t("code",null,"!~",-1),f=e(" operators provide a convenient way to evaluate "),b={href:"https://cheatography.com/davechild/cheat-sheets/regular-expressions/",target:"_blank",rel:"noopener noreferrer"},k=e("regular expressions"),x=e(". You don't need to know regular expressions to use them - they're also an easy way to check whether 1 string contains another."),w=o(`<ul><li><code>string =~ pattern</code> returns <strong>true</strong> if <code>string</code> contains a match for <code>pattern</code>, and <strong>false</strong> otherwise.</li><li><code>string !~ pattern</code> returns <strong>false</strong> if <code>string</code> contains a match for <code>pattern</code>, and <strong>true</strong> otherwise.</li></ul><p>For example:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>foobarbaz <span class="token operator">=~</span> bar <span class="token comment"># returns true</span>
foobarbaz <span class="token operator">!</span>~ bar <span class="token comment"># returns false</span>
<span class="token function">ls</span> <span class="token operator">|</span> where name <span class="token operator">=~</span> ^nu <span class="token comment"># returns all files whose names start with &quot;nu&quot;</span>
</code></pre></div>`,3),v=e("Both operators use "),y={href:"https://docs.rs/regex/latest/regex/struct.Regex.html#method.is_match",target:"_blank",rel:"noopener noreferrer"},q=e("the Rust regex crate's "),O=t("code",null,"is_match()",-1),B=e(" function"),F=e("."),N=o(`<h2 id="case-sensitivity" tabindex="-1"><a class="header-anchor" href="#case-sensitivity" aria-hidden="true">#</a> Case Sensitivity</h2><p>Operators are usually case-sensitive when operating on strings. There are a few ways to do case-insensitive work instead:</p><ol><li>In the regular expression operators, specify the <code>(?i)</code> case-insensitive mode modifier:</li></ol><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token string">&quot;FOO&quot;</span> <span class="token operator">=~</span> <span class="token string">&quot;foo&quot;</span> <span class="token comment"># returns false</span>
<span class="token string">&quot;FOO&quot;</span> <span class="token operator">=~</span> <span class="token string">&quot;(?i)foo&quot;</span> <span class="token comment"># returns true</span>
</code></pre></div>`,4),T={start:"2"},C=e("Use the "),E=t("code",null,"str contains",-1),R=e(" command's "),I=t("code",null,"--insensitive",-1),L=e(" flag:"),V=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token string">&quot;FOO&quot;</span> <span class="token operator">|</span> str contains <span class="token parameter variable">--insensitive</span> <span class="token string">&quot;foo&quot;</span>
</code></pre></div>`,1),P={start:"3"},S=e("Convert strings to lowercase with "),z=t("code",null,"str downcase",-1),D=e(" before comparing:"),M=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">(</span><span class="token string">&quot;FOO&quot;</span> <span class="token operator">|</span> str downcase<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token punctuation">(</span><span class="token string">&quot;Foo&quot;</span> <span class="token operator">|</span> str downcase<span class="token punctuation">)</span>
</code></pre></div>`,1);function A(U,Y){const n=r("ExternalLinkIcon"),a=r("RouterLink");return i(),l("div",null,[h,t("p",null,[u,g,_,m,f,t("a",b,[k,s(n)]),x]),w,t("p",null,[v,t("a",y,[q,O,B,s(n)]),F]),N,t("ol",T,[t("li",null,[C,s(a,{to:"/book/commands/str_contains.html"},{default:d(()=>[E]),_:1}),R,I,L])]),V,t("ol",P,[t("li",null,[S,s(a,{to:"/book/commands/str_downcase.html"},{default:d(()=>[z]),_:1}),D])]),M])}const G=c(p,[["render",A],["__file","operators.html.vue"]]);export{G as default};
