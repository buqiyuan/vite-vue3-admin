import{k as n,bc as g,aX as S,d as x,I as c,Q as R,K as t,_ as i,B as l,S as p,J as f,R as V,a8 as q,ak as N,aW as m,aR as B,cc as y,cF as D,cG as O,b3 as z}from"./vendor-D7Y6X7_h.js";import{u as A}from"./dynamic-table-CtWW4hiU.js";import{A as d}from"./index-Bf9NpXkZ.js";import"./ApiSelect.vue_vue_type_script_setup_true_lang-BrXY2i5o.js";import"./index.vue_vue_type_style_index_0_lang-reX62h1K.js";import{u as F}from"./useFormModal-DrjhP41g.js";import"./schema-form.vue_vue_type_script_setup_true_lang-BWF4-paj.js";import"./is-CBsgbGQ7.js";import"./index-DKcumURF.js";import"./dateUtil-ohqk8BGA.js";import"./index-DaE14gLf.js";import"./Icon.vue_vue_type_script_setup_true_lang-B_bz3tPt.js";import"./useModal-p6LRjO4c.js";const G=s=>{switch(s){case 0:return"#d9d9d9";case 1:return"#52c41a"}},M=s=>{switch(s){case 0:return"停止";case 1:return"运行"}},E=[{title:"任务名称",dataIndex:"name",width:180},{title:"状态",width:100,dataIndex:"status",customRender:({record:s})=>n(g,{status:s.status===1?"processing":"default",color:G(s.status),text:M(s.status)},null)},{title:"类型",width:80,dataIndex:"type",customRender:({record:s})=>n(S,{color:"processing"},{default:()=>[s.type===1?"Interval":"Cron"]})},{title:"调用服务",dataIndex:"service",hideInSearch:!0,width:220},{title:"执行参数",dataIndex:"data",hideInSearch:!0,width:220},{title:"备注",dataIndex:"remark"}],W=[{field:"type",component:"RadioGroup",label:"名称",defaultValue:0,rules:[{required:!0,type:"number"}],componentProps:{options:[{label:"Cron",value:0},{label:"时间间隔",value:1}]}},{field:"name",component:"Input",label:"任务名称",rules:[{required:!0,type:"string"}]},{field:"service",component:"Input",label:"服务路径",rules:[{required:!0,type:"string"}],componentProps:{placeholder:"请输入调用服务的路径"}},{field:"data",component:"Input",label:"任务参数",componentProps:{placeholder:"请输入任务参数（可不填）"}},{field:"limit",component:"InputNumber",label:"执行次数",defaultValue:-1,componentProps:{min:-1,style:{width:"100%"}}},{field:"cron",component:"Input",label:"Cron",rules:[{required:!0,type:"string"}],vIf:({formModel:s})=>s.type===0,componentProps:{placeholder:"请输入Cron表达式"}},{field:"every",component:"InputNumber",label:"执行间隔",defaultValue:6e4,vIf:({formModel:s})=>s.type===1,rules:[{required:!0,type:"number"}],componentProps:{min:100,style:{width:"100%"}}},{field:"startTime",component:"DatePicker",label:"开始时间",vIf:({formModel:s})=>s.type===0,componentProps:{showTime:!0,style:{width:"100%"}}},{field:"endTime",component:"DatePicker",label:"结束时间",vIf:({formModel:s})=>s.type===0,componentProps:{showTime:!0,style:{width:"100%"}}},{field:"remark",component:"InputTextArea",label:"备注"},{field:"status",component:"RadioGroup",defaultValue:1,label:"状态",componentProps:{options:[{label:"运行",value:1},{label:"停止",value:0}]}}],se=x({name:"SystemScheduleTask",__name:"index",setup(s){const[h,T]=A({search:!1,size:"small"}),[I]=F(),u=()=>T?.reload(),b=async e=>{const[r]=await I({modalProps:{title:`${e.id?"编辑":"新增"}任务`,width:640,onFinish:async o=>{const a={...o,id:e.id};e.id?await d.systemTask.taskUpdate({id:e.id},a):await d.systemTask.taskCreate(a),u()}},formProps:{labelWidth:100,schemas:W}});if(e.id){const o=await d.systemTask.taskInfo({id:e.id});r?.setFieldsValue({...e,...o})}},w=async e=>{await d.systemTask.taskDelete({id:e}),u()},C=async e=>{await d.systemTask.taskOnce({id:e.id}),u()},_=async e=>{await d.systemTask.taskStart({id:e.id}),u()},v=async e=>{await d.systemTask.taskStop({id:e.id}),u()},$=e=>!e.startTime&&!e.endTime?"无时段限制":!e.startTime&&e.endTime?`无开始时间限制 - ${e.endTime}`:e.startTime&&!e.endTime?`${e.startTime} - 长期有效`:`${e.startTime} - ${e.endTime}`,P=[...E,{title:"操作",width:220,dataIndex:"ACTION",fixed:"right",actions:({record:e})=>[{label:"编辑",auth:{perm:"system:task:update",effect:"disable"},onClick:()=>b(e)},{label:"删除",auth:"system:task:delete",popConfirm:{title:"你确定要删除吗？",onConfirm:()=>w(e.id)}}]}];return(e,r)=>{const o=N("a-button");return c(),R("div",null,[n(l(h),{"row-key":"id","header-title":"定时任务","data-request":l(d).systemTask.taskList,columns:P,scroll:{x:2e3},bordered:""},{toolbar:t(()=>[n(o,{type:"primary",disabled:!e.$auth("system:task:create"),onClick:r[0]||(r[0]=a=>b({}))},{default:t(()=>[i(" 新增 ")]),_:1},8,["disabled"])]),expandedRowRender:t(({record:a})=>[n(l(m),{column:1},{default:t(()=>[n(l(m).Item,{label:"任务编号"},{default:t(()=>[i("# "+p(a.id),1)]),_:2},1024),n(l(m).Item,{label:"执行次数"},{default:t(()=>[i(p(a.limit>0?`仅 ${a.limit} 次`:"无次数限制"),1)]),_:2},1024),a.type===1?(c(),f(l(m).Item,{key:0,label:"执行间隔"},{default:t(()=>[i(" 每"+p(a.every)+"毫秒执行一次 ",1)]),_:2},1024)):(c(),f(l(m).Item,{key:1,label:"Cron表达式"},{default:t(()=>[n(l(B),null,{title:t(()=>[i("秒 分 小时 日期 月份 星期 年(可选)")]),default:t(()=>[i(" "+p(a.cron),1)]),_:2},1024)]),_:2},1024)),a.type===0?(c(),f(l(m).Item,{key:2,label:"执行时间段"},{default:t(()=>[V("span",null,p($(a)),1)]),_:2},1024)):q("",!0),n(l(m).Item,{label:"执行操作"},{default:t(()=>[n(l(y),{title:"确认手动执行一次该任务吗?",disabled:!e.$auth("system:task:once"),onConfirm:k=>C(a)},{default:t(()=>[n(o,{type:"link",size:"small",disabled:!e.$auth("system:task:once")},{icon:t(()=>[n(l(D))]),default:t(()=>[i("仅一次 ")]),_:1},8,["disabled"])]),_:2},1032,["disabled","onConfirm"]),n(l(y),{title:"确认运行该任务吗?",disabled:!e.$auth("system:task:start")||a.status!==0,onConfirm:k=>_(a)},{default:t(()=>[n(o,{type:"link",size:"small",disabled:!e.$auth("system:task:start")||a.status!==0},{icon:t(()=>[n(l(O))]),default:t(()=>[i("运行 ")]),_:2},1032,["disabled"])]),_:2},1032,["disabled","onConfirm"]),n(l(y),{title:"确认停止该任务吗?",disabled:!e.$auth("system:task:stop")||a.status!==1,onConfirm:k=>v(a)},{default:t(()=>[n(o,{type:"link",size:"small",disabled:!e.$auth("system:task:stop")||a.status!==1},{icon:t(()=>[n(l(z))]),default:t(()=>[i("停止 ")]),_:2},1032,["disabled"])]),_:2},1032,["disabled","onConfirm"])]),_:2},1024)]),_:2},1024)]),_:1},8,["data-request"])])}}});export{se as default};
