import{f}from"./dateUtil-ohqk8BGA.js";import{u as y}from"./dynamic-table-CtWW4hiU.js";import{A as o}from"./index-Bf9NpXkZ.js";import"./ApiSelect.vue_vue_type_script_setup_true_lang-BrXY2i5o.js";import{d as b,I as h,Q as C,k as s,K as m,_ as I,B as l,ak as g}from"./vendor-D7Y6X7_h.js";import"./index.vue_vue_type_style_index_0_lang-reX62h1K.js";import{u as k}from"./useFormModal-DrjhP41g.js";import"./schema-form.vue_vue_type_script_setup_true_lang-BWF4-paj.js";import"./is-CBsgbGQ7.js";import"./index-DKcumURF.js";import"./index-DaE14gLf.js";import"./Icon.vue_vue_type_script_setup_true_lang-B_bz3tPt.js";import"./useModal-p6LRjO4c.js";const w=[{title:"ID",dataIndex:"id",sorter:!0,width:60},{title:"参数名称",width:150,dataIndex:"name"},{title:"key",dataIndex:"key"},{title:"value",dataIndex:"value"},{title:"备注",dataIndex:"remark"},{title:"更新时间",dataIndex:"updatedAt",sorter:!0,width:160,customRender:({record:n})=>f(n.createdAt)}],x=[{field:"name",label:"名称",component:"Input",colProps:{span:8}}],P=[{field:"name",component:"Input",label:"参数名称",rules:[{required:!0,type:"string"}]},{field:"key",component:"Input",label:"key",colProps:{span:24},required:!0},{field:"value",component:"Input",label:"value",colProps:{span:24},required:!0},{field:"remark",component:"InputTextArea",label:"备注",colProps:{span:24},required:!0}],z=b({name:"SystemParamConfig",__name:"index",setup(n){const[d,r]=y({formProps:{schemas:x}}),[p]=k(),i=async e=>{const[t]=await p({modalProps:{title:`${e.id?"编辑":"新增"}字典`,width:"50%",onFinish:async a=>{e.id?await o.systemParamConfig.paramConfigUpdate({id:e.id},a):await o.systemParamConfig.paramConfigCreate(a),r?.reload()}},formProps:{labelWidth:100,schemas:P}});t?.setFieldsValue({...e})},c=async e=>{await o.systemParamConfig.paramConfigDelete({id:e.id}),r?.reload()},u=[...w,{title:"操作",width:130,dataIndex:"ACTION",hideInSearch:!0,fixed:"right",actions:({record:e})=>[{label:"编辑",auth:{perm:"system:param-config:update",effect:"disable"},onClick:()=>i(e)},{label:"删除",auth:"system:param-config:delete",popConfirm:{title:"你确定要删除吗？",placement:"left",onConfirm:()=>c(e)}}]}];return(e,t)=>{const a=g("a-button");return h(),C("div",null,[s(l(d),{"row-key":"id","header-title":"参数配置","data-request":l(o).systemParamConfig.paramConfigList,columns:u,bordered:"",size:"small"},{toolbar:m(()=>[s(a,{type:"primary",disabled:!e.$auth("system:param-config:create"),onClick:t[0]||(t[0]=_=>i({}))},{default:m(()=>[I(" 新增 ")]),_:1},8,["disabled"])]),_:1},8,["data-request"])])}}});export{z as default};
