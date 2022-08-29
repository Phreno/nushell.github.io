import{_ as r,r as l,o as a,c as i,a as e,b as n,d as t,e as s}from"./app.a6df64b1.js";const h={},d=e("h1",{id:"nushell-0-20",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-20","aria-hidden":"true"},"#"),t(" Nushell 0.20")],-1),c=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),u=e("p",null,"Today, we're releasing 0.20 of Nu. In this version, we're introducing some new features for working with rows, improvements to completions, and more.",-1),_=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),t(" Where to get it")],-1),p=t("Nu 0.20 is available as "),g={href:"https://github.com/nushell/nushell/releases/tag/0.20.0",target:"_blank",rel:"noopener noreferrer"},m=t("pre-built binaries"),f=t(" or from "),b={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},w=t("crates.io"),k=t(". If you have Rust installed you can install it using "),v=e("code",null,"cargo install nu",-1),y=t("."),x=s(`<p>If you want all the goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><h2 id="new-functionality" tabindex="-1"><a class="header-anchor" href="#new-functionality" aria-hidden="true">#</a> New functionality</h2><h3 id="each-group-and-each-window-ritobanrc" tabindex="-1"><a class="header-anchor" href="#each-group-and-each-window-ritobanrc" aria-hidden="true">#</a> <code>each group</code> and <code>each window</code> (ritobanrc)</h3><p>With 0.20, you can now work with groups of rows at a time easier than ever before.</p><p>For example, let&#39;s say you have a table like this:</p><div class="language-text ext-text"><pre class="language-text"><code>\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500
 # \u2502 name  \u2502 age
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Joe   \u2502  30
 1 \u2502 Fred  \u2502  40
 2 \u2502 Sally \u2502  40
 3 \u2502 Sean  \u2502  42
 4 \u2502 Gram  \u2502  66
 5 \u2502 Todd  \u2502   1
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>And you wanted to take three rows at a time, and sum the ages. You can now do this using:</p><div class="language-text ext-text"><pre class="language-text"><code>... | each group 3 { get age | math sum }
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500
 0 \u2502 110
 1 \u2502 109
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Or, you can slide a &quot;window&quot; over the data, looking at multiple rows at a time. Let&#39;s slide a window of two rows, so that we look at each pair. We can use this to average the adjacent rows:</p><div class="language-text ext-text"><pre class="language-text"><code>... | each window 2 { get age | math avg }
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 35.0000
 1 \u2502 40.0000
 2 \u2502 41.0000
 3 \u2502 54.0000
 4 \u2502 33.5000
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h3 id="completion-improvements-thegedge-rezural" tabindex="-1"><a class="header-anchor" href="#completion-improvements-thegedge-rezural" aria-hidden="true">#</a> Completion improvements (thegedge, rezural)</h3>`,13),N=t("The new completer received a "),W={href:"https://github.com/nushell/nushell/pull/2497",target:"_blank",rel:"noopener noreferrer"},j=t("lot of bugfixes"),C=t(", "),I={href:"https://github.com/nushell/nushell/pull/2503",target:"_blank",rel:"noopener noreferrer"},E=t("more fixes"),L=t(", and "),T={href:"https://github.com/nushell/nushell/pull/2525",target:"_blank",rel:"noopener noreferrer"},z=t("yet more fixes"),A=t(" since its initial release with 0.19. We're continuing to improve this experience further."),q=t("Completions can "),M={href:"https://github.com/nushell/nushell/pull/2556",target:"_blank",rel:"noopener noreferrer"},S=t("now be case-insensitive"),O=t(". This is especially useful for platforms where filepaths are case-insensitive."),V=e("h2",{id:"command-improvements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#command-improvements","aria-hidden":"true"},"#"),t(" Command Improvements")],-1),B=e("strong",null,"NEW",-1),G=t(),R={href:"https://github.com/nushell/nushell/pull/2489",target:"_blank",rel:"noopener noreferrer"},F=e("code",null,"random integer",-1),Q=t(" - create random integers (smaydew)"),D=e("strong",null,"NEW",-1),H=t(),U={href:"https://github.com/nushell/nushell/pull/2495",target:"_blank",rel:"noopener noreferrer"},Z=e("code",null,"exec",-1),$=t(" - on Unix-based systems with exec support, you can now call the built-in "),J=e("code",null,"exec",-1),K=t(" command (almindor)"),P=e("strong",null,"NEW",-1),Y=t(),X={href:"https://github.com/nushell/nushell/pull/2505",target:"_blank",rel:"noopener noreferrer"},ee=e("code",null,"mod",-1),te=t(" - a new modulo operator (jonathandturner)"),oe=e("code",null,"mv",-1),ne=t(" now uses the "),se={href:"https://github.com/nushell/nushell/pull/2487",target:"_blank",rel:"noopener noreferrer"},re=e("code",null,"fs_extra",-1),le=t(" crate for better recursive moves"),ae=t(" (almindor)"),ie=e("li",null,[e("p",null,"More table themes (fdncred)")],-1),he=e("code",null,"ls -l",-1),de=t(" now also lists the "),ce={href:"https://github.com/nushell/nushell/pull/2496",target:"_blank",rel:"noopener noreferrer"},ue=t("number of links"),_e=t(" (gillespiecd)"),pe=e("code",null,"str substring",-1),ge=t(" can now "),me={href:"https://github.com/nushell/nushell/pull/2499",target:"_blank",rel:"noopener noreferrer"},fe=t("optionally take a range"),be=t(" (defstryker)"),we=e("code",null,"char",-1),ke=t(" gets support for "),ve={href:"https://github.com/nushell/nushell/pull/2500",target:"_blank",rel:"noopener noreferrer"},ye=t("weather characters"),xe=t(" (fdncred)"),Ne=t("Ranges can now "),We={href:"https://github.com/nushell/nushell/pull/2506",target:"_blank",rel:"noopener noreferrer"},je=t("start or end with variables"),Ce=t(" and can have "),Ie={href:"https://github.com/nushell/nushell/pull/2509",target:"_blank",rel:"noopener noreferrer"},Ee=t("decimal numbers as boundaries"),Le=t(" (jonathandturner)"),Te=t("Ranges can now "),ze={href:"https://github.com/nushell/nushell/pull/2541",target:"_blank",rel:"noopener noreferrer"},Ae=t("also be exclusive"),qe=t(" using the "),Me=e("code",null,"x..<y",-1),Se=t(" syntax (radekvit)"),Oe=e("code",null,"ps -l",-1),Ve=t(" now "),Be={href:"https://github.com/nushell/nushell/pull/2507",target:"_blank",rel:"noopener noreferrer"},Ge=t("shows cpu time"),Re=t(" (gillespiecd)"),Fe=e("code",null,"with-env",-1),Qe=t(" can now "),De={href:"https://github.com/nushell/nushell/pull/2526",target:"_blank",rel:"noopener noreferrer"},He=t("accept multiple variables"),Ue=t(" (itn3000)"),Ze=e("code",null,"math avg",-1),$e=t(" will now "),Je={href:"https://github.com/nushell/nushell/pull/2529",target:"_blank",rel:"noopener noreferrer"},Ke=t("also work with durations"),Pe=t(" (gorogoroumaru)"),Ye=e("code",null,"reduce",-1),Xe=t(" can now "),et={href:"https://github.com/nushell/nushell/pull/2529",target:"_blank",rel:"noopener noreferrer"},tt=t("work with table values"),ot=t(" (andrasio)"),nt=t("The active shell in "),st=e("code",null,"shells",-1),rt=t(" is "),lt={href:"https://github.com/nushell/nushell/pull/2540",target:"_blank",rel:"noopener noreferrer"},at=t("now more clearly shown"),it=t(" (gillespiecd)"),ht=e("code",null,"sleep",-1),dt=t(" now "),ct={href:"https://github.com/nushell/nushell/pull/2550",target:"_blank",rel:"noopener noreferrer"},ut=t("respects Ctrl+C"),_t=t(" and can "),pt={href:"https://github.com/nushell/nushell/pull/2558",target:"_blank",rel:"noopener noreferrer"},gt=t("pass along the output"),mt=t(" (radekvit)"),ft=e("code",null,"str trim",-1),bt=t(" and "),wt=e("code",null,"trim",-1),kt=t(" are "),vt={href:"https://github.com/nushell/nushell/pull/2576",target:"_blank",rel:"noopener noreferrer"},yt=t("merged"),xt=t(" (gillespiecd and radekvit)"),Nt=e("code",null,"str find-replace",-1),Wt=t(" can now "),jt={href:"https://github.com/nushell/nushell/pull/2569",target:"_blank",rel:"noopener noreferrer"},Ct=t("global search/replace"),It=t(" (fdncred)"),Et=e("code",null,"open",-1),Lt=t(" now only streams for "),Tt={href:"https://github.com/nushell/nushell/pull/2570",target:"_blank",rel:"noopener noreferrer"},zt=t("non-files and large files"),At=t(" (jonathandturner)"),qt=t("If supported on the platform, "),Mt=e("code",null,"benchmark",-1),St=t(" now gives "),Ot={href:"https://github.com/nushell/nushell/pull/2571",target:"_blank",rel:"noopener noreferrer"},Vt=t("user/system/idle times as well"),Bt=t(" (radekvit)"),Gt=t("Ctrl+D now "),Rt={href:"https://github.com/nushell/nushell/pull/2583",target:"_blank",rel:"noopener noreferrer"},Ft=t("exits the current shell"),Qt=t(" (gillespiecd)"),Dt=e("code",null,"fetch",-1),Ht=t(" now "),Ut={href:"https://github.com/nushell/nushell/pull/2587",target:"_blank",rel:"noopener noreferrer"},Zt=t("supports CSV MIME types"),$t=t(" (notryanb)"),Jt=s('<h2 id="other-improvements-fdncred-gillespiecd-lidin-andrasio-radekvit-jonathandturner-coolshaurya" tabindex="-1"><a class="header-anchor" href="#other-improvements-fdncred-gillespiecd-lidin-andrasio-radekvit-jonathandturner-coolshaurya" aria-hidden="true">#</a> Other improvements (fdncred, gillespiecd, lidin, andrasio, radekvit, jonathandturner, coolshaurya)</h2><p>Removed unnused dependencies, cleanups to duration, some ARM incompatibilites were fixed, some Ctrl+C issues were fixed, optimized some config reading, cleanup code in <code>get</code> and <code>nu-value-ext</code>, rustyline was upgraded (fixing a common instability in Windows), <code>help command</code> get some improvements, <code>random integer</code> got some stability fixes.</p><h1 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes" aria-hidden="true">#</a> Breaking changes</h1><h2 id="in-and-not-in-are-now-in-and-not-in" tabindex="-1"><a class="header-anchor" href="#in-and-not-in-are-now-in-and-not-in" aria-hidden="true">#</a> <code>in:</code> and <code>not-in:</code> are now <code>in</code> and <code>not-in</code></h2><p>In working with operators, we&#39;ve removed the colon from the <code>in</code> and <code>not-in</code> operators.</p><h2 id="trim-and-str-trim-are-now-just-str-trim" tabindex="-1"><a class="header-anchor" href="#trim-and-str-trim-are-now-just-str-trim" aria-hidden="true">#</a> <code>trim</code> and <code>str trim</code> are now just <code>str trim</code></h2><p>We&#39;ve merged the functionality and now just have the one <code>str trim</code> command.</p><h2 id="locale-formatted-numbers-temporarily-not-supported" tabindex="-1"><a class="header-anchor" href="#locale-formatted-numbers-temporarily-not-supported" aria-hidden="true">#</a> Locale-formatted numbers temporarily not supported</h2><p>As part of updating dependencies, we&#39;ve had to temporarily disable locale-formatting numbers. We hope to fix this as dependencies update to the latest versions.</p><h2 id="change-in-config-location" tabindex="-1"><a class="header-anchor" href="#change-in-config-location" aria-hidden="true">#</a> Change in config location</h2><p>We&#39;ve tried to use a supported &#39;directories&#39; crate, which has meant having to change until we found a supported one. This, unfortunately, means that this release moves the config location again.</p><p>On macOS, <code>config path</code> now points to: &quot;$HOME/Library/Application Support/org.nushell.nu/config.toml&quot;, in 0.19.0 and earlier it was: &quot;$HOME/Library/Preferences/org.nushell.nu/config.toml&quot;.</p><h1 id="zulip-chat" tabindex="-1"><a class="header-anchor" href="#zulip-chat" aria-hidden="true">#</a> Zulip chat</h1>',13),Kt=t("We're experimenting with using Zulip for our community chat and design discussions. If you want, you can "),Pt={href:"https://nushell.zulipchat.com/",target:"_blank",rel:"noopener noreferrer"},Yt=t("try the server and tell us what you think"),Xt=t(". If you'd rather we stick with "),eo={href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"},to=t("Discord"),oo=t(", you can tell us that, too \u{1F603}"),no=e("h1",{id:"looking-forward",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#looking-forward","aria-hidden":"true"},"#"),t(" Looking forward")],-1),so=t("We've put a "),ro={href:"https://docs.google.com/forms/d/e/1FAIpQLScEFzDh7j3jfAuVMBCQtQE-qfKAhugLCiUaaGL583QtGwz5fw/viewform?usp=sf_link",target:"_blank",rel:"noopener noreferrer"},lo=t("survey to get feedback from you about Nushell"),ao=t(`. This will help us focus our efforts in the coming releases to refactor, trim, and polish Nu. Working with a large codebase is always a challenge, and recently we've been thinking through what features really make up the "core" Nu experience and what parts can be moved outside of Nu itself. This may mean making more things plugins, cutting back on the depedencies we use, and more. Getting your feedback makes sure we have a clear picture for what the "core" of Nu is to most people.`),io=e("p",null,"Even if you're just curious about Nushell but aren't using it, we'd love to hear from you.",-1);function ho(co,uo){const o=l("ExternalLinkIcon");return a(),i("div",null,[d,c,u,_,e("p",null,[p,e("a",g,[m,n(o)]),f,e("a",b,[w,n(o)]),k,v,y]),x,e("p",null,[N,e("a",W,[j,n(o)]),C,e("a",I,[E,n(o)]),L,e("a",T,[z,n(o)]),A]),e("p",null,[q,e("a",M,[S,n(o)]),O]),V,e("ul",null,[e("li",null,[e("p",null,[B,G,e("a",R,[F,n(o)]),Q])]),e("li",null,[e("p",null,[D,H,e("a",U,[Z,n(o)]),$,J,K])]),e("li",null,[e("p",null,[P,Y,e("a",X,[ee,n(o)]),te])]),e("li",null,[e("p",null,[oe,ne,e("a",se,[re,le,n(o)]),ae])]),ie,e("li",null,[e("p",null,[he,de,e("a",ce,[ue,n(o)]),_e])]),e("li",null,[e("p",null,[pe,ge,e("a",me,[fe,n(o)]),be])]),e("li",null,[e("p",null,[we,ke,e("a",ve,[ye,n(o)]),xe])]),e("li",null,[e("p",null,[Ne,e("a",We,[je,n(o)]),Ce,e("a",Ie,[Ee,n(o)]),Le])]),e("li",null,[e("p",null,[Te,e("a",ze,[Ae,n(o)]),qe,Me,Se])]),e("li",null,[e("p",null,[Oe,Ve,e("a",Be,[Ge,n(o)]),Re])]),e("li",null,[e("p",null,[Fe,Qe,e("a",De,[He,n(o)]),Ue])]),e("li",null,[e("p",null,[Ze,$e,e("a",Je,[Ke,n(o)]),Pe])]),e("li",null,[e("p",null,[Ye,Xe,e("a",et,[tt,n(o)]),ot])]),e("li",null,[e("p",null,[nt,st,rt,e("a",lt,[at,n(o)]),it])]),e("li",null,[e("p",null,[ht,dt,e("a",ct,[ut,n(o)]),_t,e("a",pt,[gt,n(o)]),mt])]),e("li",null,[e("p",null,[ft,bt,wt,kt,e("a",vt,[yt,n(o)]),xt])]),e("li",null,[e("p",null,[Nt,Wt,e("a",jt,[Ct,n(o)]),It])]),e("li",null,[e("p",null,[Et,Lt,e("a",Tt,[zt,n(o)]),At])]),e("li",null,[e("p",null,[qt,Mt,St,e("a",Ot,[Vt,n(o)]),Bt])]),e("li",null,[e("p",null,[Gt,e("a",Rt,[Ft,n(o)]),Qt])]),e("li",null,[e("p",null,[Dt,Ht,e("a",Ut,[Zt,n(o)]),$t])])]),Jt,e("p",null,[Kt,e("a",Pt,[Yt,n(o)]),Xt,e("a",eo,[to,n(o)]),oo]),no,e("p",null,[so,e("a",ro,[lo,n(o)]),ao]),io])}const po=r(h,[["render",ho],["__file","2020-09-22-nushell_0_20.html.vue"]]);export{po as default};
