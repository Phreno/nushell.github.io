import{_ as s,r,o as d,c as t,a as e,b as n,d as o,e as i}from"./app.a6df64b1.js";const c={},m=e("h1",{id:"comandos",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#comandos","aria-hidden":"true"},"#"),o(" Comandos")],-1),u=e("p",null,[o("Comandos s\xE3o os blocos de constru\xE7\xE3o para pipelines em Nu. Eles fazem a a\xE7\xE3o do pipeline, seja criando dados, mudando dados que fluem de entradas para sa\xEDdas, ou visualizar dados assim que estes saem do pipeline. Existem dois tipos de comandos: comandos internos, que s\xE3o comandos feitos para executar dentro do Nu, e comandos externos, que s\xE3o externos ao Nu e se comunicam com o padr\xE3o Unix "),e("code",null,"stdin"),o("/"),e("code",null,"stdout"),o(".")],-1),p=e("h2",{id:"comandos-internos",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#comandos-internos","aria-hidden":"true"},"#"),o(" Comandos internos")],-1),l=o("Todos os comandos dentro do Nu, incluindo plugins, s\xE3o comandos internos. Comandos internos se comunicam usando streams dos tipos "),h={href:"https://github.com/nushell/nushell/blob/d30c40b40ebfbb411a503ad7c7bceae8029c6689/crates/nu-source/src/meta.rs#L91",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"Tagged<Value>",-1),_=o(" e "),b={href:"https://github.com/nushell/nushell/blob/main/crates/nu-errors/src/lib.rs#L179",target:"_blank",rel:"noopener noreferrer"},f=o("ShellError"),g=i('<h3 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h3><p>Comandos usam uma checagem de tipo simples para garantir que os argumentos passados possam ser lidados corretamente. Para permitir isso, cada comando oferece uma Signature que informa o Nu:</p><ul><li>O nome do comando</li><li>Os argumentos posicionauis (eg, em <code>start x y</code> o <code>x</code> e o <code>y</code>s\xE3o argumentos posicionais)</li><li>Se o comando recebe um n\xFAmero irrestrito de argumentos posicionais adicionais (eg, <code>start a1 a2 a3 ... a99 a100</code>)</li><li>Os argumentos nomeados (eg, <code>start --now</code>)</li><li>Se o comando \xE9 um filtro ou a sa\xEDda</li></ul><p>Com essa informa\xE7\xE3o, um pipeline pode verificar problemas potenciais antes de ser executado.</p><h2 id="comandos-externos" tabindex="-1"><a class="header-anchor" href="#comandos-externos" aria-hidden="true">#</a> Comandos externos</h2><p>Um comando externo \xE9 qualquer comando que n\xE3o \xE9 parte dos comandos imbutidos no Nu ou em seus plugins. Se um comando desconhecido pelo Nu \xE9 chamado, o sistema subjacente vai ser chamado com os argumentos fornecidos em uma tentativa de invocar esse comando como um programa externo.</p><h2 id="comunicacao-entre-comandos-externos-e-internos" tabindex="-1"><a class="header-anchor" href="#comunicacao-entre-comandos-externos-e-internos" aria-hidden="true">#</a> Comunica\xE7\xE3o entre comandos externos e internos</h2><h3 id="interno-para-interno" tabindex="-1"><a class="header-anchor" href="#interno-para-interno" aria-hidden="true">#</a> Interno para interno</h3><p>Comandos internos se comunicam usando o valor completo da stream que o Nu fornece, que inclu\xED todos os tipos de arquivos embutidos. Isso inclu\xED a comunica\xE7\xE3o entre comandos internos e plugins (em ambas as dire\xE7\xF5es).</p><h3 id="interno-para-externo" tabindex="-1"><a class="header-anchor" href="#interno-para-externo" aria-hidden="true">#</a> Interno para externo</h3><p>Comandos internos que enviam texto para comandos externos precisam ter texto (strings) preparados antes do tempo. Se um objeto \xE9 enviado diretamente para um comando externo, isso \xE9 considerado um erro j\xE1 que n\xE3o \xE9 poss\xEDvel inferir de que maneira os dados estruturados devem ser representados para o comando externo. \xC9 esperado que o usu\xE1rio. O usu\xE1rio deve limitar-se a uma c\xE9lula de dados simples ou usar um dos conversores de tipo de arquivo (como <code>to-json</code>) para converter a tabela em uma representa\xE7\xE3o de string. O comando externo \xE9 aberto para que seu <code>stdin</code> seja redirecionado, para que os dados possam ser enviados a ele.</p><h3 id="externo-para-interno" tabindex="-1"><a class="header-anchor" href="#externo-para-interno" aria-hidden="true">#</a> Externo para interno</h3><p>Comandos internos enviam uma s\xE9rie de strings pelo seu <code>stdout</code>. Essas strings s\xE3o lidas no pipeline e s\xE3o disponibilizadas para o comando interno seguinte no pipeline, ou expostas para o usu\xE1rio se o comando externo for o \xFAltimo passo do pipeline.</p><h3 id="externo-para-externo" tabindex="-1"><a class="header-anchor" href="#externo-para-externo" aria-hidden="true">#</a> Externo para externo</h3><p>Comandos externos se comunicam atrav\xE9s do <code>stdin</code>/<code>stdout</code>. Quando o Nu detectar essa situa\xE7\xE3o, vai redirecionar o <code>stdout</code> do primeiro comando para o <code>stdin</code> do comando externo seguinte. Dessa forma, o comportamento esperado do pipeline do shell entre comandos externos \xE9 mantido.</p>',15);function v(q,C){const a=r("ExternalLinkIcon");return d(),t("div",null,[m,u,p,e("p",null,[l,e("a",h,[x,n(a)]),_,e("a",b,[f,n(a)])]),g])}const E=s(c,[["render",v],["__file","comandos.html.vue"]]);export{E as default};
