import{d as be,a as n,u as Ve,A as Se,o as we,c as _,e as y,f as u,g as l,y as A,B as L,w as r,i as b,F as O,q as B,s as q,k as d,v as S,x as Pe,p as ye,l as Ce}from"./index-BWmkGPbr.js";import{_ as F}from"./request-n0PvVXHT.js";import{r as Ie,v as De,u as Me,a as xe}from"./index-CG6MTGQM.js";import{_ as ke}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./axios-B4uVmeYG.js";const C=z=>(ye("data-v-618936c3"),z=z(),Ce(),z),Te={class:"common-top"},Ee={class:"common-top-List"},Ne=C(()=>u("span",{class:"common-top-text"},"项目名称：",-1)),ze=C(()=>u("span",{class:"common-top-text"},"开始日期：",-1)),Ue=C(()=>u("span",{class:"common-top-text"},"结束日期：",-1)),Ae=C(()=>u("span",{class:"common-top-text"},"里程碑：",-1)),Le=C(()=>u("span",{class:"common-top-text"},"项目类别：",-1)),Oe=C(()=>u("span",{class:"common-top-text"},"项目状态：",-1)),Be={class:"common-top-List"},qe={class:"common-top-buttonList"},Fe={class:"common-contain"},$e={class:"common-contain-item"},Re={class:"common-contain-item"},We=["onClick"],He=["onClick"],Je={class:"page"},Ye={class:"list-pnoSpan"},Ge={class:"list-pagesize"},Ke=be({__name:"index",setup(z){let I=n(""),D=n("");const $=n(),R=n(),K=n(),W=n(),H=n(),w=n(""),Q=n(),M=n(""),x=n(""),k=n(""),T=n("");let h=n(""),f=n("");const ee=n(),J=n(),P=n(""),Y=n(),G=n(),X=localStorage.getItem("userInfo"),Z=n();if(X){const a=JSON.parse(X);Z.value=a.loginUserId}const p=n({currentPage:0,pageSize:0,totalPage:0,totalResult:0}),E=Ve(),te=n(),ae=()=>{E.push({path:"/addTask",query:{id:"create"}})};Se(()=>{});const le=(a,e)=>a.find(s=>s.projectVersion===e).indexMilestoneVOList,j=async()=>{let a=await Ie(p.value.currentPage,h.value,M.value,x.value,k.value,T.value,f.value,w.value,P.value);a.code==0&&($.value=a.showAllProject.list,p.value=a.showAllProject.pageInfo,R.value=a.showAllProject.versionStatus,W.value=a.showAllProject.milestoneStatus,H.value=a.showAllProject.projectType,G.value=a.showAllProject.projectStatus,te.value=Object.keys(W.value||{}).map(e=>({value:Number(e),label:W.value[e]})),Q.value=Object.keys(H.value||{}).map(e=>({value:Number(e),label:H.value[e]})),K.value=Object.keys(R.value||{}).map(e=>({value:Number(e),label:R.value[e]})),Y.value=Object.keys(G.value||{}).map(e=>({value:Number(e),label:G.value[e]})),$.value.forEach(e=>{e.indexVersionVOS.forEach(o=>{o.projectVersionLabel=K.value.find(s=>s.value==o.projectVersion).label,o.indexMilestoneVOList.forEach(s=>{s.milestoneLabel=s.projectMilestone})})}))};we(()=>{if((localStorage.getItem("originFlag")?localStorage.getItem("originFlag"):"")==="1"){const e=JSON.parse(localStorage.getItem("localDate")||"");p.value.currentPage=e.currentPage,h.value=e.projectName,M.value=e.selectedStartDate,x.value=e.selectedEndDate,k.value=e.selectedEStartDate,T.value=e.selectedEEndDate,f.value=e.projectMilestone,w.value=e.projectVersion,P.value=e.projectStatus,localStorage.removeItem("localDate"),localStorage.removeItem("originFlag")}else j();j()});const U=()=>{const a={currentPage:p.value.currentPage,projectName:h.value,selectedStartDate:M.value,selectedEndDate:x.value,selectedEStartDate:k.value,selectedEEndDate:T.value,projectMilestone:f.value,projectVersion:w.value,projectStatus:P.value};localStorage.setItem("localDate",JSON.stringify(a))},V=(a,e)=>{var o=new Date(a),s=o.getFullYear(),v=o.getMonth()+1,m=o.getDate(),g=o.getHours(),i=o.getMinutes(),N=o.getSeconds();return a?e=="all"?s+"-"+(v.toString().length>1?v:"0"+v)+"-"+(m.toString().length>1?m:"0"+m)+" "+(g.toString().length>1?g:"0"+g)+":"+(i.toString().length>1?i:"0"+i)+":"+(N.toString().length>1?N:"0"+N):s+"-"+(v.toString().length>1?v:"0"+v)+"-"+(m.toString().length>1?m:"0"+m):""},oe=a=>{console.log(`${a} items per page`)},ne=()=>{j()},se=async a=>{let e=await De(a);e.code==0&&(J.value=e.projectVersions,ee.value=Object.keys(J.value||{}).map(o=>({value:Number(o),label:J.value[o]})))},re=a=>({1:"内部项目",2:"外部项目"})[a],ue=()=>{U(),E.push({path:"/addProject",query:{id:"create",activeIndex:"/allProject"}})},ce=()=>{U(),E.push({path:"/addProject",query:{id:"complete",activeIndex:"/allProject"}})},ie=a=>{U(),E.push({path:"/addProject",query:{id:"read",proId:a,activeIndex:"/allProject"}})},de=a=>{U(),E.push({path:"/addProject",query:{id:"edit",proId:a,activeIndex:"/allProject"}})},pe=a=>{M.value=V(a[0],"all"),x.value=V(a[1],"all")},ve=a=>{k.value=V(a[0],"all"),T.value=V(a[1],"all")},me=()=>{j()},ge=()=>{h.value="",M.value="",x.value="",k.value="",T.value="",I.value="",D.value="",f.value="",w.value="",P.value=""},_e=a=>{if(a)return Y.value.find(o=>o.value===a).label},he=async a=>{const e=a.projectId,o=a.nowVersion;let s=await Me(e,o);s.code==0?(F({type:"success",message:s.errMsg}),j()):(F({type:"error",message:s.errMsg}),j())},fe=async a=>{const e=a.projectId,o=a.nowMilestone;let s=await xe(e,o);s.code==0?(F({type:"success",message:s.errMsg}),j()):(F({type:"error",message:s.errMsg}),j())};return(a,e)=>{const o=b("el-input"),s=b("el-date-picker"),v=b("el-option"),m=b("el-select"),g=b("el-button"),i=b("el-table-column"),N=b("el-table"),je=b("el-pagination");return _(),y("div",null,[u("div",Te,[u("div",Ee,[Ne,l(o,{class:"common-top-input",placeholder:"请输入",modelValue:A(h),"onUpdate:modelValue":e[0]||(e[0]=t=>L(h)?h.value=t:h=t)},null,8,["modelValue"]),ze,l(s,{class:"width180",modelValue:A(I),"onUpdate:modelValue":e[1]||(e[1]=t=>L(I)?I.value=t:I=t),type:"daterange","start-placeholder":"请选择时间","end-placeholder":"请选择时间","default-value":[new Date(2024,2,1),new Date(2024,3,1)],onChange:pe,clearable:!1},null,8,["modelValue","default-value"]),Ue,l(s,{class:"width180",modelValue:A(D),"onUpdate:modelValue":e[2]||(e[2]=t=>L(D)?D.value=t:D=t),type:"daterange","start-placeholder":"请选择时间","end-placeholder":"请选择时间","default-value":[new Date(2024,2,1),new Date(2024,3,1)],onChange:ve,clearable:!1},null,8,["modelValue","default-value"]),Ae,l(o,{class:"common-top-input",placeholder:"请输入",modelValue:A(f),"onUpdate:modelValue":e[3]||(e[3]=t=>L(f)?f.value=t:f=t)},null,8,["modelValue"]),Le,l(m,{class:"width180",modelValue:w.value,"onUpdate:modelValue":e[4]||(e[4]=t=>w.value=t)},{default:r(()=>[(_(!0),y(O,null,B(Q.value,t=>(_(),q(v,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),Oe,l(m,{class:"width180",modelValue:P.value,"onUpdate:modelValue":e[5]||(e[5]=t=>P.value=t)},{default:r(()=>[(_(!0),y(O,null,B(Y.value,t=>(_(),q(v,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),u("div",Be,[u("div",qe,[l(g,{class:"borBlue_fontBlue",size:"small",onClick:me},{default:r(()=>[d("查询")]),_:1}),l(g,{class:"bgBlue_fontWhite",size:"small",onClick:ge},{default:r(()=>[d("重置")]),_:1})])])]),u("div",Fe,[u("div",$e,[l(g,{size:"small",class:"bgBlue_fontWhite",onClick:e[6]||(e[6]=t=>ue())},{default:r(()=>[d("新增立项")]),_:1}),l(g,{size:"small",class:"bgBlue_fontWhite",onClick:e[7]||(e[7]=t=>ce())},{default:r(()=>[d("新增结项")]),_:1}),l(g,{size:"small",class:"bgBlue_fontWhite",onClick:e[8]||(e[8]=t=>ae())},{default:r(()=>[d("创建任务")]),_:1})]),u("div",Re,[l(N,{data:$.value,"header-row-class-name":"table-header"},{default:r(()=>[l(i,{prop:"projectCode",label:"项目编号",width:"120",align:"center"}),l(i,{prop:"projectName",label:"项目名称",width:"160",align:"center"}),l(i,{prop:"projectType",label:"项目类别",width:"120",align:"center"},{default:r(({row:t})=>[d(S(re(t.projectType)),1)]),_:1}),l(i,{prop:"createPeople",label:"创建人",width:"120",align:"center"}),l(i,{prop:"createTime",label:"创建日期",width:"180",align:"center"},{default:r(({row:t})=>[d(S(V(t.createTime,"a")),1)]),_:1}),l(i,{prop:"startTime",label:"开始日期",width:"180",align:"center"},{default:r(({row:t})=>[d(S(V(t.startTime,"a")),1)]),_:1}),l(i,{prop:"endTime",label:"结束日期",width:"180",align:"center"},{default:r(({row:t})=>[d(S(t.endTime==="2099-12-31 00:00:00"?V(t.endTime,"a"):"长期项目"),1)]),_:1}),l(i,{prop:"projectStatus",label:"项目状态",align:"center"},{default:r(({row:t})=>[d(S(_e(t.projectStatus)),1)]),_:1}),l(i,{prop:"nowVersion",label:"项目版本",width:"180",align:"center"},{default:r(t=>[l(m,{onClick:c=>se(t.row.projectId),onChange:c=>he(t.row),class:"width90",modelValue:t.row.nowVersion,"onUpdate:modelValue":c=>t.row.nowVersion=c},{default:r(()=>[(_(!0),y(O,null,B(t.row.indexVersionVOS,c=>(_(),q(v,{key:c.projectVersion,label:c.projectVersionLabel,value:c.projectVersion},null,8,["label","value"]))),128))]),_:2},1032,["onClick","onChange","modelValue","onUpdate:modelValue"])]),_:1}),l(i,{prop:"nowMilestone",label:"里程碑",width:"180",align:"center"},{default:r(t=>[l(m,{onChange:c=>fe(t.row),class:"width120",modelValue:t.row.nowMilestone,"onUpdate:modelValue":c=>t.row.nowMilestone=c},{default:r(()=>[(_(!0),y(O,null,B(le(t.row.indexVersionVOS,t.row.nowVersion),c=>(_(),q(v,{key:c.projectMilestone,label:c.milestoneLabel,value:c.projectMilestone},null,8,["label","value"]))),128))]),_:2},1032,["onChange","modelValue","onUpdate:modelValue"])]),_:1}),l(i,{label:"操作",width:"180",align:"center"},{default:r(({row:t})=>[u("a",{class:"color-blue pointer",onClick:c=>ie(t.projectId)},"查看",8,We),d("  "),Z.value==t.createPeopleId?(_(),y("a",{key:0,class:"color-blue pointer",onClick:c=>de(t.projectId)},"编辑",8,He)):Pe("",!0)]),_:1})]),_:1},8,["data"])])]),u("div",Je,[l(je,{"current-page":p.value.currentPage,"onUpdate:currentPage":e[9]||(e[9]=t=>p.value.currentPage=t),"page-size":p.value.pageSize,"onUpdate:pageSize":e[10]||(e[10]=t=>p.value.pageSize=t),layout:"prev,next,slot,jumper",total:p.value.totalResult,onSizeChange:oe,onCurrentChange:ne},{default:r(()=>[u("span",Ye,[u("span",Ge,"第"+S(p.value.currentPage)+" / "+S(p.value.totalPage)+"页",1)])]),_:1},8,["current-page","page-size","total"]),l(g,{size:"small",class:"list-pagepno"},{default:r(()=>[d("跳转")]),_:1})])])}}}),at=ke(Ke,[["__scopeId","data-v-618936c3"]]);export{at as default};
