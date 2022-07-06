import{_ as a,r as c,o as i,c as m,a as e,b as n,w as s,d as t,e as l}from"./app.ea1b8c3e.js";const d={},h=e("h1",{id:"custom-completions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#custom-completions","aria-hidden":"true"},"#"),t(" Custom completions")],-1),r=t("Custom completions allow you to mix together two features of Nushell: custom commands and completions. With them, you're able to create commands that handle the completions for positional parameters and flag parameters. These custom completions work both custom commands and "),u=t("known external, or "),p=e("code",null,"extern",-1),_=t(", commands"),f=t("."),g=l(`<p>There are two parts to a custom command: the command that handles a completion and attaching this command to the type of another command using <code>@</code>.</p><h2 id="example-custom-completion" tabindex="-1"><a class="header-anchor" href="#example-custom-completion" aria-hidden="true">#</a> Example custom completion</h2><p>Let&#39;s look at an example:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; def animals [] { [&quot;cat&quot;, &quot;dog&quot;, &quot;eel&quot; ] }
&gt; def my-command [animal: string@animals] { print $animal }
&gt;| my-command
cat                 dog                 eel
</code></pre></div><p>In the first line, we create a custom command that will return a list of three different animals. These are the values we&#39;d like to use in the completion. Once we&#39;ve created this command, we can now use it to provide completions for other custom commands and <code>extern</code>s.</p><p>In the second line, we use <code>string@animals</code>. This tells Nushell two things: the shape of the argument for type-checking and the custom completion to use if the user wants to complete values at that position.</p><p>On the third line, we type the name of our custom command <code>my-command</code> followed by hitting space and then the <code>&lt;tab&gt;</code> key. This brings up our completions. Custom completions work the same as other completions in the system, allowing you to type <code>e</code> followed by the <code>&lt;tab&gt;</code> key and get &quot;eel&quot; automatically completed.</p><h2 id="modules-and-custom-completions" tabindex="-1"><a class="header-anchor" href="#modules-and-custom-completions" aria-hidden="true">#</a> Modules and custom completions</h2><p>You may prefer to keep your custom completions away from the public API for your code. For this, you can combine modules and custom completions.</p><p>Let&#39;s take the example above and put it into a module:</p><div class="language-text ext-text"><pre class="language-text"><code>module commands {
    def animals [] {
        [&quot;cat&quot;, &quot;dog&quot;, &quot;eel&quot; ]
    }

    export def my-command [animal: string@animals] {
        print $animal
    }
}
</code></pre></div><p>In our module, we&#39;ve chosen to export only the custom command <code>my-command</code> but not the custom completion <code>animals</code>. This allows users of this module to call the command, and even use the custom completion logic, without having access the the custom completion. This keeps the API cleaner, while still offering all the same benefits.</p><p>This is possible because custom completion tags using <code>@</code> are locked-in as the command is first parsed.</p><h2 id="custom-completion-and-extern" tabindex="-1"><a class="header-anchor" href="#custom-completion-and-extern" aria-hidden="true">#</a> Custom completion and <code>extern</code></h2>`,14),x=t("A powerful combination is adding custom completions to "),w=t("known "),y=e("code",null,"extern",-1),b=t(" commands"),k=t(". These work the same way as adding a custom completion to a custom command: by creating the custom completion and then attaching it with a "),v=e("code",null,"@",-1),q=t(" to the type of one of the positional or flag arguments of the "),T=e("code",null,"extern",-1),C=t("."),I=e("p",null,"If you look closely at the examples in the default config, you'll see this:",-1),N=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`export extern "git push" [
    remote?: string@"nu-complete git remotes", # the name of the remote
    refspec?: string@"nu-complete git branches"# the branch / refspec
    ...
]
`)])],-1),L=e("p",null,"Custom completions will serve the same role in this example as in the previous examples. The examples above call into two different custom completions, based on the position the user is currently in.",-1);function V(A,B){const o=c("RouterLink");return i(),m("div",null,[h,e("p",null,[r,n(o,{to:"/book/externs.html"},{default:s(()=>[u,p,_]),_:1}),f]),g,e("p",null,[x,n(o,{to:"/book/externs.html"},{default:s(()=>[w,y,b]),_:1}),k,v,q,T,C]),I,N,L])}var O=a(d,[["render",V],["__file","custom_completions.html.vue"]]);export{O as default};
