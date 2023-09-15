import{h as l,s as C,aw as L,av as M,r as $,c as n,M as j,E as A,v as O,g as _,ax as h,$ as q}from"./index.0d0f87fb.js";import{u as x,a as S}from"./use-dark.e4883e2c.js";import{o as R,c as T}from"./use-checkbox.916a0912.js";import{u as D,c as P}from"./use-form.768dfc74.js";import{Q as F}from"./QCheckbox.1610cb1b.js";import{Q as E}from"./QToggle.a4e7b275.js";const G=l("svg",{key:"svg",class:"q-radio__bg absolute non-selectable",viewBox:"0 0 24 24"},[l("path",{d:"M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}),l("path",{class:"q-radio__check",d:"M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"})]);var K=C({name:"QRadio",props:{...x,...L,...D,modelValue:{required:!0},val:{required:!0},label:String,leftLabel:Boolean,checkedIcon:String,uncheckedIcon:String,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},emits:["update:modelValue"],setup(e,{slots:r,emit:t}){const{proxy:d}=_(),c=S(e,d.$q),b=M(e,R),s=$(null),{refocusTargetEl:v,refocusTarget:f}=T(e,s),i=n(()=>h(e.modelValue)===h(e.val)),a=n(()=>"q-radio cursor-pointer no-outline row inline no-wrap items-center"+(e.disable===!0?" disabled":"")+(c.value===!0?" q-radio--dark":"")+(e.dense===!0?" q-radio--dense":"")+(e.leftLabel===!0?" reverse":"")),m=n(()=>{const o=e.color!==void 0&&(e.keepColor===!0||i.value===!0)?` text-${e.color}`:"";return`q-radio__inner relative-position q-radio__inner--${i.value===!0?"truthy":"falsy"}${o}`}),u=n(()=>(i.value===!0?e.checkedIcon:e.uncheckedIcon)||null),I=n(()=>e.disable===!0?-1:e.tabindex||0),B=n(()=>{const o={type:"radio"};return e.name!==void 0&&Object.assign(o,{"^checked":i.value===!0?"checked":void 0,name:e.name,value:e.val}),o}),Q=P(B);function k(o){o!==void 0&&(q(o),f(o)),e.disable!==!0&&i.value!==!0&&t("update:modelValue",e.val,o)}function z(o){(o.keyCode===13||o.keyCode===32)&&q(o)}function w(o){(o.keyCode===13||o.keyCode===32)&&k(o)}return Object.assign(d,{set:k}),()=>{const o=u.value!==null?[l("div",{key:"icon",class:"q-radio__icon-container absolute-full flex flex-center no-wrap"},[l(j,{class:"q-radio__icon",name:u.value})])]:[G];e.disable!==!0&&Q(o,"unshift"," q-radio__native q-ma-none q-pa-none");const g=[l("div",{class:m.value,style:b.value,"aria-hidden":"true"},o)];v.value!==null&&g.push(v.value);const y=e.label!==void 0?A(r.default,[e.label]):O(r.default);return y!==void 0&&g.push(l("div",{class:"q-radio__label q-anchor--skip"},y)),l("div",{ref:s,class:a.value,tabindex:I.value,role:"radio","aria-label":e.label,"aria-checked":i.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:k,onKeydown:z,onKeyup:w},g)}}});const V={radio:K,checkbox:F,toggle:E},U=Object.keys(V);var Z=C({name:"QOptionGroup",props:{...x,modelValue:{required:!0},options:{type:Array,validator:e=>e.every(r=>"value"in r&&"label"in r)},name:String,type:{default:"radio",validator:e=>U.includes(e)},color:String,keepColor:Boolean,dense:Boolean,size:String,leftLabel:Boolean,inline:Boolean,disable:Boolean},emits:["update:modelValue"],setup(e,{emit:r,slots:t}){const{proxy:{$q:d}}=_(),c=Array.isArray(e.modelValue);e.type==="radio"?c===!0&&console.error("q-option-group: model should not be array"):c===!1&&console.error("q-option-group: model should be array in your case");const b=S(e,d),s=n(()=>V[e.type]),v=n(()=>"q-option-group q-gutter-x-sm"+(e.inline===!0?" q-option-group--inline":"")),f=n(()=>{const a={role:"group"};return e.type==="radio"&&(a.role="radiogroup",e.disable===!0&&(a["aria-disabled"]="true")),a});function i(a){r("update:modelValue",a)}return()=>l("div",{class:v.value,...f.value},e.options.map((a,m)=>{const u=t["label-"+m]!==void 0?()=>t["label-"+m](a):t.label!==void 0?()=>t.label(a):void 0;return l("div",[l(s.value,{modelValue:e.modelValue,val:a.value,name:a.name===void 0?e.name:a.name,disable:e.disable||a.disable,label:u===void 0?a.label:null,leftLabel:a.leftLabel===void 0?e.leftLabel:a.leftLabel,color:a.color===void 0?e.color:a.color,checkedIcon:a.checkedIcon,uncheckedIcon:a.uncheckedIcon,dark:a.dark||b.value,size:a.size===void 0?e.size:a.size,dense:e.dense,keepColor:a.keepColor===void 0?e.keepColor:a.keepColor,"onUpdate:modelValue":i},u)])}))}});export{Z as Q};
