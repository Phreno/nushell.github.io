import{_ as c,p as d,o as a,c as s,a as e,F as i,g as _,d as m,t as o}from"./app.a6df64b1.js";const u={computed:{commands(){return d.filter(t=>t.path.indexOf("/book/commands/")>=0).sort((t,r)=>t.title>r.title?1:r.title>t.title?-1:0)}}},h=e("h1",{id:"command-reference",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#command-reference","aria-hidden":"true"},"#"),m(" Command Reference")],-1),f=e("tr",null,[e("th",null,"\u30B3\u30DE\u30F3\u30C9"),e("th",null,"\u8AAC\u660E ")],-1),p=["href"],x={style:{"white-space":"pre-wrap"}};function g(t,r,k,B,$,l){return a(),s("div",null,[h,e("table",null,[f,(a(!0),s(i,null,_(l.commands,n=>(a(),s("tr",null,[e("td",null,[e("a",{href:n.path},[e("code",null,o(n.title),1)],8,p)]),e("td",x,o(n.frontmatter.usage),1)]))),256))])])}const v=c(u,[["render",g],["__file","command_reference.html.vue"]]);export{v as default};
