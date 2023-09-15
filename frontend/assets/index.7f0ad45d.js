import{c as f,s as I,r as u,w as U,t as K,h as g,p as O,v as N,Q as T,u as p,i as L,g as W,y as J,z as X,j as G,J as Y,o as A,N as k,K as Z,_ as D,k as q,L as ee,d as m,m as S,M as $,O as c,P as te,l as F,R as ae,n as oe,S as ie,U as ne}from"./index.0d0f87fb.js";import{u as R}from"./app-store.e9a1bbd9.js";import{Q as P}from"./QInput.c45cf0c3.js";import{Q as re}from"./QForm.55cfd11f.js";import{apiBackendLaravel as se}from"./axios.cf942c22.js";import{u as le}from"./use-quasar.298ffec4.js";import"./use-dark.e4883e2c.js";import"./use-form.768dfc74.js";const ue={ratio:[String,Number]};function ce(e,o){return f(()=>{const s=Number(e.ratio||(o!==void 0?o.value:void 0));return isNaN(s)!==!0&&s>0?{paddingBottom:`${100/s}%`}:null})}const de=16/9;var ge=I({name:"QImg",props:{...ue,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:de},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:o,emit:s}){const r=u(e.initialRatio),v=ce(e,r);let n;const a=[u(null),u(e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null)],l=u(0),d=u(!1),h=u(!1),C=f(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),_=f(()=>({width:e.width,height:e.height})),b=f(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),i=f(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));U(()=>x(),Q);function x(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function Q(t){if(clearTimeout(n),h.value=!1,t===null){d.value=!1,a[0].value=null,a[1].value=null;return}d.value=!0,a[l.value].value=t}function j({target:t}){n!==null&&(clearTimeout(n),r.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,z(t,1))}function z(t,y){n===null||y===1e3||(t.complete===!0?M(t):n=setTimeout(()=>{z(t,y+1)},50))}function M(t){n!==null&&(l.value=l.value===1?0:1,a[l.value].value=null,d.value=!1,h.value=!1,s("load",t.currentSrc||t.src))}function V(t){clearTimeout(n),d.value=!1,h.value=!0,a[0].value=null,a[1].value=null,s("error",t)}function E(t,y){return g("div",{class:"q-img__container absolute-full",key:t},y)}function B(t){const y=a[t].value,w={key:"img_"+t,class:b.value,style:i.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...y};return l.value===t?(w.class+=" q-img__image--waiting",Object.assign(w,{onLoad:j,onError:V})):w.class+=" q-img__image--loaded",E("img"+t,g("img",w))}function H(){return d.value!==!0?g("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},N(o[h.value===!0?"error":"default"])):g("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},o.loading!==void 0?o.loading():e.noSpinner===!0?void 0:[g(T,{color:e.spinnerColor,size:e.spinnerSize})])}return Q(x()),K(()=>{clearTimeout(n),n=null}),()=>{const t=[];return v.value!==null&&t.push(g("div",{key:"filler",style:v.value})),h.value!==!0&&(a[0].value!==null&&t.push(B(0)),a[1].value!==null&&t.push(B(1))),t.push(g(O,{name:"q-transition--fade"},H)),g("div",{class:C.value,style:_.value,role:"img","aria-label":e.alt},t)}}}),me=I({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:o}){const{proxy:{$q:s}}=W(),r=L(J,p);if(r===p)return console.error("QPage needs to be a deep child of QLayout"),p;if(L(X,p)===p)return console.error("QPage needs to be child of QPageContainer"),p;const n=f(()=>{const l=(r.header.space===!0?r.header.size:0)+(r.footer.space===!0?r.footer.size:0);if(typeof e.styleFn=="function"){const d=r.isContainer.value===!0?r.containerHeight.value:s.screen.height;return e.styleFn(l,d)}return{minHeight:r.isContainer.value===!0?r.containerHeight.value-l+"px":s.screen.height===0?l!==0?`calc(100vh - ${l}px)`:"100vh":s.screen.height-l+"px"}}),a=f(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>g("main",{class:a.value,style:n.value},N(o.default))}}),fe=G({name:"LoginForm",setup(){const e=u(""),o=u(""),s=le(),r=Z(),v=Y(),n=R(),a=u(!1),l=u(""),d=u(!1);function h(_){s.dark.set(_),n.setDarkMode(_)}function C(){var b;d.value=!0;const _=document.querySelector('meta[name="csrf-token"]');l.value=_&&(b=_.getAttribute("content"))!=null?b:"",se.post("/auth/login",{email:e.value,password:o.value},{headers:{Accept:"application/json","X-CSRF-TOKEN":l.value}}).then(i=>{i.data.status===!0?(v.updateWholeStore(i.data.id,i.data.name,i.data.email,i.data.vinculo,i.data.data_contratacao,i.data.cargo,i.data.equipe,i.data.unidade,i.data.status_colaborador,i.data.status_formulario_admissao,i.data.token,i.data.permissions[0]),v.user.statusColaborador=="0"?k.create({progress:!0,textColor:"white",icon:"warning",color:"red-6",message:"Esta e-mail est\xE1 inativo."}):(k.create({progress:!0,color:"positive",textColor:"white",icon:"cloud_done",message:i.data.message}),r.push("/dashboard"))):k.create({progress:!0,color:"red-6",textColor:"white",icon:"warning",message:i.data.message})}).catch(i=>{k.create({progress:!0,color:"red-6",textColor:"white",icon:"warning",message:i.response.data.message})}).finally(()=>{d.value=!1})}return A(()=>{a.value=n.dark,h(!1)}),{email:e,password:o,onSubmitLogin:C,isPwd:u(!0),rememberMe:u(!1),isDarkModeActive:a,appStore:n,setDarkMode:h,isDarkActive:f(()=>n.isDarkActive),buttonLoading:d}}});const ve={class:"row q-gutter-y-lg"},he=c("div",{class:"row justify-between text-bold"},null,-1),_e=c("div",{class:"q-pt-xl text-center text-primary text-overline"}," \xA9 2022 - Todos direitos reservados ",-1);function ye(e,o,s,r,v,n){return q(),ee("div",null,[m(re,{onSubmit:e.onSubmitLogin,class:"q-gutter-lg col-12"},{default:S(()=>[m(P,{modelValue:e.email,"onUpdate:modelValue":o[0]||(o[0]=a=>e.email=a),dense:"",dark:e.isDarkActive,label:"Email",hint:"Insira seu e-mail.",type:"email","lazy-rules":"",rules:[a=>a&&a.length>0||"Por favor informe o seu e-mail corporativo"]},{prepend:S(()=>[m($,{name:"mail"})]),_:1},8,["modelValue","dark","rules"]),m(P,{modelValue:e.password,"onUpdate:modelValue":o[2]||(o[2]=a=>e.password=a),dense:"",dark:e.isDarkActive,type:e.isPwd?"password":"text",label:"Senha",hint:"Insira sua senha.","lazy-rules":"",rules:[a=>a&&a.length>0||"Por favor informe a sua senha"]},{prepend:S(()=>[m($,{name:"key"})]),append:S(()=>[m($,{name:e.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:o[1]||(o[1]=a=>e.isPwd=!e.isPwd)},null,8,["name"])]),_:1},8,["modelValue","dark","type","rules"]),c("div",ve,[m(te,{type:"submit",label:e.buttonLoading?"":"Login",color:"primary",class:"full-width",size:"md"},{default:S(()=>[e.buttonLoading?(q(),F(T,{key:0,color:"white"})):ae("",!0)]),_:1},8,["label"])]),he,_e]),_:1},8,["onSubmit"])])}var pe=D(fe,[["render",ye]]),Se={components:{LoginForm:pe},setup(){const e=R(),o=u(!1);return A(()=>{e.setDarkMode(!1)}),{isDarkModeActive:o,appStore:e,isDarkActive:f(()=>e.isDarkActive)}}};const be=e=>(ie("data-v-8bf945ba"),e=e(),ne(),e),we={class:"loginBox row shadow-3"},ke={class:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 firstHalf"},Ce={class:"container row"},$e={class:"row items-center q-pa-xl logoRow"},qe={class:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 secondHalf row justify-center items-center"},xe={class:"container q-gutter-y-lg full-width",style:{padding:"0 15%"}},Qe=be(()=>c("div",{class:"q-mb-xl"},[c("div",{class:"text-h2 text-bold"},"Login")],-1)),ze={class:"row"};function Be(e,o,s,r,v,n){const a=oe("login-form");return q(),F(me,{class:"container row justify-center items-center text-inter"},{default:S(()=>[c("div",we,[c("div",ke,[c("div",Ce,[c("div",$e,[m(ge,{src:"imgs/logo-report.svg",style:{width:"100px"}})])])]),c("div",qe,[c("div",xe,[Qe,c("div",ze,[m(a,{class:"col-12"})])])])])]),_:1})}var Re=D(Se,[["render",Be],["__scopeId","data-v-8bf945ba"]]);export{Re as default};
