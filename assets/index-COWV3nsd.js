import{_,s as f,b as h}from"./upload-modal.vue_vue_type_script_setup_true_lang-Cc1TpcK-.js";import{u as v}from"./dynamic-table-CtWW4hiU.js";import{A as m}from"./index-Bf9NpXkZ.js";import"./ApiSelect.vue_vue_type_script_setup_true_lang-BrXY2i5o.js";import{d as b,r as g,I as S,Q as k,k as s,K as r,_ as y,B as c,ak as x,cc as w}from"./vendor-D7Y6X7_h.js";import"./dateUtil-ohqk8BGA.js";import"./index.vue_vue_type_style_index_0_lang-reX62h1K.js";import"./schema-form.vue_vue_type_script_setup_true_lang-BWF4-paj.js";import"./is-CBsgbGQ7.js";import"./index-DKcumURF.js";import"./index-DaE14gLf.js";import"./Icon.vue_vue_type_script_setup_true_lang-B_bz3tPt.js";const z=b({name:"ToolsStorage",__name:"index",setup(C){const e=g([]),[d,i]=v({formProps:{schemas:f},rowSelection:{type:"checkbox",selectedRowKeys:e,onSelect:(o,l)=>{l?e.value=[...e.value,o.id]:e.value=e.value.filter(t=>t!==o.id)},onSelectAll:(o,l,t)=>{const a=t.map(n=>n.id);o?e.value=[...e.value,...a]:e.value=e.value.filter(n=>!a.includes(n))}}}),u=()=>{i?.reload()},p=async()=>{await m.toolsStorage.storageDelete({ids:e.value}),e.value=[],i?.reload()};return(o,l)=>{const t=x("a-button"),a=w;return S(),k("div",null,[s(c(d),{"row-key":"id","header-title":"存储管理","data-request":c(m).toolsStorage.storageList,columns:c(h),bordered:"",size:"small"},{toolbar:r(()=>[s(_,{onUploadSuccess:u}),s(a,{title:"你确定要删除这些数据吗?","ok-text":"确定","cancel-text":"取消",onConfirm:p},{default:r(()=>[s(t,{disabled:!o.$auth("tool:storage:delete")||!e.value.length,type:"error"},{default:r(()=>[y(" 删除 ")]),_:1},8,["disabled"])]),_:1})]),_:1},8,["data-request","columns"])])}}});export{z as default};