import{_ as d,r as u,o as e,c as o,a as l,b as c,e as s,d as n}from"./app.ea1b8c3e.js";const r={},a=s(`<h1 id="\u4ECE-bash-\u5230-nu" tabindex="-1"><a class="header-anchor" href="#\u4ECE-bash-\u5230-nu" aria-hidden="true">#</a> \u4ECE Bash \u5230 Nu</h1><p>\u5982\u679C\u4F60\u662F\u6765\u81EA Windows \u4E0A\u7684<code>Git Bash</code>\u7528\u6237\uFF0C\u90A3\u4E48\u4F60\u4E60\u60EF\u7684\u5916\u90E8\u547D\u4EE4\uFF08bash\u3001grep \u7B49\uFF09\u5728<code>nu</code>\u4E2D\u9ED8\u8BA4\u662F\u4E0D\u53EF\u7528\u7684\uFF08\u9664\u975E\u4F60\u5728 Windows \u8DEF\u5F84\u73AF\u5883\u53D8\u91CF\u4E2D\u660E\u786E\u5305\u542B\u4E86\u5B83\u4EEC\uFF09\u3002 \u8981\u4F7F\u8FD9\u4E9B\u547D\u4EE4\u5728<code>nu</code>\u4E2D\u53EF\u7528\uFF0C\u8BF7\u5728\u4F60\u7684<code>config.nu</code>\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u4E00\u884C\uFF0C\u7528<code>append</code>\u6216<code>prepend</code>\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>let-env Path <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$env</span>.Path <span class="token operator">|</span> prepend <span class="token string">&#39;C:\\Program Files\\Git\\usr\\bin&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6CE8\u610F\uFF1A\u672C\u8868\u9488\u5BF9 Nu 0.60.0 \u6216\u66F4\u9AD8\u7248\u672C\u3002</p>`,4),h=l("thead",null,[l("tr",null,[l("th",null,"Bash"),l("th",null,"Nu"),l("th",null,"Task")])],-1),i=l("tr",null,[l("td",null,[l("code",null,"ls")]),l("td",null,[l("code",null,"ls")]),l("td",null,"\u5217\u51FA\u5F53\u524D\u76EE\u5F55\u4E2D\u7684\u6587\u4EF6")],-1),_=l("tr",null,[l("td",null,[l("code",null,"ls <dir>")]),l("td",null,[l("code",null,"ls <dir>")]),l("td",null,"\u5217\u51FA\u7ED9\u5B9A\u76EE\u5F55\u4E2D\u7684\u6587\u4EF6")],-1),p=l("tr",null,[l("td",null,[l("code",null,"ls pattern*")]),l("td",null,[l("code",null,"ls pattern*")]),l("td",null,"\u5217\u51FA\u5339\u914D\u7ED9\u5B9A\u6A21\u5F0F\u7684\u6587\u4EF6")],-1),m=l("tr",null,[l("td",null,[l("code",null,"ls -la")]),l("td",null,[l("code",null,"ls --long --all"),n(" or "),l("code",null,"ls -la")]),l("td",null,"\u5217\u51FA\u5305\u542B\u6240\u6709\u53EF\u7528\u4FE1\u606F\u7684\u6587\u4EF6\uFF0C\u5305\u62EC\u9690\u85CF\u6587\u4EF6")],-1),f=l("tr",null,[l("td",null,[l("code",null,"ls -d */")]),l("td",null,[l("code",null,"ls | where type == dir")]),l("td",null,"\u5217\u51FA\u76EE\u5F55")],-1),b=l("tr",null,[l("td",null,[l("code",null,"find . -name *.rs")]),l("td",null,[l("code",null,"ls **/*.rs")]),l("td",null,"\u9012\u5F52\u5730\u67E5\u627E\u5339\u914D\u7ED9\u5B9A\u6A21\u5F0F\u7684\u6240\u6709\u6587\u4EF6")],-1),g=l("tr",null,[l("td",null,[l("code",null,"find . -name Makefile | xargs vim")]),l("td",null,[l("code",null,"ls \\*\\*/Makefile | get name | vim $in")]),l("td",null,"\u5C06\u503C\u4F5C\u4E3A\u547D\u4EE4\u53C2\u6570\u4F20\u9012")],-1),v=l("tr",null,[l("td",null,[l("code",null,"cd <directory>")]),l("td",null,[l("code",null,"cd <directory>")]),l("td",null,"\u5207\u6362\u5230\u7ED9\u5B9A\u76EE\u5F55")],-1),O=l("tr",null,[l("td",null,[l("code",null,"cd")]),l("td",null,[l("code",null,"cd")]),l("td",null,"\u5207\u6362\u5230\u7528\u6237\u4E3B\u76EE\u5F55")],-1),k=l("tr",null,[l("td",null,[l("code",null,"cd -")]),l("td",null,[l("code",null,"cd -")]),l("td",null,"\u5207\u6362\u5230\u524D\u4E00\u4E2A\u76EE\u5F55")],-1),x=l("tr",null,[l("td",null,[l("code",null,"mkdir <path>")]),l("td",null,[l("code",null,"mkdir <path>")]),l("td",null,"\u521B\u5EFA\u7ED9\u5B9A\u7684\u8DEF\u5F84")],-1),$=l("tr",null,[l("td",null,[l("code",null,"mkdir -p <path>")]),l("td",null,[l("code",null,"mkdir <path>")]),l("td",null,"\u521B\u5EFA\u7ED9\u5B9A\u7684\u8DEF\u5F84\uFF0C\u5982\u679C\u7236\u76EE\u5F55\u4E0D\u5B58\u5728\u5219\u81EA\u52A8\u521B\u5EFA")],-1),A=l("tr",null,[l("td",null,[l("code",null,"touch test.txt")]),l("td",null,[l("code",null,"touch test.txt")]),l("td",null,"\u65B0\u5EFA\u6587\u4EF6")],-1),P=l("tr",null,[l("td",null,[l("code",null,"> <path>")]),l("td",null,[l("code",null,"| save --raw <path>")]),l("td",null,"\u4FDD\u5B58\u5B57\u7B26\u4E32\u5230\u7ED9\u5B9A\u6587\u4EF6")],-1),w=l("tr",null,[l("td",null,[l("code",null,">> <path>")]),l("td",null,[l("code",null,"| save --raw --append <path>")]),l("td",null,"\u8FFD\u52A0\u5B57\u7B26\u4E32\u5230\u7ED9\u5B9A\u6587\u4EF6")],-1),F=l("tr",null,[l("td",null,[l("code",null,"cat <path>")]),l("td",null,[l("code",null,"open --raw <path>")]),l("td",null,"\u663E\u793A\u7ED9\u5B9A\u6587\u4EF6\u7684\u5185\u5BB9")],-1),B=l("tr",null,[l("td"),l("td",null,[l("code",null,"open <path>")]),l("td",null,"\u5C06\u6587\u4EF6\u4F5C\u4E3A\u7ED3\u6784\u5316\u6570\u636E\u8BFB\u53D6")],-1),T=l("tr",null,[l("td",null,[l("code",null,"mv <source> <dest>")]),l("td",null,[l("code",null,"mv <source> <dest>")]),l("td",null,"\u79FB\u52A8\u6587\u4EF6\u5230\u65B0\u7684\u4F4D\u7F6E")],-1),H=l("tr",null,[l("td",null,[l("code",null,"cp <source> <dest>")]),l("td",null,[l("code",null,"cp <source> <dest>")]),l("td",null,"\u590D\u5236\u6587\u4EF6\u5230\u65B0\u7684\u4F4D\u7F6E")],-1),N=l("tr",null,[l("td",null,[l("code",null,"cp -r <source> <dest>")]),l("td",null,[l("code",null,"cp -r <source> <dest>")]),l("td",null,"\u9012\u5F52\u5730\u5C06\u76EE\u5F55\u590D\u5236\u5230\u4E00\u4E2A\u65B0\u7684\u4F4D\u7F6E")],-1),y=l("tr",null,[l("td",null,[l("code",null,"rm <path>")]),l("td",null,[l("code",null,"rm <path>")]),l("td",null,"\u5220\u9664\u7ED9\u5B9A\u7684\u6587\u4EF6")],-1),R=l("tr",null,[l("td"),l("td",null,[l("code",null,"rm -t <path>")]),l("td",null,"\u5C06\u7ED9\u5B9A\u7684\u6587\u4EF6\u79FB\u5230\u7CFB\u7EDF\u5783\u573E\u7BB1")],-1),V=l("tr",null,[l("td",null,[l("code",null,"rm -rf <path>")]),l("td",null,[l("code",null,"rm -r <path>")]),l("td",null,"\u9012\u5F52\u5730\u5220\u9664\u7ED9\u5B9A\u7684\u8DEF\u5F84")],-1),E=l("td",null,[l("code",null,"date -d <date>")],-1),W=l("td",null,[l("code",null,'"<date>" | into datetime -f <format>')],-1),C=n("\u89E3\u6790\u65E5\u671F ("),G={href:"https://docs.rs/chrono/0.4.15/chrono/format/strftime/index.html",target:"_blank",rel:"noopener noreferrer"},I=n("\u65E5\u671F\u683C\u5F0F\u6587\u6863"),L=n(")"),M=l("tr",null,[l("td",null,[l("code",null,"sed")]),l("td",null,[l("code",null,"str replace")]),l("td",null,"\u67E5\u627E\u548C\u66FF\u6362\u4E00\u4E2A\u5B57\u7B26\u4E32\u4E2D\u7684\u6A21\u5F0F")],-1),S=l("tr",null,[l("td",null,[l("code",null,"grep <pattern>")]),l("td",null,[l("code",null,"where $it =~ <substring>"),n(" or "),l("code",null,"find <substring>")]),l("td",null,"\u8FC7\u6EE4\u5305\u542B\u7279\u5B9A\u5B57\u7B26\u4E32\u7684\u5B57\u7B26\u4E32")],-1),D=l("tr",null,[l("td",null,[l("code",null,"man <command>")]),l("td",null,[l("code",null,"help <command>")]),l("td",null,"\u83B7\u5F97\u7279\u5B9A\u547D\u4EE4\u7684\u5E2E\u52A9\u4FE1\u606F")],-1),j=l("tr",null,[l("td"),l("td",null,[l("code",null,"help commands")]),l("td",null,"\u5217\u51FA\u6240\u6709\u53EF\u7528\u7684\u547D\u4EE4")],-1),q=l("tr",null,[l("td"),l("td",null,[l("code",null,"help --find <string>")]),l("td",null,"\u5728\u6240\u6709\u53EF\u7528\u7684\u547D\u4EE4\u4E2D\u641C\u7D22")],-1),z=l("tr",null,[l("td",null,[l("code",null,"command1 && command2")]),l("td",null,[l("code",null,"command1; command2")]),l("td",null,"\u8FD0\u884C\u4E00\u6761\u547D\u4EE4\uFF0C\u5982\u679C\u6210\u529F\u7684\u8BDD\uFF0C\u518D\u8FD0\u884C\u7B2C\u4E8C\u6761")],-1),J=l("tr",null,[l("td",null,[l("code",null,"stat $(which git)")]),l("td",null,[l("code",null,"stat (which git).path")]),l("td",null,"\u4F7F\u7528\u547D\u4EE4\u8F93\u51FA\u4F5C\u4E3A\u5176\u4ED6\u547D\u4EE4\u7684\u53C2\u6570")],-1),K=l("tr",null,[l("td",null,[l("code",null,"echo $PATH")]),l("td",null,[l("code",null,"echo $env.PATH")]),l("td",null,"\u67E5\u770B\u5F53\u524D\u8DEF\u5F84")],-1),Q=l("tr",null,[l("td",null,[l("code",null,"<update ~/.bashrc>")]),l("td",null,[l("code",null,"vim $nu.config-path")]),l("td",null,"\u6C38\u4E45\u5730\u66F4\u65B0 PATH")],-1),U=l("tr",null,[l("td",null,[l("code",null,"export PATH = $PATH:/usr/other/bin")]),l("td",null,[l("code",null,"let-env PATH = ($env.PATH | append /usr/other/bin)")]),l("td",null,"\u4E34\u65F6\u66F4\u65B0 PATH")],-1),X=l("tr",null,[l("td",null,[l("code",null,"export")]),l("td",null,[l("code",null,"echo $env")]),l("td",null,"\u5217\u51FA\u5F53\u524D\u7684\u73AF\u5883\u53D8\u91CF")],-1),Y=l("tr",null,[l("td",null,[l("code",null,"<update ~/.bashrc>")]),l("td",null,[l("code",null,"vim $nu.config-path")]),l("td",null,"\u6C38\u4E45\u5730\u66F4\u65B0\u73AF\u5883\u53D8\u91CF")],-1),Z=l("tr",null,[l("td",null,[l("code",null,"FOO=BAR ./bin")]),l("td",null,[l("code",null,"FOO=BAR ./bin")]),l("td",null,"\u4E34\u65F6\u4FEE\u6539\u73AF\u5883\u53D8\u91CF")],-1),ll=l("tr",null,[l("td",null,[l("code",null,"export FOO=BAR")]),l("td",null,[l("code",null,"let-env FOO = BAR")]),l("td",null,"\u4E3A\u5F53\u524D\u4F1A\u8BDD\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF")],-1),nl=l("tr",null,[l("td",null,[l("code",null,"echo $FOO")]),l("td",null,[l("code",null,"echo $env.FOO")]),l("td",null,"\u4F7F\u7528\u73AF\u5883\u53D8\u91CF")],-1),tl=l("tr",null,[l("td",null,[l("code",null,"unset FOO")]),l("td",null,[l("code",null,"hide FOO")]),l("td",null,"\u53D6\u6D88\u5BF9\u5F53\u524D\u4F1A\u8BDD\u7684\u73AF\u5883\u53D8\u91CF\u8BBE\u7F6E")],-1),dl=l("tr",null,[l("td",null,[l("code",null,'alias s="git status -sb"')]),l("td",null,[l("code",null,"alias s = git status -sb")]),l("td",null,"\u4E34\u65F6\u5B9A\u4E49\u4E00\u4E2A\u522B\u540D")],-1),ul=l("tr",null,[l("td",null,[l("code",null,"type FOO")]),l("td",null,[l("code",null,"which FOO")]),l("td",null,"\u663E\u793A\u4E00\u4E2A\u547D\u4EE4\u7684\u4FE1\u606F\uFF08\u5185\u7F6E\u3001\u522B\u540D\u6216\u53EF\u6267\u884C\uFF09")],-1),el=l("tr",null,[l("td",null,[l("code",null,"<update ~/.bashrc>")]),l("td",null,[l("code",null,"vim $nu.config-path")]),l("td",null,"\u6C38\u4E45\u6DFB\u52A0\u548C\u7F16\u8F91\u522B\u540D\uFF08\u65B0\u5F00Shell\u4F1A\u8BDD\u751F\u6548\uFF09")],-1),ol=l("tr",null,[l("td",null,[l("code",null,"bash -c <commands>")]),l("td",null,[l("code",null,"nu -c <commands>")]),l("td",null,"\u8FD0\u884C\u4E00\u7EC4\u547D\u4EE4\uFF08\u9700\u89810.9.1\u6216\u66F4\u9AD8\u7248\u672C\uFF09")],-1),cl=l("tr",null,[l("td",null,[l("code",null,"bash <script file>")]),l("td",null,[l("code",null,"nu <script file>")]),l("td",null,"\u8FD0\u884C\u4E00\u4E2A\u811A\u672C\u6587\u4EF6\uFF08\u9700\u89810.9.1\u6216\u66F4\u9AD8\u7248\u672C\uFF09")],-1),sl=l("tr",null,[l("td",null,[l("code",null,"\\")]),l("td",null,[l("code",null,"( <command> )")]),l("td",null,[n("\u5F53\u547D\u4EE4\u88AB "),l("code",null,"("),n(" \u548C "),l("code",null,")"),n(" \u5305\u88F9\u7684\u65F6\u5019\u53EF\u4EE5\u8DE8\u591A\u884C")])],-1),rl=l("tr",null,[l("td",null,[l("code",null,"pwd")]),l("td",null,[l("code",null,"$env.PWD")]),l("td",null,"\u663E\u793A\u5F53\u524D\u76EE\u5F55")],-1);function al(hl,il){const t=u("ExternalLinkIcon");return e(),o("div",null,[a,l("table",null,[h,l("tbody",null,[i,_,p,m,f,b,g,v,O,k,x,$,A,P,w,F,B,T,H,N,y,R,V,l("tr",null,[E,W,l("td",null,[C,l("a",G,[I,c(t)]),L])]),M,S,D,j,q,z,J,K,Q,U,X,Y,Z,ll,nl,tl,dl,ul,el,ol,cl,sl,rl])])])}var pl=d(r,[["render",al],["__file","coming_from_bash.html.vue"]]);export{pl as default};
