import{_ as l,r as s,o as r,c as h,a as e,b as n,d as t}from"./app.b8dbd919.js";const i={},a=e("h1",{id:"nushell-0-35",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-35","aria-hidden":"true"},"#"),t(" Nushell 0.35")],-1),_=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),d=e("p",null,"Today, we're releasing 0.35 of Nu. This release shows off a lot of dataframe progress and lots of command polish.",-1),c=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),t(" Where to get it")],-1),u=t("Nu 0.35 is available as "),p={href:"https://github.com/nushell/nushell/releases/tag/0.35.0",target:"_blank",rel:"noopener noreferrer"},f=t("pre-built binaries"),m=t(" or from "),g={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},b=t("crates.io"),k=t(". If you have Rust installed you can install it using "),w=e("code",null,"cargo install nu",-1),v=t("."),x=e("p",null,[t("If you want all the goodies, you can install "),e("code",null,"cargo install nu --features=extra"),t(".")],-1),y=e("p",null,[t("As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use "),e("code",null,"cargo install nu_plugin_<plugin name>"),t(".")],-1),N=e("h1",{id:"what-s-new",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-s-new","aria-hidden":"true"},"#"),t(" What's New")],-1),I=e("h2",{id:"new-commands",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#new-commands","aria-hidden":"true"},"#"),t(" New commands")],-1),z={href:"https://github.com/nushell/nushell/pull/3811",target:"_blank",rel:"noopener noreferrer"},T=e("code",null,"into path",-1),W=t(" (realcundo)"),A={href:"https://github.com/nushell/nushell/pull/3833",target:"_blank",rel:"noopener noreferrer"},F=e("code",null,"date humanize",-1),S=t(" (zkat)"),j={href:"https://github.com/nushell/nushell/pull/3836",target:"_blank",rel:"noopener noreferrer"},B=e("code",null,"hash sha256",-1),V=t(" (with "),C={href:"https://github.com/nushell/nushell/pull/3841",target:"_blank",rel:"noopener noreferrer"},E=t("additional improvements"),L=t(") (realcundo)"),D=e("h2",{id:"dataframe-improvements-elferherrera",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dataframe-improvements-elferherrera","aria-hidden":"true"},"#"),t(" Dataframe improvements (elferherrera)")],-1),H={href:"https://github.com/nushell/nushell/pull/3776",target:"_blank",rel:"noopener noreferrer"},P=t("Improved join operation"),R={href:"https://github.com/nushell/nushell/pull/3781",target:"_blank",rel:"noopener noreferrer"},U=t("Faster CSV reading and encoding"),q={href:"https://github.com/nushell/nushell/pull/3805",target:"_blank",rel:"noopener noreferrer"},G=t("New shape command"),M={href:"https://github.com/nushell/nushell/pull/3812",target:"_blank",rel:"noopener noreferrer"},Y=t("Remove Series and treat all dataframe structures the same"),J={href:"https://github.com/nushell/nushell/pull/3839",target:"_blank",rel:"noopener noreferrer"},K=t("Support for appending dataframes"),O={href:"https://github.com/nushell/nushell/pull/3864",target:"_blank",rel:"noopener noreferrer"},Q=t("Allow dataframes to hold more kinds of data"),X={href:"https://github.com/nushell/nushell/pull/3874",target:"_blank",rel:"noopener noreferrer"},Z=t("Simplified contains command"),$={href:"https://github.com/nushell/nushell/pull/3875",target:"_blank",rel:"noopener noreferrer"},ee=t("Pretty printing for nested dataframes"),te=e("h2",{id:"additional-improvements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#additional-improvements","aria-hidden":"true"},"#"),t(" Additional improvements")],-1),oe=t("Hinting is "),ne={href:"https://github.com/nushell/nushell/pull/3780",target:"_blank",rel:"noopener noreferrer"},le=t("now configurable"),se=t(" (fdncred)"),re={href:"https://github.com/nushell/nushell/pull/3767",target:"_blank",rel:"noopener noreferrer"},he=t("Improvements to our winget releases"),ie=t(" and "),ae={href:"https://github.com/nushell/nushell/pull/3819",target:"_blank",rel:"noopener noreferrer"},_e=t("publish workflows"),de=t(" (TechWatching)"),ce=t("More commands "),ue={href:"https://github.com/nushell/nushell/pull/3794",target:"_blank",rel:"noopener noreferrer"},pe=t("got some additional cleanup"),fe=t(" (sambordo1)"),me=t("Startup times "),ge={href:"https://github.com/nushell/nushell/pull/3854",target:"_blank",rel:"noopener noreferrer"},be=t("now have a detailed breakdown"),ke=t(" (fdncred)"),we=t("You can now "),ve={href:"https://github.com/nushell/nushell/pull/3845",target:"_blank",rel:"noopener noreferrer"},xe=t("compare durations"),ye=t(" (fdncred)"),Ne=t("Fixed "),Ie={href:"https://github.com/nushell/nushell/pull/3804",target:"_blank",rel:"noopener noreferrer"},ze=t("docs for "),Te=e("code",null,"completion_type",-1),We=t(" (dirtybit)"),Ae=t("Fixed "),Fe={href:"https://github.com/nushell/nushell/pull/3807",target:"_blank",rel:"noopener noreferrer"},Se=t("theme for text viewing"),je=t(" (fdncred)"),Be={href:"https://github.com/nushell/nushell/pull/3832",target:"_blank",rel:"noopener noreferrer"},Ve=e("code",null,"describe",-1),Ce=t(" no longer outputs using colors"),Ee=t(" (fdncred)"),Le=t("String intepolation "),De={href:"https://github.com/nushell/nushell/pull/3866",target:"_blank",rel:"noopener noreferrer"},He=t("now handles Unicode better"),Pe=t(" (fdncred)"),Re=t("Fixed "),Ue={href:"https://github.com/nushell/nushell/pull/3829",target:"_blank",rel:"noopener noreferrer"},qe=t("path separator in "),Ge=e("code",null,"pathvar",-1),Me=t(" (nathom)"),Ye={href:"https://github.com/nushell/nushell/pull/3821",target:"_blank",rel:"noopener noreferrer"},Je=t("Power operations can now be negative"),Ke=t(" (jafriyie1)"),Oe=t("Issues now "),Qe={href:"https://github.com/nushell/nushell/pull/3818",target:"_blank",rel:"noopener noreferrer"},Xe=t("use GitHub forms"),Ze=t(" (zkat)"),$e=t("Fixed a typo "),et={href:"https://github.com/nushell/nushell/pull/3824",target:"_blank",rel:"noopener noreferrer"},tt=t("in our github release configuration"),ot=t(" (zkat)"),nt=t("Date formatting now "),lt={href:"https://github.com/nushell/nushell/pull/3834",target:"_blank",rel:"noopener noreferrer"},st=t("uses the chrono_humanize crate"),rt=t(" (zkat)"),ht=t("Updated the "),it={href:"https://github.com/nushell/nushell/pull/3848",target:"_blank",rel:"noopener noreferrer"},at=t("docs on implementing a command"),_t=t(" (margguo)"),dt=t("Cleaned up "),ct={href:"https://github.com/nushell/nushell/pull/3853",target:"_blank",rel:"noopener noreferrer"},ut=t("some stale dependencies"),pt=t(" (elferherrera)"),ft=t("Improved "),mt={href:"https://github.com/nushell/nushell/pull/3857",target:"_blank",rel:"noopener noreferrer"},gt=t("how "),bt=e("code",null,"select",-1),kt=t(" handles empty cells"),wt=t(" (realcundo)"),vt=t("Added "),xt={href:"https://github.com/nushell/nushell/pull/3863",target:"_blank",rel:"noopener noreferrer"},yt=t("named block params to "),Nt=e("code",null,"all?",-1),It=t(" (jt)"),zt={href:"https://github.com/nushell/nushell/pull/3869",target:"_blank",rel:"noopener noreferrer"},Tt=t("Better handling of environement shorthands"),Wt=t(" (lily-mara)"),At=t("Added "),Ft={href:"https://github.com/nushell/nushell/pull/3870",target:"_blank",rel:"noopener noreferrer"},St=t("support for multi-doc yaml files"),jt=t(" (realcundo)"),Bt=t("Added "),Vt={href:"https://github.com/nushell/nushell/pull/3878",target:"_blank",rel:"noopener noreferrer"},Ct=t("a new crate to support Nu serialization more directly with serde"),Et=t(" (lily-mara)"),Lt=e("h1",{id:"looking-ahead",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#looking-ahead","aria-hidden":"true"},"#"),t(" Looking ahead")],-1),Dt=e("p",null,"We're hard at work at bringing more dataframe support into nushell itself, which will allow us to use it for more actions, and extend support to dataframes to existing commands.",-1),Ht=t("We're also working on the new "),Pt={href:"https://github.com/jntrnr/engine-q",target:"_blank",rel:"noopener noreferrer"},Rt=t("parsing/evaluation engine"),Ut=t(" which is proving to be both faster and more correct than the current nushell engine. We're excited to keep evolving it and then integrating it into Nushell. This engine will also be fast enough, and correct enough, to drive completions as Nu scripts. This will allow us to add intelligent completions that work with both internal and external commands."),qt=t("Finally, we're nearing the goal for "),Gt={href:"https://github.com/jntrnr/reedline",target:"_blank",rel:"noopener noreferrer"},Mt=t("reedline"),Yt=t(", which is now solid enough, and complete enough, to use for daily work. We're hoping to polish it up and then experiment with moving Nushell to use it in the coming release (or two).");function Jt(Kt,Ot){const o=s("ExternalLinkIcon");return r(),h("div",null,[a,_,d,c,e("p",null,[u,e("a",p,[f,n(o)]),m,e("a",g,[b,n(o)]),k,w,v]),x,y,N,I,e("ul",null,[e("li",null,[e("a",z,[T,n(o)]),W]),e("li",null,[e("a",A,[F,n(o)]),S]),e("li",null,[e("a",j,[B,n(o)]),V,e("a",C,[E,n(o)]),L])]),D,e("ul",null,[e("li",null,[e("a",H,[P,n(o)])]),e("li",null,[e("a",R,[U,n(o)])]),e("li",null,[e("a",q,[G,n(o)])]),e("li",null,[e("a",M,[Y,n(o)])]),e("li",null,[e("a",J,[K,n(o)])]),e("li",null,[e("a",O,[Q,n(o)])]),e("li",null,[e("a",X,[Z,n(o)])]),e("li",null,[e("a",$,[ee,n(o)])])]),te,e("ul",null,[e("li",null,[oe,e("a",ne,[le,n(o)]),se]),e("li",null,[e("a",re,[he,n(o)]),ie,e("a",ae,[_e,n(o)]),de]),e("li",null,[ce,e("a",ue,[pe,n(o)]),fe]),e("li",null,[me,e("a",ge,[be,n(o)]),ke]),e("li",null,[we,e("a",ve,[xe,n(o)]),ye]),e("li",null,[Ne,e("a",Ie,[ze,Te,n(o)]),We]),e("li",null,[Ae,e("a",Fe,[Se,n(o)]),je]),e("li",null,[e("a",Be,[Ve,Ce,n(o)]),Ee]),e("li",null,[Le,e("a",De,[He,n(o)]),Pe]),e("li",null,[Re,e("a",Ue,[qe,Ge,n(o)]),Me]),e("li",null,[e("a",Ye,[Je,n(o)]),Ke]),e("li",null,[Oe,e("a",Qe,[Xe,n(o)]),Ze]),e("li",null,[$e,e("a",et,[tt,n(o)]),ot]),e("li",null,[nt,e("a",lt,[st,n(o)]),rt]),e("li",null,[ht,e("a",it,[at,n(o)]),_t]),e("li",null,[dt,e("a",ct,[ut,n(o)]),pt]),e("li",null,[ft,e("a",mt,[gt,bt,kt,n(o)]),wt]),e("li",null,[vt,e("a",xt,[yt,Nt,n(o)]),It]),e("li",null,[e("a",zt,[Tt,n(o)]),Wt]),e("li",null,[At,e("a",Ft,[St,n(o)]),jt]),e("li",null,[Bt,e("a",Vt,[Ct,n(o)]),Et])]),Lt,Dt,e("p",null,[Ht,e("a",Pt,[Rt,n(o)]),Ut]),e("p",null,[qt,e("a",Gt,[Mt,n(o)]),Yt])])}var Xt=l(i,[["render",Jt],["__file","2021-08-03-nushell_0_35.html.vue"]]);export{Xt as default};
