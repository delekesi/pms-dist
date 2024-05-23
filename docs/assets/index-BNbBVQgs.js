import{d as Ke,u as Qe,a as r,o as Xe,c as t,e as k,s as m,w as s,x as p,f as _,g as d,y as i,F as U,q as N,i as V,k as B,v as q,p as Ze,l as el}from"./index-cH2wYD0s.js";import{r as ll,a as al,b as ol,e as tl,c as nl,v as rl,m as sl}from"./index-B6AbUHdL.js";import{_ as j}from"./request-CSFqbYZV.js";import{d as dl}from"./index-GD1etizs.js";import{_ as ul}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./axios-B4uVmeYG.js";const F=L=>(Ze("data-v-21016735"),L=L(),el(),L),il={class:"dialog-footer"},ml={class:"common-top"},cl={class:"common-top-text disFlex justifySpaceBetween"},vl={key:0},pl={key:1},fl={key:2},kl={class:"common-contain"},_l=F(()=>_("span",{class:"common-contain-headText marginBottom20"},"任务信息",-1)),bl=F(()=>_("span",{class:"common-contain-headText"},"任务成员",-1)),gl={class:"common-contain-item"},Vl=["onClick"],yl={key:0},wl=F(()=>_("span",{class:"common-contain-headText"},"调整记录",-1)),Tl={class:"common-contain-item"},hl={key:1},Rl=F(()=>_("span",{class:"common-contain-headText"},"反馈记录",-1)),Hl={class:"common-contain-item"},jl={key:2},Il=F(()=>_("span",{class:"common-contain-headText"},"审核记录",-1)),Sl={class:"common-contain-item"},Cl={key:3,class:"marginAuto"},Al=Ke({__name:"index",setup(L){const I=Qe(),$=r(0);$.value=I.currentRoute.value.query.taskid;const n=r("");n.value=I.currentRoute.value.query.id;const O=r(),oe=r(),ke=r(0),_e=r(),z=r(""),J=r(),D=r(),te=r(),W=r(),Y=r(),be=r(),ne=r(),re=r(),G=r(),se=r(),ge=r(),S=r(),K=r(),Q=r(),Ve=r(),ye=r(),E=r(),we=r(),X=r(),Z=r(),P=r(!1),x=r(),Te=r(),he=r(),de=r(),ue=r("");let v=r({projectName:"",projectCode:"",milestoneDate:"",projectMilestone:"",taskName:"",taskDesc:"",projectVersion:0}),y=r({oldPerformanceHours:"",performanceHours:"",performanceHoursRecord:""}),b=r({oldEndTime:"",endTime:"",endDateRecord:""});const Re={performanceHours:[{required:!0}],performanceHoursRecord:[{required:!0}]},He={endTime:[{required:!0}],endDateRecord:[{required:!0}]},g=r([]);let ee=[];g.value.push({endTime:new Date().getTime(),name:"",performanceHours:"",id:0});let ie=r([]),me=r([]);const ce=()=>{localStorage.setItem("originFlag","1"),I.go(-1)};Xe(async()=>{je(),Ne(),de.value=n.value==="create"||n.value==="read"?0:1,(n.value==="read"||n.value==="edit")&&await Ce(),n.value==="edit"&&ae(O.value)});const je=async()=>{let o=await dl();o.code==0&&(S.value=o.constantsList.versionStatus,K.value=o.constantsList.milestoneStatus,Q.value=o.constantsList.projectType,Ve.value=o.constantsList.projectStatus,ye.value=Object.keys(K.value||{}).map(e=>({value:Number(e),label:K.value[e]})),E.value=Object.keys(S.value||{}).map(e=>({value:Number(e),label:S.value[e]})),we.value=Object.keys(Q.value||{}).map(e=>({value:Number(e),label:Q.value[e]})))},Ie=o=>{ge.value=o.value[1]},C=r(0),ve=(o,e,a,u)=>{switch(P.value=!0,o){case"changeHours":x.value="changeHours",y.value.oldPerformanceHours=String(e),C.value=u;break;case"changeEndTime":x.value="changeEndTime",b.value.oldEndTime=a,C.value=u;break}},Se=async()=>{switch(x.value){case"changeHours":y.value.performanceHours&&y.value.performanceHoursRecord?(g.value[C.value].performanceHours=y.value.performanceHours,g.value[C.value].performanceHoursRecord=y.value.performanceHoursRecord,le()):await j({type:"error",message:"请补全信息"});break;case"changeEndTime":b.value.endTime&&b.value.endDateRecord?(b.value.endTime=pe(b.value.endTime),g.value[C.value].endTime=pe(b.value.endTime),g.value[C.value].endDateRecord=b.value.endDateRecord,le()):j({type:"error",message:"请补全信息"});break}},le=()=>{P.value=!1,y.value={oldPerformanceHours:"",performanceHours:"",performanceHoursRecord:""},b.value={oldEndTime:"",endTime:"",endDateRecord:""}},pe=o=>{const e=new Date(o),a=e.getFullYear(),u=String(e.getMonth()+1).padStart(2,"0"),h=String(e.getDate()).padStart(2,"0"),R=String(e.getHours()).padStart(2,"0"),w=String(e.getMinutes()).padStart(2,"0"),f=String(e.getSeconds()).padStart(2,"0");return`${a}-${u}-${h} ${R}:${w}:${f}`},Ce=async()=>{let o=await ll($.value,de.value);o.code==0?(v.value=o.taskInfo,G.value=E.value.find(e=>e.value===o.taskInfo.projectVersion).label,g.value=o.taskAdmin,ee=JSON.parse(JSON.stringify(o.taskAdmin)),ie.value=o.taskAdjustingRecords,me.value=o.taskFeedbackRecords,ue.value=o.taskApproveRecords,O.value=v.value.proId,await ae(O.value),g.value.forEach(e=>{const a=$e(e.userid);e.value=[a,e.userid]})):(j({type:"error",message:o.errMsg}),I.go(-1))},Ae=o=>{const e={},a=g.value.indexOf(o);g.value.splice(a+1,0,e)},Ue=o=>{if(g.value.length>1){const e=g.value.indexOf(o);g.value.splice(e,1)}else j({type:"error",message:"任务下至少有一个成员！"})},Ne=async()=>{let o=await al();o.code==0&&(oe.value=o.projectNames)},De=async o=>{let e=await rl(o);e.code==0&&(_e.value=e.projectAdmin,z.value=e.projectCode,J.value=e.projectVersion,S.value=e.versionStatus,E.value=Object.keys(S.value||{}).map(a=>({value:Number(a),label:S.value[a]})),Y.value=e.milestoneStatus,be.value=Object.keys(Y.value||{}).map(a=>({value:Number(a),label:Y.value[a]}))),J.value.forEach(a=>{a.versionLabel=E.value.find(u=>u.value===a.versionName).label})},ae=async o=>{let e=await ol(o);W.value=Be(e.adminList)},xe=async o=>{let e=await sl(o);D.value=e.milestoneList,D.value.forEach(a=>{a.mileStoneLabel=D.value.milestoneName})},Me=o=>{const e=D.value.find(a=>a.milestoneId===o);Z.value=e.milestoneEndtime},Be=o=>o.map(e=>({value:e.roleid,label:e.rolename,children:Fe(e.userList||[])})),Fe=o=>o.map(e=>({value:e.userid,label:e.loginTrueName})),Le={checkStrictly:!1},$e=o=>{let e;for(const a of W.value){for(const u of a.children)if(u.value===o){e=a.value;break}if(e)break}return e},Ee=o=>{te.value=o},Pe=async()=>{const o=qe(ee,g.value,"taskAdminId","value_performanceHours_endTime");let e=[].concat(g.value);for(const a of e)if(a.value&&(a.adminId=a.value[1]),a.taskAdminId){const u=o.edit.find(f=>f.taskAdminId==a.taskAdminId);let h,R,w;if(u){const f=ee.find(T=>T.taskAdminId==u.taskAdminId);f&&(h=u.performanceHours!=f.performanceHours,R=u.adminId!=f.userid,w=u.endTime!=f.endTime)}else h=!1,R=!1,w=!1;a.performanceHoursFlag=h,a.adminIdFlag=R,a.endTimeFlag=w}if(e=e.concat(o.del),e=e.map(a=>({...a,taskid:$.value})),n.value==="edit"){let a=await tl(e);a.code==0?(I.go(-1),j({type:"success",message:"修改任务成功"})):j({type:"error",message:a.errMsg})}else if(n.value==="create")if(await X.value.validate()){let u=await nl(te.value,v.value.taskName,v.value.taskDesc,e);u.code==0?(j({type:"success",message:"新增任务成功"}),setTimeout(()=>{i(X).resetFields(),I.go(-1)},200)):j({type:"error",message:u.errMsg})}else return j({type:"error",message:"请补全信息！"})};function qe(o,e,a,u){const h=e.filter(f=>!f[a]),R=o.filter(f=>!e.find(T=>T[a]===f[a])).map(f=>(f.deleteMark=1,f)),w=e.filter(f=>{let T=o.find(H=>H[a]===f[a]),M=u.split("_"),A;return T&&(A=M.some(H=>T[H]!==f[H])),T&&A});return{add:h,del:R,edit:w}}const Oe=o=>{ke.value=o},ze={projectName:[{required:!0}],taskName:[{required:!0}],taskDesc:[{required:!0}]};return(o,e)=>{const a=V("el-input"),u=V("el-form-item"),h=V("el-form"),R=V("el-date-picker"),w=V("el-button"),f=V("el-dialog"),T=V("el-option"),M=V("el-select"),A=V("el-row"),H=V("el-table-column"),Je=V("el-cascader"),We=V("CirclePlusFilled"),fe=V("el-icon"),Ye=V("RemoveFilled"),Ge=V("el-table");return t(),k("div",null,[n.value==="edit"?(t(),m(f,{key:0,modelValue:P.value,"onUpdate:modelValue":e[6]||(e[6]=l=>P.value=l),title:"调整内容",width:"800",center:"","show-close":!1},{footer:s(()=>[_("div",il,[d(w,{class:"borBlue_fontBlue",onClick:le},{default:s(()=>[B("取消")]),_:1}),d(w,{type:"primary",onClick:Se},{default:s(()=>[B(" 确定 ")]),_:1})])]),default:s(()=>[x.value==="changeHours"?(t(),m(h,{key:0,ref_key:"hourRef",ref:Te,model:i(y),rules:Re},{default:s(()=>[d(u,{label:"原绩效工时：","label-width":"100"},{default:s(()=>[d(a,{modelValue:i(y).oldPerformanceHours,"onUpdate:modelValue":e[0]||(e[0]=l=>i(y).oldPerformanceHours=l),class:"marginBottom10",disabled:""},null,8,["modelValue"])]),_:1}),d(u,{prop:"performanceHours",label:"绩效工时：","label-width":"100"},{default:s(()=>[d(a,{modelValue:i(y).performanceHours,"onUpdate:modelValue":e[1]||(e[1]=l=>i(y).performanceHours=l),class:"marginBottom10"},null,8,["modelValue"])]),_:1}),d(u,{prop:"performanceHoursRecord",label:"调整原因：","label-width":"100"},{default:s(()=>[d(a,{modelValue:i(y).performanceHoursRecord,"onUpdate:modelValue":e[2]||(e[2]=l=>i(y).performanceHoursRecord=l),class:"marginBottom10"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])):p("",!0),x.value==="changeEndTime"?(t(),m(h,{key:1,ref_key:"dateRef",ref:he,model:i(b),rules:He},{default:s(()=>[d(u,{label:"原结束日期：","label-width":"100"},{default:s(()=>[d(a,{modelValue:i(b).oldEndTime,"onUpdate:modelValue":e[3]||(e[3]=l=>i(b).oldEndTime=l),class:"marginBottom10",disabled:""},null,8,["modelValue"])]),_:1}),d(u,{prop:"endTime",label:"结束日期：","label-width":"100"},{default:s(()=>[d(R,{modelValue:i(b).endTime,"onUpdate:modelValue":e[4]||(e[4]=l=>i(b).endTime=l),type:"date",placeholder:"请选择日期",class:"marginBottom10"},null,8,["modelValue"])]),_:1}),d(u,{prop:"endDateRecord",label:"调整原因：","label-width":"100"},{default:s(()=>[d(a,{modelValue:i(b).endDateRecord,"onUpdate:modelValue":e[5]||(e[5]=l=>i(b).endDateRecord=l),class:"marginBottom10"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])):p("",!0)]),_:1},8,["modelValue"])):p("",!0),_("div",ml,[_("div",cl,[n.value==="read"?(t(),k("span",vl,"查看")):n.value==="edit"?(t(),k("span",pl,"编辑")):(t(),k("span",fl,"创建任务")),$.value?(t(),m(w,{key:3,class:"bgBlue_fontWhite",size:"small",onClick:ce},{default:s(()=>[B("返回")]),_:1})):p("",!0)])]),_("div",kl,[_l,d(h,{width:"80%",ref_key:"formRef",ref:X,"label-width":"120px",class:"marginBottom20",model:i(v),rules:ze},{default:s(()=>[d(A,{class:"marginBottom20"},{default:s(()=>[d(u,{label:"项目名称：",prop:"projectName"},{default:s(()=>[n.value==="read"||n.value==="edit"?(t(),m(a,{key:0,disabled:"",modelValue:i(v).projectName,"onUpdate:modelValue":e[7]||(e[7]=l=>i(v).projectName=l)},null,8,["modelValue"])):(t(),m(M,{key:1,class:"width120",disabled:n.value=="read"||n.value=="edit",modelValue:i(v).projectName,"onUpdate:modelValue":e[8]||(e[8]=l=>i(v).projectName=l)},{default:s(()=>[(t(!0),k(U,null,N(oe.value,l=>(t(),m(T,{key:l.id,value:l.id,label:l.projectName,onClick:c=>{De(l.id),Oe(l.id),ae(l.id)}},null,8,["value","label","onClick"]))),128))]),_:1},8,["disabled","modelValue"]))]),_:1}),d(u,{label:"项目编号："},{default:s(()=>[n.value=="read"||n.value=="edit"?(t(),m(a,{key:0,disabled:"",modelValue:i(v).projectCode,"onUpdate:modelValue":e[9]||(e[9]=l=>i(v).projectCode=l)},null,8,["modelValue"])):(t(),m(a,{key:1,disabled:"",modelValue:z.value,"onUpdate:modelValue":e[10]||(e[10]=l=>z.value=l)},null,8,["modelValue"]))]),_:1}),n.value=="edit"?(t(),m(u,{key:0,label:"项目阶段："},{default:s(()=>[d(a,{disabled:"",modelValue:se.value,"onUpdate:modelValue":e[11]||(e[11]=l=>se.value=l)},null,8,["modelValue"])]),_:1})):p("",!0),n.value=="edit"?(t(),m(u,{key:1,label:"创建人："},{default:s(()=>[d(a,{disabled:"",modelValue:i(v).createPeople,"onUpdate:modelValue":e[12]||(e[12]=l=>i(v).createPeople=l)},null,8,["modelValue"])]),_:1})):p("",!0),n.value!="edit"?(t(),m(u,{key:2,label:"版本："},{default:s(()=>[n.value=="read"?(t(),m(a,{key:0,disabled:"",modelValue:G.value,"onUpdate:modelValue":e[13]||(e[13]=l=>G.value=l)},null,8,["modelValue"])):(t(),m(M,{key:1,class:"width90",modelValue:ne.value,"onUpdate:modelValue":e[14]||(e[14]=l=>ne.value=l)},{default:s(()=>[(t(!0),k(U,null,N(J.value,l=>(t(),m(T,{onClick:c=>xe(l.versionId),key:l.versionId,label:l.versionLabel,value:l.versionId},null,8,["onClick","label","value"]))),128))]),_:1},8,["modelValue"]))]),_:1})):p("",!0),n.value!="edit"?(t(),m(u,{key:3,label:"里程碑："},{default:s(()=>[n.value=="read"?(t(),m(a,{key:0,disabled:"",modelValue:i(v).projectMilestone,"onUpdate:modelValue":e[15]||(e[15]=l=>i(v).projectMilestone=l)},null,8,["modelValue"])):(t(),m(M,{key:1,class:"width120",modelValue:re.value,"onUpdate:modelValue":e[16]||(e[16]=l=>re.value=l)},{default:s(()=>[(t(!0),k(U,null,N(D.value,l=>(t(),m(T,{key:l.milestoneId,onClick:c=>(Ee(l.milestoneId),Me(l.milestoneId)),label:l.mileStoneLabel,value:l.milestoneName},null,8,["onClick","label","value"]))),128))]),_:1},8,["modelValue"]))]),_:1})):p("",!0),n.value!="edit"?(t(),m(u,{key:4,label:"里程碑日期："},{default:s(()=>[n.value=="read"?(t(),m(a,{key:0,disabled:"",modelValue:i(v).milestoneDate,"onUpdate:modelValue":e[17]||(e[17]=l=>i(v).milestoneDate=l)},null,8,["modelValue"])):(t(),m(a,{key:1,disabled:"",modelValue:Z.value,"onUpdate:modelValue":e[18]||(e[18]=l=>Z.value=l)},null,8,["modelValue"]))]),_:1})):p("",!0)]),_:1}),d(A,{class:"marginBottom20"},{default:s(()=>[d(u,{label:"任务名称：",class:"flex1",prop:"taskName"},{default:s(()=>[d(a,{disabled:n.value=="read"||n.value=="edit",modelValue:i(v).taskName,"onUpdate:modelValue":e[19]||(e[19]=l=>i(v).taskName=l)},null,8,["disabled","modelValue"])]),_:1})]),_:1}),d(A,{class:"marginBottom20"},{default:s(()=>[d(u,{label:"任务描述：",class:"flex1",prop:"taskDesc"},{default:s(()=>[d(a,{disabled:n.value=="read"||n.value=="edit",type:"textarea",modelValue:i(v).taskDesc,"onUpdate:modelValue":e[20]||(e[20]=l=>i(v).taskDesc=l)},null,8,["disabled","modelValue"])]),_:1})]),_:1})]),_:1},8,["model"]),bl,_("div",gl,[d(Ge,{data:g.value,"header-row-class-name":"table-header",border:"",class:"width1000 left200"},{default:s(()=>[d(H,{type:"index",width:"80",label:"序号"}),d(H,{prop:"name",label:"姓名",width:"240",align:"center"},{default:s(l=>[n.value!="read"?(t(),m(Je,{key:0,options:W.value,onChange:c=>Ie(l.row),modelValue:l.row.value,"onUpdate:modelValue":c=>l.row.value=c,props:Le,clearable:"","expand-trigger":"click"},null,8,["options","onChange","modelValue","onUpdate:modelValue"])):p("",!0)]),_:1}),d(H,{prop:"performanceHours",label:"绩效工时",width:"180",align:"center"},{default:s(l=>[n.value!="read"&&n.value!="edit"?(t(),m(a,{key:0,modelValue:l.row.performanceHours,"onUpdate:modelValue":c=>l.row.performanceHours=c,placeholder:"请输入"},null,8,["modelValue","onUpdate:modelValue"])):p("",!0),n.value==="edit"&&l.row.taskAdminId?(t(),k("div",{key:1,onClick:c=>ve("changeHours",l.row.performanceHours,"",l.$index),class:"borderdcdfe6"},[_("span",null,q(l.row.performanceHours),1)],8,Vl)):n.value==="edit"&&!l.row.taskAdminId?(t(),m(a,{key:2,modelValue:l.row.performanceHours,"onUpdate:modelValue":c=>l.row.performanceHours=c,placeholder:"请输入"},null,8,["modelValue","onUpdate:modelValue"])):p("",!0)]),_:1}),n.value=="read"?(t(),m(H,{key:0,prop:"endTime",label:"预计结束时间",align:"center"})):p("",!0),n.value!="read"?(t(),m(H,{key:1,prop:"endTime",label:"结束日期",width:"260",align:"center"},{default:s(l=>[n.value!="read"&&n.value!="edit"?(t(),m(R,{key:0,type:"date",placeholder:"请选择日期",modelValue:l.row.endTime,"onUpdate:modelValue":c=>l.row.endTime=c},null,8,["modelValue","onUpdate:modelValue"])):p("",!0),n.value==="edit"&&l.row.name?(t(),m(a,{key:1,placeholder:"请选择日期",modelValue:l.row.endTime,"onUpdate:modelValue":c=>l.row.endTime=c,onClick:c=>ve("changeEndTime","",l.row.endTime,l.$index)},null,8,["modelValue","onUpdate:modelValue","onClick"])):n.value==="edit"&&!l.row.name?(t(),m(R,{key:2,type:"date",placeholder:"请选择日期",modelValue:l.row.endTime,"onUpdate:modelValue":c=>l.row.endTime=c},null,8,["modelValue","onUpdate:modelValue"])):p("",!0)]),_:1})):p("",!0),n.value!="read"?(t(),m(H,{key:2,label:"操作",align:"center"},{default:s(({row:l})=>[d(fe,{class:"iconRemove marginRight20",onClick:c=>Ae(l)},{default:s(()=>[d(We)]),_:2},1032,["onClick"]),d(fe,{class:"iconRemove",onClick:c=>Ue(l)},{default:s(()=>[d(Ye)]),_:2},1032,["onClick"])]),_:1})):p("",!0)]),_:1},8,["data"])]),n.value=="read"?(t(),k("div",yl,[wl,_("div",Tl,[_("ul",null,[(t(!0),k(U,null,N(i(ie),(l,c)=>(t(),k("li",{key:c},q(l),1))),128))])])])):p("",!0),n.value=="read"?(t(),k("div",hl,[Rl,_("div",Hl,[_("ul",null,[(t(!0),k(U,null,N(i(me),(l,c)=>(t(),k("li",{key:c},q(l),1))),128))])])])):p("",!0),n.value=="read"?(t(),k("div",jl,[Il,_("div",Sl,[_("ul",null,[(t(!0),k(U,null,N(ue.value,(l,c)=>(t(),k("li",{key:c},q(l),1))),128))])])])):p("",!0),n.value!="read"?(t(),k("div",Cl,[d(w,{size:"small",class:"borBlue_fontBlue",onClick:ce},{default:s(()=>[B("取消")]),_:1}),d(w,{size:"small",type:"primary",onClick:Pe},{default:s(()=>[B("保存")]),_:1})])):p("",!0)])])}}}),Fl=ul(Al,[["__scopeId","data-v-21016735"]]);export{Fl as default};
