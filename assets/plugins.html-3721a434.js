import{_ as o,M as i,p as r,q as u,Q as e,t,N as n,U as l,a1 as d}from"./framework-344bb0e4.js";const h={},c=e("h1",{id:"plugins",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#plugins","aria-hidden":"true"},"#"),t(" Plugins")],-1),g=e("p",null,"Nu can be extended using plugins. Plugins behave much like Nu's built-in commands, with the added benefit that they can be added separately from Nu itself.",-1),p={href:"https://en.wikipedia.org/wiki/Standard_streams",target:"_blank",rel:"noopener noreferrer"},_=e("h2",{id:"adding-a-plugin",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#adding-a-plugin","aria-hidden":"true"},"#"),t(" Adding a plugin")],-1),m=e("code",null,"register",-1),f=e("p",null,[t("Please note that the plugin name needs to start with "),e("code",null,"nu_plugin_"),t(", Nu uses the name prefix to detect plugins.")],-1),x=e("p",null,"Linux+macOS:",-1),b=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> register ./my_plugins/nu_plugin_cool
`)])],-1),N=e("p",null,"Windows:",-1),k=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> register .\\my_plugins\\nu_plugin_cool.exe
`)])],-1),w=e("code",null,"register",-1),v=d(`<ol><li>Nu launches the plugin, and wait for plugin tell Nu which communication encoding it should use</li><li>Nu sends it a &quot;Signature&quot; message over stdin</li><li>The plugin responds via stdout with a message containing its signature (name, description, arguments, flags, and more)</li><li>Nu saves the plugin signature in the file at <code>$nu.plugin-path</code>, so registration is persisted across multiple launches</li></ol><p>Once registered, the plugin is available as part of your set of commands:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; help commands | where command_type == &quot;plugin&quot;
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Nu&#39;s main repo contains example plugins that are useful for learning how the plugin protocol works:</p>`,5),y={href:"https://github.com/nushell/nushell/tree/main/crates/nu_plugin_example",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/nushell/nushell/blob/main/crates/nu_plugin_python",target:"_blank",rel:"noopener noreferrer"},S=e("h2",{id:"debugging",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#debugging","aria-hidden":"true"},"#"),t(" Debugging")],-1),L=e("p",null,"The simplest way to debug a plugin is to print to stderr; plugins' standard error streams are redirected through Nu and displayed to the user.",-1),P=e("h2",{id:"help",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#help","aria-hidden":"true"},"#"),t(" Help")],-1),A={href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"};function E(T,V){const s=i("ExternalLinkIcon"),a=i("RouterLink");return r(),u("div",null,[c,g,e("p",null,[t("Nu plugins are executables; Nu launches them as needed and communicates with them over "),e("a",p,[t("stdin, stdout, and stderr"),n(s)]),t(". Nu plugins can use either JSON or MSGPACK as their communication encoding.")]),_,e("p",null,[t("To add a plugin, call the "),n(a,{to:"/book/commands/register.html"},{default:l(()=>[m]),_:1}),t(" command to tell Nu where to find it. As you do, you'll need to also tell Nushell what encoding the plugin uses.")]),f,x,b,N,k,e("p",null,[t("When "),n(a,{to:"/book/commands/register.html"},{default:l(()=>[w]),_:1}),t(" is called:")]),v,e("ul",null,[e("li",null,[e("a",y,[t("Rust"),n(s)])]),e("li",null,[e("a",q,[t("Python"),n(s)])])]),S,L,P,e("p",null,[t("Nu's plugin documentation is a work in progress. If you're unsure about something, the #plugins channel on "),e("a",A,[t("the Nu Discord"),n(s)]),t(" is a great place to ask questions!")])])}const C=o(h,[["render",E],["__file","plugins.html.vue"]]);export{C as default};
