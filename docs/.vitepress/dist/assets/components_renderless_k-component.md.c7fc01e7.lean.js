import{_ as d,E as e,c as r,J as a,w as l,k as s,a as o,S as y,o as D,t as F,a2 as u,a3 as C,e as m}from"./chunks/framework.4dbed076.js";const J=JSON.parse('{"title":"KComponent","description":"","frontmatter":{},"headers":[],"relativePath":"components/renderless/k-component.md","filePath":"components/renderless/k-component.md","lastUpdated":1692292074000}'),h={name:"components/renderless/k-component.md"},A=s("h1",{id:"kcomponent",tabindex:"-1"},[o("KComponent "),s("a",{class:"header-anchor",href:"#kcomponent","aria-label":'Permalink to "KComponent"'},"​")],-1),b=s("p",null,"Handy state abstraction for presentation components.",-1),_=s("p",null,"e.g.",-1),g=s("ul",null,[s("li",null,"counter"),s("li",null,"selected value")],-1),q=y("",13),E=s("label",{for:"apes"},"What's your favorite great ape?",-1),f=["onUpdate:modelValue"],v=s("option",{disabled:"",value:""},"Please select one",-1),k=s("option",null,"gorillas",-1),K=s("option",null,"orangutans",-1),x=s("option",null,"chimpanzees",-1),P=s("option",null,"humans",-1),S=[v,k,K,x,P],T={key:0},V=y("",1);function B(N,w,z,R,$,U){const t=e("KButton"),c=e("KComponent",!0),i=e("KCard");return D(),r("div",null,[A,b,_,g,a(c,{data:{count:0}},{default:l(({data:n})=>[s("div",null,[a(t,{size:"small",appearance:"outline",isRounded:!1,onClick:p=>n.count=n.count-1},{default:l(()=>[o("-")]),_:2},1032,["onClick"]),o(" "+F(n.count)+" ",1),a(t,{size:"small",appearance:"outline",isRounded:!1,onClick:p=>n.count=n.count+1},{default:l(()=>[o("+")]),_:2},1032,["onClick"])])]),_:1}),q,a(i,{style:{"min-height":"100px"}},{body:l(()=>[a(c,{data:{selected:""}},{default:l(({data:n})=>[s("div",null,[E,u(s("select",{id:"apes","onUpdate:modelValue":p=>n.selected=p,onchange:"s => data.selected = s"},S,8,f),[[C,n.selected]]),n.selected?(D(),r("i",T,F(n.selected)+" are neat!",1)):m("",!0)])]),_:1})]),_:1}),V])}const O=d(h,[["render",B]]);export{J as __pageData,O as default};
