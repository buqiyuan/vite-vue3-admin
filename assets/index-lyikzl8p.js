import{_ as u}from"./schema-form.vue_vue_type_script_setup_true_lang-BWF4-paj.js";import"./ApiSelect.vue_vue_type_script_setup_true_lang-BrXY2i5o.js";import{d as _,r as b,I as h,Q as v,k as o,B as i,R as P,K as a,_ as t,M as k,a0 as y,ak as S,bb as w,bd as F}from"./vendor-D7Y6X7_h.js";import{_ as g}from"./index-Bf9NpXkZ.js";import"./is-CBsgbGQ7.js";import"./index-DKcumURF.js";import"./dateUtil-ohqk8BGA.js";const C=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},vShow:({formModel:e})=>!!e.field5},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},vShow:({formModel:e})=>!!e.field6},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},dynamicDisabled:({formModel:e})=>!!e.field7},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},dynamicRules:({formModel:e})=>e.field8?[{required:!0,message:"字段4必填"}]:[],componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field11",component:"DatePicker",label:"字段11",colProps:{span:8}},{field:"field5",component:"Switch",label:"是否显示字段1(css控制)",colProps:{span:8},labelWidth:200},{field:"field6",component:"Switch",label:"是否显示字段2(dom控制)",colProps:{span:8},labelWidth:200},{field:"field7",component:"Switch",label:"是否禁用字段3",colProps:{span:8},labelWidth:200},{field:"field8",component:"Switch",label:"字段4是否必填",colProps:{span:8},componentProps:({formInstance:e})=>({onChange(l){requestAnimationFrame(()=>{l?e?.validateFields():e?.clearValidate()})}}),labelWidth:200}],x={class:"mb-4"},B=_({name:"DemosFormDynamicForm",__name:"index",setup(e){const l=b(),s={schemas:C,labelWidth:120,actionColOptions:{span:24}};function c(){l.value?.formModel,l.value?.validate().then(()=>y.success("验证通过！"))}function d(){l.value?.updateSchema({field:"field3",label:"字段3 New"})}function r(){l.value?.updateSchema([{field:"field3",label:"字段3 New++"},{field:"field4",label:"字段4 New++"}])}function p(){l.value?.appendSchemaByField({field:"field10",label:"字段10",component:"Input",colProps:{span:8}},"field3")}function m(){l.value?.removeSchemaByField("field11")}return(N,D)=>{const n=S("a-button"),f=w;return h(),v("div",null,[o(i(F),{message:"动态表单示例",type:"info","show-icon":"",style:{"margin-bottom":"12px"}}),P("div",x,[o(n,{class:"mr-2",onClick:d},{default:a(()=>[t(" 更改字段3label ")]),_:1}),o(n,{class:"mr-2",onClick:r},{default:a(()=>[t(" 同时更改字段3,4label ")]),_:1}),o(n,{class:"mr-2",onClick:p},{default:a(()=>[t(" 往字段3后面插入字段10 ")]),_:1}),o(n,{class:"mr-2",onClick:m},{default:a(()=>[t(" 删除字段11 ")]),_:1})]),o(f,null,{default:a(()=>[o(i(u),k({ref_key:"dynamicForm",ref:l},s,{onSubmit:c}),null,16)]),_:1})])}}}),A=g(B,[["__scopeId","data-v-0391eb46"]]);export{A as default};
