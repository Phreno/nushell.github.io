import{_ as c,M as d,p as l,q as p,Q as e,t as s,N as t,U as n,a1 as o}from"./framework-344bb0e4.js";const r={},i=o(`<h1 id="标准输入、输出和退出码" tabindex="-1"><a class="header-anchor" href="#标准输入、输出和退出码" aria-hidden="true">#</a> 标准输入、输出和退出码</h1><p>Nushell 和外部命令之间互操作的一个重要部分是与来自外部的标准数据流一起工作。</p><p>这些重要数据流中的第一个是标准输出流(stdout)。</p><h2 id="标准输出流" tabindex="-1"><a class="header-anchor" href="#标准输出流" aria-hidden="true">#</a> 标准输出流</h2><p>标准输出流(stdout)是大多数外部应用程序将数据发送到管道或屏幕上的方式。如果由外部应用发送到其 stdout 的数据是管道的一部分，Nushell 会默认接收。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> external <span class="token operator">|</span> str <span class="token function">join</span>
</code></pre></div><p>以上将调用名为<code>external</code>的外部命令，并将 stdout 输出流重定向到管道中。有了这个重定向，Nushell 就可以把数据传递给管道中的下一个命令，这里是<code>str join</code>。</p><p>如果没有管道，Nushell 将不做任何重定向，允许它直接打印到屏幕上。</p><h2 id="标准错误流" tabindex="-1"><a class="header-anchor" href="#标准错误流" aria-hidden="true">#</a> 标准错误流</h2><p>另一个外部应用程序经常用来打印错误信息的常见流是标准错误流(stderr)。默认情况下，Nushell 不会对 stderr 做任何重定向，这意味着它会默认打印到屏幕上。</p><p>你可以通过使用<code>do -i { ... }</code>来强制 Nushell 做一个重定向。例如，如果我们想调用上面的外部程序并重定向其 stderr，我们可以这样写：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">do</span> <span class="token parameter variable">-i</span> <span class="token punctuation">{</span> external <span class="token punctuation">}</span>
</code></pre></div><h2 id="退出码" tabindex="-1"><a class="header-anchor" href="#退出码" aria-hidden="true">#</a> 退出码</h2><p>最后，外部命令有一个 &quot;退出代码(exit code)&quot;。这些代码有助于给调用者一个提示，说明该命令是否运行成功。</p><p>Nushell 通过两种方式之一跟踪最近完成的外部命令的最后退出代码。第一种方式是使用<code>LAST_EXIT_CODE</code>环境变量。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">do</span> <span class="token parameter variable">-i</span> <span class="token punctuation">{</span> external <span class="token punctuation">}</span>
<span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$env</span>.LAST_EXIT_CODE
</code></pre></div>`,16),u=e("code",null,"complete",-1),h={id:"使用-complete-命令",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#使用-complete-命令","aria-hidden":"true"},"#",-1),m=e("code",null,"complete",-1),k=e("code",null,"complete",-1),x=e("code",null,"cat",-1),g=e("code",null,"complete",-1),f=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">do</span> <span class="token parameter variable">-i</span> <span class="token punctuation">{</span> <span class="token function">cat</span> unknown.txt <span class="token punctuation">}</span> <span class="token operator">|</span> complete
╭───────────┬─────────────────────────────────────────────╮
│ stdout    │                                             │
│ stderr    │ cat: unknown.txt: No such <span class="token function">file</span> or directory │
│ exit_code │ <span class="token number">1</span>                                           │
╰───────────┴─────────────────────────────────────────────╯
</code></pre></div><h2 id="原始流" tabindex="-1"><a class="header-anchor" href="#原始流" aria-hidden="true">#</a> 原始流</h2><p>在 Nushell 中，stdout 和 stderr 都表现为 &quot;原始流&quot;。这些流是字节流，而不是结构化的流，而后者才是 Nushell 内部命令所使用的。</p><p>因为字节流可能很难处理，特别是考虑到使用输出作为文本数据是很常见的，Nushell 试图将原始流转换为文本数据。这使得其他命令可以拉取外部命令的输出，并接收他们可以进一步处理的字符串。</p><p>Nushell 试图将流转换为 UTF-8 文本，如果在任何时候转换失败，流的其余部分就会被假定为始终是字节。</p>`,5),b=e("code",null,"decode",-1),v=e("code",null,"decode",-1),N=e("code",null,"decode",-1),w=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 0x<span class="token punctuation">[</span>8a 4c<span class="token punctuation">]</span> <span class="token operator">|</span> decode shift-jis
貝
</code></pre></div>`,1);function T(q,E){const a=d("RouterLink");return l(),p("div",null,[i,e("p",null,[s("第二种是使用一个叫做"),t(a,{to:"/commands/docs/complete.html"},{default:n(()=>[u]),_:1}),s("的命令。")]),e("h2",h,[_,s(" 使用 "),t(a,{to:"/commands/docs/complete.html"},{default:n(()=>[m]),_:1}),s(" 命令")]),e("p",null,[t(a,{to:"/commands/docs/complete.html"},{default:n(()=>[k]),_:1}),s("命令允许你运行一个外部程序直到完成，并将 stdout, stderr, 和退出代码收集在一条记录中。")]),e("p",null,[s("如果我们尝试在一个不存在的文件上运行外部的"),x,s("，我们可以看到"),t(a,{to:"/commands/docs/complete.html"},{default:n(()=>[g]),_:1}),s("对流的处理，包括重定向的 stderr：")]),f,e("p",null,[s("如果你想对字节流的解码有更多的控制，你可以使用 "),t(a,{to:"/commands/docs/decode.html"},{default:n(()=>[b]),_:1}),s(" 命令。"),t(a,{to:"/commands/docs/decode.html"},{default:n(()=>[v]),_:1}),s("命令可以插入到外部或其他原始流创建命令之后的管道中，它将根据你给"),N,s("的参数来处理字节的解码。例如，你可以这样对 shift-jis 文本进行解码：")]),w])}const y=c(r,[["render",T],["__file","stdout_stderr_exit_codes.html.vue"]]);export{y as default};