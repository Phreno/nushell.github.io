import{_ as l,r as c,o as d,c as h,a as e,b as n,w as i,e as a,d as o}from"./app.a6df64b1.js";const r={},u=a('<h1 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h1><h2 id="nushell-configuration-with-env-nu-and-config-nu" tabindex="-1"><a class="header-anchor" href="#nushell-configuration-with-env-nu-and-config-nu" aria-hidden="true">#</a> Nushell Configuration with <code>env.nu</code> and <code>config.nu</code></h2><p>Nushell uses a configuration system that loads+runs two Nushell script files at launch time: First, <code>env.nu</code>, then <code>config.nu</code>. Paths to these files can be found by calling <code>echo $nu.env-path</code> and <code>echo $nu.config-path</code>. <code>env.nu</code> is meant to define the environment variables which are then available within <code>config.nu</code>. <code>config.nu</code> can be used to add definitions, aliases, and more to the global namespace.</p>',3),_=o("(You can think of the Nushell config loading sequence as executing two "),f={href:"https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop",target:"_blank",rel:"noopener noreferrer"},g=o("REPL"),p=o(" lines on startup: "),m=e("code",null,"source /path/to/env.nu",-1),v=o(" and "),b=e("code",null,"source /path/to/config.nu",-1),x=o(". Therefore, using "),w=e("code",null,"env.nu",-1),y=o(" for environment and "),N=e("code",null,"config.nu",-1),k=o(" for other config is just a convention.)"),T=o("When you launch Nushell without these files set up, Nushell will prompt you to download the "),I={href:"https://github.com/nushell/nushell/blob/main/crates/nu-utils/src/sample_config/default_env.nu",target:"_blank",rel:"noopener noreferrer"},O=e("code",null,"default env.nu",-1),P=o(" and "),R={href:"https://github.com/nushell/nushell/blob/main/crates/nu-utils/src/sample_config/default_config.nu",target:"_blank",rel:"noopener noreferrer"},A=e("code",null,"default config.nu",-1),C=o("."),$=a(`<p>You can browse the default files for default values of environment variables and a list of all configurable settings.</p><h3 id="configuring-env-config" tabindex="-1"><a class="header-anchor" href="#configuring-env-config" aria-hidden="true">#</a> Configuring <code>$env.config</code></h3><p>Nushell&#39;s main settings are kept in the <code>config</code> environment variable as a record. This record can be created using:</p><div class="language-text ext-text"><pre class="language-text"><code>let-env config = {
  ...
}
</code></pre></div><p>You can also shadow <code>$env.config</code> and update it:</p><div class="language-text ext-text"><pre class="language-text"><code>let-env config = ($env.config | upsert &lt;field name&gt; &lt;field value&gt;)
</code></pre></div><p>By convention, this variable is defined in the <code>config.nu</code> file.</p><h3 id="environment" tabindex="-1"><a class="header-anchor" href="#environment" aria-hidden="true">#</a> Environment</h3>`,8),M=o("You can set environment variables for the duration of a Nushell session using "),q=e("code",null,"let-env",-1),E=o(" calls inside the "),L=e("code",null,"env.nu",-1),S=o(" file. For example:"),D=a(`<div class="language-text ext-text"><pre class="language-text"><code>let-env FOO = &#39;BAR&#39;
</code></pre></div><p><em>(Although $env.config is an environment variable, it is still defined by convention inside config.nu.)</em></p><p>These are some important variables to look at for Nushell-specific settings:</p><ul><li><code>LS_COLORS</code>: Sets up colors per file type in ls</li><li><code>PROMPT_COMMAND</code>: Code to execute for setting up the prompt (block or string)</li><li><code>PROMPT_COMMAND_RIGHT</code>: Code to execute for setting up the right prompt (block)</li><li><code>PROMPT_INDICATOR = &quot;\u3009&quot;</code>: The indicator printed after the prompt (by default &quot;&gt;&quot;-like Unicode symbol)</li><li><code>PROMPT_INDICATOR_VI_INSERT = &quot;: &quot;</code></li><li><code>PROMPT_INDICATOR_VI_NORMAL = &quot;\u3009 &quot;</code></li><li><code>PROMPT_MULTILINE_INDICATOR = &quot;::: &quot;</code></li></ul><h3 id="configurations-with-built-in-commands" tabindex="-1"><a class="header-anchor" href="#configurations-with-built-in-commands" aria-hidden="true">#</a> Configurations with built-in commands</h3><p>Starting with release v0.64 of Nushell, we have introduced two new commands(<code>config nu</code> and <code>config env</code>) which help you quickly edit nu configurations with your preferred text editor/IDE</p><p>Nushell follows underneath orders to locate the editor:</p><ol><li><code>$config.buffer_editor</code></li><li><code>$env.EDITOR</code></li><li><code>$env.VISUAL</code></li><li>If 1~3 not found, then launch <code>notepad</code> for windows, otherwise run <code>nano</code></li></ol><h3 id="color-config-section" tabindex="-1"><a class="header-anchor" href="#color-config-section" aria-hidden="true">#</a> Color Config section</h3>`,9),H=o("You can learn more about setting up colors and theming in the "),V=o("associated chapter"),B=o("."),Y=e("h2",{id:"configuring-nu-as-a-login-shell",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#configuring-nu-as-a-login-shell","aria-hidden":"true"},"#"),o(" Configuring Nu as a login shell")],-1),F=e("p",null,[o("To use Nu as a login shell, you'll need to configure the "),e("code",null,"$env"),o(" variable. With this, you'll have enough support to run external commands as a login shell.")],-1),U=e("p",null,"You can build the full set of environment variables by running Nu inside of another shell, like Bash. Once you're in Nu, you can run a command like this:",-1),W=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> env | each { |it| echo $"let-env ($it.name) = '($it.raw)'" } | str collect (char nl)
`)])],-1),j=o("This will print out "),G=e("code",null,"let-env",-1),K=o(" lines, one for each environment variable along with its setting."),z=a(`<p>Next, on some distros you&#39;ll also need to ensure Nu is in the /etc/shells list:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; cat /etc/shells
# /etc/shells: valid login shells
/bin/sh
/bin/dash
/bin/bash
/bin/rbash
/usr/bin/screen
/usr/bin/fish
/home/jonathan/.cargo/bin/nu
</code></pre></div><p>With this, you should be able to <code>chsh</code> and set Nu to be your login shell. After a logout, on your next login you should be greeted with a shiny Nu prompt.</p><h3 id="configuration-with-login-nu" tabindex="-1"><a class="header-anchor" href="#configuration-with-login-nu" aria-hidden="true">#</a> Configuration with <code>login.nu</code></h3><p>If Nushell is used as a login shell, you can use a specific configuration file which is only sourced in this case. Therefore a file with name <code>login.nu</code> has to be in the standard configuration directory.</p><p>The file <code>login.nu</code> is sourced after <code>env.nu</code> and <code>config.nu</code>, so that you can overwrite those configurations if you need.</p><p>There is an environment variable <code>$nu.loginshell-path</code> containing the path to this file.</p><h3 id="macos-keeping-usr-bin-open-as-open" tabindex="-1"><a class="header-anchor" href="#macos-keeping-usr-bin-open-as-open" aria-hidden="true">#</a> macOS: Keeping <code>/usr/bin/open</code> as <code>open</code></h3>`,8),J=o("Some tools (e.g. Emacs) rely on an "),Q=e("code",null,"open",-1),X=o(" command to open files on Mac. As Nushell has its own "),Z=e("code",null,"open",-1),ee=o(" command which has different semantics and shadows "),oe=e("code",null,"/usr/bin/open",-1),ne=o(", these tools will error out when trying to use it. One way to work around this is to define a custom command for Nushell's "),te=e("code",null,"open",-1),ie=o(" and create an alias for the system's "),se=e("code",null,"open",-1),ae=o(" in your "),ce=e("code",null,"config.nu",-1),le=o(" file like this:"),de=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`def nuopen [arg, --raw (-r)] { if $raw { open -r $arg } else { open $arg } }
alias open = ^open
`)])],-1),he=e("h2",{id:"path-configuration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#path-configuration","aria-hidden":"true"},"#"),o(" PATH configuration")],-1),re=o("To append a path to "),ue={href:"https://en.wikipedia.org/wiki/PATH_(variable)",target:"_blank",rel:"noopener noreferrer"},_e=o("the PATH variable"),fe=o(", you can use "),ge=e("code",null,"let-env",-1),pe=o(" and "),me=e("code",null,"append",-1),ve=o(" in "),be=e("code",null,"env.nu",-1),xe=o(":"),we=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`let-env PATH = ($env.PATH | append '/some/path')
`)])],-1),ye=o("This will append "),Ne=e("code",null,"/some/path",-1),ke=o(" to the end of PATH; you can also use "),Te=e("code",null,"prepend",-1),Ie=o(" to add entries to the start of PATH.");function Oe(Pe,Re){const s=c("ExternalLinkIcon"),t=c("RouterLink");return d(),h("div",null,[u,e("p",null,[e("em",null,[_,e("a",f,[g,n(s)]),p,m,v,b,x,w,y,N,k])]),e("p",null,[T,e("a",I,[O,n(s)]),P,e("a",R,[A,n(s)]),C]),$,e("p",null,[M,n(t,{to:"/book/commands/let-env.html"},{default:i(()=>[q]),_:1}),E,L,S]),D,e("p",null,[H,n(t,{to:"/book/coloring_and_theming.html"},{default:i(()=>[V]),_:1}),B]),Y,F,U,W,e("p",null,[j,n(t,{to:"/book/commands/let-env.html"},{default:i(()=>[G]),_:1}),K]),z,e("p",null,[J,Q,X,n(t,{to:"/book/commands/open.html"},{default:i(()=>[Z]),_:1}),ee,oe,ne,te,ie,se,ae,ce,le]),de,he,e("p",null,[re,e("a",ue,[_e,n(s)]),fe,n(t,{to:"/book/commands/let-env.html"},{default:i(()=>[ge]),_:1}),pe,n(t,{to:"/book/commands/append.html"},{default:i(()=>[me]),_:1}),ve,be,xe]),we,e("p",null,[ye,Ne,ke,n(t,{to:"/book/commands/prepend.html"},{default:i(()=>[Te]),_:1}),Ie])])}const Ce=l(r,[["render",Oe],["__file","configuration.html.vue"]]);export{Ce as default};
