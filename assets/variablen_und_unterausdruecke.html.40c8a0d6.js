import{_ as e,o as n,c as a,e as r}from"./app.b8dbd919.js";const d={},i=r(`<h1 id="variablen-und-unterausdrucke" tabindex="-1"><a class="header-anchor" href="#variablen-und-unterausdrucke" aria-hidden="true">#</a> Variablen und Unterausdr\xFCcke</h1><p>Es gibt zwei Arten von auszuwertenden Ausdr\xFCcken in Nushell: Variablen und Unterausdr\xFCcke. Diese werden durch das Dollar Symbol (<code>$</code>) eingeleitet. Das gibt den Hinweis, dass Nushell an dieser Stelle einen Ausdruck auswerten muss, um einen Wert zu erhalten, der f\xFCr die Ausf\xFChrung eines gesamten Befehls ben\xF6tigt wird. Beide Formen des Ausdrucks haben eine einfache Variante und eine &#39;Pfad&#39;-Variante, wenn mit komplexeren Daten gearbeitet wird.</p><h2 id="variablen" tabindex="-1"><a class="header-anchor" href="#variablen" aria-hidden="true">#</a> Variablen</h2><p>Die einfachere Variante der auszuwertenden Ausdr\xFCcke ist die Variable. W\xE4hrend der Auswertung, wird die Variable durch ihren Wert ersetzt.</p><p>Wenn eine Variable erzeugt wurde, kann der Inhalt dieser Variable ausgegeben werden, indem <code>$</code> vor dem Variablennamen verwendet wird:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; let my-value = 4
&gt; echo $my-value
4
</code></pre></div><h2 id="pfade-von-variablen" tabindex="-1"><a class="header-anchor" href="#pfade-von-variablen" aria-hidden="true">#</a> Pfade von Variablen</h2><p>Ein Pfad einer Variable funktioniert \xE4hnlich wie ein strukturierter Datentyp. Es kann mittels Referenzen auf den Inhalt der Variable beziehungsweise die Spalten in der Variable zugegriffen werden, um final bei einem bestimmten Wert zu landen. Wenn beispielsweise anstatt der <code>4</code> im obigen Beispiel, der Variablen eine Tabelle zugewiesen wurde:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; let my-value = [[name]; [testuser]]
</code></pre></div><p>Hier kann ein Pfad der Variable <code>$my-value</code> verwendet werden, um den Wert der Spalte <code>name</code> in nur einem Schritt zu bekommen:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo $my-value.name
testuser
</code></pre></div><h2 id="unterausdrucke" tabindex="-1"><a class="header-anchor" href="#unterausdrucke" aria-hidden="true">#</a> Unterausdr\xFCcke</h2><p>Unterausdr\xFCcke k\xF6nnen jederzeit ausgewertet und die Ergebnisse verwendet werden, indem der Ausdruck in Klammern <code>()</code> gepackt wird. Hinweis: In \xE4lteren Versionen von Nushell (\xE4lter als 0.32) wurde <code>$()</code> benutzt.</p><p>Die Klammern enthalten eine Pipeline, die bis zum Ende durchlaufen wird und deren Ergebnis dann verwendet wird. Hier einige Beispiele: <code>(ls)</code> w\xFCrde den <code>ls</code> Befehl ausf\xFChren und die entsprechende Tabelle zur\xFCckgeben und <code>(git branch --show-current)</code> f\xFChrt den externen Befehl <code>git</code> aus und gibt einen String mit dem Namen des aktuellen Branch zur\xFCck. Diese Klammern k\xF6nnen auch verwendet werden, um mathematische Ausdr\xFCcke, wie <code>(2 + 3)</code>, auszuwerten.</p><p>Unterausdr\xFCcke k\xF6nnen auch ganze Pipelines statt nur einzelner Befehle enthalten. Um eine Liste von Dateien mit einer Gr\xF6\xDFe gr\xF6\xDFer als 10 Kilobytes zu bekommen, kann die folgende Pipeline verwendet und einer Variable zugewiesen werden:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; let names-of-big-files = (ls | where size &gt; 10kb)
&gt; echo $names-of-big-files
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502    name    \u2502 type \u2502   size   \u2502   modified
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Cargo.lock \u2502 File \u2502 155.3 KB \u2502 17 hours ago
 1 \u2502 README.md  \u2502 File \u2502  15.9 KB \u2502 17 hours ago
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h2 id="unterausdrucke-und-pfade" tabindex="-1"><a class="header-anchor" href="#unterausdrucke-und-pfade" aria-hidden="true">#</a> Unterausdr\xFCcke und Pfade</h2><p>Unterausdr\xFCcke unterst\xFCtzen auch Pfade. Um beispielsweise eine Liste der Dateinamen im aktuellen Ordner zu bekommen, kann diese Pipeline verwendet werden:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | get name
</code></pre></div><p>Dasselbe Ergebnis kann auch in nur einem Schritt erreicht werden, indem ein Unterausdruck mit Pfad verwendet wird:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo (ls).name
</code></pre></div><p>Welcher Stil gew\xE4hlt wird, h\xE4ngt vom Anwendungsfall und den pers\xF6nlichen Vorlieben ab.</p><h2 id="short-hand-unterausdrucke" tabindex="-1"><a class="header-anchor" href="#short-hand-unterausdrucke" aria-hidden="true">#</a> Short-hand Unterausdr\xFCcke</h2><p>Nushell erlaubt den Zugriff auf Spalten in Tabellen in Unterausdr\xFCcken durch einfache Short-Hands. Wenn beispielsweise nur Zeilen in <code>ls</code> angezeigt werden sollen, in der die Gr\xF6\xDFe der Datei gr\xF6\xDFer als 10 Kilobytes ist, kann der folgende Befehl verwendet werden:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | where size &gt; 10kb
</code></pre></div><p><code>where size &gt; 10kb</code> ist ein Befehl mit zwei Teilen: Dem Befehlsnamen <code>where</code> und dem short-hand Ausdruck <code>size &gt; 10kb</code>. Hier wird auch klar, warum das Ganze short-hand hei\xDFt: <code>size</code> ist hier die gek\xFCrzte Version von <code>$it.size</code>. Das Ganze k\xF6nnte auch mit einer der folgenden ausf\xFChrlicheren Varianten erreicht werden:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | where $it.size &gt; 10kb
&gt; ls | where ($it.size &gt; 10kb)
&gt; ls | where {|$it| $it.size &gt; 10kb }
</code></pre></div><p>Damit diese short-hand Syntax funktioniert, muss der Name der Spalte auf der linken Seite der Operation sein (wie bei <code>size</code> in <code>size &gt; 10kb</code>).</p>`,28),t=[i];function s(u,l){return n(),a("div",null,t)}var o=e(d,[["render",s],["__file","variablen_und_unterausdruecke.html.vue"]]);export{o as default};
