import{j as I,J as L,r as t,N as _,_ as N,k as h,L as O,d as l,m as r,aR as B,O as i,M as s,ad as J,P as w,l as A,Q as P,R as j}from"./index.0d0f87fb.js";import{Q as m}from"./QInput.c45cf0c3.js";import{a as f}from"./QSelect.e547e6ab.js";import{Q as Y,a as $,C as R}from"./ClosePopup.7f6c1d46.js";import{Q as T}from"./QForm.55cfd11f.js";import{apiBackendLaravel as W}from"./axios.cf942c22.js";import"./use-dark.e4883e2c.js";import"./use-form.768dfc74.js";import"./QItemLabel.737b5c28.js";import"./scroll.b97062e5.js";import"./use-cache.b0833c75.js";var G=I({name:"CadastroUsuario",setup(){const e=L(),a=e.user.permissions,v=e.user.token,n=t(!1),p=t(""),c=t(""),o=t(""),b=t(""),y=t(""),C=t(""),g=new Date,E=g.getFullYear();let d=g.getMonth()+1,u=g.getDate();u<10&&(u="0"+u),d<10&&(d="0"+d);const D=t(u+"/"+d+"/"+E);function Q(q,V,S,k,U,x,z){n.value=!0;const M={name:q.trim(),email:V.trim()+"@gruporeport.com.br",password:"123".trim(),confirm_password:"123".trim(),vinculo:S,data_contratacao:k,cargo:U,equipe:x,unidade:z,permission:"user"};W.post("auth/register",M,{headers:{Authorization:"Bearer "+v}}).then(F=>{_.create({progress:!0,color:"positive",position:"bottom",message:F.data.message,icon:"cloud_done"}),n.value=!1}).catch(()=>{_.create({progress:!0,color:"yellow-8",textColor:"dark",position:"bottom",message:'O email "'+V+'" j\xE1 esta sendo utilizado!',icon:"warning"}),n.value=!1}).finally(()=>{p.value="",c.value="",o.value="",b.value="",y.value="",C.value="",n.value=!1})}return{userPermission:a,tab:t("user"),splitterModel:t(20),addUser:Q,nome:p,emailCorporativo:c,vinculo:o,vinculosList:["Fixo","Estagi\xE1rio","Tempor\xE1rio","Freelancer"],cargo:b,equipe:y,equipeOptions:["Neg\xF3cios","Gest\xE3o","Consultoria","Conte\xFAdo","Design","Web","Projetos","Comunica\xE7\xE3o","RH","Educa\xE7\xE3o Corporativa"],unidade:C,unidadeOptions:["rpt.s","rpt.e","rpt.com","rpt.edu","gruporeport"],myLocale:{days:"Domingo_Segunda_Ter\xE7a_Quarta_Quinta_Sexta_S\xE1bado".split("_"),daysShort:"Dom_Seg_Ter_Qua_Qui_Sex_S\xE1b".split("_"),months:"Janeiro_Fevereiro_Mar\xE7o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),firstDayOfWeek:1,format24h:!0,pluralDay:"dias"},dataContratacao:D,buttonLoading:n}}});const H={class:"row q-py-md"},K={class:"row q-gutter-x-lg"},X={class:"row q-gutter-x-lg"},Z={class:"row items-center justify-end"},oo={class:"row q-gutter-x-lg"},eo={class:"row justify-end"};function ao(e,a,v,n,p,c){return h(),O("div",H,[l(T,{class:"col-12 q-gutter-y-lg",onSubmit:a[8]||(a[8]=B(o=>e.addUser(e.nome,e.emailCorporativo,e.vinculo,e.dataContratacao,e.cargo,e.equipe,e.unidade),["prevent"]))},{default:r(()=>[i("div",K,[l(m,{class:"col-xl col-lg col-md col-sm-12 col-xs-12",modelValue:e.nome,"onUpdate:modelValue":a[0]||(a[0]=o=>e.nome=o),label:"Nome",color:"primary","text-color":"dark","lazy-rules":"",rules:[o=>o&&o.length>0||"Informe o nome do colaborador"]},{prepend:r(()=>[l(s,{name:"badge"})]),_:1},8,["modelValue","rules"]),l(m,{class:"col-xl col-lg col-md col-sm-12 col-xs-12",modelValue:e.emailCorporativo,"onUpdate:modelValue":a[1]||(a[1]=o=>e.emailCorporativo=o),label:"Email Corporativo",suffix:"@gruporeport.com.br","lazy-rules":"",rules:[o=>o&&o.length>0||"Informe o email corporativo do colaborador"]},{prepend:r(()=>[l(s,{name:"mail"})]),_:1},8,["modelValue","rules"])]),i("div",X,[l(f,{class:"col-xl col-lg col-md col-sm-12 col-xs-12",modelValue:e.vinculo,"onUpdate:modelValue":a[2]||(a[2]=o=>e.vinculo=o),options:e.vinculosList,label:"V\xEDnculo","lazy-rules":"",rules:[o=>o&&o.length>0||"Informe o v\xEDnculo"]},{prepend:r(()=>[l(s,{name:"hub"})]),_:1},8,["modelValue","options","rules"]),l(m,{label:"Data de Contrata\xE7\xE3o",modelValue:e.dataContratacao,"onUpdate:modelValue":a[4]||(a[4]=o=>e.dataContratacao=o),mask:"##/##/####",date:["dataContratacao"],class:"col-xl col-lg col-md col-sm-12 col-xs-12","lazy-rules":"",rules:[o=>o&&o.length>0||"Informe a data de contrata\xE7\xE3o"]},{append:r(()=>[l(s,{name:"event",class:"cursor-pointer"},{default:r(()=>[l(Y,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:r(()=>[l($,{modelValue:e.dataContratacao,"onUpdate:modelValue":a[3]||(a[3]=o=>e.dataContratacao=o),subtitle:"Data de Contrata\xE7\xE3o",mask:"DD/MM/YYYY",locale:e.myLocale,name:"Data de Contrata\xE7\xE3o","today-btn":"","default-view":"Months"},{default:r(()=>[i("div",Z,[J(l(w,{label:"Fechar",color:"primary",flat:""},null,512),[[R]])])]),_:1},8,["modelValue","locale"])]),_:1})]),_:1})]),_:1},8,["modelValue","rules"]),l(m,{modelValue:e.cargo,"onUpdate:modelValue":a[5]||(a[5]=o=>e.cargo=o),label:"Cargo",name:"Cargo","lazy-rules":"",rules:[o=>o&&o.length>0||"Informe o cargo"],class:"col-xl col-lg col-md col-sm-12 col-xs-12"},{prepend:r(()=>[l(s,{name:"work"})]),_:1},8,["modelValue","rules"])]),i("div",oo,[l(f,{modelValue:e.equipe,"onUpdate:modelValue":a[6]||(a[6]=o=>e.equipe=o),options:e.equipeOptions,class:"col-xl col-lg col-md col-sm-12 col-xs-12",label:"Equipe",name:"Equipe","lazy-rules":"",rules:[o=>o&&o.length>0||"Informe a equipe"]},{prepend:r(()=>[l(s,{name:"groups"})]),_:1},8,["modelValue","options","rules"]),l(f,{modelValue:e.unidade,"onUpdate:modelValue":a[7]||(a[7]=o=>e.unidade=o),options:e.unidadeOptions,label:"Unidade",name:"Unidade",class:"col-xl col-lg col-md col-sm-12 col-xs-12","lazy-rules":"",rules:[o=>o&&o.length>0||"Informe a unidade"]},{prepend:r(()=>[l(s,{name:"store"})]),_:1},8,["modelValue","options","rules"])]),i("div",eo,[l(w,{type:"submit",label:e.buttonLoading?"":"Cadastrar Colaborador",color:"positive"},{default:r(()=>[e.buttonLoading?(h(),A(P,{key:0,color:"white"})):j("",!0)]),_:1},8,["label"])])]),_:1})])}var fo=N(G,[["render",ao]]);export{fo as default};