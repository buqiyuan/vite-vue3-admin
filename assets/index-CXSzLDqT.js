import{_ as f}from"./input-number-range.vue_vue_type_script_setup_true_lang-_wY3dsvq.js";import"./ApiSelect.vue_vue_type_script_setup_true_lang-BrXY2i5o.js";import{d as _,I as x,Q as b,k as n,B as l,K as a,a0 as h,aS as p,bb as g,bd as v}from"./vendor-D7Y6X7_h.js";import"./index-Bf9NpXkZ.js";import{u as S}from"./useForm-CWiR2QqS.js";import"./is-CBsgbGQ7.js";import"./schema-form.vue_vue_type_script_setup_true_lang-BWF4-paj.js";import"./index-DKcumURF.js";import"./dateUtil-ohqk8BGA.js";const V=_({name:"CustomForm",__name:"index",setup(y){const i=[{field:"field0",label:"自定义组件",colProps:{span:8},rules:[{required:!0,type:"array",trigger:"change",validator(e,o){return Array.isArray(o)&&o.length===2&&o.every(Boolean)?Promise.resolve():Promise.reject("请输入数字范围")}}],component:()=>f},{field:"field1",label:"comp vnode方式",colProps:{span:8},rules:[{required:!0}],component:({formModel:e,field:o})=>n(p,{modelValue:e[o],"onUpdate:modelValue":r=>e[o]=r,placeholder:"请输入"},{prefix:()=>"component"})},{field:"field2",component:"Input",label:"render组件slot",colProps:{span:8},rules:[{required:!0}],componentSlots:e=>({prefix:()=>"prefix",suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"render组件slot",colProps:{span:8},rules:[{required:!0}],componentSlots:{prefix:()=>"prefix",suffix:e=>"suffix"}},{field:"field4",component:"Input",label:"自定义Slot",slot:"f4",colProps:{span:8},rules:[{required:!0}]}],[u]=S({labelWidth:140,schemas:i,actionColOptions:{span:24}}),c=e=>{h.success(`click search,values:${JSON.stringify(e)}`)};return(e,o)=>{const r=p,m=g;return x(),b("div",null,[n(l(v),{message:"自定义表单组件示例",type:"info","show-icon":"",style:{"margin-bottom":"12px"}}),n(m,null,{default:a(()=>[n(l(u),{onSubmit:c},{f4:a(({formModel:t,field:s})=>[n(r,{value:t[s],"onUpdate:value":d=>t[s]=d,placeholder:"自定义slot"},null,8,["value","onUpdate:value"])]),_:1})]),_:1})])}}});export{V as default};