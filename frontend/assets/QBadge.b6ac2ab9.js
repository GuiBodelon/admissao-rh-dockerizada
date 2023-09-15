import{s,c as t,h as u,v as $,g as c,E as f}from"./index.0d0f87fb.js";import{u as g,a as v}from"./use-dark.e4883e2c.js";var C=s({name:"QList",props:{...g,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:l}){const i=c(),n=v(e,i.proxy.$q),a=t(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(n.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>u(e.tag,{class:a.value,role:"list"},$(l.default))}});const x={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},o={xs:2,sm:4,md:8,lg:16,xl:24};var Q=s({name:"QSeparator",props:{...g,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const l=c(),i=v(e,l.proxy.$q),n=t(()=>e.vertical===!0?"vertical":"horizontal"),a=t(()=>` q-separator--${n.value}`),m=t(()=>e.inset!==!1?`${a.value}-${x[e.inset]}`:""),b=t(()=>`q-separator${a.value}${m.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(i.value===!0?" q-separator--dark":"")),q=t(()=>{const r={};if(e.size!==void 0&&(r[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const B=e.spaced===!0?`${o.md}px`:e.spaced in o?`${o[e.spaced]}px`:e.spaced,d=e.vertical===!0?["Left","Right"]:["Top","Bottom"];r[`margin${d[0]}`]=r[`margin${d[1]}`]=B}return r});return()=>u("hr",{class:b.value,style:q.value,"aria-orientation":n.value})}});const S=["top","middle","bottom"];var k=s({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>S.includes(e)}},setup(e,{slots:l}){const i=t(()=>e.align!==void 0?{verticalAlign:e.align}:null),n=t(()=>{const a=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(a!==void 0?` text-${a}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>u("div",{class:n.value,style:i.value,role:"status","aria-label":e.label},f(l.default,e.label!==void 0?[e.label]:[]))}});export{k as Q,C as a,Q as b};
