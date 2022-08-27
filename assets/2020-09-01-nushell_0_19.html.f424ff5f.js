import{_ as a,o as l,c as r,a as t,b as n,d as e,e as s,r as i}from"./app.2398890f.js";var h="/assets/0_19_autocomplete.22392fc8.gif",d="/assets/0_19_heart_theme.40f9552a.png",c="/assets/0_19_table_colors.1a8a38a1.png";const u={},_=t("h1",{id:"nushell-0-19",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nushell-0-19","aria-hidden":"true"},"#"),e(" Nushell 0.19")],-1),p=t("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),m=t("p",null,"Today, we're releasing 0.19 of Nu. In this version, we fill some long-lived gaps in Nu, improve completions, theming, and much more.",-1),g=t("h1",{id:"where-to-get-it",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),e(" Where to get it")],-1),f=e("Nu 0.19 is available as "),b={href:"https://github.com/nushell/nushell/releases/tag/0.19.0",target:"_blank",rel:"noopener noreferrer"},w=e("pre-built binaries"),v=e(" or from "),y={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},k=e("crates.io"),x=e(". If you have Rust installed you can install it using "),N=t("code",null,"cargo install nu",-1),T=e("."),j=s('<p>If you want all the goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><h2 id="new-completion-engine-thegedge" tabindex="-1"><a class="header-anchor" href="#new-completion-engine-thegedge" aria-hidden="true">#</a> New completion engine (thegedge)</h2><p><img src="'+h+'" alt="animation of Nu completion"></p><p>Nushell&#39;s completion suggestions are now built around the nushell parser. This means completers can now use a much richer context to provide relevant suggestions. This is still a work in progress, but one immediate improvement is that we can now complete commands, flags, and arguments in most nested structures. For example, <code>echo $(l&lt;TAB&gt;</code> will show you all commands that start with l.</p><p>The completion work is still very &quot;new&quot;, with parts landing in the hours before the release, so please give it a spin and let us know where we can keep improving it.</p><h2 id="improved-theming-fdncred" tabindex="-1"><a class="header-anchor" href="#improved-theming-fdncred" aria-hidden="true">#</a> Improved theming (fdncred)</h2><p><img src="'+d+'" alt="image of a Nu table built with hearts"></p><p><em>Nu, with love</em></p><p>We&#39;re continuing to expand what&#39;s possible with Nu&#39;s themes, allowing you to configure more areas of how your data is displayed.</p><p><img src="'+c+'" alt="image of a Nu table custom colors"></p>',12),I=e("You can also configure how the various Nu data types are displayed. You can learn about the "),z={href:"https://github.com/nushell/nushell/pull/2449",target:"_blank",rel:"noopener noreferrer"},W=e("new custom data colors"),J=e(" if you're interested in configuring them for yourself. There's also and example "),S=t("code",null,"config.toml",-1),L=e(),Y={href:"https://github.com/nushell/nushell/blob/main/docs/sample_config/config.toml",target:"_blank",rel:"noopener noreferrer"},B=e("here"),E=e(" with an example of how to set the colors you like."),K=s(`<h2 id="table-literals-jonathandturner" tabindex="-1"><a class="header-anchor" href="#table-literals-jonathandturner" aria-hidden="true">#</a> Table literals (jonathandturner)</h2><p>Starting with 0.19, you can now write table values like you would other kinds of values. To do so, separate a row of header names from the data using a <code>;</code>. For example:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo [[name size]; [JT 185] [KJ 160]]
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name \u2502 size
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 JT   \u2502  185
 1 \u2502 KJ   \u2502  160
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>To be a valid table, the number of columns needs to line up.</p><h2 id="multiline-edits-jonathandturner" tabindex="-1"><a class="header-anchor" href="#multiline-edits-jonathandturner" aria-hidden="true">#</a> Multiline edits (jonathandturner)</h2><p>In addition to the new table literals, we&#39;re opening up multiline commands. Initially, this will be for the line editor, but we&#39;ll extend this further as we improve parser support.</p><p>You can now also write the above:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo [
[name, size];
[JT, 185]
[KJ, 160]
]
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name \u2502 size
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 JT   \u2502  185
 1 \u2502 KJ   \u2502  160
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>You might have noticed we now also allow commas to separate cells. These are intended to help readability and give a more familiar syntax for people coming from other languages.</p><h2 id="nushell-celebrates-its-first-year-in-the-public" tabindex="-1"><a class="header-anchor" href="#nushell-celebrates-its-first-year-in-the-public" aria-hidden="true">#</a> Nushell celebrates its first year in the public</h2>`,10),V=e("We recently sat down and wrote about "),A={href:"http://www.nushell.sh/blog/2020/08/23/year_of_nushell.html",target:"_blank",rel:"noopener noreferrer"},C=e("where Nushell has come over the last year"),F=e(" and some thoughts about where it's going. The blog post is a wealth of information about Nu's philosophy and direction. Well worth a read."),M=t("h2",{id:"command-improvements",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#command-improvements","aria-hidden":"true"},"#"),e(" Command improvements")],-1),R=t("code",null,"size",-1),q=e(" now gives back "),P={href:"https://github.com/nushell/nushell/pull/2473",target:"_blank",rel:"noopener noreferrer"},$=e("simpler columns"),H=e(" (gillespiecd)"),O=t("code",null,"uniqe",-1),D=e(" has "),G={href:"https://github.com/nushell/nushell/pull/2472",target:"_blank",rel:"noopener noreferrer"},Q=e("more examples"),U=e(" (gillespiecd)"),X=t("code",null,"ls",-1),Z=e(" will tolerate more "),ee={href:"https://github.com/nushell/nushell/pull/2466",target:"_blank",rel:"noopener noreferrer"},te=e("OS errors while listing"),oe=e(" (gorogoroumaru)"),ne=t("code",null,"cd .",-1),se=e(" now "),ae={href:"https://github.com/nushell/nushell/pull/2457",target:"_blank",rel:"noopener noreferrer"},le=e("does the expected"),re=e(" (VincentWo)"),ie=t("li",null,[t("code",null,"math stddev"),e(" and "),t("code",null,"math variance"),e(" both received updates (gillespiecd)")],-1),he=e("List literals can "),de={href:"https://github.com/nushell/nushell/pull/2454",target:"_blank",rel:"noopener noreferrer"},ce=e("now have commas"),ue=e(" (jonathandturner)"),_e=t("code",null,"str index-of",-1),pe=e(" can now do a "),me={href:"https://github.com/nushell/nushell/pull/2430",target:"_blank",rel:"noopener noreferrer"},ge=e("reverse find"),fe=e(" (fdncred)"),be=e("A new "),we={href:"https://github.com/nushell/nushell/pull/2429",target:"_blank",rel:"noopener noreferrer"},ve=e("PowerShell plugin sample"),ye=e(" (fdncred)"),ke=e("New "),xe={href:"https://github.com/nushell/nushell/pull/2428",target:"_blank",rel:"noopener noreferrer"},Ne=t("code",null,"path dirname",-1),Te=e(" and "),je=t("code",null,"path filestem",-1),Ie=e(" subcommands"),ze=e(" (fdncred)"),We=e("The "),Je=t("code",null,"alias",-1),Se=e(" command now has "),Le={href:"https://github.com/nushell/nushell/pull/2418",target:"_blank",rel:"noopener noreferrer"},Ye=e("optional type inference"),Be=e(" (bailey-layzer)"),Ee=e("The line editor hinter is "),Ke={href:"https://github.com/nushell/nushell/pull/2405",target:"_blank",rel:"noopener noreferrer"},Ve=e("now configurable"),Ae=e(" (amitdev)"),Ce=t("code",null,"version",-1),Fe=e(" now includes the "),Me={href:"https://github.com/nushell/nushell/pull/2390",target:"_blank",rel:"noopener noreferrer"},Re=e("git hash when built locally"),qe=e(" (coolshaurya)"),Pe=t("code",null,"touch",-1),$e=e(" can now take "),He={href:"https://github.com/nushell/nushell/pull/2386",target:"_blank",rel:"noopener noreferrer"},Oe=e("multiple arguments"),De=e(" (jzaefferer)"),Ge=t("code",null,"date",-1),Qe=e(" now has "),Ue={href:"https://github.com/nushell/nushell/pull/2383",target:"_blank",rel:"noopener noreferrer"},Xe=e("subcommands"),Ze=e(" (gorogoroumaru)"),et=e("A new "),tt={href:"https://github.com/nushell/nushell/pull/2381",target:"_blank",rel:"noopener noreferrer"},ot=t("code",null,"sleep",-1),nt=e(" command"),st=e(" (LhKipp)"),at=e("Improvements to "),lt=t("code",null,"ls",-1),rt=e(" and "),it={href:"https://github.com/nushell/nushell/pull/2379",target:"_blank",rel:"noopener noreferrer"},ht=e("hidden files"),dt=e(" (mattclarke)"),ct=t("code",null,"sort-by",-1),ut=e(" errors "),_t={href:"https://github.com/nushell/nushell/pull/2366",target:"_blank",rel:"noopener noreferrer"},pt=e("now point to mismatched types"),mt=e(" (luccasmmg)"),gt=t("code",null,"str",-1),ft=e(" subcommands for "),bt={href:"https://github.com/nushell/nushell/pull/2360",target:"_blank",rel:"noopener noreferrer"},wt=e("various capitalizations"),vt=e(" (rrichardson)"),yt=e("Time units are now "),kt={href:"https://github.com/nushell/nushell/pull/2356",target:"_blank",rel:"noopener noreferrer"},xt=e("more readable"),Nt=e(" (mattclarke)"),Tt=e("Exit scripts from per-directory environments are now "),jt={href:"https://github.com/nushell/nushell/pull/2352",target:"_blank",rel:"noopener noreferrer"},It=e("run in the original directory"),zt=e(" (samhedin)"),Wt=e("We've also got a "),Jt={href:"https://github.com/nushell/contributor-book/pull/29",target:"_blank",rel:"noopener noreferrer"},St=e("Portuguese translation of the contributor book(!!)"),Lt=e(" (vpperego)"),Yt=e("Improved "),Bt={href:"https://github.com/nushell/book/pull/126",target:"_blank",rel:"noopener noreferrer"},Et=e("RHEL installation instructions"),Kt=e(" (arnaldo2792)"),Vt=s(`<h2 id="more-cleanup-and-improvements-gillespiecd-jonathandturner-marcoleni-andrasio-dmeijboom-thegedge-jzaefferer-ryuichi1208-josephtlyons" tabindex="-1"><a class="header-anchor" href="#more-cleanup-and-improvements-gillespiecd-jonathandturner-marcoleni-andrasio-dmeijboom-thegedge-jzaefferer-ryuichi1208-josephtlyons" aria-hidden="true">#</a> More cleanup and improvements (gillespiecd, jonathandturner, Marcoleni, andrasio, dmeijboom, thegedge, jzaefferer, ryuichi1208, JosephTLyons)</h2><p>Cleanups in math commands, extra bits of command help, reformating of the command list, better email samples, cleaned up spans in pipelines, fix to <code>header</code> command with mismatched columns, cleanup of dependency usage, cleaned up display config, added crossreferences in command help, subcommands are now sorted before being listed, some dockerfile improvements, nu-cli now has nu-data split off from it, column count now won&#39;t break on empty tables, wasm is now tested on CI, improvements to <code>histogram</code> and <code>count</code>,</p><h2 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes" aria-hidden="true">#</a> Breaking changes</h2><h3 id="starship-is-now-external" tabindex="-1"><a class="header-anchor" href="#starship-is-now-external" aria-hidden="true">#</a> Starship is now external</h3><p>To help Nu focus a bit more on the core capabilities, and to free up it to update separate from Nu, Starship is now external. Once you install Starship, you can set your prompt to use starship using:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; config set prompt \`echo $(starship prompt)\`
</code></pre></div><p>You can also set Nu to use other prompts as well. For example, if you like powerline, you can also use this:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; config set prompt \`echo $(powerline shell left)\`
</code></pre></div><h3 id="no-more-auto-pivot-by-default" tabindex="-1"><a class="header-anchor" href="#no-more-auto-pivot-by-default" aria-hidden="true">#</a> No more auto-pivot by default</h3><p>Based on feedback from users, we&#39;ve now disabled any auto-pivoting of tables by default. You can still re-enable this behavior in your config, but we will no longer rotate any tables without being explicitly asked.</p><div class="language-text ext-text"><pre class="language-text"><code># To only rotate large tables:
&gt; config set pivot_mode auto

# To always rotate a single row to be vertical:
&gt; config set pivot_mode always
</code></pre></div><h3 id="time-units-are-now-renamed" tabindex="-1"><a class="header-anchor" href="#time-units-are-now-renamed" aria-hidden="true">#</a> Time units are now renamed</h3><p>To make it easier, and more readable, to work with a variety of units in the future, we&#39;ve renamed the time units.</p>`,13),At=e("Instead of "),Ct=t("code",null,"1s",-1),Ft=e(", you'll now use "),Mt=t("code",null,"1sec",-1),Rt=e(". Most units for time now follow 3 letters instead of a single letter. You can read more about the "),qt={href:"https://github.com/nushell/nushell/pull/2356",target:"_blank",rel:"noopener noreferrer"},Pt=e("full change in the PR"),$t=e("."),Ht=s('<h3 id="header-colors" tabindex="-1"><a class="header-anchor" href="#header-colors" aria-hidden="true">#</a> Header colors</h3><p>With the new theming support, <code>header_color</code>, <code>header_bold</code>, and <code>header_align</code> have moved into the <code>[color_config]</code> section, and out of the root level, of the <code>config.toml</code> file.</p><h3 id="simplified-default-build" tabindex="-1"><a class="header-anchor" href="#simplified-default-build" aria-hidden="true">#</a> Simplified default build</h3><p>While not technically a breaking change, it&#39;s worth a mention that starting with 0.19, you don&#39;t need to use <code>--features=stable</code> to get most of Nu&#39;s features. We&#39;ve folded most of the common ones into the default install. For all the bells and whistles, now use <code>--features=extra</code>, which includes additional functionality not part of the original <code>stable</code> release.</p><h1 id="looking-forward" tabindex="-1"><a class="header-anchor" href="#looking-forward" aria-hidden="true">#</a> Looking forward</h1><p>With 0.19, we see the first deeper changes to the completion engine since Nu was first released. These will grow to allow custom completions for commands, and we&#39;re looking forward to making these features available.</p><p>The new table literal also takes a step in the direction of data frame support in the future, a powerful feature popularized by pandas, R and other data processing libraries and languages. With it, we hope Nu will continue to grow to having a richer, more nuanced, view of data over time.</p>',7);function Ot(Dt,Gt){const o=i("ExternalLinkIcon");return l(),r("div",null,[_,p,m,g,t("p",null,[f,t("a",b,[w,n(o)]),v,t("a",y,[k,n(o)]),x,N,T]),j,t("p",null,[I,t("a",z,[W,n(o)]),J,S,L,t("a",Y,[B,n(o)]),E]),K,t("p",null,[V,t("a",A,[C,n(o)]),F]),M,t("ul",null,[t("li",null,[R,q,t("a",P,[$,n(o)]),H]),t("li",null,[O,D,t("a",G,[Q,n(o)]),U]),t("li",null,[X,Z,t("a",ee,[te,n(o)]),oe]),t("li",null,[ne,se,t("a",ae,[le,n(o)]),re]),ie,t("li",null,[he,t("a",de,[ce,n(o)]),ue]),t("li",null,[_e,pe,t("a",me,[ge,n(o)]),fe]),t("li",null,[be,t("a",we,[ve,n(o)]),ye]),t("li",null,[ke,t("a",xe,[Ne,Te,je,Ie,n(o)]),ze]),t("li",null,[We,Je,Se,t("a",Le,[Ye,n(o)]),Be]),t("li",null,[Ee,t("a",Ke,[Ve,n(o)]),Ae]),t("li",null,[Ce,Fe,t("a",Me,[Re,n(o)]),qe]),t("li",null,[Pe,$e,t("a",He,[Oe,n(o)]),De]),t("li",null,[Ge,Qe,t("a",Ue,[Xe,n(o)]),Ze]),t("li",null,[et,t("a",tt,[ot,nt,n(o)]),st]),t("li",null,[at,lt,rt,t("a",it,[ht,n(o)]),dt]),t("li",null,[ct,ut,t("a",_t,[pt,n(o)]),mt]),t("li",null,[gt,ft,t("a",bt,[wt,n(o)]),vt]),t("li",null,[yt,t("a",kt,[xt,n(o)]),Nt]),t("li",null,[Tt,t("a",jt,[It,n(o)]),zt]),t("li",null,[Wt,t("a",Jt,[St,n(o)]),Lt]),t("li",null,[Yt,t("a",Bt,[Et,n(o)]),Kt])]),Vt,t("p",null,[At,Ct,Ft,Mt,Rt,t("a",qt,[Pt,n(o)]),$t]),Ht])}var Ut=a(u,[["render",Ot],["__file","2020-09-01-nushell_0_19.html.vue"]]);export{Ut as default};