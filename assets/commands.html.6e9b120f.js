import{_ as o,z as i,A as r,X as t,C as e,T as n,a6 as d,Q as s}from"./framework.3d018c9f.js";const l={},c=t("h1",{id:"commands",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#commands","aria-hidden":"true"},"#"),e(" Commands")],-1),h=t("p",null,[e("Commands are the building blocks for pipelines in Nu. They do the action of the pipeline, whether creating data, changing data as it flows from inputs to outputs, or viewing data once it has exited the pipeline. There are two types of commands: internal commands, those commands built to run inside of Nu, and external commands, commands that are outside of Nu and communicate with standard Unix-style "),t("code",null,"stdin"),e("/"),t("code",null,"stdout"),e(".")],-1),m=t("h2",{id:"internal-commands",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#internal-commands","aria-hidden":"true"},"#"),e(" Internal commands")],-1),u={href:"https://github.com/nushell/nushell/blob/d30c40b40ebfbb411a503ad7c7bceae8029c6689/crates/nu-source/src/meta.rs#L91",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.com/nushell/nushell/blob/main/crates/nu-errors/src/lib.rs#L179",target:"_blank",rel:"noopener noreferrer"},f=d('<h3 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h3><p>Commands use a light typechecking pass to ensure that arguments passed to them can be handled correctly. To enable this, each command provides a Signature which tells Nu:</p><ul><li>The name of the command</li><li>The positional arguments (e.g. in <code>start x y</code> the <code>x</code> and <code>y</code> are positional arguments)</li><li>If the command takes an unbounded number of additional positional arguments (e.g. <code>start a1 a2 a3 ... a99 a100</code>)</li><li>The named arguments (e.g. <code>start --now</code>)</li><li>If the command is a filter or a sink</li></ul><p>With this information, a pipeline can be checked for potential problems before it&#39;s executed.</p><h2 id="external-commands" tabindex="-1"><a class="header-anchor" href="#external-commands" aria-hidden="true">#</a> External commands</h2><p>An external command is any command that is not part of the Nu built-in commands or plugins. If a command is called that Nu does not know about, it will call out to the underlying environment with the provided arguments in an attempt to invoke this command as an external program.</p><h2 id="communicating-between-internal-and-external-commands" tabindex="-1"><a class="header-anchor" href="#communicating-between-internal-and-external-commands" aria-hidden="true">#</a> Communicating between internal and external commands</h2><h3 id="internal-to-internal" tabindex="-1"><a class="header-anchor" href="#internal-to-internal" aria-hidden="true">#</a> Internal to internal</h3><p>Internal commands communicate with each other using the complete value stream that Nu provides, which includes all the built-in file types. This includes communication between internal commands and plugins (in both directions).</p><h3 id="internal-to-external" tabindex="-1"><a class="header-anchor" href="#internal-to-external" aria-hidden="true">#</a> Internal to external</h3><p>Internal commands that send text to external commands need to have prepared text strings ahead of time. If an object is sent directly to an external command, that is considered an error as there is no way to infer how the structured data should be represented for the external command. The user is expected to either narrow down to a simple data cell or to use one of the file type converters (like <code>to-json</code>) to convert the table into a string representation.</p><p>The external command is opened so that its <code>stdin</code> is redirected, so that the data can be sent to it.</p><h3 id="external-to-internal" tabindex="-1"><a class="header-anchor" href="#external-to-internal" aria-hidden="true">#</a> External to internal</h3><p>External commands send a series of strings via their <code>stdout</code>. These strings are read into the pipeline and are made available to the internal command that is next in the pipeline, or displayed to the user if the external command is the last step of the pipeline.</p><h3 id="external-to-external" tabindex="-1"><a class="header-anchor" href="#external-to-external" aria-hidden="true">#</a> External to external</h3><p>External commands communicate with each other via <code>stdin</code>/<code>stdout</code>. As Nu will detect this situation, it will redirect the <code>stdout</code> of the first command to the <code>stdin</code> of the following external command. In this way, the expected behavior of a shell pipeline between external commands is maintained.</p>',16);function x(b,g){const a=s("ExternalLinkIcon");return i(),r("div",null,[c,h,m,t("p",null,[e("All commands inside of Nu, including plugins, are internal commands. Internal commands communicate with each other using streams of "),t("a",u,[e("Tagged<Value>"),n(a)]),e(" and "),t("a",p,[e("ShellError"),n(a)]),e(".")]),f])}const w=o(l,[["render",x],["__file","commands.html.vue"]]);export{w as default};