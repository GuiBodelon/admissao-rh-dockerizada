import{s as oe,r as E,c as o,w as F,t as N,at as Q,au as W,h as k,p as le,g as X,v as Y,$ as L,av as re,E as se,aw as ue,ax as y}from"./index.0d0f87fb.js";import{u as ie,d as ce,e as de,v as K,f as fe,g as ve,h as me,i as ge,j as he,k as be,l as pe,m as ye,n as ke,r as U,s as Te,o as G,p as J,q as Se}from"./QItemLabel.737b5c28.js";import{g as xe}from"./scroll.b97062e5.js";import{a as Ce,u as we}from"./use-dark.e4883e2c.js";import{u as Oe,c as Pe}from"./use-form.768dfc74.js";var je=oe({name:"QTooltip",inheritAttrs:!1,props:{...ie,...ce,...de,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:K},self:{type:String,default:"top middle",validator:K},offset:{type:Array,default:()=>[14,14],validator:fe},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...ve],setup(t,{slots:T,emit:e,attrs:m}){let c,l;const r=X(),{proxy:{$q:u}}=r,g=E(null),h=E(!1),I=o(()=>J(t.anchor,u.lang.rtl)),$=o(()=>J(t.self,u.lang.rtl)),b=o(()=>t.persistent!==!0),{registerTick:S,removeTick:i}=me(),{registerTimeout:d}=ge(),{transitionProps:w,transitionStyle:A}=he(t),{localScrollTarget:O,changeScrollEvent:_,unconfigureScrollTarget:j}=be(t,R),{anchorEl:s,canShow:D,anchorEvents:f}=pe({showing:h,configureAnchorEl:te}),{show:H,hide:x}=ye({showing:h,canShow:D,handleShow:v,handleHide:q,hideOnRouteChange:b,processOnMount:!0});Object.assign(f,{delayShow:Z,delayHide:ee});const{showPortal:P,hidePortal:V,renderPortal:a}=ke(r,g,ne);if(u.platform.is.mobile===!0){const n={anchorEl:s,innerRef:g,onClickOutside(p){return x(p),p.target.classList.contains("q-dialog__backdrop")&&L(p),!0}},B=o(()=>t.modelValue===null&&t.persistent!==!0&&h.value===!0);F(B,p=>{(p===!0?Se:U)(n)}),N(()=>{U(n)})}function v(n){P(),S(()=>{l=new MutationObserver(()=>C()),l.observe(g.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),C(),R()}),c===void 0&&(c=F(()=>u.screen.width+"|"+u.screen.height+"|"+t.self+"|"+t.anchor+"|"+u.lang.rtl,C)),d(()=>{P(!0),e("show",n)},t.transitionDuration)}function q(n){i(),V(),M(),d(()=>{V(!0),e("hide",n)},t.transitionDuration)}function M(){l!==void 0&&(l.disconnect(),l=void 0),c!==void 0&&(c(),c=void 0),j(),Q(f,"tooltipTemp")}function C(){const n=g.value;s.value===null||!n||Te({el:n,offset:t.offset,anchorEl:s.value,anchorOrigin:I.value,selfOrigin:$.value,maxHeight:t.maxHeight,maxWidth:t.maxWidth})}function Z(n){if(u.platform.is.mobile===!0){G(),document.body.classList.add("non-selectable");const B=s.value,p=["touchmove","touchcancel","touchend","click"].map(z=>[B,z,"delayHide","passiveCapture"]);W(f,"tooltipTemp",p)}d(()=>{H(n)},t.delay)}function ee(n){u.platform.is.mobile===!0&&(Q(f,"tooltipTemp"),G(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{x(n)},t.hideDelay)}function te(){if(t.noParentEvent===!0||s.value===null)return;const n=u.platform.is.mobile===!0?[[s.value,"touchstart","delayShow","passive"]]:[[s.value,"mouseenter","delayShow","passive"],[s.value,"mouseleave","delayHide","passive"]];W(f,"anchor",n)}function R(){if(s.value!==null||t.scrollTarget!==void 0){O.value=xe(s.value,t.scrollTarget);const n=t.noParentEvent===!0?C:x;_(O.value,n)}}function ae(){return h.value===!0?k("div",{...m,ref:g,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",m.class],style:[m.style,A.value],role:"tooltip"},Y(T.default)):null}function ne(){return k(le,w.value,ae)}return N(M),Object.assign(r.proxy,{updatePosition:C}),a}});function Ve(t,T){const e=E(null),m=o(()=>t.disable===!0?null:k("span",{ref:e,class:"no-outline",tabindex:-1}));function c(l){const r=T.value;l!==void 0&&l.type.indexOf("key")===0?r!==null&&document.activeElement!==r&&r.contains(document.activeElement)===!0&&r.focus():e.value!==null&&(l===void 0||r!==null&&r.contains(l.target)===!0)&&e.value.focus()}return{refocusTargetEl:m,refocusTarget:c}}var qe={xs:30,sm:35,md:40,lg:50,xl:60};const De={...we,...ue,...Oe,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:t=>t==="tf"||t==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},He=["update:modelValue"];function Be(t,T){const{props:e,slots:m,emit:c,proxy:l}=X(),{$q:r}=l,u=Ce(e,r),g=E(null),{refocusTargetEl:h,refocusTarget:I}=Ve(e,g),$=re(e,qe),b=o(()=>e.val!==void 0&&Array.isArray(e.modelValue)),S=o(()=>{const a=y(e.val);return b.value===!0?e.modelValue.findIndex(v=>y(v)===a):-1}),i=o(()=>b.value===!0?S.value>-1:y(e.modelValue)===y(e.trueValue)),d=o(()=>b.value===!0?S.value===-1:y(e.modelValue)===y(e.falseValue)),w=o(()=>i.value===!1&&d.value===!1),A=o(()=>e.disable===!0?-1:e.tabindex||0),O=o(()=>`q-${t} cursor-pointer no-outline row inline no-wrap items-center`+(e.disable===!0?" disabled":"")+(u.value===!0?` q-${t}--dark`:"")+(e.dense===!0?` q-${t}--dense`:"")+(e.leftLabel===!0?" reverse":"")),_=o(()=>{const a=i.value===!0?"truthy":d.value===!0?"falsy":"indet",v=e.color!==void 0&&(e.keepColor===!0||(t==="toggle"?i.value===!0:d.value!==!0))?` text-${e.color}`:"";return`q-${t}__inner relative-position non-selectable q-${t}__inner--${a}${v}`}),j=o(()=>{const a={type:"checkbox"};return e.name!==void 0&&Object.assign(a,{"^checked":i.value===!0?"checked":void 0,name:e.name,value:b.value===!0?e.val:e.trueValue}),a}),s=Pe(j),D=o(()=>{const a={tabindex:A.value,role:t==="toggle"?"switch":"checkbox","aria-label":e.label,"aria-checked":w.value===!0?"mixed":i.value===!0?"true":"false"};return e.disable===!0&&(a["aria-disabled"]="true"),a});function f(a){a!==void 0&&(L(a),I(a)),e.disable!==!0&&c("update:modelValue",H(),a)}function H(){if(b.value===!0){if(i.value===!0){const a=e.modelValue.slice();return a.splice(S.value,1),a}return e.modelValue.concat([e.val])}if(i.value===!0){if(e.toggleOrder!=="ft"||e.toggleIndeterminate===!1)return e.falseValue}else if(d.value===!0){if(e.toggleOrder==="ft"||e.toggleIndeterminate===!1)return e.trueValue}else return e.toggleOrder!=="ft"?e.trueValue:e.falseValue;return e.indeterminateValue}function x(a){(a.keyCode===13||a.keyCode===32)&&L(a)}function P(a){(a.keyCode===13||a.keyCode===32)&&f(a)}const V=T(i,w);return Object.assign(l,{toggle:f}),()=>{const a=V();e.disable!==!0&&s(a,"unshift",` q-${t}__native absolute q-ma-none q-pa-none`);const v=[k("div",{class:_.value,style:$.value,"aria-hidden":"true"},a)];h.value!==null&&v.push(h.value);const q=e.label!==void 0?se(m.default,[e.label]):Y(m.default);return q!==void 0&&v.push(k("div",{class:`q-${t}__label q-anchor--skip`},q)),k("div",{ref:g,class:O.value,...D.value,onClick:f,onKeydown:x,onKeyup:P},v)}}export{je as Q,He as a,Be as b,Ve as c,qe as o,De as u};
