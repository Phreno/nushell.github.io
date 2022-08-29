import{_ as r,r as d,o as l,c,a as e,b as t,w as s,d as n,e as o}from"./app.a6df64b1.js";const u={},h=e("h1",{id:"environment",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#environment","aria-hidden":"true"},"#"),n(" Environment")],-1),g=e("p",null,"Eine h\xE4ufige Aufgabe in einer Shell ist die Kontrolle der Umgebung, in der die externen Programme laufen. Dies wird meist automatisch geschehen, da die Umgebung dem externen programm mitgegeben wird, wenn es gestartet wird. Manchmal jedoch will man eine genauere Kontrolle dar\xFCber, welche Umgebungsvariablen ein Programm sehen kann.",-1),_=n("Die aktuellen Umbegungsvariablen werden mit dem "),m=e("code",null,"env",-1),v=n(" Befehl ausgegeben:"),b=o(`<div class="language-text ext-text"><pre class="language-text"><code>   #           name                 type                value                 raw
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  16   DISPLAY              string               :0                   :0
  17   EDITOR               string               nvim                 nvim
  28   LANG                 string               en_US.UTF-8          en_US.UTF-8
  35   PATH                 list&lt;unknown&gt;        [list 16 items]      /path1:/path2:/...
  36   PROMPT_COMMAND       block                &lt;Block 197&gt;
</code></pre></div><p>In der Nushell k\xF6nnen Umgebungsvariablen jeden Wert jeden Typs annehmen (siehe die<code>type</code> Spalte) Der aktuelle Wert der Umgebungsvariable, den Nushell verwendet, findet sich unter <code>value</code>. Die <code>$env</code> Variable kann direkt abgefragt werden, z.B. mit <code>$env.PATH | length</code>. Die letzte Spalte <code>raw</code> beinhaltet den Wert, den ein externes Programm erh\xE4lt (siehe <a href="#environment-variable-conversions">Environment variable conversions</a>)</p>`,2),f=n("Die Umgebung wird erstellt durch Nus "),p=n("Konfigurations-Datei"),x=n(" und von der Umgebung, in der Nu gestartet wurde."),w=e("h2",{id:"setzen-von-umgebungsvariablen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#setzen-von-umgebungsvariablen","aria-hidden":"true"},"#"),n(" Setzen von Umgebungsvariablen")],-1),O=e("p",null,"Es gibt mehrere M\xF6glichkeiten eine Umgebungsvariable zu setzen:",-1),k={id:"let-env",tabindex:"-1"},z=e("a",{class:"header-anchor",href:"#let-env","aria-hidden":"true"},"#",-1),B=n(),N=e("code",null,"let-env",-1),S=o(`<p>Der <code>let-env</code> Befehl ist der direkteste Weg:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; let-env FOO = &#39;BAR&#39;
</code></pre></div><p><code>let-env</code> ist \xE4hnlich wie der <strong>export</strong> Befehl in der bash.</p><p>Um zum Beispiel die <code>PATH</code> Variable zu erg\xE4nzen, wird folgendes eingegeben:</p><div class="language-text ext-text"><pre class="language-text"><code>let-env PATH = ($env.PATH | prepend &#39;/pfad/der/hinzu/kommt&#39;)
</code></pre></div><p>Mit <code>prepend</code> wird der Ordner an den Anfang von PATH gestellt und hat damit die h\xF6chste Priorit\xE4t. Soll der Pfad ans Ende angeh\xE4ngt werden, so wird <code>append</code> verwendet.</p>`,6),U={id:"load-env",tabindex:"-1"},A=e("a",{class:"header-anchor",href:"#load-env","aria-hidden":"true"},"#",-1),E=n(),F=e("code",null,"load-env",-1),V=e("p",null,[n("Wenn mehrere Umgebungsvariablen gesetzt werden sollen, so kann "),e("code",null,"load-env"),n(" eine ganze Tabelle mitgegeben werden. Diese besteht aus name/value Paaren, welche alle auf einmal geladen werden:")],-1),D=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> load-env { "BOB": "FOO", "JAY": "BAR" }
`)])],-1),R=e("h3",{id:"einmalig-verwendete-umgebungsvariablen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#einmalig-verwendete-umgebungsvariablen","aria-hidden":"true"},"#"),n(" Einmalig verwendete Umgebungsvariablen")],-1),P=n("Dies sind Variablen, welche nur innerhalb eines Blocks g\xFCltig sind. Siehe "),W=n("Einmalig verwendete Umgebungsvariablen"),I=n(" f\xFCr Details."),T={id:"aufruf-eines-befehls-mit-def-env",tabindex:"-1"},$=e("a",{class:"header-anchor",href:"#aufruf-eines-befehls-mit-def-env","aria-hidden":"true"},"#",-1),M=n(" Aufruf eines Befehls mit "),C=e("code",null,"def-env",-1),K=n("Siehe "),L=n("Definiere Umgebung aus eigenen Befehlen"),H=n(" f\xFCr Details."),G=e("h3",{id:"exports-von-modulen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#exports-von-modulen","aria-hidden":"true"},"#"),n(" Exports von Modulen")],-1),q=n("Siehe "),j=n("Module"),Z=n(" f\xFCr Details."),y=o(`<h2 id="gultigkeitsbereiche" tabindex="-1"><a class="header-anchor" href="#gultigkeitsbereiche" aria-hidden="true">#</a> G\xFCltigkeitsbereiche</h2><p>Wenn eine Umgebungsvariable gesetzt wird, ist sie nur in ihrem G\xFCltigkeitsbereich vorhanden (Im aktuellen Block und dessen Unterblocks)</p><p>Hier ein kleines Beispiel um den G\xFCltigkeitsbereich zu demonstrieren:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; let-env FOO = &quot;BAR&quot;
&gt; do {
    let-env FOO = &quot;BAZ&quot;
    $env.FOO == &quot;BAZ&quot;
}
true
&gt; $env.FOO == &quot;BAR&quot;
true
</code></pre></div><h2 id="verzeichnis-wechsel" tabindex="-1"><a class="header-anchor" href="#verzeichnis-wechsel" aria-hidden="true">#</a> Verzeichnis Wechsel</h2>`,5),Y=n("Etwas was in einer Shell h\xE4ufig vorkommt ist das wechseln des Verzeichnisses mit dem "),J=e("code",null,"cd",-1),Q=n(" Befehl. In der Nushell ist dies identisch mit dem setzen der "),X=e("code",null,"PWD",-1),ee=n(" Umgebungsvariablen. Dies wiederum folgt den gleichen Regeln wie das setzen anderer Umgebungsvariablen (wie z.B. G\xFCltigkeitsbereich)"),ne=e("h2",{id:"einmalig-verwendete-umgebungsvariablen-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#einmalig-verwendete-umgebungsvariablen-1","aria-hidden":"true"},"#"),n(" Einmalig verwendete Umgebungsvariablen")],-1),te=e("p",null,"Eine praktische M\xF6glichkeit eine Umgebungsvariable einmalig zu setzen, ist inspiriert von Bash und anderen Shells:",-1),ie=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> FOO=BAR echo $env.FOO
BAR
`)])],-1),se=n("Es kann auch "),oe=e("code",null,"with-env",-1),de=n(" verwendet werden um expliziter zu sein:"),ae=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> with-env { FOO: BAR } { echo $env.FOO }
BAR
`)])],-1),re=n("Der "),le=e("code",null,"with-env",-1),ce=n(' Befehl setzt die Umgebungsvariable tempor\xE4r (hier wird die Variable "FOO" auf den Wert "BAR" gesetzt)'),ue=e("h2",{id:"permanente-umgebungsvariablen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#permanente-umgebungsvariablen","aria-hidden":"true"},"#"),n(" Permanente Umgebungsvariablen")],-1),he=n("Umgebungsvariablen k\xF6nnen beim Start von Nushell gesetzt werden. Daf\xFCr werden sie in der "),ge=n("Nu Konfigurations Datei"),_e=n(" gesetzt und sind dann f\xFCr die gesamte Laufzeit von Nushell verf\xFCgbar. Zum Beispiel:"),me=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`# In config.nu
let-env FOO = 'BAR'
`)])],-1),ve=e("h2",{id:"definition-einer-umgebungsvariablen-fur-selbst-definierten-befehl",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#definition-einer-umgebungsvariablen-fur-selbst-definierten-befehl","aria-hidden":"true"},"#"),n(" Definition einer Umgebungsvariablen f\xFCr selbst definierten Befehl")],-1),be=n("Aufgrund der G\xFCltigkeitsregeln ist eine Umgebungsvariable, welche innerhalb eines selbstdefinierten Befehls gesetzt ist, auch nur in dessen Block g\xFCltig. Wird sie jedoch mit "),fe=e("code",null,"dev-env",-1),pe=n(" anstatt "),xe=e("code",null,"def",-1),we=n(" gesetzt, so wird sie beim verlassen des Blocks erhalten bleiben. (Gilt auch f\xFCr "),Oe=e("code",null,"export def",-1),ke=n(", siehe "),ze=n("Modules"),Be=n(")"),Ne=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> def-env foo [] {
    let-env FOO = 'BAR'
}

> foo

> $env.FOO
BAR
`)])],-1),Se=e("h2",{id:"umgebungsvariablen-konvertieren",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#umgebungsvariablen-konvertieren","aria-hidden":"true"},"#"),n(" Umgebungsvariablen konvertieren")],-1),Ue=n("Mit "),Ae=e("code",null,"ENV_CONVERSIONS",-1),Ee=n(" kann eine Umgebungsvariable von einem string zu einem Wert konvertiert werden. Zum Beispiel beinhaltet die "),Fe={href:"https://github.com/nushell/nushell/blob/main/crates/nu-utils/src/sample_config/default_env.nu",target:"_blank",rel:"noopener noreferrer"},Ve=n("default environment config"),De=n(" bereits eine Konvertierung der PATH Umgebungsvariablen (sowie der Path Variablen in Windows) von einem String in eine List."),Re=o(`<p>Nachdem beide <code>env.nu</code> und <code>config.nu</code> geladen wurden, wird jede existierende Umgebungsvariable, die mit <code>ENV_CONVERSIONS</code> definiert ist, gem\xE4ss ihrem <code>from_string</code> Feld in den Wert des entsprechenden Typs konvertiert. Externe Programme ben\xF6tigen Strings als Umgebungsvariable. Deshalb muss jede nicht-string Variable zuerst konvertiert werden. Die Konvertierung von Wert -&gt; String erfolgt mit <code>to_string</code> innerhalb <code>ENV_CONVERSIONS</code> und wirdbei jedem externen Befehl ausgef\xFChrt.</p><p>Zur Illustration hier ein Beispiel. Diese Zeilen geh\xF6ren in config.nu:</p><div class="language-text ext-text"><pre class="language-text"><code>let-env ENV_CONVERSIONS = {
    # ... you might have Path and PATH already there, add:
    FOO : {
        from_string: { |s| $s | split row &#39;-&#39; }
        to_string: { |v| $v | str collect &#39;-&#39; }
    }
}
</code></pre></div><p>In einer Nushell Instanz gilt nun:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; with-env { FOO : &#39;a-b-c&#39; } { nu }  # runs Nushell with FOO env. var. set to &#39;a-b-c&#39;

&gt; $env.FOO
  0   a
  1   b
  2   c
</code></pre></div><p>Wie zu sehen ist <code>$env.FOO</code> nun eine Liste in einer neuen Nushell Instanz mit der neuen config. Die Konvertierung kann auch manuell getestet werden mit:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; do $env.ENV_CONVERSIONS.FOO.from_string &#39;a-b-c&#39;
</code></pre></div><p>Um die Konvertierun list -&gt; string zu testen:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; nu -c &#39;$env.FOO&#39;
a-b-c
</code></pre></div><p>Weil <code>nu</code> selber ein externer Befehl ist, \xFCbersetzt Nushell die <code>[ a b c ]</code> Liste gem\xE4ss <code>ENV_CONVERSIONS.FOO.to_string</code> und \xFCbergibt sie dem <code>nu</code> Prozess. Werden Befehle mit <code>nu -c</code> ausgef\xFChrt, so wird das config File nicht geladen. In diesem Fall wird die Konvertierung nicht durchgef\xFChrt und <code>FOO</code> als Text angezeigt. So k\xF6nnen wir \xFCberpr\xFCfen, ob die Konvertierung erfolgreich war.</p><p>Dieser Schritt kann auch manuell ausgel\xF6st werden mit <code>do $env.ENV_CONVERSIONS.FOO.to_string [a b c]</code></p>`,11),Pe=n("Zur\xFCckschauend auf den "),We=e("code",null,"env",-1),Ie=o(" Befehl, die <code>raw</code> Spalte zeigt die Werte, die mit <code>ENV_CONVERSIONS.&lt;name&gt;.to_string</code> \xFCbersetzt wurden. Die <code>value</code> Spalte zeigt die Werte, die Nushell benutzt (Das Resultat von <code>ENV_CONVERSIONS.&lt;name&gt;.from_string</code> wie bei <code>FOO</code>) Wenn der Wert kein String ist und keine <code>to_string</code> Konvertierung angewendet wird, wird er nicht an einen externen Befehl weitergeleitet (siehe die <code>raw</code> Spalte von <code>PROMPT_COMMAND</code>) Eine Ausnahme ist die <code>PATH</code> Variable (<code>Path</code> in Windows): Standardm\xE4ssig wird diese von einem String in eine Liste konvertiert beim Start und von einer Liste in einen String, wenn externe Befehle gestartet werden.",21),Te=e("p",null,[e("em",null,[n("(Wichtig! Die Umgebungs-Konvertierung string -> value findet statt "),e("strong",null,"nachdem"),n(" env.nu und config.nu ausgewertet wurden. Alle Umgebungsvariablen in env.nu und config.nu sind immer noch Strings solange sie nicht manuell auf andere Werte gesetzt wurden.)")])],-1),$e=e("h2",{id:"entfernen-von-umgebungsvariablen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#entfernen-von-umgebungsvariablen","aria-hidden":"true"},"#"),n(" Entfernen von Umgebungsvariablen")],-1),Me=n("Umgebungsvariablen k\xF6nnen im aktuellen G\xFCltigkeitsbereich entfernt werden via "),Ce=e("code",null,"hide",-1),Ke=n(":"),Le=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> let-env FOO = 'BAR'
...
> hide FOO
`)])],-1),He=e("p",null,"Dieses Verstecken im G\xFCltigkeitsbereich erlaubt es gleichzeitig tempor\xE4r eine Variabel zu entfernen ohne dass man die h\xF6her gelegene Umgebung modifiziert wird:",-1),Ge=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> let-env FOO = 'BAR'
> do {
    hide FOO
    # $env.FOO does not exist
  }
