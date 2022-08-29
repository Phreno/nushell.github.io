import{_ as a,r as i,o as l,c as h,a as t,b as o,w as r,e as c,d as e}from"./app.a6df64b1.js";const u={},d=c('<h1 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h1><p>Hello, and welcome to the Nushell project. The goal of this project is to take the Unix philosophy of shells, where pipes connect simple commands together, and bring it to the modern style of development. Thus, rather than being either a shell, or a programming language, Nushell connects both by bringing a rich programming language and a full-featured shell together into one package.</p><p>Nu takes cues from a lot of familiar territory: traditional shells like bash, object based shells like PowerShell, gradually typed languages like TypeScript, functional programming, systems programming, and more. But rather than trying to be a jack of all trades, Nu focuses its energy on doing a few things well:</p><ul><li>Being a flexible cross-platform shell with a modern feel</li><li>Solving problems as a modern programming language that works with the structure of your data</li><li>Giving clear error messages and clean IDE support</li></ul><h2 id="this-book" tabindex="-1"><a class="header-anchor" href="#this-book" aria-hidden="true">#</a> This Book</h2><p>The book is split into chapters which are further broken down into sections. You can click on the chapter headers to get more information about it.</p>',6),_=e("Getting Started"),p=e(" teaches you how to install Nushell and shows you the ropes. It also explains some of the design principles where Nushell differs from typical shells, such as bash."),f=e("Nu Fundamentals"),m=e(" explains basic concepts of the Nushell language."),g=e("Programming in Nu"),b=e(" dives more deeply into the language features and shows several ways how to organize and structure your code."),w=e("Nu as a Shell"),k=e(" focuses on the shell features, most notably the configuration and environment."),y=e("Coming to Nu"),N=e(" is intended to give a quick start for users coming from other shells or languages."),v=e("Advanced"),x=e(" includes some more advanced topics (they are not "),T=t("em",null,"so",-1),j=e(" advanced, make sure to check them out, too!)."),I=t("h2",{id:"the-many-parts-of-nushell",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#the-many-parts-of-nushell","aria-hidden":"true"},"#"),e(" The Many Parts of Nushell")],-1),C=e("The Nushell project consists of multiple different repositories and subprojects. You can find all of them under "),G={href:"https://github.com/nushell",target:"_blank",rel:"noopener noreferrer"},S=e("our organization on GitHub"),B=e("."),R=e("The main Nushell repository can be found "),H={href:"https://github.com/nushell/nushell",target:"_blank",rel:"noopener noreferrer"},A=e("here"),D=e(". It is broken into multiple crates that can be used as independent libraries in your own project, if you wish so."),E=e("The repository of our "),F={href:"https://www.nushell.sh",target:"_blank",rel:"noopener noreferrer"},L=e("nushell.sh"),V=e(" page, including this book, can be found "),Y={href:"https://github.com/nushell/nushell.github.io",target:"_blank",rel:"noopener noreferrer"},q=e("here"),z=e("."),M=e("Nushell has its own line editor which "),P={href:"https://github.com/nushell/reedline",target:"_blank",rel:"noopener noreferrer"},U=e("has its own repository"),W={href:"https://github.com/nushell/nu_scripts",target:"_blank",rel:"noopener noreferrer"},O=t("code",null,"nu_scripts",-1),J=e(" is a place to share scripts and modules with other users until we have some sort of package manager."),K={href:"https://github.com/nushell/nana",target:"_blank",rel:"noopener noreferrer"},Q=e("Nana"),X=e(" is an experimental effort to explore graphical user interface for Nushell."),Z={href:"https://github.com/nushell/awesome-nu",target:"_blank",rel:"noopener noreferrer"},$=e("Awesome Nu"),ee=e(" contains a list of tools that work with the Nushell ecosystem: plugins, scripts, editor extension, 3rd party integrations, etc."),te={href:"https://github.com/nushell/showcase",target:"_blank",rel:"noopener noreferrer"},oe=e("Nu Showcase"),se=e(" is a place to share works about Nushell, be it blogs, artwork or something else."),ne={href:"https://github.com/nushell/rfcs",target:"_blank",rel:"noopener noreferrer"},re=e("Request for Comment (RFC)"),ie=e(" serves as a place to propose and discuss major design changes. While currently under-utilized, we expect to use it more as we get closer to and beyond 1.0."),ae=t("h2",{id:"contributing",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#contributing","aria-hidden":"true"},"#"),e(" Contributing")],-1),le=t("p",null,[e("We welcome contributions! "),t("a",{href:"#the-many-parts-of-nushell"},"As you can see"),e(", there are a lot of places to contribute to. Most repositories contain "),t("code",null,"CONTRIBUTING.md"),e(" file with tips and details that should help you get started (if not, consider contributing a fix!).")],-1),he=e("Nushell itself is written in "),ce={href:"https://www.rust-lang.org",target:"_blank",rel:"noopener noreferrer"},ue=e("Rust"),de=e(". However, you do not have to be a Rust programmer to help. If you know some web development, you can contribute to improving this website or the Nana project. "),_e=e("Dataframes"),pe=e(" can use your data processing expertise."),fe=t("p",null,[e("If you wrote a cool script, plugin or integrated Nushell somewhere, we'd welcome your contribution to "),t("code",null,"nu_scripts"),e(" or Awesome Nu. Discovering bugs with reproduction steps and filing GitHub issues for them is a valuable help, too! You can contribute to Nushell just by using Nushell!")],-1),me=t("p",null,"Since Nushell evolves fast, this book is in a constant need of updating. Contributing to this book does not require any special skills aside from a basic familiarity with Markdown. Furthermore, you can consider translating parts of it to your language.",-1),ge=t("h2",{id:"community",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#community","aria-hidden":"true"},"#"),e(" Community")],-1),be=e("The main place to discuss anything Nushell is our "),we={href:"https://discord.com/invite/NtAbbGn",target:"_blank",rel:"noopener noreferrer"},ke=e("Discord"),ye=e(". You can also follow us on "),Ne={href:"https://twitter.com/nu_shell",target:"_blank",rel:"noopener noreferrer"},ve=e("Twitter"),xe=e(" for news and updates. Finally, you can use the GitHub discussions or file GitHub issues.");function Te(je,Ie){const n=i("RouterLink"),s=i("ExternalLinkIcon");return l(),h("div",null,[d,t("ul",null,[t("li",null,[o(n,{to:"/book/getting_started.html"},{default:r(()=>[_]),_:1}),p]),t("li",null,[o(n,{to:"/book/nu_fundamentals.html"},{default:r(()=>[f]),_:1}),m]),t("li",null,[o(n,{to:"/book/programming_in_nu.html"},{default:r(()=>[g]),_:1}),b]),t("li",null,[o(n,{to:"/book/nu_as_a_shell.html"},{default:r(()=>[w]),_:1}),k]),t("li",null,[o(n,{to:"/book/coming_to_nu.html"},{default:r(()=>[y]),_:1}),N]),t("li",null,[o(n,{to:"/book/advanced.html"},{default:r(()=>[v]),_:1}),x,T,j])]),I,t("p",null,[C,t("a",G,[S,o(s)]),B]),t("ul",null,[t("li",null,[R,t("a",H,[A,o(s)]),D]),t("li",null,[E,t("a",F,[L,o(s)]),V,t("a",Y,[q,o(s)]),z]),t("li",null,[M,t("a",P,[U,o(s)])]),t("li",null,[t("a",W,[O,o(s)]),J]),t("li",null,[t("a",K,[Q,o(s)]),X]),t("li",null,[t("a",Z,[$,o(s)]),ee]),t("li",null,[t("a",te,[oe,o(s)]),se]),t("li",null,[t("a",ne,[re,o(s)]),ie])]),ae,le,t("p",null,[he,t("a",ce,[ue,o(s)]),de,o(n,{to:"/book/dataframes.html"},{default:r(()=>[_e]),_:1}),pe]),fe,me,ge,t("p",null,[be,t("a",we,[ke,o(s)]),ye,t("a",Ne,[ve,o(s)]),xe])])}const Ge=a(u,[["render",Te],["__file","index.html.vue"]]);export{Ge as default};
