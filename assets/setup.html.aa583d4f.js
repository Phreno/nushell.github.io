import{_ as t,r as o,o as r,c as i,a as e,b as p,e as n,d as a}from"./app.a6df64b1.js";const l={},c=n(`<h1 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> Setup</h1><p>To get the most out of nu, it is important to setup your path and env for easy access. There are other ways to view these values and variables, however setting up your nu configuration will make it much easier as these are supported cross-platform.</p><hr><h3 id="configure-your-path-and-other-environment-variables" tabindex="-1"><a class="header-anchor" href="#configure-your-path-and-other-environment-variables" aria-hidden="true">#</a> Configure your path and other environment variables</h3><p>In order to configure your path in nushell you&#39;ll need to modify your <code>PATH</code> environment variable in your <code>config.nu</code> file. Open your <code>config.nu</code> file and put an entry in it like <code>let-env PATH = &quot;path1;path2;path3&quot;</code> ensuring that you use the proper path separation character, which is different by platform.</p><p>Alternately, if you want to change your path temporarily, you can do the same command at the prompt.</p><p>If you want to append a folder to your <code>PATH</code> environment variable you can do that too using the <code>append</code> or <code>prepend</code> command like this:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> let-env <span class="token environment constant">PATH</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$env</span><span class="token builtin class-name">.</span><span class="token environment constant">PATH</span> <span class="token operator">|</span> append <span class="token string">&quot;some/other/path&quot;</span><span class="token punctuation">)</span>
</code></pre></div>`,8),u=a("For more detailed instructions, see the our environment variables documentation "),h={href:"https://github.com/nushell/nushell/blob/main/docs/Environment_Variables.md",target:"_blank",rel:"noopener noreferrer"},d=a("here"),g=n(`<h3 id="how-to-list-your-environment-variables" tabindex="-1"><a class="header-anchor" href="#how-to-list-your-environment-variables" aria-hidden="true">#</a> How to list your environment variables</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$env</span>
</code></pre></div><p>Output</p><div class="language-text ext-text"><pre class="language-text"><code>\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 ALLUSERSPROFILE                 \u2502 C:\\ProgramData
 CARGO_PKG_AUTHORS               \u2502 The Nu Project Contributors
 CARGO_PKG_DESCRIPTION           \u2502 A new type of shell
 CARGO_PKG_HOMEPAGE              \u2502 https://www.nushell.sh
 CARGO_PKG_LICENSE               \u2502 MIT
 CARGO_PKG_LICENSE_FILE          \u2502
 CARGO_PKG_NAME                  \u2502 nu
 CARGO_PKG_REPOSITORY            \u2502 https://github.com/nushell/nushell
 CARGO_PKG_VERSION               \u2502 0.59.0
 CARGO_PKG_VERSION_MAJOR         \u2502 0
</code></pre></div><p>or for a more detailed view, use our new <code>env</code> command.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">env</span>
</code></pre></div><p>Output</p><div class="language-text ext-text"><pre class="language-text"><code>\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 #  \u2502            name             \u2502            type             \u2502            value            \u2502             raw
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  0 \u2502 ALLUSERSPROFILE             \u2502 string                      \u2502 C:\\ProgramData              \u2502 C:\\ProgramData
  1 \u2502 APPDATA                     \u2502 string                      \u2502 C:\\Users\\someuser10\\AppData \u2502 C:\\Users\\someuser10\\AppData
    \u2502                             \u2502                             \u2502 \\Roaming                    \u2502 \\Roaming
  2 \u2502 CARGO                       \u2502 string                      \u2502 \\\\?\\C:\\Users\\someuser10\\.ru \u2502 \\\\?\\C:\\Users\\someuser10\\.ru
    \u2502                             \u2502                             \u2502 stup\\toolchains\\stable-x86_ \u2502 stup\\toolchains\\stable-x86_
    \u2502                             \u2502                             \u2502 64-pc-windows-msvc\\bin\\carg \u2502 64-pc-windows-msvc\\bin\\carg
    \u2502                             \u2502                             \u2502 o.exe                       \u2502 o.exe
  3 \u2502 CARGO_HOME                  \u2502 string                      \u2502 C:\\Users\\someuser10\\.cargo  \u2502 C:\\Users\\someuser10\\.cargo
  4 \u2502 CARGO_MANIFEST_DIR          \u2502 string                      \u2502 C:\\Users\\someuser10\\source\\ \u2502 C:\\Users\\someuser10\\source\\
    \u2502                             \u2502                             \u2502 repos\\forks\\nushell         \u2502 repos\\forks\\nushell
  5 \u2502 CARGO_PKG_AUTHORS           \u2502 string                      \u2502 The Nu Project Contributors \u2502 The Nu Project Contributors
  6 \u2502 CARGO_PKG_DESCRIPTION       \u2502 string                      \u2502 A new type of shell         \u2502 A new type of shell
  7 \u2502 CARGO_PKG_HOMEPAGE          \u2502 string                      \u2502 https://www.nushell.sh      \u2502 https://www.nushell.sh
  8 \u2502 CARGO_PKG_LICENSE           \u2502 string                      \u2502 MIT                         \u2502 MIT
  9 \u2502 CARGO_PKG_LICENSE_FILE      \u2502 string                      \u2502                             \u2502
 10 \u2502 CARGO_PKG_NAME              \u2502 string                      \u2502 nu                          \u2502 nu
 11 \u2502 CARGO_PKG_REPOSITORY        \u2502 string                      \u2502 https://github.com/nushell/ \u2502 https://github.com/nushell/
</code></pre></div><hr><h3 id="how-to-get-a-single-environment-variable-s-value" tabindex="-1"><a class="header-anchor" href="#how-to-get-a-single-environment-variable-s-value" aria-hidden="true">#</a> How to get a single environment variable&#39;s value</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$env</span>.APPDATA
</code></pre></div><p>or</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">env</span> <span class="token operator">|</span> where name <span class="token operator">==</span> APPDATA
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502  name   \u2502  type  \u2502                value                \u2502                 raw
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 APPDATA \u2502 string \u2502 C:\\Users\\someuser10\\AppData\\Roaming \u2502 C:\\Users\\someuser10\\AppData\\Roaming
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div>`,14);function m(v,_){const s=o("ExternalLinkIcon");return r(),i("div",null,[c,e("p",null,[u,e("a",h,[d,p(s)])]),g])}const b=t(l,[["render",m],["__file","setup.html.vue"]]);export{b as default};
