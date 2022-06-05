import{_ as r,r as i,o as l,c,a as s,b as t,w as a,e as o,d as e}from"./app.68c16707.js";const d={},p=o(`<h1 id="working-with-strings" tabindex="-1"><a class="header-anchor" href="#working-with-strings" aria-hidden="true">#</a> Working with strings</h1><p>Strings in Nushell help to hold text data for later use. This can include file names, file paths, names of columns, and much more. Strings are so common that Nushell offers a couple ways to work with them, letting you pick what best matches your needs.</p><h2 id="single-quoted-string" tabindex="-1"><a class="header-anchor" href="#single-quoted-string" aria-hidden="true">#</a> Single-quoted string</h2><p>The simplest string in Nushell is the single-quoted string. This string uses the <code>&#39;</code> character to surround some text. Here&#39;s the text for hello world as a single-quoted string:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;hello world&#39;</span>
hello world
</code></pre></div><p>Single-quoted strings don&#39;t do anything to the text they&#39;re given, making them ideal for holding a wide range of text data.</p><h2 id="double-quoted-strings" tabindex="-1"><a class="header-anchor" href="#double-quoted-strings" aria-hidden="true">#</a> Double-quoted strings</h2><p>For more complex strings, Nushell also offers double-quoted strings. These strings use the <code>&quot;</code> character to surround text. They also support the ability escape characters inside the text using the <code>\\</code> character.</p><p>For example, we could write the text hello followed by a new line and then world, using escape characters and a double-quoted string:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;hello<span class="token entity" title="\\n">\\n</span>world&quot;</span>
hello
world
</code></pre></div><p>Escape characters let you quickly add in a character that would otherwise be hard to type.</p><p>Nushell currently supports the following escape characters:</p><ul><li><code>\\&quot;</code> - double-quote character</li><li><code>\\&#39;</code> - single-quote character</li><li><code>\\\\</code> - backslash</li><li><code>\\/</code> - forward slash</li><li><code>\\b</code> - backspace</li><li><code>\\f</code> - formfeed</li><li><code>\\r</code> - carriage return</li><li><code>\\n</code> - newline (line feed)</li><li><code>\\t</code> - tab</li><li><code>\\uXXXX</code> - a unicode character (replace XXXX with the number of the unicode character)</li></ul><h2 id="string-interpolation" tabindex="-1"><a class="header-anchor" href="#string-interpolation" aria-hidden="true">#</a> String interpolation</h2><p>More complex string use cases also need a new form of string: string interpolation. This is a way of building text from both raw text and the result of running expressions. String interpolation combines the results together, giving you a new string.</p><p>String interpolation uses <code>$&quot; &quot;</code> and <code>$&#39; &#39;</code> as ways to wrap interpolated text.</p><p>For example, let&#39;s say we have a variable called <code>$name</code> and we want to greet the name of the person contained in this variable:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> name <span class="token operator">=</span> <span class="token string">&quot;Alice&quot;</span>
<span class="token operator">&gt;</span> $<span class="token string">&quot;greetings, (<span class="token variable">$name</span>)&quot;</span>
greetings, Alice
</code></pre></div><p>By wrapping expressions in <code>()</code>, we can run them to completion and use the results to help build the string.</p><p>String interpolation has both a single-quoted, <code>$&#39; &#39;</code>, and a double-quoted, <code>$&quot; &quot;</code>, form. These correspond to the single-quoted and double-quoted strings: single-quoted string interpolation doesn&#39;t support escape characters while double-quoted string interpolation does.</p><p>As of version 0.61, interpolated strings support escaping parentheses, so that the <code>(</code> and <code>)</code> characters may be used in a string without Nushell trying to evaluate what appears between them:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> $<span class="token string">&quot;2 + 2 is (2 + 2) \\(you guessed it!)&quot;</span>
<span class="token number">2</span> + <span class="token number">2</span> is <span class="token number">4</span> <span class="token punctuation">(</span>you guessed it<span class="token operator">!</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="splitting-strings" tabindex="-1"><a class="header-anchor" href="#splitting-strings" aria-hidden="true">#</a> Splitting strings</h2>`,23),h=e("The "),g=s("code",null,"split row",-1),u=e(" command creates a list from a string based on a delimiter. For example, "),m=s("code",null,'let colors = ("red,green,blue" | split row ",")',-1),_=e(" creates the list "),b=s("code",null,"[red green blue]",-1),k=e("."),f=e("The "),w=s("code",null,"split column",-1),x=e(" command will create a table from a string based on a delimiter. For example "),v=s("code",null,'let colors = ("red,green,blue" | split column ",")',-1),y=e(" creates a table, giving only column to each element."),q=e("Finally, the "),S=s("code",null,"split chars",-1),T=e(" command will split a string into a list of characters."),N=o(`<h2 id="the-str-command" tabindex="-1"><a class="header-anchor" href="#the-str-command" aria-hidden="true">#</a> The <code>str</code> command</h2><p>Many string functions are subcommands of the <code>str</code> command. You can get a full list using <code>help str</code>.</p><p>For example, you can look if a string contains a particular character using <code>str contains</code>:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;hello world&quot;</span> <span class="token operator">|</span> str contains <span class="token string">&quot;w&quot;</span>
<span class="token boolean">true</span>
</code></pre></div><h3 id="trimming-strings" tabindex="-1"><a class="header-anchor" href="#trimming-strings" aria-hidden="true">#</a> Trimming Strings</h3>`,5),F=e("You can trim the sides of a string with the "),$=s("code",null,"str trim",-1),X=e(" command. By default, the "),B=s("code",null,"str trim",-1),W=e(" commands trims whitespace from both sides of the string. For example"),H=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;       My   string   &#39;</span> <span class="token operator">|</span> str trim
My   string
</code></pre></div><p>You can specificy on which side the trimming occurs with the <code>--right</code> and <code>--left</code> options.</p><p>To trim a specific character, use <code>--char &lt;Character&gt;</code> to specificy the character to trim.</p><p>Here&#39;s an example of all the options in action:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;=== Nu shell ===&#39;</span> <span class="token operator">|</span> str trim -r -c <span class="token string">&#39;=&#39;</span>
<span class="token operator">==</span><span class="token operator">=</span> Nu shell
</code></pre></div><h3 id="substrings" tabindex="-1"><a class="header-anchor" href="#substrings" aria-hidden="true">#</a> Substrings</h3><p>Substrings are slices of a string. They have startpoint and an endpoint. Heres an example of using a substring:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;Hello World!&#39;</span> <span class="token operator">|</span> str index-of <span class="token string">&#39;o&#39;</span>
<span class="token number">4</span>
<span class="token operator">&gt;</span> <span class="token string">&#39;Hello World!&#39;</span> <span class="token operator">|</span> str index-of <span class="token string">&#39;r&#39;</span>
<span class="token number">8</span>
<span class="token operator">&gt;</span> <span class="token string">&#39;Hello World!&#39;</span> <span class="token operator">|</span> str substring <span class="token string">&#39;4,8&#39;</span>
o Wo
</code></pre></div><h3 id="string-padding" tabindex="-1"><a class="header-anchor" href="#string-padding" aria-hidden="true">#</a> String padding</h3>`,9),C=e("With the "),Y=s("code",null,"str lpad",-1),M=e(" and "),P=s("code",null,"str rpad",-1),U=e(" commands you can add padding to a string. Padding adds characters to string until it's a certain length. For example:"),V=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;1234&#39;</span> <span class="token operator">|</span> str lpad -l <span class="token number">10</span> -c <span class="token string">&#39;0&#39;</span>
0000001234
<span class="token operator">&gt;</span> <span class="token string">&#39;1234&#39;</span> <span class="token operator">|</span> str rpad -l <span class="token number">10</span> -c <span class="token string">&#39;0&#39;</span> <span class="token operator">|</span> str length
<span class="token number">10</span>
</code></pre></div><h3 id="reversing-strings" tabindex="-1"><a class="header-anchor" href="#reversing-strings" aria-hidden="true">#</a> Reversing Strings</h3>`,2),A=e("This can be done easily with the "),R=s("code",null,"str reverse",-1),E=e(" command."),L=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;Nushell&#39;</span> <span class="token operator">|</span> str reverse
llehsuN
<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;Nushell&#39;</span> <span class="token string">&#39;is&#39;</span> <span class="token string">&#39;cool&#39;</span><span class="token punctuation">]</span> <span class="token operator">|</span> str reverse
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token number">0</span> \u2502 llehsuN \u2502
\u2502 <span class="token number">1</span> \u2502 si      \u2502
\u2502 <span class="token number">2</span> \u2502 looc    \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><h2 id="string-parsing" tabindex="-1"><a class="header-anchor" href="#string-parsing" aria-hidden="true">#</a> String Parsing</h2>`,2),D=e("With the "),j=s("code",null,"parse",-1),z=e(" command you can parse a string into columns. For example:"),G=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;Nushell is the best&#39;</span> <span class="token operator">|</span> parse <span class="token string">&#39;{shell} is {type}&#39;</span>
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token comment"># \u2502  shell  \u2502   type   \u2502</span>
\u251C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 <span class="token number">0</span> \u2502 Nushell \u2502 the best \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
<span class="token operator">&gt;</span> <span class="token string">&#39;Bash is kinda cringe&#39;</span> <span class="token operator">|</span> parse --regex <span class="token string">&#39;(?P&lt;shell&gt;\\w+) is (?P&lt;type&gt;[\\w\\s]+)&#39;</span>
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token comment"># \u2502 shell \u2502     type     \u2502</span>
\u251C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 <span class="token number">0</span> \u2502 Bash  \u2502 kinda cringe \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><h2 id="converting-strings" tabindex="-1"><a class="header-anchor" href="#converting-strings" aria-hidden="true">#</a> Converting Strings</h2><p>There are multiple ways to convert strings to and from other types.</p><h3 id="to-string" tabindex="-1"><a class="header-anchor" href="#to-string" aria-hidden="true">#</a> To String</h3>`,4),I=e("Using "),J=s("code",null,"into string",-1),K=e(". e.g. "),O=s("code",null,"123 | into string",-1),Q=s("li",null,[e("Using string interpolation. e.g. "),s("code",null,"$'(123)'")],-1),Z=e("Using "),ss=s("code",null,"build-string",-1),es=e(". e.g. "),ns=s("code",null,"build-string (123)",-1),ts=s("h3",{id:"from-string",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#from-string","aria-hidden":"true"},"#"),e(" From String")],-1),as=e("Using "),os=s("code",null,"into <type>",-1),rs=e(". e.g. "),is=s("code",null,"'123' | into int",-1),ls=s("h2",{id:"coloring-strings",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#coloring-strings","aria-hidden":"true"},"#"),e(" Coloring Strings")],-1),cs=e("You can color strings with the "),ds=s("code",null,"ansi",-1),ps=e(" command. For example:"),hs=s("div",{class:"language-bash ext-sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token operator"},">"),e(),s("span",{class:"token string"},"$'(ansi purple_bold)This text is a bold purple!(ansi reset)'"),e(`
`)])])],-1),gs=s("p",null,[s("code",null,"ansi purple_bold"),e(" makes the text a bold purple "),s("code",null,"ansi reset"),e(" resets the coloring to the default. (Tip: You should always end colored strings with "),s("code",null,"ansi reset"),e(")")],-1);function us(ms,_s){const n=i("RouterLink");return l(),c("div",null,[p,s("p",null,[h,t(n,{to:"/book/commands/split_row.html"},{default:a(()=>[g]),_:1}),u,m,_,b,k]),s("p",null,[f,t(n,{to:"/book/commands/split_column.html"},{default:a(()=>[w]),_:1}),x,v,y]),s("p",null,[q,t(n,{to:"/book/commands/split_chars.html"},{default:a(()=>[S]),_:1}),T]),N,s("p",null,[F,t(n,{to:"/book/commands/str_trim.html"},{default:a(()=>[$]),_:1}),X,t(n,{to:"/book/commands/str_trim.html"},{default:a(()=>[B]),_:1}),W]),H,s("p",null,[C,t(n,{to:"/book/commands/str_lpad.html"},{default:a(()=>[Y]),_:1}),M,t(n,{to:"/book/commands/str_rpad.html"},{default:a(()=>[P]),_:1}),U]),V,s("p",null,[A,t(n,{to:"/book/commands/str_reverse.html"},{default:a(()=>[R]),_:1}),E]),L,s("p",null,[D,t(n,{to:"/book/commands/parse.html"},{default:a(()=>[j]),_:1}),z]),G,s("ol",null,[s("li",null,[I,t(n,{to:"/book/commands/into_string.html"},{default:a(()=>[J]),_:1}),K,O]),Q,s("li",null,[Z,t(n,{to:"/book/commands/build-string.html"},{default:a(()=>[ss]),_:1}),es,ns])]),ts,s("ol",null,[s("li",null,[as,t(n,{to:"/book/commands/into.html"},{default:a(()=>[os]),_:1}),rs,is])]),ls,s("p",null,[cs,t(n,{to:"/book/commands/ansi.html"},{default:a(()=>[ds]),_:1}),ps]),hs,gs])}var ks=r(d,[["render",us],["__file","working_with_strings.html.vue"]]);export{ks as default};
