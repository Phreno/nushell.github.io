import{_ as c,p as d,o as n,c as s,a as e,F as i,f as m,d as _,t as o}from"./app.b8dbd919.js";const u={computed:{commands(){return d.filter(t=>t.path.indexOf("/book/commands/")>=0).sort((t,r)=>t.title>r.title?1:r.title>t.title?-1:0)}}},f=e("h1",{id:"command-reference",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#command-reference","aria-hidden":"true"},"#"),_(" Command Reference")],-1),h=e("tr",null,[e("th",null,"Command"),e("th",null,"Description")],-1),p=["href"],x={style:{"white-space":"pre-wrap"}};function g(t,r,k,v,B,l){return n(),s("div",null,[f,e("table",null,[h,(n(!0),s(i,null,m(l.commands,a=>(n(),s("tr",null,[e("td",null,[e("a",{href:a.path},[e("code",null,o(a.title),1)],8,p)]),e("td",x,o(a.frontmatter.usage),1)]))),256))])])}var b=c(u,[["render",g],["__file","command_reference.html.vue"]]);export{b as default};
