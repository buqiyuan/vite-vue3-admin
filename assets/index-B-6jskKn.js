import{_ as A,a as we,b as N,c as U,d as Te,e as de,S as te,T as ae,f as J,g as W,L as me,t as Me,h as Ie,s as pe,i as Oe,j as Le,l as Pe,k as Re,m as ne,n as Ee}from"./index-Bf9NpXkZ.js";import{I as u,Q as $,V as _e,W as Ke,R as w,X as Be,Y as Ae,d as I,b as M,ak as G,J as k,K as n,k as e,B as t,aw as Fe,_ as T,S as L,ax as fe,ay as je,az as De,aA as le,aB as Ue,F as O,a8 as V,ag as ve,aC as Ve,a0 as ye,aD as he,aE as Ne,aF as P,aG as ee,r as E,w as z,U as R,aH as qe,ai as ze,aI as Je,a7 as ge,Z as j,aJ as We,aK as Ge,M as He,n as Qe,ad as Y,aL as Xe,aM as be,aN as Ye,aO as Ze,s as et,x as ke,L as Z,aP as oe,aQ as tt,aR as D,aS as at,aT as nt,aU as lt,aV as ot,aW as B,aX as se,aY as st,aZ as ut,aq as xe,a_ as rt,a$ as it,aj as ct,b0 as ue,b1 as dt,b2 as mt,a5 as pt,b3 as _t,aa as ft,b4 as F,a1 as vt,b5 as yt,b6 as ht,b7 as gt}from"./vendor-D7Y6X7_h.js";import{_ as bt}from"./logo-DigeLpG8.js";import{u as Se,b as kt}from"./tabsView-McecXQxK.js";import{_ as xt,a as Ce}from"./Icon.vue_vue_type_script_setup_true_lang-B_bz3tPt.js";import{o as q,u as St,a as Ct}from"./index-DaE14gLf.js";import{_ as $t}from"./index.vue_vue_type_style_index_0_lang-reX62h1K.js";const wt=d=>(Be("data-v-e438ff05"),d=d(),Ae(),d),Tt={class:"logo"},Mt=wt(()=>w("img",{src:bt,alt:""},null,-1)),It={class:"title"},Ot={__name:"index",props:{collapsed:{type:Boolean}},setup(d){return(m,o)=>(u(),$("div",Tt,[Mt,_e(w("h2",It,"One Piece",512),[[Ke,!d.collapsed]])]))}},re=A(Ot,[["__scopeId","data-v-e438ff05"]]),H=I({__name:"index",props:{title:{type:[String,Object],required:!0,default:""}},setup(d){const m=d,o=we(),s=M(()=>{const{title:a=""}=m;return typeof a=="object"?a?.[o.locale]??a:a});return(a,v)=>{const i=G("i18n-t");return u(),k(i,{tag:"span",keypath:s.value,scope:"global"},null,8,["keypath"])}}}),Lt=!1,Pt={key:1,style:{display:"inline-block"}},ie=I({name:"TabOperator",__name:"tabs-operator",props:{tabItem:{type:Object,required:!0},isExtra:Boolean},setup(d,{expose:m}){const o=d,s=N(),a=U(),v=Se(),i=M(()=>v.getCurrentTab?.fullPath),b=M(()=>v.getTabsList),h=_=>a.currentRoute.value.matched.some(g=>g.name===_.name),r=()=>{if(b.value.length===1)return ye.warning("这已经是最后一页，不能再关闭了！");v.closeCurrentTab(o.tabItem)},y=()=>{a.replace({name:Te,params:{path:t(s).fullPath}})},f=()=>{v.closeLeftTabs(o.tabItem),!h(o.tabItem)&&a.replace(o.tabItem.fullPath)},p=()=>{v.closeRightTabs(o.tabItem),!h(o.tabItem)&&a.replace(o.tabItem.fullPath)},c=()=>{v.closeOtherTabs(o.tabItem),!h(o.tabItem)&&a.replace(o.tabItem.fullPath)},l=()=>{localStorage.removeItem("routes"),v.closeAllTabs(),a.replace("/")},C=async()=>{{console.warn("仅在开发环境有效");return}};return m({removeTab:r}),(_,g)=>{const x=he,S=Ne,K=P,Q=ee;return u(),k(Q,{trigger:[d.isExtra?"click":"contextmenu"]},{overlay:n(()=>[e(K,{style:{"user-select":"none"}},{default:n(()=>[e(x,{key:"1",disabled:i.value!==d.tabItem.fullPath,onClick:y},{default:n(()=>[e(t(Fe)),T(" "+L(_.$t("layout.multipleTab.reload")),1)]),_:1},8,["disabled"]),e(x,{key:"2",onClick:r},{default:n(()=>[e(t(fe)),T(" "+L(_.$t("layout.multipleTab.close")),1)]),_:1}),e(S),e(x,{key:"3",onClick:f},{default:n(()=>[e(t(je)),T(" "+L(_.$t("layout.multipleTab.closeLeft")),1)]),_:1}),e(x,{key:"4",onClick:p},{default:n(()=>[e(t(De)),T(" "+L(_.$t("layout.multipleTab.closeRight")),1)]),_:1}),e(S),e(x,{key:"5",onClick:c},{default:n(()=>[e(t(le)),T(" "+L(_.$t("layout.multipleTab.closeOther")),1)]),_:1}),e(x,{key:"6",onClick:l},{default:n(()=>[e(t(Ue)),T(" "+L(_.$t("layout.multipleTab.closeAll")),1)]),_:1}),t(Lt)?(u(),$(O,{key:0},[e(S),e(x,{key:"7",onClick:C},{default:n(()=>[e(t(le)),T(" 打开页面文件 ")]),_:1})],64)):V("",!0)]),_:1})]),default:n(()=>[d.isExtra?(u(),$("a",{key:0,class:"ant-dropdown-link",onClick:g[0]||(g[0]=ve(()=>{},["prevent"]))},[e(t(Ve),{style:{fontSize:"20px"}})])):(u(),$("div",Pt,[e(t(H),{title:d.tabItem.meta?.title},null,8,["title"])]))]),_:1},8,["trigger"])}}}),Rt={class:"tabs-view"},Et=I({__name:"tabs-view",setup(d){const m=N(),o=U(),s=Se(),a=de(),v={},i=E("auto"),b=M(()=>s.getCurrentTab?.fullPath),h=M(()=>s.getTabsList),r=M(()=>a.list),y=l=>{const{fullPath:C,hash:_,meta:g,name:x,params:S,path:K,query:Q}=l;return{fullPath:C,hash:_,meta:g,name:x,params:S,path:K,query:Q}};let f=[];try{const l=te.get(ae);f=l?JSON.parse(l).filter(Boolean):[y(m)]}catch{f=[y(m)]}s.initTabs(f),z(()=>m.fullPath,()=>{kt.some(l=>l===m.name)||s.addTabs(y(m))},{immediate:!0}),window.addEventListener("beforeunload",()=>{s.getCurrentTab&&te.set(ae,JSON.stringify([s.getCurrentTab]))});const p=(l,C)=>{C=="remove"&&v[l]?.removeTab()},c=l=>{Object.is(m.fullPath,l)||o.push(l)};return(l,C)=>{const _=We,g=Ge,x=G("router-view");return u(),$("div",Rt,[e(g,{"active-key":b.value,"hide-add":"",type:"editable-card",class:"tabs",onChange:c,onEdit:p},{rightExtra:n(()=>[e(ie,{"tab-item":t(m),"is-extra":!0},null,8,["tab-item"])]),default:n(()=>[(u(!0),$(O,null,R(h.value,S=>(u(),k(_,{key:S.fullPath},{tab:n(()=>[e(ie,{ref_for:!0,ref:K=>v[S.fullPath]=K,"tab-item":S},null,8,["tab-item"])]),_:2},1024))),128))]),_:1},8,["active-key"]),w("div",{class:"tabs-view-content",style:j({overflow:i.value})},[e(x,null,{default:n(({Component:S})=>[S?(u(),k(qe,{key:0},{fallback:n(()=>[T(" 正在加载... ")]),default:n(()=>[e(ze,{name:"fade-slide",mode:"out-in",appear:"",onBeforeLeave:C[0]||(C[0]=K=>i.value="hidden"),onAfterLeave:C[1]||(C[1]=K=>i.value="auto")},{default:n(()=>[(u(),k(Je,{include:r.value},[(u(),k(ge(S),{key:t(m).fullPath}))],1032,["include"]))]),_:2},1024)]),_:2},1024)):V("",!0)]),_:1})],4)])}}}),Kt=A(Et,[["__scopeId","data-v-b3601f78"]]),$e=I({name:"MenuItemContent",__name:"menu-item-content",props:{item:{type:Object,default:()=>({})}},setup(d){return(m,o)=>(u(),$(O,null,[d.item?.meta?.icon?(u(),k(t(xt),{key:0,icon:d.item.meta.icon},null,8,["icon"])):V("",!0),e(t(H),{title:d.item?.meta?.title},null,8,["title"])],64))}}),Bt=I({name:"MyMenuItem",__name:"menu-item",props:{item:{type:Object,default:()=>({})}},setup(d){const m=o=>{const{isExt:s,extOpenMode:a}=o.meta||{};s&&a!==2&&window.open(o.path)};return(o,s)=>(u(),k(t(P).Item,{key:d.item?.name,onClick:s[0]||(s[0]=a=>m(d.item))},{default:n(()=>[e($e,{item:d.item},null,8,["item"])]),_:1}))}}),At=I({name:"MySubMenuItem",__name:"sub-menu-item",props:{item:{type:Object,default:()=>({})}},setup(d){const m=o=>o?.meta?.type===0||!Object.is(o?.meta?.hideChildrenInMenu,!0)&&o?.children?.length;return(o,s)=>{const a=G("MySubMenuItem");return m(d.item)?(u(),k(t(P).SubMenu,He({key:d.item?.name},o.$attrs),{title:n(()=>[e($e,{item:d.item},null,8,["item"])]),default:n(()=>[(u(!0),$(O,null,R(d.item.children||[],v=>(u(),k(a,{key:v.name,item:v},null,8,["item"]))),128))]),_:1},16)):(u(),k(Bt,{key:1,item:d.item},null,8,["item"]))}}}),Ft=I({__name:"menu",props:{collapsed:{type:Boolean},theme:{type:String}},setup(d){const m=d,o=J(),s=W(),a=N(),v=U(),i=Qe({openKeys:[],selectedKeys:[a.name]}),b=M(()=>o.menus),h=M(()=>s.layoutSetting.layout==="sidemenu"),r=c=>v.getRoutes().find(l=>l.name===c),y=c=>v.getRoutes().find(l=>[l.name,l.path].includes(c)),f=()=>{const c=a.meta;return c?.activeMenu?y(c.activeMenu)?.meta?.namePath??[c?.activeMenu]:c?.hideInMenu?i?.openKeys||[]:a.meta?.namePath??a.matched.slice(1).map(l=>l.name)};z(()=>m.collapsed,c=>{i.openKeys=c?[]:f(),i.selectedKeys=[a.name]}),z(()=>a.fullPath,()=>{if(a.name===me||m.collapsed)return;i.openKeys=f();const c=a.meta;if(c?.activeMenu){const l=y(c.activeMenu);i.selectedKeys=[l?.name??c?.activeMenu]}else i.selectedKeys=[a.meta?.activeMenu??a.name]},{immediate:!0});const p=({key:c})=>{if(c===a.name)return;const l=i.selectedKeys,C=r(c),{isExt:_,extOpenMode:g}=C?.meta||{};C&&_&&g===1?queueMicrotask(()=>{i.selectedKeys=l}):v.push({name:c})};return(c,l)=>(u(),$("div",{class:Y(["menu-container",{"is-side-menu":h.value}])},[e(t(P),{"selected-keys":i.selectedKeys,"onUpdate:selectedKeys":l[0]||(l[0]=C=>i.selectedKeys=C),"open-keys":h.value?i.openKeys:[],mode:h.value?"inline":"horizontal",theme:d.theme,collapsed:m.collapsed,collapsible:"",onClick:p},{default:n(()=>[(u(!0),$(O,null,R(b.value,C=>(u(),k(At,{key:C.name,item:C},null,8,["item"]))),128))]),_:1},8,["selected-keys","open-keys","mode","theme","collapsed"])],2))}}),ce=A(Ft,[["__scopeId","data-v-6155560d"]]),jt={class:"pb-12px"},Dt=["onMouseenter"],Ut=I({__name:"SearchResult",props:{value:{},options:{}},emits:["update:value","enter"],setup(d,{emit:m}){const o=d,s=m,a=M({get(){return o.value},set(b){s("update:value",b)}});async function v(b){a.value=b.name}function i(){s("enter")}return(b,h)=>(u(),$("div",null,[w("div",jt,[(u(!0),$(O,null,R(b.options,r=>(u(),$("div",{key:r.name,class:"bg-[#e5e7eb] h-56px mt-8px px-14px rounded-4px flex items-center justify-justify-between",style:j([{cursor:"pointer"},{background:r.name===a.value?"#1890ff":"",color:r.name===a.value?"#fff":""}]),onClick:i,onMouseenter:y=>v(r)},[e(t(Xe)),e(t(H),{class:"flex-1 ml-5px",title:r.meta?.title},null,8,["title"]),e(t(be),{class:"icon text-20px p-2px mr-3px"})],44,Dt))),128))])]))}}),Vt={class:"flex items-center"},Nt={class:"mr-14px"},qt={class:"mr-14px"},zt=I({__name:"SearchFooter",setup(d){return(m,o)=>(u(),$("div",Vt,[w("span",Nt,[e(t(be),{class:"icon text-15px p-2px mr-3px"}),T(" 确认 ")]),w("span",qt,[e(t(Ye),{class:"icon text-15px p-2px mr-5px"}),e(t(Ze),{class:"icon text-15px p-2px mr-3px"}),T(" 切换 ")]),w("span",null,[e(t(fe),{class:"icon text-15px p-2px mr-3px"}),T(" 关闭 ")])]))}}),Jt=A(zt,[["__scopeId","data-v-28b7c05a"]]),Wt={class:"mt-20px"},Gt=I({__name:"index",setup(d){const m=J(),o=U(),s=E(""),a=E(""),v=M(()=>f(m.menus)),i=et([]),b=E(null),h=St(y,300),r=E(!1);z(r,async _=>{_&&(await ke(),b.value?.focus())});function y(){i.value=v.value.filter(_=>{const g=Me(_.meta?.title);return s.value&&g?.toLocaleLowerCase().includes(s.value.toLocaleLowerCase().trim())}),i.value?.length>0?a.value=i.value[0].name:a.value=""}function f(_,g=[]){return _&&_.length===0?[]:_.reduce((x,S)=>(!S.meta?.hideInMenu&&!S.children&&x.push(S),S.children&&S.children.length>0&&f(S.children,g),x),g)}function p(){r.value=!1,setTimeout(()=>{i.value=[],s.value=""},200)}function c(){const{length:_}=i.value;if(_===0)return;const g=i.value.findIndex(x=>x.name===a.value);g===0?a.value=i.value[_-1].name:a.value=i.value[g-1].name}function l(){const{length:_}=i.value;if(_===0)return;const g=i.value.findIndex(x=>x.name===a.value);g+1===_?a.value=i.value[0].name:a.value=i.value[g+1].name}function C(){const{length:_}=i.value;_===0||a.value===""||(/http(s)?:/.test(a.value)?window.open(a.value):(o.push({name:a.value}),p()))}return q("Escape",p),q("Enter",C),q("ArrowUp",c),q("ArrowDown",l),(_,g)=>{const x=at;return u(),k(t(D),{title:_.$t("common.searchText"),placement:"bottom","mouse-enter-delay":.5},{default:n(()=>[Z(_.$slots,"default",{},()=>[e(t(oe),{onClick:g[0]||(g[0]=S=>r.value=!0)})]),e(t($t),{open:r.value,"onUpdate:open":g[3]||(g[3]=S=>r.value=S),title:"搜索菜单",keyboard:!1,onCancel:p},{footer:n(()=>[e(Jt)]),default:n(()=>[e(x,{ref_key:"inputRef",ref:b,value:s.value,"onUpdate:value":g[1]||(g[1]=S=>s.value=S),clearable:"",placeholder:"请输入关键词搜索",onChange:t(h)},{prefix:n(()=>[e(t(oe),{class:"text-15px text-[#c2c2c2]"})]),_:1},8,["value","onChange"]),w("div",Wt,[i.value.length===0?(u(),k(t(tt),{key:0,description:"暂无搜索结果"})):(u(),k(Ut,{key:1,value:a.value,"onUpdate:value":g[2]||(g[2]=S=>a.value=S),options:i.value,onEnter:C},null,8,["value","options"]))])]),_:1},8,["open"])]),_:3},8,["title"])}}}),Ht=I({__name:"index",setup(d){const{t:m}=Ie(),{toggle:o,isFullscreen:s}=Ct(),a=M(()=>t(s)?m("layout.header.tooltipExitFull"):m("layout.header.tooltipEntryFull"));return(v,i)=>(u(),k(t(D),{title:a.value,placement:"bottom","mouse-enter-delay":.5},{default:n(()=>[w("span",{onClick:i[0]||(i[0]=(...b)=>t(o)&&t(o)(...b))},[t(s)?(u(),k(t(lt),{key:1})):(u(),k(t(nt),{key:0}))])]),_:1},8,["title"]))}}),Qt=["onClick"],Xt={class:"style-checbox-item"},Yt={class:"style-checbox-item"},Zt=["onClick"],ea=I({name:"ProjectSetting",__name:"index",setup(d){const m=W(),{layoutSetting:o}=pe(m),s=E(o.value.colorPrimary),a=E(!1),v=M(()=>({"--custom-color":s.value})),i=f=>{m.updateLayoutSetting({navTheme:f})},b=f=>{m.updateLayoutSetting({layout:f})},h=f=>{m.updateLayoutSetting({colorPrimary:f})},r=f=>o.value.colorPrimary===f?"visible":"hidden",y=()=>{a.value=!0};return(f,p)=>{const c=Ce;return u(),$(O,null,[e(t(ot),{onClick:y}),e(t(ut),{open:a.value,"onUpdate:open":p[2]||(p[2]=l=>a.value=l),placement:"right",closable:!1},{default:n(()=>[e(t(B),{title:"整体风格",column:5},{default:n(()=>[(u(!0),$(O,null,R(t(Oe),l=>(u(),k(t(B).Item,{key:l.value},{default:n(()=>[e(t(D),{title:l.label},{default:n(()=>[w("div",{class:Y(["style-checbox-item",{active:t(o).navTheme===l.value}]),onClick:C=>i(l.value)},[e(c,{name:l.value,size:"50"},null,8,["name"])],10,Qt)]),_:2},1032,["title"])]),_:2},1024))),128))]),_:1}),e(t(B),{title:"主题色",column:9},{default:n(()=>[(u(!0),$(O,null,R(t(Le),l=>(u(),k(t(B).Item,{key:l.key},{default:n(()=>[w("div",Xt,[e(t(D),{title:l.title},{default:n(()=>[e(t(se),{color:l.value,onClick:C=>h(l.value)},{default:n(()=>[w("span",{style:j({visibility:r(l.value)})}," ✔ ",4)]),_:2},1032,["color","onClick"])]),_:2},1032,["title"])])]),_:2},1024))),128)),e(t(B).Item,{key:"custom"},{default:n(()=>[w("div",Yt,[e(t(D),{title:"自定义"},{default:n(()=>[e(t(se),{color:s.value,class:"relative overflow-hidden"},{default:n(()=>[_e(w("input",{"onUpdate:modelValue":p[0]||(p[0]=l=>s.value=l),type:"color",class:"absolute inset-0",style:j(v.value),onInput:p[1]||(p[1]=l=>h(s.value))},null,36),[[st,s.value]]),w("span",{style:j({visibility:r(s.value)})}," ✔ ",4)]),_:1},8,["color"])]),_:1})])]),_:1})]),_:1}),e(t(B),{title:"导航模式",column:5},{default:n(()=>[(u(!0),$(O,null,R(t(Pe),l=>(u(),k(t(B).Item,{key:l.value},{default:n(()=>[w("div",{class:Y(["style-checbox-item",{active:t(o).layout===l.value}]),onClick:C=>b(l.value)},[e(c,{name:l.value,size:"50"},null,8,["name"])],10,Zt)]),_:2},1024))),128))]),_:1})]),_:1},8,["open"])],64)}}}),ta=A(ea,[["__scopeId","data-v-3a349ffd"]]),aa=I({name:"LayoutBreadcrumb",__name:"index",setup(d){const m=U(),o=N(),s=J(),a=r=>{if(typeof r?.redirect=="object"){const y=Object.values(r.redirect);if(r?.children?.length){const f=r.children.find(p=>y.some(c=>[p.name,p.path,p.meta?.fullPath].some(l=>l===c)));return a(f)}return y.find(f=>typeof f=="string")}else if(typeof r?.redirect=="string"){if(r?.children?.length){const y=r.children.find(f=>[f.name,f.path,f.meta?.fullPath].some(p=>p===r?.redirect));return a(y)}return r?.redirect}return r},v=r=>m.getRoutes().find(y=>y.name===r),i=r=>{const y=a(r),f=v(y?.name),{isExt:p,extOpenMode:c}=f?.meta||{};p&&c===1?window.open(y?.path):m.push({name:y?.name})},b=M(()=>{if(o.meta?.namePath){let r=s.menus;const y=o.meta?.namePath?.map(f=>{const p=r.find(c=>c.name===f);return r=p?.children||[],p});return[{name:"__index",meta:{title:"首页"},children:s.menus},...y]}return o.matched}),h=r=>[b.value[r+1]?.name];return(r,y)=>{const f=H,p=he,c=P,l=rt,C=it;return u(),k(C,null,{default:n(()=>[(u(!0),$(O,null,R(b.value,(_,g)=>(u(),k(l,{key:_?.name},xe({default:n(()=>[e(f,{title:_?.meta?.title},null,8,["title"])]),_:2},[_?.children?.length?{name:"overlay",fn:n(()=>[e(c,{"selected-keys":h(g)},{default:n(()=>[(u(!0),$(O,null,R(_?.children,x=>(u(),$(O,{key:x.name},[!x.meta?.hideInMenu&&!x.meta?.hideInBreadcrumb?(u(),k(p,{key:x.name,onClick:S=>i(x)},{default:n(()=>[e(f,{title:x.meta?.title},null,8,["title"])]),_:2},1032,["onClick"])):V("",!0)],64))),128))]),_:2},1032,["selected-keys"])]),key:"0"}:void 0]),1024))),128))]),_:1})}}}),na={key:0,class:"ml-1"},la={href:"javascript:;"},oa=I({__name:"index",props:{showText:{type:Boolean,default:!0},reload:{type:Boolean}},setup(d){const m=d,o=E([]),{changeLocale:s,getLocale:a}=Re(),v=M(()=>{const h=o.value[0];return h?ne.find(r=>r.lang===h)?.label:""});ct(()=>{o.value=[t(a)]});async function i(h){await s(h),o.value=[h],m.reload&&location.reload()}function b({key:h}){t(a)!==h&&i(h)}return(h,r)=>(u(),k(t(ee),{placement:"bottomRight"},{overlay:n(()=>[e(t(P),{selectedKeys:o.value,"onUpdate:selectedKeys":r[0]||(r[0]=y=>o.value=y),onClick:b},{default:n(()=>[(u(!0),$(O,null,R(t(ne),y=>(u(),k(t(P).Item,{key:y.lang},{default:n(()=>[w("a",la,L(y.icon)+" "+L(y.label),1)]),_:2},1024))),128))]),_:1},8,["selectedKeys"])]),default:n(()=>[e(t(Ce),{name:"locale"}),d.showText?(u(),$("span",na,L(v.value),1)):V("",!0)]),_:1}))}}),sa={class:"header-left"},ua={class:"header-menu"},ra={class:"header-right"},ia=I({__name:"index",props:{collapsed:{type:Boolean},theme:{type:String}},emits:["update:collapsed"],setup(d,{emit:m}){const o=m,s=J(),a=W(),v=Ee(),i=de(),b=U(),h=N(),r=M(()=>s.userInfo),y=M(()=>{const{navTheme:p,layout:c}=a.layoutSetting,l=p==="dark"&&c==="topmenu";return{backgroundColor:p==="realDark"||l?"":"rgba(255, 255, 255, 0.85)",color:l?"rgba(255, 255, 255, 0.85)":""}}),f=()=>{vt.confirm({title:"您确定要退出登录吗？",icon:e(yt,null,null),centered:!0,onOk:async()=>{await s.logout(),i.clear(),localStorage.clear(),ye.success("成功退出登录"),await ke(),b.getRoutes(),b.replace({name:me,query:{redirect:h.fullPath}})}})};return(p,c)=>(u(),k(t(F).Header,{style:j(y.value),class:"layout-header"},{default:n(()=>[w("div",sa,[Z(p.$slots,"left",{},()=>[e(t(ue),{size:20},{default:n(()=>[w("span",{class:"menu-fold",onClick:c[0]||(c[0]=()=>o("update:collapsed",!d.collapsed))},[(u(),k(ge(d.collapsed?t(dt):t(mt))))]),e(t(aa))]),_:1})],!0)]),w("div",ua,[Z(p.$slots,"menu",{},void 0,!0)]),w("div",ra,[e(t(ue),{size:20},{default:n(()=>[e(t(Gt)),e(t(D),{title:p.$t("layout.header.tooltipLock"),placement:"bottom"},{default:n(()=>[e(t(pt),{onClick:c[1]||(c[1]=l=>t(v).setLock(!0))})]),_:1},8,["title"]),e(t(Ht)),e(t(oa)),e(t(ee),{placement:"bottomRight"},{overlay:n(()=>[e(t(P),null,{default:n(()=>[e(t(P).Item,{onClick:c[2]||(c[2]=l=>p.$router.push({name:"account-about"}))},{default:n(()=>[T(L(p.$t("routes.account.about")),1)]),_:1}),e(t(P).Item,{onClick:c[3]||(c[3]=l=>p.$router.push({name:"account-settings"}))},{default:n(()=>[T(L(p.$t("routes.account.settings")),1)]),_:1}),e(t(P).Divider),e(t(P).Item,null,{default:n(()=>[w("div",{onClick:ve(f,["prevent"])},[e(t(_t)),T(" "+L(p.$t("layout.header.dropdownItemLoginOut")),1)])]),_:1})]),_:1})]),default:n(()=>[e(t(ft),{src:r.value.avatar,alt:r.value.username},{default:n(()=>[T(L(r.value.username),1)]),_:1},8,["src","alt"])]),_:1}),e(t(ta))]),_:1})])]),_:3},8,["style"]))}}),ca=A(ia,[["__scopeId","data-v-20925038"]]),da="_page_footer_lar2m_1",ma="_page_footer_link_lar2m_14",pa="_copyright_lar2m_22",X={page_footer:da,page_footer_link:ma,copyright:pa},{Footer:_a}=F,fa=I({name:"PageFooter",components:{ALayoutFooter:_a},setup(){return()=>e(O,null,[e(G("a-layout-footer"),{class:X.page_footer},{default:()=>[e("div",{class:X.page_footer_link},[e("a",{href:"https://buqiyuan.github.io/vite-vue3-admin",target:"_blank"},[T("在线预览")]),e("a",{href:"https://github.com/buqiyuan/vite-vue3-admin",target:"_blank"},[e(ht,null,null)]),e("a",{href:"https://buqiyuan.github.io/vite-vue3-admin-docs/",target:"_blank"},[T("在线文档")])]),e("div",{class:X.copyright},[T("Copyright "),e(gt,null,null),T(" 2022 vite-vue3-admin")])]})])}}),va=I({__name:"index",setup(d){const m=W(),{layoutSetting:o}=pe(m),s=E(!1),a=M(()=>s.value?80:220),v=M(()=>o.value.navTheme==="light"?"light":"dark");return(i,b)=>(u(),k(t(F),{class:"layout"},{default:n(()=>[t(o).layout==="sidemenu"?(u(),k(t(F).Sider,{key:0,collapsed:s.value,"onUpdate:collapsed":b[0]||(b[0]=h=>s.value=h),width:a.value,trigger:null,collapsible:"",theme:v.value,class:"layout-sider"},{default:n(()=>[e(re,{collapsed:s.value},null,8,["collapsed"]),e(ce,{collapsed:s.value,theme:v.value},null,8,["collapsed","theme"])]),_:1},8,["collapsed","width","theme"])):V("",!0),e(t(F),null,{default:n(()=>[e(ca,{collapsed:s.value,"onUpdate:collapsed":b[1]||(b[1]=h=>s.value=h),theme:v.value},xe({_:2},[t(o).layout==="topmenu"?{name:"left",fn:n(()=>[e(re,{collapsed:s.value},null,8,["collapsed"])]),key:"0"}:void 0,t(o).layout==="topmenu"?{name:"menu",fn:n(()=>[e(ce,{collapsed:s.value,theme:v.value},null,8,["collapsed","theme"])]),key:"1"}:void 0]),1032,["collapsed","theme"]),e(t(F).Content,{class:"layout-content"},{default:n(()=>[e(t(Kt))]),_:1}),e(t(fa))]),_:1})]),_:1}))}}),Ca=A(va,[["__scopeId","data-v-c1acba4d"]]);export{Ca as default};