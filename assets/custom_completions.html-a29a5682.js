import{_ as i,M as s,p as m,q as r,Q as t,t as e,N as o,U as c,a1 as n}from"./framework-344bb0e4.js";const d={},u=t("h1",{id:"custom-completions",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#custom-completions","aria-hidden":"true"},"#"),e(" Custom completions")],-1),p=t("code",null,"extern",-1),h=n(`<p>There are two parts to a custom command: the command that handles a completion and attaching this command to the type of another command using <code>@</code>.</p><h2 id="example-custom-completion" tabindex="-1"><a class="header-anchor" href="#example-custom-completion" aria-hidden="true">#</a> Example custom completion</h2><p>Let&#39;s look at an example:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; def animals [] { [&quot;cat&quot;, &quot;dog&quot;, &quot;eel&quot; ] }
&gt; def my-command [animal: string@animals] { print $animal }
&gt;| my-command
cat                 dog                 eel
</code></pre></div><p>In the first line, we create a custom command that will return a list of three different animals. These are the values we&#39;d like to use in the completion. Once we&#39;ve created this command, we can now use it to provide completions for other custom commands and <code>extern</code>s.</p><p>In the second line, we use <code>string@animals</code>. This tells Nushell two things: the shape of the argument for type-checking and the custom completion to use if the user wants to complete values at that position.</p><p>On the third line, we type the name of our custom command <code>my-command</code> followed by hitting space and then the <code>&lt;tab&gt;</code> key. This brings up our completions. Custom completions work the same as other completions in the system, allowing you to type <code>e</code> followed by the <code>&lt;tab&gt;</code> key and get &quot;eel&quot; automatically completed.</p><h2 id="modules-and-custom-completions" tabindex="-1"><a class="header-anchor" href="#modules-and-custom-completions" aria-hidden="true">#</a> Modules and custom completions</h2><p>You may prefer to keep your custom completions away from the public API for your code. For this, you can combine modules and custom completions.</p><p>Let&#39;s take the example above and put it into a module:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>module commands {
    def animals [] {
        [&quot;cat&quot;, &quot;dog&quot;, &quot;eel&quot; ]
    }

    export def my-command [animal: string@animals] {
        print $animal
    }
}
</code></pre></div><p>In our module, we&#39;ve chosen to export only the custom command <code>my-command</code> but not the custom completion <code>animals</code>. This allows users of this module to call the command, and even use the custom completion logic, without having access the the custom completion. This keeps the API cleaner, while still offering all the same benefits.</p><p>This is possible because custom completion tags using <code>@</code> are locked-in as the command is first parsed.</p><h2 id="custom-completion-and-extern" tabindex="-1"><a class="header-anchor" href="#custom-completion-and-extern" aria-hidden="true">#</a> Custom completion and <code>extern</code></h2>`,14),f=t("code",null,"extern",-1),g=t("code",null,"@",-1),x=t("code",null,"extern",-1),_=n(`<p>If you look closely at the examples in the default config, you&#39;ll see this:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export extern &quot;git push&quot; [
    remote?: string@&quot;nu-complete git remotes&quot;, # the name of the remote
    refspec?: string@&quot;nu-complete git branches&quot;# the branch / refspec
    ...
]
</code></pre></div><p>Custom completions will serve the same role in this example as in the previous examples. The examples above call into two different custom completions, based on the position the user is currently in.</p><h2 id="custom-descriptions" tabindex="-1"><a class="header-anchor" href="#custom-descriptions" aria-hidden="true">#</a> Custom descriptions</h2><p>As an alternative to returning a list of strings, a completion function can also return a list of records with a <code>value</code> and <code>description</code> field.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>def my_commits [] {
    [
        { value: &quot;5c2464&quot;, description: &quot;Add .gitignore&quot; },
        { value: &quot;f3a377&quot;, description: &quot;Initial commit&quot; }
    ]
}
</code></pre></div><h2 id="external-completions" tabindex="-1"><a class="header-anchor" href="#external-completions" aria-hidden="true">#</a> External completions</h2>`,7),b=t("code",null,"external_completer",-1),w=t("code",null,"config.nu",-1),q={href:"https://github.com/rsteube/carapace-bin",target:"_blank",rel:"noopener noreferrer"},y=n(`<p>This example should enable carapace external completions:</p><div class="language-nu" data-ext="nu"><pre class="language-nu"><code># config.nu
let carapace_completer = {|spans|
    carapace $spans.0 nushell $spans | from json
}

# The default config record. This is where much of your global configuration is setup.
let-env config = {
    # ... your config
    completions: {
        external: {
            enable: true
            max_results: 100
            completer: $carapace_completer
        }
    }
}
</code></pre></div><p>Multiple completers can be defined as such:</p><div class="language-nu" data-ext="nu"><pre class="language-nu"><code>let external_completer = {|spans| 
  {
    $spans.0: { default_completer $spans | from json } # default
    ls: { ls_completer $spans | from json }
    git: { git_completer $spans | from json }
  } | get $spans.0 | each {|it| do $it}
}
</code></pre></div><p>This example shows an external completer that uses the <code>fish</code> shell&#39;s <code>complete</code> command. (You must have the fish shell installed for this example to work.)</p><div class="language-nu" data-ext="nu"><pre class="language-nu"><code>let fish_completer = {|spans|
    fish --command $&#39;complete &quot;--do-complete=($spans | str join &quot; &quot;)&quot;&#39; | str trim | split row &quot;\\n&quot; | each { |line| $line | split column &quot;\\t&quot; value description } | flatten
}

let-env config = {
    # ... your config
    completions: {
        external: {
            enable: true
            max_results: 100
            completer: $fish_completer
        }
    }
}
</code></pre></div><blockquote><p>When the block returns unparsable json (e.g. an empty string) it defaults to file completion.</p></blockquote>`,7);function v(k,T){const a=s("RouterLink"),l=s("ExternalLinkIcon");return m(),r("div",null,[u,t("p",null,[e("Custom completions allow you to mix together two features of Nushell: custom commands and completions. With them, you're able to create commands that handle the completions for positional parameters and flag parameters. These custom completions work both custom commands and "),o(a,{to:"/book/externs.html"},{default:c(()=>[e("known external, or "),p,e(", commands")]),_:1}),e(".")]),h,t("p",null,[e("A powerful combination is adding custom completions to "),o(a,{to:"/book/externs.html"},{default:c(()=>[e("known "),f,e(" commands")]),_:1}),e(". These work the same way as adding a custom completion to a custom command: by creating the custom completion and then attaching it with a "),g,e(" to the type of one of the positional or flag arguments of the "),x,e(".")]),_,t("p",null,[e("External completers can also be integrated, instead of relying solely on Nushell ones. For this set the "),b,e(" field in "),w,e(" to a block which will be evaluated if no Nushell completions were found. You can configure the block to run an external completer, such as "),t("a",q,[e("carapace"),o(l)]),e(".")]),y])}const I=i(d,[["render",v],["__file","custom_completions.html.vue"]]);export{I as default};