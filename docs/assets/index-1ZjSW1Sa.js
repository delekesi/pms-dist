import{_ as k}from"./request-BhpbuWvq.js";import{d as Ie,a as o,u as Pe,o as Ve,c as h,e as P,g as a,w as s,f as u,i as g,k as b,x,s as q,y as r,F as A,q as B,v as f,H as de,p as Ce,l as Ne}from"./index-Bye8D5cU.js";import{d as pe,f as xe,g as De,t as Re,i as je,j as ze,k as He,s as Me}from"./index-CUYHNdYu.js";import{_ as Fe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./axios-B4uVmeYG.js";const $=D=>(Ce("data-v-bdfa603b"),D=D(),Ne(),D),Ue={class:"height963"},qe={key:0},Ae=$(()=>u("span",{class:"margin010"},"小时",-1)),Be=$(()=>u("span",{class:"margin010"},"分钟",-1)),$e={class:"dialog-footer"},Oe={class:"marginTop15px borderRadius5"},Le=$(()=>u("span",null,"项目：",-1)),Je={class:"marginTop15px height100per"},Ee=["onClick"],Ye=["onClick"],Ge=["onClick"],Ke=["onClick"],Qe={class:"page"},We={class:"list-pnoSpan"},Xe={class:"list-pagesize"},Ze=["onClick"],ea=["onClick"],aa={class:"page"},ta={class:"list-pnoSpan"},la={class:"list-pagesize"},sa=Ie({__name:"index",setup(D){const O=o("first"),ce=Pe(),V=o("");let L=o([]);const ge=o(),y=o(""),R=o(""),M=o(""),J=o(),E=o([]),Y=o(0),G=localStorage.getItem("userInfo"),K=o();if(G){const l=JSON.parse(G);K.value=l.loginUserId}const _=o({currentPage:1,pageSize:0,totalPage:0,totalResult:0}),S=o({currentPage:1,pageSize:0,totalPage:0,totalResult:0}),Q=o(),F=o([]);Ve(()=>{if((localStorage.getItem("originFlag")?localStorage.getItem("originFlag"):"")==="1"){const t=JSON.parse(localStorage.getItem("localDate")||"");_.value.currentPage=t.currentPage,V.value=t.projectName,R.value=t.dataData,F.value=t.userIds,M.value=t.Prostatus,localStorage.removeItem("localDate"),localStorage.removeItem("originFlag")}v()});const m=o(!1),j=o(0),I=o(0),W=o(0);let i=o({projectName:"",progressDsec:"",feedHour:"",feedMin:"",resetFields:function(){}}),w=o({approveResult:0,approveSuggestion:""});const X=o(0),Z=l=>{console.log(`${l} items per page`)},ee=()=>{v()},U=(l,t,d,c,p)=>{switch(m.value=!0,l){case"finish":y.value="任务完成确认",I.value=d;break;case"verify":y.value="任务审核",j.value=t,I.value=d;break;case"feedback":y.value="任务反馈",j.value=t,I.value=d,W.value=c,i.value.projectName=p}},me=()=>{const l={currentPage:_.value.currentPage,projectName:V.value,dataData:R.value,userIds:F.value,Prostatus:M.value};localStorage.setItem("localDate",JSON.stringify(l))},ve=()=>{switch(y.value){case"移除任务成员确认":_e(),N();break;case"任务完成确认":be(),N();break;case"任务反馈":ke(),N();break;case"任务审核":fe(),N()}},N=()=>{m.value=!1,i.value={projectName:"",progressDsec:"",feedHour:"",feedMin:"",resetFields:function(){}},w.value={approveResult:0,approveSuggestion:""},le={approveResult:[{required:!1}]},oe={progressDsec:[{required:!1}],feedHour:[{required:!1}],feedMin:[{required:!1}]}},v=async()=>{let l=await pe(_.value.currentPage,V.value,R.value,K.value,M.value);l.code==0&&(L.value=l.list,_.value=l.pageInfo,Q.value=Object.keys(l.data||{}).map(p=>({value:Number(p),label:l.data[p]})));let t=await xe();t.code==0&&(J.value=t.projectNames);let d=await De();d.code==0&&(ge.value=d.roleList);let c=await pe(S.value.currentPage,V.value,R.value,F.value,4);c.code==0&&(E.value=c.list,S.value=c.pageInfo,Y.value=c.list.length,Q.value=Object.keys(l.data||{}).map(p=>({value:Number(p),label:l.data[p]})))},z=(l,t)=>{var d=new Date(l),c=d.getFullYear(),p=d.getMonth()+1,T=d.getDate();return d.getHours(),d.getMinutes(),d.getSeconds(),l?c+"-"+(p.toString().length>1?p:"0"+p)+"-"+(T.toString().length>1?T:"0"+T):""},ae=l=>{switch(l){case 0:return"red";case 1:return"orange";case 2:return"green";case 3:return"purple";case 4:return"orange"}},te=l=>{switch(l){case 0:return"未开始";case 1:return"进行中";case 2:return"已完成";case 3:return"已逾期";case 4:return"待审核"}};let le={approveResult:[{required:!0}]};const fe=async()=>{let l=await Re(j.value,I.value,w.value.approveResult,w.value.approveSuggestion);l.code==0?(m.value=!1,v(),k({type:"success",message:l.errMsg})):(m.value=!1,v(),k({type:"error",message:l.errMsg}))},se=l=>{me(),ce.push({path:"/addTask",query:{id:"read",taskid:l,activeIndex:"/allTask"}})},_e=async()=>{let l=await je(I.value);l.code==0?(m.value=!1,v(),k({type:"success",message:"删除任务成功"})):(m.value=!1,v(),k({type:"error",message:l.errMsg}))},be=async()=>{let l=await ze(I.value);l.code==0?(m.value=!1,v(),k({type:"success",message:"完成任务成功"})):(m.value=!1,k({type:"error",message:l.errMsg}))};let oe={progressDsec:[{required:!0}],feedHour:[{required:!0}],feedMin:[{required:!0}]};const ke=async()=>{X.value=Number(i.value.feedHour)*60+Number(i.value.feedMin);let l=await He(I.value,j.value,i.value.progressDsec,W.value,X.value);l.code==0?(m.value=!1,v(),k({type:"success",message:"反馈成功"})):(m.value=!1,v(),k({type:"error",message:l.errMsg}))},he=async l=>{let t=await Me(l);t.code==0?(k({type:"success",message:"任务已开始"}),v()):k({type:"error",message:t.errMsg})};return(l,t)=>{const d=g("el-input"),c=g("el-form-item"),p=g("el-option"),T=g("el-select"),Se=g("el-row"),re=g("el-form"),H=g("el-button"),ye=g("el-dialog"),n=g("el-table-column"),ne=g("el-table"),ue=g("el-pagination"),ie=g("el-tab-pane"),we=g("el-badge"),Te=g("el-tabs");return h(),P("div",Ue,[a(ye,{modelValue:m.value,"onUpdate:modelValue":t[6]||(t[6]=e=>m.value=e),title:y.value,width:"800",center:""},{footer:s(()=>[u("div",$e,[a(H,{type:"borBlue_fontBlue",onClick:N},{default:s(()=>[b("取消")]),_:1}),a(H,{type:"primary",onClick:ve},{default:s(()=>[b(" 确定 ")]),_:1})])]),default:s(()=>[y.value==="任务完成确认"?(h(),P("div",qe," 确认完成此任务？ ")):x("",!0),y.value==="任务反馈"?(h(),q(re,{key:1,model:r(i),rules:r(oe)},{default:s(()=>[a(c,{label:"任务名称：","label-width":"100",prop:r(i).projectName},{default:s(()=>[a(d,{class:"marginBottom10",disabled:"",modelValue:r(i).projectName,"onUpdate:modelValue":t[0]||(t[0]=e=>r(i).projectName=e)},null,8,["modelValue"])]),_:1},8,["prop"]),a(c,{label:"进度描述：","label-width":"100",prop:r(i).progressDsec},{default:s(()=>[a(d,{class:"marginBottom10",type:"textarea",modelValue:r(i).progressDsec,"onUpdate:modelValue":t[1]||(t[1]=e=>r(i).progressDsec=e)},null,8,["modelValue"])]),_:1},8,["prop"]),a(Se,{align:"middle"},{default:s(()=>[a(c,{label:"用时","label-width":"100",prop:r(i).feedHour},{default:s(()=>[a(T,{width:"50px",class:"width100",modelValue:r(i).feedHour,"onUpdate:modelValue":t[2]||(t[2]=e=>r(i).feedHour=e)},{default:s(()=>[(h(),P(A,null,B(30,e=>a(p,{key:e,label:e,value:e},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),Ae]),_:1},8,["prop"]),a(c,{prop:r(i).feedMin},{default:s(()=>[a(T,{width:"50px",class:"width100",modelValue:r(i).feedMin,"onUpdate:modelValue":t[3]||(t[3]=e=>r(i).feedMin=e)},{default:s(()=>[(h(),P(A,null,B(60,e=>a(p,{key:e,label:e,value:e},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),Be]),_:1},8,["prop"])]),_:1})]),_:1},8,["model","rules"])):x("",!0),y.value==="任务审核"?(h(),q(re,{key:2,model:r(w),rules:r(le)},{default:s(()=>[a(c,{label:"审批结果",prop:"approveResult"},{default:s(()=>[a(T,{width:"150px",class:"width100 marginBottom10",modelValue:r(w).approveResult,"onUpdate:modelValue":t[4]||(t[4]=e=>r(w).approveResult=e)},{default:s(()=>[a(p,{label:"同意",value:0}),a(p,{label:"拒绝",value:1})]),_:1},8,["modelValue"])]),_:1}),a(c,{label:"审批意见",prop:"approveSuggestion"},{default:s(()=>[a(d,{modelValue:r(w).approveSuggestion,"onUpdate:modelValue":t[5]||(t[5]=e=>r(w).approveSuggestion=e)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])):x("",!0)]),_:1},8,["modelValue","title"]),u("div",Oe,[Le,a(T,{class:"width180",modelValue:V.value,"onUpdate:modelValue":t[8]||(t[8]=e=>V.value=e),clearable:"",onClear:t[9]||(t[9]=e=>v())},{default:s(()=>[(h(!0),P(A,null,B(J.value,e=>(h(),q(p,{key:e.id,label:e.projectName,value:e.projectName,onClick:t[7]||(t[7]=C=>v())},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),u("div",Je,[a(Te,{modelValue:O.value,"onUpdate:modelValue":t[14]||(t[14]=e=>O.value=e),type:"card",class:"demo-tabs"},{default:s(()=>[a(ie,{label:"任务管理",name:"first"},{default:s(()=>[a(ne,{data:r(L),"header-row-class-name":"table-header"},{default:s(()=>[a(n,{label:"序号",type:"index",width:"120",align:"center"}),a(n,{prop:"projectName",label:"项目名称",width:"120",align:"center"}),a(n,{prop:"taskName",label:"任务名称",width:"180",align:"center"}),a(n,{prop:"endTime",label:"结束日期",width:"120",align:"center"},{default:s(({row:e})=>[b(f(e.endTime==="2099-12-31 00:00:00"?"长期项目":z(e.endTime,"a")),1)]),_:1}),a(n,{prop:"performanceHours",label:"绩效工时",width:"120",align:"center"}),a(n,{prop:"handlePeople",label:"处理人",width:"120",align:"center"}),a(n,{prop:"feedbackTime",label:"反馈时间",width:"180",align:"center"},{default:s(({row:e})=>[b(f(z(e.feedbackTime,"a")),1)]),_:1}),a(n,{prop:"realTaskHours",label:"实际工时",width:"120",align:"center"},{default:s(({row:e})=>[b(f(e.realTaskHours?(e.realTaskHours/60).toFixed(1):0),1)]),_:1}),a(n,{prop:"taskStatus",label:"任务状态",width:"120",align:"center"},{default:s(({row:e})=>[u("div",{style:de({background:ae(e.taskStatus),color:"white",padding:"5px",borderRadius:"20px"})},f(te(e.taskStatus)),5)]),_:1}),a(n,{label:"操作",align:"center"},{default:s(({row:e})=>[u("a",{class:"pointer marginRight20",onClick:C=>se(e.taskid)},"查看",8,Ee),e.taskStatus===0?(h(),P("a",{key:0,class:"pointer marginRight20",onClick:C=>he(e.taskAdminId)},"开始",8,Ye)):x("",!0),e.taskStatus!=2?(h(),P("a",{key:1,class:"pointer marginRight20",onClick:C=>U("finish","",e.taskAdminId)},"完成",8,Ge)):x("",!0),u("a",{class:"pointer marginRight20",onClick:C=>U("feedback",e.taskid,e.taskAdminId,e.handlePeopleId,e.projectName)},"反馈",8,Ke)]),_:1})]),_:1},8,["data"]),u("div",Qe,[a(ue,{"current-page":_.value.currentPage,"onUpdate:currentPage":t[10]||(t[10]=e=>_.value.currentPage=e),"page-size":_.value.pageSize,"onUpdate:pageSize":t[11]||(t[11]=e=>_.value.pageSize=e),layout:"prev,next,slot,jumper",total:_.value.totalResult,onSizeChange:Z,onCurrentChange:ee},{default:s(()=>[u("span",We,[u("span",Xe,"第"+f(_.value.currentPage)+" / "+f(_.value.totalPage)+"页",1)])]),_:1},8,["current-page","page-size","total"]),a(H,{size:"small",class:"list-pagepno"},{default:s(()=>[b("跳转")]),_:1})])]),_:1}),a(ie,{label:"任务审核",name:"fourth"},{label:s(()=>[u("span",null,[b(" 任务审核 "),a(we,{value:Y.value},null,8,["value"])])]),default:s(()=>[a(ne,{data:E.value,"header-row-class-name":"table-header"},{default:s(()=>[a(n,{label:"序号",type:"index",width:"120",align:"center"}),a(n,{prop:"projectName",label:"项目名称",width:"120",align:"center"}),a(n,{prop:"taskName",label:"任务名称",width:"180",align:"center"}),a(n,{prop:"endTime",label:"结束日期",width:"120",align:"center"},{default:s(({row:e})=>[b(f(e.endTime==="2099-12-31 00:00:00"?"长期项目":z(e.endTime,"a")),1)]),_:1}),a(n,{prop:"performanceHours",label:"绩效工时",width:"120",align:"center"}),a(n,{prop:"handlePeople",label:"处理人",width:"120",align:"center"}),a(n,{prop:"feedbackTime",label:"反馈时间",width:"180",align:"center"},{default:s(({row:e})=>[b(f(z(e.feedbackTime,"a")),1)]),_:1}),a(n,{prop:"realTaskHours",label:"实际工时",width:"120",align:"center"},{default:s(({row:e})=>[b(f(e.realTaskHours?(e.realTaskHours/60).toFixed(1):0),1)]),_:1}),a(n,{prop:"taskStatus",label:"任务状态",width:"120",align:"center"},{default:s(({row:e})=>[u("div",{style:de({background:ae(e.taskStatus),color:"white",padding:"5px",borderRadius:"20px"})},f(te(e.taskStatus)),5)]),_:1}),a(n,{label:"操作",align:"center"},{default:s(({row:e})=>[u("a",{class:"pointer marginRight20",onClick:C=>se(e.taskid)},"查看",8,Ze),u("a",{class:"pointer marginRight20",onClick:C=>U("verify",e.taskid,e.taskAdminId)},"审核",8,ea)]),_:1})]),_:1},8,["data"]),u("div",aa,[a(ue,{"current-page":S.value.currentPage,"onUpdate:currentPage":t[12]||(t[12]=e=>S.value.currentPage=e),"page-size":S.value.pageSize,"onUpdate:pageSize":t[13]||(t[13]=e=>S.value.pageSize=e),layout:"prev,next,slot,jumper",total:S.value.totalResult,onSizeChange:Z,onCurrentChange:ee},{default:s(()=>[u("span",ta,[u("span",la,"第"+f(S.value.currentPage)+" / "+f(S.value.totalPage)+"页",1)])]),_:1},8,["current-page","page-size","total"]),a(H,{size:"small",class:"list-pagepno"},{default:s(()=>[b("跳转")]),_:1})])]),_:1})]),_:1},8,["modelValue"])])])}}}),da=Fe(sa,[["__scopeId","data-v-bdfa603b"]]);export{da as default};
