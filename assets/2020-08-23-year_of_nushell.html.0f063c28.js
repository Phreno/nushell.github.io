import{_ as i,r as n,o as r,c as h,a as t,b as o,e as s,d as e}from"./app.68c16707.js";var l="/assets/year_1_kloc.d61553c8.png";const d={},u=s('<h1 id="one-year-of-nushell" tabindex="-1"><a class="header-anchor" href="#one-year-of-nushell" aria-hidden="true">#</a> One year of Nushell</h1><p>Hard to imagine that it&#39;s already been a year since Nu first went public. At the time, it was largely a demo of what could be possible, but still needed quite a bit of work to make it ready for everyday use. A year later and we&#39;ve learned a lot, and made a few mistakes along the way. In this post, we look back over the year and see how we did and where we might be going in the future.</p><h1 id="history" tabindex="-1"><a class="header-anchor" href="#history" aria-hidden="true">#</a> History</h1><p>When Nu first started, it started with a simple idea: the output of <code>ls</code>, <code>ps</code>, and <code>sysinfo</code> should all output the same thing. Taking a page from PowerShell, we explored outputting structured data and quickly settled on a table design that would support the output of each of the three commands, with the added ability of streaming the output as it became available.</p><p>Around this idea, we then built a set of &quot;filters&quot;, like the <code>where</code> clause, borrowed from SQL, and a growing set of data types we would support natively. Soon, we were able to write more complex statements like <code>ls | where size &gt; 10kb</code>. This became the crux of the idea - commands that output values from a core set of data types into a stream, composed together with the traditional UNIX pipe (<code>|</code>), so that you could build up a complex set of commands that work over the data as it streams through.</p><h1 id="nushell-today" tabindex="-1"><a class="header-anchor" href="#nushell-today" aria-hidden="true">#</a> Nushell today</h1><h2 id="contributors" tabindex="-1"><a class="header-anchor" href="#contributors" aria-hidden="true">#</a> Contributors</h2><p>Before we got started talking about Nushell today, we wanted to give a <em>big</em> &quot;thank you!&quot; to everyone who has contributed to Nu to get us to this point. Nu is what it is because of your help.</p><p>1ntEgr8, AaronC81, AdminXVII, aeosynth, aeshirey, aidanharris, almindor, Aloso, Amanita-muscaria, amousa11, andrasio, Andrew-Webb, arashout, arnaldo2792, avandesa, avranju, bailey-layzer, BatmanAoD, bndbsh, Bocom, boisgera, Borimino, BradyBromley, BurNiinTRee, Byron, candostdagdeviren, casidiablo, charlespierce, chhetripradeep, cjpearce, coolshaurya, cristicismas, DangerFunPants, daschl, daveremy, davidrobertmason, Delapouite, dependabot[bot], Detegr, devnought, Dimagog, djc, drmason13, DrSensor, elichai, eltonlaw, EmNudge, eoinkelly, equal-l2, est31, fdncred, filalex77, Flare576, gilesv, gorogoroumaru, GuillaumeGomez, hdhoang, he4d, hilias, HiranmayaGundu, hirschenberger, homburg, iamcodemaker, incrop, ineol, Jacobious52, jankoprowski, JCavallo, jdvr, jerodsanto, JesterOrNot, johnae, johnterickson, jonathandturner, JonnyWalker81, jonstodle, JosephTLyons, jzaefferer, k-brk, Kelli314, klnusbaum, kloun, kornelski, kubouch, kvrhdn, landaire, lesichkovm, LhKipp, lightclient, lincis, lord, luccasmmg, marcelocg, matsuu, mattclarke, mattyhall, max-sixty, mfarberbrodsky, mhmdanas, mike-morr, miller-time, mistydemeo, mlbright, mlh758, morrme, nalshihabi, naufraghi, nespera, neuronull, nickgerace, nmandery, notryanb, oknozor, orf, orientnab, oskarskog, oylenshpeegul, pag4k, Paradiesstaub, philip-peterson, piotrek-szczygiel, pizzafox, pka, pmeredit, pontaoski, Porges, pulpdrew, q-b, quebin31, rabisg0, ramonsnir, rimathia, ritobanrc, rnxpyke, romanlevin, routrohan, rrichardson, rtlechow, rutrum, ryuichi1208, Samboy218, samhedin, sandorex, sdfnz, sebastian-xyz, shaaraddalvi, shiena, siedentop, Sosthene-Guedon, Southclaws, svartalf, taiki-e, Tauheed-Elahee, tchak, thegedge, tim77, Tiwalun, twe4ked, twitu, u5surf, UltraWelfare, uma0317, utam0k, vsoch, vthriller, waldyrious, warrenseine, wycats, yaahc, yahsinhuangtw, yanganto, ymgyt, zombie110year</p><h1 id="what-is-nushell" tabindex="-1"><a class="header-anchor" href="#what-is-nushell" aria-hidden="true">#</a> What is Nushell?</h1><p>Nushell is an interactive programming language for working with your files, your system, and your data as a shell, a notebook, and more.</p><h2 id="nu-is-more-than-a-shell" tabindex="-1"><a class="header-anchor" href="#nu-is-more-than-a-shell" aria-hidden="true">#</a> Nu is more than a shell</h2><p>It&#39;s easy to think of Nushell as just a shell. It&#39;s even got &#39;shell&#39; in the name. It&#39;s the first and probably main way you&#39;ll interact with it. So why say it&#39;s &quot;more than a shell&quot;?</p><p>In truth, Nushell is actually two things at once: Nu and Nushell. Nu is an interactive language for processing streams of structured data, data that you&#39;re probably getting from files, your system, a web address, etc.</p><p>So what&#39;s Nushell?</p><p>Nushell is taking the Nu language and putting it into a shell, and building around it a set of shell features to make it feel comfortable to use as a login shell. Completions, pretty error messages, and the like.</p>',16),c=e(`When we say that "Nu is more than a shell", does that imply that Nu can be used in other places, too? Absolutely. We've got two more hosts that let you run Nu, a `),p={href:"https://github.com/nushell/nu_jupyter",target:"_blank",rel:"noopener noreferrer"},m=e("jupyter-based"),g=e(" host that lets you run Nu in jupyter notebooks, and a "),f={href:"https://github.com/nushell/demo",target:"_blank",rel:"noopener noreferrer"},w=e("WebAssembly-based"),y=e(" host that we use to create the "),b={href:"https://www.nushell.sh/demo/",target:"_blank",rel:"noopener noreferrer"},k=e("Nu playground"),v=s(`<p>The idea of Nu runs deeper than just the shell, to being a language that&#39;s relatively easy to learn, yet powerful enough to do real work with your system, to process large amounts of data, to interactively let you iterate quickly on an idea, to invite exploration by building up a pipeline one piece at a time. There&#39;s really no shortage of ambition for where we hope to go.</p><h1 id="the-design-of-nu" tabindex="-1"><a class="header-anchor" href="#the-design-of-nu" aria-hidden="true">#</a> The design of Nu</h1><p>Nu&#39;s original design has proven surprisingly robust thus far. Some of its core ideas are continuing to pay dividends a year later. Let&#39;s look at the designs that still feel right.</p><h2 id="pipelines-are-infinite" tabindex="-1"><a class="header-anchor" href="#pipelines-are-infinite" aria-hidden="true">#</a> Pipelines are infinite</h2><p>When we first started writing Nu, we took a few shortcuts that had us processing all the data in a pipeline at once. Very quickly, we realize this wasn&#39;t going to work. External commands (think <code>cat /dev/random</code>) can output an infinite stream of data, and the system needs to be able to handle it. Understanding this, we transitioned to a different model: data flows between command as infinite streams of structured data. As the data is processed, we avoid collecting the data whenever possible to allow this streaming to happen.</p><p>Because the streams can be infinite, even the printing out of tables is done a batch at a time.</p><h2 id="separating-viewing-data-from-the-data-itself" tabindex="-1"><a class="header-anchor" href="#separating-viewing-data-from-the-data-itself" aria-hidden="true">#</a> Separating viewing data from the data itself</h2><p>Coming from other shells, the idea of running <code>echo</code> or <code>ls</code> goes hand-in-hand with printing something to the terminal. It&#39;s difficult to see that there two steps going on behind the scenes: creating the information and then displaying it to the screen.</p><p>In Nu, these two steps are distinct. The <code>echo</code> command gets data ready to output into stream, but doesn&#39;t do any work to print it to the screen. Likewise, <code>ls</code> gets ready to output a stream of file and directory entries, but doesn&#39;t actually display this information.</p><p>That&#39;s because both <code>echo</code> and <code>ls</code> are lazy commands. They&#39;ll only do the work if the data is pulled from the stream. As a result, the step of viewing the data is separate from the step of creating it.</p><p>Behind the scenes, Nu converts a standalone <code>ls</code> to be the pipeline <code>ls | autoview</code>. The work of viewing comes from <code>autoview</code> and it handles working with the data and calling the proper viewer. In this way, we&#39;re able to keep things as structured data for as long as possible, and only convert it to be displayed as the final step before being shown to the user. (note: the wasm-based demo and jupyter do a similar step, but instead of adding <code>autoview</code>, they add <code>to html</code>)</p><h2 id="rich-data-types" tabindex="-1"><a class="header-anchor" href="#rich-data-types" aria-hidden="true">#</a> Rich data types</h2><p>In a similar way to working with structured data, rather than only plain text, Nu takes a different approach to data types as well. Nu takes the traditional set of basic types, like strings and numbers, and extends them into a richer set of basic data primitives.</p><p>Numbers are represented internally as big numbers and big decimals, rather than integers and floating point machine-based representations. This gives us more flexibility to do math more accurately, and generally removes the worry of whether the number you want to work with will fit in the integer or float size you have available.</p><p>We carry this further, by also representing values common in modern computer usage: URLs, file paths, file sizes, durations, and dates are all examples of built-in data types. By building them in, Nu can have better syntax and type checking with their use.</p><p>For example, in Nu it&#39;s possible to write <code>= 1min + 1sec</code> to create a duration that is one minute one second long. You can also use the file sizes, like being able to filter a directory list by the size of the file <code>ls | where size &gt; 10kb</code>.</p><p>Nu also can help if you try to mix types that shouldn&#39;t. For example, if you had written: <code>= 1min + 1kb</code> it seems you didn&#39;t mean to add time and file sizes together, and Nu gives you an error if you do:</p><div class="language-text ext-text"><pre class="language-text"><code>error: Coercion error
  \u250C\u2500 shell:1:3
  \u2502
1 \u2502 = 1min + 1kb
  \u2502   ^^^^   --- filesize(in bytes)
  \u2502   \u2502
  \u2502   duration
</code></pre></div><p><em>note: we&#39;ll be making this error better in the future</em></p><p>Data in Nu also isn&#39;t just the value, but it&#39;s also a set of metadata that comes with the value. For example, if you load data from a file using the <code>open</code> command, we track the place that it&#39;s loaded along with the data that&#39;s loaded. We can see this metadata using the <code>tags</code> command:</p><div class="language-text ext-text"><pre class="language-text"><code>open package.json | tags
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502      span       \u2502                                    anchor
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 [row end start] \u2502 /home/jonathan/Source/servo/tests/wpt/web-platform-tests/webrtc/tools/packag
   \u2502                 \u2502 e.json
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>This extra information allows us to know how to view the contents, and even save you time when you use the <code>save</code> command, as it will use the original location by default.</p><h2 id="keeping-it-fun" tabindex="-1"><a class="header-anchor" href="#keeping-it-fun" aria-hidden="true">#</a> Keeping it fun</h2><p>Something we attached to early on was the idea that Nu should be fun. It should be fun to work on, it should be fun to contribute to, and it should be fun to use.</p><p>Nu is really about play. You play with your data, you play with the structures that make up your files and filesystem, you play with what web services give back to you. Everything about Nu is made to invite you to explore how things work and how data is put together. As you play, you learn more about Nu works and how to better use it. We firmly believe that learning doesn&#39;t have to hurt. At its best, the pleasure of exploration over time yields expertise without punishing you along the way. Humans just get better at something when we love to pick it up day after day, experimenting as we go. With Nu, we can ask questions like &quot;what if I do this?&quot; because the system is built to let us ask the question and answer it ourselves.</p>`,25),x=e("Nu takes this one step further. The error reporting system comes from the design of "),_={href:"https://blog.rust-lang.org/2016/08/10/Shape-of-errors-to-come.html",target:"_blank",rel:"noopener noreferrer"},N=e("Rust's error messages"),q=e(", with clear messages to help guide you to success."),T=s(`<p>The goal for Nu is that it won&#39;t require you to be a wiz with the commandline or with complex programming practices. Instead, you start where you feel comfortable, and grow a line at a time. With Nu, as your comfort grows, single lines easily grow to multiple lines, and (eventually) to larger programs. You don&#39;t need separate styles of thinking when experimenting and another for building your application. In Nu, these are (or will be) one and the same.</p><h2 id="crossplatform" tabindex="-1"><a class="header-anchor" href="#crossplatform" aria-hidden="true">#</a> Crossplatform</h2><p>One of the first decisions we made in making Nu is that it should not only be cross-platform, but should feel as native as possible across platforms. Commands should work the same, regardless of the platform you&#39;re on, without any loss of functionality if you switch from one OS to another. This has meant saying &quot;no&quot; a few times when someone offered to a cool feature, only to find out it didn&#39;t work well on one of the supported systems. The benefit, though, is that Nu users can move between OSes comfortably.</p><p>Nu lets you use common shortcuts, too. In Windows, you can change drives using the common <code>D:</code> shorthand. You can use <code>cd ~</code> and <code>cd -</code> as easy shorthands to jump between home and previous directories, too.</p><h2 id="getting-it-right" tabindex="-1"><a class="header-anchor" href="#getting-it-right" aria-hidden="true">#</a> Getting <code>$it</code> right</h2><p>Early on, when we were first brainstorming how something like Nushell might work, we rediscovered the idea of iteration having its own special variable. The iteration variable, item variable, or simple the &quot;it&quot; variable, gave us a way to talk about the current row of data flowing through the pipeline. When we can talk about the current row, it was then easier to say how to handle the current row.</p><p>The simplest version is:</p><div class="language-text ext-text"><pre class="language-text"><code>ls | echo $it
</code></pre></div><p>To <code>echo $it</code> doesn&#39;t really do anything interesting, it just passes along the value it was handed. It&#39;s when we combine this with variable paths that things get a little more interesting:</p><div class="language-text ext-text"><pre class="language-text"><code>ls | echo $it.name
</code></pre></div><p>Now, in 4 words we&#39;ve asked Nu to list all the files in the current directory and output only the names. This pipeline, if there are 100s of thousands of files, will happily stream out its results as it finds new files. As in this case:</p><div class="language-text ext-text"><pre class="language-text"><code>ls **/* | echo $it.name
</code></pre></div><p>Once you have a mental model for using <code>$it</code>, it becomes common to grab it when working on data a row at a time.</p><p>A note for those wondering how this works under the hood: if an <code>$it</code> is found a part of an argument not otherwise inside of a block, it&#39;s &quot;it-expanded&quot;. We replace the command with a call to <code>each</code> and the block.</p><p>This turns:</p><div class="language-text ext-text"><pre class="language-text"><code>ls | echo $it.name
</code></pre></div><p>Into:</p><div class="language-text ext-text"><pre class="language-text"><code>ls | each { echo $it.name }
</code></pre></div><p>The <code>each</code> command handles walking along each row and calling the block each time, setting the variable <code>$it</code> to the current row value.</p><h2 id="everything-is-a-macro" tabindex="-1"><a class="header-anchor" href="#everything-is-a-macro" aria-hidden="true">#</a> Everything is a macro</h2><p>In Nu, a command has the form <code>&lt;cmd&gt; &lt;arg1&gt; &lt;arg2&gt;</code>. To the lisp-lovers among you, this should look very familiar. Slap on a pair of parens and you have yourself an s-expression.</p><p>You may be wondering - if you choose a cmd-arg-arg form, how do you write something like:</p><div class="language-text ext-text"><pre class="language-text"><code>where size &gt; 10kb
</code></pre></div><p>This is where Nu&#39;s parser steps up. The parser we use is a type-driven, recursive descent parser. If you look at the signature for the <code>where</code> command in the Rust code, you&#39;ll see it says:</p><div class="language-rust ext-rs"><pre class="language-rust"><code><span class="token class-name">Signature</span><span class="token punctuation">::</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token string">&quot;where&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">required</span><span class="token punctuation">(</span>
    <span class="token string">&quot;condition&quot;</span><span class="token punctuation">,</span>
    <span class="token class-name">SyntaxShape</span><span class="token punctuation">::</span><span class="token class-name">Math</span><span class="token punctuation">,</span>
    <span class="token string">&quot;the condition that must match&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre></div><p>That is, the <code>where</code> command takes a single parameter, a <code>condition</code>, which has a SyntaxShape of Math. This shape drives the parser to use different parser logic.</p><p>In math mode, we can now parse an expression using operator precedence. The <code>where</code> command tells the parser to treat all of the free parameters as a single expression, to parse that expression, and to pass it as the single argument. The canonical form is more precise, though a bit more cumbersome:</p><div class="language-text ext-text"><pre class="language-text"><code>where { = $it.size &gt; 10kb }
</code></pre></div><p>You can also see a few other steps thrown in, like the expansion of a short-hand path into the full variable path using <code>$it</code>.</p><h2 id="kebabs-and-question-marks" tabindex="-1"><a class="header-anchor" href="#kebabs-and-question-marks" aria-hidden="true">#</a> Kebabs and question marks</h2><p>Being able to use <code>-</code> in the names of commands, sometimes called &quot;kebab case&quot;, is a handy feature and one we enjoy. In Nu, you can use it whenever you need to pass an identifier. <code>kebab-case-rules</code>.</p><p>In addition to kebab case, you can use <code>?</code> as part of the identifier, allowing names in a Ruby-style. We use it in the command <code>empty?</code>.</p><h2 id="code-growth" tabindex="-1"><a class="header-anchor" href="#code-growth" aria-hidden="true">#</a> Code growth</h2><p>Nushell currently sits at just over 55k lines of code, built from almost 1300 merged pull requests.</p><p><img src="`+l+'" alt="image of a Nu growing from under 20000 lines of code to over 55000 lines of code"></p><p><em>Growth in code size with each version</em></p><h1 id="surprises" tabindex="-1"><a class="header-anchor" href="#surprises" aria-hidden="true">#</a> Surprises?</h1><p>It&#39;s funny, when you start working on a shell it&#39;s easy to think &quot;it&#39;ll be like a REPL&quot;. In fact, it&#39;s closer to creating an interactive IDE for the terminal. As people came to Nu from other shells, including shells like fish, there was a strong assumption that completions would be stellar, that it will integrate well with existing workflows, and it will support configuring the prompt, the keybindings, and more.</p><p>It also turns out that getting a shell correct is a lot more experimentation and a lot less following what the textbooks say. In practice, things like &#39;stdout&#39; and &#39;stderr&#39; are used in a variety of ways, as are the exit codes output by programs. Our initial designs started with a stricter view of these ideas, and softened over time as we saw that the real world is a much fuzzier place than we realized.</p><h1 id="quirks" tabindex="-1"><a class="header-anchor" href="#quirks" aria-hidden="true">#</a> Quirks</h1><p>Nu hasn&#39;t been without a few quirks. Like any awkward growth spurt, we&#39;ve had our awkward times and still have a few &quot;curious&quot; areas.</p><h2 id="no-variables-yet" tabindex="-1"><a class="header-anchor" href="#no-variables-yet" aria-hidden="true">#</a> No variables, yet</h2><p>Had you a time machine and told us a year ago that we still wouldn&#39;t have variables today, we probably wouldn&#39;t have believed you. Isn&#39;t that an important part of a language?</p><p>Yes, it&#39;s definitely important. But we&#39;re also surprised just how far you can get without them. When you think about how you work with a piece of data, maybe you break it apart, maybe you work over the lines, or maybe you search inside of it. Each of these has a built-in way to perform the task in Nu and none require user-defined variables.</p><p>That, of course, has its limits. At some point you want to take the result of one batch of commands and store it for later. We&#39;re thinking through how to do this, and it comes down to a few basic questions:</p><ul><li>Should variables work in a traditional way? That is, should we fully evaluate what we pass to the variable during assignment?</li><li>Or, should Nu instead &quot;hold&quot; the pipeline you use during the assignment, so that you can run it whenever you want the value of the variable (possibly caching the result if possible)? This is less traditional, but more in line with a language that works lazily on potentially endless streams of data.</li></ul><p>There are other questions we still need to answer as well, like how do variables and function definitions play together? How do variables shadow each other (or even if they&#39;re allowed)?</p><h2 id="to-view-or-not-to-view" tabindex="-1"><a class="header-anchor" href="#to-view-or-not-to-view" aria-hidden="true">#</a> To view or not to view</h2><p>Nushell, being a language focused on working on structured data, has a few quirks with how and when the data is viewed. For one, Nushell has multiple types of data, and different types of data may have different viewing needs. To help with this, we created <code>autoview</code>, a command that will look at the data and detect a variety of different cases. Once it&#39;s identified the shape of the data, it will call out to the viewing command that handles viewing that particular kind of data.</p><p>Autoview is applied to any of the data being output directly to the user, which is the case for the last step of a pipeline. For example, the pipeline <code>ls</code> is actually <code>ls | autoview</code> behind the scenes. The <code>ls</code> command outputs each row of data corresponding to the files in the directory, creating a table. These rows are passed to <code>autoview</code> which detects that we need to view a table, calls the <code>table</code> command, which then views the data. This generally feels natural, well, most of the time.</p><p>It makes sense that <code>ls | where size &gt; 10kb</code> doesn&#39;t output the data that flows between the two commands. If we did, it wouldn&#39;t be clear what the actual answer was. But what about in this situation: <code>ls; echo &quot;done&quot;</code>? Do we output the result of <code>ls</code> or not?</p><p>In the current version of Nu, we don&#39;t. We treat anything to the left of <code>;</code> as &quot;do this, finish it, but don&#39;t run &#39;autoview&#39;&quot;. This let&#39;s you do a series of different kinds of processing and only then view the end result.</p><p>This seems reasonable until you see something like <code>echo &quot;hello&quot;; echo &quot;world&quot;</code> and only see the output &quot;world&quot; and then have to stop and think through all the steps that led to that output.</p><h2 id="getting-turned-around" tabindex="-1"><a class="header-anchor" href="#getting-turned-around" aria-hidden="true">#</a> Getting turned around</h2><p>As it turns out, the terminal is small. Want to view a few columns? Generally not a problem. Want to open that random CSV file from work with 30 columns? Well, now we might have a problem. How does that 30 column file actually look when you print it out in the terminal, with a nicely drawn table?</p><p>For some cases, we found we could be helpful by rotating the table so that the columns go along the side instead of the top. This is especially handy when there&#39;s only one row of data as it reads more like a record.</p><p>That being said, it&#39;s not without its trade-offs. To some folks, rotating the table when they aren&#39;t expecting it can be very disorienting. We&#39;re still working to figure out the best defaults and heuristics.</p><h1 id="future-work" tabindex="-1"><a class="header-anchor" href="#future-work" aria-hidden="true">#</a> Future work</h1><h2 id="focus" tabindex="-1"><a class="header-anchor" href="#focus" aria-hidden="true">#</a> Focus</h2><p>Nushell is in the stage of the project where we&#39;re still experimenting with what the language should be, how it works in practice, and finding out what its most important core values are. Rust, the language Nushell is written in, went through a similar stage. As it found its most important values, it tried on others. Once people started to create real projects in Rust, and show what was possible with this core part of the language, the design began to gel and then solidify as it arrived at 1.0. As part of that, early ideas were modified or discarded altogether.</p><p>Nushell will go through a similar stage. As it grows, it will find its sweet spot, its niche that it naturally fills. The design will come from features built to solve real problems, and we&#39;ll polish these features, improving their utility, error messages, documentation, and overall flow. The end result will be a sharper, more focused Nushell that feels like the tool you want in your toolbox. Some early adopters are already giving us feedback that Nushell is well on its way of meeting this role, and we&#39;re excited to continue to explore and refine as we go.</p><h2 id="exploring-the-data-model" tabindex="-1"><a class="header-anchor" href="#exploring-the-data-model" aria-hidden="true">#</a> Exploring the data model</h2><p>There are some really juicy open questions that we&#39;ll work on in the coming year. We already have a fairly rich set of data primitives, like strings, dates, file sizes, durations, and more. Figuring out what makes sense to be built-in vs what should be added from outside of the core Nu data model will take a bit of time and finesse as we get more experience working with Nu in the real world.</p><h2 id="shifting-to-being-a-full-language" tabindex="-1"><a class="header-anchor" href="#shifting-to-being-a-full-language" aria-hidden="true">#</a> Shifting to being a full language</h2><p>Looking at Nu today, you can see some common parts of languages like <code>if</code> or <code>open</code>, but it doesn&#39;t yet feel like there&#39;s enough syntax to build up full programs. You can&#39;t define your own commands, your own variables, and you can&#39;t build out a project across multiple files. We&#39;re working to address all of these limitations so that Nu can function not only for one-liners, but also for much more.</p><h2 id="getting-completions-really-good" tabindex="-1"><a class="header-anchor" href="#getting-completions-really-good" aria-hidden="true">#</a> Getting completions <em>really</em> good</h2><p>A regular point of feedback is that people want completions where possible. We&#39;ve got some ideas here that will allow us to have completions in far more places, including external commands (think <code>git checkout &lt;TAB&gt;</code>). We&#39;re laying the groundwork for this now, and looking forward to rolling out more functionality as we go.</p><h1 id="conclusion" tabindex="-1"><a class="header-anchor" href="#conclusion" aria-hidden="true">#</a> Conclusion</h1><p>We had far more support and made far more progress than we could have ever predicted a year ago. Today&#39;s Nu is something many people use as their daily driver, and it gets stronger with each release. We&#39;re excited to bring Nu to a broader audience as we continue to improve usability, grow its feature set, and refine its internals.</p>',69),I=e("If you'd like to try out Nu, you can download it from the "),j={href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"},z=e("github releases page"),W=e(", from "),S={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},A=e("crates.io"),B=e(", or from the many "),E={href:"https://repology.org/project/nushell/versions",target:"_blank",rel:"noopener noreferrer"},C=e("other distributions"),$=e("."),F=e("If you'd like to help us create Nu, please do! You can find us on the "),L={href:"https://github.com/nushell/nushell",target:"_blank",rel:"noopener noreferrer"},D=e("Nushell github"),G=e(" and on our "),O={href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"},Y=e("discord server"),R=e(". If you use Twitter, "),H={href:"https://twitter.com/nu_shell",target:"_blank",rel:"noopener noreferrer"},V=e("come say hi"),P=e(", we'd love to chat.");function J(K,U){const a=n("ExternalLinkIcon");return r(),h("div",null,[u,t("p",null,[c,t("a",p,[m,o(a)]),g,t("a",f,[w,o(a)]),y,t("a",b,[k,o(a)])]),v,t("p",null,[x,t("a",_,[N,o(a)]),q]),T,t("p",null,[I,t("a",j,[z,o(a)]),W,t("a",S,[A,o(a)]),B,t("a",E,[C,o(a)]),$]),t("p",null,[F,t("a",L,[D,o(a)]),G,t("a",O,[Y,o(a)]),R,t("a",H,[V,o(a)]),P])])}var Q=i(d,[["render",J],["__file","2020-08-23-year_of_nushell.html.vue"]]);export{Q as default};
