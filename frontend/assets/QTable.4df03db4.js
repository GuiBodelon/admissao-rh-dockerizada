import{h as r,s as D,v as Q,a8 as bt,M as Me,g as N,c,r as A,w as V,aV as De,o as je,a1 as mt,a0 as St,t as Ee,B as Be,E as pe,aw as yt,av as ht,aA as _t,aT as Oe,a$ as be,b0 as Fe,a_ as wt,I as Qe,b1 as qt,Y as H,P as ee}from"./index.0d0f87fb.js";import{a as Ct,b as Pt}from"./QBadge.b6ac2ab9.js";import{u as me,a as Se}from"./use-dark.e4883e2c.js";import{u as kt,c as Rt,d as Ae,a as Tt}from"./QSelect.e547e6ab.js";import{g as xt}from"./scroll.b97062e5.js";import{Q as ge}from"./QCheckbox.1610cb1b.js";const Bt=r("div",{class:"q-space"});var cl=D({name:"QSpace",setup(){return()=>Bt}}),Ot=D({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:l,emit:a}){const d=N(),{proxy:{$q:o}}=d,f=s=>{a("click",s)};return()=>{if(e.props===void 0)return r("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:f},Q(l.default));let s,u;const v=d.vnode.key;if(v){if(s=e.props.colsMap[v],s===void 0)return}else s=e.props.col;if(s.sortable===!0){const n=s.align==="right"?"unshift":"push";u=bt(l.default,[]),u[n](r(Me,{class:s.__iconClass,name:o.iconSet.table.arrowUp}))}else u=Q(l.default);const S={class:s.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:s.headerStyle,onClick:n=>{s.sortable===!0&&e.props.sort(s),f(n)}};return r("th",S,u)}}}),dl=D({name:"QTr",props:{props:Object,noHover:Boolean},setup(e,{slots:l}){const a=c(()=>"q-tr"+(e.props===void 0||e.props.header===!0?"":" "+e.props.__trClass)+(e.noHover===!0?" q-tr--no-hover":""));return()=>r("tr",{class:a.value},Q(l.default))}}),vl=D({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:l}){const a=N(),d=c(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return r("td",{class:d.value},Q(l.default));const o=a.vnode.key,f=(e.props.colsMap!==void 0?e.props.colsMap[o]:null)||e.props.col;if(f===void 0)return;const{row:s}=e.props;return r("td",{class:d.value+f.__tdClass(s),style:f.__tdStyle(s)},Q(l.default))}}});const Ft=["horizontal","vertical","cell","none"];var $t=D({name:"QMarkupTable",props:{...me,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>Ft.includes(e)}},setup(e,{slots:l}){const a=N(),d=Se(e,a.proxy.$q),o=c(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(d.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>r("div",{class:o.value},[r("table",{class:"q-table"},Q(l.default))])}});function Ne(e,l){return r("div",e,[r("table",{class:"q-table"},l)])}const Lt={list:Ct,table:$t},Vt=["list","table","__qtable"];var Mt=D({name:"QVirtualScroll",props:{...kt,type:{type:String,default:"list",validator:e=>Vt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:l,attrs:a}){let d;const o=A(null),f=c(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:s,localResetVirtualScroll:u,padVirtualScroll:v,onVirtualScrollEvt:S}=Rt({virtualScrollLength:f,getVirtualScrollTarget:C,getVirtualScrollEl:q}),n=c(()=>{if(f.value===0)return[];const O=(F,R)=>({index:s.value.from+R,item:F});return e.itemsFn===void 0?e.items.slice(s.value.from,s.value.to).map(O):e.itemsFn(s.value.from,s.value.to-s.value.from).map(O)}),m=c(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),w=c(()=>e.scrollTarget!==void 0?{}:{tabindex:0});V(f,()=>{u()}),V(()=>e.scrollTarget,()=>{_(),h()});function q(){return o.value.$el||o.value}function C(){return d}function h(){d=xt(q(),e.scrollTarget),d.addEventListener("scroll",S,Be.passive)}function _(){d!==void 0&&(d.removeEventListener("scroll",S,Be.passive),d=void 0)}function B(){let O=v(e.type==="list"?"div":"tbody",n.value.map(l.default));return l.before!==void 0&&(O=l.before().concat(O)),pe(l.after,O)}return De(()=>{u()}),je(()=>{h()}),mt(()=>{h()}),St(()=>{_()}),Ee(()=>{_()}),()=>{if(l.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?Ne({ref:o,class:"q-table__middle "+m.value},B()):r(Lt[e.type],{...a,ref:o,class:[a.class,m.value],...w.value},B)}}});const Dt={xs:2,sm:4,md:6,lg:10,xl:14};function $e(e,l,a){return{transform:l===!0?`translateX(${a.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var jt=D({name:"QLinearProgress",props:{...me,...yt,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:l}){const{proxy:a}=N(),d=Se(e,a.$q),o=ht(e,Dt),f=c(()=>e.indeterminate===!0||e.query===!0),s=c(()=>e.reverse!==e.query),u=c(()=>({...o.value!==null?o.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),v=c(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),S=c(()=>$e(e.buffer!==void 0?e.buffer:1,s.value,a.$q)),n=c(()=>`q-linear-progress__track absolute-full q-linear-progress__track--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__track--${d.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),m=c(()=>$e(f.value===!0?1:e.value,s.value,a.$q)),w=c(()=>`q-linear-progress__model absolute-full q-linear-progress__model--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__model--${f.value===!0?"in":""}determinate`),q=c(()=>({width:`${e.value*100}%`})),C=c(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"}`);return()=>{const h=[r("div",{class:n.value,style:S.value}),r("div",{class:w.value,style:m.value})];return e.stripe===!0&&f.value===!1&&h.push(r("div",{class:C.value,style:q.value})),r("div",{class:v.value,style:u.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},pe(l.default,h))}}});let z=0;const Et={fullscreen:Boolean,noRouteFullscreenExit:Boolean},pt=["update:fullscreen","fullscreen"];function Qt(){const e=N(),{props:l,emit:a,proxy:d}=e;let o,f,s;const u=A(!1);_t(e)===!0&&V(()=>d.$route.fullPath,()=>{l.noRouteFullscreenExit!==!0&&n()}),V(()=>l.fullscreen,m=>{u.value!==m&&v()}),V(u,m=>{a("update:fullscreen",m),a("fullscreen",m)});function v(){u.value===!0?n():S()}function S(){u.value!==!0&&(u.value=!0,s=d.$el.parentNode,s.replaceChild(f,d.$el),document.body.appendChild(d.$el),z++,z===1&&document.body.classList.add("q-body--fullscreen-mixin"),o={handler:n},Oe.add(o))}function n(){u.value===!0&&(o!==void 0&&(Oe.remove(o),o=void 0),s.replaceChild(d.$el,f),u.value=!1,z=Math.max(0,z-1),z===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),d.$el.scrollIntoView!==void 0&&setTimeout(()=>{d.$el.scrollIntoView()})))}return De(()=>{f=document.createElement("span")}),je(()=>{l.fullscreen===!0&&S()}),Ee(n),Object.assign(d,{toggleFullscreen:v,setFullscreen:S,exitFullscreen:n}),{inFullscreen:u,toggleFullscreen:v}}function At(e,l){return new Date(e)-new Date(l)}const Nt={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Ht(e,l,a,d){const o=c(()=>{const{sortBy:u}=l.value;return u&&a.value.find(v=>v.name===u)||null}),f=c(()=>e.sortMethod!==void 0?e.sortMethod:(u,v,S)=>{const n=a.value.find(q=>q.name===v);if(n===void 0||n.field===void 0)return u;const m=S===!0?-1:1,w=typeof n.field=="function"?q=>n.field(q):q=>q[n.field];return u.sort((q,C)=>{let h=w(q),_=w(C);return h==null?-1*m:_==null?1*m:n.sort!==void 0?n.sort(h,_,q,C)*m:be(h)===!0&&be(_)===!0?(h-_)*m:Fe(h)===!0&&Fe(_)===!0?At(h,_)*m:typeof h=="boolean"&&typeof _=="boolean"?(h-_)*m:([h,_]=[h,_].map(B=>(B+"").toLocaleString().toLowerCase()),h<_?-1*m:h===_?0:m)})});function s(u){let v=e.columnSortOrder;if(wt(u)===!0)u.sortOrder&&(v=u.sortOrder),u=u.name;else{const m=a.value.find(w=>w.name===u);m!==void 0&&m.sortOrder&&(v=m.sortOrder)}let{sortBy:S,descending:n}=l.value;S!==u?(S=u,n=v==="da"):e.binaryStateSort===!0?n=!n:n===!0?v==="ad"?S=null:n=!1:v==="ad"?n=!0:S=null,d({sortBy:S,descending:n,page:1})}return{columnToSort:o,computedSortMethod:f,sort:s}}const zt={filter:[String,Object],filterMethod:Function};function Ut(e,l){const a=c(()=>e.filterMethod!==void 0?e.filterMethod:(d,o,f,s)=>{const u=o?o.toLowerCase():"";return d.filter(v=>f.some(S=>{const n=s(S,v)+"";return(n==="undefined"||n==="null"?"":n.toLowerCase()).indexOf(u)!==-1}))});return V(()=>e.filter,()=>{Qe(()=>{l({page:1},!0)})},{deep:!0}),{computedFilterMethod:a}}function It(e,l){for(const a in l)if(l[a]!==e[a])return!1;return!0}function Le(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const Wt={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function Kt(e,l){const{props:a,emit:d}=e,o=A(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:a.rowsPerPageOptions.length>0?a.rowsPerPageOptions[0]:5},a.pagination)),f=c(()=>{const n=a["onUpdate:pagination"]!==void 0?{...o.value,...a.pagination}:o.value;return Le(n)}),s=c(()=>f.value.rowsNumber!==void 0);function u(n){v({pagination:n,filter:a.filter})}function v(n={}){Qe(()=>{d("request",{pagination:n.pagination||f.value,filter:n.filter||a.filter,getCellValue:l})})}function S(n,m){const w=Le({...f.value,...n});if(It(f.value,w)===!0){s.value===!0&&m===!0&&u(w);return}if(s.value===!0){u(w);return}a.pagination!==void 0&&a["onUpdate:pagination"]!==void 0?d("update:pagination",w):o.value=w}return{innerPagination:o,computedPagination:f,isServerSide:s,requestServerInteraction:v,setPagination:S}}function Gt(e,l,a,d,o,f){const{props:s,emit:u,proxy:{$q:v}}=e,S=c(()=>d.value===!0?a.value.rowsNumber||0:f.value),n=c(()=>{const{page:R,rowsPerPage:T}=a.value;return(R-1)*T}),m=c(()=>{const{page:R,rowsPerPage:T}=a.value;return R*T}),w=c(()=>a.value.page===1),q=c(()=>a.value.rowsPerPage===0?1:Math.max(1,Math.ceil(S.value/a.value.rowsPerPage))),C=c(()=>m.value===0?!0:a.value.page>=q.value),h=c(()=>(s.rowsPerPageOptions.includes(l.value.rowsPerPage)?s.rowsPerPageOptions:[l.value.rowsPerPage].concat(s.rowsPerPageOptions)).map(T=>({label:T===0?v.lang.table.allRows:""+T,value:T})));V(q,(R,T)=>{if(R===T)return;const U=a.value.page;R&&!U?o({page:1}):R<U&&o({page:R})});function _(){o({page:1})}function B(){const{page:R}=a.value;R>1&&o({page:R-1})}function O(){const{page:R,rowsPerPage:T}=a.value;m.value>0&&R*T<S.value&&o({page:R+1})}function F(){o({page:q.value})}return s["onUpdate:pagination"]!==void 0&&u("update:pagination",{...a.value}),{firstRowIndex:n,lastRowIndex:m,isFirstPage:w,isLastPage:C,pagesNumber:q,computedRowsPerPageOptions:h,computedRowsNumber:S,firstPage:_,prevPage:B,nextPage:O,lastPage:F}}const Xt={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},Yt=["update:selected","selection"];function Jt(e,l,a,d){const o=c(()=>{const C={};return e.selected.map(d.value).forEach(h=>{C[h]=!0}),C}),f=c(()=>e.selection!=="none"),s=c(()=>e.selection==="single"),u=c(()=>e.selection==="multiple"),v=c(()=>a.value.length>0&&a.value.every(C=>o.value[d.value(C)]===!0)),S=c(()=>v.value!==!0&&a.value.some(C=>o.value[d.value(C)]===!0)),n=c(()=>e.selected.length);function m(C){return o.value[C]===!0}function w(){l("update:selected",[])}function q(C,h,_,B){l("selection",{rows:h,added:_,keys:C,evt:B});const O=s.value===!0?_===!0?h:[]:_===!0?e.selected.concat(h):e.selected.filter(F=>C.includes(d.value(F))===!1);l("update:selected",O)}return{hasSelectionMode:f,singleSelection:s,multipleSelection:u,allRowsSelected:v,someRowsSelected:S,rowsSelectedNumber:n,isRowSelected:m,clearSelection:w,updateSelection:q}}function Ve(e){return Array.isArray(e)?e.slice():[]}const Zt={expanded:Array},el=["update:expanded"];function tl(e,l){const a=A(Ve(e.expanded));V(()=>e.expanded,s=>{a.value=Ve(s)});function d(s){return a.value.includes(s)}function o(s){e.expanded!==void 0?l("update:expanded",s):a.value=s}function f(s,u){const v=a.value.slice(),S=v.indexOf(s);u===!0?S===-1&&(v.push(s),o(v)):S!==-1&&(v.splice(S,1),o(v))}return{isRowExpanded:d,setExpanded:o,updateExpanded:f}}const ll={visibleColumns:Array};function al(e,l,a){const d=c(()=>{if(e.columns!==void 0)return e.columns;const u=e.rows[0];return u!==void 0?Object.keys(u).map(v=>({name:v,label:v.toUpperCase(),field:v,align:be(u[v])?"right":"left",sortable:!0})):[]}),o=c(()=>{const{sortBy:u,descending:v}=l.value;return(e.visibleColumns!==void 0?d.value.filter(n=>n.required===!0||e.visibleColumns.includes(n.name)===!0):d.value).map(n=>{const m=n.align||"right",w=`text-${m}`;return{...n,align:m,__iconClass:`q-table__sort-icon q-table__sort-icon--${m}`,__thClass:w+(n.headerClasses!==void 0?" "+n.headerClasses:"")+(n.sortable===!0?" sortable":"")+(n.name===u?` sorted ${v===!0?"sort-desc":""}`:""),__tdStyle:n.style!==void 0?typeof n.style!="function"?()=>n.style:n.style:()=>null,__tdClass:n.classes!==void 0?typeof n.classes!="function"?()=>w+" "+n.classes:q=>w+" "+n.classes(q):()=>w}})}),f=c(()=>{const u={};return o.value.forEach(v=>{u[v.name]=v}),u}),s=c(()=>e.tableColspan!==void 0?e.tableColspan:o.value.length+(a.value===!0?1:0));return{colList:d,computedCols:o,computedColsMap:f,computedColspan:s}}const te="q-table__bottom row items-center",He={};Ae.forEach(e=>{He[e]={}});var fl=D({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...He,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...me,...Et,...ll,...zt,...Wt,...Zt,...Xt,...Nt},emits:["request","virtualScroll",...pt,...el,...Yt],setup(e,{slots:l,emit:a}){const d=N(),{proxy:{$q:o}}=d,f=Se(e,o),{inFullscreen:s,toggleFullscreen:u}=Qt(),v=c(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),S=A(null),n=A(null),m=c(()=>e.grid!==!0&&e.virtualScroll===!0),w=c(()=>" q-table__card"+(f.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),q=c(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":w.value)+(f.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(s.value===!0?" fullscreen scroll":"")),C=c(()=>q.value+(e.loading===!0?" q-table--loading":""));V(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+q.value,()=>{m.value===!0&&n.value!==null&&n.value.reset()});const{innerPagination:h,computedPagination:_,isServerSide:B,requestServerInteraction:O,setPagination:F}=Kt(d,E),{computedFilterMethod:R}=Ut(e,F),{isRowExpanded:T,setExpanded:U,updateExpanded:ze}=tl(e,a),le=c(()=>{let t=e.rows;if(B.value===!0||t.length===0)return t;const{sortBy:i,descending:g}=_.value;return e.filter&&(t=R.value(t,e.filter,$.value,E)),Ge.value!==null&&(t=Xe.value(e.rows===t?t.slice():t,i,g)),t}),ye=c(()=>le.value.length),M=c(()=>{let t=le.value;if(B.value===!0)return t;const{rowsPerPage:i}=_.value;return i!==0&&(W.value===0&&e.rows!==t?t.length>K.value&&(t=t.slice(0,K.value)):t=t.slice(W.value,K.value)),t}),{hasSelectionMode:j,singleSelection:Ue,multipleSelection:he,allRowsSelected:Ie,someRowsSelected:_e,rowsSelectedNumber:ae,isRowSelected:ne,clearSelection:We,updateSelection:I}=Jt(e,a,M,v),{colList:Ke,computedCols:$,computedColsMap:we,computedColspan:qe}=al(e,_,j),{columnToSort:Ge,computedSortMethod:Xe,sort:re}=Ht(e,_,Ke,F),{firstRowIndex:W,lastRowIndex:K,isFirstPage:oe,isLastPage:ie,pagesNumber:G,computedRowsPerPageOptions:Ye,computedRowsNumber:X,firstPage:se,prevPage:ue,nextPage:ce,lastPage:de}=Gt(d,h,_,B,F,ye),Je=c(()=>M.value.length===0),Ze=c(()=>{const t={};return Ae.forEach(i=>{t[i]=e[i]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function et(){m.value===!0&&n.value.reset()}function tt(){if(e.grid===!0)return ft();const t=e.hideHeader!==!0?Te:null;if(m.value===!0){const g=l["top-row"],b=l["bottom-row"],y={default:k=>Pe(k.item,l.body,k.index)};if(g!==void 0){const k=r("tbody",g({cols:$.value}));y.before=t===null?()=>k:()=>[t()].concat(k)}else t!==null&&(y.before=t);return b!==void 0&&(y.after=()=>r("tbody",b({cols:$.value}))),r(Mt,{ref:n,class:e.tableClass,style:e.tableStyle,...Ze.value,scrollTarget:e.virtualScrollTarget,items:M.value,type:"__qtable",tableColspan:qe.value,onVirtualScroll:at},y)}const i=[nt()];return t!==null&&i.unshift(t()),Ne({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},i)}function lt(t,i){if(n.value!==null){n.value.scrollTo(t,i);return}t=parseInt(t,10);const g=S.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(g!==null){const b=S.value.querySelector(".q-table__middle.scroll"),y=g.offsetTop-e.virtualScrollStickySizeStart,k=y<b.scrollTop?"decrease":"increase";b.scrollTop=y,a("virtualScroll",{index:t,from:0,to:h.value.rowsPerPage-1,direction:k})}}function at(t){a("virtualScroll",t)}function Ce(){return[r(jt,{class:"q-table__linear-progress",color:e.color,dark:f.value,indeterminate:!0,trackColor:"transparent"})]}function Pe(t,i,g){const b=v.value(t),y=ne(b);if(i!==void 0)return i(ke({key:b,row:t,pageIndex:g,__trClass:y?"selected":""}));const k=l["body-cell"],P=$.value.map(x=>{const J=l[`body-cell-${x.name}`],Z=J!==void 0?J:k;return Z!==void 0?Z(rt({key:b,row:t,pageIndex:g,col:x})):r("td",{class:x.__tdClass(t),style:x.__tdStyle(t)},E(x,t))});if(j.value===!0){const x=l["body-selection"],J=x!==void 0?x(ot({key:b,row:t,pageIndex:g})):[r(ge,{modelValue:y,color:e.color,dark:f.value,dense:e.dense,"onUpdate:modelValue":(Z,gt)=>{I([b],[t],Z,gt)}})];P.unshift(r("td",{class:"q-table--col-auto-width"},J))}const L={key:b,class:{selected:y}};return e.onRowClick!==void 0&&(L.class["cursor-pointer"]=!0,L.onClick=x=>{a("RowClick",x,t,g)}),e.onRowDblclick!==void 0&&(L.class["cursor-pointer"]=!0,L.onDblclick=x=>{a("RowDblclick",x,t,g)}),e.onRowContextmenu!==void 0&&(L.class["cursor-pointer"]=!0,L.onContextmenu=x=>{a("RowContextmenu",x,t,g)}),r("tr",L,P)}function nt(){const t=l.body,i=l["top-row"],g=l["bottom-row"];let b=M.value.map((y,k)=>Pe(y,t,k));return i!==void 0&&(b=i({cols:$.value}).concat(b)),g!==void 0&&(b=b.concat(g({cols:$.value}))),r("tbody",b)}function ke(t){return ve(t),t.cols=t.cols.map(i=>H({...i},"value",()=>E(i,t.row))),t}function rt(t){return ve(t),H(t,"value",()=>E(t.col,t.row)),t}function ot(t){return ve(t),t}function ve(t){Object.assign(t,{cols:$.value,colsMap:we.value,sort:re,rowIndex:W.value+t.pageIndex,color:e.color,dark:f.value,dense:e.dense}),j.value===!0&&H(t,"selected",()=>ne(t.key),(i,g)=>{I([t.key],[t.row],i,g)}),H(t,"expand",()=>T(t.key),i=>{ze(t.key,i)})}function E(t,i){const g=typeof t.field=="function"?t.field(i):i[t.field];return t.format!==void 0?t.format(g,i):g}const p=c(()=>({pagination:_.value,pagesNumber:G.value,isFirstPage:oe.value,isLastPage:ie.value,firstPage:se,prevPage:ue,nextPage:ce,lastPage:de,inFullscreen:s.value,toggleFullscreen:u}));function it(){const t=l.top,i=l["top-left"],g=l["top-right"],b=l["top-selection"],y=j.value===!0&&b!==void 0&&ae.value>0,k="q-table__top relative-position row items-center";if(t!==void 0)return r("div",{class:k},[t(p.value)]);let P;if(y===!0?P=b(p.value).slice():(P=[],i!==void 0?P.push(r("div",{class:"q-table-control"},[i(p.value)])):e.title&&P.push(r("div",{class:"q-table__control"},[r("div",{class:["q-table__title",e.titleClass]},e.title)]))),g!==void 0&&(P.push(r("div",{class:"q-table__separator col"})),P.push(r("div",{class:"q-table__control"},[g(p.value)]))),P.length!==0)return r("div",{class:k},P)}const Re=c(()=>_e.value===!0?null:Ie.value);function Te(){const t=st();return e.loading===!0&&l.loading===void 0&&t.push(r("tr",{class:"q-table__progress"},[r("th",{class:"relative-position",colspan:qe.value},Ce())])),r("thead",t)}function st(){const t=l.header,i=l["header-cell"];if(t!==void 0)return t(fe({header:!0})).slice();const g=$.value.map(b=>{const y=l[`header-cell-${b.name}`],k=y!==void 0?y:i,P=fe({col:b});return k!==void 0?k(P):r(Ot,{key:b.name,props:P},()=>b.label)});if(Ue.value===!0&&e.grid!==!0)g.unshift(r("th",{class:"q-table--col-auto-width"}," "));else if(he.value===!0){const b=l["header-selection"],y=b!==void 0?b(fe({})):[r(ge,{color:e.color,modelValue:Re.value,dark:f.value,dense:e.dense,"onUpdate:modelValue":xe})];g.unshift(r("th",{class:"q-table--col-auto-width"},y))}return[r("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},g)]}function fe(t){return Object.assign(t,{cols:$.value,sort:re,colsMap:we.value,color:e.color,dark:f.value,dense:e.dense}),he.value===!0&&H(t,"selected",()=>Re.value,xe),t}function xe(t){_e.value===!0&&(t=!1),I(M.value.map(v.value),M.value,t)}const Y=c(()=>{const t=[e.iconFirstPage||o.iconSet.table.firstPage,e.iconPrevPage||o.iconSet.table.prevPage,e.iconNextPage||o.iconSet.table.nextPage,e.iconLastPage||o.iconSet.table.lastPage];return o.lang.rtl===!0?t.reverse():t});function ut(){if(e.hideBottom===!0)return;if(Je.value===!0){if(e.hideNoData===!0)return;const g=e.loading===!0?e.loadingLabel||o.lang.table.loading:e.filter?e.noResultsLabel||o.lang.table.noResults:e.noDataLabel||o.lang.table.noData,b=l["no-data"],y=b!==void 0?[b({message:g,icon:o.iconSet.table.warning,filter:e.filter})]:[r(Me,{class:"q-table__bottom-nodata-icon",name:o.iconSet.table.warning}),g];return r("div",{class:te+" q-table__bottom--nodata"},y)}const t=l.bottom;if(t!==void 0)return r("div",{class:te},[t(p.value)]);const i=e.hideSelectedBanner!==!0&&j.value===!0&&ae.value>0?[r("div",{class:"q-table__control"},[r("div",[(e.selectedRowsLabel||o.lang.table.selectedRecords)(ae.value)])])]:[];if(e.hidePagination!==!0)return r("div",{class:te+" justify-end"},dt(i));if(i.length>0)return r("div",{class:te},i)}function ct(t){F({page:1,rowsPerPage:t.value})}function dt(t){let i;const{rowsPerPage:g}=_.value,b=e.paginationLabel||o.lang.table.pagination,y=l.pagination,k=e.rowsPerPageOptions.length>1;if(t.push(r("div",{class:"q-table__separator col"})),k===!0&&t.push(r("div",{class:"q-table__control"},[r("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||o.lang.table.recordsPerPage]),r(Tt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:g,options:Ye.value,displayValue:g===0?o.lang.table.allRows:g,dark:f.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":ct})])),y!==void 0)i=y(p.value);else if(i=[r("span",g!==0?{class:"q-table__bottom-item"}:{},[g?b(W.value+1,Math.min(K.value,X.value),X.value):b(1,ye.value,X.value)])],g!==0&&G.value>1){const P={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(P.size="sm"),G.value>2&&i.push(r(ee,{key:"pgFirst",...P,icon:Y.value[0],disable:oe.value,onClick:se})),i.push(r(ee,{key:"pgPrev",...P,icon:Y.value[1],disable:oe.value,onClick:ue}),r(ee,{key:"pgNext",...P,icon:Y.value[2],disable:ie.value,onClick:ce})),G.value>2&&i.push(r(ee,{key:"pgLast",...P,icon:Y.value[3],disable:ie.value,onClick:de}))}return t.push(r("div",{class:"q-table__control"},i)),t}function vt(){const t=e.gridHeader===!0?[r("table",{class:"q-table"},[Te()])]:e.loading===!0&&l.loading===void 0?Ce():void 0;return r("div",{class:"q-table__middle"},t)}function ft(){const t=l.item!==void 0?l.item:i=>{const g=i.cols.map(y=>r("div",{class:"q-table__grid-item-row"},[r("div",{class:"q-table__grid-item-title"},[y.label]),r("div",{class:"q-table__grid-item-value"},[y.value])]));if(j.value===!0){const y=l["body-selection"],k=y!==void 0?y(i):[r(ge,{modelValue:i.selected,color:e.color,dark:f.value,dense:e.dense,"onUpdate:modelValue":(P,L)=>{I([i.key],[i.row],P,L)}})];g.unshift(r("div",{class:"q-table__grid-item-row"},k),r(Pt,{dark:f.value}))}const b={class:["q-table__grid-item-card"+w.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(b.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(b.onClick=y=>{a("RowClick",y,i.row,i.pageIndex)}),e.onRowDblclick!==void 0&&(b.onDblclick=y=>{a("RowDblclick",y,i.row,i.pageIndex)})),r("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(i.selected===!0?" q-table__grid-item--selected":"")},[r("div",b,g)])};return r("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},M.value.map((i,g)=>t(ke({key:v.value(i),row:i,pageIndex:g}))))}return Object.assign(d.proxy,{requestServerInteraction:O,setPagination:F,firstPage:se,prevPage:ue,nextPage:ce,lastPage:de,isRowSelected:ne,clearSelection:We,isRowExpanded:T,setExpanded:U,sort:re,resetVirtualScroll:et,scrollTo:lt,getCellValue:E}),qt(d.proxy,{filteredSortedRows:()=>le.value,computedRows:()=>M.value,computedRowsNumber:()=>X.value}),()=>{const t=[it()],i={ref:S,class:C.value};return e.grid===!0?t.push(vt()):Object.assign(i,{class:[i.class,e.cardClass],style:e.cardStyle}),t.push(tt(),ut()),e.loading===!0&&l.loading!==void 0&&t.push(l.loading()),r("div",i,t)}}});export{fl as Q,cl as a,dl as b,vl as c,Ot as d};
