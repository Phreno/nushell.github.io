import{_ as r,M as l,p as o,q as u,Q as e,t as n,N as t,U as s,a1 as a}from"./framework-344bb0e4.js";const h={},c=a(`<h1 id="pipelines" tabindex="-1"><a class="header-anchor" href="#pipelines" aria-hidden="true">#</a> Pipelines</h1><p>Eine der grundlegenden Funktionen in Nu ist die Pipeline. Ein Konzept, welches seine Wurzeln tief in der Unix Philosophie hat. So wie Nu die Arbeit mit Texten als dem Basis Datentyp in Unix erweitert, erweitert sie auch die Idee der Pipeline, um mehr als nur Text zu verarbeiten.</p><h2 id="grundlagen" tabindex="-1"><a class="header-anchor" href="#grundlagen" aria-hidden="true">#</a> Grundlagen</h2><p>Eine Pipeline besteht aus drei Teilen: Dem Input, dem Filter und dem Output.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open &quot;Cargo.toml&quot; | inc package.version --minor | save &quot;Cargo_new.toml&quot;
</code></pre></div>`,5),p=e("code",null,'open "Cargo.toml"',-1),m=e("code",null,"ls",-1),_=e("code",null,"inc package.version --minor",-1),f=e("code",null,"inc",-1),g=a(`<p>Der letzte Befehl, <code>save &quot;Cargo_new.toml&quot;</code>, ist ein Output (manchmal auch &quot;sink&quot; genannt). Ein Output nimmt die Daten aus der Pipeline entgegen und führt eine abschliessende Operation daran aus. Im Beispiel wird der Inhalt der Pipeline als letzten Schritt in eine Datei gespeichert. Andere Arten von Output geben die Daten aus der Pipeline zum Beispiel auf der Kommandozeile aus.</p><p>Die <code>$in</code> Variable sammelt die Daten in der Pipeline in einen Wert, um den ganzen Strom als Parameter verwenden zu können:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>&gt; echo 1 2 3 | $in.1 * $in.2
6
</code></pre></div><h2 id="mehrzeilen-pipelines" tabindex="-1"><a class="header-anchor" href="#mehrzeilen-pipelines" aria-hidden="true">#</a> Mehrzeilen Pipelines</h2><p>Wenn eine Pipeline etwas lange wird für eine Zeile, kann sie mit <code>(</code> und <code>)</code> zu Unterausdrücken unterteilt werden:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>(
    &quot;01/22/2021&quot; |
    parse &quot;{month}/{day}/{year}&quot; |
    get year
)
</code></pre></div>`,6),b={href:"https://www.nushell.sh/book/variables_and_subexpressions.html#subexpressions",target:"_blank",rel:"noopener noreferrer"},x=e("h2",{id:"mit-externen-befehlen-arbeiten",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mit-externen-befehlen-arbeiten","aria-hidden":"true"},"#"),n(" Mit externen Befehlen arbeiten")],-1),w=e("p",null,[e("code",null,"interner_befehl| externer_befehl")],-1),v=e("p",null,[n("Die Daten fliessen vom internen zum externen Befehl und werden dawischen zu Texten konvertiert, so dass der externe Befehl diese von "),e("code",null,"stdin"),n(" lesen kann.")],-1),z=e("p",null,[e("code",null,"externer_befehl | interner_befehl")],-1),B=e("p",null,"Daten die von einem externen Befehl in Nu ankommen, werden als Bytes verarbeitet, die Nushell automatisch in UTF-8 konvertieren versucht. Wenn dies gelingt, wird ein Textstrom an den internen Befehl gesendet. Wenn nicht, wird ein Strom von binären Daten weitergeleitet.",-1),k=e("code",null,"lines",-1),D=e("p",null,[e("code",null,"externer_befehl_1 | externer_befehl_2")],-1),P=e("p",null,[n("Wird zwischen zwei externen Befehlen eine Pipeline aufgebaut, so verhaltet sich Nushell gleich wie es z.B. Bash tun würde. Der "),e("code",null,"stdout"),n(" des externen_befehl_1 wiird mit dem "),e("code",null,"stdin"),n(" des externen_befehl_2 verbunden. Dies lässt die Daten natürlich zwischen den Befehlen fliessen.")],-1),N=e("h2",{id:"hinter-den-kulissen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hinter-den-kulissen","aria-hidden":"true"},"#"),n(" Hinter den Kulissen")],-1),q=e("code",null,"ls",-1),O=e("code",null,"table",-1),T=e("code",null,"table",-1),y=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> ls
`)])],-1),I=e("p",null,"und die Pipeline,",-1),W=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | table
`)])],-1),E=e("p",null,"ein und dasselbe.",-1);function S(V,C){const i=l("RouterLink"),d=l("ExternalLinkIcon");return o(),u("div",null,[c,e("p",null,[n("Der erste Befehl, "),p,n(', ist der Input (manchmal auch als "source" oder "producer" bezeichnet). Dieser kreiert oder ladet Daten und speist sie in die Pipeline ein. Von hier aus hat Nu etwas zum damit arbeiten. Befehle wie '),t(i,{to:"/commands/docs/ls.html"},{default:s(()=>[m]),_:1}),n(" sind ebenfalls Inputs, da sie Daten aus dem Dateisystem ziehen und in die Pipeline einspeisen.")]),e("p",null,[n("Der zweite Befehl, "),_,n(", ist ein Filter. Filter verarbeiten die Daten auf eine bestimmte Weise. Vielleicht ändern sie Teile (wie der "),t(i,{to:"/commands/docs/inc.html"},{default:s(()=>[f]),_:1}),n(" im Beispiel), oder sie führen eine andere Operation aus wie Loggen.")]),g,e("p",null,[n("Siehe auch "),e("a",b,[n("Subexpressions"),t(d)])]),x,e("p",null,[n("Nu Befehle kommunizieren miteinander über die Nu Datentypen (see "),t(i,{to:"/de/book/types_of_data.html"},{default:s(()=>[n("types of data")]),_:1}),n("), was aber ist mit Befehlen ausserhalb Nu? Hier einige Beispiele im Umgang mit externen Befehlen:")]),w,v,z,B,e("p",null,[n("Befehle wie "),t(i,{to:"/commands/docs/lines.html"},{default:s(()=>[k]),_:1}),n(" helfen dabei, mit externen Daten zu arbeiten, da er diskrete Zeilen der Daten zurückgibt.")]),D,P,N,e("p",null,[n("Warum gibt dann der "),t(i,{to:"/commands/docs/ls.html"},{default:s(()=>[q]),_:1}),n(" Befehl eine Tabelle zurück, wenn er doch ein Input ist und kein Output? Nu fügt diesen Output automatisch hinzu, indem sie den Befehl "),t(i,{to:"/commands/docs/table.html"},{default:s(()=>[O]),_:1}),n(" verwendet. Der "),t(i,{to:"/commands/docs/table.html"},{default:s(()=>[T]),_:1}),n(" Befehl wird an jede Pipeline angefügt, die keinen eigenen Output besitzen. Dies erlaubt es den Output in dieser Form zu sehen. Tatsächlich ist der Befehl:")]),y,I,W,E])}const U=r(h,[["render",S],["__file","pipeline.html.vue"]]);export{U as default};