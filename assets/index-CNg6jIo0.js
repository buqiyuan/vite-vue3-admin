import{f}from"./index-DKcumURF.js";import{A as N,_ as $}from"./index-Bf9NpXkZ.js";import{d as S,cD as R,b as m,I as k,J as V,bQ as F,bR as A,B as e,cE as E,n as Q,y as T,o as j,ca as G,Q as x,k as a,K as t,_ as s,S as l,F as H,U as J,R as _,aW as r,aX as M,bb as p}from"./vendor-D7Y6X7_h.js";import"./is-CBsgbGQ7.js";const b=S({__name:"index",props:{...R(),strokeColor:{type:[String,Object,Function]}},setup(g){const n=g,I=m(()=>typeof n.strokeColor=="function"?{...n,strokeColor:n.strokeColor(n.percent)}:{...n,strokeColor:n.strokeColor});return(i,c)=>(k(),V(e(E),F(A(I.value)),null,16))}}),K={class:"sys-server-stat-container"},O={class:"disk-info"},W={class:"disk-info--item"},X={class:"disk-info"},q={class:"disk-info--item"},Y=S({name:"SystemMonitorServe",__name:"index",setup(g){let n;const I=Q({runtime:{os:"",arch:"",nodeVersion:"",npmVersion:""},disk:{size:0,used:0,available:0},memory:{total:0,available:0},cpu:{manufacturer:"",brand:"",physicalCores:0,model:"",speed:0,rawCurrentLoad:0,rawCurrentLoadIdle:0,coresLoad:[]}}),{runtime:i,disk:c,memory:u,cpu:d}=T(I),h=m(()=>({size:f(c.value.size),used:f(c.value.used),available:f(c.value.available)})),y=m(()=>({total:f(u.value.total),free:f(u.value.available),used:f(u.value.total-u.value.available)})),B=m(()=>c.value.size<=0?0:Math.floor(c.value.used/c.value.size*100)),U=m(()=>u.value.total<=0?0:Math.floor((u.value.total-u.value.available)/u.value.total*100)),D=m(()=>`${d.value.manufacturer} ${d.value.brand} @ ${d.value.speed}GHz`),z=async()=>{const o=await N.systemServe.serveStat();i.value=o.runtime,c.value=o.disk,u.value=o.memory,d.value=o.cpu};z();const v=o=>o<30?"#5cb87a":o<70?"#e6a23c":"#f53f3f",L=(o,C)=>C<=0?0:Math.floor(o/C*100);return j(()=>{n=setInterval(z,1e4)}),G(()=>{clearInterval(n)}),(o,C)=>(k(),x("div",K,[a(e(p),{class:"stat-card",title:"运行环境"},{default:t(()=>[a(e(r),{column:1,"label-style":{width:"50%"}},{default:t(()=>[a(e(r).Item,{label:"操作系统"},{default:t(()=>[s(l(e(i).os),1)]),_:1}),a(e(r).Item,{label:"系统架构"},{default:t(()=>[s(l(e(i).arch),1)]),_:1}),a(e(r).Item,{label:"Node版本"},{default:t(()=>[a(e(M),{color:"processing",size:"small"},{default:t(()=>[s("v"+l(e(i).nodeVersion),1)]),_:1})]),_:1}),a(e(r).Item,{label:"NPM版本"},{default:t(()=>[a(e(M),{color:"processing",size:"small"},{default:t(()=>[s("v"+l(e(i).npmVersion),1)]),_:1})]),_:1})]),_:1})]),_:1}),a(e(p),{class:"stat-card",title:"CPU"},{default:t(()=>[a(e(r),{column:1,"label-style":{width:"50%"},"content-style":{width:"50%"}},{default:t(()=>[a(e(r).Item,{label:"详细"},{default:t(()=>[s(l(D.value),1)]),_:1}),a(e(r).Item,{label:"负载"},{default:t(()=>[a(b,{percent:L(e(d).rawCurrentLoad,e(d).rawCurrentLoadIdle+e(d).rawCurrentLoad),"stroke-color":v},null,8,["percent"])]),_:1}),(k(!0),x(H,null,J(e(d).coresLoad,(w,P)=>(k(),V(e(r).Item,{key:P,label:`核心${P+1} 负载`},{default:t(()=>[a(b,{percent:L(w.rawLoad,w.rawLoad+w.rawLoadIdle),"stroke-color":v},null,8,["percent"])]),_:2},1032,["label"]))),128))]),_:1})]),_:1}),a(e(p),{class:"stat-card",title:"磁盘"},{default:t(()=>[_("div",O,[a(e(r),{class:"disk-info--item",column:1},{default:t(()=>[a(e(r).Item,{label:"总空间"},{default:t(()=>[s(l(h.value.size),1)]),_:1}),a(e(r).Item,{label:"已用空间"},{default:t(()=>[s(l(h.value.used),1)]),_:1}),a(e(r).Item,{label:"可用空间"},{default:t(()=>[s(l(h.value.available),1)]),_:1})]),_:1}),_("div",W,[a(b,{type:"dashboard",percent:B.value,width:100,"stroke-color":v},null,8,["percent"])])])]),_:1}),a(e(p),{class:"stat-card",title:"内存"},{default:t(()=>[_("div",X,[a(e(r),{class:"disk-info--item",column:1},{default:t(()=>[a(e(r).Item,{label:"总内存"},{default:t(()=>[s(l(y.value.total),1)]),_:1}),a(e(r).Item,{label:"已用内存"},{default:t(()=>[s(l(y.value.used),1)]),_:1}),a(e(r).Item,{label:"可用内存"},{default:t(()=>[s(l(y.value.free),1)]),_:1})]),_:1}),_("div",q,[a(b,{type:"dashboard",percent:U.value,width:100,"stroke-color":v},null,8,["percent"])])])]),_:1})]))}}),re=$(Y,[["__scopeId","data-v-6f1f0887"]]);export{re as default};