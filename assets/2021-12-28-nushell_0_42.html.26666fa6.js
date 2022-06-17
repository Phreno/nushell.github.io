import{_ as s,r,o as i,c as l,a as e,b as o,d as n}from"./app.b8dbd919.js";const a={},h=e("h1",{id:"nushell-0-42",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-42","aria-hidden":"true"},"#"),n(" Nushell 0.42")],-1),d=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),_=e("p",null,"Today, we're releasing 0.42 of Nu. This release is a bugfix release of 0.41.",-1),c=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),n(" Where to get it")],-1),u=n("Nu 0.42 is available as "),g={href:"https://github.com/nushell/nushell/releases/tag/0.42.0",target:"_blank",rel:"noopener noreferrer"},f=n("pre-built binaries"),p=n(" or from "),b={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},m=n("crates.io"),w=n(". If you have Rust installed you can install it using "),y=e("code",null,"cargo install nu",-1),k=n("."),x=e("p",null,[n("If you want all the goodies, you can install "),e("code",null,"cargo install nu --features=extra"),n(".")],-1),N=e("p",null,[n("As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use "),e("code",null,"cargo install nu_plugin_<plugin name>"),n(".")],-1),q=e("h1",{id:"what-s-new",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-s-new","aria-hidden":"true"},"#"),n(" What's New")],-1),v=e("h2",{id:"fixes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fixes","aria-hidden":"true"},"#"),n(" Fixes")],-1),A=n("Can optionally "),I={href:"https://github.com/nushell/nushell/pull/4219",target:"_blank",rel:"noopener noreferrer"},B=n("use an insecure SSL cert"),E=n(" (nibon7)"),T=n("Fixed a crash "),L={href:"https://github.com/nushell/nushell/pull/4226",target:"_blank",rel:"noopener noreferrer"},W=n("when viewing text files"),F=n(" (nibon7)"),R=n("Build fixed for "),S={href:"https://github.com/nushell/nushell/pull/4192",target:"_blank",rel:"noopener noreferrer"},V=n("NetBSD"),j=n(" (0323pin)"),C=e("h2",{id:"breaking-change",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#breaking-change","aria-hidden":"true"},"#"),n(" Breaking change")],-1),P=n("For naming consistency, "),D={href:"https://github.com/nushell/nushell/pull/4189",target:"_blank",rel:"noopener noreferrer"},G=e("code",null,"into column_path",-1),O=n(" is now "),z=e("code",null,"into column-path",-1),H=n(" (hustcer)"),J=e("h1",{id:"engine-q-progress",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#engine-q-progress","aria-hidden":"true"},"#"),n(" Engine-q progress")],-1),K=n("At this point, we're now 100% focused on getting engine-q done. Over "),M={href:"https://github.com/nushell/engine-q/pulls?page=1&q=is%3Apr+is%3Aclosed",target:"_blank",rel:"noopener noreferrer"},Q=n("120 PRs"),U=n(" have been merged into engine-q since the last Nushell release and another "),X={href:"https://github.com/nushell/reedline/pulls?q=is%3Apr+is%3Aclosed",target:"_blank",rel:"noopener noreferrer"},Y=n("20 PRs in reedline"),Z=n("."),$=n("Engine-q is now able to be used as a standalone shell. It includes the full set of dataframe functionality and most of the nushell commands. We aren't yet making nightly builds available, but you should be able to "),ee={href:"https://github.com/nushell/engine-q",target:"_blank",rel:"noopener noreferrer"},ne=n("clone and build engine-q"),te=n(" on your machine in the same way you might grab the latest Nushell. As you try out engine-q, also give a read over the "),oe={href:"https://github.com/nushell/engine-q/issues/522",target:"_blank",rel:"noopener noreferrer"},se=n("in-progress breaking change list"),re=n(", as it shows where the new engine will differ from Nushell's current engine."),ie=e("h1",{id:"looking-forward",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#looking-forward","aria-hidden":"true"},"#"),n(" Looking forward")],-1),le=n("There are still "),ae={href:"https://github.com/nushell/engine-q/issues/242",target:"_blank",rel:"noopener noreferrer"},he=n("some commands left to port"),de=n(" if you'd like to jump in and give porting a try. If you're interested, you can also help us by testing out engine-q itself as a shell and report your experiences with it. And of course, come join us on the "),_e={href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"},ce=n("discord"),ue=n(". We'd be happy to show you around.");function ge(fe,pe){const t=r("ExternalLinkIcon");return i(),l("div",null,[h,d,_,c,e("p",null,[u,e("a",g,[f,o(t)]),p,e("a",b,[m,o(t)]),w,y,k]),x,N,q,v,e("ul",null,[e("li",null,[A,e("a",I,[B,o(t)]),E]),e("li",null,[T,e("a",L,[W,o(t)]),F]),e("li",null,[R,e("a",S,[V,o(t)]),j])]),C,e("ul",null,[e("li",null,[P,e("a",D,[G,O,z,o(t)]),H])]),J,e("p",null,[K,e("a",M,[Q,o(t)]),U,e("a",X,[Y,o(t)]),Z]),e("p",null,[$,e("a",ee,[ne,o(t)]),te,e("a",oe,[se,o(t)]),re]),ie,e("p",null,[le,e("a",ae,[he,o(t)]),de,e("a",_e,[ce,o(t)]),ue])])}var me=s(a,[["render",ge],["__file","2021-12-28-nushell_0_42.html.vue"]]);export{me as default};