> $env.FOO
BAR
`)])],-1),qe=n("Mehr Informationen \xFCber Verstecken findet sich im Kapitel "),je=n("Modules");function Ze(ye,Ye){const i=d("RouterLink"),a=d("ExternalLinkIcon");return l(),c("div",null,[h,g,e("p",null,[_,t(i,{to:"/book/commands/env.html"},{default:s(()=>[m]),_:1}),v]),b,e("p",null,[f,t(i,{to:"/de/book/configuration.html"},{default:s(()=>[p]),_:1}),x]),w,O,e("h3",k,[z,B,t(i,{to:"/book/commands/let-env.html"},{default:s(()=>[N]),_:1})]),S,e("h3",U,[A,E,t(i,{to:"/book/commands/load-env.html"},{default:s(()=>[F]),_:1})]),V,D,R,e("p",null,[P,t(i,{to:"/de/book/environment.html#single-use-environment-variables"},{default:s(()=>[W]),_:1}),I]),e("h3",T,[$,M,t(i,{to:"/book/commands/def-env.html"},{default:s(()=>[C]),_:1})]),e("p",null,[K,t(i,{to:"/de/book/environment.html#defining-environment-from-custom-commands"},{default:s(()=>[L]),_:1}),H]),G,e("p",null,[q,t(i,{to:"/de/book/modules.html"},{default:s(()=>[j]),_:1}),Z]),y,e("p",null,[Y,t(i,{to:"/book/commands/cd.html"},{default:s(()=>[J]),_:1}),Q,X,ee]),ne,te,ie,e("p",null,[se,t(i,{to:"/book/commands/with-env.html"},{default:s(()=>[oe]),_:1}),de]),ae,e("p",null,[re,t(i,{to:"/book/commands/with-env.html"},{default:s(()=>[le]),_:1}),ce]),ue,e("p",null,[he,t(i,{to:"/de/book/configuration.html"},{default:s(()=>[ge]),_:1}),_e]),me,ve,e("p",null,[be,t(i,{to:"/book/commands/def-env.html"},{default:s(()=>[fe]),_:1}),pe,t(i,{to:"/book/commands/def.html"},{default:s(()=>[xe]),_:1}),we,Oe,ke,t(i,{to:"/de/book/modules.html"},{default:s(()=>[ze]),_:1}),Be]),Ne,Se,e("p",null,[Ue,Ae,Ee,e("a",Fe,[Ve,t(a)]),De]),Re,e("p",null,[Pe,t(i,{to:"/book/commands/env.html"},{default:s(()=>[We]),_:1}),Ie]),Te,$e,e("p",null,[Me,t(i,{to:"/book/commands/hide.html"},{default:s(()=>[Ce]),_:1}),Ke]),Le,He,Ge,e("p",null,[qe,t(i,{to:"/de/book/modules.html"},{default:s(()=>[je]),_:1})])])}const Qe=r(u,[["render",Ze],["__file","environment.html.vue"]]);export{Qe as default};
