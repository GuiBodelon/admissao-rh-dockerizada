import{c as a,h as i}from"./index.2bf94b66.js";let n=[],u=[];function o(e){u=u.filter(t=>t!==e)}function l(e){o(e),u.push(e)}function m(e){o(e),u.length===0&&n.length>0&&(n[n.length-1](),n=[])}function F(e){u.length===0?e():n.push(e)}function f(e){n=n.filter(t=>t!==e)}const d={name:String};function h(e){return a(()=>({type:"hidden",name:e.name,value:e.modelValue}))}function g(e={}){return(t,s,r)=>{t[s](i("input",{class:"hidden"+(r||""),...e.value}))}}function p(e){return a(()=>e.name||e.for)}export{F as a,p as b,g as c,m as d,l as e,h as f,f as r,d as u};
