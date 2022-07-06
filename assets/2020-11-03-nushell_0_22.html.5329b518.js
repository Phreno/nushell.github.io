import{_ as o,r,o as s,c as i,a as e,b as t,d as a,e as d}from"./app.ea1b8c3e.js";var l="/assets/0_22_flatten.f13a7af4.gif";const c={},h=e("h1",{id:"nushell-0-22",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-22","aria-hidden":"true"},"#"),a(" Nushell 0.22")],-1),p=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),m=e("p",null,"Today, we're releasing 0.22 of Nu. In this version, we introduce a new flattening command, more math commands, we remove it-expansion, and add a lot of assorted improvements.",-1),u=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),a(" Where to get it")],-1),f=a("Nu 0.22 is available as "),g={href:"https://github.com/nushell/nushell/releases/tag/0.22.0",target:"_blank",rel:"noopener noreferrer"},w=a("pre-built binaries"),_=a(" or from "),b={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},x=a("crates.io"),v=a(". If you have Rust installed you can install it using "),y=e("code",null,"cargo install nu",-1),k=a("."),N=d('<p>If you want all the goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><h2 id="new-functionality" tabindex="-1"><a class="header-anchor" href="#new-functionality" aria-hidden="true">#</a> New functionality</h2><h3 id="the-flatten-command-andrasio" tabindex="-1"><a class="header-anchor" href="#the-flatten-command-andrasio" aria-hidden="true">#</a> The <code>flatten</code> command (andrasio)</h3><p><img src="'+l+`" alt="animation of using the flatten command"></p><p><em>New flatten command</em></p><p>There&#39;s now a flatten command that can take tables nested inside of the main table and flatten their contents into the main table.</p><h3 id="more-math-commands-morbatex-gillespiecd-fdncred" tabindex="-1"><a class="header-anchor" href="#more-math-commands-morbatex-gillespiecd-fdncred" aria-hidden="true">#</a> More <code>math</code> commands (morbatex, gillespiecd, fdncred)</h3><p>You can now use rounding in math operations:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo [1.5 2.3 -3.1] | math ceil
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500
 0 \u2502  2
 1 \u2502  3
 2 \u2502 -3
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500

&gt; echo [1.5 2.3 -3.1] | math floor
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500
 0 \u2502  1
 1 \u2502  2
 2 \u2502 -4
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500

&gt; echo [1.5 2.3 -3.1] | math round
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500
 0 \u2502  2
 1 \u2502  2
 2 \u2502 -3
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500
</code></pre></div><h2 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes" aria-hidden="true">#</a> Breaking changes</h2><h3 id="remove-it-expansion-jonathandturner" tabindex="-1"><a class="header-anchor" href="#remove-it-expansion-jonathandturner" aria-hidden="true">#</a> Remove it-expansion (jonathandturner)</h3><p>Previously, we treated the <code>$it</code> variable as a special variable that caused a command to iterate over each element in the row, for example <code>ls | echo $it.name</code> would expand to <code>ls | each { echo $it.name }</code>.</p><p>While this was handy in small examples, in the general case it became confusing to remember when and how it-expansion would happen.</p><p>In this release, we&#39;re trying an experiment of removing it-expansion.</p><p>Previously:</p><div class="language-text ext-text"><pre class="language-text"><code>ls | echo $it.name
</code></pre></div><p>Now:</p><div class="language-text ext-text"><pre class="language-text"><code>ls | each { echo $it.name }
</code></pre></div><p>Or, you can switch to other forms, like:</p><div class="language-text ext-text"><pre class="language-text"><code>ls | get name
</code></pre></div><p>We&#39;re working towards a simpler mental model, where blocks can have parameters, and <code>$it</code> is the name of the parameter if it&#39;s not specified.</p><p>Please try it out and let us know what you think.</p><h2 id="improvements" tabindex="-1"><a class="header-anchor" href="#improvements" aria-hidden="true">#</a> Improvements</h2><ul><li><strong>New</strong> - a <code>seq</code> command for working with sequences (fdncred)</li><li>bson and sqlite support added to the WiX (fdncred)</li><li><code>to md</code> now has a pretty flag (JosephTLyons)</li><li><code>ls</code> can now support other number formatting (lucassmmg)</li><li>Filesize formats can now be changed via <code>config</code> (fdncred)</li><li>Tables can now have heavy or no borders (fdncred)</li><li><code>math eval</code> now supports tau (rjboas)</li><li><code>char</code> now has simpler weather emoji (gillespiecd, fdncred)</li><li><code>str to-int</code> now takes an optional radix for conversion (gillespiecd)</li><li><code>char</code> can now print any unicode character (fdncred)</li><li><code>alias</code> now has optional type inference based on the recently accepted RFC (LhKipp)</li><li><code>ls</code> will also list inode in <code>-l</code> mode on Unix (gillespiecd)</li></ul><h2 id="internal-improvements-andrasio-jonathandturner-lhkipp-everlastingbugstopper-josephtlyons-fdncred-jjshanks" tabindex="-1"><a class="header-anchor" href="#internal-improvements-andrasio-jonathandturner-lhkipp-everlastingbugstopper-josephtlyons-fdncred-jjshanks" aria-hidden="true">#</a> Internal improvements (andrasio, jonathandturner, LhKipp, EverlastingBugstopper, JosephTLyons, fdncred, jjshanks)</h2><p>It&#39;s now easier to create column-paths inside of the Nu source, <code>alias</code> got some bugfixes, the parser got some bugfixes, fixed typo in the build message, filesize labels for bytes wasn&#39;t showing up (now fixed), internally there are now more helpers for creating the core Value type, bumped the required Rust version, bugfix for <code>;</code> endings, and remove unneeded comments.</p><h1 id="looking-forward" tabindex="-1"><a class="header-anchor" href="#looking-forward" aria-hidden="true">#</a> Looking forward</h1><p>We&#39;re continuing to work to simplify the internal representation, improve the parser, and work to add support for features like block parameters, variables, and, in the future, custom commands.</p>`,30),j=a("If you'd like to help out, come by the "),I={href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"},T=a("discord"),L=a(" and say hello!");function W($,B){const n=r("ExternalLinkIcon");return s(),i("div",null,[h,p,m,u,e("p",null,[f,e("a",g,[w,t(n)]),_,e("a",b,[x,t(n)]),v,y,k]),N,e("p",null,[j,e("a",I,[T,t(n)]),L])])}var q=o(c,[["render",W],["__file","2020-11-03-nushell_0_22.html.vue"]]);export{q as default};
