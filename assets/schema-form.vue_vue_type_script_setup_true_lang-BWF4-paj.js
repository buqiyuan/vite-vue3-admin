import{b as A,B as e,bT as ge,P as De,i as Ve,bz as I,d as ae,aR as Re,k as V,bU as Ee,a2 as $,bV as J,F as se,y as We,bW as ne,bs as de,_ as le,M as q,bh as ue,w as pe,bX as Ke,V as Ne,W as qe,I as M,J as D,K as W,be as Ue,bQ as G,a7 as te,b9 as ve,Q as he,L as z,R as be,S as oe,a8 as U,an as ze,aq as ye,a3 as Ge,U as ie,bY as Me,bZ as He,bo as Ye,x as Je,b_ as Xe,aC as Ze,ak as Qe,Z as et,r as ke,n as fe,aj as tt,t as nt,b$ as Be,c0 as Y,c1 as Te,c2 as st,c3 as xe,by as ot,o as at,c4 as rt,bR as me,j as ct,c5 as lt,c6 as it}from"./vendor-D7Y6X7_h.js";import{c as ut,s as dt,a as ft,b as mt,d as pt}from"./ApiSelect.vue_vue_type_script_setup_true_lang-BrXY2i5o.js";import{h as Se,_ as Oe}from"./index-Bf9NpXkZ.js";import{i as X}from"./is-CBsgbGQ7.js";import{d as _e}from"./index-DKcumURF.js";import{d as Ie}from"./dateUtil-ohqk8BGA.js";function ht(r,y){return A(()=>{const o=e(r),{labelCol:b={},wrapperCol:g={}}=o.formItemProps||{},{labelWidth:m,disabledLabelWidth:w}=o,{labelWidth:v,labelCol:C,wrapperCol:T}=e(y);if(!v&&!m&&!C||w)return b.style={textAlign:"left"},{labelCol:b,wrapperCol:g};let P=m||v;const c={...C,...b},O={...T,...g};return P&&(P=ge(P)?`${P}px`:P),{labelCol:{style:{width:P},...c},wrapperCol:{style:{width:`calc(100% - ${P})`},...O}}})}function Ce(r,y=""){const{t:o}=Se();if(r.includes("Input")||r.includes("Complete"))return`${o("common.inputText")}${y}`;const b=["Select","Cascader","Checkbox","CheckboxGroup","Switch","TreeSelect"];return r.includes("Picker")||b.includes(r)?`${o("common.chooseText")}${y}`:""}const bt=["DatePicker","MonthPicker","WeekPicker","TimePicker"];function yt(){return[...bt,"RangePicker"]}function gt(r,y){return r&&["Input","InputPassword","InputSearch","InputTextArea"].includes(r)&&y&&ge(y)?`${y}`:y}const vt=yt(),je=Symbol("schema-form");async function St(r){De(je,r)}function Le(r={}){return Ve(je,r)}const wt={formModel:{type:Object,default:()=>({})},schema:{type:Object,default:()=>({})},tableInstance:{type:Object},tableRowKey:{type:[String,Number]}};function At(r,y="default",o){if(!r||!Reflect.has(r,y))return null;if(!I(r[y]))return console.error(`${y} is not a function!`),null;const b=r[y];return b?b(o):null}const Pt={maxWidth:{type:String,default:"600px"},showIndex:{type:Boolean},color:{type:String,default:"#ffffff"},fontSize:{type:String,default:"14px"},placement:{type:String,default:"right"},text:{type:[Array,String]}},Ft=ae({name:"BasicHelp",components:{Tooltip:Re},props:Pt,setup(r,{slots:y}){const o=A(()=>({color:r.color,fontSize:r.fontSize})),b=A(()=>({maxWidth:r.maxWidth}));function g(){const m=r.text;return $(m)?V("p",null,[m]):J(m)?m.map((w,v)=>V("p",{key:w},[V(se,null,[r.showIndex?`${v+1}. `:"",w])])):null}return()=>V(Re,{overlayClassName:"basic-help__wrap",title:V("div",{style:e(o)},[g()]),autoAdjustOverflow:!0,overlayStyle:e(b),placement:r.placement},{default:()=>[V("span",{class:"basic-help"},[At(y)||V(Ee,null,null)])]})}}),Rt={class:"mr-[6px]"},kt={class:"ml-[6px]"},Bt=ae({name:"SchemaFormItem",__name:"schema-form-item",props:wt,emits:["update:formModel"],setup(r,{emit:y}){const o=r,b=y,g=Le(),{formPropsRef:m,setItemRef:w,updateSchema:v,getSchemaByFiled:C,appendSchemaByField:T}=g,{t:P}=Se(),{schema:c}=We(o),O=ht(c,m),u=A(()=>J(c.value.field)?c.value.field:c.value.field.split(".")),i=A({get(){return u.value.reduce((t,n)=>t?.[n],o.formModel)},set(t){const n=c.value.field.split("."),s=n.pop(),f=n.reduce((S,p)=>S[p]??={},o.formModel);f[s]=t,b("update:formModel",o.formModel)}}),h=A(()=>{const{component:t,componentProps:n}=c.value;if(!I(n)&&n?.vModelKey)return n.vModelKey;const s=$(t)&&["Switch","Checkbox"].includes(t),f=t==="Upload";return{true:"value",[`${s}`]:"checked",[`${f}`]:"file-list"}.true}),l=A(()=>{const{formModel:t,schema:n,tableInstance:s}=o,{mergeDynamicData:f}=e(m);return{field:n.field,formInstance:g,tableInstance:s,tableRowKey:o.tableRowKey,formModel:o.tableRowKey?t[o.tableRowKey]:t,values:{...f,...t},schema:A(()=>o.schema)}}),R=A(()=>{const{vShow:t,vIf:n,isAdvanced:s=!1}=e(c),{showAdvancedButton:f}=e(m),S=f&&ne(s)?s:!0;let p=!0,L=!0;return ne(t)&&(p=t),ne(n)&&(L=n),I(t)&&(p=t(e(l))),I(n)&&(L=n(e(l))),p=p&&S,{isShow:p,isIfShow:L}}),x=A(()=>{const{disabled:t}=e(m),{dynamicDisabled:n}=o.schema,{disabled:s=!1}=e(j);let f=!!t||s;return ne(n)&&(f=n),I(n)&&(f=n(e(l))),f}),k=(t,n=e(l))=>{if($(t))return V(se,null,[t]);if(de(t))return t;if(I(t))return k(t(n));if(t&&X(t)){const s=Object.keys(t);return s.some(f=>f.startsWith("_")||["setup","render"].includes(f))?t:s.reduce((f,S)=>(f[S]=(...p)=>k(t[S],...p),f),{})}return t},F=A(()=>{const t=o.schema.component;return $(t)?ut[t]??k(t):k(t)}),K=A(()=>{const t=o.schema.componentSlots??{};return $(t)||de(t)?{default:(...n)=>k(t,n)}:k(t)}),_=A(()=>{const t=o.schema.label;return I(t)?t(e(l)):t}),j=A(()=>{const{schema:t}=o;let{componentProps:n={},component:s}=t;return I(n)&&(n=n(e(l))??{}),s!=="RangePicker"&&$(s)&&(n.placeholder??=Ce(s,_.value)),t.component==="Divider"&&(n=Object.assign({type:"horizontal"},n,{orientation:"left",plain:!0})),de(F.value)&&Object.assign(n,F.value.props),n}),Q=A(()=>{const t=o.schema?.componentProps||{};return Object.keys(t).reduce((n,s)=>{if(/on([A-Z])/.test(s)){const f=s.replace(/on([A-Z])/,"$1").toLocaleLowerCase();n[f]=t[s]}return n},{})}),Z=A(()=>{const{helpMessage:t,helpComponentProps:n,subLabel:s}=o.schema,f=s?V("span",null,[_.value,le(" "),V("span",{class:"text-secondary"},[s])]):k(_.value),S=I(t)?t(e(l)):t;return!S||Array.isArray(S)&&S.length===0?f:V("span",null,[f,V(Ft,q({placement:"top",class:"mx-1",text:S},n),null)])});function we(t,n,s){["DatePicker","MonthPicker","WeekPicker","TimePicker"].includes(n)?t.type=s?"string":"object":["RangePicker","Upload","CheckboxGroup","TimePicker"].includes(n)?t.type="array":["InputNumber"].includes(n)&&(t.type="number")}const a=A(()=>{const{rules:t=[],component:n,rulesMessageJoinLabel:s,dynamicRules:f,required:S}=o.schema;if(I(f))return f(e(l));let p=ue(t);const{rulesMessageJoinLabel:L}=e(m),re=Reflect.has(e(m),"rulesMessageJoinLabel")?s:L,Ae=$(n)?`${Ce(n,_.value)}${re?_.value:""}`:void 0;function $e(N,E){const ce=N.message||Ae;return E===void 0||He(E)||Array.isArray(E)&&E.length===0||typeof E=="string"&&E.trim()===""||typeof E=="object"&&Reflect.has(E,"checked")&&Reflect.has(E,"halfChecked")&&Array.isArray(E.checked)&&Array.isArray(E.halfChecked)&&E.checked.length===0&&E.halfChecked.length===0?Promise.reject(ce):Promise.resolve()}const Pe=I(S)?S(e(l)):S;(!p||p.length===0)&&Pe&&(p=[{required:Pe,validator:$e}]);const Fe=p.findIndex(N=>Reflect.has(N,"required")&&!Reflect.has(N,"validator"));if(Fe!==-1){const N=p[Fe];if(n&&$(n)){Reflect.has(N,"type")||(N.type=n==="InputNumber"?"number":"string"),N.message=N.message||Ae,(n.includes("Input")||n.includes("Textarea"))&&(N.whitespace=!0);const E=e(j)?.valueFormat;we(N,n,E)}}const ee=p.findIndex(N=>N.max);return ee!==-1&&!p[ee].validator&&(p[ee].message=p[ee].message||P("component.form.maxTip",[p[ee].max])),p}),d=async t=>{try{const n=Object.assign(c.value,{loading:!0,componentProps:{...e(j),options:[]}});v(n);const s=await t(e(l)),{component:f}=e(c),S=n.componentProps;["Select","RadioGroup","CheckBoxGroup"].some(p=>p===f)?S.options=s:["TreeSelect","Tree"].some(p=>p===f)&&(S.treeData=s),n.componentProps&&(n.componentProps.requestResult=s),n.loading=!1,v(n)}finally{await Je(),c.value.loading=!1}},B=()=>{const t=j.value.request;if(t)if(I(t))d(t);else{const{watchFields:n=[],options:s={},wait:f=0,callback:S}=t,p=n.map(L=>()=>o.formModel[L]);pe(p,Ye(()=>{d(S)},f),{...s})}};return pe(R,(t,n)=>{!Ke(t,n)&&t.isIfShow&&t.isShow&&(C(o.schema.field)||T(o.schema),B())},{immediate:!0}),(t,n)=>R.value.isIfShow?Ne((M(),D(e(Me),G(q({key:0},e(c).colProps)),{default:W(()=>[e(c).component==="Divider"?(M(),D(e(Ue),G(q({key:0},Object.assign(j.value))),{default:W(()=>[(M(),D(te(Z.value)))]),_:1},16)):(M(),D(e(ve).Item,q({key:1},{...e(c).formItemProps},{label:Z.value,name:u.value,"label-col":e(O).labelCol,"wrapper-col":e(O).wrapperCol,rules:a.value}),{default:W(()=>[e(c).beforeSlot?(M(),he(se,{key:0},[e($)(e(c).beforeSlot)?z(t.$slots,e(c).beforeSlot,G(q({key:0},l.value)),()=>[be("span",Rt,oe(e(c).beforeSlot),1)],!0):U("",!0),e(I)(e(c).beforeSlot)?(M(),D(te(e(c).beforeSlot(l.value)),{key:1})):U("",!0)],64)):U("",!0),e(c).slot?z(t.$slots,e(c).slot,G(q({key:1},l.value)),void 0,!0):F.value?(M(),D(te(F.value),q({key:2,ref:e(w)(e(c).field)},j.value,{[h.value]:i.value,["onUpdate:"+h.value]:n[0]||(n[0]=s=>i.value=s),"allow-clear":!0,disabled:x.value,loading:e(c).loading},ze(Q.value)),ye({_:2},[Object.is(e(c).loading,!0)?{name:"notFoundContent",fn:W(()=>[V(e(Ge),{size:"small"})]),key:"0"}:void 0,ie(K.value,(s,f)=>({name:f,fn:W(S=>[(M(),D(te(s?.({...l.value,slotData:S})??s),{key:f}))])}))]),1040,["disabled","loading"])):U("",!0),e(c).afterSlot?(M(),he(se,{key:3},[e($)(e(c).afterSlot)?z(t.$slots,e(c).afterSlot,G(q({key:0},l.value)),()=>[be("span",kt,oe(e(c).afterSlot),1)],!0):U("",!0),e(I)(e(c).afterSlot)?(M(),D(te(e(c).afterSlot(l.value)),{key:1})):U("",!0)],64)):U("",!0)]),_:3},16,["label","name","label-col","wrapper-col","rules"]))]),_:3},16)),[[qe,R.value.isShow]]):U("",!0)}}),xt=Oe(Bt,[["__scopeId","data-v-04f4bebd"]]),It=ae({__name:"index",props:{expand:{type:Boolean}},setup(r){Xe(b=>({"4cf09dcc":o.value}));const y=r,o=A(()=>`${y.expand?0:.5}turn`);return(b,g)=>(M(),D(e(Ze),{class:"collapse-icon"}))}}),Ct=Oe(It,[["__scopeId","data-v-af0a3cde"]]),Mt=ae({name:"FormAction",inheritAttrs:!1,__name:"form-action",props:{showActionButtonGroup:{type:Boolean,default:!0},showResetButton:{type:Boolean,default:!0},showSubmitButton:{type:Boolean,default:!0},showAdvancedButton:{type:Boolean,default:!0},resetButtonOptions:{type:Object,default:()=>({})},submitButtonOptions:{type:Object,default:()=>({})},actionColOptions:{type:Object,default:()=>({})},actionSpan:{type:Number,default:6},isAdvanced:Boolean,hideAdvanceBtn:Boolean},emits:["toggle-advanced"],setup(r,{emit:y}){const o=y,b=r,{t:g}=Se(),{resetFields:m,submit:w}=Le(),v=A(()=>{const{showAdvancedButton:c,actionSpan:O,actionColOptions:u}=b,i=24-O,h=c?{span:i<6?24:i}:{};return{style:{textAlign:"right"},span:c?6:4,...h,...u}}),C=A(()=>Object.assign({text:g("common.resetText")},b.resetButtonOptions)),T=A(()=>Object.assign({text:g("common.queryText")},b.submitButtonOptions));function P(){o("toggle-advanced",b.isAdvanced)}return(c,O)=>{const u=Qe("a-button");return r.showActionButtonGroup?(M(),D(e(Me),G(q({key:0},v.value)),{default:W(()=>[be("div",{style:et([{width:"100%"},{textAlign:v.value.style.textAlign}])},[V(e(ve).Item,null,{default:W(()=>[z(c.$slots,"resetBefore"),r.showResetButton?(M(),D(u,q({key:0,type:"default",class:"mr-2"},C.value,{onClick:e(m)}),{default:W(()=>[le(oe(C.value.text),1)]),_:1},16,["onClick"])):U("",!0),z(c.$slots,"submitBefore"),r.showSubmitButton?(M(),D(u,q({key:1,type:"primary",class:"mr-2"},T.value,{onClick:e(w)}),{default:W(()=>[le(oe(T.value.text),1)]),_:1},16,["onClick"])):U("",!0),z(c.$slots,"advanceBefore"),r.showAdvancedButton&&!r.hideAdvanceBtn?(M(),D(u,{key:2,type:"link",size:"small",onClick:P},{default:W(()=>[le(oe(r.isAdvanced?e(g)("component.form.putAway"):e(g)("component.form.unfold"))+" ",1),V(e(Ct),{class:"ml-1",expand:!r.isAdvanced},null,8,["expand"])]),_:1})):U("",!0),z(c.$slots,"advanceAfter")]),_:3})],4)]),_:3},16)):U("",!0)}}}),Tt=({props:r,attrs:y})=>{const o=ke(ue(r)),b=fe({...r.initialValues}),g=fe({...r.initialValues}),m=ke(),w={...r.initialValues},v=new Map,C=new Map,T=fe({isAdvanced:!1,hideAdvanceBtn:!1,isLoad:!1,actionSpan:6}),P=A(()=>({...y,...o.value})),c=A(()=>{const{baseRowStyle:u={},rowProps:i}=e(P);return{style:u,...i}}),O=A(()=>({...P.value,...T}));return tt(()=>{o.value.schemas?.forEach(u=>{!C.has(u.field)&&I(u.componentProps)&&C.set(u.field,u.componentProps)})}),{formModel:b,defaultFormValues:g,schemaFormRef:m,formPropsRef:o,cacheFormModel:w,compRefMap:v,getFormProps:P,advanceState:T,getRowConfig:c,getFormActionBindProps:O,originComponentPropsFnMap:C,formSchemasRef:A(()=>e(o).schemas||[])}};function Ot(r){const{emit:y,formPropsRef:o,formSchemasRef:b,formModel:g,cacheFormModel:m,getFormProps:w,schemaFormRef:v,defaultFormValues:C,originComponentPropsFnMap:T,handleFormValues:P}=r;function c(){return e(v)?P(nt(e(g))):{}}function O(a){return e(o).schemas?.some(d=>d.field===a&&$(d.component)?vt.includes(d.component):!1)}async function u(a){const d=e(b),B=d.map(n=>n.field).filter(Boolean);Object.assign(m,a);const t=[];Object.entries(a).forEach(([n,s])=>{const f=d.find(p=>p.field===n),S=Reflect.has(a,n);if($(f?.component)&&(s=gt(f?.component,s)),S&&B.includes(n)){if(O(n))if(Array.isArray(s)){const p=[];for(const L of s)p.push(L?Be(L):null);Y(g,n,p)}else{const{componentProps:p}=f||{};let L=p;I(p)&&(L=L({formPropsRef:o,formModel:g})),Y(g,n,s?L?.valueFormat?s:Be(s):null)}else Y(g,n,s);t.push(n)}}),await K(t).catch(n=>{})}async function i(a){let d=[];X(a)&&d.push(a),J(a)&&(d=[...a]),e(o).schemas=d}async function h(a,d,B=!1){const t=ue(e(b)),n=t.findIndex(s=>s.field===d);if(!d||n===-1||B){B?t.unshift(a):t.push(a),o.value.schemas=t;return}n!==-1&&t.splice(n+1,0,a),o.value.schemas=t,k(o.value.schemas)}async function l(a){const d=ue(e(b));if(!a)return;let B=$(a)?[a]:a;$(a)&&(B=[a]);for(const t of B)if($(t)){const n=d.findIndex(s=>s.field===t);n!==-1&&(Te(g,t),d.splice(n,1))}o.value.schemas=d}function R(a){const d=e(b),B=[].concat(a);return d.find(t=>B.includes(t.field))}const x=a=>{let d=[];if(X(a)&&d.push(a),J(a)&&(d=[...a]),!d.every(s=>s.component==="Divider"||Reflect.has(s,"field")&&s.field)){console.error("All children of the form Schema array that need to be updated must contain the `field` field");return}const t=[],n=[];e(b).forEach(s=>{const f=d.find(S=>s.field===S.field);if(f){const S=f.componentProps,p=_e(s,f);if(T.has(s.field)){const L=T.get(s.field);p.componentProps=re=>({...L(re),...I(S)?S(re):S})}n.push(p),t.push(p)}else t.push(s)}),k(n),o.value.schemas=st(t,"field")};function k(a){let d=[];X(a)&&d.push(a),J(a)&&(d=[...a]);const B={},t=c();d.forEach(n=>{n.component!="Divider"&&Reflect.has(n,"field")&&n.field&&!xe(n.defaultValue)&&(!(n.field in t)||xe(t[n.field]))&&(B[n.field]=n.defaultValue)}),u(B)}async function F(){const{resetFunc:a,submitOnReset:d}=e(w);a&&I(a)&&await a(),Object.keys(g).forEach(B=>{Y(g,B,C[B])}),y("reset",g),d&&Z(),setTimeout(j)}async function K(a){return v.value?.validateFields(a)}async function _(a){return await v.value?.validate(a)}async function j(a){await v.value?.clearValidate(a)}async function Q(a,d){await v.value?.scrollToField(a,d)}async function Z(a){a&&a.preventDefault();const{submitFunc:d}=e(w);if(d&&I(d)){await d();return}if(e(v))try{const t=await _(),n=P(t);return y("submit",n),n}catch(t){return Promise.reject(t)}}return{submit:Z,handleEnterPress:a=>{const{autoSubmitOnEnter:d}=e(o);if(d&&a.key==="Enter"&&a.target&&a.target instanceof HTMLElement){const B=a.target;B&&B.tagName&&B.tagName.toUpperCase()=="INPUT"&&Z(a)}},clearValidate:j,validate:_,validateFields:K,getFieldsValue:c,updateSchema:x,resetSchema:i,getSchemaByFiled:R,appendSchemaByField:h,removeSchemaByField:l,resetFields:F,setFieldsValue:u,scrollToField:Q,setDefaultValue:k}}const _t=r=>{const{compRefMap:y,formModel:o,formPropsRef:b,cacheFormModel:g,schemaFormRef:m,getFormProps:w}=r,v=u=>i=>{i&&y.set(u,i)},C=(u,i)=>{Y(o,u,i),Y(g,u,i);const{validateTrigger:h}=e(w);(!h||h==="change")&&m.value?.validateFields([u])},T=u=>Te(o,u),P=u=>{b.value=_e(e(b)||{},u)};function c(u){if(!X(u))return{};const i={};for(const h of Object.entries(u)){let[,l]=h;const[R]=h;if(!R||J(l)&&l.length===0||I(l))continue;const x=e(w).transformDateFunc;X(l)&&(l=x?.(l)),J(l)&&l[0]?.format&&l[1]?.format&&(l=l.map(k=>x?.(k))),$(l)&&(l=l.trim()),Y(i,R,l)}return O(i)}function O(u){const i=e(w).fieldMapToTime;if(!i||!Array.isArray(i))return u;for(const[h,[l,R],x="YYYY-MM-DD"]of i){if(!h||!l||!R||!u[h])continue;const[k,F]=u[h];u[l]=Ie(k).format(x),u[R]=Ie(F).format(x),Reflect.deleteProperty(u,h)}return u}return{setItemRef:v,setFormModel:C,delFormModel:T,setSchemaFormProps:P,handleFormValues:c}};let jt,Lt,$t;function Dt(){return{screenRef:A(()=>e(jt)),widthRef:Lt,screenEnum:dt,realWidthRef:$t}}const H=24,Vt=({instance:r,emit:y})=>{const{realWidthRef:o,screenEnum:b,screenRef:g}=Dt(),{advanceState:m,getFormProps:w,formSchemasRef:v,formModel:C,defaultFormValues:T}=r,P=A(()=>{if(!m.isAdvanced)return 0;const i=e(w).emptySpan||0;if(ge(i))return i;if(X(i)){const{span:h=0}=i,l=e(g);return i[l.toLowerCase()]||h||0}return 0});pe([v,()=>m.isAdvanced,()=>e(o)],()=>{const{showAdvancedButton:i}=e(w);i&&O()},{immediate:!0});function c(i,h=0,l=!1){const R=e(o),x=parseInt(i.md)||parseInt(i.xs)||parseInt(i.sm)||i.span||H,k=parseInt(i.lg)||x,F=parseInt(i.xl)||k,K=parseInt(i.xxl)||F;return R<=b.LG?h+=x:R<b.XL?h+=k:R<b.XXL?h+=F:h+=K,l?(m.hideAdvanceBtn=!1,h<=H*2?(m.hideAdvanceBtn=!0,m.isAdvanced=!0):h>H*2&&h<=H*(e(w).autoAdvancedLine||3)?m.hideAdvanceBtn=!1:m.isLoad||(m.isLoad=!0,m.isAdvanced=!m.isAdvanced),{isAdvanced:m.isAdvanced,itemColSum:h}):h>H*(e(w).alwaysShowLines||1)?{isAdvanced:m.isAdvanced,itemColSum:h}:{isAdvanced:!0,itemColSum:h}}function O(){let i=0,h=0;const{baseColProps:l={}}=e(w);for(const R of e(v)){const{vShow:x,colProps:k}=R;let F=!0;if(ne(x)&&(F=x),I(x)&&(F=x({schema:A(()=>e(v).find(K=>K.field===R.field)),formModel:C,field:R.field,formInstance:r,values:{...e(T),...C}})),F&&(k||l)){const{itemColSum:K,isAdvanced:_}=c({...l,...k},i);i=K||0,_&&(h=i),R.isAdvanced=_}}m.actionSpan=h%H+e(P),c(e(w).actionColOptions||{span:H},i,!0),y("advanced-change")}function u(){m.isAdvanced=!m.isAdvanced}return{handleToggleAdvanced:u}},zt=ae({name:"SchemaForm",__name:"schema-form",props:ft,emits:mt,setup(r,{expose:y,emit:o}){const b=r,g=o,m=ot(),w=Tt({props:b,attrs:m}),{formModel:v,getRowConfig:C,schemaFormRef:T,getFormProps:P,getFormActionBindProps:c,formSchemasRef:O}=w,u=_t({...w}),{handleFormValues:i}=u,h=Ot({...w,emit:g,handleFormValues:i}),{handleEnterPress:l,setDefaultValue:R}=h,x={...w,...h,...u},{handleToggleAdvanced:k}=Vt({instance:x,emit:g});return g("register",x),St(x),y(x),at(()=>{R(O.value)}),(F,K)=>(M(),D(e(ve),q({ref_key:"schemaFormRef",ref:T},e(it)(e(P),e(pt)),{model:e(v),onKeypress:lt(e(l),["enter"])}),{default:W(()=>[V(e(rt),G(me(e(C))),{default:W(()=>[z(F.$slots,"formHeader"),z(F.$slots,"default",{},()=>[(M(!0),he(se,null,ie(e(O),_=>(M(),D(xt,{key:_.field,"form-model":e(v),"onUpdate:formModel":K[0]||(K[0]=j=>ct(v)?v.value=j:null),schema:_,"table-instance":F.tableInstance},ye({_:2},[ie(Object.keys(F.$slots),j=>({name:j,fn:W(Q=>[z(F.$slots,j,G(me(Q||{})))])}))]),1032,["form-model","schema","table-instance"]))),128)),F.showActionButtonGroup?(M(),D(Mt,q({key:0},e(c),{onToggleAdvanced:e(k)}),ye({_:2},[ie(["resetBefore","submitBefore","advanceBefore","advanceAfter"],_=>({name:_,fn:W(j=>[z(F.$slots,_,G(me(j||{})))])}))]),1040,["onToggleAdvanced"])):U("",!0)]),z(F.$slots,"formFooter")]),_:3},16)]),_:3},16,["model","onKeypress"]))}});export{xt as S,zt as _,Ft as a,wt as s};