import{G as w,H as u}from"./index.2bf94b66.js";const a=["B","KB","MB","GB","TB","PB"];function g(o){let t=0;for(;parseInt(o,10)>=1024&&t<a.length-1;)o/=1024,++t;return`${o.toFixed(1)}${a[t]}`}function v(o,t,n){return n<=t?t:Math.min(n,Math.max(t,o))}function S(o,t,n){if(n<=t)return t;const e=n-t+1;let i=t+(o-t)%e;return i<t&&(i=e+i),i===0?0:i}function y(o,t=2,n="0"){if(o==null)return o;const e=""+o;return e.length>=t?e:new Array(t-e.length+1).join(n)+e}const p=[null,document,document.body,document.scrollingElement,document.documentElement];function b(o,t){let n=w(t);if(n===void 0){if(o==null)return window;n=o.closest(".scroll,.scroll-y,.overflow-auto")}return p.includes(n)?window:n}function h(o){return o===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:o.scrollTop}function x(o){return o===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:o.scrollLeft}function f(o,t,n=0){const e=arguments[3]===void 0?performance.now():arguments[3],i=h(o);if(n<=0){i!==t&&s(o,t);return}requestAnimationFrame(c=>{const l=c-e,d=i+(t-i)/Math.max(l,n)*l;s(o,d),d!==t&&f(o,t,n-l,c)})}function s(o,t){if(o===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,t);return}o.scrollTop=t}function E(o,t,n){if(n){f(o,t,n);return}s(o,t)}let r;function L(){if(r!==void 0)return r;const o=document.createElement("p"),t=document.createElement("div");u(o,{width:"100%",height:"200px"}),u(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(o),document.body.appendChild(t);const n=o.offsetWidth;t.style.overflow="scroll";let e=o.offsetWidth;return n===e&&(e=t.clientWidth),t.remove(),r=n-e,r}function T(o,t=!0){return!o||o.nodeType!==Node.ELEMENT_NODE?!1:t?o.scrollHeight>o.clientHeight&&(o.classList.contains("scroll")||o.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(o)["overflow-y"])):o.scrollWidth>o.clientWidth&&(o.classList.contains("scroll")||o.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(o)["overflow-x"]))}export{h as a,v as b,x as c,L as d,T as e,b as g,g as h,S as n,y as p,E as s};