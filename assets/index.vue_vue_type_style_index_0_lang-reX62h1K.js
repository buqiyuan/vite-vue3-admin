import{b as Q,y as Z}from"./index-Bf9NpXkZ.js";import{d as ee,bt as U,bu as te,bj as oe,r as X,w as V,I as Y,J as z,k as L,K as y,R as x,B as g,M as se,aq as ne,L as $,ad as le,bv as ie,a1 as ae,bw as re,_ as v,S as ce,b0 as ue,ag as de,aT as me,aU as fe,ax as pe,x as j,bx as H}from"./vendor-D7Y6X7_h.js";const he=x("br",null,null,-1),ye=x("br",null,null,-1),ge=x("br",null,null,-1),we=ee({__name:"index",props:U({...te(),fullscreen:{type:Boolean,default:!1},getContainer:{type:Function,default:()=>document.body}},{open:{type:Boolean},openModifiers:{}}),emits:U(["update:open","update:fullscreen","ok","cancel"],["update:open"]),setup(C,{emit:J}){const M=C,k=J,K=Q(),b=oe(C,"open"),r=X(M.fullscreen),O=X(""),s={top:"n-resize",left:"w-resize",right:"e-resize",bottom:"s-resize",topLeft:"nw-resize",topright:"ne-resize",bottomLeft:"sw-resize",bottomRight:"se-resize",auto:"auto"};let q=!1;const w=X(),D=()=>{b.value=!1,k("cancel")},F=async()=>{await j();const o=w.value?.querySelector(".ant-modal");o&&o.getBoundingClientRect().left<1&&(o.style.left=`${(document.documentElement.clientWidth-o.offsetWidth)/2}px`)},_=async()=>{r.value=!1,F()},A=(o,t)=>{t.style.cursor="move",t.onmousedown=H(e=>{if(r.value)return;document.body.style.userSelect="none";const c=e.clientX-o.getBoundingClientRect().left,u=e.clientY-o.getBoundingClientRect().top,n=l=>{if(r.value)return;let i=l.clientX-c,d=l.clientY-u;const f=document.documentElement.clientWidth-o.offsetWidth,p=document.documentElement.clientHeight-o.offsetHeight;i<=0&&(i=0),d<=0&&(d=0),i>=f&&(i=f),d>=p&&(d=p),o.style.left=`${Math.max(i,0)}px`,o.style.top=`${Math.max(d,0)}px`},a=()=>{document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",a),document.body.style.userSelect="auto"};document.addEventListener("mousemove",n),document.addEventListener("mouseup",a)},20)},G=async()=>{await j();const o=w.value,t=o.querySelector(".ant-modal-wrap"),e=o.querySelector(".ant-modal");if(t&&e){F();const c=e.querySelector(".ant-modal-header");c&&A(e,c),t.onmousemove=H(u=>{if(r.value)return;const n=u.clientX-e.offsetLeft,a=u.clientY-e.offsetTop,l=u.clientX-e.offsetWidth-e.offsetLeft,i=u.clientY-e.offsetHeight-e.offsetTop,d=n<=0&&n>-8,f=a<5&&a>-8,p=l>=0&&l<8,R=i>-5&&i<8;d&&a>5&&i<-5?t.style.cursor=s.left:f&&n>5&&l<-5?t.style.cursor=s.top:p&&a>5&&i<-5?t.style.cursor=s.right:R&&n>5&&l<-5?t.style.cursor=s.bottom:n>-8&&n<=5&&a<=5&&a>-8?t.style.cursor=s.topLeft:n>-8&&n<=5&&i<=5&&i>-8?t.style.cursor=s.bottomLeft:l<8&&l>=-5&&a<=5&&a>-8?t.style.cursor=s.topright:l<8&&l>=-5&&i<=5&&i>-8?t.style.cursor=s.bottomRight:t.style.cursor=s.auto},20),t.onmousedown=u=>{if(r.value)return;const{top:n,bottom:a,left:l,right:i}=e.getBoundingClientRect(),d=u.clientX-l,f=u.clientY-n,p=e.offsetWidth,R=e.offsetHeight,m=t.style.cursor,I=H(h=>{if(r.value)return;m!==s.auto&&(document.body.style.userSelect="none");const W=`${Math.max(0,h.clientX-d)}px`,S=`${Math.max(0,h.clientY-f)}px`,B=`${Math.min(i,p+l-h.clientX)}px`,T=`${Math.min(window.innerWidth-l,h.clientX-l)}px`,E=`${Math.min(a,R+n-h.clientY)}px`,P=`${Math.min(window.innerHeight-n,h.clientY-n)}px`;m===s.left?(e.style.left=W,e.style.width=B):m===s.top?(e.style.top=S,e.style.height=E):m===s.right?e.style.width=T:m===s.bottom?e.style.height=P:m===s.topLeft?(e.style.left=W,e.style.top=S,e.style.height=E,e.style.width=B):m===s.topright?(e.style.top=S,e.style.width=T,e.style.height=E):m===s.bottomLeft?(e.style.left=W,e.style.width=B,e.style.height=P):m===s.bottomRight&&(e.style.width=T,e.style.height=P),O.value=e.style.width},20),N=()=>{document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",N),document.body.style.userSelect="auto",t.style.cursor=s.auto};document.addEventListener("mousemove",I),document.addEventListener("mouseup",N)}}q=!0};return V(b,async o=>{(o&&Object.is(q,!1)||M.destroyOnClose)&&G()}),V(()=>K.fullPath,D),(o,t)=>{const e=Z;return Y(),z(ie,{to:C.getContainer()},[L(e,null,{default:y(()=>[x("div",{ref_key:"modalWrapRef",ref:w,class:le(["draggable-modal",{fullscreen:r.value}])},[L(g(ae),se(g(re)(M,["open","onCancel","onOk","onUpdate:open"]),{open:b.value,"onUpdate:open":t[2]||(t[2]=c=>b.value=c),"mask-closable":!1,"get-container":()=>w.value,width:O.value||o.width,onOk:t[3]||(t[3]=c=>k("ok")),onCancel:t[4]||(t[4]=c=>k("cancel"))}),ne({title:y(()=>[$(o.$slots,"title",{},()=>[v(ce(o.$attrs.title||"标题"),1)])]),closeIcon:y(()=>[$(o.$slots,"closeIcon",{},()=>[L(g(ue),{class:"ant-modal-operate",onClick:t[1]||(t[1]=de(()=>{},["stop"]))},{default:y(()=>[r.value?(Y(),z(g(fe),{key:1,onClick:_})):(Y(),z(g(me),{key:0,onClick:t[0]||(t[0]=c=>r.value=!0)})),L(g(pe),{onClick:D})]),_:1})])]),default:y(()=>[$(o.$slots,"default",{},()=>[v(" ① 窗口可以拖动；"),he,v(" ② 窗口可以通过八个方向改变大小；"),ye,v(" ③ 窗口可以最小化、最大化、还原、关闭；"),ge,v(" ④ 限制窗口最小宽度/高度。 ")])]),_:2},[o.$slots.footer?{name:"footer",fn:y(()=>[$(o.$slots,"footer")]),key:"0"}:void 0]),1040,["open","get-container","width"])],2)]),_:3})],8,["to"])}}});export{we as _};