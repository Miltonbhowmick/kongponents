import{_ as F,E as p,c,J as a,w as s,k as n,F as y,G as d,a as l,S as e,o as i,t as u}from"./chunks/framework.4dbed076.js";const N=JSON.parse('{"title":"ToolTip","description":"","frontmatter":{},"headers":[],"relativePath":"components/tooltip.md","filePath":"components/tooltip.md","lastUpdated":1692292074000}'),b={name:"components/tooltip.md"},m=n("h1",{id:"tooltip",tabindex:"-1"},[l("ToolTip "),n("a",{class:"header-anchor",href:"#tooltip","aria-label":'Permalink to "ToolTip"'},"​")],-1),h=n("p",null,[n("strong",null,"KTooltip"),l(" is a tooltip component that is used when you need a simple label to be displayed when hovering over an element. KTooltip has a single slot that takes in the element that you want the tooltip to trigger over. At least the label prop must be passed in for the tooltip to display anything. For example a button:")],-1),_=e("",5),C=e("",2),g={class:"my-tooltip"},A=e("",4),T={class:"custom-tooltip"},f=e("",5),v=e("",5),K=n("span",null,[n("b",null,"yoyo"),l(),n("em",null,"kooltip")],-1),E=e("",4),x=e("",1);function q(w,S,B,k,P,V){const o=p("KButton"),t=p("KTooltip"),D=p("KCard");return i(),c("div",null,[m,h,a(t,{label:"Video Games"},{default:s(()=>[a(o,null,{default:s(()=>[l("🎮")]),_:1})]),_:1}),_,a(t,{label:"I am a new sample label"},{default:s(()=>[a(o,null,{default:s(()=>[l("Sample Button")]),_:1})]),_:1}),C,a(D,null,{body:s(()=>[n("div",g,[a(t,{label:"I won't pop up",class:"my-tooltip-label"},{default:s(()=>[a(o,{disabled:""},{default:s(()=>[l("❌")]),_:1})]),_:1}),a(t,{label:"I will pop up"},{default:s(()=>[n("span",null,[a(o,{disabled:""},{default:s(()=>[l("✅")]),_:1})])]),_:1})])]),_:1}),A,n("ul",null,[(i(),c(y,null,d(["auto","top","topStart","topEnd","left","leftStart","leftEnd","right","rightStart","rightEnd","bottom","bottomStart","bottomEnd"],r=>n("li",{key:r},[n("code",null,u(r),1)])),64))]),n("div",T,[a(t,{placement:"bottom",label:"A label that appears on the bottom"},{default:s(()=>[a(o,null,{default:s(()=>[l("bottom")]),_:1})]),_:1}),a(t,{placement:"top",label:"A label that appears on the top"},{default:s(()=>[a(o,null,{default:s(()=>[l("top")]),_:1})]),_:1}),a(t,{placement:"left",label:"A label that appears on the left"},{default:s(()=>[a(o,null,{default:s(()=>[l("left")]),_:1})]),_:1}),a(t,{placement:"right",label:"A label that appears on the right"},{default:s(()=>[a(o,null,{default:s(()=>[l("right")]),_:1})]),_:1})]),f,a(t,{placement:"bottom","max-width":"300",label:"A label that appears on the bottom. A label that appears on the bottom"},{default:s(()=>[a(o,null,{default:s(()=>[l("bottom")]),_:1})]),_:1}),v,a(t,{label:"Video Games"},{content:s(()=>[K]),default:s(()=>[a(o,null,{default:s(()=>[l(" ✌🏻")]),_:1})]),_:1}),E,a(t,{class:"tooltip-blue",label:"Video Games"},{default:s(()=>[a(o,null,{default:s(()=>[l("themed tooltip")]),_:1})]),_:1}),x])}const R=F(b,[["render",q]]);export{N as __pageData,R as default};
