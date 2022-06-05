import{_ as c,r as p,o as l,c as i,a as s,b as t,w as e,d as n,e as o}from"./app.68c16707.js";const u={},d=s("h1",{id:"\u81EA\u5B9A\u4E49\u8865\u5168",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u8865\u5168","aria-hidden":"true"},"#"),n(" \u81EA\u5B9A\u4E49\u8865\u5168")],-1),r=n("\u81EA\u5B9A\u4E49\u8865\u5168\u5141\u8BB8\u4F60\u6DF7\u5408\u4F7F\u7528 Nushell \u7684\u4E24\u4E2A\u529F\u80FD\uFF1A\u81EA\u5B9A\u4E49\u547D\u4EE4\u548C\u8865\u5168\u3002\u6709\u4E86\u5B83\u4EEC\uFF0C\u4F60\u5C31\u80FD\u591F\u521B\u5EFA\u652F\u6301\u5BF9\u4F4D\u7F6E\u53C2\u6570\u548C\u6807\u5FD7(Flags)\u53C2\u6570\u8FDB\u884C\u81EA\u52A8\u8865\u5168\u7684\u547D\u4EE4\u3002\u8FD9\u4E9B\u81EA\u5B9A\u4E49\u8865\u5168\u65E2\u9002\u7528\u4E8E\u81EA\u5B9A\u4E49\u547D\u4EE4\uFF0C\u4E5F\u9002\u7528\u4E8E "),h=n("\u5DF2\u77E5\u7684\u5916\u90E8\u6216"),m=s("code",null,"extern",-1),_=n("\u547D\u4EE4"),k=n("\u3002"),g=o(`<p>\u81EA\u5B9A\u4E49\u547D\u4EE4\u6709\u4E24\u4E2A\u90E8\u5206\uFF1A\u5904\u7406\u8865\u5168\u7684\u547D\u4EE4\u548C\u4F7F\u7528<code>@</code>\u5C06\u6B64\u547D\u4EE4\u9644\u52A0\u5230\u53E6\u4E00\u4E2A\u547D\u4EE4\u7684\u7C7B\u578B\u4E2D\u3002</p><h2 id="\u81EA\u5B9A\u4E49\u8865\u5168\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u8865\u5168\u4F8B\u5B50" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u8865\u5168\u4F8B\u5B50</h2><p>\u6211\u4EEC\u6765\u770B\u4E00\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> def animals <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token string">&quot;cat&quot;</span>, <span class="token string">&quot;dog&quot;</span>, <span class="token string">&quot;eel&quot;</span> <span class="token punctuation">]</span> <span class="token punctuation">}</span>
<span class="token operator">&gt;</span> def my-command <span class="token punctuation">[</span>animal: string@animals<span class="token punctuation">]</span> <span class="token punctuation">{</span> print <span class="token variable">$animal</span> <span class="token punctuation">}</span>
<span class="token operator">&gt;|</span> my-command
<span class="token function">cat</span>                 dog                 eel
</code></pre></div><p>\u5728\u7B2C\u4E00\u884C\u4E2D\uFF0C\u6211\u4EEC\u521B\u5EFA\u4E86\u4E00\u4E2A\u81EA\u5B9A\u4E49\u547D\u4EE4\uFF0C\u5C06\u8FD4\u56DE\u4E09\u4E2A\u4E0D\u540C\u52A8\u7269\u7684\u5217\u8868\u3002\u8FD9\u4E9B\u662F\u6211\u4EEC\u60F3\u5728\u8865\u5168\u4E2D\u4F7F\u7528\u7684\u503C\u3002\u4E00\u65E6\u6211\u4EEC\u521B\u5EFA\u4E86\u8FD9\u4E2A\u547D\u4EE4\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u7528\u5B83\u6765\u4E3A\u5176\u4ED6\u81EA\u5B9A\u4E49\u547D\u4EE4\u548C <code>extern</code> \u63D0\u4F9B\u8865\u5168\u3002</p><p>\u5728\u7B2C\u4E8C\u884C\uFF0C\u6211\u4EEC\u4F7F\u7528<code>string@animals</code>\u3002\u8FD9\u544A\u8BC9\u4E86 Nushell \u4E24\u4EF6\u4E8B\uFF1A\u7528\u4E8E\u7C7B\u578B\u68C0\u67E5\u7684\u53C2\u6570\u7684\u5F62\u72B6\uFF0C\u4EE5\u53CA\u5982\u679C\u7528\u6237\u60F3\u5728\u8BE5\u4F4D\u7F6E\u8865\u5168\u8F93\u5165\u503C\uFF0C\u9700\u8981\u4F7F\u7528\u7684\u81EA\u5B9A\u4E49\u5B8C\u6210\u3002</p><p>\u5728\u7B2C\u4E09\u884C\uFF0C\u6211\u4EEC\u8F93\u5165\u6211\u4EEC\u7684\u81EA\u5B9A\u4E49\u547D\u4EE4\u7684\u540D\u79F0<code>my-command</code>\uFF0C\u7136\u540E\u8F93\u5165\u7A7A\u683C\uFF0C\u518D\u8F93\u5165<code>&lt;tab&gt;</code>\u952E\uFF0C\u5C31\u53EF\u4EE5\u89E6\u53D1\u6211\u4EEC\u7684\u81EA\u52A8\u8865\u5168\u529F\u80FD\u3002\u81EA\u5B9A\u4E49\u8865\u5168\u7684\u5DE5\u4F5C\u65B9\u5F0F\u4E0E\u7CFB\u7EDF\u4E2D\u7684\u5176\u4ED6\u8865\u5168\u65B9\u5F0F\u76F8\u540C\uFF0C\u6BD4\u5982\u5141\u8BB8\u4F60\u8F93\u5165<code>e</code>\uFF0C\u7136\u540E\u6309<code>&lt;tab&gt;</code>\u952E\uFF0C\u5F97\u5230 &quot;eel&quot; \u81EA\u52A8\u8865\u5168\u3002</p><h2 id="\u6A21\u5757\u548C\u81EA\u5B9A\u4E49\u8865\u5168" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757\u548C\u81EA\u5B9A\u4E49\u8865\u5168" aria-hidden="true">#</a> \u6A21\u5757\u548C\u81EA\u5B9A\u4E49\u8865\u5168</h2><p>\u4F60\u53EF\u80FD\u66F4\u559C\u6B22\u8BA9\u4F60\u7684\u81EA\u5B9A\u4E49\u8865\u5168\u8FDC\u79BB\u4F60\u7684\u4EE3\u7801\u7684\u516C\u5171 API\u3002\u4E3A\u6B64\uFF0C\u4F60\u53EF\u4EE5\u5C06\u6A21\u5757\u548C\u81EA\u5B9A\u4E49\u8865\u5168\u7ED3\u5408\u8D77\u6765\u3002</p><p>\u8BA9\u6211\u4EEC\u628A\u4E0A\u9762\u7684\u4F8B\u5B50\u653E\u5728\u4E00\u4E2A\u6A21\u5757\u4E2D\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>module commands <span class="token punctuation">{</span>
    def animals <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span><span class="token string">&quot;cat&quot;</span>, <span class="token string">&quot;dog&quot;</span>, <span class="token string">&quot;eel&quot;</span> <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token builtin class-name">export</span> def my-command <span class="token punctuation">[</span>animal: string@animals<span class="token punctuation">]</span> <span class="token punctuation">{</span>
        print <span class="token variable">$animal</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728\u6211\u4EEC\u7684\u6A21\u5757\u4E2D\uFF0C\u6211\u4EEC\u9009\u62E9\u53EA\u5BFC\u51FA\u81EA\u5B9A\u4E49\u547D\u4EE4<code>my-command</code>\uFF0C\u800C\u4E0D\u5BFC\u51FA\u81EA\u5B9A\u4E49\u8865\u5168<code>animals</code>\u3002\u8FD9\u4F7F\u5F97\u672C\u6A21\u5757\u7684\u7528\u6237\u53EF\u4EE5\u8C03\u7528\u547D\u4EE4\uFF0C\u751A\u81F3\u4F7F\u7528\u81EA\u5B9A\u4E49\u8865\u5168\u903B\u8F91\uFF0C\u800C\u4E0D\u9700\u8981\u8BBF\u95EE\u81EA\u5B9A\u4E49\u8865\u5168\u3002\u8FD9\u6837\u53EF\u4EE5\u8BA9 API \u66F4\u5E72\u51C0\uFF0C\u540C\u65F6\u4ECD\u7136\u63D0\u4F9B\u6240\u6709\u76F8\u540C\u7684\u597D\u5904\u3002</p><p>\u8FD9\u662F\u53EF\u80FD\u7684\uFF0C\u56E0\u4E3A\u4F7F\u7528<code>@</code>\u7684\u81EA\u5B9A\u4E49\u8865\u5168\u6807\u7B7E\u5728\u547D\u4EE4\u7B2C\u4E00\u6B21\u88AB\u89E3\u6790\u65F6\u5C31\u88AB\u9501\u5B9A\u4E86\u3002</p><h2 id="\u81EA\u5B9A\u4E49\u8865\u5168\u548C-extern" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u8865\u5168\u548C-extern" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u8865\u5168\u548C <code>extern</code></h2>`,14),x=n("\u4E00\u4E2A\u5F3A\u5927\u7684\u7EC4\u5408\u662F\u4E3A "),b=n("\u5DF2\u77E5\u7684"),f=s("code",null,"extern",-1),q=n("\u547D\u4EE4"),v=n(" \u6DFB\u52A0\u81EA\u5B9A\u4E49\u8865\u5168\u3002\u8FD9\u4E9B\u5DE5\u4F5C\u65B9\u5F0F\u4E0E\u5411\u81EA\u5B9A\u4E49\u547D\u4EE4\u6DFB\u52A0\u81EA\u5B9A\u4E49\u8865\u5168\u7684\u65B9\u5F0F\u76F8\u540C\uFF1A\u521B\u5EFA\u81EA\u5B9A\u4E49\u8865\u5168\uFF0C\u7136\u540E\u7528"),N=s("code",null,"@",-1),y=n("\u9644\u52A0\u5230 "),C=s("code",null,"extern",-1),V=n(" \u7684\u4E00\u4E2A\u4F4D\u7F6E\u53C2\u6570\u6216\u6807\u5FD7\u53C2\u6570\u7684\u7C7B\u578B\u4E2D\u3002"),B=o(`<p>\u5982\u679C\u4F60\u4ED4\u7EC6\u770B\u4E00\u4E0B\u9ED8\u8BA4\u914D\u7F6E\u4E2D\u7684\u4F8B\u5B50\uFF0C\u4F60\u4F1A\u770B\u5230\u8FD9\u4E2A\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> extern <span class="token string">&quot;git push&quot;</span> <span class="token punctuation">[</span>
    remote?: string@<span class="token string">&quot;nu-complete git remotes&quot;</span>, <span class="token comment"># the name of the remote</span>
    refspec?: string@<span class="token string">&quot;nu-complete git branches&quot;</span># the branch / refspec
    <span class="token punctuation">..</span>.
<span class="token punctuation">]</span>
</code></pre></div><p>\u81EA\u5B9A\u4E49\u8865\u5168\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u7684\u4F5C\u7528\u4E0E\u524D\u9762\u7684\u4F8B\u5B50\u4E2D\u7684\u4F5C\u7528\u76F8\u540C\u3002\u4E0A\u9762\u7684\u4F8B\u5B50\u6839\u636E\u7528\u6237\u5F53\u524D\u6240\u5904\u7684\u4F4D\u7F6E\uFF0C\u8C03\u7528\u4E86\u4E24\u4E2A\u4E0D\u540C\u7684\u81EA\u5B9A\u4E49\u8865\u5168\u3002</p>`,3);function w(z,A){const a=p("RouterLink");return l(),i("div",null,[d,s("p",null,[r,t(a,{to:"/zh-CN/book/externs.html"},{default:e(()=>[h,m,_]),_:1}),k]),g,s("p",null,[x,t(a,{to:"/zh-CN/book/externs.html"},{default:e(()=>[b,f,q]),_:1}),v,N,y,C,V]),B])}var L=c(u,[["render",w],["__file","custom_completions.html.vue"]]);export{L as default};
