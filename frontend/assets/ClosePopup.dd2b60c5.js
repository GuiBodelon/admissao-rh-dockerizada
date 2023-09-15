import{c as M,aY as Ke,aZ as qt,s as Ge,r as $,w as J,h,p as ne,v as kt,g as et,a_ as pt,I as Le,P as N,aM as It,az as Ot}from"./index.2bf94b66.js";import{u as Tt,a as jt}from"./use-dark.bd89d3f8.js";import{u as Vt}from"./use-cache.b0833c75.js";import{u as $t,f as Ft,c as Et}from"./use-form.59da048f.js";import{p as Y}from"./scroll.ecf7d4c2.js";import{b as At}from"./QSelect.2a34a1c8.js";import{u as Nt,l as Zt,Q as Pt,z as Lt,A as Qt}from"./QItemLabel.8b0fe373.js";const B=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];function Bt(e,r,l){return Object.prototype.toString.call(e)==="[object Date]"&&(l=e.getDate(),r=e.getMonth()+1,e=e.getFullYear()),Jt(qe(e,r,l))}function Qe(e,r,l){return at(Xt(e,r,l))}function zt(e){return Rt(e)===0}function ve(e,r){return r<=6?31:r<=11||zt(e)?30:29}function Rt(e){const r=B.length;let l=B[0],u,c,o,y,s;if(e<l||e>=B[r-1])throw new Error("Invalid Jalaali year "+e);for(s=1;s<r&&(u=B[s],c=u-l,!(e<u));s+=1)l=u;return y=e-l,c-y<6&&(y=y-c+w(c+4,33)*33),o=j(j(y+1,33)-1,4),o===-1&&(o=4),o}function tt(e,r){const l=B.length,u=e+621;let c=-14,o=B[0],y,s,m,C,v;if(e<o||e>=B[l-1])throw new Error("Invalid Jalaali year "+e);for(v=1;v<l&&(y=B[v],s=y-o,!(e<y));v+=1)c=c+w(s,33)*8+w(j(s,33),4),o=y;C=e-o,c=c+w(C,33)*8+w(j(C,33)+3,4),j(s,33)===4&&s-C===4&&(c+=1);const D=w(u,4)-w((w(u,100)+1)*3,4)-150,F=20+c-D;return r||(s-C<6&&(C=C-s+w(s+4,33)*33),m=j(j(C+1,33)-1,4),m===-1&&(m=4)),{leap:m,gy:u,march:F}}function Xt(e,r,l){const u=tt(e,!0);return qe(u.gy,3,u.march)+(r-1)*31-w(r,7)*(r-7)+l-1}function Jt(e){const r=at(e).gy;let l=r-621,u,c,o;const y=tt(l,!1),s=qe(r,3,y.march);if(o=e-s,o>=0){if(o<=185)return c=1+w(o,31),u=j(o,31)+1,{jy:l,jm:c,jd:u};o-=186}else l-=1,o+=179,y.leap===1&&(o+=1);return c=7+w(o,30),u=j(o,30)+1,{jy:l,jm:c,jd:u}}function qe(e,r,l){let u=w((e+w(r-8,6)+100100)*1461,4)+w(153*j(r+9,12)+2,5)+l-34840408;return u=u-w(w(e+100100+w(r-8,6),100)*3,4)+752,u}function at(e){let r=4*e+139361631;r=r+w(w(4*e+183187720,146097)*3,4)*4-3908;const l=w(j(r,1461),4)*5+308,u=w(j(l,153),5)+1,c=j(w(l,153),12)+1;return{gy:w(r,1461)-100100+w(8-c,6),gm:c,gd:u}}function w(e,r){return~~(e/r)}function j(e,r){return e-~~(e/r)*r}const Ut=["gregorian","persian"],Wt={modelValue:{required:!0},mask:{type:String},locale:Object,calendar:{type:String,validator:e=>Ut.includes(e),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},Kt=["update:modelValue"];function L(e){return e.year+"/"+Y(e.month)+"/"+Y(e.day)}function Gt(e,r){const l=M(()=>e.disable!==!0&&e.readonly!==!0),u=M(()=>e.editable===!0?0:-1),c=M(()=>{const s=[];return e.color!==void 0&&s.push(`bg-${e.color}`),e.textColor!==void 0&&s.push(`text-${e.textColor}`),s.join(" ")});function o(){return e.locale!==void 0?{...r.lang.date,...e.locale}:r.lang.date}function y(s){const m=new Date,C=s===!0?null:0;if(e.calendar==="persian"){const v=Bt(m);return{year:v.jy,month:v.jm,day:v.jd}}return{year:m.getFullYear(),month:m.getMonth()+1,day:m.getDate(),hour:C,minute:C,second:C,millisecond:C}}return{editable:l,tabindex:u,headerClass:c,getLocale:o,getCurrentDate:y}}const nt=864e5,ea=36e5,Ce=6e4,rt="YYYY-MM-DDTHH:mm:ss.SSSZ",ta=/\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,aa=/(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,Se={};function na(e,r){const l="("+r.days.join("|")+")",u=e+l;if(Se[u]!==void 0)return Se[u];const c="("+r.daysShort.join("|")+")",o="("+r.months.join("|")+")",y="("+r.monthsShort.join("|")+")",s={};let m=0;const C=e.replace(aa,D=>{switch(m++,D){case"YY":return s.YY=m,"(-?\\d{1,2})";case"YYYY":return s.YYYY=m,"(-?\\d{1,4})";case"M":return s.M=m,"(\\d{1,2})";case"MM":return s.M=m,"(\\d{2})";case"MMM":return s.MMM=m,y;case"MMMM":return s.MMMM=m,o;case"D":return s.D=m,"(\\d{1,2})";case"Do":return s.D=m++,"(\\d{1,2}(st|nd|rd|th))";case"DD":return s.D=m,"(\\d{2})";case"H":return s.H=m,"(\\d{1,2})";case"HH":return s.H=m,"(\\d{2})";case"h":return s.h=m,"(\\d{1,2})";case"hh":return s.h=m,"(\\d{2})";case"m":return s.m=m,"(\\d{1,2})";case"mm":return s.m=m,"(\\d{2})";case"s":return s.s=m,"(\\d{1,2})";case"ss":return s.s=m,"(\\d{2})";case"S":return s.S=m,"(\\d{1})";case"SS":return s.S=m,"(\\d{2})";case"SSS":return s.S=m,"(\\d{3})";case"A":return s.A=m,"(AM|PM)";case"a":return s.a=m,"(am|pm)";case"aa":return s.aa=m,"(a\\.m\\.|p\\.m\\.)";case"ddd":return c;case"dddd":return l;case"Q":case"d":case"E":return"(\\d{1})";case"Qo":return"(1st|2nd|3rd|4th)";case"DDD":case"DDDD":return"(\\d{1,3})";case"w":return"(\\d{1,2})";case"ww":return"(\\d{2})";case"Z":return s.Z=m,"(Z|[+-]\\d{2}:\\d{2})";case"ZZ":return s.ZZ=m,"(Z|[+-]\\d{2}\\d{2})";case"X":return s.X=m,"(-?\\d+)";case"x":return s.x=m,"(-?\\d{4,})";default:return m--,D[0]==="["&&(D=D.substring(1,D.length-1)),D.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}),v={map:s,regex:new RegExp("^"+C)};return Se[u]=v,v}function ot(e,r){return e!==void 0?e:r!==void 0?r.date:qt.date}function Be(e,r=""){const l=e>0?"-":"+",u=Math.abs(e),c=Math.floor(u/60),o=u%60;return l+Y(c)+r+Y(o)}function ra(e,r,l,u,c){const o={year:null,month:null,day:null,hour:null,minute:null,second:null,millisecond:null,timezoneOffset:null,dateHash:null,timeHash:null};if(c!==void 0&&Object.assign(o,c),e==null||e===""||typeof e!="string")return o;r===void 0&&(r=rt);const y=ot(l,Ke.props),s=y.months,m=y.monthsShort,{regex:C,map:v}=na(r,y),D=e.match(C);if(D===null)return o;let F="";if(v.X!==void 0||v.x!==void 0){const I=parseInt(D[v.X!==void 0?v.X:v.x],10);if(isNaN(I)===!0||I<0)return o;const O=new Date(I*(v.X!==void 0?1e3:1));o.year=O.getFullYear(),o.month=O.getMonth()+1,o.day=O.getDate(),o.hour=O.getHours(),o.minute=O.getMinutes(),o.second=O.getSeconds(),o.millisecond=O.getMilliseconds()}else{if(v.YYYY!==void 0)o.year=parseInt(D[v.YYYY],10);else if(v.YY!==void 0){const I=parseInt(D[v.YY],10);o.year=I<0?I:2e3+I}if(v.M!==void 0){if(o.month=parseInt(D[v.M],10),o.month<1||o.month>12)return o}else v.MMM!==void 0?o.month=m.indexOf(D[v.MMM])+1:v.MMMM!==void 0&&(o.month=s.indexOf(D[v.MMMM])+1);if(v.D!==void 0){if(o.day=parseInt(D[v.D],10),o.year===null||o.month===null||o.day<1)return o;const I=u!=="persian"?new Date(o.year,o.month,0).getDate():ve(o.year,o.month);if(o.day>I)return o}v.H!==void 0?o.hour=parseInt(D[v.H],10)%24:v.h!==void 0&&(o.hour=parseInt(D[v.h],10)%12,(v.A&&D[v.A]==="PM"||v.a&&D[v.a]==="pm"||v.aa&&D[v.aa]==="p.m.")&&(o.hour+=12),o.hour=o.hour%24),v.m!==void 0&&(o.minute=parseInt(D[v.m],10)%60),v.s!==void 0&&(o.second=parseInt(D[v.s],10)%60),v.S!==void 0&&(o.millisecond=parseInt(D[v.S],10)*10**(3-D[v.S].length)),(v.Z!==void 0||v.ZZ!==void 0)&&(F=v.Z!==void 0?D[v.Z].replace(":",""):D[v.ZZ],o.timezoneOffset=(F[0]==="+"?-1:1)*(60*F.slice(1,3)+1*F.slice(3,5)))}return o.dateHash=Y(o.year,6)+"/"+Y(o.month)+"/"+Y(o.day),o.timeHash=Y(o.hour)+":"+Y(o.minute)+":"+Y(o.second)+F,o}function ze(e){const r=new Date(e.getFullYear(),e.getMonth(),e.getDate());r.setDate(r.getDate()-(r.getDay()+6)%7+3);const l=new Date(r.getFullYear(),0,4);l.setDate(l.getDate()-(l.getDay()+6)%7+3);const u=r.getTimezoneOffset()-l.getTimezoneOffset();r.setHours(r.getHours()-u);const c=(r-l)/(nt*7);return 1+Math.floor(c)}function Z(e,r,l){const u=new Date(e),c=`set${l===!0?"UTC":""}`;switch(r){case"year":case"years":u[`${c}Month`](0);case"month":case"months":u[`${c}Date`](1);case"day":case"days":case"date":u[`${c}Hours`](0);case"hour":case"hours":u[`${c}Minutes`](0);case"minute":case"minutes":u[`${c}Seconds`](0);case"second":case"seconds":u[`${c}Milliseconds`](0)}return u}function de(e,r,l){return(e.getTime()-e.getTimezoneOffset()*Ce-(r.getTime()-r.getTimezoneOffset()*Ce))/l}function lt(e,r,l="days"){const u=new Date(e),c=new Date(r);switch(l){case"years":case"year":return u.getFullYear()-c.getFullYear();case"months":case"month":return(u.getFullYear()-c.getFullYear())*12+u.getMonth()-c.getMonth();case"days":case"day":case"date":return de(Z(u,"day"),Z(c,"day"),nt);case"hours":case"hour":return de(Z(u,"hour"),Z(c,"hour"),ea);case"minutes":case"minute":return de(Z(u,"minute"),Z(c,"minute"),Ce);case"seconds":case"second":return de(Z(u,"second"),Z(c,"second"),1e3)}}function Re(e){return lt(e,Z(e,"year"),"days")+1}function Xe(e){if(e>=11&&e<=13)return`${e}th`;switch(e%10){case 1:return`${e}st`;case 2:return`${e}nd`;case 3:return`${e}rd`}return`${e}th`}const Je={YY(e,r,l){const u=this.YYYY(e,r,l)%100;return u>=0?Y(u):"-"+Y(Math.abs(u))},YYYY(e,r,l){return l!=null?l:e.getFullYear()},M(e){return e.getMonth()+1},MM(e){return Y(e.getMonth()+1)},MMM(e,r){return r.monthsShort[e.getMonth()]},MMMM(e,r){return r.months[e.getMonth()]},Q(e){return Math.ceil((e.getMonth()+1)/3)},Qo(e){return Xe(this.Q(e))},D(e){return e.getDate()},Do(e){return Xe(e.getDate())},DD(e){return Y(e.getDate())},DDD(e){return Re(e)},DDDD(e){return Y(Re(e),3)},d(e){return e.getDay()},dd(e,r){return this.dddd(e,r).slice(0,2)},ddd(e,r){return r.daysShort[e.getDay()]},dddd(e,r){return r.days[e.getDay()]},E(e){return e.getDay()||7},w(e){return ze(e)},ww(e){return Y(ze(e))},H(e){return e.getHours()},HH(e){return Y(e.getHours())},h(e){const r=e.getHours();return r===0?12:r>12?r%12:r},hh(e){return Y(this.h(e))},m(e){return e.getMinutes()},mm(e){return Y(e.getMinutes())},s(e){return e.getSeconds()},ss(e){return Y(e.getSeconds())},S(e){return Math.floor(e.getMilliseconds()/100)},SS(e){return Y(Math.floor(e.getMilliseconds()/10))},SSS(e){return Y(e.getMilliseconds(),3)},A(e){return this.H(e)<12?"AM":"PM"},a(e){return this.H(e)<12?"am":"pm"},aa(e){return this.H(e)<12?"a.m.":"p.m."},Z(e,r,l,u){const c=u==null?e.getTimezoneOffset():u;return Be(c,":")},ZZ(e,r,l,u){const c=u==null?e.getTimezoneOffset():u;return Be(c)},X(e){return Math.floor(e.getTime()/1e3)},x(e){return e.getTime()}};function oa(e,r,l,u,c){if(e!==0&&!e||e===1/0||e===-1/0)return;const o=new Date(e);if(isNaN(o))return;r===void 0&&(r=rt);const y=ot(l,Ke.props);return r.replace(ta,(s,m)=>s in Je?Je[s](o,y,u,c):m===void 0?s:m.split("\\]").join("]"))}const X=20,la=["Calendar","Years","Months"],Ue=e=>la.includes(e),He=e=>/^-?[\d]+\/[0-1]\d$/.test(e),ee=" \u2014 ";function Q(e){return e.year+"/"+Y(e.month)}var ma=Ge({name:"QDate",props:{...Wt,...$t,...Tt,multiple:Boolean,range:Boolean,title:String,subtitle:String,mask:{default:"YYYY/MM/DD"},defaultYearMonth:{type:String,validator:He},yearsInMonthView:Boolean,events:[Array,Function],eventColor:[String,Function],emitImmediately:Boolean,options:[Array,Function],navigationMinYearMonth:{type:String,validator:He},navigationMaxYearMonth:{type:String,validator:He},noUnset:Boolean,firstDayOfWeek:[String,Number],todayBtn:Boolean,minimal:Boolean,defaultView:{type:String,default:"Calendar",validator:Ue}},emits:[...Kt,"rangeStart","rangeEnd","navigation"],setup(e,{slots:r,emit:l}){const{proxy:u}=et(),{$q:c}=u,o=jt(e,c),{getCache:y}=Vt(),{tabindex:s,headerClass:m,getLocale:C,getCurrentDate:v}=Gt(e,c);let D;const F=Ft(e),I=Et(F),O=$(null),x=$($e()),S=$(C()),ut=M(()=>$e()),st=M(()=>C()),A=M(()=>v()),g=$(Fe(x.value,S.value)),T=$(e.defaultView),ke=c.lang.rtl===!0?"right":"left",re=$(ke.value),fe=$(ke.value),me=g.value.year,oe=$(me-me%X-(me<0?X:0)),q=$(null),it=M(()=>{const t=e.landscape===!0?"landscape":"portrait";return`q-date q-date--${t} q-date--${t}-${e.minimal===!0?"minimal":"standard"}`+(o.value===!0?" q-date--dark q-dark":"")+(e.bordered===!0?" q-date--bordered":"")+(e.square===!0?" q-date--square no-border-radius":"")+(e.flat===!0?" q-date--flat no-shadow":"")+(e.disable===!0?" disabled":e.readonly===!0?" q-date--readonly":"")}),z=M(()=>e.color||"primary"),U=M(()=>e.textColor||"white"),le=M(()=>e.emitImmediately===!0&&e.multiple!==!0&&e.range!==!0),he=M(()=>Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue!==null&&e.modelValue!==void 0?[e.modelValue]:[]),E=M(()=>he.value.filter(t=>typeof t=="string").map(t=>De(t,x.value,S.value)).filter(t=>t.dateHash!==null&&t.day!==null&&t.month!==null&&t.year!==null)),W=M(()=>{const t=a=>De(a,x.value,S.value);return he.value.filter(a=>pt(a)===!0&&a.from!==void 0&&a.to!==void 0).map(a=>({from:t(a.from),to:t(a.to)})).filter(a=>a.from.dateHash!==null&&a.to.dateHash!==null&&a.from.dateHash<a.to.dateHash)}),ue=M(()=>e.calendar!=="persian"?t=>new Date(t.year,t.month-1,t.day):t=>{const a=Qe(t.year,t.month,t.day);return new Date(a.gy,a.gm-1,a.gd)}),ge=M(()=>e.calendar==="persian"?L:(t,a,n)=>oa(new Date(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond),a===void 0?x.value:a,n===void 0?S.value:n,t.year,t.timezoneOffset)),te=M(()=>E.value.length+W.value.reduce((t,a)=>t+1+lt(ue.value(a.to),ue.value(a.from)),0)),pe=M(()=>{if(e.title!==void 0&&e.title!==null&&e.title.length>0)return e.title;if(q.value!==null){const n=q.value.init,d=ue.value(n);return S.value.daysShort[d.getDay()]+", "+S.value.monthsShort[n.month-1]+" "+n.day+ee+"?"}if(te.value===0)return ee;if(te.value>1)return`${te.value} ${S.value.pluralDay}`;const t=E.value[0],a=ue.value(t);return isNaN(a.valueOf())===!0?ee:S.value.headerTitle!==void 0?S.value.headerTitle(a,t):S.value.daysShort[a.getDay()]+", "+S.value.monthsShort[t.month-1]+" "+t.day}),ct=M(()=>E.value.concat(W.value.map(a=>a.from)).sort((a,n)=>a.year-n.year||a.month-n.month)[0]),dt=M(()=>E.value.concat(W.value.map(a=>a.to)).sort((a,n)=>n.year-a.year||n.month-a.month)[0]),Ie=M(()=>{if(e.subtitle!==void 0&&e.subtitle!==null&&e.subtitle.length>0)return e.subtitle;if(te.value===0)return ee;if(te.value>1){const t=ct.value,a=dt.value,n=S.value.monthsShort;return n[t.month-1]+(t.year!==a.year?" "+t.year+ee+n[a.month-1]+" ":t.month!==a.month?ee+n[a.month-1]:"")+" "+a.year}return E.value[0].year}),se=M(()=>{const t=[c.iconSet.datetime.arrowLeft,c.iconSet.datetime.arrowRight];return c.lang.rtl===!0?t.reverse():t}),Oe=M(()=>e.firstDayOfWeek!==void 0?Number(e.firstDayOfWeek):S.value.firstDayOfWeek),vt=M(()=>{const t=S.value.daysShort,a=Oe.value;return a>0?t.slice(a,7).concat(t.slice(0,a)):t}),P=M(()=>{const t=g.value;return e.calendar!=="persian"?new Date(t.year,t.month,0).getDate():ve(t.year,t.month)}),ft=M(()=>typeof e.eventColor=="function"?e.eventColor:()=>e.eventColor),k=M(()=>{if(e.navigationMinYearMonth===void 0)return null;const t=e.navigationMinYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),p=M(()=>{if(e.navigationMaxYearMonth===void 0)return null;const t=e.navigationMaxYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),ye=M(()=>{const t={month:{prev:!0,next:!0},year:{prev:!0,next:!0}};return k.value!==null&&k.value.year>=g.value.year&&(t.year.prev=!1,k.value.year===g.value.year&&k.value.month>=g.value.month&&(t.month.prev=!1)),p.value!==null&&p.value.year<=g.value.year&&(t.year.next=!1,p.value.year===g.value.year&&p.value.month<=g.value.month&&(t.month.next=!1)),t}),ie=M(()=>{const t={};return E.value.forEach(a=>{const n=Q(a);t[n]===void 0&&(t[n]=[]),t[n].push(a.day)}),t}),Te=M(()=>{const t={};return W.value.forEach(a=>{const n=Q(a.from),d=Q(a.to);if(t[n]===void 0&&(t[n]=[]),t[n].push({from:a.from.day,to:n===d?a.to.day:void 0,range:a}),n<d){let i;const{year:b,month:f}=a.from,_=f<12?{year:b,month:f+1}:{year:b+1,month:1};for(;(i=Q(_))<=d;)t[i]===void 0&&(t[i]=[]),t[i].push({from:void 0,to:i===d?a.to.day:void 0,range:a}),_.month++,_.month>12&&(_.year++,_.month=1)}}),t}),ae=M(()=>{if(q.value===null)return;const{init:t,initHash:a,final:n,finalHash:d}=q.value,[i,b]=a<=d?[t,n]:[n,t],f=Q(i),_=Q(b);if(f!==V.value&&_!==V.value)return;const H={};return f===V.value?(H.from=i.day,H.includeFrom=!0):H.from=1,_===V.value?(H.to=b.day,H.includeTo=!0):H.to=P.value,H}),V=M(()=>Q(g.value)),mt=M(()=>{const t={};if(e.options===void 0){for(let n=1;n<=P.value;n++)t[n]=!0;return t}const a=typeof e.options=="function"?e.options:n=>e.options.includes(n);for(let n=1;n<=P.value;n++){const d=V.value+"/"+Y(n);t[n]=a(d)}return t}),ht=M(()=>{const t={};if(e.events===void 0)for(let a=1;a<=P.value;a++)t[a]=!1;else{const a=typeof e.events=="function"?e.events:n=>e.events.includes(n);for(let n=1;n<=P.value;n++){const d=V.value+"/"+Y(n);t[n]=a(d)===!0&&ft.value(d)}}return t}),gt=M(()=>{let t,a;const{year:n,month:d}=g.value;if(e.calendar!=="persian")t=new Date(n,d-1,1),a=new Date(n,d-1,0).getDate();else{const i=Qe(n,d,1);t=new Date(i.gy,i.gm-1,i.gd);let b=d-1,f=n;b===0&&(b=12,f--),a=ve(f,b)}return{days:t.getDay()-Oe.value-1,endDay:a}}),je=M(()=>{const t=[],{days:a,endDay:n}=gt.value,d=a<0?a+7:a;if(d<6)for(let f=n-d;f<=n;f++)t.push({i:f,fill:!0});const i=t.length;for(let f=1;f<=P.value;f++){const _={i:f,event:ht.value[f],classes:[]};mt.value[f]===!0&&(_.in=!0,_.flat=!0),t.push(_)}if(ie.value[V.value]!==void 0&&ie.value[V.value].forEach(f=>{const _=i+f-1;Object.assign(t[_],{selected:!0,unelevated:!0,flat:!1,color:z.value,textColor:U.value})}),Te.value[V.value]!==void 0&&Te.value[V.value].forEach(f=>{if(f.from!==void 0){const _=i+f.from-1,H=i+(f.to||P.value)-1;for(let xe=_;xe<=H;xe++)Object.assign(t[xe],{range:f.range,unelevated:!0,color:z.value,textColor:U.value});Object.assign(t[_],{rangeFrom:!0,flat:!1}),f.to!==void 0&&Object.assign(t[H],{rangeTo:!0,flat:!1})}else if(f.to!==void 0){const _=i+f.to-1;for(let H=i;H<=_;H++)Object.assign(t[H],{range:f.range,unelevated:!0,color:z.value,textColor:U.value});Object.assign(t[_],{flat:!1,rangeTo:!0})}else{const _=i+P.value-1;for(let H=i;H<=_;H++)Object.assign(t[H],{range:f.range,unelevated:!0,color:z.value,textColor:U.value})}}),ae.value!==void 0){const f=i+ae.value.from-1,_=i+ae.value.to-1;for(let H=f;H<=_;H++)t[H].color=z.value,t[H].editRange=!0;ae.value.includeFrom===!0&&(t[f].editRangeFrom=!0),ae.value.includeTo===!0&&(t[_].editRangeTo=!0)}g.value.year===A.value.year&&g.value.month===A.value.month&&(t[i+A.value.day-1].today=!0);const b=t.length%7;if(b>0){const f=7-b;for(let _=1;_<=f;_++)t.push({i:_,fill:!0})}return t.forEach(f=>{let _="q-date__calendar-item ";f.fill===!0?_+="q-date__calendar-item--fill":(_+=`q-date__calendar-item--${f.in===!0?"in":"out"}`,f.range!==void 0&&(_+=` q-date__range${f.rangeTo===!0?"-to":f.rangeFrom===!0?"-from":""}`),f.editRange===!0&&(_+=` q-date__edit-range${f.editRangeFrom===!0?"-from":""}${f.editRangeTo===!0?"-to":""}`),(f.range!==void 0||f.editRange===!0)&&(_+=` text-${f.color}`)),f.classes=_}),t}),yt=M(()=>e.disable===!0?{"aria-disabled":"true"}:e.readonly===!0?{"aria-readonly":"true"}:{});J(()=>e.modelValue,t=>{if(D===t)D=0;else{const{year:a,month:n}=Fe(x.value,S.value);K(a,n)}}),J(T,()=>{O.value!==null&&O.value.focus()}),J(()=>g.value.year,t=>{l("navigation",{year:t,month:g.value.month})}),J(()=>g.value.month,t=>{l("navigation",{year:g.value.year,month:t})}),J(ut,t=>{Pe(t,S.value,"mask"),x.value=t}),J(st,t=>{Pe(x.value,t,"locale"),S.value=t});function Ve(){const t=A.value,a=ie.value[Q(t)];(a===void 0||a.includes(t.day)===!1)&&be(t),Me(t.year,t.month)}function Mt(t){Ue(t)===!0&&(T.value=t)}function Dt(t,a){["month","year"].includes(t)&&(t==="month"?Ae:_e)(a===!0?-1:1)}function Me(t,a){T.value="Calendar",K(t,a)}function _t(t,a){if(e.range===!1||!t){q.value=null;return}const n=Object.assign({...g.value},t),d=a!==void 0?Object.assign({...g.value},a):n;q.value={init:n,initHash:L(n),final:d,finalHash:L(d)},Me(n.year,n.month)}function $e(){return e.calendar==="persian"?"YYYY/MM/DD":e.mask}function De(t,a,n){return ra(t,a,n,e.calendar,{hour:0,minute:0,second:0,millisecond:0})}function Fe(t,a){const n=Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue?[e.modelValue]:[];if(n.length===0)return Ee();const d=n[n.length-1],i=De(d.from!==void 0?d.from:d,t,a);return i.dateHash===null?Ee():i}function Ee(){let t,a;if(e.defaultYearMonth!==void 0){const n=e.defaultYearMonth.split("/");t=parseInt(n[0],10),a=parseInt(n[1],10)}else{const n=A.value!==void 0?A.value:v();t=n.year,a=n.month}return{year:t,month:a,day:1,hour:0,minute:0,second:0,millisecond:0,dateHash:t+"/"+Y(a)+"/01"}}function Ae(t){let a=g.value.year,n=Number(g.value.month)+t;n===13?(n=1,a++):n===0&&(n=12,a--),K(a,n),le.value===!0&&ce("month")}function _e(t){const a=Number(g.value.year)+t;K(a,g.value.month),le.value===!0&&ce("year")}function bt(t){K(t,g.value.month),T.value=e.defaultView==="Years"?"Months":"Calendar",le.value===!0&&ce("year")}function Yt(t){K(g.value.year,t),T.value="Calendar",le.value===!0&&ce("month")}function wt(t,a){const n=ie.value[a];(n!==void 0&&n.includes(t.day)===!0?Ye:be)(t)}function R(t){return{year:t.year,month:t.month,day:t.day}}function K(t,a){k.value!==null&&t<=k.value.year&&(t=k.value.year,a<k.value.month&&(a=k.value.month)),p.value!==null&&t>=p.value.year&&(t=p.value.year,a>p.value.month&&(a=p.value.month));const n=t+"/"+Y(a)+"/01";n!==g.value.dateHash&&(re.value=g.value.dateHash<n==(c.lang.rtl!==!0)?"left":"right",t!==g.value.year&&(fe.value=re.value),Le(()=>{oe.value=t-t%X-(t<0?X:0),Object.assign(g.value,{year:t,month:a,day:1,dateHash:n})}))}function Ne(t,a,n){const d=t!==null&&t.length===1&&e.multiple===!1?t[0]:t;D=d;const{reason:i,details:b}=Ze(a,n);l("update:modelValue",d,i,b)}function ce(t){const a=E.value[0]!==void 0&&E.value[0].dateHash!==null?{...E.value[0]}:{...g.value};Le(()=>{a.year=g.value.year,a.month=g.value.month;const n=e.calendar!=="persian"?new Date(a.year,a.month,0).getDate():ve(a.year,a.month);a.day=Math.min(Math.max(1,a.day),n);const d=G(a);D=d;const{details:i}=Ze("",a);l("update:modelValue",d,t,i)})}function Ze(t,a){return a.from!==void 0?{reason:`${t}-range`,details:{...R(a.target),from:R(a.from),to:R(a.to)}}:{reason:`${t}-day`,details:R(a)}}function G(t,a,n){return t.from!==void 0?{from:ge.value(t.from,a,n),to:ge.value(t.to,a,n)}:ge.value(t,a,n)}function be(t){let a;if(e.multiple===!0)if(t.from!==void 0){const n=L(t.from),d=L(t.to),i=E.value.filter(f=>f.dateHash<n||f.dateHash>d),b=W.value.filter(({from:f,to:_})=>_.dateHash<n||f.dateHash>d);a=i.concat(b).concat(t).map(f=>G(f))}else{const n=he.value.slice();n.push(G(t)),a=n}else a=G(t);Ne(a,"add",t)}function Ye(t){if(e.noUnset===!0)return;let a=null;if(e.multiple===!0&&Array.isArray(e.modelValue)===!0){const n=G(t);t.from!==void 0?a=e.modelValue.filter(d=>d.from!==void 0?d.from!==n.from&&d.to!==n.to:!0):a=e.modelValue.filter(d=>d!==n),a.length===0&&(a=null)}Ne(a,"remove",t)}function Pe(t,a,n){const d=E.value.concat(W.value).map(i=>G(i,t,a)).filter(i=>i.from!==void 0?i.from.dateHash!==null&&i.to.dateHash!==null:i.dateHash!==null);l("update:modelValue",(e.multiple===!0?d:d[0])||null,n)}function xt(){if(e.minimal!==!0)return h("div",{class:"q-date__header "+m.value},[h("div",{class:"relative-position"},[h(ne,{name:"q-transition--fade"},()=>h("div",{key:"h-yr-"+Ie.value,class:"q-date__header-subtitle q-date__header-link "+(T.value==="Years"?"q-date__header-link--active":"cursor-pointer"),tabindex:s.value,...y("vY",{onClick(){T.value="Years"},onKeyup(t){t.keyCode===13&&(T.value="Years")}})},[Ie.value]))]),h("div",{class:"q-date__header-title relative-position flex no-wrap"},[h("div",{class:"relative-position col"},[h(ne,{name:"q-transition--fade"},()=>h("div",{key:"h-sub"+pe.value,class:"q-date__header-title-label q-date__header-link "+(T.value==="Calendar"?"q-date__header-link--active":"cursor-pointer"),tabindex:s.value,...y("vC",{onClick(){T.value="Calendar"},onKeyup(t){t.keyCode===13&&(T.value="Calendar")}})},[pe.value]))]),e.todayBtn===!0?h(N,{class:"q-date__header-today self-start",icon:c.iconSet.datetime.today,flat:!0,size:"sm",round:!0,tabindex:s.value,onClick:Ve}):null])])}function we({label:t,type:a,key:n,dir:d,goTo:i,boundaries:b,cls:f}){return[h("div",{class:"row items-center q-date__arrow"},[h(N,{round:!0,dense:!0,size:"sm",flat:!0,icon:se.value[0],tabindex:s.value,disable:b.prev===!1,...y("go-#"+a,{onClick(){i(-1)}})})]),h("div",{class:"relative-position overflow-hidden flex flex-center"+f},[h(ne,{name:"q-transition--jump-"+d},()=>h("div",{key:n},[h(N,{flat:!0,dense:!0,noCaps:!0,label:t,tabindex:s.value,...y("view#"+a,{onClick:()=>{T.value=a}})})]))]),h("div",{class:"row items-center q-date__arrow"},[h(N,{round:!0,dense:!0,size:"sm",flat:!0,icon:se.value[1],tabindex:s.value,disable:b.next===!1,...y("go+#"+a,{onClick(){i(1)}})})])]}const St={Calendar:()=>[h("div",{key:"calendar-view",class:"q-date__view q-date__calendar"},[h("div",{class:"q-date__navigation row items-center no-wrap"},we({label:S.value.months[g.value.month-1],type:"Months",key:g.value.month,dir:re.value,goTo:Ae,boundaries:ye.value.month,cls:" col"}).concat(we({label:g.value.year,type:"Years",key:g.value.year,dir:fe.value,goTo:_e,boundaries:ye.value.year,cls:""}))),h("div",{class:"q-date__calendar-weekdays row items-center no-wrap"},vt.value.map(t=>h("div",{class:"q-date__calendar-item"},[h("div",t)]))),h("div",{class:"q-date__calendar-days-container relative-position overflow-hidden"},[h(ne,{name:"q-transition--slide-"+re.value},()=>h("div",{key:V.value,class:"q-date__calendar-days fit"},je.value.map(t=>h("div",{class:t.classes},[t.in===!0?h(N,{class:t.today===!0?"q-date__today":"",dense:!0,flat:t.flat,unelevated:t.unelevated,color:t.color,textColor:t.textColor,label:t.i,tabindex:s.value,...y("day#"+t.i,{onClick:()=>{Ht(t.i)},onMouseover:()=>{Ct(t.i)}})},t.event!==!1?()=>h("div",{class:"q-date__event bg-"+t.event}):null):h("div",""+t.i)]))))])])],Months(){const t=g.value.year===A.value.year,a=d=>k.value!==null&&g.value.year===k.value.year&&k.value.month>d||p.value!==null&&g.value.year===p.value.year&&p.value.month<d,n=S.value.monthsShort.map((d,i)=>{const b=g.value.month===i+1;return h("div",{class:"q-date__months-item flex flex-center"},[h(N,{class:t===!0&&A.value.month===i+1?"q-date__today":null,flat:b!==!0,label:d,unelevated:b,color:b===!0?z.value:null,textColor:b===!0?U.value:null,tabindex:s.value,disable:a(i+1),...y("month#"+i,{onClick:()=>{Yt(i+1)}})})])});return e.yearsInMonthView===!0&&n.unshift(h("div",{class:"row no-wrap full-width"},[we({label:g.value.year,type:"Years",key:g.value.year,dir:fe.value,goTo:_e,boundaries:ye.value.year,cls:" col"})])),h("div",{key:"months-view",class:"q-date__view q-date__months flex flex-center"},n)},Years(){const t=oe.value,a=t+X,n=[],d=i=>k.value!==null&&k.value.year>i||p.value!==null&&p.value.year<i;for(let i=t;i<=a;i++){const b=g.value.year===i;n.push(h("div",{class:"q-date__years-item flex flex-center"},[h(N,{key:"yr"+i,class:A.value.year===i?"q-date__today":null,flat:!b,label:i,dense:!0,unelevated:b,color:b===!0?z.value:null,textColor:b===!0?U.value:null,tabindex:s.value,disable:d(i),...y("yr#"+i,{onClick:()=>{bt(i)}})})]))}return h("div",{class:"q-date__view q-date__years flex flex-center"},[h("div",{class:"col-auto"},[h(N,{round:!0,dense:!0,flat:!0,icon:se.value[0],tabindex:s.value,disable:d(t),...y("y-",{onClick:()=>{oe.value-=X}})})]),h("div",{class:"q-date__years-content col self-stretch row items-center"},n),h("div",{class:"col-auto"},[h(N,{round:!0,dense:!0,flat:!0,icon:se.value[1],tabindex:s.value,disable:d(a),...y("y+",{onClick:()=>{oe.value+=X}})})])])}};function Ht(t){const a={...g.value,day:t};if(e.range===!1){wt(a,V.value);return}if(q.value===null){const n=je.value.find(i=>i.fill!==!0&&i.i===t);if(e.noUnset!==!0&&n.range!==void 0){Ye({target:a,from:n.range.from,to:n.range.to});return}if(n.selected===!0){Ye(a);return}const d=L(a);q.value={init:a,initHash:d,final:a,finalHash:d},l("rangeStart",R(a))}else{const n=q.value.initHash,d=L(a),i=n<=d?{from:q.value.init,to:a}:{from:a,to:q.value.init};q.value=null,be(n===d?a:{target:a,...i}),l("rangeEnd",{from:R(i.from),to:R(i.to)})}}function Ct(t){if(q.value!==null){const a={...g.value,day:t};Object.assign(q.value,{final:a,finalHash:L(a)})}}return Object.assign(u,{setToday:Ve,setView:Mt,offsetCalendar:Dt,setCalendarTo:Me,setEditingRange:_t}),()=>{const t=[h("div",{class:"q-date__content col relative-position"},[h(ne,{name:"q-transition--fade"},St[T.value])])],a=kt(r.default);return a!==void 0&&t.push(h("div",{class:"q-date__actions"},a)),e.name!==void 0&&e.disable!==!0&&I(t,"push"),h("div",{class:it.value,...yt.value},[xt(),h("div",{ref:O,class:"q-date__main col column",tabindex:-1},t)])}}}),ha=Ge({name:"QPopupProxy",props:{...Nt,breakpoint:{type:[String,Number],default:450}},emits:["show","hide"],setup(e,{slots:r,emit:l,attrs:u}){const{proxy:c}=et(),{$q:o}=c,y=$(!1),s=$(null),m=M(()=>parseInt(e.breakpoint,10)),{canShow:C}=Zt({showing:y});function v(){return o.screen.width<m.value||o.screen.height<m.value?"dialog":"menu"}const D=$(v()),F=M(()=>D.value==="menu"?{maxHeight:"99vh"}:{});J(()=>v(),x=>{y.value!==!0&&(D.value=x)});function I(x){y.value=!0,l("show",x)}function O(x){y.value=!1,D.value=v(),l("hide",x)}return Object.assign(c,{show(x){C(x)===!0&&s.value.show(x)},hide(x){s.value.hide(x)},toggle(x){s.value.toggle(x)}}),()=>{const x={ref:s,...F.value,...u,onShow:I,onHide:O};let S;return D.value==="dialog"?S=At:(S=Pt,Object.assign(x,{target:e.target,contextMenu:e.contextMenu,noParentEvent:!0,separateClosePopup:!0})),h(S,x,r.default)}}});function We(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const r=parseInt(e,10);return isNaN(r)?0:r}var ga=It({name:"close-popup",beforeMount(e,{value:r}){const l={depth:We(r),handler(u){l.depth!==0&&setTimeout(()=>{const c=Lt(e);c!==void 0&&Qt(c,u,l.depth)})},handlerKey(u){Ot(u,13)===!0&&l.handler(u)}};e.__qclosepopup=l,e.addEventListener("click",l.handler),e.addEventListener("keyup",l.handlerKey)},updated(e,{value:r,oldValue:l}){r!==l&&(e.__qclosepopup.depth=We(r))},beforeUnmount(e){const r=e.__qclosepopup;e.removeEventListener("click",r.handler),e.removeEventListener("keyup",r.handlerKey),delete e.__qclosepopup}});export{ga as C,ha as Q,ma as a};
