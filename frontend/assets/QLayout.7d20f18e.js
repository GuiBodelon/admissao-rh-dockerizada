import{s as P,r as m,c as d,o as O,t as W,h as g,g as k,u as R,v as K,i as U,x as N,y as V,z as _,w as F,A as I,B as X,C as G,D as L,a as J,E as Y}from"./index.0d0f87fb.js";import{b as Z,g as ee,a as te,c as oe,d as E}from"./scroll.b97062e5.js";import{Q as B}from"./QResizeObserver.906dbc28.js";const H=XMLHttpRequest,D=H.prototype.open,ie=["top","right","bottom","left"];let q=[],w=0;function ne({p:e,pos:l,active:n,horiz:t,reverse:a,dir:r}){let i=1,s=1;return t===!0?(a===!0&&(i=-1),l==="bottom"&&(s=-1),{transform:`translate3d(${i*(e-100)}%,${n?0:s*-200}%,0)`}):(a===!0&&(s=-1),l==="right"&&(i=-1),{transform:`translate3d(${n?0:r*i*-200}%,${s*(e-100)}%,0)`})}function ae(e,l){return typeof l!="number"&&(e<25?l=Math.random()*3+3:e<65?l=Math.random()*3:e<85?l=Math.random()*2:e<99?l=.6:l=0),Z(e+l,0,100)}function le(e){w++,q.push(e),!(w>1)&&(H.prototype.open=function(l,n){const t=[],a=()=>{q.forEach(i=>{(i.hijackFilter.value===null||i.hijackFilter.value(n)===!0)&&(i.start(),t.push(i.stop))})},r=()=>{t.forEach(i=>{i()})};this.addEventListener("loadstart",a,{once:!0}),this.addEventListener("loadend",r,{once:!0}),D.apply(this,arguments)})}function re(e){q=q.filter(l=>l.start!==e),w=Math.max(0,w-1),w===0&&(H.prototype.open=D)}var ve=P({name:"QAjaxBar",props:{position:{type:String,default:"top",validator:e=>ie.includes(e)},size:{type:String,default:"2px"},color:String,skipHijack:Boolean,reverse:Boolean,hijackFilter:Function},emits:["start","stop"],setup(e,{emit:l}){const{proxy:n}=k(),t=m(0),a=m(!1),r=m(!0);let i=0,s,h;const c=d(()=>`q-loading-bar q-loading-bar--${e.position}`+(e.color!==void 0?` bg-${e.color}`:"")+(r.value===!0?"":" no-transition")),p=d(()=>e.position==="top"||e.position==="bottom"),b=d(()=>p.value===!0?"height":"width"),y=d(()=>{const u=a.value,o=ne({p:t.value,pos:e.position,active:u,horiz:p.value,reverse:n.$q.lang.rtl===!0&&["top","bottom"].includes(e.position)?e.reverse===!1:e.reverse,dir:n.$q.lang.rtl===!0?-1:1});return o[b.value]=e.size,o.opacity=u?1:0,o}),v=d(()=>a.value===!0?{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":t.value}:{"aria-hidden":"true"});function S(u=300){const o=h;return h=Math.max(0,u)||0,i++,i>1?(o===0&&u>0?$():o>0&&u<=0&&clearTimeout(s),i):(clearTimeout(s),l("start"),t.value=0,s=setTimeout(()=>{r.value=!0,u>0&&$()},a.value===!0?500:1),a.value!==!0&&(a.value=!0,r.value=!1),i)}function j(u){return i>0&&(t.value=ae(t.value,u)),i}function C(){if(i=Math.max(0,i-1),i>0)return i;clearTimeout(s),l("stop");const u=()=>{r.value=!0,t.value=100,s=setTimeout(()=>{a.value=!1},1e3)};return t.value===0?s=setTimeout(u,1):u(),i}function $(){t.value<100&&(s=setTimeout(()=>{j(),$()},h))}let x;return O(()=>{e.skipHijack!==!0&&(x=!0,le({start:S,stop:C,hijackFilter:d(()=>e.hijackFilter||null)}))}),W(()=>{clearTimeout(s),x===!0&&re(S)}),Object.assign(n,{start:S,stop:C,increment:j}),()=>g("div",{class:c.value,style:y.value,...v.value})}}),he=P({name:"QPageContainer",setup(e,{slots:l}){const{proxy:{$q:n}}=k(),t=U(V,R);if(t===R)return console.error("QPageContainer needs to be child of QLayout"),R;N(_,!0);const a=d(()=>{const r={};return t.header.space===!0&&(r.paddingTop=`${t.header.size}px`),t.right.space===!0&&(r[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(r.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(r[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),r});return()=>g("div",{class:"q-page-container",style:a.value},K(l.default))}});const{passive:A}=X,se=["both","horizontal","vertical"];var ce=P({name:"QScrollObserver",props:{axis:{type:String,validator:e=>se.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:l}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,a,r;F(()=>e.scrollTarget,()=>{h(),s()});function i(){t!==null&&t();const b=Math.max(0,te(a)),y=oe(a),v={top:b-n.position.top,left:y-n.position.left};if(e.axis==="vertical"&&v.top===0||e.axis==="horizontal"&&v.left===0)return;const S=Math.abs(v.top)>=Math.abs(v.left)?v.top<0?"up":"down":v.left<0?"left":"right";n.position={top:b,left:y},n.directionChanged=n.direction!==S,n.delta=v,n.directionChanged===!0&&(n.direction=S,n.inflectionPoint=n.position),l("scroll",{...n})}function s(){a=ee(r,e.scrollTarget),a.addEventListener("scroll",c,A),c(!0)}function h(){a!==void 0&&(a.removeEventListener("scroll",c,A),a=void 0)}function c(b){if(b===!0||e.debounce===0||e.debounce==="0")i();else if(t===null){const[y,v]=e.debounce?[setTimeout(i,e.debounce),clearTimeout]:[requestAnimationFrame(i),cancelAnimationFrame];t=()=>{v(y),t=null}}}const{proxy:p}=k();return F(()=>p.$q.lang.rtl,i),O(()=>{r=p.$el.parentNode,s()}),W(()=>{t!==null&&t(),h()}),Object.assign(p,{trigger:c,getPosition:()=>n}),I}}),ge=P({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:l,emit:n}){const{proxy:{$q:t}}=k(),a=m(null),r=m(t.screen.height),i=m(e.container===!0?0:t.screen.width),s=m({position:0,direction:"down",inflectionPoint:0}),h=m(0),c=m(G.value===!0?0:E()),p=d(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=d(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),y=d(()=>c.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),v=d(()=>c.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function S(o){if(e.container===!0||document.qScrollPrevented!==!0){const f={position:o.position.top,direction:o.direction,directionChanged:o.directionChanged,inflectionPoint:o.inflectionPoint.top,delta:o.delta.top};s.value=f,e.onScroll!==void 0&&n("scroll",f)}}function j(o){const{height:f,width:z}=o;let T=!1;r.value!==f&&(T=!0,r.value=f,e.onScrollHeight!==void 0&&n("scrollHeight",f),$()),i.value!==z&&(T=!0,i.value=z),T===!0&&e.onResize!==void 0&&n("resize",o)}function C({height:o}){h.value!==o&&(h.value=o,$())}function $(){if(e.container===!0){const o=r.value>h.value?E():0;c.value!==o&&(c.value=o)}}let x;const u={instances:{},view:d(()=>e.view),isContainer:d(()=>e.container),rootRef:a,height:r,containerHeight:h,scrollbarWidth:c,totalWidth:d(()=>i.value+c.value),rows:d(()=>{const o=e.view.toLowerCase().split(" ");return{top:o[0].split(""),middle:o[1].split(""),bottom:o[2].split("")}}),header:L({size:0,offset:0,space:!1}),right:L({size:300,offset:0,space:!1}),footer:L({size:0,offset:0,space:!1}),left:L({size:300,offset:0,space:!1}),scroll:s,animate(){x!==void 0?clearTimeout(x):document.body.classList.add("q-body--layout-animate"),x=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),x=void 0},155)},update(o,f,z){u[o][f]=z}};if(N(V,u),E()>0){let z=function(){o=null,f.classList.remove("hide-scrollbar")},T=function(){if(o===null){if(f.scrollHeight>t.screen.height)return;f.classList.add("hide-scrollbar")}else clearTimeout(o);o=setTimeout(z,300)},Q=function(M){o!==null&&M==="remove"&&(clearTimeout(o),z()),window[`${M}EventListener`]("resize",T)},o=null;const f=document.body;F(()=>e.container!==!0?"add":"remove",Q),e.container!==!0&&Q("add"),J(()=>{Q("remove")})}return()=>{const o=Y(l.default,[g(ce,{onScroll:S}),g(B,{onResize:j})]),f=g("div",{class:p.value,style:b.value,ref:e.container===!0?void 0:a,tabindex:-1},o);return e.container===!0?g("div",{class:"q-layout-container overflow-hidden",ref:a},[g(B,{onResize:C}),g("div",{class:"absolute-full",style:y.value},[g("div",{class:"scroll",style:v.value},[f])])]):f}}});export{ge as Q,ve as a,he as b};
