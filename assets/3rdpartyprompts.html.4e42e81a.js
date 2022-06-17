import{_ as a,r,o as h,c as l,a as e,b as s,d as t,e as n}from"./app.b8dbd919.js";const i={},p=e("h1",{id:"how-to-configure-3rd-party-prompts",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-configure-3rd-party-prompts","aria-hidden":"true"},"#"),t(" How to configure 3rd party prompts")],-1),c=e("h2",{id:"nerdfonts",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nerdfonts","aria-hidden":"true"},"#"),t(" nerdfonts")],-1),_=e("p",null,"nerdfonts are not required but they make the presentation much better.",-1),d={href:"https://www.nerdfonts.com",target:"_blank",rel:"noopener noreferrer"},u=t("site"),m={href:"https://github.com/ryanoasis/nerd-fonts",target:"_blank",rel:"noopener noreferrer"},f=t("repo"),g=e("h2",{id:"oh-my-posh",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#oh-my-posh","aria-hidden":"true"},"#"),t(" oh-my-posh")],-1),b={href:"https://ohmyposh.dev/",target:"_blank",rel:"noopener noreferrer"},k=t("site"),y={href:"https://github.com/JanDeDobbeleer/oh-my-posh",target:"_blank",rel:"noopener noreferrer"},v=t("repo"),M=t("If you like "),O={href:"https://ohmyposh.dev/",target:"_blank",rel:"noopener noreferrer"},P=t("oh-my-posh"),T=t(", you can use oh-my-posh with Nushell with a few steps. It works great with Nushell. How to setup oh-my-posh with Nushell:"),w=t("Install Oh My Posh and download oh-my-posh's themes following "),I={href:"https://ohmyposh.dev/docs/linux#installation",target:"_blank",rel:"noopener noreferrer"},x=t("guide"),N=t("."),R=t("Download and install a "),S={href:"https://github.com/ryanoasis/nerd-fonts",target:"_blank",rel:"noopener noreferrer"},D=t("nerd font"),A=t("."),q=t("Set the PROMPT_COMMAND in ~/.config/nushell/config.nu(or the path output by "),C=e("code",null,"$nu.config-path",-1),$=t("), change "),L=e("code",null,"M365Princess.omp.json",-1),E=t(" to whatever you like "),H={href:"https://ohmyposh.dev/docs/themes",target:"_blank",rel:"noopener noreferrer"},V=t("Themes demo"),j=t("."),U=n(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> let-env PROMPT_COMMAND <span class="token operator">=</span> <span class="token punctuation">{</span> oh-my-posh --config ~/.poshthemes/M365Princess.omp.json <span class="token punctuation">}</span>
</code></pre></div><p>For MacOS users:</p>`,2),B=t("You can install oh-my-posh by "),F=e("code",null,"brew",-1),z=t(", just following the "),Y={href:"https://ohmyposh.dev/docs/macos",target:"_blank",rel:"noopener noreferrer"},G=t("guide here"),J=t("Download and install a "),Q={href:"https://github.com/ryanoasis/nerd-fonts",target:"_blank",rel:"noopener noreferrer"},X=t("nerd font"),K=t("."),W=e("li",null,[t("Set the PROMPT_COMMAND in the file output by "),e("code",null,"$nu.config-path"),t(", here is a code snippet:")],-1),Z=n(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> posh-dir <span class="token operator">=</span> <span class="token punctuation">(</span>brew --prefix oh-my-posh <span class="token operator">|</span> str trim<span class="token punctuation">)</span>
<span class="token builtin class-name">let</span> posh-theme <span class="token operator">=</span> <span class="token string">$&#39;($posh-dir)/share/oh-my-posh/themes/&#39;</span>
<span class="token comment"># Change the theme names to: zash/space/robbyrussel/powerline/powerlevel10k_lean/</span>
<span class="token comment"># material/half-life/lambda Or double lines theme: amro/pure/spaceship, etc.</span>
<span class="token comment"># For more [Themes demo](https://ohmyposh.dev/docs/themes)</span>
let-env PROMPT_COMMAND <span class="token operator">=</span> <span class="token punctuation">{</span> oh-my-posh prompt print primary --config <span class="token string">$&#39;($posh-theme)/zash.omp.json&#39;</span> <span class="token punctuation">}</span>
<span class="token comment"># Optional</span>
let-env PROMPT_INDICATOR <span class="token operator">=</span> $<span class="token string">&quot;(ansi y)$&gt; (ansi reset)&quot;</span>
</code></pre></div><h2 id="starship" tabindex="-1"><a class="header-anchor" href="#starship" aria-hidden="true">#</a> Starship</h2>`,2),ee={href:"https://starship.rs/",target:"_blank",rel:"noopener noreferrer"},te=t("site"),oe={href:"https://github.com/starship/starship",target:"_blank",rel:"noopener noreferrer"},se=t("repo"),ne=n(`<ol><li>Follow the links above and install Starship.</li><li>Install nerdfonts depending on your preferences.</li><li>Use the config example below. Make sure to set the <code>STARSHIP_SHELL</code> environment variable.</li></ol><p>Here&#39;s an example config section for Starship:</p><div class="language-text ext-text"><pre class="language-text"><code>let-env STARSHIP_SHELL = &quot;nu&quot;

def create_left_prompt [] {
    starship prompt --cmd-duration $env.CMD_DURATION_MS $&#39;--status=($env.LAST_EXIT_CODE)&#39;
}

# Use nushell functions to define your right and left prompt
let-env PROMPT_COMMAND = { create_left_prompt }
let-env PROMPT_COMMAND_RIGHT = &quot;&quot;

# The prompt indicators are environmental variables that represent
# the state of the prompt
let-env PROMPT_INDICATOR = &quot;&quot;
let-env PROMPT_INDICATOR_VI_INSERT = &quot;: &quot;
let-env PROMPT_INDICATOR_VI_NORMAL = &quot;\u3009&quot;
let-env PROMPT_MULTILINE_INDICATOR = &quot;::: &quot;
</code></pre></div><p>Now restart Nu.</p><div class="language-text ext-text"><pre class="language-text"><code>nushell on \u{1F4D9} main is \u{1F4E6} v0.60.0 via \u{1F980} v1.59.0
\u276F
</code></pre></div>`,5),ae=t("You can learn more about configuring Starship in the "),re={href:"https://github.com/starship/starship#step-2-setup-your-shell-to-use-starship",target:"_blank",rel:"noopener noreferrer"},he=t("official starship configuration documentation"),le=t("."),ie=t("An alternate way to enable Starship is described in the "),pe={href:"https://starship.rs/#nushell",target:"_blank",rel:"noopener noreferrer"},ce=t("Starship Quick Install"),_e=t(" instructions."),de=e("h2",{id:"purs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#purs","aria-hidden":"true"},"#"),t(" Purs")],-1),ue={href:"https://github.com/xcambar/purs",target:"_blank",rel:"noopener noreferrer"},me=t("repo");function fe(ge,be){const o=r("ExternalLinkIcon");return h(),l("div",null,[p,c,_,e("p",null,[e("a",d,[u,s(o)])]),e("p",null,[e("a",m,[f,s(o)])]),g,e("p",null,[e("a",b,[k,s(o)])]),e("p",null,[e("a",y,[v,s(o)])]),e("p",null,[M,e("a",O,[P,s(o)]),T]),e("ol",null,[e("li",null,[w,e("a",I,[x,s(o)]),N]),e("li",null,[R,e("a",S,[D,s(o)]),A]),e("li",null,[q,C,$,L,E,e("a",H,[V,s(o)]),j])]),U,e("ol",null,[e("li",null,[B,F,z,e("a",Y,[G,s(o)])]),e("li",null,[J,e("a",Q,[X,s(o)]),K]),W]),Z,e("p",null,[e("a",ee,[te,s(o)])]),e("p",null,[e("a",oe,[se,s(o)])]),ne,e("p",null,[ae,e("a",re,[he,s(o)]),le]),e("p",null,[ie,e("a",pe,[ce,s(o)]),_e]),de,e("p",null,[e("a",ue,[me,s(o)])])])}var ye=a(i,[["render",fe],["__file","3rdpartyprompts.html.vue"]]);export{ye as default};
